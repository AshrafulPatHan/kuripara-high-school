import Image from "next/image";
import Hero_img from "@/assets/image/school/hero.jpg";


export default function Hero() {
   return(
      <div>
         <div className="relative">
            <div>
               <Image src={Hero_img} alt="Logo" className="w-[100vw] h-[49vw] object-cover " />
            </div>
            <div className="absolute top-[4%] left-[4%]  ">
               <h1 className="text-lg lg:text-4xl xl:text-6xl font-bold">কুড়িপাড়া উচ্চ বিদ্যালয় </h1>
               <p className=" hidden sm:flex text-sm md:text-md lg:text-lg mt-4">প্রতিষ্ঠাতা:- আল হাজ এম এ. রফিক চেয়ারম্যান.</p>
            </div>
         </div>
      </div>
   )
}