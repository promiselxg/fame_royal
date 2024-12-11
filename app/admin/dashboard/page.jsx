"use client";
import { BookA } from "lucide-react";
import Header from "../_components/header/Header";
import DashboardCard from "../_components/stats/Card";
import { cn } from "@/lib/utils";
import { raleway } from "@/lib/fonts";
import { useState } from "react";
import { BannerTable } from "../_components/table/banner/data-table";
import { BannerColumns } from "../_components/table/banner/columns";

export const fetchCache = "force-no-store";

const Dashboard = () => {
  //const { sortedData, data, loading } = useContext(TransactionContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <Header />
        <div className="w-full">
          <div className="w-full grid md:grid-cols-4  grid-cols-1 gap-3">
            <DashboardCard
              title="Revenue"
              value={0}
              bg="whitesmoke"
              loading={loading}
            />
            <DashboardCard
              title="Transaction count"
              icon={<BookA color="orange" />}
              value={data?.length}
              bg="whitesmoke"
              loading={loading}
              bgColor="darkblue"
            />
            <DashboardCard
              title="Pending Transactions"
              value={1}
              bg="whitesmoke"
              loading={loading}
              bgColor="darkred"
            />
            <DashboardCard
              title="Completed Transactions"
              value={1}
              bg="whitesmoke"
              bgColor="green"
              loading={loading}
            />
          </div>
        </div>
        {data?.length > 0 && (
          <div className="w-full my-4">
            <div className="flex justify-between gap-3 flex-col md:flex-row"></div>
          </div>
        )}
        <div className="w-full">
          <div className="p-5 bg-white rounded-[12px]">
            <div className="flex items-center justify-between w-full ">
              <h1 className={cn(`${raleway.className} capitalize font-[600]`)}>
                Recent Transactions
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
