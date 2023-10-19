"use client"
import React from 'react'
import MovieCard from './movieCard';
import MovieModal from './movieModal/movieModal';

interface MovieInterface {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
}

interface movieListProps {
  data: MovieInterface[]
  title: string
}
const movies: React.FC<movieListProps> = ({
  data,
  title
}) => {


  return (
    <div className=' m-5'>
      <h1 className='font-bold text-[25px] text-white mb-3'>{title}</h1>
      <div className="grid grid-cols-4 gap-5">

        {data.map((movie) => (
          <div key={movie.id}>
                      <MovieCard key={movie.id} movie={movie} />
          </div>

        ))}

      </div>
    </div>


  )

}

export default movies