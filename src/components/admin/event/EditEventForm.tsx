"use client";

import Image from "next/image";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function EditEventForm({
  id,
  Title,
  Description,
  Photo,
  Data,
  IdData,
}: any) {
  const router = useRouter();

  const handelFromEvents = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const Title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const Description = (form.elements.namedItem("description") as HTMLInputElement).value;
    const Data = new Date().toLocaleDateString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const AllFormData = { IdData, Title, Description, Photo, Data };
    const ApiUrl = process.env.NEXT_PUBLIC_SERVER_ADMIN;

    if (!Title || !Description || !Photo) {
      toast.error("সব ফিল্ড পূরণ করুন");
    } else {
      try {
        // 🟢 এখানেই টোকেন পাঠাতে হবে
        const token = localStorage.getItem("adminToken");

        const res = await axios.put(`${ApiUrl}/update-event`, AllFormData,{
          headers: {
            Authorization: `Bearer ${token}`  // 🔑 token পাঠানো হচ্ছে
          }
        });
        if (res.status === 200) {
          toast.success("ইভেন্ট সফলভাবে আপডেট হয়েছে!");
          router.push("/admin/page/event");
        } else {
          toast.error("ডাটা পাঠাতে সমস্যা হচ্ছে!");
        }
      } catch (err) {
        console.error("PUT error:", err);
        toast.error("সার্ভার সমস্যা!");
      }
    }
  };

  return (
    <form
      onSubmit={handelFromEvents}
      className="flex flex-col gap-5 bg-[#ffffff] rounded-xl p-6 "
    >
      <div>
        <h3 className="text-center font-bold text-2xl">Edit Events</h3>
      </div>
      <div>
        <Image
          width={500}
          height={500}
          src={Photo}
          alt="edit photo"
          className="w-[350px] h-[200px] object-cover rounded-lg "
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Title" className="block text-sm font-medium text-zinc-700">
          Add A Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={Title}
          className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Description" className="block text-sm font-medium text-zinc-700">
          Add Description
        </label>
        <input
          type="text"
          name="description"
          placeholder="Add Description"
          defaultValue={Description}
          className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4"
        />
      </div>
      <button
        type="submit"
        className="w-[90%] sm:w-[300px] lg:w-[350px] h-[40px] text-white 
        bg-gradient-to-t from-[#E93B77] to-[#da6d93] rounded-[8px]"
      >
        Update Events
      </button>
    </form>
  );
}
