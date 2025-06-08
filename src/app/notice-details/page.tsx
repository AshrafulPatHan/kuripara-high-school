// app/details/page.tsx
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import Image from "next/image";



export default function NoticeDetails({ searchParams }: any) {
  const { short, long, photo, date } = searchParams;

  return (
    <div>
      <Navbar/>
      <div className="p-10">
        <Image src={photo} alt="Notice" width={600} height={400} className="rounded-xl mb-4" />
        <h1 className="text-2xl font-bold">{short}</h1>
        {/* <p className="mt-3">{long}</p> */}
        {/* এখানে dangerouslySetInnerHTML ব্যবহার করা হয়েছে */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: long }}
        />
        <p className="text-gray-500 mt-5">Date: {date}</p>
      </div>
      <Footer/>
    </div>
  );
}
