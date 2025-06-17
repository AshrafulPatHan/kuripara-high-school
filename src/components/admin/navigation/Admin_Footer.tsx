import Link from "next/link";


export default function Admin_Footer(){
    return(
        <div>
            <div className="flex flex-row items-center justify-between  p-4 rounded-[12px] mb-0  ">
                <div>
                    <p>© Create by ashraful pathan</p>
                </div>
                <div className=" flex flex-row items-center gap-5">
                    <a target="_blank" rel="noopener noreferrer" href='https://ashraful.top/' className="text-blue-600 hover:underline">website</a>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/profile.php?id=100090953234693' className="text-blue-600 hover:underline">facebook</a>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ashraful-pathan' className="text-blue-600 hover:underline">Linkedin</a>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/AshrafulPatHan' className="text-blue-600 hover:underline">GitHub</a>
                </div>
            </div>
        </div>
    )
}