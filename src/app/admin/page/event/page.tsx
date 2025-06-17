"usc client"

import Image from "next/image"
import Photo from "@/assets/image/school/student.webp"


export default function AllEventsAdmin(){
    return(
        <div>
            <div>
                {/* sorting and search */}
                <div></div>
                {/* all events */}
                <div>
                    <h2>All Events Album</h2>
                    <div className="flex flex-col gap-3 w-[300px] ">
                        <div>
                            <Image src={Photo} alt="album photo" width={500} height={500} className="w-[300px] h-[240px] rounded-xl object-cover  " />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex flex-row items-center w-[280px] justify-between ">
                                <p className="text-sm font-semibold text-[#7B809A] ">Photo #1</p>
                                <p className="text-sm font-semibold text-[#E91F63] ">৩ জুন, ২০২৫</p>
                            </div>

                            <h4 className="text-[#344767] font-bold text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestias</h4>

                            <div className="flex flex-row items-center gap-4">
                                <button className="text-sm text-red-600 border-[2px] border-red-600 cursor-pointer hover:underline rounded-lg px-4 py-1 w-[116px] h-[33px] font-semibold ">Details</button>
                                <button className="text-sm cursor-pointer bg-[#E91F63] rounded-lg px-4 py-1 w-[116px] h-[33px] text-white font-semibold ">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}