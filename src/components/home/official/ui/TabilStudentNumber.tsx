import React from "react";

export default function TabilStudentNumber() {
  const tableData = [
    { no: "1.", className: "ষষ্ঠ", boy: 95, girl: 100, total: 195, comment: "" },
    { no: "2.", className: "সপ্তম", boy: 100, girl: 102, total: 202, comment: "" },
    { no: "3.", className: "অষ্টম", boy: 85, girl: 100, total: 185, comment: "" },
    {
      no: "4.", rowSpan: 3, groups: [
        { className: "নবম বিজ্ঞান", boy: 10, girl: 10, total: 20, comment: "" },
        { className: "নবম ব্যবসা শিক্ষা", boy: 35, girl: 30, total: 60, comment: "" },
        { className: "নবম মানবিক", boy: 35, girl: 45, total: 80, comment: "" }
      ]
    },
    {
      no: "5", rowSpan: 4, groups: [
        { className: "দশম বিজ্ঞান", boy: 12, girl: 8, total: 20, comment: "" },
        { className: "দশম ব্যবসা শিক্ষা", boy: 45, girl: 35, total: 70, comment: "" },
        { className: "দশম মানবিক", boy: 50, girl: 35, total: 85, comment: "" },
        { className: "সর্বমোট শিক্ষার্থী", boy: 467, girl: 463, total: 930, comment: "" }
      ]
    }
  ];

  const rowColors = ["bg-blue-50", "bg-green-50", "bg-pink-50", "bg-yellow-50"];

  return (
    <div className="w-[100vw] md:w-full overflow-x-auto md:overflow-visible">
      <div className="-mx-4 px-4 md:mx-0 md:px-0">
        <table className="border-collapse w-[623px] sm:w-[70vw] lg:w-[60vw] xl:w-[50vw] mx-auto shadow-lg rounded-lg overflow-hidden" cellPadding={7}>
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white">
              <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">ক্রম</th>
              <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">শ্রেণি</th>
              <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">ছেলে</th>
              <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">মেয়ে</th>
              <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">মোট</th>
              <th className="border border-gray-200 px-4 py-2 text-center text-[16px]">মন্তব্য</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => {
              if (row.groups) {
                return (
                  <React.Fragment key={idx}>
                    {row.groups.map((g, gIdx) => (
                      <tr key={gIdx} className={`${rowColors[gIdx % rowColors.length]} hover:bg-indigo-100 transition`}>
                        {gIdx === 0 && (
                          <td rowSpan={row.rowSpan} className="border border-gray-300 px-4 py-2 text-center align-top font-semibold bg-orange-200">{row.no}</td>
                        )}
                        <td className="border border-gray-300 px-4 py-2 text-[16px]">{g.className}</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold">{g.boy}</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold">{g.girl}</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold bg-yellow-100">{g.total}</td>
                        <td className="border border-gray-300 px-4 py-2">{g.comment || "\u00A0"}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              }
              return (
                <tr key={idx} className={`${rowColors[idx % rowColors.length]} hover:bg-indigo-100 transition`}>
                  <td className="border border-gray-300 px-4 py-2 text-center font-semibold bg-orange-200">{row.no}</td>
                  <td className="border border-gray-300 px-4 py-2 text-[16px]">{row.className}</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">{row.boy}</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold">{row.girl}</td>
                  <td className="border border-gray-300 px-4 py-2 font-bold bg-yellow-100">{row.total}</td>
                  <td className="border border-gray-300 px-4 py-2">{row.comment || "\u00A0"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


// import React from "react";

// export default function TabilStudentNumber() {
//   const tableStyle: React.CSSProperties = { borderCollapse: "collapse" };
//   const thtdStyle: React.CSSProperties = {
//     border: "1px solid #000",
//     padding: "0in 0.08in",
//     verticalAlign: "top",
//   };

//   return (
//     <div className="w-[100vw] md:w-full overflow-x-auto md:overflow-visible">
//       <div className="-mx-4 px-4 md:mx-0 md:px-0">
//         <table width={623} cellPadding={7} cellSpacing={0} style={tableStyle}>
//           <colgroup>
//             <col style={{ width: 27 }} />
//             <col style={{ width: 152 }} />
//             <col style={{ width: 90 }} />
//             <col style={{ width: 90 }} />
//             <col style={{ width: 90 }} />
//             <col style={{ width: 89 }} />
//           </colgroup>

//           <tbody>
//             {/* Header row */}
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle}>
//                 <p style={{ textAlign: "center", fontSize: 16 }}>ক্রম</p>
//               </td>
//               <td style={thtdStyle}>
//                 <p style={{ textAlign: "center", fontSize: 16 }}>শ্রেণি</p>
//               </td>
//               <td style={thtdStyle}>
//                 <p style={{ textAlign: "center", fontSize: 16 }}>ছেলে</p>
//               </td>
//               <td style={thtdStyle}>
//                 <p style={{ textAlign: "center", fontSize: 16 }}>মেয়ে</p>
//               </td>
//               <td style={thtdStyle}>
//                 <p style={{ textAlign: "center", fontSize: 16 }}>মোট</p>
//               </td>
//               <td style={thtdStyle}>
//                 <p style={{ textAlign: "center", fontSize: 16 }}>মন্তব্য</p>
//               </td>
//             </tr>

//             {/* Row 1 */}
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle}><p>1.</p></td>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>ষষ্ঠ</p></td>
//               <td style={thtdStyle}><p>95</p></td>
//               <td style={thtdStyle}><p>100</p></td>
//               <td style={thtdStyle}><p>195</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>

//             {/* Row 2 */}
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle}><p>2.</p></td>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>সপ্তম</p></td>
//               <td style={thtdStyle}><p>100</p></td>
//               <td style={thtdStyle}><p>102</p></td>
//               <td style={thtdStyle}><p>202</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>

//             {/* Row 3 */}
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle}><p>3.</p></td>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>অষ্টম</p></td>
//               <td style={thtdStyle}><p>85</p></td>
//               <td style={thtdStyle}><p>100</p></td>
//               <td style={thtdStyle}><p>185</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>

//             {/* Rows 4.x (first cell has rowSpan=3) */}
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle} rowSpan={3}>
//                 <p style={{ marginBottom: 0 }}>&nbsp;</p>
//                 <p>4.</p>
//               </td>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>নবম বিজ্ঞান</p></td>
//               <td style={thtdStyle}><p>10</p></td>
//               <td style={thtdStyle}><p>10</p></td>
//               <td style={thtdStyle}><p>20</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>নবম ব্যবসা শিক্ষা</p></td>
//               <td style={thtdStyle}><p>35</p></td>
//               <td style={thtdStyle}><p>30</p></td>
//               <td style={thtdStyle}><p>60</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>নবম মানবিক</p></td>
//               <td style={thtdStyle}><p>35</p></td>
//               <td style={thtdStyle}><p>45</p></td>
//               <td style={thtdStyle}><p>80</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>

//             {/* Rows 5.x (first cell has rowSpan=4) */}
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle} rowSpan={4}>
//                 <p style={{ marginBottom: 0 }}>&nbsp;</p>
//                 <p>5</p>
//               </td>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>দশম বিজ্ঞান</p></td>
//               <td style={thtdStyle}><p>12</p></td>
//               <td style={thtdStyle}><p>8</p></td>
//               <td style={thtdStyle}><p>20</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>দশম ব্যবসা শিক্ষা</p></td>
//               <td style={thtdStyle}><p>45</p></td>
//               <td style={thtdStyle}><p>35</p></td>
//               <td style={thtdStyle}><p>70</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>দশম মানবিক</p></td>
//               <td style={thtdStyle}><p>50</p></td>
//               <td style={thtdStyle}><p>35</p></td>
//               <td style={thtdStyle}><p>85</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>
//             <tr style={{ verticalAlign: "top" }}>
//               <td style={thtdStyle}><p style={{ fontSize: 16 }}>সর্বমোট শিক্ষার্থী</p></td>
//               <td style={thtdStyle}><p>467</p></td>
//               <td style={thtdStyle}><p>463</p></td>
//               <td style={thtdStyle}><p>930</p></td>
//               <td style={thtdStyle}><p>&nbsp;</p></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
