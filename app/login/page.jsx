"use client";
import React, { useContext, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { __ } from "@/utils/getElementById";
import AuthContext from "@/context/authContext";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const Page = () => {
  const { toast } = useToast();
  const [isloading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData?.username || !formData.password) {
      return false;
    }
    try {
      setLoading(true);
      const { data } = await axios.post("/api/auth/login", formData);
      if (data?.message !== "Login Successful") {
        toast({
          description: data?.message,
          variant: "destructive",
        });
      } else {
        dispatch({ type: "LOGIN_SUCCESS", payload: data.userInfo });
        window.location = `/admin/dashboard?q=${data?.userInfo?.token}`;
      }
    } catch (error) {
      console.log(error);
      toast({
        description:
          "An unknown error occured while trying to sign you in, our Engineers have been contacted concerning the error",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full px-5 md:w-1/2 mx-auto flex justify-center items-center flex-col md:h-screen h-fit">
          <Image
            src="/images/logo.png"
            width={200}
            height={200}
            alt="logo"
            className="md:mb-5"
            priority={true}
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:w-1/2 w-full gap-y-3 text-white font-[600] uppercase"
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border-none outline-0 p-3 rounded-md bg-[--primary-bg] text-white font-[600]"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-none outline-0 p-3 rounded-md bg-[--primary-bg] text-white font-[600]"
            />

            <button
              disabled={isloading}
              type="submit"
              id="submitBtn"
              className="border-none outline-none bg-[--admin-primary-bg] p-3 rounded-md  text-white font-[600] hover:opacity-[0.8] transition-all delay-75 disabled:cursor-not-allowed mt-5 flex items-center text-center justify-center gap-2"
            >
              {isloading ? <Loader2 className="animate-spin" /> : null}
              {isloading ? "please wait..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
