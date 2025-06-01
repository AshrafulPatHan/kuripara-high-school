import Link from "next/link";


export default function Side_bar(){
    return(
        <div className="sticky top-4 z-50 bg-gradient-to-t from-[#202020] to-[#3E3D45]  w-[250px]  h-[97vh] rounded-[12px]
        ml-2 p-4 text-white ">
            <div >
                <div>
                    <Link href='/admin/page/add-notice'>Add Notice</Link>
                </div>
                <div>
                     <Link href='/admin/page/add-events'>Post Event</Link>
                </div>
                <div>
                     <Link href='/admin/page/notice'>All Notice</Link>
                </div>
                <div>
                     <Link href='/admin/page/event'>All Events</Link>
                </div>
                <div>
                    <Link href='/admin/page/chang-password'>Chang Password</Link>
                </div>
            </div>
        </div>
    )
}