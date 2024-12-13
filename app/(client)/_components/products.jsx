import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiClock, FiMapPin } from "react-icons/fi";
import SkeletonLoader from "./Loader";
import { formatCurrency } from "@/utils/formatCurrency";
import { truncateText } from "@/utils/trucateText";

const Products = () => {
  const { loading, data } = useFetch("/tour");
  const price = "";
  return (
    <>
      <section className="flex bg-[#f5f6f6] py-[50px] md:py-[100px]">
        <div className="container mx-auto flex  md:w-[1200px] gap-y-3  flex-col">
          <h3
            className={cn(
              `${work_sans.className} font-[500] text-sm md:justify-center flex leading-tight`
            )}
          >
            Our Products.
          </h3>
          <h2
            className={cn(
              `${playfair.className} font-[900] text-[25px] md:text-[50px] md:justify-center flex leading-tight pb-[25px]`
            )}
          >
            Our Tour Packages
          </h2>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <div className="grid w-full md:grid-cols-3 grid-cols-1 gap-5 z-10">
              {data?.slice(0, 3).map((tour) => (
                <div
                  className="bg-white md:min-w-[300px] boxShadow rounded-[5px]  overflow-hidden"
                  key={tour.id}
                >
                  <div className="w-full h-[280px] overflow-hidden">
                    <Image
                      src={tour?.mediaUrl?.[0]}
                      width={300}
                      height={300}
                      alt={tour?.tour_destination}
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
                        {tour?.tour_destination}
                      </h1>
                    </span>
                    {tour?.tour_fee && (
                      <div className="w-full flex gap-2 py-2">
                        <span
                          className={cn(
                            `${work_sans.className} text-[17px] font-[600]`
                          )}
                        >
                          {formatCurrency(tour?.tour_fee)}
                        </span>
                        <span>/</span>
                        <span className="text-sm">per person</span>
                      </div>
                    )}
                    {/* <div
                      className={cn(
                        `${work_sans.className} bg-[whitesmoke] p-4 w-full font-[600] text-sm flex justify-between rounded-[2px]`
                      )}
                    >
                      <span className="flex gap-1 items-center">
                        <FiClock />5 Days
                      </span>
                      <span className="flex gap-1 items-center">
                        <FiMapPin /> Abuja
                      </span>
                    </div> */}
                    <div className="py-4">
                      <p className={cn(`${work_sans.className} text-[15px]`)}>
                        {truncateText(tour.tour_description, 100)}
                      </p>
                    </div>
                    <Link href={`/tour/${tour.id}`}>
                      <Button
                        variant="outline"
                        className={cn(
                          `${work_sans.className} hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] hover:text-white transition-all delay-75 rounded-[2px]`
                        )}
                      >
                        See Details
                      </Button>
                    </Link>
                    <div className="pb-8"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
