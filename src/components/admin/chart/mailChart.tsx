import { AnimateChart } from "./animation";
import LineChart from "./LineChart";
import PiChart from "./piChart";


export default function Chart(){
    return(
        <div className="mt-20 flex flex-col xl:flex-row items-start lg:items-center justify-between bg-white rounded-[12px] relative ">
            <PiChart/>
            <LineChart/>
            <div className="absolute top-0 left-[33%] hidden 2xl:flex 2xl:flex-col items-center ">
                {/* <h3>Data Analysis</h3> */}
                <AnimateChart/>
            </div>
        </div>
    )
}