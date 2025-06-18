"use client"

// event/details/page.tsx
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


// iframe
function wrapIframe(html: string): string {
  return html.replace(
    /<iframe.*?<\/iframe>/g,
    (match) => `<div class="responsive-iframe">${match}</div>`
  );
}

// main function

export default function NoticeDetails({ searchParams }: any) {
    const { id,Title, ShortDescription,LongDescription, Photo, Data } = searchParams;
    const router = useRouter();

    let _IdData:string = id
    const handelEditDetails = (even:any) => {
      const query = new URLSearchParams({
            id: String(even._id),
            Title: even.Title,
            ShortDescription: even.ShortDescription,
            LongDescription: even.LongDescription,
            Photo: even.Photo,
            Data: even.Data,
            IdData:_IdData
      }).toString();

      router.push(`/admin/page/event/details/edit?${query}`);
    };
  
    // delete notice
    const handleDeleteNotice = async () => {
        const confirmDelete = confirm("Are you sure delete this data?");
        if (!confirmDelete) return;

        try {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_ADMIN}/delete-notice/${id}`);
        if (res.status === 200) {
            toast.success("notice delete is add successfully!");
            router.push("/admin/page/event");
        } else {
            toast.error("Event is not add!");
        }
        } catch (err) {
        console.error("Delete Error:", err);
        toast.error("Server error!");
        }
    };
    // the iframe
    const safeHtml = wrapIframe(LongDescription);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="mx-[3vw]">
          <Image src={Photo} alt="Notice" width={1000} height={900} className="rounded-xl mb-4  " />
        </div>
        <div className="w-[97vw] lg:w-[50vw] ">
            <div>
                <h1 className=" text-xl md:text-2xl font-bold text-center">{Title}</h1>
                {/* <p className="text-gray-500 mt-2">Date: {Data}</p> */}
                <p className="text-gray-500 mt-2">id: {id}</p>
            </div>
            <p className="mt-3">{ShortDescription}</p>
            <div className="bg-gradient-to-b from-[#e0dbdb] to-[#b3a6a6] w-[99vw] sm:w-[70vw] p-4 rounded-lg ">
                {/* Responsive iframe CSS */}
                <style>
                    {`
                    .responsive-iframe {
                        position: relative;
                        width: 100%;
                        height: 0;
                        padding-bottom: 56.25%;
                        margin-top: 1rem;
                        margin-bottom: 1rem;
                    }
                    .responsive-iframe iframe {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        top: 0;
                    }
                    `}
                </style>
                <p className="text-gray-500 mt-2 mb-4">Date: {Data}</p>
                    {/* Html is convert*/}
                    <div
                    className="prose prose-lg mx-w-[90vw] lg:max-w-[70vw] mx-auto "
                    dangerouslySetInnerHTML={{ __html: safeHtml }}
                />
            </div>
            <div className="flex flex-row items-center gap-4 mt-4 ">
                <button  onClick={handleDeleteNotice} className="text-sm text-red-600 border-[2px] border-red-600 cursor-pointer hover:underline rounded-lg px-4 py-1 w-[116px] h-[33px] font-semibold ">Delete</button>
                <button onClick={()=>{handelEditDetails(searchParams)}} className="text-sm cursor-pointer bg-[#E91F63] rounded-lg px-4 py-1 w-[116px] h-[33px] text-white font-semibold ">Edit</button>
            </div>
        </div>
      </div>
    </div>
  );
}
