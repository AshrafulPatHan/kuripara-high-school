import { AnimateChart } from "./animation";
import LineChart from "./LineChart";
import PiChart from "./piChart";


export default function Chart(){
    return(
        <div className="overflow-hidden">
            <div className="mt-20 flex flex-col xl:flex-row items-start lg:items-center gap-[7%] bg-white rounded-[12px] relative ">
                <PiChart/>
                <LineChart/>
            </div>
        </div>
        
    )
}