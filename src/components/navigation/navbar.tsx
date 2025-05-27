import Image from "next/image";
import Logo from "@/assets/image/gov.png";


export default function Navbar() {
   return(
      <div className="bg-amber-200 py-2.5">
         <div className="flex flex-row items-center justify-center gap-5">
            <div  className="flex flex-row items-center">
               <Image src={Logo} alt="Logo" width={30} />
               <p>Kuripara High School</p>
               {/* <p>কুড়িপাড়া উচ্চ বিদ্যালয়</p> */}
            </div>
            <div  className="flex flex-row items-center gap-4">
               <p>ABOUT</p>
               <p>NOTICES</p>
               <p>EVENTS</p>
               <p>NEWS</p>
               <p>LINKS</p>
            </div>
         </div>
      </div>
   )
}