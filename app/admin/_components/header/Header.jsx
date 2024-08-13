"use client";

import { playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <>
      <div className="w-full flex h-20 bg-[#fafafb]">
        <div className="p-5 flex items-center justify-between w-full">
          <div>
            <h1 className={cn(`${playfair.className} font-[900] text-[16px]`)}>
              Welcome back
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
