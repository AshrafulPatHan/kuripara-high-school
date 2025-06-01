"use client"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";



export default function NoticeAdminTable(){
    return(
        <div className="mt-20 mb-20">
            <div>
                <div className="flex flex-row items-center justify-between h-[70px] bg-[#ffffff] rounded-[12px] py-4 px-9 ">
                    <h4 className=" text-center ">Lorem ipsum, dolor sit amet ...</h4>
                    <div className="flex flex-row items-center gap-14">
                        <p>1.1.2025</p>
                        <button className="w-[44px] h-[44px] bg-gradient-to-b from-[#3E3D45] to-[#202020] rounded-[12px] 
                           flex flex-col justify-center items-center  ">
                            <FaEdit className="text-2xl text-white "/>
                         </button>
                        <button className="w-[44px] h-[44px] bg-gradient-to-b from-[#3E3D45] to-[#202020] rounded-[12px] 
                          flex flex-col justify-center items-center  ">
                            <MdDeleteForever className="text-2xl text-white "/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}