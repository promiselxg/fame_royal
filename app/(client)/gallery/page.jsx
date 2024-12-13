"use client";

import useFetch from "@/hooks/useFetch";
import { work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import SkeletonLoader from "../_components/Loader";

const Gallery = () => {
  const { loading, data } = useFetch("/gallary");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section className="flex w-full flex-col">
        <div className="w-full bg-about-us-bg h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div className={cn(`${work_sans.className}  z-10`)}>
            <h1
              className={cn(
                `${work_sans.className} text-[40px] text-white md:uppercase  leading-[1.1]`
              )}
            >
              Gallery
            </h1>
          </div>
        </div>
        <div className="container mx-auto flex md:w-[1200px] z-10 py-[80px]">
          <PhotoProvider>
            {loading ? (
              <SkeletonLoader />
            ) : (
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5 relative">
                {data?.map((gallary) => (
                  <div
                    className="h-[300px] md:w-[350px] bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center  zoom-in overflow-hidden"
                    key={gallary?.id}
                  >
                    <PhotoView src={gallary?.mediaUrl?.[0]}>
                      <Image
                        src={gallary?.mediaUrl?.[0]}
                        width={300}
                        height={300}
                        alt={gallary?.gallary_title}
                        className="w-full h-[280px]  md:h-[300px] bg-cover"
                      />
                    </PhotoView>
                    {gallary?.gallary_title && (
                      <h1 className="p-2 text-[14px] leading-tight">
                        {gallary?.gallary_title}
                      </h1>
                    )}
                  </div>
                ))}
              </div>
            )}
          </PhotoProvider>
        </div>
      </section>
    </>
  );
};

export default Gallery;
