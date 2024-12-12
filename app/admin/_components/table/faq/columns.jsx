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
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";

export const FAQColumns = [
  {
    accessorKey: "question",
    header: "FAQ Question",
    cell: ({ row }) => {
      const { question } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm`)}>{question}</p>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "answer",
    header: "FAQ Answer",
    cell: ({ row }) => {
      const { answer } = row.original;
      return (
        <>
          <div>
            <p className={cn(`text-sm`)}>{answer}</p>
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
                href={`/admin/faq/edit/${id}`}
                className="w-full flex justify-start"
              >
                <Button
                  variant="ghost"
                  className="w-full flex justify-start gap-2"
                >
                  <Edit2 size={16} /> Edit FAQ
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
                onClick={() => handleDeleteBtn(id, "faq")}
              >
                <FiTrash2 /> Delete FAQ
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
