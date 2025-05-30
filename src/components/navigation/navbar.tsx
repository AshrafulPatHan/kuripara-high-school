import Image from "next/image";
import Logo from "@/assets/image/gov.png";
import Dropdown_Nav from "../ui/Dropdown";


export default function Navbar() {
   return(
   <div className=" sticky top-0 z-50">
      {/* desktop */}
      <div className="bg-[#fff] shadow-2xl py-4 hidden md:flex md:flex-col  ">
         <div className="flex items-center justify-center gap-[200px] ">
            <div  className="flex flex-row items-center gap-3">
               <Image src={Logo} alt="Logo" width={30} />
               <p className="text-xl font-bold  ">Kuripara High School</p>
               {/* <p>কুড়িপাড়া উচ্চ বিদ্যালয়</p> */}
            </div>
            <div  className="flex flex-row items-center gap-4">
               <p className="text-xl font-bold ">ABOUT</p>
               <p className="text-xl font-bold ">NOTICES</p>
               <p className="text-xl font-bold ">EVENTS</p>
               <p className="text-xl font-bold ">NEWS</p>
               <p className="text-xl font-bold ">LINKS</p>
            </div>
         </div>
      </div>
      {/* mobile */}
      <div className="bg-[#fff] shadow-2xl py-2 flex md:hidden justify-between">
         <div  className="flex flex-row items-center gap-3">
            <Image src={Logo} alt="Logo" width={30} />
            {/* <p className="text-xl font-bold  ">Kuripara High School</p> */}
            <p className="text-xl font-bold  ">কুড়িপাড়া উচ্চ বিদ্যালয়</p>
         </div>
            <Dropdown_Nav/>
      </div>
   </div>
   );
};