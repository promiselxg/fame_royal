import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="flex">
        <div className="container mx-auto flex justify-center gap-y-3  flex-col py-[50px]">
          <h2
            className={cn(
              `${playfair.className} font-[900] text-[25px] md:text-[50px] md:justify-center flex leading-tight`
            )}
          >
            Our Services
          </h2>
          <p
            className={cn(
              `${work_sans.className} text-sm md:justify-center flex md:text-center max-w-[600px] mx-auto`
            )}
          >
            At Fame Royal Travels and Multi-services Limited, we offer an
            extensive array of services designed to cater to all aspects of our
            clients&apos; needs.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5 my-8">
            <div className=" gap-y-2 flex flex-col items-center">
              <Image
                src="/img/hotel_rservation.jpeg"
                width={200}
                height={200}
                alt="Hotel Reservations"
                className="w-full bg-cover h-[150px]"
              />
              <h2
                className={cn(
                  `${work_sans.className} text-[17px] font-[600] text-[green]`
                )}
              >
                Hotel Reservations
              </h2>
              <p
                className={cn(
                  `${work_sans.className} text-sm text-center text-[rgba(0,0,0,0.8)]`
                )}
              >
                With an extensive network of over 200,000 hotels spanning the
                globe, our esteemed client can be rest assured of experiencing
                unparalleled relaxation and comfort.
              </p>
            </div>
            <div className=" gap-y-2 flex flex-col items-center">
              <Image
                src="/img/flight_booking.jpeg"
                width={200}
                height={200}
                alt="services"
                className="w-full bg-cover h-[150px]"
              />
              <h2
                className={cn(
                  `${work_sans.className} text-[17px] font-[600]  text-[green]`
                )}
              >
                Flight Booking
              </h2>
              <p
                className={cn(
                  `${work_sans.className} text-sm text-center text-[rgba(0,0,0,0.8)]`
                )}
              >
                With our comprehensive flight booking system, we excel in
                securing both domestic and international flights at competitive
                rates.
              </p>
            </div>
            <div className=" gap-y-2 flex flex-col items-center">
              <Image
                src="/img/visa.jpeg"
                width={200}
                height={200}
                alt="Visa facilitation and support services"
                className="w-full bg-cover h-[150px]"
              />
              <h2
                className={cn(
                  `${work_sans.className} text-[17px] font-[600]  text-[green]`
                )}
              >
                Visa facilitation and support services
              </h2>
              <p
                className={cn(
                  `${work_sans.className} text-sm text-center text-[rgba(0,0,0,0.8)]`
                )}
              >
                We specialize in facilitating travel to a diverse range of
                destinations globally, equipping individuals with all necessary
                legal documentation and invitation letters to streamline
                procedures and enhance visa approval prospects.
              </p>
            </div>
            <div className=" gap-y-2 flex flex-col items-center">
              <Image
                src="/img/travel.jpg"
                width={200}
                height={200}
                alt="services"
                className="w-full bg-cover h-[150px]"
              />
              <h2
                className={cn(
                  `${work_sans.className} text-[17px] font-[600]  text-[green]`
                )}
              >
                Travel excursion bundle
              </h2>
              <p
                className={cn(
                  `${work_sans.className} text-sm text-center text-[rgba(0,0,0,0.8)]`
                )}
              >
                Our meticulously curates travel excursion bundles are brimming
                with opportunities to discover captivating locales and engage in
                exhilarating pursuits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
