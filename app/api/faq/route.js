import prisma from "@/utils/dbConnect";
import { errorResponse, successResponse } from "@/utils/errorMessage";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const response = await prisma.faq.findMany({
      select: {
        id: true,
        question: true,
        answer: true,
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
    if (!isValidRequestBody(body)) {
      return errorResponse("Please fill out the required fields.", 400);
    }
    const requestData = getDataFromRequestBody(body);
    const response = await prisma.faq.create({ data: requestData });

    if (response) {
      return successResponse("success");
    }
  } catch (error) {
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
    updateData[body.field] = body.value;
    await prisma.faq.update({
      where: { id: body?.id },
      data: updateData,
    });

    return successResponse("success");
  } catch (error) {
    return errorResponse("Error occurred", 500);
  }
};

const isValidRequestBody = (body) => {
  return body.question && body.answer;
};

const getDataFromRequestBody = (body) => {
  return {
    question: body.question,
    answer: body.answer,
  };
};
