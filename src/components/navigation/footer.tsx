import Image from "next/image";
import Gov from "@/assets/image/gov.png";
import Ashraful from "@/assets/image/ashraful.png";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";


export default function Footer() {
   return(
      <div className="flex justify-center bg-[#002147] mt-20 pt-10 pb-4 text-white max-w-screen overflow-hidden ">
         <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-[1vw] md:gap-[46.1vw] xl:gap-[900px] max-w-screen overflow-hidden ">
               <div className="flex items-center gap-2">
                  <Image src={Gov} alt="gov" width={60} />
                  <h4>Kuripara High School</h4>
               </div>
               <div className="flex items-center gap-3 max-w-screen overflow-hidden  ">
                  <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer">
                     <FaFacebook className="text-blue-300 text-xl"/>
                  </a>
                  <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer">
                     <FaLinkedin className="text-blue-300 text-xl"/>
                  </a>
                  <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer">
                     <FaYoutube className="text-red-500 text-2xl"/>
                  </a>
               </div>
            </div>
            <hr className="w-[100%] "/>
            <div className="flex flex-col md:flex-row gap-[34.7vw] xl:gap-[700px] ">
               <div className="flex flex-row gap-3 ">
                  <div>
                     <Image src={Ashraful} alt="ashraful" width={150} className="bg-blue-200 rounded-xl w-[90px] " />
                  </div>
                  <div>
                     <p className="text-xs text-[#ffffffb2] ">Created By</p>
                     <h2 className="text-lg font-bold text-white ">Ashraful Pathan</h2>
                     <p className="text-xs text-[#000000b2] bg-amber-300 px-1 py-0 text-center rounded-2xl mt-[4px] ">Frontend Developer</p>
                     <a target="_blank" rel="noopener noreferrer" href="https://www.ashraful.top"
                     className="text-xs text-[#000000b2] bg-blue-300 px-10 py-0 text-center rounded-2xl mt-[6px]  ">ashraful.top</a>
                  </div>
               </div>
               <div className="flex gap-12">
                  <div className="flex flex-col ">
                     <h3 className="text-xl font-bold mb-2">About us</h3>
                     <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb] ">Website</a>
                     <a href="https://ashraful-pathan.vercel.app/#contact" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">contact</a>
                     <a href="https://ashraful-pathan.vercel.app/#aboutme" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">About Me</a>
                  </div>
                  <div  className="flex flex-col ">
                     <h3 className="text-xl font-bold mb-2">Services</h3>
                     <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">Website</a>
                     <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">Web App</a>
                     <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">Server</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}