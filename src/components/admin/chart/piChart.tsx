 "use client"
import { Chart } from "react-google-charts";


export default function PiChart(){
const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["teacher", 2],
    ["school", 2],
    ["bill", 2],
    ["transport", 7],
];

const options = {
    title: "School Activities",
  };
    return(
        <div className="ml-5">
            <Chart
            chartType="PieChart"
            data={data}
            options={options}
            className=" w-[97vw] md:w-[500px] 2xl:w-[700px] h-auto md:h-[400px] "
            />
        </div>
    )
}