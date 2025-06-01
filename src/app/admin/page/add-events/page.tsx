"use client"
import Image from "next/image";
import Illustration from '@/assets/image/university-418219_1920.jpg'
import { useState } from "react";


export default function AddEvents(){
    return(
        <div>
            <div className='relative bg-[#e7ebf0] '>
                <div className='flex flex-col md:flex-row items-center gap-1 md:gap-[5vw] lg:gap-[15vw] '>
                    <div>
                        <Image src={Illustration} alt="illustrated" className='w-[50vw] h-[100vh] object-cover hidden md:flex ' />
                    </div>
                    <div className=" flex flex-col items-center h-screen md:h-auto">
                        <div className='text-center flex flex-col gap-[10px] mb-[60px] '>
                            <h3 className='text-4xl font-bold'>Add Events</h3>
                            <p className='text-[#777272e3] font-bold'>Enter Events data</p>
                        </div>
                        <form className="flex flex-col gap-[14px] ">
                            {/* input name */}
                            <input type="text" name="name" id="name"  placeholder="Name"
                            className="border-[#E93B77] rounded-[8px] border-[1px] w-[90vw] sm:w-[300px] lg:w-[361px] h-[42px] p-4 "/>
                            {/* input password */}
                            <input type="password" name="password" id="password" placeholder="Password" 
                            className="border-[#E93B77] rounded-[8px] border-[1px] w-[90vw] sm:w-[300px] lg:w-[361px] h-[42px] p-4  "/>
                            {/* submit button */}
                            <button className=" w-[90vw] sm:w-[300px] lg:w-[361px] h-[40px] bg-gradient-to-t from-[#E93B77] to-[#da6d93] rounded-[8px] ">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}