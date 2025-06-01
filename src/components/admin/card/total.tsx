import TotalEvents from "./toEvent";
import TotalNotice from "./toNotice";
import TotalStudent from "./toStudent";
import TotalView from "./toView";


export default function Total(){
    return(
        <div className="flex flex-row items-center">
            <TotalView/>
            <TotalEvents/>
            <TotalNotice/>
            <TotalStudent/>
        </div>
    )
}