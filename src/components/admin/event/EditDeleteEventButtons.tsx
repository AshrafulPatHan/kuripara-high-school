"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function EditDeleteEventButtons({ eventData }: { eventData: any }) {
  const router = useRouter();
  const { id, Title, Description, Photo, Data } = eventData;

  const handleEdit = () => {
    const query = new URLSearchParams({
      id,
      Title,
      Description,
      Photo,
      Data,
      IdData: id,
    }).toString();

    router.push(`/admin/page/event/details/edit?${query}`);
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;

    try {
      // 🟢 এখানেই টোকেন পাঠাতে হবে
      const token = localStorage.getItem("adminToken");
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_ADMIN}/delete-event/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`  // 🔑 token পাঠানো হচ্ছে
          }
        });
      if (res.status === 200) {
        toast.success("Event deleted successfully!");
        router.push("/admin/page/event");
      } else {
        toast.error("Failed to delete event!");
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
