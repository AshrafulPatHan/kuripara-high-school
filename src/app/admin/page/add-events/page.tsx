"use client"
import Image from "next/image";
import Background from "@/assets/image/university-418219_1920.jpg";
import CustomFileInput from "@/components/admin/ui/input/CustomInput";



export default function AddEvents(){
    const handleFileSelect = (file: File) => {
    console.log("Chose Your Image:", file.name);
  };
    return(
        <div className="w-[100%] h-[99%] flex flex-col items-center justify-center bg-cover bg-center rounded-xl " 
                    style={{
                backgroundImage: `url(${Background.src})`,
            }}
        >
            <form className="flex flex-col gap-5 bg-[#ffffff] rounded-xl p-6 ">
                <div className="flex flex-col">
                    <label htmlFor="Title" className="block text-sm font-medium text-zinc-700">
                       Add A Title
                    </label>
                    <input type="text" name="title" id="" placeholder="Tile" 
                     className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Add Photo" className="block text-sm font-medium text-zinc-700">
                        Add Photo
                    </label>
                    {/* <input type="file" name="photo" id="" 
                    className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " /> */}
                    {/* custom input filde */}
                    <CustomFileInput onFileSelect={handleFileSelect} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Description" className="block text-sm font-medium text-zinc-700">
                        Add Description
                    </label>
                    <input type="text" name="description" id="" placeholder="Add Description"
                    className="w-[97%] xl:w-[350px] h-[40px] rounded-lg border px-4  " />
                </div>
                <button className=" w-[90%] sm:w-[300px] lg:w-[350px] h-[40px] text-white 
                 bg-gradient-to-t from-[#E93B77] to-[#da6d93] rounded-[8px] ">
                    Login
                </button>
            </form>
        </div>
    )
}