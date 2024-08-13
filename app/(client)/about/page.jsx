"use client";
import { playfair, work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import WhyUs from "../_components/whyUs";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <section className="flex w-full flex-col">
        <div className="w-full bg-about-us-bg h-[125px] md:h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div className={cn(`${work_sans.className}  z-10`)}>
            <h1
              className={cn(
                `${work_sans.className} text-[20px]  md:text-[40px] text-white leading-[1.1]`
              )}
            >
              About us.
            </h1>
            <p
              className={cn(
                `${work_sans.className} text-sm md:text-[40px] text-white`
              )}
            >
              learn more about us.
            </p>
          </div>
        </div>

        <div
          className={cn(
            `${work_sans.className} container mx-auto md:w-[1000px] py-[40px] md:py-[80px] text-sm leading-loose gap-y-3 flex flex-col`
          )}
        >
          <p>
            <b>Fame Royal Travels</b> is a premier travel and tour company in
            Nigeria, renowned for its prominent status in the travel and tourism
            sector. Founded on 16th November 2012, we prioritize both individual
            and corporate travel needs.
          </p>
          <p className={cn(`${work_sans.className} text-[16px] font-[600]`)}>
            We operate with unwavering commitment to: professionalism,integrity,
            deligence and transparency.
          </p>
          <p>
            Our goal is to furnish our clients with top-tier services, ensuring
            an exceptional travel experience through quality offerings and a
            diverse range of travel services.
          </p>
          <p>
            At Fame Royal Travel and Multi-Services Ltd, we are distinguished
            for our agility and responsiveness in promptly addressing the
            diverse needs of our client. Whether you require assistance with
            corporate travel arrangements, holiday planning, visa consultations,
            air ticketing, hotel reservations, organizing corporate events,
            tailoring individual or family programs, or arranging transportation
            services, our dedicated team stands ready to ensure your needs are
            met with utmost precision and efficiency. Our unwavering dedication
            extends to ensuring that your journey is both comfortable and
            stress-free while abroad, and we remain at your disposal to address
            any concerns or requirements that may arise during your travels.
          </p>
          <p>
            Rest assured that when you choose Fame Royal Travel and
            Multi-Services Ltd, you are entrusting your travel needs to a team
            of professionals dedicated to delivering exceptional service and
            creating memorable experiences for each and every client. We look
            forward to the opportunity to serve you and make your travel dreams
            a reality.
          </p>
        </div>
      </section>
      <section className="w-full md:pb-10">
        <div className="container w-full md:w-[1100px] mx-auto h-fit pb-10 text-center">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="p-5 md:p-10 bg-red-200 h-fit text-center flex flex-col justify-center w-full items-center space-y-5 rounded-[5px]">
              <h1
                className={cn(
                  `${playfair.className} font-[900] text-[15px] md:text-[20px] capitalize text-center mb-2`
                )}
              >
                Our Vision
              </h1>

              <p
                className={cn(
                  `${work_sans.className} text-[14px] text-justify md:text-left leading-[1.25] md:leading-loose `
                )}
              >
                <b>REDEFINING THE WAY YOU SEE THE WORLD;</b>At Fame royal
                travels and multiservices limited , our vision is to redefine
                the way you see the world. We envision a future where travel
                transcends boundaries, fosters understanding, and enriches lives
                in the profound ways. Through innovation, sustainability, and a
                commitment to excellence, we aim to inspire a new generation of
                travelers to explore, connect, and make a positive impact on the
                planet. We also believe in transformative power of cultural
                exchange. Our vision is to create connections between people of
                different backgrounds, cultures, and traditions through
                immersive experiences, authentic encounters, and respectful
                engagements.
              </p>
            </div>
            <div className="p-5 md:p-10 bg-fuchsia-200 h-fit text-center flex flex-col justify-center w-full items-center space-y-5  rounded-[5px]">
              <h1
                className={cn(
                  `${playfair.className} font-[900] text-[15px] md:text-[20px] capitalize text-center mb-2`
                )}
              >
                Our mission.
              </h1>
              <p
                className={cn(
                  `${work_sans.className} text-[14px] text-justify md:text-left leading-[1.25] md:leading-loose`
                )}
              >
                Our mission at Fame royal travels and multiservice is to elevate
                travel experiences, empower explorations, create connections,
                promoting sustainability, fostering innovations, delivering
                exceptional services, to facilitate travel experiences. customer
                satisfaction is paramount, our mission is to exceed expectations
                at every turn, providing personalized service, attention to
                detail, and round the clock support to ensure our travelers have
                a seamless and stress-free experience from start to finish.
                Whether is arranging last minute itinerary, assisting with visa
                applications, or simply offering insider tips and
                recommendations, we are always here for our customers, every
                step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhyUs />
      <section className="w-full bg-[white] z-10">
        <div className="container mx-auto flex py-[40px] md:py-[80px] md:w-[1200px] flex-col">
          <div className="flex justify-center">
            <h2
              className={cn(
                `${playfair.className} font-[900] text-[20px] md:text-[50px] pb-10`
              )}
            >
              Our Team
            </h2>
          </div>
          <div className="grid w-full md:grid-cols-3 grid-cols-1 gap-5 z-10">
            <div className="boxShadow  cursor-pointer teamMember rounded-[5px] h-fit relative">
              <div className="w-full h-[300px] overflow-hidden">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/team-1.jpg"
                  width={300}
                  height={300}
                  alt="Our Team"
                  className="w-full bg-cover h-[300px]"
                />
              </div>

              <div className="flex flex-col gap-y-1 justify-center text-center ">
                <div className="flex flex-col justify-center lower-content">
                  <h1
                    className={cn(
                      `${playfair.className} text-sm md:text-[20px] font-[900]`
                    )}
                  >
                    Team member name
                  </h1>
                  <p
                    className={cn(
                      `${work_sans.className} text-sm md:text-[16px] font-[600]`
                    )}
                  >
                    Chairman
                  </p>
                </div>
                <div className="social-links flex items-center gap-2 justify-center text-center ">
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiFacebook className="text-[rgb(0,0,255)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiInstagram className="text-[rgb(0,128,0)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiTwitter className="text-red-700" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="boxShadow  cursor-pointer teamMember rounded-[5px] h-fit relative">
              <div className="w-full h-[300px] overflow-hidden">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/team-1.jpg"
                  width={300}
                  height={300}
                  alt="Our Team"
                  className="w-full bg-cover h-[300px]"
                />
              </div>

              <div className="flex flex-col gap-y-1 justify-center text-center ">
                <div className="flex flex-col justify-center lower-content">
                  <h1
                    className={cn(
                      `${playfair.className} text-[20px] font-[900]`
                    )}
                  >
                    C.E.O Name
                  </h1>
                  <p
                    className={cn(
                      `${work_sans.className} text-[16px] font-[600]`
                    )}
                  >
                    Director
                  </p>
                </div>
                <div className="social-links flex items-center gap-2 justify-center text-center ">
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiFacebook className="text-[rgb(0,0,255)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiInstagram className="text-[rgb(0,128,0)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiTwitter className="text-red-700" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="boxShadow  cursor-pointer teamMember rounded-[5px] h-fit relative">
              <div className="w-full h-[300px] overflow-hidden">
                <Image
                  src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/team-1.jpg"
                  width={300}
                  height={300}
                  alt="Our Team"
                  className="w-full bg-cover h-[300px]"
                />
              </div>

              <div className="flex flex-col gap-y-1 justify-center text-center ">
                <div className="flex flex-col justify-center lower-content">
                  <h1
                    className={cn(
                      `${playfair.className} text-[20px] font-[900]`
                    )}
                  >
                    C.E.O Name
                  </h1>
                  <p
                    className={cn(
                      `${work_sans.className} text-[16px] font-[600]`
                    )}
                  >
                    C.E.O
                  </p>
                </div>
                <div className="social-links flex items-center gap-2 justify-center text-center ">
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiFacebook className="text-[rgb(0,0,255)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiInstagram className="text-[rgb(0,128,0)]" />
                  </Link>
                  <Link
                    href="/"
                    className="bg-[rgba(0,0,0,0.2)] p-2 rounded-full"
                  >
                    <FiTwitter className="text-red-700" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
