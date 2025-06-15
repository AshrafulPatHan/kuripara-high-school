"use client"
import { FaUserCircle } from "react-icons/fa";

// http://localhost:5000/visitor-number


export default function TotalView(){
    // Date
    const timestamp = new Date().toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    });
    return(
        <div>
            <div className="relative h-[155px] pt-6 ">
                <div className="w-[302px] h-[134px] bg-[#ffffff] shadow-xl rounded-[12px]  ">
                    <div className="flex flex-col items-end pt-3 pr-6 ">
                        <p className="text-[#7B809A] text-[14px]  ">Total website visits</p>
                        <p className="text-2xl font-bold">10</p>
                    </div>
                    <hr className="text-[#F0F2F5] "/>
                    <div className="flex items-center gap-2 caret-neutral-50 pt-6 pl-4 ">
                        <p className="  text-[#7B809A] text-[16px] ">In</p>
                        <p className="text-[#4CAF50] text-[16px]  ">{timestamp}</p>
                        <p className=" text-[#7B809A] text-[16px] ">Last Updated</p>
                    </div>
                </div>
                <div className="w-[64px] h-[64px] bg-gradient-to-b from-[#3E3D45] to-[#202020] rounded-[12px] 
                 flex flex-col justify-center items-center absolute top-1 left-4  ">
                    <FaUserCircle className="text-2xl text-white "/>
                </div>
            </div>
        </div>
    )
}