"use client"

import Events from "@/components/home/Events";
import Hero from "@/components/home/hero";
import History from "@/components/home/history";
import News from "@/components/home/News";
import Notices from "@/components/home/Notices";
import Number from "@/components/home/number";
import Teacher from "@/components/home/teacher";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import About from "./about";
import { Component, useEffect } from "react";
import { getVisitorData } from "../data/Visitor";


export default function Clint() {
      useEffect(() => {
    const trackVisitor = async () => {
      try {
        const data = await getVisitorData();
        const ApiUrl = process.env.NEXT_PUBLIC_API_URL;

        await fetch(`${ApiUrl}/api/track-visitor`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error("Visitor tracking failed:", error);
      }
    };

    trackVisitor();
  }, []);

    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <History/>
            <Number/>
            <Teacher/>
            {/* <News/> */}
            <Notices/>
            <Events/>
            <Footer/>
        </div>
    )
}