"use client";
import { work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GanttChart, X } from "lucide-react";

const Header = () => {
  const currentRoute = usePathname();
  const [openNavBar, setOpenNavBar] = useState(false);

  const hanldeOpenNav = () => {
    setOpenNavBar(!openNavBar);
  };

  return (
    <>
      <section className="sticky w-full bg-[white] top-0 z-50">
        <header className="flex w-full ">
          <div className="conatiner mx-auto min-h-[50px] flex items-center bg-[white] w-[90%] md:w-[1200px] justify-between">
            <div className="relative  py-[36px] px-0">
              <figure>
                <Link href="/">
                  <Image
                    src="/img/logo.jpg"
                    alt="logo"
                    width={100}
                    height={50}
                    className="w-[100px] md:w-[80px] h-[70px] md:h-[50px] bg-contain"
                  />
                </Link>
              </figure>
            </div>
            <div>
              <ul className="md:flex gap-3 navigation  hidden">
                <li>
                  <Link
                    href="/about"
                    className={cn(
                      `${work_sans.className} ${
                        currentRoute === "/about" && "isactive"
                      } hover:text-[--light-yellow-text]`
                    )}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tour"
                    className={cn(
                      `${work_sans.className} ${
                        currentRoute === "/tour" && "isactive"
                      } hover:text-[--light-yellow-text]`
                    )}
                  >
                    Tours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className={cn(
                      `${work_sans.className} ${
                        currentRoute === "/product" && "isactive"
                      } hover:text-[--light-yellow-text]`
                    )}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className={cn(
                      `${work_sans.className} ${
                        currentRoute === "/services" && "isactive"
                      } hover:text-[--light-yellow-text]`
                    )}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className={cn(
                      `${work_sans.className} ${
                        currentRoute === "/gallery" && "isactive"
                      } hover:text-[--light-yellow-text]`
                    )}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className={cn(
                      `${work_sans.className} ${
                        currentRoute === "/faq" && "isactive"
                      } hover:text-[--light-yellow-text]`
                    )}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={cn(
                      `${work_sans.className} ${
                        currentRoute === "/contact" && "isactive"
                      } hover:text-[--light-yellow-text]`
                    )}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
              {!openNavBar && (
                <GanttChart
                  className="text-[--light-yellow-text] md:hidden cursor-pointer transition-all delay-100 "
                  size={40}
                  onClick={hanldeOpenNav}
                />
              )}
            </div>
            <div className="hidden md:flex">
              <a href="https://wa.me/2347015564131" target="_blank">
                <Button
                  className={cn(
                    `${work_sans.className} btn-default bg-[--btn-hover]  hover:bg-[--light-yellow-text] py-[17.5px] px-[20px] md:h-[55px] flex items-center gap-2 justify-between`
                  )}
                >
                  <span className="text-[16px]">Chat on </span>
                  <Image
                    src="/img/whatsapp.svg"
                    width={90}
                    height={80}
                    alt="chat on whatsapp"
                  />
                </Button>
              </a>
            </div>
          </div>
        </header>
      </section>
      <div
        className={cn(
          `${
            work_sans.className
          }  fixed bottom-0 top-0 h-screen bg-[--primary-background] z-50  navbar ${
            openNavBar ? "w-full " : "w-0 overflow-hidden"
          }`
        )}
      >
        <X
          className="text-[--light-yellow-text] md:hidden cursor-pointer transition-all delay-100 absolute top-10 right-5"
          size={45}
          onClick={hanldeOpenNav}
        />
        <div className="h-screen justify-center items-center flex flex-col gap-y-3">
          <ul
            className={cn(
              `${work_sans.className} text-white md:flex items-center gap-5 text-sm uppercase space-y-8`
            )}
          >
            <li
              className={`${
                currentRoute === "/about" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/about" onMouseDown={hanldeOpenNav}>
                About us
              </Link>
            </li>
            <li
              className={`${
                currentRoute === "/tour" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/tour" onMouseDown={hanldeOpenNav}>
                Tours
              </Link>
            </li>
            <li
              className={`${
                currentRoute === "/product" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/product" onMouseDown={hanldeOpenNav}>
                Our Products
              </Link>
            </li>
            <li
              className={`${
                currentRoute === "/services" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/services" onMouseDown={hanldeOpenNav}>
                Services
              </Link>
            </li>
            <li
              className={`${
                currentRoute === "/gallery" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/gallery" onMouseDown={hanldeOpenNav}>
                Gallery
              </Link>
            </li>
            <li
              className={`${
                currentRoute === "/faq" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/faq" onMouseDown={hanldeOpenNav}>
                FAQ
              </Link>
            </li>
            <li
              className={`${
                currentRoute === "/contact" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/contact" onMouseDown={hanldeOpenNav}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="flex mt-6">
            <a href="https://wa.me/2347015564131" target="_blank">
              <Button
                className={cn(
                  `${work_sans.className} btn-default bg-[--light-yellow-text]  hover:bg-[--btn-hover] py-[17.5px] px-[20px] md:h-[55px] flex items-center gap-2 justify-between`
                )}
              >
                <span className="text-[16px]">Chat on </span>
                <Image
                  src="/img/whatsapp.svg"
                  width={90}
                  height={80}
                  alt="chat on whatsapp"
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
