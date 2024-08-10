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
      <section>
        {/* <div
          className={cn(
            `${work_sans.className} hidden w-full md:flex bg-[--primary-background] text-[--primary-background-text] font-[600] text-[16px]`
          )}
        >
          <div className="container mx-auto md:w-[1200px] w-full md:min-h-[60px] flex items-center gap-8">
            <span>enquiry@fameroyaltravels.com</span>
            <span>08023788647 | 07065113888 | 08136781136</span>
            <span>Plot 539 Sunday Adewusi Street, Guzape, Abuja, Nigeria </span>
          </div>
        </div> */}
        <header className="flex w-full">
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
              <ul className="md:flex gap-5 navigation  hidden">
                <li>
                  <Link
                    href="/"
                    className={cn(
                      `${work_sans.className} ${
                        currentRoute === "/" && "isactive"
                      } hover:text-[--light-yellow-text]`
                    )}
                  >
                    Home
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
              <Button
                className={cn(
                  `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px]`
                )}
              >
                Book a tour
              </Button>
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
        <div className="h-screen justify-center items-center flex">
          <ul
            className={cn(
              `${work_sans.className} text-white md:flex items-center gap-5 text-sm uppercase space-y-8`
            )}
          >
            <li
              className={`${
                currentRoute === "/" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${
                currentRoute === "/tour" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/tour">Tours</Link>
            </li>
            <li
              className={`${
                currentRoute === "/product" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/product">Our Products</Link>
            </li>
            <li
              className={`${
                currentRoute === "/services" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/services">Services</Link>
            </li>
            <li
              className={`${
                currentRoute === "/gallery" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/gallery">Contact Us</Link>
            </li>
            <li
              className={`${
                currentRoute === "/faq" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/faq">FAQ</Link>
            </li>
            <li
              className={`${
                currentRoute === "/contact" && "isactive"
              } hover:text-[--text-hover] transition-all delay-75 text-[18px]`}
            >
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
