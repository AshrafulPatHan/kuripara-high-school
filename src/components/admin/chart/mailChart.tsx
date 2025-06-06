import { AnimateChart } from "./animation";
import LineChart from "./LineChart";
import PiChart from "./piChart";


export default function Chart(){
    return(
        <div className="mt-20 flex  flex-row items-center justify-between bg-white rounded-[12px] relative ">
            <PiChart/>
            <LineChart/>
            <div className="absolute top-0 left-[28vw] flex flex-col items-center ">
                {/* <h3>Data Analysis</h3> */}
                <AnimateChart/>
            </div>
        </div>
    )
}