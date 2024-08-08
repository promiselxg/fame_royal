import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiMapPin } from "react-icons/fi";
import Hero from "./(home)/_components/header/hero";
import WhyUs from "./(home)/_components/whyUs";
import Services from "./(home)/_components/ourServices";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <Hero />
      <WhyUs />
      <section className="md:h-[calc(100vh-200px)] flex items-center">
        <div className="container mx-auto flex w-full md:w-[1000px] gap-8 flex-col md:flex-row">
          <div className="hidden w-1/3 bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center h-fit md:mt-[50px]">
            <Image
              src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/about-1.jpg"
              width={300}
              height={300}
              alt="about us"
              className="bg-cover"
            />
          </div>
          <div className="md:w-1/2 md:ml-[50px] flex flex-col justify-center gap-y-2  pt-[50px] md:pt-0">
            <h2
              className={cn(
                `${work_sans.className} text-[16px] font-[600] text-[--light-yellow-text]`
              )}
            >
              About Royal Fames
            </h2>
            <h2
              className={cn(
                `${playfair.className} text-[20px] md:text-[45px] font-[900] leading-[1.2]`
              )}
            >
              Nigeria&apos;s No 1 Travel Agency Company Since 2008.
            </h2>
            <p
              className={cn(
                `${work_sans.className} text-sm md:text-[16px] font-[400] leading-6 text-[rgba(0,0,0,0.9)]`
              )}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              harum molestias ipsa, dolorum autem quia molestiae facere voluptas
              itaque. Repellendus cum illo, quos accusamus quod ipsa ab amet.
              Dicta facere suscipit veritatis quod quisquam pariatur a est
              perferendis, eos excepturi?
            </p>
            <Button
              className={cn(
                `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] w-fit mt-5  `
              )}
            >
              Book a tour
            </Button>
          </div>
        </div>
      </section>
      <Services />
      <section className="flex md:h-[600px] bg-ad-bg bg-no-repeat bg-center bg-cover relative py-[150px] px-0 items-center">
        <div className="deals-section"></div>
        <div className="container mx-auto z-10">
          <div className="max-w-[400px] bg-white p-5 rounded-[5px] boxShadow leading-[1.2] gap-y-2 flex flex-col">
            <h2
              className={cn(
                `${work_sans.className} text-[20px] md:text-[40px] font-[600]`
              )}
            >
              Group Travel to New Zealand
            </h2>
            <p className={cn(`${work_sans.className} text-sm font-[400]`)}>
              Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
              tempor ux incidunt labore dolore magna aliqua Quis ipsum suspen.
              bgbd
            </p>
            <Button
              className={cn(
                `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] w-fit mt-5`
              )}
            >
              See details
            </Button>
          </div>
        </div>
      </section>
      <section className="flex bg-[#f5f6f6] py-[50px] md:py-[100px]">
        <div className="container mx-auto flex  md:w-[1200px] gap-y-3  flex-col">
          <h3
            className={cn(
              `${work_sans.className} font-[500] text-sm md:justify-center flex leading-tight`
            )}
          >
            Tours &amp; Destinations
          </h3>
          <h2
            className={cn(
              `${playfair.className} font-[900] text-[25px] md:text-[50px] md:justify-center flex leading-tight pb-[25px]`
            )}
          >
            Our Tour Packages
          </h2>
          <div className="grid w-full md:grid-cols-3 grid-cols-1 gap-5 z-10">
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
                <div className="w-full flex gap-2 py-2">
                  <span
                    className={cn(
                      `${playfair.className} text-[17px] font-[900]`
                    )}
                  >
                    $150
                  </span>
                  <span>/</span>
                  <span className="text-sm">per person</span>
                </div>
                <div
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
                </div>
                <div className="py-4">
                  <p className={cn(`${work_sans.className} text-[15px]`)}>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className={cn(
                    `${work_sans.className} hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] hover:text-white transition-all delay-75 rounded-[2px]`
                  )}
                >
                  See Details
                </Button>
                <div className="pb-8"></div>
              </div>
            </div>
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
                <div className="w-full flex gap-2 py-2">
                  <span
                    className={cn(
                      `${playfair.className} text-[17px] font-[900]`
                    )}
                  >
                    $150
                  </span>
                  <span>/</span>
                  <span className="text-sm">per person</span>
                </div>
                <div
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
                </div>
                <div className="py-4">
                  <p className={cn(`${work_sans.className} text-[15px]`)}>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className={cn(
                    `${work_sans.className} hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] hover:text-white transition-all delay-75 rounded-[2px]`
                  )}
                >
                  See Details
                </Button>
                <div className="pb-8"></div>
              </div>
            </div>
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
                <div className="w-full flex gap-2 py-2">
                  <span
                    className={cn(
                      `${playfair.className} text-[17px] font-[900]`
                    )}
                  >
                    $150
                  </span>
                  <span>/</span>
                  <span className="text-sm">per person</span>
                </div>
                <div
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
                </div>
                <div className="py-4">
                  <p className={cn(`${work_sans.className} text-[15px]`)}>
                    Lorem ipsum dolor amet consectetur adipiscing sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className={cn(
                    `${work_sans.className} hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px] hover:text-white transition-all delay-75 rounded-[2px]`
                  )}
                >
                  See Details
                </Button>
                <div className="pb-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex relative bg-[rgba(0,0,0,0.8)] md:h-[400px] deals-section overflow-hidden py-[50px] md:py-0">
        <div className="pattern-layer bg-shape-4 bg-no-repeat bg-center bg-cover"></div>
        <div className="container mx-auto z-10 flex flex-col md:justify-center md:items-center">
          <h2
            className={cn(
              `${playfair.className} md:text-[50px] text-white font-[900] leading-tight`
            )}
          >
            Subscribe to our Newsletter
          </h2>
          <p
            className={cn(
              `${work_sans.className} text-sm text-white font-[600]`
            )}
          >
            Sign up our newsletter to get special updates.
          </p>
          <div className="flex w-full max-w-sm items-center gap-4 mt-5 flex-col md:flex-row">
            <Input
              type="email"
              placeholder="Email"
              className="border border-white rounded-[5px] p-5 placeholder:text-white text-white"
            />
            <Button
              className={cn(
                `${work_sans.className} btn-default text-[14px] font-[400] bg-[--light-yellow-text] hover:bg-[--btn-hover] p-5 md:h-[30px] hover:text-white transition-all delay-75 rounded-[2px] w-full md:w-fit`
              )}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="container flex flex-wrap gap-6  justify-center  md:py-[80px] py-[40px]">
          <div className="md:w-[300px] md:min-w-[380px] md:h-[380px] flex flex-col justify-center">
            <h1
              className={cn(
                `${work_sans.className} uppercase text-sm md:text-md font-[500]`
              )}
            >
              Choose your next destination.
            </h1>
            <h2
              className={cn(
                `${playfair.className} font-[900] text-[25px] md:text-[55px] leading-[1.1]`
              )}
            >
              Our <br />
              Popular <br />
              Destinations.
            </h2>
          </div>
          <div className="w-full md:w-[300px] md:min-w-[380px] z-10">
            <Link href="/">
              <div className="w-full bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center h-[365px] relative deals-section zoom-in">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/about-1.jpg"
                  width={300}
                  height={300}
                  alt="about us"
                  className="bg-cover w-full h-[350px]"
                />
                <div className="absolute bottom-5 left-5">
                  <h1
                    className={cn(
                      `${work_sans.className} text-[whitesmoke] font-[600] text-[20px]`
                    )}
                  >
                    Canada
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-[300px] md:min-w-[380px] z-10">
            <Link href="/">
              <div className="w-full bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center h-[365px] relative deals-section zoom-in">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-4.jpg"
                  width={300}
                  height={300}
                  alt="about us"
                  className="bg-cover w-full h-[350px]"
                />
                <div className="absolute bottom-5 left-5">
                  <h1
                    className={cn(
                      `${work_sans.className} text-[whitesmoke] font-[600] text-[20px]`
                    )}
                  >
                    United Kingdom
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-[300px] md:min-w-[380px] z-10">
            <Link href="/">
              <div className="w-full bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center h-[365px] relative deals-section zoom-in">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-3.jpg"
                  width={300}
                  height={300}
                  alt="about us"
                  className="bg-cover w-full h-[350px]"
                />
                <div className="absolute bottom-5 left-5">
                  <h1
                    className={cn(
                      `${work_sans.className} text-[whitesmoke] font-[600] text-[20px]`
                    )}
                  >
                    Ethopia
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-[300px] md:min-w-[380px] z-10">
            <Link href="/">
              <div className="w-full bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center h-[365px] relative deals-section zoom-in">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-2.jpg"
                  width={300}
                  height={300}
                  alt="about us"
                  className="bg-cover w-full h-[350px]"
                />
                <div className="absolute bottom-5 left-5">
                  <h1
                    className={cn(
                      `${work_sans.className} text-[whitesmoke] font-[600] text-[20px]`
                    )}
                  >
                    Italy
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-[300px] md:min-w-[380px] z-10">
            <Link href="/">
              <div className="w-full bg-white p-2 boxShadow rounded-[5px] md:flex flex-col justify-center h-[365px] relative deals-section zoom-in">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/place-1.jpg"
                  width={300}
                  height={300}
                  alt="about us"
                  className="bg-cover w-full h-[350px]"
                />
                <div className="absolute bottom-5 left-5">
                  <h1
                    className={cn(
                      `${work_sans.className} text-[whitesmoke] font-[600] text-[20px] z-10`
                    )}
                  >
                    New York city
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
