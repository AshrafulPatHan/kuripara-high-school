import Image from "next/image";
import Student from '@/assets/image/school/student.webp'
import Events1 from '@/assets/image/school/full.jpg'
import Events2 from '@/assets/image/school/Br_M.jpg'
import Events3 from '@/assets/image/school/Ssc.jpg'
import Events4 from '@/assets/image/school/21_A_F_misel.jpg'
import Events5 from '@/assets/image/school/minar.jpg'


export default function Events() {
   return(
      <div className="flex justify-center mt-20">
         <div className="flex flex-col lg:flex-row gap-5 ">
            <div>
               <nav className="flex flex-row items-center justify-between mb-4 bg-[#f8f4f4] rounded-[8px] p-3 w-[92vw] lg:w-[60vw] xl:w-[821px] ">
                  <h4>Latest Event</h4>
                  <button className="bg-amber-600 p-2 rounded-xl">
                     View All Event
                  </button>
               </nav>
               <div className="flex flex-col lg:flex-row gap-5">
                  <div className="flex flex-col bg-[#f8f4f4] w-[97vw] lg:w-[28vw] xl:w-[400px] p-6 rounded-2xl items-center  ">
                     <div>
                        <div>
                           <Image src={Events1} alt="events" className="w-[99vw]  xl:w-[350px] " />
                        </div>
                        <div>
                           <p>lorem</p>
                           <button>lorem</button>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col bg-[#f8f4f4] w-[97vw] lg:w-[28vw] xl:w-[400px] p-6 rounded-2xl items-center  ">
                     <div>
                        <div>
                           <Image src={Events2} alt="events" className="w-[99vw]  xl:w-[350px] " />
                        </div>
                        <div>
                           <p>lorem</p>
                           <button>lorem</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="flex flex-col bg-[#f8f4f4] rounded-2xl w-[97vw] md:w-[375px] ">
                  <div className="bg-amber-200 rounded-t-2xl text-center py-2 text-2xl font-semibold ">
                     Events
                  </div>
                  <div className="flex flex-col items-center p-6 ">
                     <div className="flex gap-4 ">
                        <div>
                           <Image src={Events3} alt="event" className="w-[100px] h-[100px] object-cover rounded-full  " />
                        </div>
                        <div>
                           <h3>name</h3>
                           <p>date</p>
                           <button>View Details</button>
                        </div>
                     </div>
                     <hr className="w-[100%] mt-6 mb-6 "/><div className="flex gap-4 ">
                        <div>
                           <Image src={Events4} alt="event" className="w-[100px] h-[100px] object-cover rounded-full  " />
                        </div>
                        <div>
                           <h3>name</h3>
                           <p>date</p>
                           <button>View Details</button>
                        </div>
                     </div>
                     <hr className="w-[100%] mt-6 mb-6 "/><div className="flex gap-4 ">
                        <div>
                           <Image src={Events5} alt="event" className="w-[100px] h-[100px] object-cover rounded-full  " />
                        </div>
                        <div>
                           <h3>name</h3>
                           <p>date</p>
                           <button>View Details</button>
                        </div>
                     </div>
                     <hr className="w-[100%] mt-6 mb-6 "/>
                  </div>
                  <div className="flex flex-col items-end pb-6 px-6">
                     <button className="border py-3 px-6 ">
                        View All
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}