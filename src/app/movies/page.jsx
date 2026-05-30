import MovieCard from '@/components/MovieCard';
import { fetchMovies } from '@/lib/movies/data';
import React from 'react';
import { ColumnResizer } from 'react-aria-components';


const AllMoviePage = async () => {
  const movies = await fetchMovies();
  // console.log(movies);
  
  return (
    <div className='pt-32 max-w-7xl mx-auto'>
      <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-y-10'>
      {
        movies?.map((movie) => <MovieCard key={movie?.id } movie={movie} />)
      }
    </div>
    </div>
  );
};

export default AllMoviePage;