import Image from "next/image";
import HeadMaster from "@/assets/image/school/Kamal_sir.jpg";
import Rabani from "@/assets/image/school/Rabani.jpg";
import Sahan from "@/assets/image/school/Sahan_sir.jpg";
import Saied from "@/assets/image/school/Sahid_sir.jpg"; 
import Babul from "@/assets/image/school/babul_sir.jpg"; 


export default function Teacher() {
   return(
      <div className="flex justify-center mt-20">
         <div className="flex flex-col items-center gap-12 ">
            <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8">
               <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl w-[277px] h-[300px] flex items-center justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={HeadMaster} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     {/* <h3 className="text-center text-xl">Kamal Hosian</h3> */}
                     <h3 className="text-center text-xl">কামাল হোসেন স্যার</h3>
                     <p>প্রধান শিক্ষক</p>
                  </div>
               </div>
               <div className=" w-[97vw] lg:w-[50vw] xl:w-[47.4vw] h-[300px] bg-[#f8f4f4] rounded-[8px] shadow-2xl p-4 ">
                  <h3>আমাদের শিক্ষকবৃন্দ</h3>
                  <p>
                     <p>
                        কুড়িপাড়া উচ্চ বিদ্যালয়ে বর্তমানে মোট ১৮ জন অভিজ্ঞ ও দক্ষ শিক্ষক কর্মরত রয়েছেন। প্রত্যেক শিক্ষকই তাঁর নিজ নিজ বিষয়ে বিশেষ দক্ষতা ও অভিজ্ঞতার অধিকারী। তাঁরা শিক্ষার্থীদের প্রতি অত্যন্ত যত্নবান এবং পেশাদারভাবে শ্রেণি পরিচালনা করে থাকেন।
                     </p>
                     <p>
                        আমাদের সম্মানিত প্রধান শিক্ষক হলেন কামাল হোসেন স্যার, যিনি অত্যন্ত দায়িত্বশীল ও নেতৃত্বদানের গুণে সমৃদ্ধ। এছাড়াও, সহকারী প্রধান শিক্ষক সাহান স্যার বিদ্যালয়ের প্রশাসনিক ও শিক্ষাগত কাজে বিশেষ ভূমিকা পালন করছেন।
                     </p>
                     <p>
                        সকল শিক্ষকই আন্তরিকতা, নিষ্ঠা ও কঠোর পরিশ্রমের মাধ্যমে শিক্ষার্থীদের সঠিক পথে পরিচালিত করতে নিরলস কাজ করে যাচ্ছেন। তাঁদের অবদানেই কুড়িপাড়া উচ্চ বিদ্যালয় আজ একটি আদর্শ শিক্ষাপ্রতিষ্ঠান হিসেবে সুনাম অর্জন করতে সক্ষম হয়েছে।
                     </p>
                  </p>
                  <button className="p-2 border mt-12 rounded-lg">
                     See more Teacher ...
                  </button> 
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-center  gap-3 lg:gap-7 xl:gap-[37px] ">
               <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl w-[200px] xl:w-[277px] h-[250px] xl:h-[300px] flex items-center justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={Sahan} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">সাহান স্যার </h3>
                     <p>সহকারী প্রধান শিক্ষক</p>
                  </div>
               </div>
               <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl w-[200px] xl:w-[277px] h-[250px] xl:h-[300px] flex items-center justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={Rabani} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">রব্বানী স্যার</h3>
                     <p>রসায়ন শিক্ষক</p>
                  </div>
               </div>
               <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl w-[200px] xl:w-[277px] h-[250px] xl:h-[300px] flex items-center justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={Saied} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">আবু সাঈদ স্যার</h3>
                     <p>পদার্থবিজ্ঞান শিক্ষক</p>
                  </div>
               </div>
               <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl w-[200px] xl:w-[277px] h-[250px] xl:h-[300px] flex items-center justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={Babul} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl"> বাবুল স্যার</h3>
                     <p>ইংরেজির শিক্ষক</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}