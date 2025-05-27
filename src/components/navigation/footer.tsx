import Image from "next/image";
import Gov from "@/assets/image/gov.png";
import Ashraful from "@/assets/image/ashraful.png";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
   return(
      <div className="flex justify-center bg-[#002147] mt-20 pt-10 pb-4 text-white">
         <div className="flex flex-col gap-5">
            <div className="flex items-center gap-[7vw] md:gap-[36vw] ">
               <div className="flex items-center gap-2">
                  <Image src={Gov} alt="gov" width={30} />
                  <h4>Kuripara High School</h4>
               </div>
               <div className="flex items-center gap-3">
                  <a href="">
                     <FaFacebook/>
                  </a>
                  <a href="">
                     <FaFacebook/>
                  </a>
                  <a href="">
                     <FaFacebook/>
                  </a>
               </div>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row gap-[30vw] ">
               <div className="flex flex-row gap-3 ">
                  <div>
                     <Image src={Ashraful} alt="ashraful" width={90} className="bg-blue-200" />
                  </div>
                  <div>
                  <p>Created By</p>
                     <h2>Ashraful Pathan</h2>
                     <p>Junior Frontend Developer</p>
                  </div>
               </div>
               <div className="flex gap-12">
                  <div>
                     <h3>lorem</h3>
                     <p>lorem</p>
                     <p>lorem</p>
                  </div>
                  <div>
                  <h3>lorem</h3>
                  <p>lorem</p>
                  <p>lorem</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}