

"use client"

import { motion, useInView } from "motion/react"
import Image from "next/image";
import Kuripara from "@/assets/image/school/Kuripara.jpg";
import { useRef } from "react";



export default function About(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <div className="flex justify-center mt-7 sm:mt-20 pb-10 px-2 max-w-screen overflow-hidden ">
            <div className="flex flex-col lg:flex-row items-start gap-5 ">
                <motion.div 
                ref={ref}
                initial={{ rotate: "0deg", opacity: 0, x: -55, y: 55 }}
                    animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "linear" }}
                    className="w-[97vw] lg:w-[65vw] xl:w-[600px] rounded-2xl overflow-hidden group"
                >
                    <Image src={Kuripara} alt="school" className="object-cover rounded-2xl w-full h-full transition-transform duration-300 group-hover:scale-105  " />
                </motion.div>
                <div className="w-[95vw] lg:w-[70%] xl:w-[600px] flex flex-col gap-3 ">
                    {/* <h2 className="text-3xl font-medium">Welcome to Kuripara High School</h2> */}
                    <div className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent ">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                            কুড়িপাড়া উচ্চ বিদ্যালয়ে আপনাকে স্বাগতম!
                        </h1>
                    </div>
                    <div className="bg-white py-10 pl-3 pr-5 shadow-xl rounded-2xl text-gray-700 leading-relaxed text-base lg:text-lg backdrop-blur-sm bg-white/50 p-6  border border-white/20  hover:bg-white/60 transition-all duration-300 ">
                        <p className="mb-5">
                            কুড়িপাড়া উচ্চ বিদ্যালয় নারায়ণগঞ্জ জেলার বন্দর উপজেলার , কুড়িপাড়া গ্রামে অবস্থিত একটি খ্যাতনামা শিক্ষা প্রতিষ্ঠান। এটি একটি আধা-সরকারি বিদ্যালয় যা শীতলক্ষ্যা নদীর নিকটবর্তী অবস্থানে অবস্থিত, প্রকৃতির সান্নিধ্যে নির্মিত এই বিদ্যালয়টি শিক্ষার আদর্শ কেন্দ্র হিসেবে পরিচিত।
                        </p>
                        <p className="mb-5">
                            বিদ্যালয়টিতে ৬ষ্ঠ শ্রেণি থেকে ১০ম শ্রেণি পর্যন্ত পাঠদান করা হয়। এখানে অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকবৃন্দ পাঠদান করেন, যারা শিক্ষার্থীদের সর্বোচ্চ মানের শিক্ষা প্রদান করে থাকেন। বিদ্যালয়ের ফলাফল অত্যন্ত চমৎকার — 
                            {/* প্রতি বছর ১০০% পাশের হার এবং অসংখ্য শিক্ষার্থী জিপিএ-৫ (A+) অর্জন করে থাকে। */}
                        </p>
                        <p className="">
                            কুড়িপাড়া উচ্চ বিদ্যালয় কেবলমাত্র একটি শিক্ষাপ্রতিষ্ঠান নয়, এটি শিক্ষার আলো ছড়ানোর একটি মহৎ কেন্দ্র।
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}