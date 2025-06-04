"use client"
import Image from "next/image";
import CountUp from 'react-countup';
import { FaHome } from "react-icons/fa";



export default function Number() {
   return(
      <div className="flex justify-center mt-20 ">
         <div className="flex flex-row items-center gap-[15px] md:gap-[7vw] xl:gap-[10vw] bg-[#f8f4f4] shadow-2xl rounded-[8px] py-8 px-[6vw] sm:px-[8.3vw] ">
            <div className="flex flex-col items-center gap-1">
               <div className="p-1 xl:p-7 rounded-full bg-[#6d676796] ">
                  <FaHome className="text-2xl  "/>
               </div>
               <p className="text-xl font-bold"><CountUp end={100} duration={3} /></p>
               <h3 className="text-md xl:text-xl font-bold">Founded</h3>
            </div>
            <div className="flex flex-col items-center gap-1">
               <div className="p-1 xl:p-7 rounded-full bg-[#6d676796] ">
                  <FaHome className=" text-2xl  "/>
               </div>
               <p className="text-xl font-bold"><CountUp end={100} duration={3} /></p>
               <h3 className="text-md xl:text-xl font-bold">Teacher</h3>
            </div>
            <div className="flex flex-col items-center gap-1">
               <div className="p-1 xl:p-7 rounded-full bg-[#6d676796] ">
                  <FaHome className=" text-2xl  "/>
               </div>
               <p className="text-xl font-bold"><CountUp end={100} duration={3} /></p>
               <h3 className="text-md xl:text-xl font-bold">Student</h3>
            </div>
            <div className="flex flex-col items-center gap-1">
               <div className="p-1 xl:p-7 rounded-full bg-[#6d676796] ">
                  <FaHome className=" text-2xl  "/>
               </div>
               <p className="text-xl font-bold"><CountUp end={100} duration={3} /></p>
               <h3 className="text-md xl:text-xl font-bold">Retting</h3>
            </div>
         </div>
         {/* Teacher Student Retting */}
      </div>
   )
}