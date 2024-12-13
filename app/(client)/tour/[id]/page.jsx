"use client";
import { Button } from "@/components/ui/button";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { FiCheck, FiX } from "react-icons/fi";
import Breadcrumb from "../../_components/breadcrumb";
import { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import { redirect } from "next/navigation";
import { formatCurrency } from "@/utils/formatCurrency";

const ToursDetailsPage = ({ params }) => {
  const { error, data } = useFetch(`/tour/${params?.id}`);
  if (error) {
    redirect("/tour");
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="w-full bg-[whitesmoke]">
        <div
          className={cn(
            "w-full h-[500px] bg-cover bg-fixed bg-no-repeat flex md:items-end items-center justify-center pb-[80px] relative"
          )}
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
              {data?.tour_destination}
            </h1>
            <div className="py-3 flex gap-3">
              <span className="font-bold">
                {formatCurrency(data?.tour_fee)}
              </span>
              <span>/per person</span>
            </div>
            <Link href="#book">
              <Button
                className={cn(
                  `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px]`
                )}
              >
                Book tour
              </Button>
            </Link>
          </div>
        </div>
        <div className="container mx-auto md:w-[1200px] ">
          <div id="book" className="flex gap-5 pb-[150px] flex-col md:flex-row">
            <div className="py-[50px] md:w-[70%] overview">
              <h1
                className={cn(
                  `${work_sans.className} text-[30px] font-[600] py-3`
                )}
              >
                Overview
              </h1>
              {data?.tour_description}
              <Table className="border my-5 border-[#ccc]">
                <TableBody>
                  <TableRow>
                    <TableCell
                      className={cn(
                        `${work_sans.className} border w-1/2 border-[#ccc] text-[16px] font-[600]`
                      )}
                    >
                      Destination
                    </TableCell>
                    <TableCell className="border w-1/2 border-[#ccc]">
                      <p className={cn(`${work_sans.className} text-sm`)}>
                        {data?.tour_destination}
                      </p>
                    </TableCell>
                  </TableRow>
                  {data?.tour_included_services && (
                    <TableRow>
                      <TableCell
                        className={cn(
                          `${work_sans.className} border w-1/2 border-[#ccc] text-[16px] font-[600]`
                        )}
                      >
                        Included:
                      </TableCell>
                      <TableCell className="border w-1/2 border-[#ccc]">
                        <ul className="flex flex-col gap-y-2">
                          {data?.tour_included_services
                            ?.split(",")
                            ?.map((included, index) => (
                              <li
                                className="flex items-center gap-2"
                                key={index}
                              >
                                <span>
                                  <FiCheck
                                    className={cn(
                                      `${work_sans.className} text-[green] font-[600] text-[20px]`
                                    )}
                                  />
                                </span>
                                <span
                                  className={cn(
                                    `${work_sans.className} text-sm`
                                  )}
                                >
                                  {included}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  )}
                  {data?.tour_excluded_services && (
                    <TableRow>
                      <TableCell
                        className={cn(
                          `${work_sans.className} border w-1/2 border-[#ccc] text-[16px] font-[600]`
                        )}
                      >
                        Excluded:
                      </TableCell>
                      <TableCell className="border w-1/2 border-[#ccc]">
                        <ul className="flex flex-col gap-y-2">
                          {data?.tour_excluded_services
                            ?.split(",")
                            ?.map((excluded, index) => (
                              <li
                                className="flex items-center gap-2"
                                key={index}
                              >
                                <span>
                                  <FiX
                                    className={cn(
                                      `${work_sans.className} text-red-500 font-[600] text-[20px]`
                                    )}
                                  />
                                </span>
                                <span
                                  className={cn(
                                    `${work_sans.className} text-sm`
                                  )}
                                >
                                  {excluded}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="md:w-[30%] bg-[whitesmoke] boxShadow md:-mt-[150px] z-10 rounded-[5px] p-5 h-fit sticky top-0">
              <h1
                className={cn(
                  `${work_sans.className} text-[20px] font-[600] pb-3`
                )}
              >
                Book This Tour
              </h1>
              <div className="w-full gap-y-3  flex flex-col">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="where to?"
                  className={cn(
                    `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                  )}
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                  className={cn(
                    `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                  )}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone number"
                  className={cn(
                    `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                  )}
                />
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="where to?"
                  className={cn(
                    `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                  )}
                />
                <textarea
                  name=""
                  id=""
                  rows={5}
                  className={cn(
                    `${work_sans.className} text-sm border p-5  border-[rgba(0,0,0,0.2)] outline-none w-full`
                  )}
                ></textarea>
                <Button
                  className={cn(
                    `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px]`
                  )}
                >
                  Book tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToursDetailsPage;
