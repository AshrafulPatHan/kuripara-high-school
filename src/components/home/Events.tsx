"use client"

import { motion, useInView } from "motion/react"
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Events() {

   // other
   const [event,setEvent] = useState<EventType[]>([])
   const router = useRouter();

   // set event type
   type EventType = {
   _id: number;
   Title: string;
   Description: string;
   Photo: string;
   Data: string;
   };

   const ApiUrl = process.env.NEXT_PUBLIC_API_NEXT_SERVER;
 // fetch data
    useEffect(() => {
        fetch(`${ApiUrl}/api/public/events/latest-album`)
        .then((res) => res.json())
        .then((data) => {
            setEvent(data);
            // setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            // setLoading(false);
        });
    }, [ApiUrl]);

   // set loading
   if (event.length === 0) {
      return <p>Loading ...</p>
   };

   // divide into 2 section
   const [first , ...rest] = event;
   // divide into 2 section
   const [second, ...next] = rest;

const handleViewDetailsMap = (even:any) => {
   const query = new URLSearchParams({
   id: String(even._id),
   Title: even.Title,
   Description: even.Description,
   Photo: even.Photo,
   Data: even.Data,
   }).toString();

   router.push(`/event-details?${query}`);
};


   return(
      <div className="flex justify-center mt-20 mb-20">
         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
            <div>
               <nav className="flex flex-row items-center justify-between mb-4 bg-[#f8f4f4] rounded-[8px] p-3 w-[97vw] lg:w-[60vw] xl:w-[821px] ">
                  <h4 className="font-semibold text-xl">Latest Event</h4>
                  <Link href='/album' className="bg-amber-200 p-3 text-sm font-bold hover:underline cursor-pointer rounded-lg">
                     View All Event
                  </Link>
               </nav>
               <div className="flex flex-col lg:flex-row gap-5">
                  {/* image card 1 */}
                  <div className="flex flex-col bg-[#f8f4f4] w-[97vw] lg:w-[28vw] xl:w-[400px] p-6 rounded-2xl items-center  ">
                     <div className="w-[99%]  xl:w-[350px] rounded-lg  overflow-hidden group">
                        <Image src={first.Photo} alt="events" width={850} height={750} className="object-cover rounded-lg w-full h-full transition-transform duration-300 group-hover:scale-105 " />
                     </div>
                     <div>
                        <p className="text-lg font-bold mb-2 mt-1">{first.Title}</p>
                        <p>{first.Description}</p>
                     </div>
                  </div>
                  {/* image card2 */}
                  <div className="flex flex-col bg-[#f8f4f4] w-[97vw] lg:w-[28vw] xl:w-[400px] p-6 rounded-lg items-center  ">
                     <div className="w-[99%]  xl:w-[350px] rounded-lg  overflow-hidden group">
                        <Image src={second.Photo} alt="events" width={850} height={750} className=" object-cover rounded-lg w-full h-full transition-transform duration-300 group-hover:scale-105  " />
                     </div>
                     <div>
                        <p className="text-lg font-bold mb-2 mt-1">{second.Title}</p>
                        <p>{second.Description}</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex flex-col bg-[#f8f4f4] rounded-2xl w-[97vw] md:w-[375px] ">
               <div className="bg-amber-200 rounded-t-2xl text-center py-2 text-2xl font-semibold ">
                  Events
               </div>
               {next.map((even)=>(
               <div key={even._id} className="flex flex-col items-center px-6 py-3 ">
                  <div className="flex gap-4 ">
                     <div className="w-[100px] h-[100px] rounded-full overflow-hidden group">
                        <Image src={even.Photo} alt="event" width={300} height={300} className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110 " />
                     </div>
                     <div className="w-[60%] ">
                        <h3>
                           {even.Title.split(" ").slice(0, 10).join(" ")}
                           {even.Title.split(" ").length > 10 ? "..." : ""}
                        </h3>
                        <p className="mb-1 text-[#000000b7] ">{even.Data}</p>
                        <button className="border p-2 rounded-lg text-sm cursor-pointer"
                        onClick={()=>{handleViewDetailsMap(even)}}
                        >
                           View Details
                        </button>
                     </div>
                  </div>
                  <hr className="w-[100%] mt-2 mb-2 "/>
               </div>
               ))}
               <div className="flex flex-col items-end pb-6 px-6">
                  <Link href='/album' className="bg-amber-200 p-3 text-sm font-bold hover:underline cursor-pointer rounded-lg">
                     View All Event
                  </Link >
               </div>
            </div>
         </div>
      </div>
   )
}