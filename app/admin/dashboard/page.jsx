"use client";
import { cn } from "@/lib/utils";
import { raleway } from "@/lib/fonts";
import { BannerTable } from "../_components/table/banner/data-table";
import { BannerColumns } from "../_components/table/banner/columns";
import useFetch from "@/hooks/useFetch";

export const fetchCache = "force-no-store";

const Dashboard = () => {
  const { loading, data } = useFetch("/banner");
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <div className="w-full">
          <div className="p-5 bg-white rounded-[12px]">
            <div className="flex items-center justify-between w-full ">
              <h1 className={cn(`${raleway.className} capitalize font-[600]`)}>
                Website Banner
              </h1>
            </div>
            <BannerTable
              data={data}
              columns={BannerColumns}
              loading={loading}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
