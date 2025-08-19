"use client"

import { motion } from "motion/react"
import Image from "next/image";
import Hero_img from "@/assets/image/school/hero.jpg";

export default function Hero() {
   return(
      <div>
         <div className="relative">
            <div>
               <Image src={Hero_img} alt="Logo" width={1880} className="w-[100vw] h-[49vw] object-cover " />
            </div>
            <motion.div 
               initial={{rotate:"0deg",opacity:0}}
               animate={{
                  y:[55,0],
                  x:[-55,0],
                  opacity:1
               }}
               whileHover={{
                  scale:1.05
               }}
               transition={{
                  duration:0.5,
                  // ease:"easeIn",
                  // ease:"easeOut",
                  // ease:"linear",
                  ease:"linear",
               }}
               exit={{rotate:"0deg"}}
            className="absolute top-[2%] sm:top-[4%] left-[11%] sm:left-[4%]  ">
               <div className="bg-gradient-to-r from-[#350303] to-blue-600 bg-clip-text text-transparent ">
                  <h1 className="text-[20px] lg:text-4xl xl:text-6xl font-bold py-0 md:py-4">
                     কুড়িপাড়া উচ্চ বিদ্যালয় 
                  </h1>
               </div>
               {/* <h1 className="text-[24px] lg:text-4xl xl:text-6xl font-bold">কুড়িপাড়া উচ্চ বিদ্যালয় </h1> */}
               <div className="bg-gradient-to-r from-[#09c209] to-[#000000] bg-clip-text text-transparent ">
                  <h1 className="hidden sm:flex text-sm md:text-md lg:text-lg font-bold mb-4">
                     প্রতিষ্ঠাতা:- আল হাজ এম এ. রফিক চেয়ারম্যান.
                  </h1>
               </div>
               {/* <p className=" hidden sm:flex text-sm md:text-md lg:text-lg mt-[0.7vw] ">প্রতিষ্ঠাতা:- আল হাজ এম এ. রফিক চেয়ারম্যান.</p> */}
            </motion.div>
         </div>
      </div>
   )
}