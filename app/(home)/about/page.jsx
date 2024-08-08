import { work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import WhyUs from "../_components/whyUs";

const About = () => {
  return (
    <>
      <section className="flex w-full flex-col">
        <div className="w-full bg-about-us-bg h-[250px] bg-no-repeat bg-cover bg-fixed relative flex justify-center items-center">
          <div className="absolute top-0 bottom-0 bg-[rgba(0,0,0,0.7)] w-full"></div>
          <div className={cn(`${work_sans.className}  z-10`)}>
            <h1
              className={cn(
                `${work_sans.className} text-[40px] text-white uppercase  leading-[1.1]`
              )}
            >
              About us.
            </h1>
            <p className={cn(`${work_sans.className} text-[40px] text-white`)}>
              learn more about us.
            </p>
          </div>
        </div>

        <div className="container mx-auto w-[1000px] py-[80px] paragraph">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reprehenderit voluptatem in. Earum omnis maxime, inventore dolorum
            sunt quidem veritatis optio harum, rem beatae qui culpa!
            Voluptatibus, sed. Dignissimos, tenetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reprehenderit voluptatem in. Earum omnis maxime, inventore dolorum
            sunt quidem veritatis optio harum, rem beatae qui culpa!
            Voluptatibus, sed. Dignissimos, tenetur?
          </p>
        </div>
      </section>
      <WhyUs />
    </>
  );
};

export default About;
