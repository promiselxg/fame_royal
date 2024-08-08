import { work_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Hero from "./hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <section>
        {/* <div
          className={cn(
            `${work_sans.className} hidden w-full md:flex bg-[--primary-background] text-[--primary-background-text] font-[600] text-[16px]`
          )}
        >
          <div className="container mx-auto md:w-[1200px] w-full md:min-h-[60px] flex items-center gap-8">
            <span>enquiry@fameroyaltravels.com</span>
            <span>08023788647 | 07065113888 | 08136781136</span>
            <span>Plot 539 Sunday Adewusi Street, Guzape, Abuja, Nigeria </span>
          </div>
        </div> */}
        <header className="flex w-full">
          <div className="conatiner mx-auto min-h-[50px] flex items-center bg-[white] w-[90%] md:w-[1200px] justify-between">
            <div className="relative  py-[36px] px-0">
              <figure>
                <Link href="/">
                  <Image
                    src="/img/logo.jpg"
                    alt="logo"
                    width={100}
                    height={50}
                    className="w-[80px] h-[50px] bg-contain"
                  />
                </Link>
              </figure>
            </div>
            <div>
              <ul className="md:flex gap-5 navigation  hidden">
                <li>
                  <Link
                    href="/"
                    className={cn(
                      `${work_sans.className} hover:text-[--light-yellow-text]`
                    )}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={cn(
                      `${work_sans.className} hover:text-[--light-yellow-text]`
                    )}
                  >
                    Tours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={cn(
                      `${work_sans.className} hover:text-[--light-yellow-text]`
                    )}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={cn(
                      `${work_sans.className} hover:text-[--light-yellow-text]`
                    )}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={cn(
                      `${work_sans.className} hover:text-[--light-yellow-text]`
                    )}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className={cn(
                      `${work_sans.className} hover:text-[--light-yellow-text]`
                    )}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Button
                className={cn(
                  `${work_sans.className} btn-default bg-[--light-yellow-text] hover:bg-[--btn-hover] py-[17.5px] px-[36px] md:h-[55px]`
                )}
              >
                Book a tour
              </Button>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
