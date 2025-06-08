// app/details/page.tsx
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

export default function EventDetails({ searchParams }:{ 
searchParams: { _id: string; Title: string; Description: string; Photo: string; Data: string };})
{
  const { Title, Description, Photo, Data } = searchParams;

  return (
    <div className="p-10">
      <Image src={Photo} alt="Notice" width={600} height={400} className="rounded-xl mb-4" />
      <h1 className="text-2xl font-bold">{Title}</h1>
      <p className="mt-3">{Description}</p>
      <p className="text-gray-500 mt-5">Date: {Data}</p>
    </div>
  );
}
