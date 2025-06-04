"use client"
import Image from "next/image";
import Notice from '@/assets/image/school/notice.avif';
import Notices_data from '@/api/json/Notice.json';
import axios from 'axios';
import { useEffect, useState } from "react";


export default function Notices() {
   const [notice,setNotice] = useState<NoticeType[]>([])

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
const ApiUrl = process.env.NEXT_PUBLIC_API_URL;


// fetch data
    useEffect(() => {
        fetch(`${ApiUrl}/latest-notice`)
        .then((res) => res.json())
        .then((data) => {
            setNotice(data);
            // setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            // setLoading(false);
        });
    }, []);

   // chak noice is comming
   if (notice.length == 0) {
      return <p>Loading ....</p>
   };

   const [first, ...rest] = notice;

   return(
      <div className="flex justify-center mt-20">
         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 ">
            <div>
               <div className="flex gap-5">
                  <div className="flex flex-col bg-[#f8f4f4] w-[97vw] lg:w-[60vw] xl:w-[821px] p-6 rounded-2xl items-center  ">
                     <div>
                        <div>
                           <Image src={first.Photo} alt="Notice"  width={800} height={400}
                           className="w-[98vw] lg:w-[55vw] xl:w-[800px] object-cover rounded-2xl " />
                        </div>
                        <div>
                           <p className="text-lg font-semibold mb-2 mt-1">{first.ShortDescription}</p>
                           <button className="bg-amber-200 p-3 text-sm font-bold hover:underline cursor-pointer rounded-lg">
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
                           <div>
                              <Image src={not.Photo} width={300} height={300} alt="event" className="w-[100px] h-[100px] object-cover rounded-full  " />
                           </div>
                           <div className="w-[60%] ">
                              <h3>
                                 {not.ShortDescription.split(" ").slice(0, 10).join(" ")}
                                 {not.ShortDescription.split(" ").length > 10 ? "..." : ""}
                              </h3>
                              <p className="mb-1 text-[#000000b7] ">{not.Data}</p>
                              <button className="border p-2 rounded-lg text-sm">View Details</button>
                           </div>
                        </div>
                        <hr className="w-[100%] mt-2 mb-2 "/>
                     </div>
                     ))}
                  <div className="flex flex-col items-end pb-6 px-6">
                     <button className="bg-amber-200 p-3 text-sm font-bold hover:underline cursor-pointer rounded-lg">
                     View All Notice
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}