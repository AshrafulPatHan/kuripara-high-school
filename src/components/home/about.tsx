"use client"

import { motion, useInView } from "motion/react"
import Image from "next/image";
import Kuripara from "@/assets/image/school/Kuripara.jpg";
import { useRef } from "react";



export default function About(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    return(
        <div className="flex justify-center mt-7 sm:mt-20 mx-2 max-w-screen overflow-hidden ">
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
                <div className="w-[95vw] lg:w-[70vw] xl:w-[600px]  ">
                    {/* <h2 className="text-3xl font-medium">Welcome to Kuripara High School</h2> */}
                    <h2 className="text-lg lg:text-3xl font-bold lg:font-medium"> কুড়িপাড়া উচ্চ বিদ্যালয়ে আপনাকে স্বাগতম!</h2>
                    <p className="mt-2">
                        কুড়িপাড়া উচ্চ বিদ্যালয় নারায়ণগঞ্জ জেলার বন্দর উপজেলার মদনপুর এলাকায়, কুড়িপাড়া গ্রামে অবস্থিত একটি খ্যাতনামা শিক্ষা প্রতিষ্ঠান। এটি একটি আধা-সরকারি বিদ্যালয় যা শীতলক্ষ্যা নদীর নিকটবর্তী অবস্থানে অবস্থিত, প্রকৃতির সান্নিধ্যে নির্মিত এই বিদ্যালয়টি শিক্ষার আদর্শ কেন্দ্র হিসেবে পরিচিত।
                        <br/>
                        বিদ্যালয়টিতে ৬ষ্ঠ শ্রেণি থেকে ১০ম শ্রেণি পর্যন্ত পাঠদান করা হয়। এখানে অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকবৃন্দ পাঠদান করেন, যারা শিক্ষার্থীদের সর্বোচ্চ মানের শিক্ষা প্রদান করে থাকেন। বিদ্যালয়ের ফলাফল অত্যন্ত চমৎকার — প্রতি বছর ১০০% পাশের হার এবং অসংখ্য শিক্ষার্থী জিপিএ-৫ (A+) অর্জন করে থাকে।
                        <br/>
                        কুড়িপাড়া উচ্চ বিদ্যালয় কেবলমাত্র একটি শিক্ষাপ্রতিষ্ঠান নয়, এটি শিক্ষার আলো ছড়ানোর একটি মহৎ কেন্দ্র।
                    </p>
                    <div className=" flex items-center gap-1 mt-3">
                        <p className="text-lg font-medium">Location :</p>
                        <p className="text-blue-500 text-sm lg:text-lg">Bandor , Narayanganj</p>
                    </div><div className=" flex items-center gap-1">
                        <p className="text-lg font-medium">Phone :</p>
                        {/* <p className="text-blue-500">016727-27490</p> */}
                        <p className="text-blue-500 text-sm lg:text-lg">+8801614871378</p>
                    </div>
                    <div className=" flex items-center gap-1 ">
                        <p className="text-lg font-medium">Email:</p>
                        <p className="text-blue-500 text-sm lg:text-lg">ashrafulpathan3927@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}