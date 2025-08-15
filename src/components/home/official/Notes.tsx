import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsInfoSquareFill } from "react-icons/bs";



export default function NotesData() {
    const notes = [
        { label: "এমপিও কোড", value: "৩০০৩০৬১৩০১" },
        { label: "ইআইএন নং", value: "১১২৩৮৪" },
        { label: "উপজেলা কোড", value: "১৫২" },
        { label: "জেলা কোড", value: "১৬" },
        { label: "সেন্টার কোড", value: "৫৮৭" }
    ];
    const numbers = [
        { label: "প্রতিষ্ঠানের ফোন বা মোবাইল নম্বরসহ যোগাযোগের ঠিকানা", value: "০১৮১৬১৮১৫৪১", icon: <FaPhone className="w-4 h-4 text-blue-500" /> },
        { label: "তথ্য সেবা কেন্দ্রের ঠিকানা ও মোবাইল নম্বর", value: "কুড়িপাড়া, নাসিক-২৭ নং ওয়ার্ড। নম্বরঃ ০১৮১৬১৮১৫৪১", icon: <FaMapMarkerAlt className="w-4 h-4 text-green-500" /> },
        { label: "অভিযোগ নিষ্পত্তি কর্মকর্তার নাম ঠিকানা ও মোবাইল নম্বর", value: "০১৭২০০২৩৬৮৮", icon: <BsInfoSquareFill className="w-4 h-4 text-red-500" /> },
        { label: "যেকোনো তথ্য বা বিভিন্ন বিষয়াদি জানতে যোগাযোগ", value: "০১৮১৩৪৮৫০৬১", icon: <FaPhone className="w-4 h-4 text-purple-500" /> },
    ];

  return (
    <section className="mt-20 px-4 mx-auto max-w-screen-lg">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-gray-200">
        <h2 className="text-center mb-8 font-bold text-3xl text-gray-800">
          📒 নোটস
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-5">
          {notes.map((note, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200"
            >
              <div>
                <span className="block font-semibold text-gray-700">{note.label}:</span>
                <span className="text-gray-600">{note.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-5">
          {numbers.map((numbers, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200"
            >
              {numbers.icon && <div className="flex-shrink-0">{numbers.icon}</div>}
              <div>
                <span className="block font-semibold text-gray-700">{numbers.label}:</span>
                <span className="text-gray-600">{numbers.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// export default function NotesData(){
//     return(
//         <div className="flex flex-col items-center mt-20 px-2 mx-auto max-w-screen overflow-hidden">
//             <div className="w-[95vw] lg:w-[70vw] xl:w-[60vw] ">
//                 <h2 className="text-center mb-7 font-bold text-2xl">Notes</h2>
//                 <p className="main-text-intro">
//                     <span className="span-text-intro">
//                         এমপিও কোড:
//                     </span>
//                     ৩০০৩০৬১৩০১
//                 </p>
//                 <p className="main-text-intro">
//                     <span className="span-text-intro">
//                         ইআইএন নং:
//                     </span>
//                     ১১২৩৮৪
//                 </p>
//                 <p className="main-text-intro">
//                     <span className="span-text-intro">
//                         উপজেলা কোড:
//                     </span>
//                     ১৫২
//                 </p>
//                 <p className="main-text-intro">
//                     <span className="span-text-intro">
//                         জলা কোড:
//                     </span>
//                     ১৬
//                 </p>
//                 <p className="main-text-intro">
//                     <span className="span-text-intro">
//                         সেন্টার কোড:
//                     </span>
//                     ৫৮৭
//                 </p>
//                 <p className="main-text-intro">
//                     <span className="span-text-intro">
//                         প্রতিষ্ঠানের ফোন বা মোবাইল নম্বরসহ যোগাযোগের ঠিকানা:
//                     </span>
//                     ০১৮১৬১৮১৫৪১
//                 </p>
//                 <p className="main-text-intro">
//                     <span className="span-text-intro">
//                         তথ্য সেবা কেন্দ্রের ঠিকানা ও মোবাইল নম্বর:
//                     </span>
//                     কুড়িপাড়া, নাসিক-২৭ নং ওয়ার্ড। নম্বরঃ ০১৮১৬১৮১৫৪১
//                 </p>
//                 <p className="main-text-intro">
//                     <span className="span-text-intro">
//                         অভিযোগ নিষ্পত্তি কর্মকর্তার নাম ঠিকানা ও মোবাইল নম্বর:
//                     </span>
//                     ০১৭২০০২৩৬৮৮
//                 </p>
//                 <p className="main-text-intro">
//                     <span className="span-text-intro">
//                         যেকোনো তথ্য বা বিভিন্ন বিষয়াদি জানতে যোগাযোগ:
//                     </span>
//                     ০১৮১৩৪৮৫০৬১
//                 </p>
//             </div>
//         </div>
//     )
// }