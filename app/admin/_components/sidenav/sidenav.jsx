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
  User,
  User2Icon,
  Users,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { barlow } from "@/lib/fonts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import AuthContext from "@/context/authContext";
import AuthModal from "../modal/passwordModal";
import UsernameModal from "../modal/usernameModal";
import { truncateText } from "@/utils/trucateText";

const SideNav = () => {
  const [openDropDown, setOpenDropDown] = useState(false);

  const currentRoute = usePathname();
  const { user, openNavBar, handleLogOut } = useContext(AuthContext);
  return (
    <>
      <div
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
          <ScrollArea className="relative h-[calc(100vh-150px)]">
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
                  currentRoute === "/admin/banner" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/banner?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Site Banner
                </Link>
              </li>

              <li
                className={`${
                  currentRoute === "/admin/gallary" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/gallary?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Gallary
                </Link>
              </li>
              <li
                className={`${
                  currentRoute === "/admin/team" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/team?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Team Members
                </Link>
              </li>
              <li
                className={`${
                  currentRoute === "/admin/service" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/service?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Services
                </Link>
              </li>
              <li
                className={`${
                  currentRoute === "/admin/faq" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/faq?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  FAQ
                </Link>
              </li>
              <Separator
                className="my-2 w-full bg-[rgba(255,255,255,0.1)] "
                orientation="horizontal"
              />
              <h1 className="p-2 my-[2px] uppercase">Manage Tours</h1>
              <li
                className={`${
                  currentRoute === "/admin/tour" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/tour?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Tours
                </Link>
              </li>
              <li
                className={`${
                  currentRoute === "/admin/product" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/product?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Products
                </Link>
              </li>
              <li
                className={`${
                  currentRoute === "/admin/destination" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/destination?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Destination
                </Link>
              </li>
              <li
                className={`${
                  currentRoute === "/admin/visa" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/visa?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <LayoutDashboard size={18} />
                  Visa Service
                </Link>
              </li>
              <Separator
                className="my-2 w-full bg-[rgba(255,255,255,0.1)] "
                orientation="horizontal"
              />

              <li
                className={cn(
                  `${openDropDown ? "active" : ""} my-[2px] h-10 nav w-full`
                )}
                onClick={() => setOpenDropDown(!openDropDown)}
              >
                <div className="flex gap-2 items-center py-2  h-8 leading-tight relative">
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <Settings size={18} />
                  Settings
                </div>
              </li>
              <li
                className={`${
                  currentRoute === "/admin/users" && "active"
                } my-[2px] h-10 nav`}
              >
                <Link
                  href={`/admin/users?q=${user?.token}`}
                  className="flex gap-2 items-center py-2  h-8 leading-tight relative"
                >
                  <span className="w-[1px] h-8 rounded-r-[5px] border-r-4 border-transparent"></span>
                  <User size={18} />
                  Manage Users
                </Link>
              </li>
            </ul>
            <ul
              className={cn(
                `${
                  openDropDown
                    ? "showDropDown w-full bg-[--header-bg] text-white border border-[rgba(255,255,255,0.3)] py-1"
                    : "h-0 overflow-hidden"
                } transition-all delay-75`
              )}
            >
              <li className="my-[2px] h-10 hover:text-[--text-brown] transition-all delay-75">
                <AuthModal />
              </li>
              <li className="my-[2px] h-10 hover:text-[--text-brown] transition-all delay-75">
                <UsernameModal />
              </li>
            </ul>
          </ScrollArea>
          <div className="w-full py-5">
            <Button
              className="bg-[#474747] w-full  justify-start flex items-center gap-2 rounded-[8px] text-white font-[600] p-2 hover:bg-[rgb(71,71,71,.8)]"
              onClick={() => handleLogOut()}
            >
              <Power size={18} />
              Logout ({user && truncateText(user?.username, 15)})
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
