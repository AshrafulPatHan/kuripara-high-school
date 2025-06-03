"use client"
import Link from "next/link";
import { FaArrowAltCircleRight, FaHome } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { MdEvent } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { BsCalendar3EventFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { useRouter } from "next/navigation";




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
                <div className="flex flex-row items-center gap-6">
                    <FaHome className="text-2xl "/>
                    <Link href='/admin' className="hover:underline">Home</Link>
                </div>
                <hr className="w-[100%] text-white my-2 "/>
                <div className="flex flex-row items-center gap-6">
                    <RiPagesFill className="text-2xl "/>
                    <Link href='/admin/page/add-notice' className="hover:underline">Add Notice</Link>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <MdEvent className="text-2xl "/>
                     <Link href='/admin/page/add-events' className="hover:underline">Post Event</Link>
                </div>
                <hr className="w-[100%] text-white  my-2 "/>
                <div className="flex flex-row items-center gap-6">
                    <BsCalendar3EventFill className="text-2xl "/>
                     <Link href='/admin/page/notice' className="hover:underline">All Notice</Link>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <MdEmojiEvents className="text-2xl "/>
                     <Link href='/admin/page/event' className="hover:underline">All Events</Link>
                </div>
                <hr className="w-[100%] text-white my-2 "/>
                <div className="flex flex-row items-center gap-6">
                    <RiLockPasswordFill className="text-2xl "/>
                    <Link href='/admin/page/chang-password' className="hover:underline">Chang Password</Link>
                </div>
                <div className="flex flex-row items-center gap-6">
                    <FaArrowAltCircleRight className="text-2xl "/>
                    <button onClick={handleLogout} className=" w-[90%] h-[40px] bg-gradient-to-t from-[#E93B77] to-[#da6d93] rounded-[8px] ">LogOut</button>
                </div>
            </div>
        </div>
    )
}