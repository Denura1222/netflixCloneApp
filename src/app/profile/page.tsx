"use client"
import React from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'


const  page = () => {

  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "unauthenticated") {

    router.push('/auth')
   
  }
 
  return (
    <div className='flex flex-col gap-5 justify-center items-center w-full h-full'>
       
            <h1 className='font-semibold text-[40px] text-white'>who is watching?</h1>
            <div className='flex flex-row gap-8'>
            <img  className='w-[90px] h-[90px]' src="/images/default-blue.png" alt="" />
            <img  className='w-[90px] h-[90px]' src="/images/default-blue.png" alt="" />
            <img  className='w-[90px] h-[90px]' src="/images/default-blue.png" alt="" />
            <img  className='w-[90px] h-[90px]' src="/images/default-blue.png" alt="" />
            </div>
            
    </div>
  )
}

export default page 