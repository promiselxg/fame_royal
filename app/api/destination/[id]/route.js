import { removeUploadedImage } from "@/utils/cloudinary";
import prisma from "@/utils/dbConnect";
import { errorResponse, successResponse } from "@/utils/errorMessage";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    //    check if a record exist with the slug
    const itemExist = await prisma.destination.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!itemExist) {
      return errorResponse("No Record found with the ID Provided", 500);
    }
    return new NextResponse(JSON.stringify(itemExist, { status: 200 }));
  } catch (err) {
    return errorResponse("Something went wrong!", 500);
  }
};
export const DELETE = async (req, { params }) => {
  if (!isIdValid(params)) {
    return errorResponse("Invalid Request ID", 200);
  }
  try {
    const destination = await prisma.destination.findUnique({
      where: { id: params.id },
    });
    removeUploadedImage(destination.imageId, "fameRoyal");
    const deleteItem = await prisma.destination.delete({
      where: { id: params.id },
    });
    if (deleteItem) {
      return successResponse("Record deleted successfully", 200);
    }
  } catch (error) {
    return errorResponse(
      "An error occurred while trying to delete this item.",
      500
    );
  }
};

const isIdValid = (params) => {
  return params.id;
};
