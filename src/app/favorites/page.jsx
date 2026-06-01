'use client';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [movies, setMovies] = useState([]);
  const userId = "current_user_id";

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/favorites/${userId}`)
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 mb-10">
      <h1 className="text-3xl font-bold mb-8">My Favorites</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map(movie => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-xl">
            <img src={movie.poster_path} alt={movie.title} className="rounded-lg mb-4" />
            <h2 className="font-bold">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;