"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  AtSign,
  CarFront,
  CarIcon,
  ChevronLeft,
  LayoutDashboard,
  Plus,
  Power,
  Settings,
  StickyNote,
  User2Icon,
  Users,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { barlow } from "@/lib/fonts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const currentRoute = usePathname();
  const [openNavBar, setOpenNavBar] = useState(true);

  const user = {
    token: "",
  };

  return (
    <>
      <ScrollArea
        className={cn(
          `${
            barlow.className
          }  bg-[#191919] text-[#757575]  sticky top-0 bottom-0 md:relative h-screen navbar md:flex ${
            !openNavBar ? "w-[70%] md:w-[0%]" : "w-[0%] md:w-[20%]"
          }`
        )}
      >
        <div className="p-5 w-full">
          <h1 className="p-2 my-[2px] uppercase">Fame Royal</h1>
          <div className="relative h-[calc(100vh-100px)]">
            <ul className="flex flex-col ">
              <li
                className={`${
                  currentRoute === "/admin/dashboard" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/dashboard?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
              </li>
              <li
                className={`${
                  (currentRoute === "/admin/drivers" && "active") ||
                  (currentRoute === "/admin/drivers/add" && "active") ||
                  (currentRoute.includes("/admin/drivers/edit/") && "active")
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/tour?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <CarFront size={18} />
                  Tours
                </Link>
              </li>

              <Separator
                className="my-2 w-full bg-[rgba(255,255,255,0.1)] "
                orientation="horizontal"
              />
            </ul>

            <div className="w-full py-5">
              <Button className="bg-[#474747] w-full  justify-start flex items-center gap-2 rounded-[8px] text-white font-[600] p-2 hover:bg-[rgb(71,71,71,.8)]">
                <Power size={18} />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
};

export default SideNav;
