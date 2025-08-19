import Image from "next/image";
import Gov from "@/assets/image/officeal.png";
import Ashraful from "@/assets/image/ashraful.png";
import { FaFacebook, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaUsers, FaTrophy, FaHeart } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import "./nav.css"

export default function Footer() {
   return(
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
         {/* Decorative Background Elements */}
         <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400 rounded-full blur-2xl"></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-8">
               {/* School Identity */}
               <div className="flex items-center gap-4 group">
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                     <Image 
                        src={Gov} 
                        alt="Government Logo" 
                        width={80} 
                        height={80}
                        className="relative z-10 bg-white rounded-full p-2 shadow-lg"
                     />
                  </div>
                  <div>
                     <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
                        Kuripara High School
                     </h2>
                     <p className="text-slate-300 text-sm mt-1">Excellence in Education Since Foundation</p>
                  </div>
               </div>

               {/* Social Media Links */}
               <div className="flex items-center gap-4">
                  <span className="text-slate-300 text-sm mr-2">Follow Us:</span>
                  <div className="flex gap-3">
                     <a 
                        href="https://www.ashraful.top/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                     >
                        <FaFacebook className="text-blue-300 hover:text-white text-xl transition-colors"/>
                     </a>
                     <a 
                        href="https://www.ashraful.top/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-500/20 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/25"
                     >
                        <FaLinkedin className="text-blue-400 hover:text-white text-xl transition-colors"/>
                     </a>
                     <a 
                        href="https://www.ashraful.top/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-red-500/20 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                     >
                        <FaYoutube className="text-red-400 hover:text-white text-xl transition-colors"/>
                     </a>
                  </div>
               </div>
            </div>

            <hr className="border-slate-600/50 mb-12"/>

            {/* Main Content Grid */}
            <div className="flex flex-col xl:flex-row gap-12 mb-12">

               {/* Developer Section */}
               <div className="lg:col-span-4">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                     <div className="flex items-start gap-4">
                        <div className="relative group">
                           <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                           <Image 
                              src={Ashraful} 
                              alt="Developer - Ashraful Pathan" 
                              width={80} 
                              height={80}
                              className="relative z-10 rounded-xl border-2 border-white/20 object-cover"
                           />
                        </div>
                        <div className="flex-1">
                           <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Created By</p>
                           <h3 className="text-xl font-bold text-white mb-2">Ashraful Pathan</h3>
                           <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full font-medium">
                                 MERN Stack Developer
                              </span>
                              <span className="text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full font-medium">
                                 Full Stack Expert
                              </span>
                           </div>
                           <a 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              href="https://www.ashraful.top"
                              className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                           >
                              <span>Visit Portfolio</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Quick Links */}
               <div className="lg:col-span-4">
                  <div className="QuickLinks gap-8">
                     <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                           <FaUsers className="text-blue-400"/>
                           About Us
                        </h3>
                        <div className="space-y-3">
                           <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" 
                              className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 transform">
                              → Our History
                           </a>
                           <a href="https://ashraful-pathan.vercel.app/#contact" target="_blank" rel="noopener noreferrer" 
                              className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 transform">
                              → Contact Us
                           </a>
                           <a href="https://ashraful-pathan.vercel.app/#aboutme" target="_blank" rel="noopener noreferrer" 
                              className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 transform">
                              → Administration
                           </a>
                           <a href="#" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 transform">
                              → Faculty
                           </a>
                        </div>
                     </div>
                     <div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                           <FaTrophy className="text-yellow-400"/>
                           Services
                        </h3>
                        <div className="space-y-3">
                           <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" 
                              className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 transform">
                              → Academic Programs
                           </a>
                           <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" 
                              className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 transform">
                              → Student Portal
                           </a>
                           <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" 
                              className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 transform">
                              → Library Services
                           </a>
                           <a href="#" className="block text-slate-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 transform">
                              → Sports & Activities
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* My Information */}
               <div className="lg:col-span-4">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                     <FaGraduationCap className="text-emerald-400"/>
                     About me
                  </h3>
                  <div className="space-y-4">
                     <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                        <FaMapMarkerAlt className="text-emerald-400 mt-1 text-sm"/>
                        <div>
                           <p className="text-slate-300 text-sm">Location</p>
                           <p className="text-white font-medium">bangladesh, Narayanganj</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                        <FaPhone className="text-blue-400 mt-1 text-sm"/>
                        <div>
                           <p className="text-slate-300 text-sm">Contact</p>
                           <p className="text-white font-medium">+8801614871378</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                        <FaEnvelope className="text-purple-400 mt-1 text-sm"/>
                        <div>
                           <p className="text-slate-300 text-sm">Email</p>
                           <p className="text-white font-medium">ashrafulpathan3927@gmail.com</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-600/50 pt-8">
               <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-center md:text-left">
                     <p className="text-slate-400 text-sm">
                        © 2024 Kuripara High School. All rights reserved.
                     </p>
                     <p className="text-slate-500 text-xs mt-1">
                        Empowering minds, shaping futures since our establishment.
                     </p>
                  </div>
                  <div className="flex items-center gap-6 text-xs text-slate-400">
                     <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                     <span>•</span>
                     <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                     <span>•</span>
                     <a href="#" className="hover:text-white transition-colors">Site Map</a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

