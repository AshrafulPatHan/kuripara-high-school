"use client"

import { motion, useInView } from "motion/react"
import Image from "next/image";
import Student from "@/assets/image/school/Ku325.jpg";
import { useRef } from "react";


export default function History(){
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false });
   return(
      <div className="flex justify-center mt-20 mx-2 max-w-screen overflow-hidden">
         <div className="flex flex-col lg:flex-row-reverse items-start gap-5">
               <motion.div 
                  ref={ref}
                  initial={{ rotate: "0deg", opacity: 0, x: 55, y: 55 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "linear" }}
                >
                  <Image src={Student} alt="school" className="w-[99vw] lg:w-[65vw]  xl:w-[600px] rounded-2xl " />
               </motion.div>
               <div className="w-[95vw] lg:w-[70vw] xl:w-[600px] ">
                  {/* <h2 className="text-3xl font-medium mb-3">Welcome to Kuripara High School</h2> */}
                  <h2 className="text-lg lg:text-3xl font-bold lg:font-medium">কুড়িপাড়া উচ্চ বিদ্যালয়ের ইতিহাস</h2>
                  <div>
                  <p>
                     কুড়িপাড়া উচ্চ বিদ্যালয় নারায়ণগঞ্জ জেলার বন্দর উপজেলার মদনপুর এলাকায়, কুড়িপাড়া গ্রামে অবস্থিত একটি খ্যাতনামা ও ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। এই বিদ্যালয়টি প্রতিষ্ঠা করেন আলহাজ্ব এম. এ. রফিক চেয়ারম্যান। এটি ১৯৬৮ সালে প্রতিষ্ঠিত হয়, অর্থাৎ আজ থেকে প্রায় ৫৭ বছর পূর্বে। দীর্ঘ এই পথচলায় বিদ্যালয়টি গৌরবময় ইতিহাস ও সুনাম অর্জন করেছে।   
                  </p>
                  <br />
                  <p>
                     বিদ্যালয়টি একটি আধা-সরকারি প্রতিষ্ঠান, যা শীতলক্ষ্যা নদীর নিকটবর্তী মনোরম পরিবেশে অবস্থিত। বর্তমানে এই বিদ্যালয়ে ৬ষ্ঠ শ্রেণি থেকে ১০ম শ্রেণি পর্যন্ত পাঠদান করা হয়।
                  </p>
                  <br/>
                  <p>
                     কুড়িপাড়া উচ্চ বিদ্যালয় কেবল একটি শিক্ষাপ্রতিষ্ঠান নয়, এটি কুড়িপাড়া ও আশেপাশের এলাকার শিক্ষার বাতিঘর হিসেবে বিবেচিত।
                  </p>
                  </div>
               </div>
         </div>
      </div>
   )
}