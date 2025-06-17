"use client"
import Image from "next/image";
import Background from "@/assets/image/university-418219_1920.jpg";
import CustomFileInput from "@/components/admin/ui/input/CustomInput";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import axios from "axios";
import PrivateRoute from "@/components/admin/auth/PrivateRoute";



export default function EditEventData({searchParams}:any){
    const { id,Title, Description, Photo, Data,IdData } = searchParams;


    // On from submit
    const handelFromEvents = async (event: FormEvent<HTMLFormElement>) =>{

        event.preventDefault();
        const form = event.currentTarget;

        // form values
        const Title = (form.elements.namedItem("title") as HTMLInputElement).value;
        const Description = (form.elements.namedItem("description") as HTMLInputElement).value;
        const Data = new Date().toLocaleDateString("bn-BD", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        // Mack all data into object
        const AllFormData = {id,Title,Description,Photo,Data}

        // Api url
        const ApiUrl = process.env.NEXT_PUBLIC_SERVER_ADMIN;

        // cake data
        if (!Title || !Description || !Photo) {
            toast.error("All fields are required")
        }else{
            // post data using Axios
            try {
                const res = await axios.post(`${ApiUrl}/update-event`, AllFormData);

                if (res.status === 200 || res.status === 201) {
                    toast.success("Notice is add successful!");
                    form.reset(); 
                } else {
                    toast.error("Fail to send data!");
                }
            } catch (err) {
                console.error("POST error:", err);
                toast.error("Server error!");
            }
        };

        
    }
    console.log("id data is -----",IdData);

    return(
        <PrivateRoute>
            <div className="w-[100%] h-[99%] flex flex-col items-center justify-center bg-cover bg-center rounded-xl " 
                    style={{
                backgroundImage: `url(${Background.src})`,
            }}
            >
                <form onSubmit={handelFromEvents} className="flex flex-col gap-5 bg-[#ffffff] rounded-xl p-6 ">
                    <div>
                        <h3 className="text-center font-bold text-2xl">Edit Events </h3>
                    </div>
                    <div>
                        <Image width={500} height={500} src={Photo} alt="edit photo" className="w-[350px] h-[200px] object-cover rounded-lg " />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Title" className="block text-sm font-medium text-zinc-700">
                        Add A Title
                        </label>
                        <input type="text" name="title" id="" placeholder="Title"  defaultValue={Title}
                        className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Description" className="block text-sm font-medium text-zinc-700">
                            Add Description
                        </label>
                        <input type="text" name="description" id="" placeholder="Add Description" defaultValue={Description}
                        className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " />
                    </div>
                    <button type="submit" className=" w-[90%] sm:w-[300px] lg:w-[350px] h-[40px] text-white 
                    bg-gradient-to-t from-[#E93B77] to-[#da6d93] rounded-[8px] ">
                        Add Events
                    </button>
                </form>
            </div>
        </PrivateRoute>
    )
}