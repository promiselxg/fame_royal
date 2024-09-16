"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HighlightDestination = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const backgroundImages = [
    "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
  ];

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${backgroundImages[current - 1]})`,
        }}
        className={cn(
          `flex md:h-[600px] bg-no-repeat bg-center bg-cover relative py-[150px] px-0 items-center`
        )}
      >
        <div className="deals-section"></div>
        <Carousel
          setApi={setApi}
          className="w-full max-w-[500px] z-10"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="container mx-auto z-10">
                  <div className="max-w-[400px] bg-white p-5 rounded-[5px] boxShadow leading-[1.2] gap-y-2 flex flex-col">
                    <h2
                      className={cn(
                        `${work_sans.className} text-[20px] md:text-[40px] font-[600]`
                      )}
                    >
                      Group Travel to New Zealand
                    </h2>
                    <p
                      className={cn(
                        `${work_sans.className} text-sm font-[400]`
                      )}
                    >
                      Lorem ipsum dolor amet consectetur adipiscing sed do
                      eiusmod tempor ux incidunt labore dolore magna aliqua Quis
                      ipsum suspen. bgbd
                    </p>
                    <Button
                      className={cn(
                        `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] w-fit mt-5`
                      )}
                    >
                      See details
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </>
  );
};

export default HighlightDestination;
