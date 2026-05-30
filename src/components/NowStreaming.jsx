import { nowStreaming } from '@/lib/movies/data';
import React from 'react';
import MovieCard from './MovieCard';

const NowStreaming = async () => {
  const movies = await nowStreaming();

  return (
    <section className="px-5 py-10 bg-black text-white max-w-7xl mx-auto">
      {/* header*/}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Now Streaming</h2>
        <a href="/movies" className="text-red-500 hover:text-red-400">View All →</a>
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
    </section>
  );
};

export default NowStreaming;