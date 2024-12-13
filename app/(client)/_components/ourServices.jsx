import useFetch from "@/hooks/useFetch";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import SkeletonLoader from "./Loader";
import { truncateText } from "@/utils/trucateText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services = () => {
  const { loading, data } = useFetch("/service");
  return (
    <>
      <section className="flex">
        <div className="container mx-auto flex justify-center gap-y-3  flex-col py-[50px]">
          <h2
            className={cn(
              `${playfair.className} font-[900] text-[25px] md:text-[50px] md:justify-center flex leading-tight`
            )}
          >
            Our Services
          </h2>
          <p
            className={cn(
              `${work_sans.className} text-sm md:justify-center flex md:text-center max-w-[600px] mx-auto`
            )}
          >
            At Fame Royal Travels and Multi-services Limited, we offer an
            extensive array of services designed to cater to all aspects of our
            clients&apos; needs.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5 my-8">
            {loading ? (
              <SkeletonLoader />
            ) : (
              data?.slice(0, 4).map((service) => (
                <div
                  className=" gap-y-2 flex flex-col items-center"
                  key={service.id}
                >
                  <Image
                    src={service?.mediaUrl?.[0]}
                    width={200}
                    height={200}
                    alt={service?.service_title}
                    className="w-full bg-cover h-[150px]"
                  />
                  <h2
                    className={cn(
                      `${work_sans.className} text-[17px] font-[600] text-[green]`
                    )}
                  >
                    {service?.service_title}
                  </h2>
                  <p
                    className={cn(
                      `${work_sans.className} text-sm text-center text-[rgba(0,0,0,0.8)]`
                    )}
                  >
                    {truncateText(service?.service_description, 200)}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            <Link href="/services">
              <Button
                variant="ghost"
                className={cn(
                  `${work_sans.className} w-fit justify-center btn-default bg-[--btn-hover]  hover:bg-[--light-yellow-text]  flex items-center gap-2 text-center`
                )}
              >
                view all services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
