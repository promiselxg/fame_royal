"use client";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMic,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <footer className="w-full flex relative bg-[rgba(0,0,0,0.9)] ">
        <div className="pattern-layer bg-shape-11 bg-no-repeat bg-center bg-cover"></div>
        <div className="container mx-auto md:w-[1200px] z-10  py-[80px]">
          <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-5">
            <div className="flex flex-col gap-y-3">
              <div className="flex">
                <Link href="/">
                  <Image
                    src="/img/logo.jpg"
                    width={100}
                    height={100}
                    alt="Footer Logo"
                    className="bg-contain w-[200px] h-[100px]"
                  />
                </Link>
              </div>
              <p
                className={cn(
                  `${work_sans.className} text-sm text-[whitesmoke] leading-tight`
                )}
              >
                Fame Royal Travels is a premier travel and tour company in
                Nigeria, renowned for its prominent status in the travel and
                tourism sector.
              </p>
              <div className="text-white flex items-center gap-2 text-[20px] py-10">
                <Link
                  href="/"
                  className="hover:text-[--light-yellow-text] transition-all delay-75 bg-[rgba(0,0,0,0.5)] p-2 rounded-full"
                >
                  <FiTwitter />
                </Link>
                <Link
                  href="/"
                  className="hover:text-[--light-yellow-text] transition-all delay-75 bg-[rgba(0,0,0,0.5)] p-2 rounded-full"
                >
                  <FiYoutube />
                </Link>
                <Link
                  href="/"
                  className="hover:text-[--light-yellow-text] transition-all delay-75 bg-[rgba(0,0,0,0.5)] p-2 rounded-full"
                >
                  <FiFacebook />
                </Link>
                <Link
                  href="/"
                  className="hover:text-[--light-yellow-text] transition-all delay-75 bg-[rgba(0,0,0,0.5)] p-2 rounded-full"
                >
                  <FiInstagram />
                </Link>
                <Link
                  href="/"
                  className="hover:text-[--light-yellow-text] transition-all delay-75 bg-[rgba(0,0,0,0.5)] p-2 rounded-full"
                >
                  <FiLinkedin />
                </Link>
              </div>
            </div>
            <div className="text-[whitesmoke] md:max-w-[200px]">
              <h1
                className={cn(
                  `${playfair.className} text-[24px] text-white font-[600] pb-4`
                )}
              >
                Services
              </h1>
              <ul
                className={cn(`${work_sans.className} flex flex-col gap-y-3`)}
              >
                <li className="transition-all delay-75  hover:text-[--light-yellow-text]">
                  <Link href="/">Home</Link>
                </li>
                <li className="transition-all delay-75  hover:text-[--light-yellow-text]">
                  <Link href="/about">About us</Link>
                </li>
                <li className="transition-all delay-75  hover:text-[--light-yellow-text]">
                  <Link href="/tour">Tours</Link>
                </li>
                <li className="transition-all delay-75  hover:text-[--light-yellow-text]">
                  <Link href="/product">Our Products</Link>
                </li>
                <li className="transition-all delay-75  hover:text-[--light-yellow-text]">
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li className="transition-all delay-75  hover:text-[--light-yellow-text]">
                  <Link href="/faq">FAQ</Link>
                </li>
                <li className="transition-all delay-75 hover:text-[--light-yellow-text]">
                  <Link href="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="md:-ml-[50px]">
              <h1
                className={cn(
                  `${playfair.className} text-[24px] text-white font-[600] pb-4`
                )}
              >
                Gallery
              </h1>
              <div className="grid grid-cols-3 gap-3 w-full">
                <Link href="/" className="rounded-[5px] overflow-hidden w-fit">
                  <Image
                    src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg"
                    width={100}
                    height={100}
                    alt="gallery"
                  />
                </Link>
                <Link href="/" className="rounded-[5px] overflow-hidden w-fit">
                  <Image
                    src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg"
                    width={100}
                    height={100}
                    alt="gallery"
                  />
                </Link>
                <Link href="/" className="rounded-[5px] overflow-hidden w-fit">
                  <Image
                    src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg"
                    width={100}
                    height={100}
                    alt="gallery"
                  />
                </Link>
                <Link href="/" className="rounded-[5px] overflow-hidden w-fit">
                  <Image
                    src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg"
                    width={100}
                    height={100}
                    alt="gallery"
                  />
                </Link>
                <Link href="/" className="rounded-[5px] overflow-hidden w-fit">
                  <Image
                    src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg"
                    width={100}
                    height={100}
                    alt="gallery"
                  />
                </Link>
                <Link href="/" className="rounded-[5px] overflow-hidden w-fit">
                  <Image
                    src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/footer-gallery-1.jpg"
                    width={100}
                    height={100}
                    alt="gallery"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 md:ml-[20px]">
              <h1
                className={cn(
                  `${playfair.className} text-[24px] text-white font-[600] pb-4`
                )}
              >
                Contacts
              </h1>
              <div className="flex items-center gap-5 ">
                <span>
                  <FiMapPin className="text-[20px] font-[600] text-[--light-yellow-text]" />
                </span>
                <span
                  className={cn(
                    `${work_sans.className} font-[600] text-sm text-[whitesmoke]`
                  )}
                >
                  Plot 539 Sunday Adewusi Street, Guzape, Abuja, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <span>
                      <FiMic className="text-[20px] font-[600] text-[--light-yellow-text]" />
                    </span>
                    <span
                      className={cn(
                        `${work_sans.className} font-[600] text-sm text-[whitesmoke]`
                      )}
                    >
                      08023788647
                    </span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span>
                      <FiMic className="text-[20px] font-[600] text-[--light-yellow-text]" />
                    </span>
                    <span
                      className={cn(
                        `${work_sans.className} font-[600] text-sm text-[whitesmoke]`
                      )}
                    >
                      07065113888
                    </span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span>
                      <FiMic className="text-[20px] font-[600] text-[--light-yellow-text]" />
                    </span>
                    <span
                      className={cn(
                        `${work_sans.className} font-[600] text-sm text-[whitesmoke]`
                      )}
                    >
                      08136781136
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <span>
                  <FiMail className="text-[20px] font-[600] text-[--light-yellow-text]" />
                </span>
                <span
                  className={cn(
                    `${work_sans.className} font-[600] text-sm text-[whitesmoke]`
                  )}
                >
                  enquiry@fameroyaltravels.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-[#000] text-white py-[20px] md:py-0">
        <div className="container mx-auto md:w-[1200px] flex md:justify-between items-center  md:h-[80px] flex-col md:flex-row ">
          <div>
            <h1
              className={cn(
                `${work_sans.className} text-sm md:text-[16px] font-[600]`
              )}
            >
              Fame Royal Travels &copy; {new Date().getFullYear()} All Right
              Reserved
            </h1>
          </div>
          <div
            className={cn(
              `${work_sans.className} flex gap-3 text-[16px] font-[600] pt-5 md:pt-0`
            )}
          >
            <Link
              href="/"
              className="hover:text-[--light-yellow-text] transition-all delay-75 -ml-[10px] md:-ml-0"
            >
              Terms of Service
            </Link>
            <span>|</span>
            <Link
              href="/"
              className="hover:text-[--light-yellow-text] transition-all delay-75"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
