import DateSelector from '@/components/DateSelector';
import FavoriteButton from '@/components/FavoriteButton';
import SuggestsMovie from '@/components/SuggestsMovie';
import { Button } from '@heroui/react';
import React from 'react';
import { HiOutlinePlay, HiOutlineHeart } from "react-icons/hi";

const fetchSingleMovie = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`, {
     
    });
    return await res.json();
  
}



const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const movie = await fetchSingleMovie(id);
  

  return (
    
    <div className="pt-24 md:pt-32  min-h-screen text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 ">
    <div className="flex flex-col lg:flex-row gap-10">
    {/* Poster */}
    <div className="lg:w-[280px] lg:min-w-[280px] flex justify-center">
  <img
    src={movie.poster_path}
    alt={movie.title}
    style={{
      width: "480px",
      height: "500px",
      objectFit: "cover",
      borderRadius: "16px",
    }}
  />
</div>

     {/* Movie Info */}
    <div className="flex flex-col justify-center flex-1 text-center lg:text-left">
      <p className="text-red-500 font-semibold mb-2 uppercase tracking-wider">
        {movie.original_language}
      </p>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        {movie.title}
      </h1>

      <div className="flex items-center justify-center lg:justify-start text-red-500 mb-6">
        <span className="mr-1 text-xl">★</span>
        <span className="font-semibold">
          {movie.vote_average} IMDb Rating
        </span>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6 italic text-base sm:text-lg">
        {movie.tagline}
      </p>

      <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
        {movie.overview}
      </p>

      <p className="text-gray-400 mb-8 font-medium text-sm sm:text-base">
        {movie.runtime} min • {movie.genres?.join(', ')} • {movie.release_date}
      </p>

      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-white hover:bg-gray-700 px-5 sm:px-6 py-3 rounded-lg font-semibold transition cursor-pointer"
        >
          <HiOutlinePlay size={20} />
          Watch Trailer
        </Button>

        <Button className="bg-red-500 hover:bg-red-700 px-6 sm:px-8 py-3 rounded-lg font-bold transition cursor-pointer">
          Buy Tickets
        </Button>

        <div className="">
          <FavoriteButton movieId={movie.id}/>
        </div>
      </div>
    </div>

      </div>
       {/* date section */}
      <div className='pt-20'>

      <DateSelector/>
      </div>

      {/* Cast Section */}
<div className="mt-16">
  <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-500 pl-4">Your Favorite Cast</h2>
  
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-2">
    {movie.casts && movie.casts.map((cast, index) => (
      <div key={index} className="flex flex-col items-center text-center">
        <img
          src={cast.profile_path}
          alt={cast.name}
          className="w-20 h-20 rounded-full object-cover mb-3 border border-rose-700"
        />
        <p className="font-semibold text-sm">{cast.name}</p>
      </div>
    ))}
  </div>
</div>

      
     

      {/* suggests movie section */}
      <div className='pt-10'>
        <SuggestsMovie/>
      </div>






</div>
  );
};

export default DetailsPage;