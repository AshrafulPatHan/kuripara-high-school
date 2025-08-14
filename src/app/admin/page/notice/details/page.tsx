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
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 left-10 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 pt-8 pb-6">
          {/* Notice Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-2 rounded-full shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
              </svg>
              <span className="font-semibold">Official Notice</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl">
                <Image 
                  src={Photo} 
                  alt={Title || "Notice"} 
                  width={500} 
                  height={500} 
                  className="w-full max-w-lg h-auto object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center leading-tight mb-6">
              {Title}
            </h1>
            
            {/* Date Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="font-medium">{Data}</span>
              </div>
            </div>

            {/* Short Description */}
            <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Summary
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {ShortDescription}
              </p>
            </div>
          </div>

          {/* Long Description Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden mb-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white p-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Detailed Information
              </h2>
              <div className="flex items-center gap-2 mt-2 text-indigo-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="text-sm">{Data}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <style >{`
                .responsive-iframe {
                  position: relative;
                  width: 100%;
                  height: 0;
                  padding-bottom: 56.25%;
                  margin: 1.5rem 0;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                .responsive-iframe iframe {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  left: 0;
                  top: 0;
                  border: none;
                }
                .prose {
                  max-width: none;
                }
                .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
                  color: #1f2937;
                  margin-top: 1.5em;
                  margin-bottom: 0.5em;
                }
                .prose p {
                  margin-bottom: 1.25em;
                  line-height: 1.7;
                  color: #374151;
                }
                .prose ul, .prose ol {
                  margin-bottom: 1.25em;
                  padding-left: 1.5em;
                }
                .prose li {
                  margin-bottom: 0.5em;
                  color: #374151;
                }
                .prose a {
                  color: #4f46e5;
                  text-decoration: underline;
                  transition: color 0.2s;
                }
                .prose a:hover {
                  color: #3730a3;
                }
                .prose blockquote {
                  border-left: 4px solid #4f46e5;
                  padding-left: 1rem;
                  margin: 1.5rem 0;
                  font-style: italic;
                  background: #f8fafc;
                  padding: 1rem;
                  border-radius: 0.5rem;
                }
                .prose img {
                  border-radius: 12px;
                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                  margin: 1.5rem 0;
                }
                .prose table {
                  border-collapse: collapse;
                  width: 100%;
                  margin: 1.5rem 0;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .prose th, .prose td {
                  border: 1px solid #e5e7eb;
                  padding: 12px;
                  text-align: left;
                }
                .prose th {
                  background-color: #f9fafb;
                  font-weight: 600;
                  color: #1f2937;
                }
              `}</style>
              
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              />
            </div>
          </div>

          {/* Admin Actions Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                </svg>
                <span>Notice ID: {id}</span>
              </div>
              
              {/* Server-side Action Links */}
              <div className="flex gap-3">
                <EditDeleteButtons notice={{ id, Title, ShortDescription, LongDescription, Photo, Data }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// // app/admin/page/notice/details/page.tsx
// import Image from "next/image";
// import EditDeleteButtons from "@/components/admin/notice/EditDeleteButtons"; 

// function wrapIframe(html: string): string {
//   return html.replace(
//     /<iframe.*?<\/iframe>/g,
//     (match) => `<div class="responsive-iframe">${match}</div>`
//   );
// }

// export default function NoticeDetails({ searchParams }: any) {
//   const { id, Title, ShortDescription, LongDescription, Photo, Data } = searchParams;
//   const safeHtml = wrapIframe(LongDescription);

//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center mt-20">
//         <div className="mx-[3vw]">
//           <Image src={Photo} alt="Notice" width={500} height={500} className="rounded-xl mb-4 w-[500px] object-cover" />
//         </div>
//         <div className="w-[97vw] lg:w-[50vw] flex flex-col items-center">
//           <h1 className="text-xl md:text-2xl font-bold text-center">{Title}</h1>
//           <p className="text-gray-500 mt-2">Date: {Data}</p>
//           <p className="mt-3">{ShortDescription}</p>

//           <div className="bg-gradient-to-b from-[#e0dbdb] to-[#b3a6a6] w-[99vw] sm:w-[60vw] p-4 rounded-lg">
//             <style>
//               {`
//                 .responsive-iframe {
//                   position: relative;
//                   width: 100%;
//                   height: 0;
//                   padding-bottom: 56.25%;
//                   margin-top: 1rem;
//                   margin-bottom: 1rem;
//                 }
//                 .responsive-iframe iframe {
//                   position: absolute;
//                   width: 100%;
//                   height: 100%;
//                   left: 0;
//                   top: 0;
//                 }
//               `}
//             </style>
//             <p className="text-gray-500 mt-2 mb-4">Date: {Data}</p>
//             <div
//               className="prose prose-lg mx-w-[90vw] lg:max-w-[70vw] mx-auto"
//               dangerouslySetInnerHTML={{ __html: safeHtml }}
//             />
//           </div>

//           {/* 👇 This is a client component */}
//           <EditDeleteButtons notice={{ id, Title, ShortDescription, LongDescription, Photo, Data }} />
//         </div>
//       </div>
//     </div>
//   );
// }


