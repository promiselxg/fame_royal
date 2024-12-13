"use client";

import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";
import SkeletonLoader from "../_components/Loader";

const Service = () => {
  const { data: visaService, loading: visaLoading } = useFetch("/visa");
  const { data, loading } = useFetch("/service");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section className="flex w-full flex-col bg-[whitesmoke]">
        <div className="w-full bg-about-us-bg h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div
            className={cn(
              `${work_sans.className}  z-10 md:w-[950px] mx-auto container`
            )}
          >
            <h1
              className={cn(
                `${work_sans.className} text-[30px] md:text-[40px] text-white  leading-[1.1]`
              )}
            >
              Fame Royal Travels Services
            </h1>
            <p
              className={cn(
                `${work_sans.className} text-sm md:text-[20px] text-white`
              )}
            >
              Allow us to be your Travel Agent.
            </p>
          </div>
        </div>
        <div className="container mx-auto md:w-[1200px] py-[80px]">
          {loading ? (
            <SkeletonLoader />
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="10px">
                {data?.map((service) => (
                  <div
                    className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex  p-5 gap-3 flex-col h-fit"
                    key={service?.id}
                  >
                    <Image
                      src={service?.mediaUrl?.[0]}
                      width={200}
                      height={200}
                      alt={service?.service_title}
                      className="w-[100px] bg-cover h-[100px] rounded-full"
                    />
                    <h1
                      className={cn(
                        `${work_sans.className} text-[20px] font-[600] leading-tight`
                      )}
                    >
                      {service?.service_title}
                    </h1>
                    <p
                      className={cn(
                        `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                      )}
                    >
                      {service?.service_description}
                    </p>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
        <div className="mb-10 container mx-auto md:w-[1200px] z-10">
          <h1
            className={cn(
              `${playfair.className} text-[25px] md:text-[40px] font-[900] pb-8 leading-[1.1]`
            )}
          >
            Country of Visa Service.
          </h1>
          <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
            {visaLoading ? (
              <SkeletonLoader />
            ) : (
              visaService?.map((country) => (
                <div
                  className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit"
                  key={country?.id}
                >
                  <Image
                    src={country?.mediaUrl?.[0]}
                    width={50}
                    height={50}
                    alt={country?.via_country_name}
                    className="w-[50px] h-[30px] bg-contain"
                  />
                  <h1
                    className={cn(
                      `${work_sans.className} text-[16px] font-[600] leading-[1.1]`
                    )}
                  >
                    {country?.via_country_name}
                  </h1>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
