import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

const WhyUs = () => {
  return (
    <>
      <section id="#" className="w-full">
        <div className="w-full bg-[#f5f6f6] flex pb-[50px] md:pb-0">
          <div className="container mx-auto flex justify-center flex-col items-center w-[1200px] pt-[40px] md:pt-[80px] md:pb-[100px] gap-y-8">
            <h2
              className={cn(
                `${playfair.className} font-[900] text-[20px] md:text-[50px]`
              )}
            >
              Why You should Travel with us.
            </h2>
            <div className="grid w-full md:grid-cols-4 grid-cols-1 gap-5 ">
              <div className="bg-[white] min-w-[250px]  boxShadow overflow-hidden rounded-[10px]">
                <div className="w-full h-[180px]">
                  <Image
                    src="/img/feature-1.jpg"
                    alt="Tour Guide"
                    width={200}
                    height={200}
                    className="bg-cover w-full h-[180px]"
                  />
                </div>
                <div className="p-5 flex justify-center text-center">
                  <h2
                    className={cn(
                      `${work_sans.className} text-[17px] font-[600] leading-tight`
                    )}
                  >
                    Dedicated Tour Guide
                  </h2>
                </div>
              </div>
              <div className="bg-[white] min-w-[250px]  boxShadow overflow-hidden rounded-[10px]">
                <div className="w-full h-[180px]">
                  <Image
                    src="/img/trusted.jpeg"
                    alt="boy"
                    width={200}
                    height={200}
                    className="bg-cover w-full h-[180px]"
                  />
                </div>
                <div className="p-5 flex justify-center text-center">
                  <h2
                    className={cn(
                      `${work_sans.className} text-[17px] font-[600] leading-tight`
                    )}
                  >
                    100% Trusted Tour Agency
                  </h2>
                </div>
              </div>
              <div className="bg-[white] min-w-[250px]  boxShadow overflow-hidden rounded-[10px]">
                <div className="w-full h-[180px]">
                  <Image
                    src="/img/feature-3.jpg"
                    alt="Travel Experience"
                    width={200}
                    height={200}
                    className="bg-cover w-full h-[180px]"
                  />
                </div>
                <div className="p-5 flex justify-center text-center">
                  <h2
                    className={cn(
                      `${work_sans.className} text-[17px] font-[600] leading-tight`
                    )}
                  >
                    3+ Years of Travel Experience
                  </h2>
                </div>
              </div>
              <div className="bg-[white] min-w-[250px]  boxShadow overflow-hidden rounded-[10px]">
                <div className="w-full h-[180px]">
                  <Image
                    src="/img/happy.jpeg"
                    alt="98% of Our Travelers are Happy"
                    width={200}
                    height={200}
                    className="bg-cover w-full h-[180px]"
                  />
                </div>
                <div className="p-5 flex justify-center text-center">
                  <h2
                    className={cn(
                      `${work_sans.className} text-[17px] font-[600] leading-tight`
                    )}
                  >
                    Travelers Satisfaction
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
