"use client"
import Image from "next/image";
import CountUp from 'react-countup';
import { FaHome } from "react-icons/fa";
import Student from "@/assets/image/school/ssc_student.webp";
import { PiStudentFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";



export default function Number() {
   return(
      <div className="flex justify-center mt-20 ">
         <div 
            style={{
               backgroundImage: `url(${Student.src})`,
               backgroundAttachment: "fixed",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
            className="flex flex-row items-center justify-between w-[100vw] py-28 px-[6vw] sm:px-[8.3vw] text-white  ">
            <div className="flex flex-col items-center gap-1 ">
               <div className="p-1 xl:p-7 rounded-full bg-[#6d676796] ">
                  <FaHome className="text-2xl  "/>
               </div>
               <p className="text-xl font-bold"><CountUp end={1968} duration={3} /></p>
               <h3 className="text-md xl:text-xl font-bold">Founded</h3>
            </div>
            <div className="flex flex-col items-center gap-1">
               <div className="p-1 xl:p-7 rounded-full bg-[#6d676796] ">
                  <FaUsers className=" text-2xl  "/>
               </div>
               <p className="text-xl font-bold"><CountUp end={15} duration={3} /></p>
               <h3 className="text-md xl:text-xl font-bold">Teacher</h3>
            </div>
            <div className="flex flex-col items-center gap-1">
               <div className="p-1 xl:p-7 rounded-full bg-[#6d676796] ">
                  <PiStudentFill className=" text-2xl  "/>
               </div>
               <p className="text-xl font-bold"><CountUp end={1200} duration={3} /></p>
               <h3 className="text-md xl:text-xl font-bold">Student</h3>
            </div>
            <div className="flex flex-col items-center gap-1">
               <div className="p-1 xl:p-7 rounded-full bg-[#6d676796] ">
                  <FaStar className=" text-2xl  "/>
               </div>
               <p className="text-xl font-bold"><CountUp end={5} duration={3} /></p>
               <h3 className="text-md xl:text-xl font-bold">Retting</h3>
            </div>
         </div>
         {/* Teacher Student Retting */}
      </div>
   )
}