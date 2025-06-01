import { PiStudent } from "react-icons/pi";


export default function TotalStudent(){
    return(
        <div className="relative h-[155px] pt-6 ">
            <div className="w-[302px] h-[134px] bg-[#ffff] shadow-xl rounded-[12px]  ">
                <div className="flex flex-col items-end pt-3 pr-6 ">
                    <p className="text-[#7B809A] text-[14px]  ">Total Student</p>
                    <p className="text-2xl font-bold">10</p>
                </div>
                <hr className="text-[#F0F2F5] "/>
                <div className="flex items-center gap-2 caret-neutral-50 pt-6 pl-4 ">
                    <p className="  text-[#7B809A] text-[16px] ">In</p>
                    <p className="text-[#4CAF50] text-[16px]  ">1.1.2025</p>
                    <p className=" text-[#7B809A] text-[16px] ">Last Updated</p>
                </div>
            </div>
            <div className="w-[64px] h-[64px] bg-gradient-to-b from-[#3E3D45] to-[#202020] rounded-[12px] 
             flex flex-col justify-center items-center absolute top-1 left-4  ">
                <PiStudent className="text-2xl text-white "/>
            </div>
        </div>
    )
}