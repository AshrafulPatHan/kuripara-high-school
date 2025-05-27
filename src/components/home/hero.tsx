import Image from "next/image";
import Hero_img from "@/assets/image/school/hero.jpg";


export default function Hero() {
   return(
      <div>
         <div className="relative">
            <div>
               <Image src={Hero_img} alt="Logo" className="w-[100vw] h-[49vw] object-cover " />
            </div>
            <div className="absolute top-10 left-12">
               <h1 className="text-6xl font-bold">Kuripara High School</h1>
               <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, blanditiis.</p>
            </div>
         </div>
      </div>
   )
}