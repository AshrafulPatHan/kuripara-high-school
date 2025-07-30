import Image from "next/image";
import Ku from "@/assets/image/school/ku.webp";
import "./official.css"

export default function Intro(){
    return(
        <div className="flex flex-col items-center mt-20 px-2 mx-auto max-w-screen overflow-hidden">
            <div >
                <div className="w-[95vw] lg:w-[70vw] xl:w-[60vw] ">
                    <h1 className="text-center mb-7 font-bold text-2xl">বিদ্যালয় পরিচিতি</h1>
                    <p className="main-text-intro">
                        <span className="span-text-intro">
                            বিদ্যালয়ের নাম :
                        </span>
                        কুড়িপাড়া উচ্চ বিদ্যালয়
                    </p>
                    <p className="main-text-intro">
                        <span className="span-text-intro">
                            ঠিকানা:
                        </span>
                        কুড়িপাড়া ডাকঘর- ১ নং ডিসি মিলস উপজেলা- বন্দর জেলা- নারায়ণগঞ্জ
                    </p>
                    <p className="main-text-intro">
                        <span className="span-text-intro">
                            অবস্থান:
                        </span>
                        কুড়িপাড়া উচ্চ বিদ্যালয়টি নারায়ণগঞ্জ জেলার বন্দর উপজেলার ধামগড় ইউনিয়ন পরিষদের একমাত্র মাধ্যমিক শিক্ষা পাঠদানকারী প্রতিষ্ঠান। প্রতিষ্ঠানটি শীতলক্ষা নদীর তীরঘেষে অত্যন্ত মনোরম পরিবেশে অবস্থিত। প্রতিষ্ঠানটি পশ্চিম পাশের এশিয়ার বিখ্যাত আদমজী পাটকলের অবস্থান ছিল। বর্তমানে এখানে রয়েছে আদমজী ইপিজেড। বিদ্যালয়টি ১-১-১৯৮২ সালে এমপিওভুক্তির মাধ্যমে এমপিওভুক্ত প্রতিষ্ঠানের নীতিমালার আলোকে পরিচালিত হয়ে আসছে।
                    </p>
                    <p className="main-text-intro">
                        <span className="span-text-intro">
                            প্রতিষ্ঠাকাল:
                        </span>
                        কুড়িপাড়া গ্রামে বিশিষ্ট শিক্ষানুরাগী ব্যক্তি জনাব আলহাজ এম এ রফিক ১৯৬৮ সালে প্রতিষ্ঠানটি প্রতিষ্ঠা করেন।
                    </p>
                    <p className="main-text-intro">
                        <span className="span-text-intro">
                            ভৗতগত অবকাঠামো:
                        </span>
                        বিদ্যালয়টি তিনটি দ্বিতল এবং দুটি একতলা পাকা ভবন নিয়ে একাডেমিক কার্যক্রম পরিচালিত করে আসছে। বিদ্যালয়টিতে সরকার প্রদত্ত একটি কম্পিউটার ল্যাব রয়েছে।
                    </p>
                    <p className="main-text-intro">
                        <span className="span-text-intro">
                            পাঠদানের স্তর:
                        </span>
                        বিদ্যালয়টি সহশিক্ষা হিসেবে ষষ্ঠ থেকে দশম শ্রেণি পর্যন্ত পাঠদান করা হয়। নবম-দশম শ্রেণিতে বিজ্ঞান, মানবিক, ব্যবসা শিক্ষা শাখায় পাঠদান করা হয়। এখানে ষষ্ঠ থেকে দশম শ্রেণি পর্যন্ত মূল শ্রেণির বিপরীতে অতিরিক্ত আরো পাঁচটি শাখাসহ প্রতিদিন দশটি শ্রেণি পাঠদান করা হয়।
                    </p>
                    <p className="main-text-intro">
                        <span className="span-text-intro">
                            শিক্ষক ও কর্মচারীর সংখ্যা:
                        </span>
                         শিক্ষক ১৮জন কর্মচারীঃ ০৮জন
                    </p>
                    <p className="main-text-intro">
                        <span className="span-text-intro">
                            যাগাযোগ ব্যবস্থা:
                        </span>
                        মদনপুর থেকে মদনগঞ্জ সড়ক পথে গকুলদাসের বাগ চৌরাস্তা হয়ে অথবা ভাংতি অথবা কুড়িপাড়া বটতলা হয়ে যেকোন যানবাহনে বিদ্যালয়ে আসা যায়।
                    </p>
                    <p className="main-text-intro">
                        <span className="span-text-intro">
                            পাঠদানের অনুমতি ও স্বীকৃতি:
                        </span>
                        বিদ্যালয়টি ১৬৬৮ সালে মাধ্যমিক বিদ্যালয় হিসেবে পাঠদানের অনুমতি ও স্বীকৃতি লাভ করে।
                    </p>
                </div>
            </div>
        </div>
    )
}