"use client";
import { GanttChart, X } from "lucide-react";
import { useState } from "react";

const ToggleSideNav = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  const handleOpenNav = () => {
    setOpenNavBar(!openNavBar);
  };
  return (
    <>
      <div className="relative top-2 left-2 bottom-2 bg-[rgba(0,0,0,0.2)] w-fit p-2 rounded-[5px] cursor-pointer z-50">
        {openNavBar ? (
          <GanttChart size={30} color="#171726" className="" />
        ) : (
          <X size={30} color="#171726" className="" onClick={handleOpenNav} />
        )}
      </div>
    </>
  );
};

export default ToggleSideNav;
