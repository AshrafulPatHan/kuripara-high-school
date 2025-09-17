import Image from "next/image";
import Ku from "@/assets/image/school/ku.webp";

export default function Intro(){
    return(
        <div className="min-h-screen  relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center pt-20 pb-16 px-1 sm:px-4">
                {/* Header Section with School Logo */}
                <div className="mb-12 text-center">
                    {/*<div className="relative inline-block mb-6">
                        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur opacity-30"></div>
                        <div className="relative bg-white rounded-full p-4 shadow-2xl">
                            <Image 
                                src={Ku} 
                                alt="কুড়িপাড়া উচ্চ বিদ্যালয়" 
                                width={120} 
                                height={120} 
                                className="rounded-full object-cover"
                            />
                        </div>
                    </div>*/}
                    
                    <div className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent pt-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            বিদ্যালয় পরিচিতি
                        </h1>
                    </div>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto"></div>
                </div>

                {/* Main Content Card */}
                <div className="w-full max-w-5xl">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                        
                        {/* School Name Header */}
                        <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-8 text-center">
                            <h2 className="text-2xl sm:text-3xl font-bold">কুড়িপাড়া উচ্চ বিদ্যালয়</h2>
                            <p className="text-emerald-100 mt-2">১৯৬৮ সাল থেকে শিক্ষার আলো ছড়িয়ে চলেছে</p>
                        </div>

                        {/* Information Grid */}
                        <div className="p-2 sm:p-8 space-y-8">
                            {/* Basic Information */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="bg-emerald-500 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-emerald-800 mb-2">বিদ্যালয়ের নাম</h3>
                                            <p className="text-emerald-700 text-base leading-relaxed">
                                                কুড়িপাড়া উচ্চ বিদ্যালয়
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-2 sm:p-6 border border-blue-200">
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-blue-800 mb-2">ঠিকানা</h3>
                                            <p className="text-blue-700 text-base leading-relaxed">
                                                কুড়িপাড়া ডাকঘর- ১ নং ডিসি মিলস উপজেলা- বন্দর জেলা- নারায়ণগঞ্জ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detailed Sections */}
                            <div className="space-y-6">
                                
                                {/* Location */}
                                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200">
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="bg-teal-500 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-teal-800 mb-3">অবস্থান</h3>
                                            <p className="text-teal-700 text-base leading-relaxed">
                                                কুড়িপাড়া উচ্চ বিদ্যালয়টি নারায়ণগঞ্জ জেলার বন্দর উপজেলার ধামগড় ইউনিয়ন পরিষদের একমাত্র মাধ্যমিক শিক্ষা পাঠদানকারী প্রতিষ্ঠান। প্রতিষ্ঠানটি শীতলক্ষা নদীর তীরঘেষে অত্যন্ত মনোরম পরিবেশে অবস্থিত। প্রতিষ্ঠানটি পশ্চিম পাশের এশিয়ার বিখ্যাত আদমজী পাটকলের অবস্থান ছিল। বর্তমানে এখানে রয়েছে আদমজী ইপিজেড। বিদ্যালয়টি ১-১-১৯৮২ সালে এমপিওভুক্তির মাধ্যমে এমপিওভুক্ত প্রতিষ্ঠানের নীতিমালার আলোকে পরিচালিত হয়ে আসছে।
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Establishment */}
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="bg-purple-500 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-purple-800 mb-3">প্রতিষ্ঠাকাল</h3>
                                            <p className="text-purple-700 text-base leading-relaxed">
                                                কুড়িপাড়া গ্রামে বিশিষ্ট শিক্ষানুরাগী ব্যক্তি জনাব আলহাজ এম এ রফিক ১৯৬৮ সালে প্রতিষ্ঠানটি প্রতিষ্ঠা করেন।
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Infrastructure */}
                                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-orange-800 mb-3">ভৌতগত অবকাঠামো</h3>
                                            <p className="text-orange-700 text-base leading-relaxed">
                                                বিদ্যালয়টি তিনটি দ্বিতল এবং দুটি একতালা পাকা ভবন নিয়ে একাডেমিক কার্যক্রম পরিচালিত করে আসছে। বিদ্যালয়টিতে সরকার প্রদত্ত একটি কম্পিউটার ল্যাব রয়েছে।
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Education Level */}
                                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-200">
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="bg-indigo-500 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-indigo-800 mb-3">পাঠদানের স্তর</h3>
                                            <p className="text-indigo-700 text-base leading-relaxed">
                                                বিদ্যালয়টি সহশিক্ষা হিসেবে ষষ্ঠ থেকে দশম শ্রেণি পর্যন্ত পাঠদান করা হয়। নবম-দশম শ্রেণিতে বিজ্ঞান, মানবিক, ব্যবসা শিক্ষা শাখায় পাঠদান করা হয়। এখানে ষষ্ঠ থেকে দশম শ্রেণি পর্যন্ত মূল শ্রেণির বিপরীতে অতিরিক্ত আরো পাঁচটি শাখাসহ প্রতিদিন দশটি শ্রেণি পাঠদান করা হয়।
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Staff Information */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                                        <div className="flex flex-col sm:flex-row items-start gap-4">
                                            <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-green-800 mb-3">শিক্ষক ও কর্মচারী</h3>
                                                <div className="space-y-2">
                                                    <p className="text-green-700 text-base">শিক্ষক: <span className="font-semibold">১৮জন</span></p>
                                                    <p className="text-green-700 text-base">কর্মচারী: <span className="font-semibold">০৮জন</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
                                        <div className="flex flex-col sm:flex-row items-start gap-4">
                                            <div className="bg-rose-500 rounded-full p-2 flex-shrink-0">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-rose-800 mb-3">পাঠদানের অনুমতি ও স্বীকৃতি</h3>
                                                <p className="text-rose-700 text-base leading-relaxed">
                                                    বিদ্যালয়টি ১৯৬৮ সালে মাধ্যমিক বিদ্যালয় হিসেবে পাঠদানের অনুমতি ও স্বীকৃতি লাভ করে।
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Transportation */}
                                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-yellow-800 mb-3">যোগাযোগ ব্যবস্থা</h3>
                                            <p className="text-yellow-700 text-base leading-relaxed">
                                                মদনপুর থেকে মদনগঞ্জ সড়ক পথে গকুলদাসের বাগ চৌরাস্তা হয়ে অথবা ভাংতি অথবা কুড়িপাড়া বটতলা হয়ে যেকোন যানবাহনে বিদ্যালয়ে আসা যায়।
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// import Image from "next/image";
// import Ku from "@/assets/image/school/ku.webp";
// import "./official.css"

