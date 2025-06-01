import Link from "next/link";


export default function Admin_Footer(){
    return(
        <div>
            <div className="flex flex-row items-center justify-between bg-[#c7bebe] p-4 rounded-[12px] mb-4  ">
                <div>
                    <p>© Create by ashraful pathan</p>
                </div>
                <div className=" flex flex-row items-center gap-5">
                    <Link href='https://ashraful.top/' className="text-blue-600 hover:underline">website</Link>
                    <Link href='https://www.facebook.com/profile.php?id=100090953234693' className="text-blue-600 hover:underline">facebook</Link>
                    <Link href='https://www.linkedin.com/in/ashraful-pathan' className="text-blue-600 hover:underline">Linkedin</Link>
                    <Link href='https://github.com/AshrafulPatHan' className="text-blue-600 hover:underline">GitHub</Link>
                </div>
            </div>
        </div>
    )
}