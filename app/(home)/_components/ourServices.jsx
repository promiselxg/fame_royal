import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="flex">
        <div className="container mx-auto flex justify-center w-[1200px] gap-y-3  flex-col py-[50px]">
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
            Based on our wide network of professional partners across the world,
            vast experience, highly trained staff with deep knowledge and high
            level of expertise in educational tourism, we organize interesting
            tour package for different global destinations in all the six
            continents.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-5 my-8">
            <div className=" gap-y-2 flex flex-col">
              <Image
                src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
                width={200}
                height={200}
                alt="services"
                className="w-full bg-cover h-[150px]"
              />
              <h2
                className={cn(
                  `${work_sans.className} text-[17px] font-[600] uppercase text-[green]`
                )}
              >
                Holiday Packages
              </h2>
              <p className={cn(`${work_sans.className} text-sm text-left`)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                nobis a, repudiandae iusto alias atque aperiam veniam modi
                perspiciatis doloremque.
              </p>
            </div>
            <div className=" gap-y-2 flex flex-col">
              <Image
                src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
                width={200}
                height={200}
                alt="services"
                className="w-full bg-cover h-[150px]"
              />
              <h2
                className={cn(
                  `${work_sans.className} text-[17px] font-[600] uppercase text-[green]`
                )}
              >
                Flight Reservation
              </h2>
              <p className={cn(`${work_sans.className} text-sm text-left`)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                nobis a, repudiandae iusto alias atque aperiam veniam modi
                perspiciatis doloremque.
              </p>
            </div>
            <div className=" gap-y-2 flex flex-col">
              <Image
                src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
                width={200}
                height={200}
                alt="services"
                className="w-full bg-cover h-[150px]"
              />
              <h2
                className={cn(
                  `${work_sans.className} text-[17px] font-[600] uppercase text-[green]`
                )}
              >
                Hotel Reservation
              </h2>
              <p className={cn(`${work_sans.className} text-sm text-left`)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                nobis a, repudiandae iusto alias atque aperiam veniam modi
                perspiciatis doloremque.
              </p>
            </div>
            <div className=" gap-y-2 flex flex-col">
              <Image
                src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
                width={200}
                height={200}
                alt="services"
                className="w-full bg-cover h-[150px]"
              />
              <h2
                className={cn(
                  `${work_sans.className} text-[17px] font-[600] uppercase text-[green]`
                )}
              >
                Vacation Packages
              </h2>
              <p className={cn(`${work_sans.className} text-sm text-left`)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                nobis a, repudiandae iusto alias atque aperiam veniam modi
                perspiciatis doloremque.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
