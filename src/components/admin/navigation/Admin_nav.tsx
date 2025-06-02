import Image from "next/image";
import Profile from "@/assets/image/ashraful.png";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";




export default function Admin_nav(){
    return(
        <div className="sticky top-4 z-50 bg-gradient-to-b from-[#ddc9c9] to-[#bbb9b9] w-[82.2vw] rounded-[12px] 
         h-[62px] p-0  ">
            <div className="flex flex-row items-center justify-between mx-4 mt-[6px] ">
                <div>
                    <p></p>
                    <p>Analytics</p>
                </div>
                <div className="flex flex-row items-center gap-5">
                    <p className="text-2xl text-[#000000] ">
                        <IoSettingsSharp/>
                    </p>
                    <p className="text-2xl text-[#000000] ">
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