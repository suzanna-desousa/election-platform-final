// controllers/CandidateController.ts

import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import { CandidateModel } from '@/models/CandidateModel';
import { useEffect, useState } from 'react';

const calculatePercentage = (candidatesData: CandidateModel[]) => {
  const totalVotes = candidatesData.reduce((sum, candidate) => sum + candidate.votes, 0);
  return candidatesData.map((candidate) => ({
    ...candidate,
    percentage: (candidate.votes / totalVotes) * 100,
  }));
};

const fetchData = async () => {
  try {
    const candidatesCollection = collection(db, 'candidates');
    const querySnapshot = await getDocs(candidatesCollection);

    const candidatesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      image: doc.data().image,
      votes: doc.data().votes,
      percentage: 0,
    }));

    const candidatesWithPercentage = calculatePercentage(candidatesData);
    return candidatesWithPercentage;
  } catch (error) {
    console.error('Error fetching candidates data:', error);
    return [];
  }
};

const CandidateController = () => {
  const [candidates, setCandidates] = useState<CandidateModel[]>([]);

  useEffect(() => {
    const fetchDataAndSetCandidates = async () => {
      const candidatesWithPercentage = await fetchData();
      setCandidates(candidatesWithPercentage);
    };

    fetchDataAndSetCandidates();
  }, []);

  return candidates;
};

export default CandidateController;
