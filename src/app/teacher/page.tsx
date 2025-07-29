"use client"

import Image from "next/image";
// import ok from "../../assets/image/school/teacher/";



export default function Teacher() {

const teachers = [
  { name: "মোঃ কামাল হোসেন", designation: "প্রধান শিক্ষক", photo: "../../assets/image/school/teacher/kamal.jpg" },
  { name: "শফিকুল ইসলাম", designation: "সহকারী প্রধান শিক্ষক", photo: "../../assets/image/school/teacher/shafikul.jpg" },
  { name: "মনজুরুল মোসাদ্দেক", designation: "সহকারী শিক্ষক (গণিত)", photo: "../../assets/image/school/teacher/monjurul.jpg" },
  { name: "মোসাম্মৎ রেবেকা", designation: "সহকারী শিক্ষক (শিশু শ্রেণি)", photo: "../../assets/image/school/teacher/rebeka.jpg" },
  { name: "পারভীন আক্তার", designation: "সহকারী শিক্ষক (বিজ্ঞান)", photo: "../../assets/image/school/teacher/parvin.jpg" },
  { name: "শাঈখ গোলাম বরকত", designation: "সহকারী শিক্ষক (বাংলা)", photo: "../../assets/image/school/teacher/borkot.jpg" },
  { name: "মুহাম্মদ তায়েফুর রহমান বাবুল", designation: "সহকারী শিক্ষক (ইংরেজি)", photo: "../../assets/image/school/teacher/babul.jpg" },
  { name: "মোঃ আমিন হোসেন", designation: "সহকারী শিক্ষক (ইংরেজি)", photo: "../../assets/image/school/teacher/amin.jpg" },
  { name: "ফাইজা মেহেরাবিন", designation: "সহকারী শিক্ষক (ইংরেজি)", photo: "../../assets/image/school/teacher/faiza.jpg" },
  { name: "নুসরাত জাহান মুনি", designation: "সহকারী শিক্ষক (ধর্ম)", photo: "../../assets/image/school/teacher/nusrat.jpg" },
  { name: "সৈয়দা সাদিয়া আফরিন", designation: "সহকারী শিক্ষক", photo: "../../assets/image/school/teacher/sadia.jpg" },
  { name: "শাহাদাত হোসেন", designation: "সহকারী শিক্ষক", photo: "../../assets/image/school/teacher/shahadat.jpg" },
  { name: "মোঃ শাহিন উজ্জ্বল", designation: "সহকারী শিক্ষক", photo: "../../assets/image/school/teacher/shahin.jpg" },
  { name: "শাকিল আহমেদ", designation: "সহকারী শিক্ষক", photo: "../../assets/image/school/teacher/shakil.jpg" },
  { name: "সিরাজুম মুনিরা রিমি", designation: "সহকারী শিক্ষক", photo: "../../assets/image/school/teacher/rimi.jpg" },
  { name: "সাদ্দাম হোসেন", designation: "সহকারী শিক্ষক", photo: "../../assets/image/school/teacher/saddam.jpg" },
  { name: "মোঃ নাইম", designation: "সহকারী শিক্ষক", photo: "../../assets/image/school/teacher/naim.jpg" },
  { name: "আজহারুল ইসলাম", designation: "সহকারী শিক্ষক", photo: "../../assets/image/school/teacher/azharul.jpg" },
  { name: "মোঃ তৈমুর হাসান প্রণয়", designation: "কম্পিউটার ল্যাব", photo: "../../assets/image/school/teacher/pronoy.jpg" },
  { name: "সোহেনা আক্তার অনি", designation: "অফিস সহকারী", photo: "../../assets/image/school/teacher/oni.jpg" },
  { name: "মোঃ ইনামুল", designation: "পিয়ন", photo: "../../assets/image/school/teacher/inamul.jpg" },
  { name: "নাসি আক্তার", designation: "আয়া", photo: "../../assets/image/school/teacher/nasi.jpg" },
  { name: "মোয়াশ সালমা আক্তার", designation: "পরিচ্ছন্নতাকর্মী", photo: "../../assets/image/school/teacher/salma.jpg" },
  { name: "রোকসানা আক্তার", designation: "পরিচ্ছন্নতাকর্মী", photo: "../../assets/image/school/teacher/roksana.jpg" },
  { name: "তাজমা হোসেন", designation: "গার্ড", photo: "../../assets/image/school/teacher/tazma.jpg" }
];


  return (
    <div className="w-[95vw] mx-auto py-10">
      <h2 className="text-2xl text-center font-semibold mb-8">শিক্ষক ও কর্মচারীবৃন্দ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {teachers.map((teacher, index) => (
          <div key={index} className="bg-[#f8f4f4] rounded-lg py-6 flex flex-col items-center hover:shadow-2xl">
            <Image
              src={teacher.photo}
              alt={teacher.name}
              width={160}
              height={200}
              className="w-[160px] h-[200px] object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-medium text-center">{teacher.name}</h3>
            <p className="text-gray-700 text-center">{teacher.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
