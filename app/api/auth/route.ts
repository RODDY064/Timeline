import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function POST(request:Request) {
    try {
        
        const user = await prisma.user.create({
            data:{
                name: "test",
                email: "text@icloud.com"

            }
        });

        const userId = user.id;

        return Response.json(
            { userId },
            { status: 200})

    } catch (error) {
        console.log(error);
        return Response.json({
            error: "Internal Server Error"},
        {   status: 500 })
        
    }
}