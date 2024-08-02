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
        <div
          className={cn(
            `${work_sans.className} w-full flex bg-[--primary-background] text-[--primary-background-text] font-[600] text-[16px]`
          )}
        >
          <div className="container mx-auto md:w-[1000px] w-full md:min-h-[60px] flex items-center gap-8">
            <span>needhelp@info.com</span>
            <span>33326516493</span>
            <span>77 broklyn street new york</span>
          </div>
        </div>
        <header className="flex w-full">
          <div className="conatiner mx-auto min-h-[50px] flex items-center bg-[white] w-[1200px] justify-between">
            <div className="relative  py-[36px] px-0">
              <figure>
                <Link href="/">
                  <Image
                    src="https://travio.smartdemowp.com/wp-content/themes/travio/assets/images/logo-3.png"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </Link>
              </figure>
            </div>
            <div>
              <ul className="flex gap-5 navigation">
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
                    Product
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
      <Hero />
    </>
  );
};

export default Header;
