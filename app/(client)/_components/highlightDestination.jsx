"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useFetch from "@/hooks/useFetch";
import { truncateText } from "@/utils/trucateText";
import Link from "next/link";

const HighlightDestination = () => {
  const { data } = useFetch("/tour");

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

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${data && data[current - 1]?.mediaUrl?.[0]})`,
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
            {data?.map((tour) => (
              <CarouselItem key={tour.id}>
                <div className="container mx-auto z-10">
                  <div className="max-w-[400px] bg-white p-5 rounded-[5px] boxShadow leading-[1.2] gap-y-2 flex flex-col">
                    <h2
                      className={cn(
                        `${work_sans.className} text-[20px] md:text-[40px] font-[600]`
                      )}
                    >
                      {tour?.tour_destination}
                    </h2>
                    <p
                      className={cn(
                        `${work_sans.className} text-sm font-[400]`
                      )}
                    >
                      {truncateText(tour?.tour_description, 200)}
                    </p>
                    <Link href={`/tour/${tour.id}`}>
                      <Button
                        className={cn(
                          `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] w-fit mt-5`
                        )}
                      >
                        See details
                      </Button>
                    </Link>
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
