import React from 'react'
// import handler from '../actions/random'
import useBillboard from '../hooks/useBillboard'


// async function moves() {

//     const movies =await handler()

//     return movies
    
    
// }


const Billboard = ({

   

}) => {

    // const movies = await moves()

    const {data,error,isLoading}= useBillboard()

    console.log('randomMovie:',data)
  return (
    <div className='relative h-[56.25vw]'>
        <video className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" src={data?.videoUrl} poster={data?.thumbnailUrl} autoPlay loop muted></video>
        <div className='absolute top-[30%] left-[15%] w-full'>
        <h1 className='text-white md:text-5xl h-full w-[50%] lg:text-6x1 font-bold drop-shadow-xl '>{data?.title}</h1>
        <p className='text-[8px] md:text-lg mt-3 md:mt-8 text-white w-[300px] md:w-[400px] lg:w-[500px]'>{data?.description}</p>
        <button className=' bg-slate-600 rounded-md p-2 mt-3  text-white hover:bg-opacity-30 text-xs lg:text-lg transition'>More info</button>

        </div>
    </div>
  )
}

export default Billboard