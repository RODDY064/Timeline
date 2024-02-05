import prisma from "@app/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { eventData, taskData } = await request.json();

    const userId = "65bd072bf14310b0ea297619";

    const startDateISOEvent = new Date(eventData.startDate).toISOString();
    const endDateISOEvent = new Date(eventData.endDate).toISOString();
    const dueDateISOTask = new Date(taskData.dueDate).toISOString();

    const event = await prisma.event.create({
      data: {
        ...eventData,
        startDate: startDateISOEvent,
        endDate: endDateISOEvent,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    const task = await prisma.task.create({
      data: {
        ...taskData,
        dueDate: dueDateISOTask,
        event: {
          connect: {
            id: event.id,
          },
        },
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
