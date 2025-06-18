"use client"
import Image from "next/image";
import Background from "@/assets/image/university-418219_1920.jpg";
import CustomFileInput from "@/components/admin/ui/input/CustomInput";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import axios from "axios";
import PrivateRoute from "@/components/admin/auth/PrivateRoute";



export default function AddEvents(){
    const [Photo, setPhoto] = useState("");

    // mange file submit
    const handleFileSelect = async (file: File) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch(
                `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
                {
                    method: "POST",
                    body: formData
                }
            );
            const data = await response.json();
            if (data.success) {
                const imageUrl = data.data.url;
                setPhoto(imageUrl); 
                toast.success("Image uploaded successfully!");
            } else {
                toast.error("Failed to upload image");
            }
        } catch (error) {
            console.error("Image upload error:", error);
            toast.error("Image upload error");
        }
    };


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
        const AllFormData = {Title,Description,Photo,Data}

        // Api url
        const ApiUrl = process.env.NEXT_PUBLIC_SERVER_ADMIN;

        // cake data
        if (!Title || !Description || !Photo) {
            toast.error("All fields are required")
        }else{
            // post data using Axios
            try {
                const res = await axios.post(`${ApiUrl}/post-album`, AllFormData);

                if (res.status === 200 || res.status === 201) {
                    toast.success("Notice is add successful!");
                    form.reset(); 
                    setPhoto('');
                } else {
                    toast.error("Fail to send data!");
                }
            } catch (err) {
                console.error("POST error:", err);
                toast.error("Server error!");
            }
        };

        
    }
    return(
        <PrivateRoute>
            <div className="w-[100%] h-[99%] flex flex-col items-center justify-center bg-cover bg-center rounded-xl " 
                    style={{
                backgroundImage: `url(${Background.src})`,
            }}
            >
                <form onSubmit={handelFromEvents} className="flex flex-col gap-5 bg-[#ffffff] rounded-xl p-6 ">
                    <div>
                    <h3 className="text-center font-bold text-2xl">Add Events</h3>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Title" className="block text-sm font-medium text-zinc-700">
                        Add A Title
                        </label>
                        <input type="text" name="title" id="" placeholder="Title" 
                        className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Add Photo" className="block text-sm font-medium text-zinc-700">
                            Add Photo
                        </label>
                        {/* custom input filed */}
                        <fieldset >
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                    handleFileSelect(file);
                                    }
                                }}
                                className="block w-[97%] text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                                    file:rounded file:border-0 file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                                border border-black rounded-lg 
                                "
                            />
                            <label className="text-xs text-gray-400">Max size 32MB</label>
                        </fieldset>
                        {/* <CustomFileInput onFileSelect={handleFileSelect} /> */}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Description" className="block text-sm font-medium text-zinc-700">
                            Add Description
                        </label>
                        <input type="text" name="description" id="" placeholder="Add Description"
                        className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " />
                    </div>
                    <button type="submit" className=" w-[97%] sm:w-[300px] lg:w-[350px] h-[40px] text-white 
                    bg-gradient-to-t from-[#E93B77] to-[#da6d93] rounded-[8px] ">
                        Add Events
                    </button>
                </form>
            </div>
        </PrivateRoute>
    )
}