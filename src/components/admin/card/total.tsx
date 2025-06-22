import TotalEvents from "./toEvent";
import TotalNotice from "./toNotice";
import TotalStudent from "./toStudent";
import TotalView from "./toView";


export default function Total(){
    return(
        <div className="overflow-hidden pb-10 ">
            <div className="grid grid-cols-2 xl:grid-cols-4 items-center gap-[6.4vw] ">
                <TotalView/>
                <TotalEvents/>
                <TotalNotice/>
                <TotalStudent/>
            </div>
        </div>
        
    )
}