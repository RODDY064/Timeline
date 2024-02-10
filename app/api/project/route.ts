import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const revalidate = 60

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

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
              id: userId!,
            },
          },
        },
        
      });

      const projectId = project.id;
 
    return  NextResponse.json( { projectId ,message:"Project created successfully" },{ status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json(

      { error: "Internal Server Error",message:"Something went wrong, please try again"},
      { status: 500 }
    );
  }
}


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    let data;

    if (query) {
      // Search for projects or events based on the query
      data = await prisma.project.findMany({
        where: {
          AND: [
            {
              finished: false // Ensure finished is false
            },
            {
              OR: [
                {
                  name: {
                    contains: query // Search project names
                  }
                },
                {
                  event: {
                    some: {
                      name: {
                        contains: query // Search event names
                      }
                    }
                  }
                }
              ]
            }
          ]
        },
        include: {
          event: {
            select: {
              id: true,
              name: true,
              tasks: {
                select: {
                  id: true,
                }
              }
            }
          }
        }
      });
    } else {
      // Fetch all projects with their events where finished is false
      data = await prisma.project.findMany({
        where: {
          finished: false
        },
        include: {
          event: {
            select: {
              id: true,
              name: true,
              tasks: {
                select: {
                  id: true,
                }
              }
            }
          }
        }
      });
    }
    

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
