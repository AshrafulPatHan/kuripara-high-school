"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import CountUp from 'react-countup';
import { FaHome, FaStar, FaUsers } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Student from "@/assets/image/ssc_student.webp";

export default function Number() {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
   });

   return (
      <div className="flex justify-center mt-20 ">
         <div 
            ref={ref}
            style={{
               backgroundImage: `url(${Student.src})`,
               backgroundAttachment: "fixed",
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
            className="flex flex-row items-center justify-between w-[100vw] py-32 px-[6vw] sm:px-[8.3vw] text-white  "
         >
            <NumberBox icon={<FaHome />} number={1968} title="Founded" inView={inView} />
            <NumberBox icon={<FaUsers />} number={18} title="Teacher" inView={inView} />
            <NumberBox icon={<PiStudentFill />} number={900} title="Student" inView={inView} />
            <NumberBox icon={<FaStar />} number={5} title="Rating" inView={inView} />
         </div>
      </div>
   );
}

function NumberBox({ icon, number, title, inView }: {
   icon: React.ReactNode,
   number: number,
   title: string,
   inView: boolean
}) {
   return (
      <div className="flex flex-col items-center gap-1">
         <div className="p-1 xl:p-7 rounded-full bg-[#6d676796] ">
            {icon}
         </div>
         <p className="text-xl font-bold">
            {inView ? <CountUp end={number} duration={3} /> : 0}
         </p>
         <h3 className="text-md xl:text-xl font-bold">{title}</h3>
      </div>
   );
}
