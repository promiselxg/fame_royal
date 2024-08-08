import { Button } from "@/components/ui/button";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { FiCheck, FiX } from "react-icons/fi";
import Breadcrumb from "../../_components/breadcrumb";

const ToursDetailsPage = ({ params }) => {
  return (
    <>
      <div className="w-full bg-[whitesmoke]">
        <div className="bg-tour-bg w-full h-[500px] bg-cover bg-fixed bg-no-repeat flex md:items-end items-center justify-center pb-[80px] relative">
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
              {params?.tour_name}
            </h1>
            <div className="py-3 flex gap-3">
              <span className="font-bold">20,000</span>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus corporis earum quo dolorum nostrum illum explicabo qui
                itaque odit inventore blanditiis, molestiae quia porro enim
                ipsa, tenetur rem rerum velit.
              </p>
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
                        New York City
                      </p>
                    </TableCell>
                  </TableRow>
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
                        <li className="flex items-center gap-2">
                          <span>
                            <FiCheck
                              className={cn(
                                `${work_sans.className} text-[green] font-[600] text-[20px]`
                              )}
                            />
                          </span>
                          <span
                            className={cn(`${work_sans.className} text-sm`)}
                          >
                            Air fares
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>
                            <FiCheck
                              className={cn(
                                `${work_sans.className} text-[green] font-[600] text-[20px]`
                              )}
                            />
                          </span>
                          <span
                            className={cn(`${work_sans.className} text-sm`)}
                          >
                            4 Nights Hotel Accomodation
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>
                            <FiCheck
                              className={cn(
                                `${work_sans.className} text-[green] font-[600] text-[20px]`
                              )}
                            />
                          </span>
                          <span
                            className={cn(`${work_sans.className} text-sm`)}
                          >
                            4 Nights Hotel Accomodation
                          </span>
                        </li>
                      </ul>
                    </TableCell>
                  </TableRow>
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
                        <li className="flex items-center gap-2">
                          <span>
                            <FiX
                              className={cn(
                                `${work_sans.className} text-[red] font-[600] text-[20px]`
                              )}
                            />
                          </span>
                          <span
                            className={cn(`${work_sans.className} text-sm`)}
                          >
                            Air fares
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>
                            <FiX
                              className={cn(
                                `${work_sans.className} text-[red] font-[600] text-[20px]`
                              )}
                            />
                          </span>
                          <span
                            className={cn(`${work_sans.className} text-sm`)}
                          >
                            4 Nights Hotel Accomodation
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span>
                            <FiX
                              className={cn(
                                `${work_sans.className} text-[red] font-[600] text-[20px]`
                              )}
                            />
                          </span>
                          <span
                            className={cn(`${work_sans.className} text-sm`)}
                          >
                            4 Nights Hotel Accomodation
                          </span>
                        </li>
                      </ul>
                    </TableCell>
                  </TableRow>
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
