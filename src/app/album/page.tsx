"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";


export default function Album() {
   const [event,setEvent] = useState<EventType[]>([])

   // set event type
   type EventType = {
   _id: number;
   Title: string;
   Description: string;
   Photo: string;
   Data: string;
   };

   const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
 // fetch data
    useEffect(() => {
        fetch(`${ApiUrl}/all-photo`)
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
            <div  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center mt-10 md:mt-20">
                {event.map((even)=>(
                <div key={even._id} >
                    <div className="w-[98vw] sm:w-[350px] h-auto sm:h-[650px] bg-gradient-to-b from-[#dbd9d9] to-[#387ab8] p-4 
                    flex flex-col items-center ">
                        <div className="">
                            <Image src={even.Photo} width={500} height={500}  alt="events photo" className=" w-[90vw] md:w-[300px] sm:h-[300px] object-cover " />
                        </div>
                        <div className="flex flex-col justify-center w-[300px] ">
                            <h3 className="text-lg font-semibold text-center">{even.Title}</h3>
                            <p className="mt-1 text-[#00000094] ">{even.Data}</p>
                            <p>{even.Description}</p>
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