// app/details/page.tsx
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import Image from "next/image";


function wrapIframe(html: string): string {
  // iframe ট্যাগ খুঁজে বের করে তার চারপাশে responsive div র‍্যাপ করো
  return html.replace(
    /<iframe.*?<\/iframe>/g,
    (match) => `<div class="responsive-iframe">${match}</div>`
  );
}


export default function NoticeDetails({ searchParams }: any) {
  const { short, long, photo, date } = searchParams;
  const safeHtml = wrapIframe(long);

  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="mx-[3vw]">
          <Image src={photo} alt="Notice" width={1000} height={900} className="rounded-xl mb-4 w-[97vw] lg:w-[70vw]  " />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div>
            <h1 className=" text-xl md:text-2xl font-bold text-center mt-5 mb-3">{short}</h1>
          </div>
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
          <p className="text-gray-500 mt-2 mb-4">Date: {date}</p>
            {/* Html is convert*/}
            <div
              className="prose prose-lg mx-w-[90vw] lg:max-w-[70vw] mx-auto "
              dangerouslySetInnerHTML={{ __html: safeHtml }}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
