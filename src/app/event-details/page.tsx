// app/details/page.tsx
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import Image from "next/image";

// type Props = {
//   searchParams: {
//     _id: number;
//    Title: string;
//    Description: string;
//    Photo: string;
//    Data: string;
//   };
// };

export default function EventDetails({ searchParams }: any) {
  const { Title, Description, Photo, Data } = searchParams;

  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="mx-[3vw]">
          <Image src={Photo} alt="Notice" width={1000} height={900} className="rounded-xl mb-4  " />
        </div>
        <div className="w-[97vw] lg:w-[50vw] ">
          <div>
            <h1 className=" text-xl md:text-2xl font-bold text-center">{Title}</h1>
            <p className="text-gray-500 mt-2">Date: {Data}</p>
          </div>
          <p className="mt-3">{Description}</p>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}
