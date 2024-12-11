import { removeUploadedImage } from "@/utils/cloudinary";
import prisma from "@/utils/dbConnect";
import { errorResponse, successResponse } from "@/utils/errorMessage";
import host from "@/utils/host";
import { logger } from "@/utils/logger";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const userAgent = req.headers.get("user-agent");
  const urlPath = req.headers.get("referer").split(host.host_url)[1];
  try {
    //    check if a record exist with the slug
    const itemExist = await prisma.slider.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!itemExist) {
      logger(userAgent, urlPath, "failed", "GET", "Invalid vehicle ID");
      return errorResponse("No Record found with the ID Provided", 500);
    }
    return new NextResponse(JSON.stringify(itemExist, { status: 200 }));
  } catch (err) {
    logger(
      userAgent,
      urlPath,
      "failed",
      "GET",
      `error occured while trying to query DB with ${params.id}`
    );
    return successResponse("Something went wrong!", 200);
  }
};
export const DELETE = async (req, { params }) => {
  const userAgent = req.headers.get("user-agent");
  const urlPath = req.headers.get("referer").split(host.host_url)[1];

  if (!isIdValid(params)) {
    return errorResponse("Invalid Request ID", 200);
  }
  try {
    const slider = await prisma.slider.findUnique({
      where: { id: params.id },
    });
    removeUploadedImage(slider.imageId, "fameRoyal");
    const deleteItem = await prisma.slider.delete({
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
