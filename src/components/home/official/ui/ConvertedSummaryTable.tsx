import React from "react";

export default function ConvertedSummaryTable() {
  // JSON data
  const tableData = [
    { year: "এস.এস.সি-২০২৫", total: 119, pass: 88, fail: 31, gpa5: 2, rate: "73.95%" },
    { year: "এস.এস.সি-২০২৪", total: 139, pass: 139, fail: 0, gpa5: 15, rate: "100%" },
    { year: "এস.এস.সি-২০২৩", total: 145, pass: 134, fail: 11, gpa5: 5, rate: "92.41%" },
  ];

  // Table header titles
  const tableHeaders = [
    "সন",
    "মোট পরীক্ষার্থী",
    "কৃতকার্য",
    "অকৃতকার্য",
    "জিপিএ-৫",
    "পাশের হার",
  ];

  // Row color classes
  const rowColors = ["bg-blue-50", "bg-green-50", "bg-pink-50"];

  return (
    <div className="w-[100vw] md:w-full overflow-x-auto md:overflow-visible">
      <table className="w-[620px] sm:w-[70vw] lg:w-[60vw] xl:w-[50vw] border border-gray-300 border-collapse mx-auto shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
            {tableHeaders.map((header, i) => (
              <th
                key={i}
                className="border border-gray-200 px-4 py-3 text-center font-bold text-sm"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={`${rowColors[index % rowColors.length]} hover:bg-yellow-100 transition`}
            >
              <td className="border border-gray-300 px-4 py-2 text-base font-medium">
                {row.year}
              </td>
              <td className="border border-gray-300 px-4 py-2 font-bold">{row.total}</td>
              <td className="border border-gray-300 px-4 py-2 font-bold">{row.pass}</td>
              <td className="border border-gray-300 px-4 py-2 font-bold">{row.fail}</td>
              <td className="border border-gray-300 px-4 py-2 font-bold">
                {row.gpa5.toString().padStart(2, "0")}
              </td>
              <td className="border border-gray-300 px-4 py-2 font-bold">{row.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



// import React from "react";

// export default function ConvertedSummaryTable() {
//   // JSON data
//   const tableData = [
//     {
//       year: "এস.এস.সি-২০২৫",
//       total: 119,
//       pass: 88,
//       fail: 31,
//       gpa5: 2,
//       rate: "73.95%",
//     },
//     {
//       year: "এস.এস.সি-২০২৪",
//       total: 139,
//       pass: 139,
//       fail: 0,
//       gpa5: 15,
//       rate: "100%",
//     },
//     {
//       year: "এস.এস.সি-২০২৩",
//       total: 145,
//       pass: 134,
//       fail: 11,
//       gpa5: 5,
//       rate: "92.41%",
//     },
//   ];

//   // Table header titles
//   const tableHeaders = [
//     "সন",
//     "মোট পরীক্ষার্থী",
//     "কৃতকার্য",
//     "অকৃতকার্য",
//     "জিপিএ-৫",
//     "পাশের হার",
//   ];

//   return (
//     <div className="w-[100vw] md:w-full overflow-x-auto md:overflow-visible">
//       <table className="min-w-[620px] border border-black border-collapse mx-auto">
//         <thead>
//           <tr>
//             {tableHeaders.map((header, i) => (
//               <th
//                 key={i}
//                 className="border border-black px-2 py-2 text-center font-bold text-sm"
//               >
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row, index) => (
//             <tr key={index} className="text-center">
//               <td className="border border-black px-2 py-2 text-base">{row.year}</td>
//               <td className="border border-black px-2 py-2 font-bold text-sm">{row.total}</td>
//               <td className="border border-black px-2 py-2 font-bold text-sm">{row.pass}</td>
//               <td className="border border-black px-2 py-2 font-bold text-sm">{row.fail}</td>
//               <td className="border border-black px-2 py-2 font-bold text-sm">{row.gpa5.toString().padStart(2, "0")}</td>
//               <td className="border border-black px-2 py-2 font-bold text-sm">{row.rate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

