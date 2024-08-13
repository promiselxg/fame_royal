"use client";
import React, { useState } from "react";
import Header from "../_components/header/Header";
import DashboardCard from "../_components/stats/Card";
import { BookA } from "lucide-react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <section className="w-full flex h-screen flex-col gap-y-5 p-5 overflow-y-scroll bg-[whitesmoke]">
        <Header />
        <div className="w-full">
          <div className="w-full grid md:grid-cols-4  grid-cols-1 gap-3">
            <DashboardCard
              title="Revenue"
              value={43}
              bg="whitesmoke"
              loading={loading}
            />
            <DashboardCard
              title="Transaction count"
              icon={<BookA color="orange" />}
              value={5}
              bg="whitesmoke"
              loading={loading}
              bgColor="darkblue"
            />
            <DashboardCard
              title="Pending Transactions"
              value={12}
              bg="whitesmoke"
              loading={loading}
              bgColor="darkred"
            />
            <DashboardCard
              title="Completed Transactions"
              value={0}
              bg="whitesmoke"
              bgColor="green"
              loading={loading}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
