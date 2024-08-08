import { work_sans } from "@/lib/fonts";

import { cn } from "@/lib/utils";
import Image from "next/image";

const Service = () => {
  return (
    <>
      <section className="flex w-full flex-col">
        <div className="w-full bg-about-us-bg h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div className={cn(`${work_sans.className}  z-10 w-[950px]`)}>
            <h1
              className={cn(
                `${work_sans.className} text-[40px] text-white uppercase  leading-[1.1]`
              )}
            >
              Fame Royal Travels Services
            </h1>
            <p className={cn(`${work_sans.className} text-[20px] text-white`)}>
              Allow us to be your Travel Agent.
            </p>
          </div>
        </div>
        <div className="container mx-auto w-[1200px]">
          <div className="grid w-full grid-cols-3 py-[80px] gap-5 gap-y-8">
            <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex items-center p-5 gap-5">
              <Image
                src="https://travosy.vercel.app/static/media/cta.2f2bffee5c630312a8c7.jpg"
                width={200}
                height={200}
                alt="services 1"
                className="w-[100px] bg-cover h-[100px] rounded-full"
              />
              <div>
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Visa Application
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur deserunt non, ut inventore minus labore. Aliquam
                  iure dignissimos atque debitis!
                </p>
              </div>
            </div>
            <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex items-center p-5 gap-5">
              <Image
                src="https://travosy.vercel.app/static/media/cta.2f2bffee5c630312a8c7.jpg"
                width={200}
                height={200}
                alt="services 1"
                className="w-[100px] bg-cover h-[100px] rounded-full"
              />
              <div>
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Flight Reservation
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur deserunt non, ut inventore minus labore. Aliquam
                  iure dignissimos atque debitis!
                </p>
              </div>
            </div>
            <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex items-center p-5 gap-5">
              <Image
                src="https://travosy.vercel.app/static/media/cta.2f2bffee5c630312a8c7.jpg"
                width={200}
                height={200}
                alt="services 1"
                className="w-[100px] bg-cover h-[100px] rounded-full"
              />
              <div>
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Hotel Reservation
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur deserunt non, ut inventore minus labore. Aliquam
                  iure dignissimos atque debitis!
                </p>
              </div>
            </div>
            <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex items-center p-5 gap-5">
              <Image
                src="https://travosy.vercel.app/static/media/cta.2f2bffee5c630312a8c7.jpg"
                width={200}
                height={200}
                alt="services 1"
                className="w-[100px] bg-cover h-[100px] rounded-full"
              />
              <div>
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Vacation Packages
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur deserunt non, ut inventore minus labore. Aliquam
                  iure dignissimos atque debitis!
                </p>
              </div>
            </div>
            <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex items-center p-5 gap-5">
              <Image
                src="https://travosy.vercel.app/static/media/cta.2f2bffee5c630312a8c7.jpg"
                width={200}
                height={200}
                alt="services 1"
                className="w-[100px] bg-cover h-[100px] rounded-full"
              />
              <div>
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Hotel Pickup
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur deserunt non, ut inventore minus labore. Aliquam
                  iure dignissimos atque debitis!
                </p>
              </div>
            </div>
            <div className="bg-[whitesmoke] boxShadow rounded-[5px] cursor-pointer flex items-center p-5 gap-5">
              <Image
                src="https://travosy.vercel.app/static/media/cta.2f2bffee5c630312a8c7.jpg"
                width={200}
                height={200}
                alt="services 1"
                className="w-[100px] bg-cover h-[100px] rounded-full"
              />
              <div>
                <h1
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600] leading-relaxed`
                  )}
                >
                  Hotel Reservation
                </h1>
                <p
                  className={cn(
                    `${work_sans.className} text-sm text-[rgba(0,0,0,0.7)] text-wrap`
                  )}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur deserunt non, ut inventore minus labore. Aliquam
                  iure dignissimos atque debitis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
