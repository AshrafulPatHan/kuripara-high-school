 "use client"
import { Chart } from "react-google-charts";


export default function PiChart(){
const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];

const options = {
    title: "My Daily Activities",
  };
    return(
        <div className="ml-5">
            <Chart
            chartType="PieChart"
            data={data}
            options={options}
            className="w-[700px] h-[400px] "
            />
        </div>
    )
}