"use client"
import Image from "next/image";
import Background from "@/assets/image/university-418219_1920.jpg";
import CustomFileInput from "@/components/admin/ui/input/CustomInput";
import toast from "react-hot-toast";
import { FormEvent, useState } from "react";
import axios from "axios";
import RichTextEditor from "@/components/admin/editor/RichTextEditor";



export default function AddNotice(){
    const [Photo, setPhoto] = useState("");
    const [content, setContent] = useState('');


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
    const handelAddNotice = async (event: FormEvent<HTMLFormElement>) =>{

        event.preventDefault();
        const form = event.currentTarget;

        // form values
        const Title = (form.elements.namedItem("title") as HTMLInputElement).value;
        const ShortDescription = (form.elements.namedItem("ShortDescription") as HTMLInputElement).value;
        const LongDescription = (form.elements.namedItem("LongDescription") as HTMLInputElement).value;
        // get image from imageBB
        // let Photo = 'https://i.ibb.co/vvgVSz2b/notice.jpg';
        // current date add
        const Data = new Date().toLocaleDateString("bn-BD", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        // Mack all data into object
        const AllFormData = {Title,ShortDescription,LongDescription,Photo,Data}

        // Api url
        const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

        // cake data
        if (!Title || !ShortDescription || !LongDescription || !Photo) {
            toast.error("All fields are required")
        }else{
            // post data using Axios
            try {
                const res = await axios.post(`${ApiUrl}/post-notice`, AllFormData);

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
        <div className="w-[100%] h-[99%] flex flex-col items-center justify-center bg-cover bg-center rounded-xl " 
                style={{
            backgroundImage: `url(${Background.src})`,
        }}
        >
            <form onSubmit={handelAddNotice} className="flex flex-col gap-5 bg-[#ffffff] rounded-xl p-6 ">
               <div>
                  <h3 className="text-center font-bold text-2xl">Add Notice</h3>
               </div>
                <div className="flex flex-col">
                    <label htmlFor="Title" className="block text-sm font-medium text-zinc-700">
                       Add A Title
                    </label>
                    <input type="text" name="title" id="" placeholder="Tile" required
                     className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Add Photo" className="block text-sm font-medium text-zinc-700">
                        Add Photo
                    </label>
                    {/* <input type="file" name="photo" id="" 
                    className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " /> */}
                    {/* custom input filed */}
                    <CustomFileInput onFileSelect={handleFileSelect}  />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Description" className="block text-sm font-medium text-zinc-700">
                        Short Description
                    </label>
                    <input type="text" name="ShortDescription" id="" placeholder="Short Description" required
                    className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Description" className="block text-sm font-medium text-zinc-700">
                        Long Description
                    </label>
                    {/* <input type="text" name="LongDescription" id="" placeholder="Long Description" required
                    className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " /> */}
                    <RichTextEditor />
                </div>
                <button type="submit" className=" w-[90%] sm:w-[300px] lg:w-[350px] h-[40px] text-white 
                 bg-gradient-to-t from-[#E93B77] to-[#da6d93] rounded-[8px] ">
                    Add Notice
                </button>
            </form>
        </div>
    )
}