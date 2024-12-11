import { removeUploadedImage } from "@/utils/cloudinary";
import prisma from "@/utils/dbConnect";
import { errorResponse, successResponse } from "@/utils/errorMessage";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    //    check if a record exist with the slug
    const itemExist = await prisma.product.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!itemExist) {
      return errorResponse("No Record found with the ID Provided", 500);
    }
    return new NextResponse(JSON.stringify(itemExist, { status: 200 }));
  } catch (err) {
    return successResponse("Something went wrong!", 200);
  }
};
export const DELETE = async (req, { params }) => {
  if (!isIdValid(params)) {
    return errorResponse("Invalid Request ID", 200);
  }
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
    });
    removeUploadedImage(product.imageId, "fameRoyal");
    const deleteItem = await prisma.product.delete({
      where: { id: params.id },
    });
    if (deleteItem) {
      return successResponse("Record deleted successfully", 200);
    }
  } catch (error) {
    return errorResponse(
      "An error occurred while trying to delete this item.",
      200
    );
  }
};

const isIdValid = (params) => {
  return params.id;
};
