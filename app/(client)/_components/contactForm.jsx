"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

const ContactForm = ({ label, ...className }) => {
  return (
    <>
      <div
        className={cn(
          `border border-[rgba(0,0,0,0.1)] p-5 rounded-[5px] boxShadow ${
            className.className ? className.className : "md:w-1/2 "
          }`
        )}
      >
        <h1 className={cn(`${playfair.className} text-[30px] font-[900] pb-5`)}>
          {label}
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
    </>
  );
};

export default ContactForm;
