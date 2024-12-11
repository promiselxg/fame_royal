import { removeUploadedImage } from "@/utils/cloudinary";
import prisma from "@/utils/dbConnect";
import { errorResponse, successResponse } from "@/utils/errorMessage";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const response = await prisma.service.findMany({
      select: {
        id: true,
        service_description: true,
        mediaUrl: true,
        imageId: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return new NextResponse(JSON.stringify(response, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    const public_id = body?.photos.map((url) => url.public_id.split("/")[1]);
    if (!isValidRequestBody(body)) {
      removeUploadedImage(public_id, "fameRoyal");
      return errorResponse("Please fill out the required fields.", 400);
    }
    const requestData = getDataFromRequestBody(body);
    const response = await prisma.service.create({ data: requestData });

    if (response) {
      return successResponse("success");
    }
  } catch (error) {
    console.log(error);
    removeUploadedImage(public_id, "fameRoyal");
    return errorResponse("Something went wrong!", 500);
  }
};

export const PUT = async (req) => {
  const body = await req.json();

  if (!body?.value || !body?.field || !body.id) {
    return errorResponse("Please fill out the form.");
  }
  try {
    const updateData = {};
    if (body.field === "vehicle_name") {
      updateData[body.field] = body.value;
      //updateData.slug = generateSlug(body.value);
    } else if (body.field === "image") {
      updateData.mediaUrl = body.photos.map((url) => url.secure_url);
      updateData.imageId = body.photos.map(
        (url) => url.public_id.split("/")[1]
      );
      removeUploadedImage(body.value, "fameRoyal");
    } else {
      updateData[body.field] = body.value;
    }

    await prisma.service.update({
      where: { id: body?.id },
      data: updateData,
    });

    return successResponse("success");
  } catch (error) {
    console.log(error);
    return errorResponse("Error occurred", 500);
  }
};

const isValidRequestBody = (body) => {
  return body.service_description;
};

const getDataFromRequestBody = (body) => {
  return {
    service_description: body.service_description,
    mediaUrl: body?.photos.map((url) => url?.secure_url),
    imageId: body?.photos.map((url) => url?.public_id?.split("/")[1]),
  };
};
