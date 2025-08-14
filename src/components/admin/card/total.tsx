import TotalEvents from "./toEvent";
import TotalNotice from "./toNotice";
import TotalStudent from "./toStudent";
import TotalView from "./toView";


export default function Total(){
    return(
        <div className=" pb-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6 justify-items-center mb-3  ">
                <TotalView/>
                <TotalEvents/>
                <TotalNotice/>  
                <TotalStudent/>
            </div>
        </div>
        
    )
}