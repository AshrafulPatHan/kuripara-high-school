"use client";
import Image from "next/image";
import CustomFileInput from "@/components/admin/ui/input/CustomInput";
import toast from "react-hot-toast";
import { FormEvent, useState, useRef, useMemo } from "react";
import axios from "axios";
// import JoditEditor from "jodit-react";
// import JoditEditor from "@/components/admin/editor/JoditEditor"
import dynamic from "next/dynamic";
import PrivateRoute from "@/components/admin/auth/PrivateRoute";



export default function AddNotice() {
    const [Photo, setPhoto] = useState("");
    const [content, setContent] = useState('');
    const editor = useRef(null);

    // Dynamic import of the client-side-only component
    const JoditEditor = dynamic(() => import("@/components/admin/editor/JoditEditor"), {
    ssr: false
    });
    // config editor
    const config = useMemo(() => ({
        readonly: false, 
        placeholder: "Start typings..."
    }), []);

    // handle file upload to imageBB
    const handleFileSelect = async (file: File) => {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
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

    // handle form submission
  const handelAddNotice = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const Title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const ShortDescription = (form.elements.namedItem("ShortDescription") as HTMLInputElement).value;
    const LongDescription = content;

    const Data = new Date().toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const AllFormData = { Title, ShortDescription, LongDescription, Photo, Data };
    const ApiUrl = process.env.NEXT_PUBLIC_SERVER_ADMIN;

    if (!Title || !ShortDescription || !LongDescription || !Photo) {
      toast.error("All fields are required");
    } else {
      try {
        // 🟢 এখানেই টোকেন পাঠাতে হবে
        const token = localStorage.getItem("adminToken");

        const res = await axios.post(
          `${ApiUrl}/post-notice`,
          AllFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`  // 🔑 token পাঠানো হচ্ছে
            }
          }
        );

        if (res.status === 200 || res.status === 201) {
          toast.success("Notice is add successful!");
          form.reset();
          setPhoto('');
          setContent('');
        } else {
          toast.error("Fail to send data!");
        }
      } catch (err) {
        console.error("POST error:", err);
        toast.error("Server error!");
      }
    }
  };


    return (
        <PrivateRoute>
            <div
                className="w-[100%] h-[99%] flex flex-col items-center justify-center bg-cover bg-center rounded-xl"
                style={{
                    backgroundImage: `url("https://i.ibb.co.com/9HctPtdG/yura-lytkin-C9-LAdcvmg-VU-unsplash.jpg")`,
                }}
            >
                <form
                  onSubmit={handelAddNotice}
                  className="flex flex-col items-center gap-5 rounded-xl my-4 p-6 
                             w-[120vw] xl:w-auto
                             bg-white/10 border border-white/30
                             backdrop-blur-[2.3px] shadow-lg"
                >
                  <div>
                    <h3 className="text-center font-bold text-2xl text-white">Add Notice</h3>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col lg:flex-row gap-4">
                      <div className="flex flex-col">
                        <label htmlFor="Title" className="block text-sm font-medium text-white">
                          Add A Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Title"
                          required
                          className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border border-white/50 px-4 bg-white/10 text-white placeholder-white/70 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="ShortDescription" className="block text-sm font-medium text-white">
                          Short Description
                        </label>
                        <input
                          type="text"
                          name="ShortDescription"
                          placeholder="Short Description"
                          required
                          className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border border-white/50 px-4 bg-white/10 text-white placeholder-white/70 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="Add Photo" className="block text-sm font-medium text-white">
                        Add Photo
                      </label>
                      <fieldset>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleFileSelect(file);
                            }
                          }}
                          className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4
                                     file:rounded file:border-0 file:text-sm file:font-semibold
                                     file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100
                                     border border-white/50 rounded-lg bg-white/10"
                        />
                        <label className="text-xs text-white/70">Max size 32MB</label>
                      </fieldset>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center px-2 w-[99vw] sm:w-auto">
                    <label htmlFor="LongDescription" className="block text-sm font-medium text-white">
                      Long Description
                    </label>
                    <JoditEditor value={content} onChange={setContent} />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-40 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                      Add Notice
                    </button>
                  </div>
                </form>

            </div>
        </PrivateRoute>
    );
}
