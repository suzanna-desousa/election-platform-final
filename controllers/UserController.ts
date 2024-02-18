// controllers/UserController.ts

import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, db } from '@/app/firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { getDoc, getDocs, query, where, doc } from 'firebase/firestore';
import { signOut } from "firebase/auth";

export const useUserController = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least 1 capital letter.");
      return false;
    }

    if (!/\d/.test(password)) {
      alert("Password must contain at least 1 number.");
      return false;
    }

    return true;
  };

  const signUp = async () => {
    if (!validateEmail(email)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      return;
    }

    const domain = email.split("@")[1];

    try {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", "https://api.mailcheck.ai/domain/" + domain, false);
      xmlHttp.send();

      const response = xmlHttp.responseText;
      const mx = response.split(",")[2];
      const valid = "" + mx.split(":")[1];
      const searchString = "true";

      if (valid.includes(searchString)) {
        const res = await createUserWithEmailAndPassword(email, password);

        const docRef = await addDoc(collection(db, "users"), {
          email: email,
          voted: false,
        });

        alert("Successfully signed up.");
        router.push('/pages/log-in');
      } else {
        alert("Invalid email. Try again.");
      }
    } catch (error) {
      console.error("Error checking email validity:", error);
    }
  };

  const logIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);

      if (res !== undefined) {
        console.log('Authentication successful!', res.user);

        const email = res.user.email;

        try {
          const querySnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', email)));

          if (!querySnapshot.empty) {
            const userDocSnapshot = querySnapshot.docs[0];
            const firestoreUid = userDocSnapshot.id;

            const userDocRef = doc(db, 'users', firestoreUid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists() && userDoc.data()?.voted) {
              alert("You have already voted!");

              signOut(auth).then(() => {
                alert("You have been signed out.");
              }).catch((error) => {
                console.error("Error signing out:", error);
              });

              router.push('/');
            } else {
              router.push('/pages/vote');
            }

            setEmail('');
            setPassword('');

          } else {
            console.error('User document not found in Firestore for email:', email);
          }
        } catch (error) {
          console.error('Error fetching user document from Firestore:', error);
        }

      } else {
        alert('Authentication failed. Please try again.');
      }
    } catch (e) {
      if (typeof e === "object" && e) {
        console.log((e as { message: string }).message);
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    signUp,
    logIn,
  };
};
