import PrivateRoute from "@/components/admin/auth/PrivateRoute";
import Image from "next/image";
import Profile from "@/assets/image/ashraful.png";



export default function AdminProfile(){
    return(
        <PrivateRoute>
            <div>
                <h2 className="font-bold underline">Profile</h2>
                <div className="flex flex-col items-center text-center gap-5">
                    <div>
                        <Image src={Profile} alt="profile" width={500} height={500} className="w-[300px] h-[300px] rounded-full bg-blue-400 " />
                    </div>
                    <div className="">
                        <p className="text-lg font-bold">Name  : <span className="text-sm font-semibold text-[#000000c9]">Ashraful Pathan</span></p>
                        <p className="text-lg font-bold">Email : </p>
                        <span className="text-sm font-semibold text-[#000000c9]">ashrafulpathan3927@gmail.com</span>
                        <p className="text-lg font-bold">Phone : <span className="text-sm font-semibold text-[#000000c9]">+8801614871378</span></p>
                    </div>
                </div>
            </div>
        </PrivateRoute>
    )
}