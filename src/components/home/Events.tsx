import Image from "next/image";
import Student from '@/assets/image/school/student.webp'


export default function Events() {
   return(
      <div>
         <div>
            <div>
               <nav>
                  <h4></h4>
                  <button></button>
               </nav>
               <div>
                  <div>
                     <Image src={Student} alt="events" />
                     <div>
                        <p></p>
                        <button></button>
                     </div>
                  </div>
                  <div>
                     <Image src={Student} alt="" />
                     <div>
                        <p></p>
                        <button></button>
                     </div>
                  </div>
               </div>
            </div>
            <div></div>
         </div>
      </div>
   )
}