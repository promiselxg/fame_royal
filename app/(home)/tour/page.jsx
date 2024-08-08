import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FiMail, FiPhone } from "react-icons/fi";
import Image from "next/image";
import Breadcrumb from "../_components/breadcrumb";

const ToursPage = () => {
  return (
    <>
      <div className="w-full flex flex-col bg-[whitesmoke]">
        <div className="md:w-full bg-tours-bg h-[250px] bg-no-repeat bg-cover bg-fixed relative flex md:justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div
            className={cn(
              `${work_sans.className}  z-10 md:w-[1200px] px-5 md:px-0`
            )}
          >
            <h1
              className={cn(
                `${work_sans.className} text-[20px] md:text-[40px] text-white font-[600] leading-[1.1]`
              )}
            >
              Tour Packages
            </h1>
            <Breadcrumb label="Tours" className="md:ml-2 mb-5" />
          </div>
        </div>
        <div className=" mx-auto md:w-[1200px] -mt-[50px] z-10 mb-[50px]">
          <div className="w-full boxShadow bg-[whitesmoke] p-5 flex gap-5  rounded-[8px] justify-between container mx-auto flex-col md:flex-row">
            <div className="flex w-full gap-5 flex-col md:flex-row">
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
                type="text"
                name=""
                id=""
                className={cn(
                  `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                )}
              />
              <input
                type="text"
                name=""
                id=""
                className={cn(
                  `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                )}
              />
            </div>
            <div>
              <Button
                className={cn(
                  `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[50px] font-[600] md:w-fit w-full`
                )}
              >
                Find now
              </Button>
            </div>
          </div>
        </div>
        <div className="container md:w-[1200px] mx-auto flex pb-[50px] z-10 flex-col">
          <h1
            className={cn(
              `${playfair.className} text-[15px] md:text-[30px] font-[900] py-8`
            )}
          >
            Showing 1-6 results out of 6 results.
          </h1>
          <div className="w-full flex gap-5 flex-col md:flex-row">
            <div className="w-full gap-y-8 flex flex-col">
              <div className="w-full boxShadow bg-[white] flex px-5 py-6 gap-8  rounded-[8px]  flex-col md:flex-row">
                <div className="w-full md:w-[150px] h-[150px] rounded-[8px] overflow-hidden">
                  <Image
                    src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
                    width={200}
                    height={200}
                    alt="services"
                    className="w-full bg-cover h-[150px]"
                  />
                </div>
                <div>
                  <h1
                    className={cn(
                      `${playfair.className} text-[20px] md:text-[30px] font-[900]`
                    )}
                  >
                    Vancouver Red City Land
                  </h1>
                  <div className={cn(`${work_sans.className} py-2`)}>
                    <span
                      className={cn(
                        `${playfair.className} text-sm md:text-[16px] font-[600]`
                      )}
                    >
                      N50,000
                    </span>
                    <span className="text-sm font-[600]"> /per person</span>
                  </div>
                  <p
                    className={cn(
                      `${work_sans.className} pb-3 text-sm md:text-[16px]`
                    )}
                  >
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                  <Button
                    variant="outline"
                    className={cn(
                      `${work_sans.className} hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] hover:text-white transition-all delay-75 rounded-[2px]`
                    )}
                  >
                    See Details
                  </Button>
                </div>
              </div>
              <div className="w-full boxShadow bg-[white] flex px-5 py-6 gap-8  rounded-[8px] flex-col md:flex-row">
                <div className="w-full md:w-[150px] h-[150px] rounded-[8px] overflow-hidden">
                  <Image
                    src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
                    width={200}
                    height={200}
                    alt="services"
                    className="w-full bg-cover h-[150px]"
                  />
                </div>
                <div>
                  <h1
                    className={cn(
                      `${playfair.className} text-[15px] md:text-[30px] font-[900]`
                    )}
                  >
                    Miami Red City Land
                  </h1>
                  <div className={cn(`${work_sans.className} py-2`)}>
                    <span
                      className={cn(
                        `${playfair.className} text-sm md:text-[16px] font-[600]`
                      )}
                    >
                      N50,000
                    </span>
                    <span className="text-sm font-[600]"> /per person</span>
                  </div>
                  <p
                    className={cn(
                      `${work_sans.className} pb-3 text-sm md:text-[16px]`
                    )}
                  >
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                  <Button
                    variant="outline"
                    className={cn(
                      `${work_sans.className} hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] hover:text-white transition-all delay-75 rounded-[2px]`
                    )}
                  >
                    See Details
                  </Button>
                </div>
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
      </div>
    </>
  );
};

export default ToursPage;
