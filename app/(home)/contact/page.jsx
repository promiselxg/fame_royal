import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FiMail, FiMap, FiMapPin, FiPhone } from "react-icons/fi";

const ContactUs = () => {
  return (
    <>
      <section className="flex w-full flex-col">
        <div className="w-full bg-about-us-bg h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div className={cn(`${work_sans.className}  z-10`)}>
            <h1
              className={cn(
                `${work_sans.className} text-[40px] text-white md:uppercase  leading-[1.1]`
              )}
            >
              Contact us.
            </h1>
            {/* <p className={cn(`${work_sans.className} text-[40px] text-white`)}>
              learn more about us.
            </p> */}
          </div>
        </div>

        <div className="container mx-auto md:w-[1000px] py-[80px] paragraph z-10 flex flex-col  gap-y-10">
          <div className="flex items-center justify-center h-fit gap-10 md:flex-row flex-col">
            <div className="md:w-1/2 ">
              <Image
                src="/img/about.svg"
                width={500}
                height={500}
                alt="contact us"
              />
            </div>
            <div className="border border-[rgba(0,0,0,0.1)] p-5 md:w-1/2 rounded-[5px] boxShadow">
              <h1
                className={cn(
                  `${playfair.className} text-[30px] font-[900] pb-5`
                )}
              >
                Get in touch!
              </h1>

              <div className="flex md:gap-5 flex-col md:flex-row">
                <div>
                  <Label
                    htmlFor="firstname"
                    className={cn(`${work_sans.className} text-sm font-[400]`)}
                  >
                    First Name
                  </Label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    className={cn(
                      `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                    )}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lastname"
                    className={cn(`${work_sans.className} text-sm font-[400]`)}
                  >
                    Last Name
                  </Label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className={cn(
                      `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                    )}
                  />
                </div>
              </div>
              <div className="flex w-full flex-col my-2">
                <Label
                  htmlFor="email"
                  className={cn(`${work_sans.className} text-sm font-[400]`)}
                >
                  Email Address
                </Label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className={cn(
                    `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                  )}
                />
              </div>
              <div className="flex w-full flex-col my-2">
                <Label
                  htmlFor="phone"
                  className={cn(`${work_sans.className} text-sm font-[400]`)}
                >
                  Phone Number
                </Label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  className={cn(
                    `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                  )}
                />
              </div>
              <div className="flex w-full flex-col my-2">
                <Label
                  htmlFor="email"
                  className={cn(`${work_sans.className} text-sm font-[400]`)}
                >
                  Email Address
                </Label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className={cn(
                    `${work_sans.className} text-sm border p-5 h-[50px] border-[rgba(0,0,0,0.2)] outline-none w-full`
                  )}
                />
              </div>
              <div className="flex w-full flex-col my-2">
                <Label
                  htmlFor="message"
                  className={cn(`${work_sans.className} text-sm font-[400]`)}
                >
                  Your Message
                </Label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className={cn(
                    `${work_sans.className} text-sm border p-5  border-[rgba(0,0,0,0.2)] outline-none w-full`
                  )}
                ></textarea>
              </div>
              <Button
                className={cn(
                  `${work_sans.className} w-full btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px]`
                )}
              >
                Contact us
              </Button>
            </div>
          </div>
          <div className="flex w-full py-10">
            <div className="grid md:grid-cols-3 gap-5 grid-cols-1 ">
              <div className="flex flex-col justify-center items-center  gap-y-4 text-center">
                <span className="boxShadow p-5 rounded-[5px]">
                  <FiMapPin />
                </span>
                <span
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600]`
                  )}
                >
                  Office Address
                </span>
                <p
                  className={cn(
                    `${work_sans.className} text-[16px] font-[600]`
                  )}
                >
                  No 10 Sunday Adewusi street Guzape , F.C.T Abuja – Nigeria
                </p>
              </div>
              <div className="flex flex-col justify-center items-center  gap-y-4">
                <span className="boxShadow p-5 rounded-[5px]">
                  <FiPhone />
                </span>
                <span
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600]`
                  )}
                >
                  Phone
                </span>
                <p>+234 0802-378-8647</p>
              </div>
              <div className="flex flex-col justify-center items-center  gap-y-4">
                <span className="boxShadow p-5 rounded-[5px]">
                  <FiMail />
                </span>
                <span
                  className={cn(
                    `${work_sans.className} text-[20px] font-[600]`
                  )}
                >
                  Email address
                </span>
                <p>enquiry@fameroyal.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
