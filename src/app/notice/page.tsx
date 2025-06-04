"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";


export default function Notices_Page() {
   const [event,setEvent] = useState<EventType[]>([])

   // set event type
   type EventType = {
   _id: number;
   Title: string;
   ShortDescription: string;
   Description: string;
   Photo: string;
   Data: string;
   };

   const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
 // fetch data
    useEffect(() => {
        fetch(`${ApiUrl}/all-notice`)
        .then((res) => res.json())
        .then((data) => {
            setEvent(data);
            // setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            // setLoading(false);
        });
    }, []);

   // set loading
   if (event.length === 0) {
      return <p>Loading ...</p>
   };

   // divide into 2 section
   const [first , ...rest] = event;
   // divide into 2 section
   const [second, ...next] = rest;

   return(
      <div>
        <Navbar/>
        <div className="flex flex-col items-center">
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center mt-10 md:mt-20">
                {event.map((even)=>(
                <div key={even._id} >
                    <div className="w-[98vw] sm:w-[350px] h-auto lg:h-[600px] bg-[#b6adad] p-4 ">
                        <div className="flex flex-col items-center justify-center">
                            <Image src={even.Photo} width={500} height={500}  alt="events photo" className="w-[300px] h-[300px] object-cover " />
                        </div>
                        <div className="flex flex-col items-center justify-center text-start">
                            <h3 className="text-lg font-semibold">{even.Title}</h3>
                            <p>{even.ShortDescription}</p>
                            <p className="mt-1 text-[#000000b7] ">{even.Data}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <Footer/>
      </div>
   )
}