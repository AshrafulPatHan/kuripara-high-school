"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react";
import Image from "next/image";
import Notice from '@/assets/image/school/notice.avif';
import Notices_data from '@/api/json/Notice.json';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";



export default function Notices() {
// framer motion
const ref = useRef(null);
const isInView = useInView(ref, { once: false });
//other thing 
const [notice,setNotice] = useState<NoticeType[]>([])
const router = useRouter();


// type declaration for use notice data
type NoticeType = {
   _id: number;
   ShortDescription: string;
   LongDescription: string;
   End: string;
   Photo: string;
   Data: string;
};

// get url
const ApiUrl = process.env.NEXT_PUBLIC_API_NEXT_SERVER;


// fetch data
    useEffect(() => {
        fetch(`${ApiUrl}/api/public/notice/latest-notice`)
        .then((res) => res.json())
        .then((data) => {
            setNotice(data);
            // setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            // setLoading(false);
        });
    }, [ApiUrl]);

   // chak noise is coming
   if (notice.length == 0) {
      return <p>Loading ....</p>
   };

   const [first, ...rest] = notice;

const handleViewDetails = () => {
   const query = new URLSearchParams({
   id: String(first._id),
   short: first.ShortDescription,
   long: first.LongDescription,
   photo: first.Photo,
   date: first.Data,
   }).toString();

   router.push(`/notice-details?${query}`);
};
const handleViewDetailsMap = (not:any) => {
   const query = new URLSearchParams({
   id: String(not._id),
   short: not.ShortDescription,
   long: not.LongDescription,
   photo: not.Photo,
   date: not.Data,
   }).toString();

   router.push(`/notice-details?${query}`);
};


   return(
      <div className="flex justify-center mt-20">
         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
            <div >
               <div className="flex gap-5">
                  <div className="flex flex-col bg-[#f8f4f4] w-[97vw] lg:w-[60vw] xl:w-[821px] p-6 rounded-2xl items-center  ">
                     <div>
                        <div className="w-[98vw] lg:w-[55vw] xl:w-[800px] rounded-2xl overflow-hidden group">
                           <Image src={first.Photo} alt="Notice"  width={800} height={400}
                           className=" object-cover rounded-2xl w-full h-full transition-transform duration-300 group-hover:scale-105 " />
                        </div>
                        <div>
                           <p className="text-lg font-semibold mb-2 mt-1">{first.ShortDescription}</p>
                           <button 
                           onClick={handleViewDetails}
                           className="bg-amber-200 p-3 text-sm font-bold hover:underline cursor-pointer rounded-lg">
                              View Details
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="flex flex-col bg-[#f8f4f4] rounded-2xl w-[97vw] md:w-[365px] xl:w-[375px]  ">
                  <div className="bg-amber-200 text-center rounded-t-2xl py-2 text-2xl font-semibold ">
                     All Notice
                  </div>
                     {rest.map((not)=>(
                     <div key={not._id} className="flex flex-col items-center px-6 py-3 ">
                        <div className="flex gap-4 ">
                           <div className="w-[100px] h-[100px] rounded-full overflow-hidden group">
                              <Image src={not.Photo} width={300} height={300} alt="event" className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110 " />
                           </div>
                           <div className="w-[60%] ">
                              <h3>
                                 {not.ShortDescription.split(" ").slice(0, 10).join(" ")}
                                 {not.ShortDescription.split(" ").length > 10 ? "..." : ""}
                              </h3>
                              <p className="mb-1 text-[#000000b7] ">{not.Data}</p>
                              <button 
                               onClick={()=> {handleViewDetailsMap(not)}}
                               className="border p-2 rounded-lg text-sm cursor-pointer " >
                                 View Details
                              </button>
                           </div>
                        </div>
                        <hr className="w-[100%] mt-2 mb-2 "/>
                     </div>
                     ))}
                  <div className="flex flex-col items-end pb-6 px-6">
                     <Link href='/notice' className="bg-amber-200 p-3 text-sm font-bold hover:underline cursor-pointer rounded-lg">
                     View All Notice
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
