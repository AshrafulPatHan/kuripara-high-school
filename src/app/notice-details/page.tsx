// app/details/page.tsx
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import Image from "next/image";
// import { Calendar, ArrowLeft } from "lucide-react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";


import Link from "next/link";

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
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/notice" 
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200 mb-4"
          >
            <FaArrowLeftLong size={20} />
            <span className="text-sm">Back to Notices</span>
          </Link>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{short}</h1>
          <div className="flex items-center gap-2 mt-4 text-blue-200">
            <FaCalendarAlt size={18} />
            <span className="text-sm md:text-base">{date}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-8">
          
          {/* Image Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <Image 
                  src={photo} 
                  alt="Notice" 
                  width={1000} 
                  height={900} 
                  className="w-full h-64 md:h-[500px]  object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt size={16} />
                    <span className="text-sm font-medium">Published: {date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg">
              {/* Content Header */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 rounded-t-2xl border-b border-blue-100">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Notice Details</h2>
              </div>

              {/* Content Body */}
              <div className="p-6">
                {/* Responsive iframe CSS */}
                <style>
                  {`
                    .responsive-iframe {
                      position: relative;
                      width: 100%;
                      height: 0;
                      padding-bottom: 56.25%;
                      margin: 1.5rem 0;
                      border-radius: 12px;
                      overflow: hidden;
                      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }
                    .responsive-iframe iframe {
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      left: 0;
                      top: 0;
                      border: none;
                    }
                    
                    /* Enhanced prose styling */
                    .notice-content {
                      line-height: 1.8;
                      color: #374151;
                    }
                    
                    .notice-content h1, .notice-content h2, .notice-content h3, 
                    .notice-content h4, .notice-content h5, .notice-content h6 {
                      color: #1f2937;
                      font-weight: 600;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                    }
                    
                    .notice-content h1 { font-size: 1.875rem; }
                    .notice-content h2 { font-size: 1.5rem; }
                    .notice-content h3 { font-size: 1.25rem; }
                    
                    .notice-content p {
                      margin-bottom: 1.25rem;
                      text-align: justify;
                    }
                    
                    .notice-content ul, .notice-content ol {
                      margin: 1.25rem 0;
                      padding-left: 1.5rem;
                    }
                    
                    .notice-content li {
                      margin-bottom: 0.5rem;
                    }
                    
                    .notice-content blockquote {
                      border-left: 4px solid #3b82f6;
                      background: #f8fafc;
                      padding: 1rem 1.5rem;
                      margin: 1.5rem 0;
                      border-radius: 0 8px 8px 0;
                      font-style: italic;
                    }
                    
                    .notice-content table {
                      width: 100%;
                      border-collapse: collapse;
                      margin: 1.5rem 0;
                      background: white;
                      border-radius: 8px;
                      overflow: hidden;
                      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    }
                    
                    .notice-content th, .notice-content td {
                      padding: 0.75rem;
                      text-align: left;
                      border-bottom: 1px solid #e5e7eb;
                    }
                    
                    .notice-content th {
                      background: #f3f4f6;
                      font-weight: 600;
                    }
                    
                    .notice-content a {
                      color: #3b82f6;
                      text-decoration: underline;
                      transition: color 0.2s;
                    }
                    
                    .notice-content a:hover {
                      color: #1d4ed8;
                    }
                    
                    .notice-content img {
                      max-width: 100%;
                      height: auto;
                      border-radius: 8px;
                      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                      margin: 1.5rem 0;
                    }
                    
                    @media (max-width: 640px) {
                      .notice-content {
                        font-size: 0.95rem;
                      }
                      
                      .notice-content h1 { font-size: 1.5rem; }
                      .notice-content h2 { font-size: 1.25rem; }
                      .notice-content h3 { font-size: 1.125rem; }
                      
                      .notice-content table {
                        font-size: 0.875rem;
                      }
                      
                      .notice-content th, .notice-content td {
                        padding: 0.5rem;
                      }
                    }
                  `}
                </style>
                
                {/* Html content */}
                <div
                  className="notice-content"
                  dangerouslySetInnerHTML={{ __html: safeHtml }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl 
                font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 
                shadow-md hover:shadow-lg flex items-center gap-2">
                <span>Share Notice</span>
              </button>
              <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-semibold 
                hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md">
                Print
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

// // app/details/page.tsx
// import Footer from "@/components/navigation/footer";
// import Navbar from "@/components/navigation/navbar";
// import Image from "next/image";


// function wrapIframe(html: string): string {
//   // iframe ট্যাগ খুঁজে বের করে তার চারপাশে responsive div র‍্যাপ করো
//   return html.replace(
//     /<iframe.*?<\/iframe>/g,
//     (match) => `<div class="responsive-iframe">${match}</div>`
//   );
// }


// export default function NoticeDetails({ searchParams }: any) {
//   const { short, long, photo, date } = searchParams;
//   const safeHtml = wrapIframe(long);

//   return (
//     <div>
//       <Navbar/>
//       <div className="flex flex-col items-center justify-center mt-20">
//         <div className="mx-[3vw]">
//           <Image src={photo} alt="Notice" width={1000} height={900} className="rounded-xl mb-4 w-[97vw] lg:w-[70vw]  " />
//         </div>
//         <div className="flex flex-col items-center justify-center ">
//           <div>
//             <h1 className=" text-xl md:text-2xl font-bold text-center mt-5 mb-3">{short}</h1>
//           </div>
//           <div className="bg-gradient-to-b from-[#e0dbdb] to-[#b3a6a6] w-[99vw] sm:w-[70vw] p-4 rounded-lg ">
//           {/* Responsive iframe CSS */}
//           <style>
//             {`
//               .responsive-iframe {
//                 position: relative;
//                 width: 100%;
//                 height: 0;
//                 padding-bottom: 56.25%;
//                 margin-top: 1rem;
//                 margin-bottom: 1rem;
//               }
//               .responsive-iframe iframe {
//                 position: absolute;
//                 width: 100%;
//                 height: 100%;
//                 left: 0;
//                 top: 0;
//               }
//             `}
//           </style>
//           <p className="text-gray-500 mt-2 mb-4">Date: {date}</p>
//             {/* Html is convert*/}
//             <div
//               className="prose prose-lg mx-w-[90vw] lg:max-w-[70vw] mx-auto "
//               dangerouslySetInnerHTML={{ __html: safeHtml }}
//             />
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }
