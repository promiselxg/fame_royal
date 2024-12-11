"use client";

import { cn } from "@/lib/utils";
import { raleway } from "@/lib/fonts";
import "../../admin/dashboard.css";
import useFetch from "@/hooks/useFetch";
import { BannerTable } from "../_components/table/banner/data-table";
import { BannerColumns } from "../_components/table/banner/columns";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cross } from "lucide-react";

export const fetchCache = "force-no-store";

const BannerPage = () => {
  const { loading, data } = useFetch("/banner");
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="flex md:items-center md:justify-between w-full my-5  flex-col md:flex-row justify-start items-start">
          <h1
            className={cn(
              `${raleway.className} uppercase font-[600] my-4 md:my-0`
            )}
          >
            Manage Website Banners
          </h1>
          <Button className="border-none outline-none bg-[--button-bg] hover:bg-[--button-bg-hover] text-white transition-all delay-75 rounded-[5px]">
            <Link href="/admin/banner/add" className="flex gap-2 items-center ">
              <Cross size={13} /> Add new website banner
            </Link>
          </Button>
        </div>
        <BannerTable columns={BannerColumns} data={data} loading={loading} />
      </section>
    </>
  );
};

export default BannerPage;
