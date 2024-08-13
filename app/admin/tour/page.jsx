"use client";

import { cn } from "@/lib/utils";
import { raleway } from "@/lib/fonts";
import { Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import "../../admin/dashboard.css";

import Link from "next/link";

import { ToursDataTable } from "../_components/table/tour/data-table";
import { columns } from "../_components/table/tour/columns";
import { useState } from "react";

const TourPage = () => {
  const data = [];
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="flex md:items-center md:justify-between w-full my-5 md:my-10 flex-col md:flex-row justify-start items-start">
          <h1
            className={cn(
              `${raleway.className} text-[16px] uppercase font-[600] my-4 md:my-0`
            )}
          >
            View/Manage Tours
          </h1>
          <Link href="/admin/tour/add">
            <Button className="flex gap-2 items-center border-none outline-none bg-[--button-bg] hover:bg-[--button-bg-hover] text-white transition-all delay-75 rounded-[5px]">
              <Cross size={13} /> Add new tour
            </Button>
          </Link>
        </div>
        <ToursDataTable columns={columns} data={data} loading={loading} />
      </section>
    </>
  );
};

export default TourPage;
