import { removeUploadedImage } from "@/utils/cloudinary";
import prisma from "@/utils/dbConnect";
import { errorResponse, successResponse } from "@/utils/errorMessage";
import host from "@/utils/host";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const response = await prisma.team.findMany({
      select: {
        id: true,
        team_name: true,
        position: true,
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
    const response = await prisma.team.create({ data: requestData });

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

    await prisma.team.update({
      where: { id: body?.id },
      data: updateData,
    });

    return successResponse("success");
  } catch (error) {
    return errorResponse("Error occurred", 500);
  }
};

const isValidRequestBody = (body) => {
  return body.team_name;
};

const getDataFromRequestBody = (body) => {
  return {
    position: body.position,
    team_name: body.team_name,
    mediaUrl: body?.photos.map((url) => url?.secure_url),
    imageId: body?.photos.map((url) => url?.public_id?.split("/")[1]),
  };
};
