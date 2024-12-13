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
import { Input } from "@/components/ui/input";
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

const formSchema = z.object({
  team_name: z.string({ required_error: "This field is required" }),
  position: z.string({ required_error: "This field is required" }),
  facebook_url: z.string().optional(),
  instagram_url: z.string().optional(),
  twitter_url: z.string().optional(),
});

const EditTeamMember = ({ params }) => {
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
        const response = await axios.put(`/api/team`, {
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
    const getTeamData = async () => {
      try {
        const { data } = await axios.get(`/api/team/${params?.id}`);
        setData(data || {});
      } catch (error) {
        console.log(error);
      }
    };
    getTeamData();
  }, [params.id]);

  async function onSubmit(values) {}

  console.log(data);
  return (
    <>
      <div className="h-screen w-full flex flex-col  overflow-y-scroll pb-[100px] md:pb-20">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              href={`/admin/team`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Edit Team Information</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="team_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Member Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Team Member Name"
                          {...field}
                          defaultValue={data?.team_name}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        team member name.
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="team_name"
                        onClick={() =>
                          handleFormUpdate(
                            "team_name",
                            field?.value,
                            "team",
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
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position (optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Position"
                          {...field}
                          defaultValue={data?.position}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        team member position (eg. chairman).
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="position"
                        onClick={() =>
                          handleFormUpdate(
                            "position",
                            field?.value,
                            "team",
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
                <FormField
                  control={form.control}
                  name="facebook_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facebook Username (optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Facebook Username"
                          {...field}
                          defaultValue={data?.social?.facebook_url}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Facebook Profile Address (https://www.facebook.com/)
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="facebook_url"
                        onClick={() =>
                          handleFormUpdate(
                            "facebook_url",
                            field?.value,
                            "team",
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
                <FormField
                  control={form.control}
                  name="instagram_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram URL (optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Instagram URL"
                          {...field}
                          defaultValue={data?.social?.instagram_url}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Instagram URL
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="instagram_url"
                        onClick={() =>
                          handleFormUpdate(
                            "instagram_url",
                            field?.value,
                            "team",
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
                <FormField
                  control={form.control}
                  name="twitter_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Twitter URL (optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Twitter URL"
                          {...field}
                          defaultValue={data?.social?.twitter_url}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        Twitter URL
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="twitter_url"
                        onClick={() =>
                          handleFormUpdate(
                            "twitter_url",
                            field?.value,
                            "team",
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

export default EditTeamMember;
