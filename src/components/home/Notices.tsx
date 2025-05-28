import Image from "next/image";
import Notice from '@/assets/image/school/notice.avif'


export default function Notices() {
   return(
      <div className="flex justify-center mt-20">
         <div className="flex flex-col lg:flex-row gap-5 ">
            <div>
               <div className="flex gap-5">
                  <div className="flex flex-col bg-[#f8f4f4] w-[99vw] lg:w-[60vw] xl:w-[821px] p-6 rounded-2xl items-center  ">
                     <div>
                        <div>
                           <Image src={Notice} alt="events" className="w-[98vw] lg:w-[55vw] xl:w-[800px] object-cover rounded-2xl " />
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
               <div className="flex flex-col bg-[#f8f4f4] rounded-2xl w-[97vw] md:w-[365px] xl:w-[375px] ">
                  <div className="bg-amber-200 text-center rounded-t-2xl py-2 text-2xl font-semibold ">
                     All Notice
                  </div>
                  <div className="flex flex-col items-center p-6 ">
                     <div className="flex gap-4 ">
                        <div>
                           <Image src={Notice} alt="event" className="w-[100px] h-[100px] object-cover rounded-full  " />
                        </div>
                        <div>
                           <h3>name</h3>
                           <p>date</p>
                           <button>View Details</button>
                        </div>
                     </div>
                     <hr className="w-[100%] mt-6 mb-6 "/><div className="flex gap-4 ">
                        <div>
                           <Image src={Notice} alt="event" className="w-[100px] h-[100px] object-cover rounded-full  " />
                        </div>
                        <div>
                           <h3>name</h3>
                           <p>date</p>
                           <button>View Details</button>
                        </div>
                     </div>
                     <hr className="w-[100%] mt-6 mb-6 "/><div className="flex gap-4 ">
                        <div>
                           <Image src={Notice} alt="event" className="w-[100px] h-[100px] object-cover rounded-full  " />
                        </div>
                        <div>
                           <h3>name</h3>
                           <p>date</p>
                           <button>View Details </button>
                        </div>
                     </div>
                     <hr className="w-[100%] mt-6 mb-6 "/>
                  </div>
                  <div className="flex flex-col items-end pb-6 px-6">
                     <button className="border py-3 px-6 ">
                        View All Notice
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}