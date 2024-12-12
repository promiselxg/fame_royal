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
import { handleFormUpdate } from "@/utils/handleFormUpdate";
import Link from "next/link";
import { __ } from "@/utils/getElementById";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  question: z.string({ required_error: "This field is required" }),
  answer: z.string({ required_error: "This field is required" }),
});

const EditBannerPage = ({ params }) => {
  const [data, setData] = useState([]);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const getFAQData = async () => {
      try {
        const { data } = await axios.get(`/api/faq/${params?.id}`);
        setData(data || {});
      } catch (error) {
        console.log(error);
      }
    };
    getFAQData();
  }, [params.id]);

  async function onSubmit(values) {}

  return (
    <>
      <div className="h-screen w-full flex flex-col  overflow-y-scroll pb-[100px] md:pb-20">
        <div className="w-full bg-white h-[60px] p-5 flex items-center border-[#eee] border-b-[1px]">
          <div className="w-fit flex  h-[60px]">
            <Link
              href={`/admin/faq`}
              className="border-r-[1px] border-[#eee] w-fit flex items-center pr-5"
            >
              <ChevronLeft size={30} />
            </Link>
          </div>
        </div>
        <div className="w-full my-5 bg-[whitesmoke] px-5 flex flex-col h-screen ">
          <div className="p-5">
            <h1 className={cn(`font-bold`)}>Edit FAQs</h1>
          </div>
          <div className="p-5 bg-white container w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 mb-20"
              >
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>FAQ Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="FAQ Title"
                          {...field}
                          defaultValue={data?.question}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        give this FAQ a title
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="question"
                        onClick={() =>
                          handleFormUpdate(
                            "question",
                            field?.value,
                            "faq",
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
                  name="answer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>FAQ Answer</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="FAQ Answer"
                          {...field}
                          defaultValue={data?.answer}
                          className="form-input"
                        />
                      </FormControl>
                      <FormDescription className="text-[12px] text-[#333]">
                        answer to Frequently asked question
                      </FormDescription>
                      <Button
                        type="button"
                        disabled={!field.value}
                        id="answer"
                        onClick={() =>
                          handleFormUpdate(
                            "answer",
                            field?.value,
                            "faq",
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
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBannerPage;
