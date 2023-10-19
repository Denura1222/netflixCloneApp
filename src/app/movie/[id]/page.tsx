
import React from 'react'
import getMoviesbyId from '@/app/actions/getMoviesById';
import { User,Movie } from '@prisma/client';
import { getSession } from 'next-auth/react';
import { get } from 'http';
import MovieClient from './movieClient';

interface pageProps {

    id?: string |undefined
  
  }

const page = async ({params}:{params:pageProps}) => {

    console.log(params)
    const movies = await getMoviesbyId(params)


  return (
   <MovieClient data={movies}/>

)
}

export default page