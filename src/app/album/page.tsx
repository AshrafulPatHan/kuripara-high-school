"use client"

// import { motion } from "motion/react"
import { motion } from "framer-motion";
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
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [ApiUrl]);

   // set loading
   if (event.length === 0) {
      return <div className="flex flex-col items-center justify-center h-screen">
            <div className="h-10 w-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
        </div>
   };


   return(
      <div>
        <Navbar/>
        <div className="flex flex-col items-center max-w-screen overflow-hidden mb-20 ">
            <div  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center mt-10 md:mt-20">
                {event.map((even)=>(
                <div key={even._id} >
                    <motion.div
                         whileHover={{ y: -7 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-[98vw] sm:w-[350px] h-auto sm:h-[650px] bg-gradient-to-b from-[#dbd9d9] to-[#387ab8] p-4 
                        flex flex-col items-center ">
                        <div className="">
                            <Image src={even.Photo} width={500} height={500}  alt="events photo" className=" w-[90vw] md:w-[300px] sm:h-[300px] object-cover " />
                        </div>
                        <div className="flex flex-col justify-center w-[300px] ">
                            <h3 className="text-lg font-semibold text-center">{even.Title}</h3>
                            <p className="mt-1 text-[#00000094] ">{even.Data}</p>
                            <p>{even.Description}</p>
                        </div>
                    </motion.div>
                </div>
                ))}
            </div>
        </div>
        <Footer/>
      </div>
   )
}