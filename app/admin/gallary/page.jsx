"use client";

import { cn } from "@/lib/utils";
import { raleway } from "@/lib/fonts";
import "../../admin/dashboard.css";
import useFetch from "@/hooks/useFetch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cross } from "lucide-react";
import { GallaryTable } from "../_components/table/gallary/data-table";
import { GallaryColumn } from "../_components/table/gallary/columns";

const BannerPage = () => {
  const { loading, data } = useFetch("/gallary");
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="flex md:items-center md:justify-between w-full my-5  flex-col md:flex-row justify-start items-start">
          <h1
            className={cn(
              `${raleway.className} uppercase font-[600] my-4 md:my-0`
            )}
          >
            Manage Gallary
          </h1>
          <Button className="border-none outline-none bg-[--button-bg] hover:bg-[--button-bg-hover] text-white transition-all delay-75 rounded-[5px]">
            <Link
              href="/admin/gallary/add"
              className="flex gap-2 items-center "
            >
              <Cross size={13} /> Add new Gallary
            </Link>
          </Button>
        </div>
        <GallaryTable columns={GallaryColumn} data={data} loading={loading} />
      </section>
    </>
  );
};

export default BannerPage;
