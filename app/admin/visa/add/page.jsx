/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use client";

import "../../admin.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useImageContext } from "@/context/imageUpload.context";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, CloudUpload, Loader2, X } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import host from "@/utils/host";

import { renderImages } from "../../_components/image-upload/selectedImageDisplay";
import Link from "next/link";
import AuthContext from "@/context/authContext";
import { verifyToken } from "@/utils/verifyToken";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  via_country_name: z.string({ required_error: "This field is required" }),
});

const AddBanner = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();

  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      via_country_name: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);
    // Validate required fields
    const requiredFields = ["via_country_name"];
    const missingFields = requiredFields.filter((field) => !values[field]);
    if (missingFields.length > 0) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Missing Required Fields",
        description: `Please fill out the following fields: ${missingFields.join(
          ", "
        )}`,
      });
      return;
    }
    try {
      let photos = [];
      // Upload images if selected
      if (selectedImages.length > 0 && files) {
        photos = await uploadFilesToCloudinary(files, "fameRoyal");
      }
      // Prepare data for submission
      const data = {
        ...values,
        photos,
      };
      // Submit data to the backend
      const response = await axios.post(`${host.url}/visa`, data);
      if (response?.data?.message !== "success") {
        toast({
          variant: "destructive",
          title: "There was a problem with your request.",
          description: `${response.data.message}`,
        });
        return;
      } else {
        toast({
          description: `Created successfully.`,
          className: "bg-green-500 text-white",
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          error.response?.data?.message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const verifyServerToken = async () => {
      const res = await verifyToken(user?.token);
      if (res.message !== "success") {
        window.location = `${host.host_url}/login`;
      }
    };
    verifyServerToken();
  }, [user?.token]);

  return (
    <>
      <div className="h-screen w-full flex flex-col  overflow-y-scroll">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              href={`/admin/visa?q=${user?.token}`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>add new country</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="via_country_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Country Name"
                          {...field}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        the name of the country
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col space-y-5">
                  <span>Country Flag</span>
                  <label htmlFor="files" className="w-fit ">
                    <CloudUpload
                      size={60}
                      color="#171726"
                      className="cursor-pointer"
                    />
                  </label>
                  <input
                    type="file"
                    name="files"
                    id="files"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  <div className="w-fit grid md:grid-cols-10 grid-cols-3 gap-3">
                    {renderImages(selectedImages, "file", removeSelectedImage)}
                  </div>
                </div>
                <Button
                  type="submit"
                  id="submitBtn"
                  disabled={loading || selectedImages.length < 1 || !files}
                >
                  {loading && <Loader2 className="animate-spin" />}
                  {loading ? "Please wait" : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBanner;
