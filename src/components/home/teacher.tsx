import Image from "next/image";
import HeadMaster from "@/assets/image/school/Kamal_sir.jpg";


export default function Teacher() {
   return(
      <div>
         <div>
            <div>
               <div>
                  <div>
                     <Image src={HeadMaster} alt="Headmaster" />
                  </div>
                  <h3>Kamal Sir</h3>
                  <p>Head master</p>
               </div>
               <div>
                  <h3></h3>
                  <p></p>
                  <button>Read more..</button>
               </div>
            </div>
            <div>
               <div>
                  <Image src="" alt="" />
                  <p></p>
                  <p></p>
               </div>
               <div>
                  <Image src="" alt="" />
                  <p></p>
                  <p></p>
               </div>
               <div>
                  <Image src="" alt="" />
                  <p></p>
                  <p></p>
               </div>
            </div>
         </div>
      </div>
   )
}