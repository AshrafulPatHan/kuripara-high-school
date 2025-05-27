import Image from "next/image";
import Student from "@/assets/image/school/student.webp";


export default function History(){
   return(
      <div className="flex justify-center mt-20 ">
         <div className="flex flex-row-reverse items-start gap-5">
               <div>
                  <Image src={Student} alt="school" className="w-[600px] rounded-2xl " />
               </div>
               <div className="w-[600px] ">
                  <h2 className="text-3xl font-medium mb-3">Welcome to Kuripara High School</h2>
                  <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur quia vel reprehenderit, ducimus commodi, molestias perferendis, accusantium fuga eligendi fugit. Exercitationem saepe cumque tenetur perspiciatis dicta ipsum possimus magnam dolores, incidunt veniam, molestias vel officiis rerum quia eaque iusto sed, aliquid quibusdam quos doloremque! Qui, tenetur! Impedit, ducimus ea.
                  </p>
               </div>
         </div>
      </div>
   )
}