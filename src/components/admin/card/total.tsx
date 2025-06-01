import TotalEvents from "./toEvent";
import TotalNotice from "./toNotice";
import TotalStudent from "./toStudent";
import TotalView from "./toView";


export default function Total(){
    return(
        <div className="flex flex-row items-center gap-[6.4vw] ">
            <TotalView/>
            <TotalEvents/>
            <TotalNotice/>
            <TotalStudent/>
        </div>
    )
}