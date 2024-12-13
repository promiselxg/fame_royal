"use client";
import { playfair, work_sans } from "@/lib/fonts";
import Breadcrumb from "../../_components/breadcrumb";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";
import { useEffect } from "react";
import useFetch from "@/hooks/useFetch";

const ProductDetails = ({ params }) => {
  const { error, data } = useFetch(`/product/${params?.id}`);
  if (error) {
    redirect("/product");
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="w-full">
        <div
          className="w-full h-[300px] bg-cover bg-fixed bg-no-repeat flex md:items-end items-center justify-center pb-[80px] relative"
          style={{
            backgroundImage: `url(${data?.mediaUrl?.[0] || ""})`,
          }}
        >
          <div className="absolute top-0 bottom-0 w-full bg-[rgba(0,0,0,0.5)]"></div>
          <div
            className={cn(
              `${work_sans.className}  z-10 md:w-[1200px] container text-white`
            )}
          >
            <Breadcrumb label="Products" className="-ml-0 mb-5" />
            <h1
              className={cn(
                `${playfair.className} text-[40px] text-white font-[900] leading-[1.1]`
              )}
            >
              {data?.product_title}
            </h1>
          </div>
        </div>
        <div className="container mx-auto w-[1200px] flex gap-8 py-[50px]">
          <div className="w-[70%] flex flex-col overview">
            <h2
              className={cn(
                `${playfair.className} text-[40px] font-[900] pb-[20px]`
              )}
            >
              {data?.product_title}
            </h2>
            <Image
              src={data?.mediaUrl?.[0]}
              width={1000}
              height={500}
              alt={data?.product_tile}
            />
            <div className="py-8">
              <p>{data?.product_description}</p>
            </div>
          </div>
          <div
            className={cn(
              `${work_sans.className} w-full md:w-1/3 text-sm p-8 bg-about-us-bg rounded-[5px] text-white h-fit`
            )}
          >
            <h1
              className={cn(
                `${playfair.className} text-[18px] font-[900] pb-2`
              )}
            >
              Any Question?
            </h1>
            <p
              className={cn(
                `${work_sans.className} text-sm leading-normal py-2`
              )}
            >
              If you require additional information on Tours, Ticketing &
              Reservation, Hotel Reservation, Visa Counseling, Immigration &
              Protocol Service and any other; kindly contact us:
            </p>
            <div className="flex items-center gap-3">
              <span>
                <FiPhone />
              </span>
              <span>+234 700 000 0000</span>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <FiMail />
              </span>
              <span>info@fameroyaltravels.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
