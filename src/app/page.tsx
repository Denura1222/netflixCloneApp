"use client"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"
import NavBar from './components/navBar'
import Billboard from './components/billboard';
import React, { useState,useEffect } from 'react';
import useMovieList from './hooks/useMovieList';
import useFavorites from './hooks/useFavorites';
import Movies from './components/movies';
// import MovieModal from './components/movieModal/movieModal';
import getMoviesbyId from './actions/getMoviesById';




export default function Home() {


  const {data:movie=[]} = useMovieList()
  const {data:favorites=[]} =useFavorites()

  console.log('favorites',favorites)

  const router = useRouter()
  const { data: session, status } = useSession()

  const isUser = !!session?.user
  const loading =status ==='loading'

  useEffect(()=>{

      if(status==="unauthenticated"){

        router.push("/auth")

      }
    

  },[loading,isUser])






  return (
    <div>
      <NavBar />
      <Billboard /> 
       <Movies data={movie} title='Trending now'/>
       <Movies data={favorites} title='My List'/>

       {/* <MovieModal movie={movie}/> */}




    </div>
  )
}
