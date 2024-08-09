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
                src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
                width={200}
                height={200}
                alt="services"
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
                unparalleled relaxation and comfort. Our reservation services
                cater to a diverse range of preferences and needs, offering
                customizable packages tailored to suit individual travelers,
                couples seeking romantic getaways, and groups embarking on
                business trips and collective adventures.
              </p>
            </div>
            <div className=" gap-y-2 flex flex-col items-center">
              <Image
                src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
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
                rates. Additionally, we provide personalized travel advisory
                services and meticulously craft travel itineraries tailored to
                our clients&apos; interests.
              </p>
            </div>
            <div className=" gap-y-2 flex flex-col items-center">
              <Image
                src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
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
                Visa facilitation and support services
              </h2>
              <p
                className={cn(
                  `${work_sans.className} text-sm text-center text-[rgba(0,0,0,0.8)]`
                )}
              >
                Our dedicated team provides expert counsel and assistance,
                guiding clients through the intricate visa application process.
                We specialize in facilitating travel to a diverse range of
                destinations globally, equipping individuals with all necessary
                legal documentation and invitation letters to streamline
                procedures and enhance visa approval prospects.
              </p>
            </div>
            <div className=" gap-y-2 flex flex-col items-center">
              <Image
                src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
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
                exhilarating pursuits. Each package encompasses an array of
                enticing features, including but not limited to visa
                procurement, round-trip airfare arrangements, immersive city
                tours, and visits to prominent local attractions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
