import React from 'react'
import serverAuth from '../../libs/serverAuth'
import prismadb from '../../libs/prismadb'

import { NextRequest, NextResponse } from "next/server";

export async function GET() {

  if (!serverAuth) {
    throw new Error('Not signed in');

  }

  const movieCount = await prismadb.movie.count()

  const movieIndex = Math.floor(Math.random() * movieCount)

  const randomMovie = await prismadb.movie.findMany({
    take: 1,
    skip: movieIndex
  })


  return  NextResponse.json(randomMovie[0]);
}
