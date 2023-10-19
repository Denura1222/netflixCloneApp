"use client"
import React from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface MovieInterface {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    duration: string;
    genre: string;
  }

interface dataProps{

    movie:MovieInterface

}

const movieCard:React.FC<dataProps> = ({
    movie
    
}) => {


  const router = useRouter()
  
    const handleClick = () => {
     
       router.push(`/movie/${movie.id}`)
       
      };

  return (
    <div className='bg-zinc-900 h-[12vw]'  >
        <img src={movie?.thumbnailUrl} alt="image" 
        className=' cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]'
        onClick={handleClick}
         />
         
    </div>
  )
}

export default movieCard