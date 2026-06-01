import Link from 'next/link';
import React from 'react';
import MovieCard from './MovieCard';
import { suggestsMovie } from '@/lib/movies/data';

const SuggestsMovie = async () => {
  const movies = await suggestsMovie();
  return (
    <section className="px-5 py-10 bg-transparent text-white max-w-7xl mx-auto">
      {/* header*/}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <Link href="/movies" className="text-red-500 hover:text-red-400">View All →</Link>
      </div>

      {/* layout*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie._id || movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies available at the moment.</p>
        )}
      </div>
      <div className="mt-8 flex justify-center">
          <Link
            href={'/movies'}
            
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300"
          >
            See More
          </Link>
        </div>
    </section>
  );
};

export default SuggestsMovie;