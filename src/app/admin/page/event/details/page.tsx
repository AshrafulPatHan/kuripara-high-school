"use client"

// event/details/page.tsx
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function EventDetailsAdmin({ searchParams }: any) {
  const { id,Title, Description, Photo, Data } = searchParams;
  const router = useRouter();

  let _IdData:string = id
    const handelEditDetails = (even:any) => {
      const query = new URLSearchParams({
          id: String(even._id),
          Title: even.Title,
          Description: even.Description,
          Photo: even.Photo,
          Data: even.Data,
          IdData:_IdData
      }).toString();

      router.push(`/admin/page/event/details/edit?${query}`);
    };
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="mx-[3vw]">
          <Image src={Photo} alt="Notice" width={1000} height={900} className="rounded-xl mb-4  " />
        </div>
        <div className="w-[97vw] lg:w-[50vw] ">
            <div>
                <h1 className=" text-xl md:text-2xl font-bold text-center">{Title}</h1>
                <p className="text-gray-500 mt-2">Date: {Data}</p>
                <p className="text-gray-500 mt-2">id: {id}</p>
            </div>
            <p className="mt-3">{Description}</p>
            <div className="flex flex-row items-center gap-4 mt-4 ">
                <button className="text-sm text-red-600 border-[2px] border-red-600 cursor-pointer hover:underline rounded-lg px-4 py-1 w-[116px] h-[33px] font-semibold ">Delete</button>
                <button onClick={()=>{handelEditDetails(searchParams)}} className="text-sm cursor-pointer bg-[#E91F63] rounded-lg px-4 py-1 w-[116px] h-[33px] text-white font-semibold ">Edit</button>
            </div>
        </div>
      </div>
    </div>
  );
}
