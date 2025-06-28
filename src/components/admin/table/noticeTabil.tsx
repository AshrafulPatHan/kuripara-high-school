"use client"

import { MdDeleteForever } from "react-icons/md";
import axios from 'axios'
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import { useRouter } from "next/navigation";




export default function NoticeAdminTable(){
    const [data, setData] = useState<any[] | null[]>([]);
    const router = useRouter();

    // get notice data
    useEffect(()=>{
            const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
            axios.get(`${ApiUrl}/latest-notice`)
            .then((res) => setData(res.data))
            .catch((error) => console.error(error))
        })

    // delete Notice
    const handelEditNotice = (even:any)=>{
        const query = new URLSearchParams({
            id: String(even._id),
            Title: even.Title,
            ShortDescription: even.ShortDescription,
            LongDescription: even.LongDescription,
            Photo: even.Photo,
            Data: even.Data,
            IdData:String(even._id)
      }).toString();

      router.push(`/admin/page/notice/edit?${query}`);
    }
    
    // view details
    const handelViewDetails = (even:any) => {
        const query = new URLSearchParams({
        id: String(even._id),
        Title: even.Title,
        ShortDescription: even.ShortDescription,
        LongDescription: even.LongDescription,
        Photo: even.Photo,
        Data: even.Data,
        }).toString();

        router.push(`/admin/page/notice/details?${query}`);
    }
    return(
        <div className="mt-20 mb-20  ">
            <div className="flex flex-col bg-[#ffffffea] rounded-[12px] my-2 py-4 ">
                <div className="flex flex-col gap-12 pb-3 px-10 ">
                    <h3 className="font-bold text-xl ">Latest Notice</h3>
                    <div className="flex flex-row items-center justify-between text-sm font-semibold text-[#000000ce]  ">
                        <p>Photo</p>
                        <p>Title</p>
                        <div className="flex gap-[64px] ">
                            <p>Date</p>
                            <p>Edit</p>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
                <div>
                    {data.map((not)=> (
                        <div key={not._id}>
                            <hr className="w-[100%] text-[#F0F2F5] " />
                            <div className="flex flex-row items-center justify-between h-[70px] my-2 py-4 px-9 ">
                                <div>
                                    <Image src={not.Photo} width={300} height={300} alt="notice photo" className="w-14 h-14 object-cover rounded-full " />
                                </div>
                                <h4 className=" text-center w-[400px] lg:w-[600px] ">{not.ShortDescription}</h4>
                                <div className="flex flex-row items-center gap-14">
                                    <p>{not.Data}</p>
                                    <button onClick={()=>{handelEditNotice(not)}} className="w-[44px] h-[44px] bg-gradient-to-b from-[#3E3D45] to-[#202020] rounded-[12px] 
                                    flex flex-col justify-center items-center cursor-pointer ">
                                        <MdOutlineEdit className="text-2xl text-white "/>
                                    </button>
                                    <button onClick={()=>{handelViewDetails(not)}} className="w-[44px] h-[44px] bg-gradient-to-b from-[#3E3D45] to-[#202020] rounded-[12px] 
                                    flex flex-col justify-center items-center cursor-pointer ">
                                        <MdDeleteForever className="text-2xl text-white "/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
               
            </div>
        </div>
    )
}