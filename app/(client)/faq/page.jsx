"use client";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import ContactForm from "../_components/contactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useFetch from "@/hooks/useFetch";
import SkeletonLoader from "../_components/Loader";

const FAQ = () => {
  const { loading, data } = useFetch("/faq");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section className="w-full flex flex-col z-10">
        <div className="w-full bg-about-us-bg h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div className={cn(`${work_sans.className}  z-10`)}>
            <h1
              className={cn(
                `${work_sans.className} text-[40px] text-white leading-[1.1]`
              )}
            >
              FAQ
            </h1>
          </div>
        </div>
        <div className="container mx-auto flex gap-10 py-[80px] z-10 md:w-[1200px] items-center flex-col md:flex-row">
          <div className="md:w-[60%] h-fit">
            <h2
              className={cn(
                `${playfair.className} text-[30px] md:text-[50px] font-[900] leading-[1.1]`
              )}
            >
              Frequently Asked <br />
              Question
            </h2>
            <div className="md:py-10">
              <Accordion type="single" collapsible className="w-full">
                {loading ? (
                  <SkeletonLoader />
                ) : (
                  data?.map((faq) => (
                    <AccordionItem value={faq.id} key={faq.id}>
                      <AccordionTrigger
                        className={cn(
                          `${work_sans.className} md:text-[20px] font-[600] text-left leading-[1.1]`
                        )}
                      >
                        {faq?.question}
                      </AccordionTrigger>
                      <AccordionContent>{faq?.answer}</AccordionContent>
                    </AccordionItem>
                  ))
                )}
              </Accordion>
            </div>
          </div>
          <ContactForm label="Get in touch!" className="md:w-[40%] h-fit" />
        </div>
      </section>
    </>
  );
};

export default FAQ;
