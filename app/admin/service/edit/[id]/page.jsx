/* eslint-disable no-unused-vars */

"use client";

import { renderImages } from "@/app/admin/_components/image-upload/selectedImageDisplay";
import "../../../admin.css";
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
import { useImageContext } from "@/context/imageUpload.context";

import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ChevronLeft, CloudUpload, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import Link from "next/link";
import { __ } from "@/utils/getElementById";
import { uploadFilesToCloudinary } from "@/utils/uploadFilesToCloudinary";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  service_description: z
    .string({ required_error: "This field is required" })
    .min(20, { message: "give this service a detailed description." }),
});

const EditService = ({ params }) => {
  const { files, selectedImages, handleImageChange, removeSelectedImage } =
    useImageContext();
  const [data, setData] = useState([]);
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleImageUpload = async (field, value) => {
    try {
      __("submitBtn").innerHTML = "Updating...";
      __("submitBtn").disabled = true;
      let photos = [];
      if (selectedImages.length > 0 && files) {
        photos = await uploadFilesToCloudinary(files, "fameRoyal");
      }
      if (photos) {
        const response = await axios.put(`/api/service`, {
          id: params.id,
          field,
          value,
          photos,
        });
        if (response?.data?.message === "success") {
          toast({
            description: `Updated successfully.`,
            className: "bg-green-500 text-white",
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      __("submitBtn").innerHTML = "Update";
      __("submitBtn").disabled = false;
    }
  };

  useEffect(() => {
    const getBannerData = async () => {
      try {
        const { data } = await axios.get(`/api/service/${params?.id}`);
        setData(data || {});
      } catch (error) {
        console.log(error);
      }
    };
    getBannerData();
  }, [params.id]);

  async function onSubmit(values) {}

  return (
    <>
      <div className="h-screen w-full flex flex-col  overflow-y-scroll pb-[100px] md:pb-20">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              href={`/admin/service`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Edit Service</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="service_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Services Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Services Description"
                          {...field}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        give this service a detailed description.
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="service_description"
                        onClick={() =>
                          handleFormUpdate(
                            "service_description",
                            field?.value,
                            "service",
                            params.id
                          )
                        }
                      >
                        Update
                      </Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col space-y-5">
                  <span>Edit Photo</span>
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
                    {selectedImages.length > 0
                      ? renderImages(
                          selectedImages,
                          "file",
                          removeSelectedImage
                        )
                      : renderImages(data?.mediaUrl)}
                  </div>
                </div>
                <Button
                  type="button"
                  id="submitBtn"
                  onClick={() => handleImageUpload("image", data?.imageId)}
                  disabled={selectedImages.length < 1 || !files}
                >
                  Update
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditService;
