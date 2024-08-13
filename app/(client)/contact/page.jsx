"use client";
import { work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import ContactForm from "../_components/contactForm";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section className="flex w-full flex-col">
        <div className="w-full bg-about-us-bg h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div className={cn(`${work_sans.className}  z-10`)}>
            <h1
              className={cn(
                `${work_sans.className} text-[40px] text-white leading-[1.1]`
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
            <ContactForm label="Get in touch!" />
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
