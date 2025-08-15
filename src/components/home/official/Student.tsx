import TabilStudentNumber from "@/components/home/official/ui/TabilStudentNumber";
import ConvertedSummaryTable from "@/components/home/official/ui/ConvertedSummaryTable";


export default function StudentsData(){
    return(
        <div className="flex flex-col items-center mt-20 ">
            <div>
                <h3 className="text-center mb-7 font-bold text-2xl  ">বিদ্যালয়টি ২০২৫ শিক্ষাবর্ষে নিন্মরুপ শিক্ষার্থী অধ্যয়ণরত রয়েছে</h3>
                <TabilStudentNumber/>
                <h3 className="text-center mb-7 mt-20 font-bold text-2xl">বিগত ০৩ বছরের এস.এস.সি. পরীক্ষার ফলাফলঃ</h3>
                <ConvertedSummaryTable/>
            </div>
        </div>
    )
}