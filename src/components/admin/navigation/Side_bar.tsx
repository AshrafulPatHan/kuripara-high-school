"use client"
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { RiPagesLine } from "react-icons/ri";
import Image from "next/image";
import Gov from "@/assets/image/gov.png";
import { FaPhotoVideo } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { GrDocumentConfig } from "react-icons/gr";





export default function Side_bar(){
    const router = useRouter();

    // logout function
    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        router.push("/auth");
    };

    return(
        <div className="sticky top-4 z-50 bg-gradient-to-t from-[#202020] to-[#3E3D45]  w-[250px]  h-[97vh] rounded-[12px]
        ml-2 p-4 text-white ">
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-4 ">
                    <Image src={Gov} width={300} height={300} className="w-[30px] h-[30px] " alt="Government logo" />
                    <Link href='/admin' className="hover:underline">Kuripara High School</Link>
                </div>
                <div className="flex flex-col gap-3">
                    {/* Analytics */}
                    <hr className="w-[100%] text-[#ffffffb2] my-2 "/>
                    <p className="text-md font-bold text-[#ffffffb2] ">Analytics</p>
                    <div className="flex flex-row items-center gap-6">
                        <RiPagesFill className="text-xl "/>
                        <Link href='/admin/page/add-notice' className="hover:underline">Add Notice</Link>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <MdAddAPhoto className="text-xl "/>
                        <Link href='/admin/page/add-events' className="hover:underline">Post Event</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {/* Page */}
                    <hr className="w-[100%] text-[#ffffffb2] my-2 "/>
                    <p className="text-md font-bold text-[#ffffffb2] ">Page</p>
                    <div className="flex flex-row items-center gap-6">
                        <RiPagesLine className="text-xl "/>
                        <Link href='/admin/page/notice' className="hover:underline">All Notice</Link>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <FaPhotoVideo className="text-xl "/>
                        <Link href='/admin/page/event' className="hover:underline">All Events</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {/* Profile */}
                    <hr className="w-[100%] text-[#ffffffb2] my-2 "/>
                    <p className="text-md font-bold text-[#ffffffb2] ">Profile</p>
                    <div className="flex flex-row items-center gap-6">
                        <FaUserCircle className="text-xl "/>
                        <Link href='/admin/page/notice' className="hover:underline">Admin Profile</Link>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <FaUserCog className="text-xl "/>
                        <Link href='/admin/page/event' className="hover:underline">Update Profile</Link>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <GrDocumentConfig className="text-xl "/>
                        <Link href='/admin/page/event' className="hover:underline">Doc</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {/* Action */}
                    <hr className="w-[100%] text-[#ffffffb2] my-2 "/>
                    <p className="text-md font-bold text-[#ffffffb2] ">Action</p>
                    <div className="flex flex-row items-center gap-6">
                        <Link href='/admin/page/chang-password' className=" w-[100%] h-[40px] bg-[#4F4F52] rounded-[4px] text-center pt-[7px] ">Chang Password</Link>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                        <button onClick={handleLogout} className=" w-[100%] h-[40px] bg-[#E91F63] rounded-[4px] ">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}