// import Image from "next/image";
// import Gov from "@/assets/image/officeal.png";
// import Ashraful from "@/assets/image/ashraful.png";
// import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";


// export default function Footer() {
//    return(
//       <div className="flex justify-center bg-[#002147] pt-10 pb-4 text-white max-w-screen overflow-hidden ">
//          <div className="flex flex-col items-center gap-3">
//             <div className="flex items-center gap-[1vw] md:gap-[46.1vw] xl:gap-[900px] max-w-screen overflow-hidden ">
//                <div className="flex items-center gap-2">
//                   <Image src={Gov} alt="gov" width={60} />
//                   <h4>Kuripara High School</h4>
//                </div>
//                <div className="flex items-center gap-3 max-w-screen overflow-hidden  ">
//                   <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer">
//                      <FaFacebook className="text-blue-300 text-xl"/>
//                   </a>
//                   <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer">
//                      <FaLinkedin className="text-blue-300 text-xl"/>
//                   </a>
//                   <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer">
//                      <FaYoutube className="text-red-500 text-2xl"/>
//                   </a>
//                </div>
//             </div>
//             <hr className="w-[100%] "/>
//             <div className="flex flex-col md:flex-row gap-[34.7vw] xl:gap-[700px] ">
//                <div className="flex flex-row gap-3 ">
//                   <div>
//                      <Image src={Ashraful} alt="ashraful" width={150} className="bg-blue-200 rounded-xl w-[90px] " />
//                   </div>
//                   <div>
//                      <p className="text-xs text-[#ffffffb2] ">Created By</p>
//                      <h2 className="text-lg font-bold text-white ">Ashraful Pathan</h2>
//                      <p className="text-xs text-[#000000b2] bg-amber-300 px-1 py-0 text-center rounded-2xl mt-[4px] ">mern-stack developer</p>
//                      <a target="_blank" rel="noopener noreferrer" href="https://www.ashraful.top"
//                      className="text-xs text-[#000000b2] bg-blue-300 px-10 py-0 text-center rounded-2xl mt-[6px]  ">ashraful.top</a>
//                   </div>
//                </div>
//                <div className="flex gap-12">
//                   <div className="flex flex-col ">
//                      <h3 className="text-xl font-bold mb-2">About us</h3>
//                      <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb] ">Website</a>
//                      <a href="https://ashraful-pathan.vercel.app/#contact" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">contact</a>
//                      <a href="https://ashraful-pathan.vercel.app/#aboutme" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">About Me</a>
//                   </div>
//                   <div  className="flex flex-col ">
//                      <h3 className="text-xl font-bold mb-2">Services</h3>
//                      <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">Website</a>
//                      <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">Web App</a>
//                      <a href="https://www.ashraful.top/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#ffffffbb]">Server</a>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }