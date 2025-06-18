"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent } from "react"
import toast from "react-hot-toast";



export default function UpdatePassword() {
     const router = useRouter();


    const handelChangePassword = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const form = event.currentTarget;

        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;

        const Admin = {name,password};

        const ApiUrl = process.env.NEXT_PUBLIC_SERVER_ADMIN;

        if (!name || !password) {
            toast.error("All fide is required");
        } else {
            try {
                const res = await axios.put(`${ApiUrl}/update-password`, Admin);
                if (res.status === 200) {
                    toast.success("Password is update successfully!");
                     router.push("/auth");
                } else {
                    toast.error("error is coming to sending data!");
                }
            } catch (err) {
                console.error("PUT error:", err);
                toast.error("Server error!");
            }
        }
    }
    return(
        <div>
            <form onSubmit={handelChangePassword} className="flex flex-col items-center gap-5">
                <input type="text" name="name" id="" required className="border border-black rounded-lg w-[300px] h-[32px] px-4 py-1 " />
                <input type="text" name="password" id="" required className="border border-black rounded-lg w-[300px] h-[32px] px-4 py-1 "  />
                <button className="bg-blue-600 p-4 rounded-lg">Change password</button>
            </form>
        </div>
    )
}