// export default function Intro(){
//     return(
//         <div className="flex flex-col items-center mt-20 px-2 mx-auto max-w-screen overflow-hidden">
//             <div >
//                 <div className="w-[95vw] lg:w-[70vw] xl:w-[60vw] ">
//                     <h1 className="text-center mb-7 font-bold text-2xl">বিদ্যালয় পরিচিতি</h1>
//                     <p className="main-text-intro">
//                         <span className="span-text-intro">
//                             বিদ্যালয়ের নাম :
//                         </span>
//                         কুড়িপাড়া উচ্চ বিদ্যালয়
//                     </p>
//                     <p className="main-text-intro">
//                         <span className="span-text-intro">
//                             ঠিকানা:
//                         </span>
//                         কুড়িপাড়া ডাকঘর- ১ নং ডিসি মিলস উপজেলা- বন্দর জেলা- নারায়ণগঞ্জ
//                     </p>
//                     <p className="main-text-intro">
//                         <span className="span-text-intro">
//                             অবস্থান:
//                         </span>
//                         কুড়িপাড়া উচ্চ বিদ্যালয়টি নারায়ণগঞ্জ জেলার বন্দর উপজেলার ধামগড় ইউনিয়ন পরিষদের একমাত্র মাধ্যমিক শিক্ষা পাঠদানকারী প্রতিষ্ঠান। প্রতিষ্ঠানটি শীতলক্ষা নদীর তীরঘেষে অত্যন্ত মনোরম পরিবেশে অবস্থিত। প্রতিষ্ঠানটি পশ্চিম পাশের এশিয়ার বিখ্যাত আদমজী পাটকলের অবস্থান ছিল। বর্তমানে এখানে রয়েছে আদমজী ইপিজেড। বিদ্যালয়টি ১-১-১৯৮২ সালে এমপিওভুক্তির মাধ্যমে এমপিওভুক্ত প্রতিষ্ঠানের নীতিমালার আলোকে পরিচালিত হয়ে আসছে।
//                     </p>
//                     <p className="main-text-intro">
//                         <span className="span-text-intro">
//                             প্রতিষ্ঠাকাল:
//                         </span>
//                         কুড়িপাড়া গ্রামে বিশিষ্ট শিক্ষানুরাগী ব্যক্তি জনাব আলহাজ এম এ রফিক ১৯৬৮ সালে প্রতিষ্ঠানটি প্রতিষ্ঠা করেন।
//                     </p>
//                     <p className="main-text-intro">
//                         <span className="span-text-intro">
//                             ভৗতগত অবকাঠামো:
//                         </span>
//                         বিদ্যালয়টি তিনটি দ্বিতল এবং দুটি একতালা পাকা ভবন নিয়ে একাডেমিক কার্যক্রম পরিচালিত করে আসছে। বিদ্যালয়টিতে সরকার প্রদত্ত একটি কম্পিউটার ল্যাব রয়েছে।
//                     </p>
//                     <p className="main-text-intro">
//                         <span className="span-text-intro">
//                             পাঠদানের স্তর:
//                         </span>
//                         বিদ্যালয়টি সহশিক্ষা হিসেবে ষষ্ঠ থেকে দশম শ্রেণি পর্যন্ত পাঠদান করা হয়। নবম-দশম শ্রেণিতে বিজ্ঞান, মানবিক, ব্যবসা শিক্ষা শাখায় পাঠদান করা হয়। এখানে ষষ্ঠ থেকে দশম শ্রেণি পর্যন্ত মূল শ্রেণির বিপরীতে অতিরিক্ত আরো পাঁচটি শাখাসহ প্রতিদিন দশটি শ্রেণি পাঠদান করা হয়।
//                     </p>
//                     <p className="main-text-intro">
//                         <span className="span-text-intro">
//                             শিক্ষক ও কর্মচারীর সংখ্যা:
//                         </span>
//                          শিক্ষক ১৮জন কর্মচারীঃ ০৮জন
//                     </p>
//                     <p className="main-text-intro">
//                         <span className="span-text-intro">
//                             যোগাযোগ ব্যবস্থা:
//                         </span>
//                         মদনপুর থেকে মদনগঞ্জ সড়ক পথে গকুলদাসের বাগ চৌরাস্তা হয়ে অথবা ভাংতি অথবা কুড়িপাড়া বটতলা হয়ে যেকোন যানবাহনে বিদ্যালয়ে আসা যায়।
//                     </p>
//                     <p className="main-text-intro">
//                         <span className="span-text-intro">
//                             পাঠদানের অনুমতি ও স্বীকৃতি:
//                         </span>
//                         বিদ্যালয়টি ১৬৬৮ সালে মাধ্যমিক বিদ্যালয় হিসেবে পাঠদানের অনুমতি ও স্বীকৃতি লাভ করে।
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }