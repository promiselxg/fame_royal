"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleDeleteBtn } from "@/utils/deleteItemFromDb";

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

export const TeamColumn = [
  {
    accessorKey: "team_name",
    header: "Team Member Name",
    cell: ({ row }) => {
      const { team_name } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm`)}>{team_name}</p>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => {
      const { position } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm`)}>{position}</p>
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
                href={`/admin/team/edit/${id}`}
                className="w-full flex justify-start"
              >
                <Button
                  variant="ghost"
                  className="w-full flex justify-start gap-2"
                >
                  <Edit2 size={16} /> Edit Team
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
                onClick={() => handleDeleteBtn(id, "team")}
              >
                <FiTrash2 /> Delete Team
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
