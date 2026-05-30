import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, backdrop_path, release_date, genres, runtime, vote_average } =
    movie;

  return (
    <div className="bg-[#161b27] rounded-xl p-4 shadow-lg w-70 text-white border border-none">
      {/* thumbnail */}
      <img
        src={backdrop_path}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      {/* title */}
      <h3 className="text-lg font-bold mb-1">{title} 4K </h3>
      <p className="text-sm text-gray-400 mb-2">
        {genres} <br /> {release_date} |{' '}
        <span className="text-yellow-600">{runtime}min</span>{' '}
      </p>

      {/* button and rating*/}
      <div className="flex justify-between items-center mt-4">
        <button className="bg-red-700 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-lg transition-all cursor-pointer">
          Buy Ticket
        </button>
        <div className="flex items-center ">
          <span className="text-[12px]">
            <span className="text-yellow-400 mr-1">★</span>
            {vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
