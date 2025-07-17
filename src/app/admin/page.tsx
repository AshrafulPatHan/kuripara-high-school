"use client";

import { useEffect } from "react";
import PrivateRoute from "@/components/admin/auth/PrivateRoute";
import Total from "@/components/admin/card/total";
import Chart from "@/components/admin/chart/mailChart";
import Admin_Footer from "@/components/admin/navigation/Admin_Footer";
import Admin_nav from "@/components/admin/navigation/Admin_nav";
import Side_bar from "@/components/admin/navigation/Side_bar";
import NoticeAdminTable from "@/components/admin/table/noticeTabil";


export default function Admin(){

  useEffect(() => {
    // check if already reloaded
    const alreadyReloaded = sessionStorage.getItem("adminPageReloaded");

    if (!alreadyReloaded) {
      sessionStorage.setItem("adminPageReloaded", "true");
      window.location.reload();
    }
  }, []);
   return(
      <div>
         <div >
            <Total/>
            <Chart/>
            <NoticeAdminTable/>
         </div>
      </div>
   )
};