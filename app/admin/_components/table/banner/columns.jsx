"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleDeleteBtn } from "@/utils/deleteItemFromDb";
import { truncateText } from "@/utils/trucateText";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Edit2, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";

export const BannerColumns = [
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const { description } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm`)}>{truncateText(description, 50)}</p>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Image Thumbnail",
    cell: ({ row }) => {
      const { mediaUrl, id } = row.original;

      // Ensure we have at least one URL in the mediaUrl array
      const imageUrl =
        Array.isArray(mediaUrl) && mediaUrl.length > 0 ? mediaUrl[0] : "";

      return (
        <>
          <div>
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={`Banner-${id}`}
                width={100}
                height={80}
                className="w-[100px] h-[80px] object-contain"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "slider_position",
    header: "Banner Position",
    cell: ({ row }) => {
      const { slider_position } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm`)}>{slider_position}</p>
          </div>
        </>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <DropdownMenu className="flex w-full">
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-[white] w-fit shadow-md py-5 px-2 rounded-sm flex flex-col"
          >
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer hover:outline-none">
              <Link
                href={`/admin/banner/edit/${id}`}
                className="w-full flex justify-start"
              >
                <Button
                  variant="ghost"
                  className="w-full flex justify-start gap-2"
                >
                  <Edit2 size={16} /> Edit Banner
                </Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {}}
              className="text-red-400 flex items-center gap-2 cursor-pointer hover:outline-none"
            >
              <Button
                variant="ghost"
                className="w-full flex justify-start gap-2"
                onClick={() => handleDeleteBtn(id, "banner")}
              >
                <FiTrash2 /> Delete Banner
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
