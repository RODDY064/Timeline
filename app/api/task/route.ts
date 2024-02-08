import prisma from "@app/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const eventId = "65bd2efa99462dc5077fc66c";
    const { topic, content , dueDate , priority } = await request.json();
    
    const dueDateISO = new Date(dueDate).toISOString();
    
    const task = await prisma.task.create({
      data: {
        topic: topic,
        content: content,
        dueDate: dueDateISO,
        priority: priority,
        event: {
          connect:{
            id: eventId
          }
        }
        
      },
    });
  
    return NextResponse.json( { message:" Task created successfully"},{ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error", message:"Something went wrong, please try again"},
      { status: 500 }
    );
  }
}
