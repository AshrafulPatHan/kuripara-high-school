"use client"
import Image from "next/image";
import Profile from "@/assets/image/ashraful.png";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { FaBell, FaPhotoVideo, FaUserCircle, FaUserCog } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import Link from "next/link";
import { useState } from "react";
import Gov from "@/assets/image/gov.png";
import { RiPagesFill, RiPagesLine } from "react-icons/ri";
import { MdAddAPhoto } from "react-icons/md";
import { GrDocumentConfig } from "react-icons/gr";
import { useRouter } from "next/navigation";




export default function Admin_nav(){
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    // logout function
    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        router.push("/auth");
    };

    return(
        <div className="mt-4 ">
            <div className="hidden md:flex">
                <div className="bg-gradient-to-br from-[#ddc9c9] to-[#bbb9b9] w-[82.2vw] rounded-[12px] h-[62px] pt-[2px]   ">
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
            </div>
            
            <div className="md:hidden">
                <div className="flex items-center justify-between mx-2  bg-[#ffffffe1] px-2 py-2 rounded-xl  ">
                    <div>
                        <button onClick={() => setIsOpen(true)} className="text-2xl font-bold underline">Admin</button>
                    </div>
                    <div>
                        <Image width={500} height={500} src={Profile} alt="Profile" className="rounded-full w-[40px] h-[40px] bg-blue-400  " />
                    </div>
                </div>
                <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                    <div className="p-4 flex justify-between items-center border-b">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <button onClick={() => setIsOpen(false)} className="text-gray-600">
                            ✕
                        </button>
                    </div>
                    <div className="w-[250px] bg-gradient-to-t from-[#202020] to-[#3E3D45] h-[97vh] ml-2 p-4  rounded-[12px] text-white  overflow-y-scroll h-screen ">
                        <div className="flex flex-col gap-3 overflow-y-scroll ">
                            <div className="flex flex-row items-center gap-4 ">
                                <Image src={Gov} width={300} height={300} className="w-[30px] h-[30px] " alt="Government logo" />
                                <Link href='/' className="hover:underline">Kuripara High School</Link>
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
                                    <IoHome className="text-xl "/>
                                    <Link href='/admin' className="hover:underline">Home</Link>
                                </div>
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
                                    <Link href='/admin/page/profile' className="hover:underline">Admin Profile</Link>
                                </div>
                                <div className="flex flex-row items-center gap-6">
                                    <FaUserCog className="text-xl "/>
                                    <Link href='/admin/page/update' className="hover:underline">Update Profile</Link>
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
                                    <Link href='/admin/page/auth/update' className=" w-[100%] h-[40px] bg-[#4F4F52] rounded-[4px] text-center pt-[7px] ">Chang Password</Link>
                                </div>
                                <div className="">
                                    <button onClick={handleLogout} className=" w-[100%] h-[40px] bg-[#E91F63] rounded-[4px] cursor-pointer ">Log Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}