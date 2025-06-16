"use client"
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getData() {
  return [
    ["Age", "Weight"],
    ...Array.from({ length: 16 }, () => [getRandomNumber(), getRandomNumber()]),
  ];
}

export const options = {
  title: "School Performance",
  legend: { position: "bottom" },
  animation: {
    duration: 1000,
    easing: "out",
  },
  vAxis: {
    viewWindow: {
      max: 100,
      min: 0,
    },
  },
  hAxis: {
    viewWindow: {
      max: 100,
      min: 0,
    },
  },
};

export function AnimateChart() {
  const [chartData, setChartData] = useState(getData);
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setChartData(getData());
      setYear((y) => y - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [setChartData]);
  return (
    <div className="relative">
      <Chart
        chartType="ScatterChart"
        className="w-[500px] h-[400px] "
        data={chartData}
        options={options}
      />
      <div className="absolute top-2" style={{ width: "100%", textAlign: "center" }}>{year}</div>
    </div>
  );
}
