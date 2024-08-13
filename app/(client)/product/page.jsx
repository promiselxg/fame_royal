"use client";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Breadcrumb from "../_components/breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="w-full bg-[whitesmoke]">
        <div className="w-full bg-tours-bg h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center z-10">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div className={cn(`${work_sans.className}  z-10 md:w-[1200px]`)}>
            <h1
              className={cn(
                `${work_sans.className} text-[40px] text-white font-[600] leading-[1.1]`
              )}
            >
              Products
            </h1>
            <Breadcrumb label="Products" />
          </div>
        </div>
        <div className="container mx-auto">
          <section className="flex bg-[#f5f6f6] py-[50px] md:py-[100px]">
            <div className="md:container mx-auto flex  md:w-[1200px] gap-y-3  flex-col">
              <h2
                className={cn(
                  `${playfair.className} font-[900] text-[25px] md:text-[50px] md:justify-center flex leading-tight pb-[25px]`
                )}
              >
                Our Products.
              </h2>
              <div className="grid w-full md:grid-cols-3 grid-cols-1 gap-5 z-10">
                <Link href="/product/product-name">
                  <div className="bg-white md:min-w-[300px] boxShadow rounded-[5px]  overflow-hidden">
                    <div className="w-full h-[280px] overflow-hidden">
                      <Image
                        src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/tour-1.jpg"
                        width={300}
                        height={300}
                        alt="tour 1"
                        className="w-full bg-cover h-[280px]"
                      />
                    </div>
                    <div className="p-5">
                      <span className="py-2">
                        <h1
                          className={cn(
                            `${work_sans.className} text-[17px] font-[600]`
                          )}
                        >
                          Moscow Red City Land
                        </h1>
                      </span>
                      <div className="py-4">
                        <p className={cn(`${work_sans.className} text-[15px]`)}>
                          Lorem ipsum dolor amet consectetur adipiscing sed do
                          eiusmod tempor incididunt.
                        </p>
                      </div>
                      <div className="pb-8"></div>
                    </div>
                  </div>
                </Link>
                <Link href="/product/product-name">
                  <div className="bg-white w-full md:min-w-[300px] boxShadow rounded-[5px] overflow-hidden">
                    <div className="w-full h-[280px] overflow-hidden">
                      <Image
                        src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/tour-1.jpg"
                        width={300}
                        height={300}
                        alt="tour 1"
                        className="w-full bg-cover h-[280px]"
                      />
                    </div>
                    <div className="p-5">
                      <span className="py-2">
                        <h1
                          className={cn(
                            `${work_sans.className} text-[17px] font-[600]`
                          )}
                        >
                          Moscow Red City Land
                        </h1>
                      </span>
                      <div className="py-4">
                        <p className={cn(`${work_sans.className} text-[15px]`)}>
                          Lorem ipsum dolor amet consectetur adipiscing sed do
                          eiusmod tempor incididunt.
                        </p>
                      </div>

                      <div className="pb-8"></div>
                    </div>
                  </div>
                </Link>
                <Link href="/product/product-name">
                  <div className="bg-white w-full md:min-w-[300px] boxShadow rounded-[5px] overflow-hidden">
                    <div className="w-full h-[280px] overflow-hidden">
                      <Image
                        src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/tour-1.jpg"
                        width={300}
                        height={300}
                        alt="tour 1"
                        className="w-full bg-cover h-[280px]"
                      />
                    </div>
                    <div className="p-5">
                      <span className="py-2">
                        <h1
                          className={cn(
                            `${work_sans.className} text-[17px] font-[600]`
                          )}
                        >
                          Moscow Red City Land
                        </h1>
                      </span>
                      <div className="py-4">
                        <p className={cn(`${work_sans.className} text-[15px]`)}>
                          Lorem ipsum dolor amet consectetur adipiscing sed do
                          eiusmod tempor incididunt.
                        </p>
                      </div>

                      <div className="pb-8"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
