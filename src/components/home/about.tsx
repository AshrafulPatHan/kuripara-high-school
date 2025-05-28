import Image from "next/image";
import Kuripara from "@/assets/image/school/Kuripaka_c.webp";


export default function About(){
    return(
        <div className="flex justify-center mt-20 mx-2 ">
            <div className="flex flex-col lg:flex-row items-start gap-5">
                <div>
                    <Image src={Kuripara} alt="school" className="w-[99vw] lg:w-[65vw] xl:w-[600px] rounded-2xl " />
                </div>
                <div className="w-[95vw] lg:w-[70vw] xl:w-[600px]  ">
                    <h2 className="text-3xl font-medium">Welcome to Kuripara High School</h2>
                    <p className="mt-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti consectetur quia vel reprehenderit, ducimus commodi, molestias perferendis, accusantium fuga eligendi fugit. Exercitationem saepe cumque tenetur perspiciatis dicta ipsum possimus magnam dolores, incidunt veniam, molestias vel officiis rerum quia eaque iusto sed, aliquid quibusdam quos doloremque! Qui, tenetur! Impedit, ducimus ea.
                    </p>
                    <div className=" flex items-center gap-1 mt-3">
                        <p className="text-lg font-medium">Location :</p>
                        <p className="text-blue-500">Bandor , Narayanganj</p>
                    </div><div className=" flex items-center gap-1">
                        <p className="text-lg font-medium">Phone :</p>
                        <p className="text-blue-500">01816-181541</p>
                    </div>
                    <div className=" flex items-center gap-1">
                        <p className="text-lg font-medium">Email :</p>
                        <p className="text-blue-500">ashrafulpathan3927@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}