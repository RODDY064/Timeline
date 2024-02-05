import prisma from "@app/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const userId = "65bd072bf14310b0ea297619"
    const { projectData, eventData } = await request.json();

    const startDateISOProject = new Date(projectData.startDate).toISOString();
    const endDateISOProject = new Date(projectData.endDate).toISOString();
    const endDateISOEvent = new Date(eventData.endDate).toISOString();
    const startDateISOEvent = new Date(eventData.startDate).toISOString();

    const project = await prisma.project.create({
      data: {
        ...projectData,
        startDate: startDateISOProject, // Assign converted startDate
        endDate: endDateISOProject,
        user:{
          connect:{
            id: userId
          }
        }
      },
    });

    const event = await prisma.event.create({
      data: {
        ...eventData,
        startDate: startDateISOEvent, // Assign converted startDate
        endDate: endDateISOEvent,
         project:{
          connect:{
            id: project.id
          }
         },
        user:{
          connect:{
            id: userId
          }
        }
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
