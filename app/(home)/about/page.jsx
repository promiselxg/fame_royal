"use client";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import WhyUs from "../_components/whyUs";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section className="flex w-full flex-col">
        <div className="w-full bg-about-us-bg h-[125px] md:h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div className={cn(`${work_sans.className}  z-10`)}>
            <h1
              className={cn(
                `${work_sans.className} text-[20px]  md:text-[40px] text-white leading-[1.1]`
              )}
            >
              About us.
            </h1>
            <p
              className={cn(
                `${work_sans.className} text-sm md:text-[40px] text-white`
              )}
            >
              learn more about us.
            </p>
          </div>
        </div>

        <div
          className={cn(
            `${work_sans.className} container mx-auto md:w-[1000px] py-[40px] md:py-[80px] text-sm leading-loose`
          )}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reprehenderit voluptatem in. Earum omnis maxime, inventore dolorum
            sunt quidem veritatis optio harum, rem beatae qui culpa!
            Voluptatibus, sed. Dignissimos, tenetur?
          </p>
        </div>
      </section>
      <WhyUs />
      <section className="w-full bg-[white] z-10">
        <div className="container mx-auto flex py-[40px] md:py-[80px] md:w-[1200px] flex-col">
          <div className="flex justify-center">
            <h2
              className={cn(
                `${playfair.className} font-[900] text-[20px] md:text-[50px] pb-10`
              )}
            >
              Our Team
            </h2>
          </div>
          <div className="grid w-full md:grid-cols-3 grid-cols-1 gap-5 z-10">
            <div className="boxShadow  cursor-pointer teamMember rounded-[5px] h-fit relative">
              <div className="w-full h-[300px] overflow-hidden">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/team-1.jpg"
                  width={300}
                  height={300}
                  alt="Our Team"
                  className="w-full bg-cover h-[300px]"
                />
              </div>

              <div className="flex flex-col gap-y-1 justify-center text-center ">
                <div className="flex flex-col justify-center lower-content">
                  <h1
                    className={cn(
                      `${playfair.className} text-sm md:text-[20px] font-[900]`
                    )}
                  >
                    Team member name
                  </h1>
                  <p
                    className={cn(
                      `${work_sans.className} text-sm md:text-[16px] font-[600]`
                    )}
                  >
                    Chairman
                  </p>
                </div>
                <div className="social-links flex items-center gap-2 justify-center text-center ">
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiFacebook className="text-[rgb(0,0,255)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiInstagram className="text-[rgb(0,128,0)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiTwitter className="text-red-700" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="boxShadow  cursor-pointer teamMember rounded-[5px] h-fit relative">
              <div className="w-full h-[300px] overflow-hidden">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/team-1.jpg"
                  width={300}
                  height={300}
                  alt="Our Team"
                  className="w-full bg-cover h-[300px]"
                />
              </div>

              <div className="flex flex-col gap-y-1 justify-center text-center ">
                <div className="flex flex-col justify-center lower-content">
                  <h1
                    className={cn(
                      `${playfair.className} text-[20px] font-[900]`
                    )}
                  >
                    C.E.O Name
                  </h1>
                  <p
                    className={cn(
                      `${work_sans.className} text-[16px] font-[600]`
                    )}
                  >
                    Director
                  </p>
                </div>
                <div className="social-links flex items-center gap-2 justify-center text-center ">
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiFacebook className="text-[rgb(0,0,255)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiInstagram className="text-[rgb(0,128,0)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiTwitter className="text-red-700" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="boxShadow  cursor-pointer teamMember rounded-[5px] h-fit relative">
              <div className="w-full h-[300px] overflow-hidden">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/team-1.jpg"
                  width={300}
                  height={300}
                  alt="Our Team"
                  className="w-full bg-cover h-[300px]"
                />
              </div>

              <div className="flex flex-col gap-y-1 justify-center text-center ">
                <div className="flex flex-col justify-center lower-content">
                  <h1
                    className={cn(
                      `${playfair.className} text-[20px] font-[900]`
                    )}
                  >
                    C.E.O Name
                  </h1>
                  <p
                    className={cn(
                      `${work_sans.className} text-[16px] font-[600]`
                    )}
                  >
                    C.E.O
                  </p>
                </div>
                <div className="social-links flex items-center gap-2 justify-center text-center ">
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiFacebook className="text-[rgb(0,0,255)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiInstagram className="text-[rgb(0,128,0)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiTwitter className="text-red-700" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
