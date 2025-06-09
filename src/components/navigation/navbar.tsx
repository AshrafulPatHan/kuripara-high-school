import Image from "next/image";
import Logo from "@/assets/image/gov.png";
import Dropdown_Nav from "../ui/Dropdown";
import Link from "next/link";



export default function Navbar() {
   return(
   <div className=" sticky top-0 z-50">
      {/* desktop */}
      <div className="bg-[#fff] shadow-2xl py-2 hidden md:flex md:flex-col  ">
         <div className="flex items-center justify-center gap-[200px] ">
            <div  className="flex flex-row items-center gap-3">
               <Image src={Logo} alt="Logo" width={50} />
               <p className="text-xl font-bold  ">Kuripara High School</p>
               {/* <p>কুড়িপাড়া উচ্চ বিদ্যালয়</p> */}
            </div>
            <div  className="flex flex-row items-center gap-4">
               <Link href='/' className="text-xl font-bold ">HOME</Link>
               <Link href='/about' className="text-xl font-bold ">ABOUT</Link>
               <Link href='/notice' className="text-xl font-bold ">NOTICES</Link>
               <Link href='/album' className="text-xl font-bold ">EVENTS</Link>
               <Link href='/link' className="text-xl font-bold ">LINKS</Link>
            </div>
         </div>
      </div>
      {/* mobile */}
      <div className="bg-[#fff] shadow-2xl py-2 px-1 flex md:hidden justify-between">
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