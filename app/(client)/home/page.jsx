"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import Hero from "../_components/header/hero";
import WhyUs from "../_components/whyUs";
import Services from "../_components/ourServices";
import Products from "../_components/products";
import HighlightDestination from "../_components/highlightDestination";
import useFetch from "@/hooks/useFetch";

export default function Home() {
  const { data } = useFetch("/destination");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <WhyUs />
      <section className="md:h-[calc(100vh-200px)] flex items-center">
        <div className="container mx-auto flex w-full md:w-[1000px] gap-8 flex-col md:flex-row justify-center items-center">
          <div className="hidden w-1/3 bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center h-fit md:mt-[50px]">
            <Image
              src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/about-1.jpg"
              width={300}
              height={300}
              alt="about us"
              className="bg-cover"
            />
          </div>
          <div className="md:w-1/2 md:ml-[50px] flex flex-col justify-center gap-y-2  pt-[50px] md:pt-0">
            <h2
              className={cn(
                `${work_sans.className} text-[25px] font-[600] text-[--light-yellow-text] leading-[1.2]`
              )}
            >
              About Fame Royal Travels
            </h2>
            <h2
              className={cn(
                `${playfair.className} text-[20px] md:text-[45px] font-[900] leading-[1.2]`
              )}
            >
              {/* CEO Message */}
            </h2>
            <p
              className={cn(
                `${work_sans.className} text-sm md:text-[16px] font-[400] leading-6 text-[rgba(0,0,0,0.9)]`
              )}
            >
              Welcome you to our world of exploration and adventure. At Fame
              royal travels, we believe that travel is not just about visiting
              new places; its about creating unforgettable memories, forging
              connections, and boardening horizons. Our team is dedicated to
              crafting unique experiences tailored to your preferences, ensuring
              every journey with us is extraordinary. Whether you’re seeking a
              relaxing beach getaway, an exhilarating expedition, or a cultural
              immersion, we are here to turn your travel dreams into reality.
              Thank you for entrusting us with your adventures. We look forward
              to being a part of your unforgettable journeys.
            </p>
            {/* <Link href="/tour">
              <Button
                className={cn(
                  `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] w-fit mt-5  `
                )}
              >
                Read more about us.
              </Button>
            </Link> */}
          </div>
        </div>
      </section>
      <Services />
      <HighlightDestination />
      <Products />
      <section className="flex relative bg-[rgba(0,0,0,0.8)] md:h-[400px] deals-section overflow-hidden py-[50px] md:py-0">
        <div className="pattern-layer bg-shape-4 bg-no-repeat bg-center bg-cover"></div>
        <div className="container mx-auto z-10 flex flex-col md:justify-center md:items-center">
          <h2
            className={cn(
              `${playfair.className} md:text-[50px] text-white font-[900] leading-tight`
            )}
          >
            Subscribe to our Newsletter
          </h2>
          <p
            className={cn(
              `${work_sans.className} text-sm text-white font-[600]`
            )}
          >
            Sign up our newsletter to get special updates.
          </p>
          <div className="flex w-full max-w-sm items-center gap-4 mt-5 flex-col md:flex-row">
            <Input
              type="email"
              placeholder="Email"
              className="border border-white rounded-[5px] p-5 placeholder:text-white text-white"
            />
            <Button
              className={cn(
                `${work_sans.className} btn-default text-[14px] font-[400] bg-[--light-yellow-text] hover:bg-[--btn-hover] p-5 md:h-[30px] hover:text-white transition-all delay-75 rounded-[2px] w-full md:w-fit`
              )}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="container flex flex-wrap gap-6  justify-center  md:py-[80px] py-[40px]">
          <div className="md:w-[300px] md:min-w-[380px] md:h-[380px] flex flex-col justify-center">
            <h1
              className={cn(
                `${work_sans.className} uppercase text-sm md:text-md font-[500]`
              )}
            >
              Choose your next destination.
            </h1>
            <h2
              className={cn(
                `${playfair.className} font-[900] text-[25px] md:text-[55px] leading-[1.1]`
              )}
            >
              Our <br />
              Popular <br />
              Destinations.
            </h2>
          </div>
          {data?.slice(0, 5)?.map((destination) => (
            <div
              className="w-full md:w-[300px] md:min-w-[380px] z-10"
              key={destination.id}
            >
              <Link href="#">
                <div className="w-full bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center h-[365px] relative deals-section zoom-in">
                  <Image
                    src={destination?.mediaUrl?.[0]}
                    width={300}
                    height={300}
                    alt={destination?.destination_title}
                    className="bg-cover w-full h-[350px]"
                  />
                  <div className="absolute bottom-5 left-5">
                    <h1
                      className={cn(
                        `${work_sans.className} text-[whitesmoke] font-[600] text-[20px]`
                      )}
                    >
                      {destination?.destination_title}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
