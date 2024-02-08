import prisma from "@app/utils/prisma";
import { NextResponse } from "next/server";


export async function POST(request: Request,{ params: {id} }:{ params: {id: string}}) {
  try {
    const userId = "65bd072bf14310b0ea297619";
    const { name, description, startDate, endDate, type } = await request.json();

    const startDateISO = new Date(startDate).toISOString();
    const endDateISO = new Date(endDate).toISOString();   
    

    const event = await prisma.event.create({
      data:{
        name: name,
        description: description,
        startDate: startDateISO , 
        endDate: endDateISO,
        type:type,
        user: {
          connect : {
            id: userId
          }
        },
        project : {
          connect:{
            id:id
          }
        }
      }
    })
    
    
    return NextResponse.json( {message: "Event created successfully "},{ status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json( 
      { error: "Internal Server Error",message:"Something went wrong, please try again"},
      { status: 500 }
    );
  }
}
