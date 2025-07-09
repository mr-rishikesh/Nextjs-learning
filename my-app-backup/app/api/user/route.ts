import { NextRequest, NextResponse } from "next/server";
// import  {PrismaClient}  from "@prisma/client";
// 

import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()

export async function POST(req : NextRequest) {

    const body = await req.json();
    console.log(body)
 try {
      await  client.user.create({
        data : {
            username : body.username ,
            password : body.password
        }
    })

    return NextResponse.json({
        body
    })
 } catch (error) {
    return NextResponse.json({
        message : "Error in signup",
        error
    })
 }

}  