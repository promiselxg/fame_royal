"use client";

import useFetch from "@/hooks/useFetch";
import { work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  const { data } = useFetch("/banner");
  return (
    <>
      <section
        className="w-full relative bg-hero-pattern bg-cover deals-section"
        id="home"
      >
        <div className="md:h-screen h-[300px]">
          <Carousel
            autoPlay
            infiniteLoop={true}
            transitionTime={500}
            showStatus={false}
            interval={3000}
            emulateTouch
            dynamicHeight={true}
            showThumbs={false}
          >
            {data.map((banner) => (
              <div className="relative" key={banner.id}>
                <Image
                  src={banner?.mediaUrl?.[0]}
                  width={1500}
                  height={700}
                  className="h-[300px] md:h-screen w-full object-fit"
                  alt={`Banner-${banner?.id}`}
                  priority
                />
                <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] text-white bg-[rgba(0,0,0,0.5)] boxShadow rounded-[8px] md:p-10 p-5 absolute bottom-10 text-left leading-tight flex-col">
                  <p
                    className={cn(
                      `${work_sans.className} text-[25px] md:text-[30px] leading-[1.2] mt-2`
                    )}
                  >
                    {banner?.description}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Hero;
