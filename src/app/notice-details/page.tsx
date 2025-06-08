// app/details/page.tsx
import Image from "next/image";

type Props = {
  searchParams: {
    id: string;
    short: string;
    long: string;
    photo: string;
    date: string;
  };
};

export default function NoticeDetails({ searchParams }: Props) {
  const { short, long, photo, date } = searchParams;

  return (
    <div className="p-10">
      <Image src={photo} alt="Notice" width={600} height={400} className="rounded-xl mb-4" />
      <h1 className="text-2xl font-bold">{short}</h1>
      <p className="mt-3">{long}</p>
      <p className="text-gray-500 mt-5">Date: {date}</p>
    </div>
  );
}
