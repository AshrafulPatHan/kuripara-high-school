"use client"

import Image from "next/image";
import "./app.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";


export default function Teacher() {

const teachers = [
  { name: "মোঃ কামাল হোসেন", designation: "প্রধান শিক্ষক", photo: "/teacher/Kamal_sir.jpg" },
  { name: "শফিকুল ইসলাম", designation: "সহকারী প্রধান শিক্ষক (ভারপ্রাপ্ত) (শরীরচর্চা)", photo: "/teacher/soficol-main.jpeg" },
  { name: "মনজুরুল মোরশেদ", designation: " সিনিয়র শিক্ষক(কৃষি শিক্ষা)", photo: "/teacher/মনজুরুল-মোরশেদ.jpg", cv:"/doc/মনজুরুল-মোরশেদ.html" },
  { name: "মোসাম্মৎ রেক্সোনা ", designation: "সিনিয়র শিক্ষক(বাংলা)", photo: "/teacher/raksona.jpg" },
  { name: "পারভীন আক্তার", designation: " সিনিয়র শিক্ষক(সামাজিক বিজ্ঞান)", photo: "/teacher/parbin.jpeg" }, //parvin image is not found
  { name: "শাহ গোলাম রব্বানী", designation: " সিনিয়র শিক্ষক(ভৌত বিজ্ঞান)", photo: "/teacher/Rabani.jpg" },
  { name: "মোঃ তায়ফুর রহমান বাবুল", designation: " সিনিয়র শিক্ষক(ইংরেজি)", photo: "/teacher/babul_sir.jpg" },
  { name: "মোঃ আমির হোসেন", designation: " সিনিয়র শিক্ষক(ইসলাম শিক্ষা)", photo: "/teacher/amir_hosen.jpeg" },
  // 1
  { name: "ফাহিমা মেহজাবিন", designation: "সহকারী শিক্ষক (গার্হস্থ্য বিজ্ঞান)", photo: "/teacher/fahima.jpeg" }, // fahima image is not found
  { name: "নুসরাত জাহান মনি", designation: "সহকারী শিক্ষক (ব্যবসায় শিক্ষা)", photo: "/teacher/mene.jpeg" },
  { name: "সৈয়দা সাদিয়া আফরিন", designation: "সহকারী শিক্ষক (খন্ডকালীন)", photo: "/teacher/sadiya_afrin.jpeg" },
  { name: "শাহাদাত হোসাইন", designation: "সহকারী শিক্ষক (খণ্ডকালীন)", photo: "/teacher/sahadat.jpeg" },
  // 2
  { name: "মোঃ শাহান উল্লাহ", designation: "সহকারী শিক্ষক (খণ্ডকালীন)", photo: "/teacher/Sahan_sir.jpg" },
  { name: "শাকিল আহম্মেদ", designation: "সহকারী শিক্ষক (খণ্ডকালীন)", photo: "/teacher/sakil.jpeg" },
  { name: "সিরাজুম মুনিরা রিমি", designation: "সহকারী শিক্ষক (খণ্ডকালীন)", photo: "/teacher/meme-main.jpeg" },
  { name: "সাদ্দাম হোসেন", designation: "সহকারী শিক্ষক (খণ্ডকালীন)", photo: "/teacher/suddum.jpeg" },
  { name: "মোঃ নাইম", designation: "সহকারী শিক্ষক (খণ্ডকালীন)", photo: "/teacher/nayem.jpeg" },
  { name: "আজহারুল ইসলাম", designation: "সহকারী শিক্ষক (খণ্ডকালীন)", photo: "/teacher/aujharul.jpeg" },
  // 3
  { name: "মোঃ তৈমুর হাসান প্রনয়", designation: "কম্পিউটার ল্যাব অপারেটর", photo: "/teacher/comp.jpeg" },
  { name: "সোহেনা আক্তার অনি", designation: "অফিস সহকারী", photo: "/teacher/sohana.jpeg" },// ony image is not found
  { name: "মোঃ ইসমাইল", designation: "পিয়ন", photo: "/teacher/ismile.jpeg" },
  { name: "লাখি আক্তার ", designation: "আয়া", photo: "/teacher/laki.jpeg" },
  { name: "মোসা: সালমা আক্তার", designation: "পরিচ্ছন্নতাকর্মী", photo: "/teacher/salma.jpeg" },
  { name: "রোকসানা আক্তার", designation: "পরিচ্ছন্নতাকর্মী", photo: "/teacher/roksana.jpeg" },
  { name: "তাওলাদ হোসেন", designation: "গার্ড", photo: "/teacher/toulad.jpeg" }
  //ok
];


  return (
  <>
  <Navbar/>
    <div className=" px-4 flex flex-col items-center mx-auto py-10 spacer layer1 ">
      <h2 className="text-2xl text-center font-semibold pb-8 text-white">শিক্ষক ও কর্মচারীবৃন্দ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {teachers.map((teacher, index) => (
          <div key={index} className="bg-[#d1c4c4] rounded-lg py-6 px-1 flex flex-col items-center hover:shadow-xl hover:shadow-gray-300">
            <Image
              src={teacher.photo}
              alt={teacher.name}
              width={160}
              height={200}
              className="w-[160px] h-[200px] object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-medium text-center">{teacher.name}</h3>
            <div className="flex flex-col items-center gap-2">
              <p className="text-gray-700 text-center mx-auto ">{teacher.designation}</p>
              {/* শুধু তখনই CV দেখান যখন teacher.cv আছে */}
                {teacher.cv && (
                  <a
                    href={teacher.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-700 underline hover:no-underline"
                    aria-label={`${teacher.name} - CV`}
                  >
                    (CV)
                  </a>
                )}
            </div>
            
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </>
  );
}
