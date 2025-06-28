import TotalEvents from "./toEvent";
import TotalNotice from "./toNotice";
import TotalStudent from "./toStudent";
import TotalView from "./toView";


export default function Total(){
    return(
        <div className=" pb-10 ">
            <div className="grid grid-cols-2 2xl:grid-cols-4 items-center gap-[6.4%] mb-3  ">
                <TotalView/>
                <TotalEvents/>
                <TotalNotice/>
                <TotalStudent/>
            </div>
        </div>
        
    )
}