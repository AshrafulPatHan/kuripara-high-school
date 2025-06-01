 "use client"
import { Chart } from "react-google-charts";


export default function LineChart(){

const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];
    return(
        <div className="mr-5">
            <Chart chartType="ColumnChart" data={data} className="w-[600px] h-[400px] " />
        </div>
    )
}