// 'use client'

import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";
import CalendarPage from "./CalendarPage";

function Dashboard() {
  return (
    <div className="">
      <Nav />
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10">
          <CalendarPage />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
