/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XcCpSGcmWbu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 /**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/XcCpSGcmWbu
 */
"use client";
  import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
  import Progress from "@/components/ui/progressbar"
  import Image from 'next/image';
  import { getFirestore, collection, getDocs } from 'firebase/firestore';
  import {db} from '@/app/firebase/config'
  import { useEffect, useState } from 'react';

  interface Candidate {
    id: string;
    name: string;
    imageSrc: string;
    votes: number;
    percentage: number;
  }
  
  const LivePoll = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const candidatesCollection = collection(db, 'candidates');
          const querySnapshot = await getDocs(candidatesCollection);
  
          const candidatesData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            imageSrc: doc.data().imageSrc,
            votes: doc.data().votes,
            percentage: 0,  // You can set it to 0 initially and update it later
          }));
  
          // Calculate the percentage or any other relevant data here
          const totalVotes = candidatesData.reduce((sum, candidate) => sum + candidate.votes, 0);
          const candidatesWithPercentage = candidatesData.map((candidate) => ({
            ...candidate,
            percentage: (candidate.votes / totalVotes) * 100,
          }));
  
          setCandidates(candidatesWithPercentage);
        } catch (error) {
          console.error('Error fetching candidates data:');
        }
      };
  
      fetchData();
    }, []); // Empty dependency array to fetch data only once when the component mounts
  
    return (
      <div className="flex flex-col w-full items-center space-y-4">
        <div className="w-full max-w-sm">
          <Card>
            <CardHeader className="flex flex-col gap-1">
              <CardTitle>Who should win the election?</CardTitle>
              <CardDescription>Cast your vote for the best candidate!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {candidates.map((candidate, index) => (
                <div className="flex flex-col gap-0.5" key={index}>
                  <div className="flex justify-between items-center">
                    <div>{candidate.name}</div>
                    <span className="text-xs font-semibold">{`${candidate.percentage.toFixed(2)}%`}</span>
                  </div>
                  <Progress value={candidate.percentage} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };
  
  export default LivePoll;