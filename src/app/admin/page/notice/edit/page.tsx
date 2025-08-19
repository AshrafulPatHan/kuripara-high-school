"use client"
import { useSearchParams } from "next/navigation"; // ✅ import this
import Image from "next/image";
// import Background from "@/assets/image/university-418219_1920.jpg";
import CustomFileInput from "@/components/admin/ui/input/CustomInput";
import toast from "react-hot-toast";
import { FormEvent, useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import JoditEditor from "@/components/admin/editor/JoditEditor"


export default function EditNoticeData() {
    const searchParams = useSearchParams(); // ✅ get searchParams

    const id = searchParams.get("id");
    const Title = searchParams.get("Title");
    const ShortDescription = searchParams.get("ShortDescription");
    const LongDescription = searchParams.get("LongDescription");
    const Photo = searchParams.get("Photo");
    const Data = searchParams.get("Data");
    const IdData = searchParams.get("IdData");

    const router = useRouter();
    const [content, setContent] = useState(LongDescription || '');

    // the text editor
    //     const JoditEditor = dynamic(() => import("@/components/admin/editor/JoditEditor"), {
    //     ssr: false
    // });

    const config = useMemo(() => ({
        readonly: false, 
        placeholder: "Start typings...",
        defaultValue: LongDescription
    }), [LongDescription]);


    if (!id || !Title || !ShortDescription || !LongDescription || !Photo || !Data || !IdData) {
        return <p className="text-red-600 text-center mt-10">❌ প্রয়োজনীয় তথ্য পাওয়া যায়নি</p>
    }

    const handelUpdateNotice = async (event: FormEvent<HTMLFormElement>) => {
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

        const AllFormData = { Title, ShortDescription, LongDescription, Photo, Data,IdData };
        const ApiUrl = process.env.NEXT_PUBLIC_SERVER_ADMIN;

        if (!Title || !ShortDescription || !LongDescription || !Photo) {
            toast.error("All fields are required");
        } else {
            try {
                // 🟢 এখানেই টোকেন পাঠাতে হবে
                const token = localStorage.getItem("adminToken");

                const res = await axios.put(`${ApiUrl}/update-notice`, AllFormData,{
                headers: {
                  Authorization: `Bearer ${token}`  // 🔑 token পাঠানো হচ্ছে
                }
              });
                if (res.status === 200 ) {
                    toast.success("Notice is Update successful!");
                    form.reset();
                    router.push("/admin/page/notice");
                } else {
                    toast.error("Fail to send data!");
                }
            } catch (err) {
                console.error("POST error:", err);
                toast.error("Server error!");
            }
        }
    };



    return(
        <div>
            <div
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center rounded-xl p-4 sm:p-6"
    style={{
    backgroundImage: `url("https://i.ibb.co.com/Hfz5cTxV/garrett-parker-Dlk-F4-db-COU-unsplash.jpg")`,
     }}
    >
  <form
    onSubmit={handelUpdateNotice}
    className="flex flex-col gap-5 rounded-xl p-6 w-full sm:w-[97%] lg:w-[70%] xl:w-[70%]
               bg-white/10 backdrop-blur-[2.5px] border border-white/30 shadow-lg"
              >
                <div>
                  <h3 className="text-center font-bold text-2xl text-white drop-shadow-lg">
                    Add Notice
                  </h3>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div>
                    <Image
                      src={Photo}
                      width={500}
                      height={500}
                      className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-lg"
                      alt="image"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row gap-4 w-full">
                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="Title"
                        className="block text-sm font-medium text-white"
                      >
                        Add A Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        defaultValue={Title}
                        required
                        className="w-full h-10 rounded-lg border border-white/40 bg-white/50 px-4 text-black"
                      />
                    </div>

                    <div className="flex flex-col w-full">
                      <label
                        htmlFor="ShortDescription"
                        className="block text-sm font-medium text-white"
                      >
                        Short Description
                      </label>
                      <input
                        type="text"
                        name="ShortDescription"
                        placeholder="Short Description"
                        defaultValue={ShortDescription}
                        required
                        className="w-full h-10 rounded-lg border border-white/40 bg-white/50 px-4 text-black"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <label
                    htmlFor="LongDescription"
                    className="block text-sm font-medium text-white"
                  >
                    Long Description
                  </label>
                  <div className="bg-white/70 rounded-lg overflow-hidden border border-white/40">
                    <JoditEditor value={content} onChange={setContent} />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="py-4 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-600 transition-all"
                  >
                    Update Notice
                  </button>
                </div> 
              </form>
            </div>
                                
        </div>
    )
}