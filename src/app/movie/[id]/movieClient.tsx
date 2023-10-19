"use client"
import React, { useState } from 'react'
import { useCallback } from 'react'
import { useSession} from "next-auth/react"
import { useRouter } from 'next/navigation'
import { Movie } from '@prisma/client'
import { AiOutlineClose } from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import axios from 'axios'
import toast from 'react-hot-toast'

interface movieProps{

    data:Movie

}

const movieClient:React.FC<movieProps> = ({
    data
}) => {

    const { data: session, status } = useSession()

    console.log('session',session?.user?.email)
  const router = useRouter()

  if (status === "unauthenticated") {

    router.push('/auth')
   
  }

  
  const toggleFavorite = useCallback(async (e:React.MouseEvent<HTMLDivElement>)=>{
    e.stopPropagation();

    let request;

    try{

    
        request =() =>axios.post(`/api/favorites/${data.id}`);
        await request()
        router.refresh()
        toast.success('success')
        
    } catch (error) {

        toast.error('something went wrong')
        
    }

   



},[router,])


  return (
    <div className="
    justify-center 
    items-center 
    flex 
    overflow-x-hidden 
    overflow-y-auto 
    fixed 
    inset-0 
    z-50 
    outline-none 
    focus:outline-none
    bg-neutral-800/70
  ">
                <div className=" relative w-[600px] h-[700px] rounded-sm bg-gray-800">

                    <img src={data?.thumbnailUrl} alt="image" />

                    <div
                        className="
            absolute 
            inset-0 
            bg-gradient-to-t 
            from-gray-800 
            via-gray-800 
            to-transparent 
            opacity-100
            pointer-events-none 
          "></div>
                  


                    <div className='absolute z-50 m-5' onClick={toggleFavorite}>
                        <AiOutlinePlus className= {`text-white cursor-pointer  h-[30px] w-[30px]`}/>
                    </div>
                    <h1 className='text-white opacity-70 font-bold absolute z-50 -translate-y-12 translate-x-10 text-[25px]'>{data.title }</h1>

                    <p className='text-white opacity-90 absolute z-50  text-[14px] mx-10 my-16 '>{data.description }</p>


                </div>
            </div> 
  )
}

export default movieClient