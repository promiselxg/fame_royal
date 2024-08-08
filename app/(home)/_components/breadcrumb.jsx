import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = ({ label, ...children }) => {
  return (
    <>
      <div
        className={cn(
          `w-full text-white mt-5 ml-2 flex items-center gap-1 text-sm ${children.className} `
        )}
      >
        <span>
          <Link href="/">Home</Link>
        </span>
        <span>
          <FiChevronRight />
        </span>
        <span>{label}</span>
      </div>
    </>
  );
};

export default Breadcrumb;
