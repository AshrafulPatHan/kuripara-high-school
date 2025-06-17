import Image from "next/image";
import Profile from "@/assets/image/ashraful.png";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import Link from "next/link";




export default function Admin_nav(){
    return(
        <div className="sticky top-4 z-50 bg-gradient-to-br from-[#ddc9c9] to-[#bbb9b9] w-[82.2vw] rounded-[12px] 
         h-[62px] p-0  ">
            <div className="flex flex-row items-center justify-between mx-4 mt-[6px] ">
                <Link href='/admin' className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                        <p><TiHome className="text-xl text-[#4e5269] "/></p>
                        <p className="text-[#7B809A] ">/ Page</p>
                        <p className="text-[#344767]  "> <span className="text-[#7B809A] ">/</span> Analytics</p>
                    </div>
                    <p className="text-[#344767] font-bold ">Analytics</p>
                </Link>
                <div className="flex flex-row items-center gap-5">
                    <p className="text-2xl text-[#2e313f] ">
                        <IoSettingsSharp/>
                    </p>
                    <p className="text-2xl text-[#2e313f] ">
                       <FaBell/>
                    </p>
                    <div>
                        <Image width={500} height={500} src={Profile} alt="Profile" className="rounded-full w-[50px] h-[50px] bg-white  " />
                    </div>
                </div>
            </div>
        </div>
    )
}