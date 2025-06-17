"use client"

import Image from "next/image"
import Photo from "@/assets/image/school/student.webp"
import { useEffect, useState } from "react";


export default function AllEventsAdmin(){
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
        </div>;
   };

    // delete event
    const handelEditEvent = (id:any)=>{
        console.log(id);
    }
    
    // view details
    const handelViewDetails = (id:any) => {
        console.log(id);
    }


    return(
        <div>
            <div>
                {/* sorting and search */}
                <div></div>
                {/* all events */}
                <div className="flex flex-col items-center justify-center">
                    <h2>All Events Album</h2>
                    <div className="grid grid-cols-4 gap-7 ">
                        {event.map((data)=>(
                            <div key={data._id}>
                                <div className="flex flex-col gap-3 w-[300px]  ">
                                    <div>
                                        <Image src={data.Photo} alt="album photo" width={500} height={500} className="w-[300px] h-[240px] rounded-xl object-cover  " />
                                    </div>
                                    <div className="flex flex-col items-start gap-2 h-[200px]">
                                        <div className="flex flex-row items-center w-[280px] justify-between ">
                                            <p className="text-sm font-semibold text-[#7B809A] ">Photo #1</p>
                                            <p className="text-sm font-semibold text-[#E91F63] ">{data.Data}</p>
                                        </div>

                                        <div className="flex flex-col items-start justify-between h-[150px] ">
                                            <h4 className="text-[#344767] font-bold text-lg ">
                                                {data.Title.split(" ").slice(0, 14).join(" ")}
                                                {data.Title.split(" ").length > 14 ? "..." : ""}
                                            </h4>

                                            <div className="flex flex-row items-center gap-4 ">
                                                <button onClick={()=>{handelViewDetails(data._id)}} className="text-sm text-red-600 border-[2px] border-red-600 cursor-pointer hover:underline rounded-lg px-4 py-1 w-[116px] h-[33px] font-semibold ">Details</button>
                                                <button onClick={()=>{handelEditEvent(data._id)}} className="text-sm cursor-pointer bg-[#E91F63] rounded-lg px-4 py-1 w-[116px] h-[33px] text-white font-semibold ">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}