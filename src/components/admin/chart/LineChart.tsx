 "use client"
import { Chart } from "react-google-charts";
import axios from 'axios'
import { useEffect, useState } from "react";



export default function LineChart(){
const [data, setData] = useState<number | null>(0);
const [data1, setData1] = useState<number | null>(0);
const [data2, setData2] = useState<number | null>(0);

// fetch the visitor number data
useEffect(()=>{
    const ApiUrl = process.env.NEXT_PUBLIC_SERVER_ADMIN;
    axios.get(`${ApiUrl}/visitor-number`)
    .then((res) => setData(res.data))
    .catch((error) => console.error(error))
})
// fetch the Events number data
useEffect(()=>{
    const ApiUrl = process.env.NEXT_PUBLIC_SERVER_ADMIN;
    axios.get(`${ApiUrl}/album-number`)
    .then((res) => setData1(res.data))
    .catch((error) => console.error(error))
})
// fetch the Notice number data
useEffect(()=>{
    const ApiUrl = process.env.NEXT_PUBLIC_SERVER_ADMIN;
    axios.get(`${ApiUrl}/notice-number`)
    .then((res) => setData2(res.data))
    .catch((error) => console.error(error))
})

// chart data 
const ChartData = [
  ["Element", "Density", { role: "style" }],
  ["Visitor", data, "#b87333"], 
  ["Events", data1, "silver"], 
  ["Notice", data2, "gold"],
  ["Admin", 3.45, "color: #e5e4e2"], 
];
    return(
        <div className="mr-5">
            <Chart chartType="ColumnChart" data={ChartData} 
            className="w-[97vw] md:w-[400px] 2xl:w-[600px] h-auto md:h-[400px] " />
        </div>
    )
}