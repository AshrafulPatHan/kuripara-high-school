// app/admin/page/notice/details/page.tsx
import Image from "next/image";
import EditDeleteButtons from "@/components/admin/notice/EditDeleteButtons"; 

function wrapIframe(html: string): string {
  return html.replace(
    /<iframe.*?<\/iframe>/g,
    (match) => `<div class="responsive-iframe">${match}</div>`
  );
}

export default function NoticeDetails({ searchParams }: any) {
  const { id, Title, ShortDescription, LongDescription, Photo, Data } = searchParams;
  const safeHtml = wrapIframe(LongDescription);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="mx-[3vw]">
          <Image src={Photo} alt="Notice" width={500} height={500} className="rounded-xl mb-4 w-[500px] object-cover" />
        </div>
        <div className="w-[97vw] lg:w-[50vw] flex flex-col items-center">
          <h1 className="text-xl md:text-2xl font-bold text-center">{Title}</h1>
          <p className="text-gray-500 mt-2">Date: {Data}</p>
          <p className="mt-3">{ShortDescription}</p>

          <div className="bg-gradient-to-b from-[#e0dbdb] to-[#b3a6a6] w-[99vw] sm:w-[60vw] p-4 rounded-lg">
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
            <div
              className="prose prose-lg mx-w-[90vw] lg:max-w-[70vw] mx-auto"
              dangerouslySetInnerHTML={{ __html: safeHtml }}
            />
          </div>

          {/* 👇 This is a client component */}
          <EditDeleteButtons notice={{ id, Title, ShortDescription, LongDescription, Photo, Data }} />
        </div>
      </div>
    </div>
  );
}




// "use client"


// import axios from "axios";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";


// // iframe
// function wrapIframe(html: string): string {
//   return html.replace(
//     /<iframe.*?<\/iframe>/g,
//     (match) => `<div class="responsive-iframe">${match}</div>`
//   );
// }

// // main function

// export default function NoticeDetails({ searchParams }: any) {
//     const { id,Title, ShortDescription,LongDescription, Photo, Data } = searchParams;
//     const router = useRouter();

//     let _IdData:string = id
//     const handelEditNotice = (ok:any) => {
//       const query = new URLSearchParams({
//             id: String(ok._id),
//             Title: ok.Title,
//             ShortDescription: ok.ShortDescription,
//             LongDescription: ok.LongDescription,
//             Photo: ok.Photo,
//             Data: ok.Data,
//             IdData:_IdData
//       }).toString();

//       router.push(`/admin/page/notice/edit?${query}`);
//     };
  
//     // delete notice
//     const handleDeleteNotice = async () => {
//       const confirmDelete = confirm("Are you sure delete this data?");
//       if (!confirmDelete) return;

//       try {
//       const res = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_ADMIN}/delete-notice/${id}`);
//       if (res.status === 200) {
//           toast.success("notice delete is add successfully!");
//           router.push("/admin/page/notice");
//       } else {
//           toast.error("notice is not Delete!");
//       }
//       } catch (err) {
//       console.error("Delete Error:", err);
//       toast.error("Server error!");
//       }
//     };
//     // the iframe
//     const safeHtml = wrapIframe(LongDescription);

//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center mt-20">
//         <div className="mx-[3vw]">
//           <Image src={Photo} alt="Notice" width={500} height={500} className="rounded-xl mb-4  w-[500px] object-cover " />
//         </div>
//         <div className="w-[97vw] lg:w-[50vw] flex flex-col items-center ">
//             <div>
//                 <h1 className=" text-xl md:text-2xl font-bold text-center">{Title}</h1>
//                 <p className="text-gray-500 mt-2">Date: {Data}</p>
//                 {/* <p className="text-gray-500 mt-2">id: {id}</p> */}
//             </div>
//             <p className="mt-3">{ShortDescription}</p>
//             <div className="bg-gradient-to-b from-[#e0dbdb] to-[#b3a6a6] w-[99vw] sm:w-[60vw] p-4 rounded-lg ">
//                 {/* Responsive iframe CSS */}
//                 <style>
//                     {`
//                     .responsive-iframe {
//                         position: relative;
//                         width: 100%;
//                         height: 0;
//                         padding-bottom: 56.25%;
//                         margin-top: 1rem;
//                         margin-bottom: 1rem;
//                     }
//                     .responsive-iframe iframe {
//                         position: absolute;
//                         width: 100%;
//                         height: 100%;
//                         left: 0;
//                         top: 0;
//                     }
//                     `}
//                 </style>
//                 <p className="text-gray-500 mt-2 mb-4">Date: {Data}</p>
//                     {/* Html is convert*/}
//                     <div
//                     className="prose prose-lg mx-w-[90vw] lg:max-w-[70vw] mx-auto "
//                     dangerouslySetInnerHTML={{ __html: safeHtml }}
//                 />
//             </div>
//             <div className="flex flex-row items-center gap-4 mt-4 ">
//                 <button  onClick={handleDeleteNotice} className="text-sm text-red-600 border-[2px] border-red-600 cursor-pointer hover:underline rounded-lg px-4 py-1 w-[116px] h-[33px] font-semibold ">Delete</button>
//                 <button onClick={()=>{handelEditNotice(searchParams)}} className="text-sm cursor-pointer bg-[#E91F63] rounded-lg px-4 py-1 w-[116px] h-[33px] text-white font-semibold ">Edit</button>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }
