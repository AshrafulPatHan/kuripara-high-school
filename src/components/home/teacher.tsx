"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react";
import Image from "next/image";
import HeadMaster from "@/assets/image/school/Kamal_sir.jpg";
import Rabani from "@/assets/image/school/Rabani.jpg";
import শফিকুল from "@/assets/image/school/soficol-main.jpeg";
import Pronoy from "@/assets/image/school/comp.jpeg"; 
import Babul from "@/assets/image/school/babul_sir.jpg"; 
import Link from "next/link";



export default function Teacher() {
const ref = useRef(null);
const ref1 = useRef(null);
const ref2 = useRef(null);
const isInView = useInView(ref, { once: false });
const isInView1 = useInView(ref1, { once: false });
const isInView2 = useInView(ref2, { once: false });

   return(
      <div className="flex justify-center mt-20 max-w-screen overflow-hidden pb-12 ">
         <div className="flex flex-col items-center gap-12 ">
            <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8">
               <motion.div
               ref={ref1}
                  initial={{ rotate: "0deg", opacity: 0, x: -55, y: 55 }}
                  animate={isInView1 ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "linear" }}
               className="bg-[#f8f4f4] rounded-[8px] shadow-2xl hover:shadow-2xs w-[97vw] sm:w-[277px] h-[300px] flex items-center justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={HeadMaster} width={300} height={200} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     {/* <h3 className="text-center text-xl">Kamal Hosian</h3> */}
                     <h3 className="text-center text-xl">মোঃ কামাল হোসেন</h3>
                     <p>প্রধান শিক্ষক</p>
                  </div>
               </motion.div>
               <motion.div
               ref={ref2}
               initial={{ rotate: "0deg", opacity: 0, x: -55, y: 55 }}
                  animate={isInView2 ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "linear" }}
                  className=" w-[97vw] lg:w-[50vw] xl:w-[909px] h-auto xl:h-[300px] bg-[#f8f4f4] rounded-[8px] shadow-2xl hover:shadow-2xs p-4 flex flex-col gap-2  ">
                  <div>
                  <h3>আমাদের শিক্ষকবৃন্দ</h3>
                     <p>
                        কুড়িপাড়া উচ্চ বিদ্যালয়ে বর্তমানে মোট ১৮ জন অভিজ্ঞ ও দক্ষ শিক্ষক কর্মরত রয়েছেন। প্রত্যেক শিক্ষকই তাঁর নিজ নিজ বিষয়ে বিশেষ দক্ষতা ও অভিজ্ঞতার অধিকারী। তাঁরা শিক্ষার্থীদের প্রতি অত্যন্ত যত্নবান এবং পেশাদারভাবে শ্রেণি পরিচালনা করে থাকেন।
                     </p>
                     <p>
                        আমাদের সম্মানিত প্রধান শিক্ষক হলেন কামাল হোসেন স্যার, যিনি অত্যন্ত দায়িত্বশীল ও নেতৃত্বদানের গুণে সমৃদ্ধ। এছাড়াও, সহকারী প্রধান শিক্ষক শফিকুল ইসলাম বিদ্যালয়ের প্রশাসনিক ও শিক্ষাগত কাজে বিশেষ ভূমিকা পালন করছেন।
                     </p>
                     <p>
                        সকল শিক্ষকই আন্তরিকতা, নিষ্ঠা ও কঠোর পরিশ্রমের মাধ্যমে শিক্ষার্থীদের সঠিক পথে পরিচালিত করতে নিরলস কাজ করে যাচ্ছেন। তাঁদের অবদানেই কুড়িপাড়া উচ্চ বিদ্যালয় আজ একটি আদর্শ শিক্ষাপ্রতিষ্ঠান হিসেবে সুনাম অর্জন করতে সক্ষম হয়েছে।
                     </p>
                  </div>
                  <Link href='/teacher' className="bg-amber-200 p-3 text-sm font-bold hover:underline cursor-pointer mt-[55px] w-[170px] rounded-lg">
                     See more Teacher ...
                  </Link>
               </motion.div>
            </div>
            <motion.div
            ref={ref}
                  initial={{ rotate: "0deg", opacity: 0, x: 55, y: 0 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "linear" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center  gap-3 lg:gap-7 xl:gap-[37px] " id="teacher-grid">
               <div className="bg-[#f8f4f4] rounded-[8px]  w-[97vw] sm:w-[200px] xl:w-[277px] py-6 flex items-center hover:shadow-2xl justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={শফিকুল} alt="sir" className=" w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">শফিকুল ইসলাম</h3>
                     <p>সহকারী প্রধান শিক্ষক (ভারপ্রাপ্ত)</p>
                  </div>
               </div>
               <div className="bg-[#f8f4f4] rounded-[8px] w-[97vw] sm:w-[200px] xl:w-[277px] py-6  flex items-center hover:shadow-2xl justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={Rabani} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">গোলাম রব্বানী </h3>
                     <p>ভৌত বিজ্ঞান </p>
                  </div>
               </div>
               <div className="bg-[#f8f4f4] rounded-[8px] w-[97vw] sm:w-[200px] xl:w-[277px] py-6  flex items-center hover:shadow-2xl justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={Pronoy} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">মোঃ তৈমুর হাসান প্রনয়</h3>
                     <p>কম্পিউটার ল্যাব সহঃ শিক্ষক</p>
                  </div>
               </div>
               <div className="bg-[#f8f4f4] rounded-[8px] w-[97vw] sm:w-[200px] xl:w-[277px] py-6  flex items-center hover:shadow-2xl justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={Babul} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">মোঃ তায়েফুর রহমান বাবুল </h3>
                     <p>ইংরেজির শিক্ষক</p>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
   )
}