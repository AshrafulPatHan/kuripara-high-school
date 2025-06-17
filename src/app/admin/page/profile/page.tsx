import PrivateRoute from "@/components/admin/auth/PrivateRoute";
import Image from "next/image";
import Profile from "@/assets/image/ashraful.png";



export default function AdminProfile(){
    return(
        <PrivateRoute>
            <div>
                <h2>Profile</h2>
                <div>
                    <div>
                        <Image src={Profile} alt="profile" width={500} height={500} className="w-[300px] h-[300px] " />
                    </div>
                    <div>
                        <p>Name  : <span className="text-sm font-semibold text-[#ffffffc9]">Ashraful</span></p>
                        <p>Email : <span className="text-sm font-semibold text-[#ffffffc9]">ashrafulpathan3927@gmail.com</span></p>
                        <p>Phone : <span className="text-sm font-semibold text-[#ffffffc9]">+8801614871378</span></p>
                    </div>
                </div>
            </div>
        </PrivateRoute>
    )
}