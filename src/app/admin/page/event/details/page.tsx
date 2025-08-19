// app/admin/page/event/details/page.tsx
import Image from "next/image";
import EditDeleteEventButtons from "@/components/admin/event/EditDeleteEventButtons"; // <- client component

export default function EventDetailsAdmin({ searchParams }: any) {
  const { id, Title, Description, Photo, Data } = searchParams;
  
  return (
    <div className="min-h-screen ">
      {/* Hero Section with Image */}
      <div className="relative">
        {/* Background blur effect */}
        {/*<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white z-10"></div>*/}
        
        <div className="container mx-auto px-4 pt-8 pb-16">
          {/* Image Container with enhanced styling */}
          <div className="relative max-w-6xl mx-auto mb-8">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20"></div>
              
              <Image 
                src={Photo} 
                alt={Title || "Event"} 
                width={1200} 
                height={700} 
                className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 z-30">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-gray-700">Admin Event</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto relative z-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 sm:p-12">
              
              {/* Title Section */}
              <div className="text-center mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  {Title}
                </h1>
                
                {/* Date Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-medium">{Data}</span>
                </div>
              </div>

              {/* Description Section */}
              <div className="prose prose-lg max-w-none mb-10">
                <div className="bg-gray-50/70 rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Event Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg whitespace-pre-wrap">
                    {Description}
                  </p>
                </div>
              </div>

              {/* Action Buttons Section */}
              <div className="border-t border-gray-200/50 pt-8">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Event ID: {id}</span>
                  </div>
                  
                  {/* Enhanced Edit/Delete Buttons */}
                  <div className="transform hover:scale-105 transition-transform duration-200">
                    <EditDeleteEventButtons
                      eventData={{ id, Title, Description, Photo, Data }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
}


// // app/admin/page/event/details/page.tsx
// import Image from "next/image";
// import EditDeleteEventButtons from "@/components/admin/event/EditDeleteEventButtons"; // <- client component

// export default function EventDetailsAdmin({ searchParams }: any) {
//   const { id, Title, Description, Photo, Data } = searchParams;

//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center mt-20">
//         <div className="mx-[3vw]">
//           <Image src={Photo} alt="Event" width={1000} height={900} className="rounded-xl mb-4" />
//         </div>
//         <div className="w-[97vw] lg:w-[50vw]">
//           <h1 className="text-xl md:text-2xl font-bold text-center">{Title}</h1>
//           <p className="text-gray-500 mt-2">Date: {Data}</p>
//           <p className="mt-3">{Description}</p>

//           {/* 👇 Edit/Delete functionality */}
//           <EditDeleteEventButtons
//             eventData={{ id, Title, Description, Photo, Data }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


