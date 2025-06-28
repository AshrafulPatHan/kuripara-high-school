// app/admin/page/event/details/page.tsx
import Image from "next/image";
import EditDeleteEventButtons from "@/components/admin/event/EditDeleteEventButtons"; // <- client component

export default function EventDetailsAdmin({ searchParams }: any) {
  const { id, Title, Description, Photo, Data } = searchParams;

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="mx-[3vw]">
          <Image src={Photo} alt="Event" width={1000} height={900} className="rounded-xl mb-4" />
        </div>
        <div className="w-[97vw] lg:w-[50vw]">
          <h1 className="text-xl md:text-2xl font-bold text-center">{Title}</h1>
          <p className="text-gray-500 mt-2">Date: {Data}</p>
          <p className="mt-3">{Description}</p>

          {/* 👇 Edit/Delete functionality */}
          <EditDeleteEventButtons
            eventData={{ id, Title, Description, Photo, Data }}
          />
        </div>
      </div>
    </div>
  );
}


