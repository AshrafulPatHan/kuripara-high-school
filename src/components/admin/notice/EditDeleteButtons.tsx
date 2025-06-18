"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function EditDeleteButtons({ notice }: { notice: any }) {
  const router = useRouter();
  const { id, Title, ShortDescription, LongDescription, Photo, Data } = notice;

  const _IdData = id;

  const handleEdit = () => {
    const query = new URLSearchParams({
      id,
      Title,
      ShortDescription,
      LongDescription,
      Photo,
      Data,
      IdData: _IdData
    }).toString();

    router.push(`/admin/page/notice/edit?${query}`);
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this data?");
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_ADMIN}/delete-notice/${id}`);
      if (res.status === 200) {
        toast.success("Notice deleted successfully!");
        router.push("/admin/page/notice");
      } else {
        toast.error("Failed to delete notice.");
      }
    } catch (err) {
      console.error("Delete Error:", err);
      toast.error("Server error!");
    }
  };

  return (
    <div className="flex flex-row items-center gap-4 mt-4">
      <button
        onClick={handleDelete}
        className="text-sm text-red-600 border-[2px] border-red-600 cursor-pointer hover:underline rounded-lg px-4 py-1 w-[116px] h-[33px] font-semibold"
      >
        Delete
      </button>
      <button
        onClick={handleEdit}
        className="text-sm cursor-pointer bg-[#E91F63] rounded-lg px-4 py-1 w-[116px] h-[33px] text-white font-semibold"
      >
        Edit
      </button>
    </div>
  );
}
