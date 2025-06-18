"use client"
import { useSearchParams } from "next/navigation"; // ✅ import this
import Image from "next/image";
import Background from "@/assets/image/university-418219_1920.jpg";
import CustomFileInput from "@/components/admin/ui/input/CustomInput";
import toast from "react-hot-toast";
import { FormEvent, useMemo, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

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
        const JoditEditor = dynamic(() => import("@/components/admin/editor/JoditEditor"), {
        ssr: false
    });

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
                const res = await axios.put(`${ApiUrl}/update-notice`, AllFormData);
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
                className="w-[100%] h-[99%] flex flex-col items-center justify-center bg-cover bg-center rounded-xl"
                style={{
                    backgroundImage: `url(${Background.src})`,
                }}
            >
                <form onSubmit={handelUpdateNotice} className="flex flex-col gap-5 bg-[#ffffff] rounded-xl p-6 w-[50vw] ">
                    <div>
                        <h3 className="text-center font-bold text-2xl">Add Notice</h3>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div>
                            <Image src={Photo} width={500} height={500} className="w-[300px] h-[300px] object-cover " alt="image" />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 ">
                            <div className="flex flex-col">
                                <label htmlFor="Title" className="block text-sm font-medium text-zinc-700">
                                    Add A Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    defaultValue={Title}
                                    required
                                    className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="ShortDescription" className="block text-sm font-medium text-zinc-700">
                                    Short Description
                                </label>
                                <input
                                    type="text"
                                    name="ShortDescription"
                                    placeholder="Short Description"
                                    defaultValue={ShortDescription}
                                    required
                                    className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="LongDescription" className="block text-sm font-medium text-zinc-700">
                            Long Description
                        </label>
                        <JoditEditor value={content} onChange={setContent} />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-[90%] sm:w-[300px] lg:w-[350px] h-[40px] text-white 
                            bg-gradient-to-t from-[#E93B77] to-[#da6d93] rounded-[8px] mt-7 "
                        >
                            Update Notice
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}