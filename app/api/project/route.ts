import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, description, startDate, endDate, type } = await request.json();
   
     const startDateISO = new Date(startDate).toISOString();
     const endDateISO = new Date(endDate).toISOString();        

    console.log(name, description, startDateISO, endDateISO ,type);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
