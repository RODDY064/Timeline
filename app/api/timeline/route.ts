import prisma from "@app/utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { projectData, eventData , taskData } = await request.json();
   
    const userId = "65bd072bf14310b0ea297619";

    const startDateISOProject = new Date(projectData.startDate).toISOString();
    const endDateISOProject = new Date(projectData.endDate).toISOString();
    const endDateISOEvent = new Date(eventData.endDate).toISOString();
    const startDateISOEvent = new Date(eventData.startDate).toISOString();
    const dueDateISOTask = new Date(taskData.dueDate).toISOString();

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



    return NextResponse.json({ message:"Timeline created successfully "},{ status: 200 } );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error", message:"Something went wrong, please try again"},
      { status: 500 }
    );
  }
}
