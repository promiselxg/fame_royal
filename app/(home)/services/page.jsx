"use client";

import React, { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Service = () => {
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
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="10px">
              <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex  p-5 gap-3 flex-col h-fit">
                <Image
                  src="/img/hotel_rservation.jpeg"
                  width={200}
                  height={200}
                  alt="services 1"
                  className="w-[100px] bg-cover h-[100px] rounded-full"
                />
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Hotels Reservation
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  With an extensive network of over 200,000 hotels spanning the
                  globe, our esteemed client can be rest assured of experiencing
                  unparalleled relaxation and comfort. Our reservation services
                  cater to a diverse range of preferences and needs, offering
                  customizable packages tailored to suit individual travelers,
                  couples seeking romantic getaways, and groups embarking on
                  business trips and collective adventures. Whether you crave
                  solitude in a serene retreat, seek intimacy in a romantic
                  setting, or prefer the camaraderie of group travel, our vast
                  selection of accommodations ensures that every guest finds
                  their perfect oasis of tranquility. At Fame Royal Travels and
                  Multi-services Limited, we offer an extensive array of
                  services designed to cater to all aspects of our clients&apos;
                  needs
                </p>
              </div>
              <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex  p-5 gap-3 flex-col h-fit">
                <Image
                  src="/img/flight_booking.jpeg"
                  width={200}
                  height={200}
                  alt="Flight Booking"
                  className="w-[100px] bg-cover h-[100px] rounded-full"
                />
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Flight Booking
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  With our comprehensive flight booking system, we excel in
                  securing both domestic and international flights at
                  competitive rates. Additionally, we provide personalized
                  travel advisory services and meticulously craft travel
                  itineraries tailored to our clients&apos; interests.
                </p>
              </div>
              <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex  p-5 gap-3 flex-col h-fit">
                <Image
                  src="/img/visa.jpeg"
                  width={200}
                  height={200}
                  alt="Visa facilitation and support services"
                  className="w-[100px] bg-cover h-[100px] rounded-full"
                />
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Visa facilitation and support services
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  Our dedicated team provides expert counsel and assistance,
                  guiding clients through the intricate visa application
                  process. We specialize in facilitating travel to a diverse
                  range of destinations globally, equipping individuals with all
                  necessary legal documentation and invitation letters to
                  streamline procedures and enhance visa approval prospects.
                  Whether for educational pursuits, leisurely exploration,
                  tourism endeavors, or business ventures, our services ensure a
                  seamless and hassle-free experience for our valued clients.
                </p>
              </div>
              <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex  p-5 gap-3 flex-col h-fit">
                <Image
                  src="/img/travel.jpg"
                  width={200}
                  height={200}
                  alt="services 1"
                  className="w-[100px] bg-cover h-[100px] rounded-full"
                />
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Travel excursion bundle
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  Our meticulously curates travel excursion bundles are brimming
                  with opportunities to discover captivating locales and engage
                  in exhilarating pursuits. Each package encompasses an array of
                  enticing features, including but not limited to visa
                  procurement, round-trip airfare arrangements, immersive city
                  tours, and visits to prominent local attractions. Delve into
                  the richness of cultural heritage, embark on thrilling
                  adventures, and indulge in unforgettable experiences as part
                  of our comprehensive travel excursion offerings.
                </p>
              </div>
              <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex  p-5 gap-3 flex-col h-fit">
                <Image
                  src="/img/travel_insurance.jpeg"
                  width={200}
                  height={200}
                  alt="Travel Insurance"
                  className="w-[100px] bg-cover h-[100px] rounded-full"
                />
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Travel Insurance
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  We provide comprehensive travel protection solutions tailored
                  to meet the needs of both corporate and leisure travelers. Our
                  meticulously crafted insurance plans offer extensive coverage
                  for a wide range of contingencies, including medical
                  emergencies during trips, trip cancellations, delays, medical
                  evacuations, and loss, damage, or theft of luggage. Depending
                  on the specific plan selected and the timing of purchase,
                  travelers can enjoy peace of mind knowing that they are
                  safeguarded against unforeseen circumstances that may arise
                  before or during their journeys.
                </p>
              </div>
            </Masonry>
          </ResponsiveMasonry>
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
            <div className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit">
              <Image
                src="/img/Flag_of_Spain.png"
                width={50}
                height={50}
                alt="country"
                className="w-[50px] h-[30px] bg-contain"
              />
              <h1
                className={cn(
                  `${work_sans.className} text-[16px] font-[600] leading-[1.1]`
                )}
              >
                Spain Visa
              </h1>
            </div>
            <div className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit">
              <Image
                src="/img/flag-Singapore.webp"
                width={50}
                height={50}
                alt="country"
                className="w-[50px] h-[30px] bg-contain"
              />
              <h1
                className={cn(
                  `${work_sans.className} text-[16px] font-[600] leading-[1.1]`
                )}
              >
                Singapore Visa
              </h1>
            </div>
            <div className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit">
              <Image
                src="/img/vietnam.jpeg"
                width={50}
                height={50}
                alt="country"
                className="w-[50px] h-[30px] bg-contain"
              />
              <h1
                className={cn(
                  `${work_sans.className} text-[16px] font-[600] leading-[1.1]`
                )}
              >
                Vietnam Visa
              </h1>
            </div>
            <div className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit">
              <Image
                src="/img/vietnam.jpeg"
                width={50}
                height={50}
                alt="country"
                className="w-[50px] h-[30px] bg-contain"
              />
              <h1
                className={cn(
                  `${work_sans.className} text-[16px] font-[600] leading-[1.1]`
                )}
              >
                Vietnam Visa Approval
              </h1>
            </div>
            <div className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit">
              <Image
                src="/img/dubia.jpeg"
                width={50}
                height={50}
                alt="Dubai"
                className="w-[50px] h-[30px] bg-contain"
              />
              <h1
                className={cn(
                  `${work_sans.className} text-[16px] font-[600] leading-[1.1] leading-[1.1]`
                )}
              >
                Dubai Visa
              </h1>
            </div>
            <div className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit">
              <Image
                src="/img/china.png"
                width={50}
                height={50}
                alt="China"
                className="w-[50px] h-[30px] bg-contain"
              />
              <h1
                className={cn(
                  `${work_sans.className} text-[16px] font-[600] leading-[1.1] leading-[1.1]`
                )}
              >
                China Visa
              </h1>
            </div>
            <div className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit">
              <Image
                src="/img/uk.png"
                width={50}
                height={50}
                alt="uk"
                className="w-[50px] h-[30px] bg-contain"
              />
              <h1
                className={cn(
                  `${work_sans.className} text-[16px] font-[600] leading-[1.1]`
                )}
              >
                UK Tourist Visa File Process
              </h1>
            </div>
            <div className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit">
              <Image
                src="/img/canada.png"
                width={50}
                height={50}
                alt="canada"
                className="w-[50px] h-[30px] bg-contain"
              />
              <h1
                className={cn(
                  `${work_sans.className} text-[16px] font-[600] leading-[1.1]`
                )}
              >
                Canada Tourist Visa
              </h1>
            </div>
            <div className="boxShadow  flex gap-3 items-center p-3 rounded-[5px] cursor-pointer h-fit">
              <Image
                src="/img/kenya.png"
                width={50}
                height={50}
                alt="Kenya"
                className="w-[50px] h-[30px] bg-contain"
              />
              <h1
                className={cn(
                  `${work_sans.className} text-[16px] font-[600] leading-[1.1]`
                )}
              >
                Kenya Visa
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
