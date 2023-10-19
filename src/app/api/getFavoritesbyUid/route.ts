import serverAuth from '@/app/libs/serverAuth'
import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {

    try {
       

        const currentUser = await serverAuth()

        if(!currentUser){
            return[]
        }

        

        const Favmovies = await prisma.movie.findMany({

            where:{
                id:{
                    in:[...(currentUser.currentUser.favoriteIds)]
                }
            }
            
         } )

        return NextResponse.json(Favmovies);


    } catch (error) {

        console.log(error)
        return error

    }



}