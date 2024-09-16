"use client";

import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
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
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg"
                width={1500}
                height={700}
                className="h-[300px] md:h-screen w-full object-fit"
                alt="image"
                priority
              />
              <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] text-white bg-[rgba(0,0,0,0.5)] boxShadow rounded-[8px] md:p-10 p-5 absolute md:top-[150px] top-[20%] text-left leading-tight flex-col">
                <h2
                  className={cn(
                    `${playfair.className} text-[25px] md:text-[80px] font-[900] leading-[1]`
                  )}
                >
                  Fame <br />
                  Royal Travels.
                </h2>
                <p
                  className={cn(
                    `${work_sans.className} text-[12px] md:text-[17px] leading-[1.2] mt-2`
                  )}
                >
                  We operate with unwavering commitment to: <br />
                  professionalism,integrity, deligence and transparency.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg"
                width={1500}
                height={700}
                className="h-[300px] md:h-screen w-full object-fit"
                alt="image"
                priority
              />
              <div className="w-3/4 max-w-max flex flex-initial md:flex-col ml-[50px] text-white bg-[rgba(0,0,0,0.5)] boxShadow rounded-[8px] md:p-10 p-5 absolute md:top-[150px] top-[20%] text-left leading-tight flex-col">
                <h2
                  className={cn(
                    `${playfair.className} text-[25px] md:text-[80px] font-[900] leading-[1]`
                  )}
                >
                  Fame <br />
                  Royal Travels.
                </h2>
                <p
                  className={cn(
                    `${work_sans.className} text-[12px] md:text-[17px] leading-[1.2] mt-2`
                  )}
                >
                  We operate with unwavering commitment to: <br />
                  professionalism,integrity, deligence and transparency.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Hero;
