/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/fys31EXTsov
 */
 "use client";
 import { Label } from "@/components/ui/label"
 import { Input } from "@/components/ui/input"
 import { Button } from "@/components/ui/button"
 import { Separator } from "@/components/ui/separator"
 import Link from "next/link"
 import { JSX, useState } from "react"
 import { Header } from "@/components/header"
 import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
 
 export function LogIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter()

  const handleLogIn = async () => {
    try {

        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});
        setEmail('');
        setPassword('');
        alert("Successfully logged in.")
        router.push('/vote')

    }catch(e){
        console.error(e)
    }
  };
  
   return (
     <div>
        <Header />
        <div className="mx-auto max-w-[350px] space-y-6">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-gray-500 dark:text-gray-400">Enter your details to register.</p>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="m@example.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="space-y-2 relative">
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                        <Input id="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                </div>
                <Button className="w-full" type="button" onClick={handleLogIn}>
                Login
                </Button>
            </div>
            <Separator className="mb-0" />
            <div className="space-y-2 text-center">
                <p className="text-sm">
                Not a registered voter?
                <Link className="underline" href="/sign-up">
                    Register
                </Link>
                </p>
            </div>
        </div>
     </div> 
   )
 }

 export default LogIn;
 