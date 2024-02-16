/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/n5PcaL2qzZg
 */
 import { CardTitle, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
 import { Button } from "@/components/ui/button"
 import { Header } from "@/components/header"
 
 export function Vote() {
   return (
    <div>
        <Header />
        <div className="bg-gray-1000 py-12">
       <div className="container px-4">
         <div className="grid gap-6 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-3 items-start">
           <Card>
             <div className="flex flex-col h-full">
               <CardContent className="flex-1">
                 <div className="flex justify-center items-center h-[200px]">
                   <img
                     alt="Image"
                     className="rounded-full"
                     height="150"
                     src="/placeholder.svg"
                     style={{
                       aspectRatio: "150/150",
                       objectFit: "cover",
                     }}
                     width="150"
                   />
                 </div>
                 <div className="text-center pt-4 pb-2">
                   <CardTitle>Liberty Party</CardTitle>
                   <CardDescription>Empowering the people for a brighter future.</CardDescription>
                 </div>
               </CardContent>
               <CardFooter className="flex justify-center">
                 <Button className="w-1/2 bg-black text-white" variant="outline">
                   Vote
                 </Button>
               </CardFooter>
             </div>
           </Card>
           <Card>
             <div className="flex flex-col h-full">
               <CardContent className="flex-1">
                 <div className="flex justify-center items-center h-[200px]">
                   <img
                     alt="Image"
                     className="rounded-full"
                     height="150"
                     src="/placeholder.svg"
                     style={{
                       aspectRatio: "150/150",
                       objectFit: "cover",
                     }}
                     width="150"
                   />
                 </div>
                 <div className="text-center pt-4 pb-2">
                   <CardTitle>Progress Party</CardTitle>
                   <CardDescription>Building a better tomorrow for all citizens.</CardDescription>
                 </div>
               </CardContent>
               <CardFooter className="flex justify-center">
                 <Button className="w-1/2 bg-black text-white" variant="outline">
                   Vote
                 </Button>
               </CardFooter>
             </div>
           </Card>
           <Card>
             <div className="flex flex-col h-full">
               <CardContent className="flex-1">
                 <div className="flex justify-center items-center h-[200px]">
                   <img
                     alt="Image"
                     className="rounded-full"
                     height="150"
                     src="/placeholder.svg"
                     style={{
                       aspectRatio: "150/150",
                       objectFit: "cover",
                     }}
                     width="150"
                   />
                 </div>
                 <div className="text-center pt-4 pb-2">
                   <CardTitle>Unity Party</CardTitle>
                   <CardDescription>Bringing harmony and progress to our nation.</CardDescription>
                 </div>
               </CardContent>
               <CardFooter className="flex justify-center">
                 <Button className="w-1/2 bg-black text-white" variant="outline">
                   Vote
                 </Button>
               </CardFooter>
             </div>
           </Card>
           <Card>
             <div className="flex flex-col h-full">
               <CardContent className="flex-1">
                 <div className="flex justify-center items-center h-[200px]">
                   <img
                     alt="Image"
                     className="rounded-full"
                     height="150"
                     src="/placeholder.svg"
                     style={{
                       aspectRatio: "150/150",
                       objectFit: "cover",
                     }}
                     width="150"
                   />
                 </div>
                 <div className="text-center pt-4 pb-2">
                   <CardTitle>New Party</CardTitle>
                   <CardDescription>Leading the way with innovative ideas.</CardDescription>
                 </div>
               </CardContent>
               <CardFooter className="flex justify-center">
                 <Button className="w-1/2 bg-black text-white" variant="outline">
                   Vote
                 </Button>
               </CardFooter>
             </div>
           </Card>
           <Card>
             <div className="flex flex-col h-full">
               <CardContent className="flex-1">
                 <div className="flex justify-center items-center h-[200px]">
                   <img
                     alt="Image"
                     className="rounded-full"
                     height="150"
                     src="/placeholder.svg"
                     style={{
                       aspectRatio: "150/150",
                       objectFit: "cover",
                     }}
                     width="150"
                   />
                 </div>
                 <div className="text-center pt-4 pb-2">
                   <CardTitle>Future Party</CardTitle>
                   <CardDescription>Innovating for a better tomorrow.</CardDescription>
                 </div>
               </CardContent>
               <CardFooter className="flex justify-center">
                 <Button className="w-1/2 bg-black text-white" variant="outline">
                   Vote
                 </Button>
               </CardFooter>
             </div>
           </Card>
         </div>
       </div>
     </div>
    </div>
     
   )
 }
 export default Vote;