import serverAuth from '@/app/libs/serverAuth'
import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {

    try {
        if (!serverAuth) {
            throw new Error('Not signed in');

        }

        const movies = await prisma.movie.findMany()

        return NextResponse.json(movies);


    } catch (error) {

        console.log(error)
        return error

    }



}
