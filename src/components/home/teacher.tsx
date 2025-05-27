import Image from "next/image";
import HeadMaster from "@/assets/image/school/Kamal_sir.jpg";
import Rabani from "@/assets/image/school/Rabani.jpg";
import Sahan from "@/assets/image/school/Sahan_sir.jpg";
import Saied from "@/assets/image/school/Sahid_sir.jpg";


export default function Teacher() {
   return(
      <div className="flex justify-center mt-20">
         <div className="flex flex-col items-center gap-12 ">
            <div className="flex gap-8">
               <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl w-[277px] h-[300px] flex items-center justify-center ">
                  <div className="flex flex-col items-center">
                     <p className="text-center">
                        <Image src={HeadMaster} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">Kamal Hosian</h3>
                     <p>Principle</p>
                  </div>
               </div>
               <div className="w-[40vw] bg-[#f8f4f4] rounded-[8px] shadow-2xl p-2">
                  <h3>lorem hipsum</h3>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ea, libero placeat ab facilis alias. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, odio! Doloribus, rem facere! Nostrum nemo tempore et delectus at recusandae possimus molestiae vel. Hic quisquam necessitatibus, suscipit rem amet ipsam?
                  </p>
                  <button className="p-2 border rounded-xl">
                     Read more..
                  </button>
               </div>
            </div>
            <div className="flex flex-row items-center gap-10">
               <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl w-[277px] h-[300px] flex items-center justify-center ">
                  <div>
                     <p className="text-center">
                        <Image src={Rabani} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">Rubany</h3>
                     <p></p>
                  </div>
                  
               </div>
               <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl w-[277px] h-[300px] flex items-center justify-center ">
                  <div>
                     <p className="text-center">
                        <Image src={Sahan} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">Rubany</h3>
                     <p></p>
                  </div>
               </div>
               <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl w-[277px] h-[300px] flex items-center justify-center ">
                  <div>
                     <p className="text-center">
                        <Image src={Saied} alt="sir" className="w-[160px] h-[200px] object-cover " />
                     </p>
                     <h3 className="text-center text-xl">Rubany</h3>
                     <p></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}