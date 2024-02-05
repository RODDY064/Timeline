import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";



const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const userId = "65bd072bf14310b0ea297619";

    const { name, description, startDate, endDate, type } = await request.json();
   
     const startDateISO = new Date(startDate).toISOString();
     const endDateISO = new Date(endDate).toISOString();   
     
     const project = await prisma.project.create({
        data: {
          name: name,
          description: description,
          startDate: startDateISO,
          endDate: endDateISO,
          type: type,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
         
    const projectId = project.id
    
    return  NextResponse.json( { projectId },{ status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function GET(request: Request) {
  try {

    const data = await prisma.project.findMany({
      where: {
        finished: false
      },
      include: {
        event: {
          select: {
            id:true,
            name: true,
            tasks: {
              select:{
                id: true,
              }
            }
          }
        }
      }
    });
    
    return  NextResponse.json( { data },{ status: 200})
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
    
  }
}