"use client"
import Image from "next/image";
import Student from '@/assets/image/school/student.webp'
import Events1 from '@/assets/image/school/full.jpg'
import Events2 from '@/assets/image/school/Br_M.jpg'
import Events3 from '@/assets/image/school/Ssc.jpg'
import Events4 from '@/assets/image/school/21_A_F_misel.jpg'
import Events5 from '@/assets/image/school/minar.jpg'
import Event_data from '@/api/json/Event.json'
import { useEffect, useState } from "react";


export default function Events() {
   const [event,setEvent] = useState<EventType[]>([])

   // set event type
   type EventType = {
   Id: number;
   Short_description: string;
   Long_description: string;
   Photo: string;
   Date: string;
   };

   // fetch Event data
   useEffect(()=>{
      // set the json file
      setEvent(Event_data)
   },[]);

   // set loading
   if (event.length === 0) {
      return <p>Loading ...</p>
   };

   // divide into 2 section
   const [first , ...rest] = event;
   // divide into 2 section
   const [second, ...next] = rest;

   return(
      <div className="flex justify-center mt-20">
         <div className="flex flex-col lg:flex-row gap-5 ">
            <div>
               <nav className="flex flex-row items-center justify-between mb-4 bg-[#f8f4f4] rounded-[8px] p-3 w-[92vw] lg:w-[60vw] xl:w-[821px] ">
                  <h4>Latest Event</h4>
                  <button className="bg-amber-600 p-2 rounded-xl">
                     View All Event
                  </button>
               </nav>
               <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex flex-col bg-[#f8f4f4] w-[97vw] lg:w-[28vw] xl:w-[400px] p-6 rounded-2xl items-center  ">
                     <div>
                        <div>
                           <Image src={first.Photo} alt="events" width={350} height={350} className="w-[99vw]  xl:w-[350px] " />
                        </div>
                        <div>
                           <p>lorem</p>
                           <button>lorem</button>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col bg-[#f8f4f4] w-[97vw] lg:w-[28vw] xl:w-[400px] p-6 rounded-2xl items-center  ">
                     <div>
                        <div>
                           <Image src={second.Photo} alt="events" width={350} height={350} className="w-[99vw]  xl:w-[350px] " />
                        </div>
                        <div>
                           <p>lorem</p>
                           <button>lorem</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="flex flex-col bg-[#f8f4f4] rounded-2xl w-[97vw] md:w-[375px] ">
                  <div className="bg-amber-200 rounded-t-2xl text-center py-2 text-2xl font-semibold ">
                     Events
                  </div>
                  {next.map((even)=>(
                  <div key={even.Id} className="flex flex-col items-center p-6 ">
                     <div className="flex gap-4 ">
                        <div>
                           <Image src={even.Photo} alt="event" width={100} height={100} className="w-[100px] h-[100px] object-cover rounded-full " />
                        </div>
                        <div>
                           <h3>name</h3>
                           <p>date</p>
                           <button>View Details</button>
                        </div>
                     </div>
                     <hr className="w-[100%] mt-6 mb-6 "/>
                  </div>
                  ))}
                  <div className="flex flex-col items-end pb-6 px-6">
                     <button className="border py-3 px-6 ">
                        View All
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}