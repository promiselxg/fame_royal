"use client";

import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
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
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 relative">
              <div className="h-[300px] md:w-[350px] bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center  zoom-in overflow-hidden">
                <PhotoView src="/img/about-us.jpg">
                  <Image
                    src="/img/about-us.jpg"
                    width={300}
                    height={300}
                    alt="image 1"
                    className="w-full h-[280px]  md:h-[300px] bg-cover"
                  />
                </PhotoView>
              </div>
              <div className="h-[300px] md:w-[350px] bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center  zoom-in overflow-hidden">
                <PhotoView src="/img/about-us.jpg">
                  <Image
                    src="/img/about-us.jpg"
                    width={300}
                    height={300}
                    alt="image 1"
                    className="w-full h-[280px]  md:h-[300px] bg-cover"
                  />
                </PhotoView>
              </div>
              <div className="h-[300px] md:w-[350px] bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center  zoom-in overflow-hidden">
                <PhotoView src="/img/about-us.jpg">
                  <Image
                    src="/img/about-us.jpg"
                    width={300}
                    height={300}
                    alt="image 1"
                    className="w-full h-[280px]  md:h-[300px] bg-cover"
                  />
                </PhotoView>
              </div>
              <div className="h-[300px] md:w-[350px] bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center  zoom-in overflow-hidden">
                <PhotoView src="/img/about-us.jpg">
                  <Image
                    src="/img/about-us.jpg"
                    width={300}
                    height={300}
                    alt="image 1"
                    className="w-full h-[280px]  md:h-[300px] bg-cover"
                  />
                </PhotoView>
              </div>
            </div>
          </PhotoProvider>
        </div>
      </section>
    </>
  );
};

export default Gallery;
