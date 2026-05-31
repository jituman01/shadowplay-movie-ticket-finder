'use client';

import React, { useState } from 'react';
import { HiPlay } from 'react-icons/hi';

const TrailerSection = () => {
  const trailers = [
    {
      id: 'TcMBFSGVi1c',
      title: 'Avengers: Endgame',
      thumbnail: 'https://i.ytimg.com/vi/TcMBFSGVi1c/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
    },
  {
      id: '8ugaeA-nMTc',
      title: 'Spider-Man: No Way Home',
      thumbnail: 'https://i.ytimg.com/vi/8ugaeA-nMTc/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=8ugaeA-nMTc',
    },
    
    {
      id: '6ZfuNTqbHE8',
      title: 'Avengers: Infinity War',
      thumbnail: 'https://i.ytimg.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
    },
    
    {
      id: 'Nt9L1jCKGnE',
      title: 'Doctor Strange in the Multiverse of Madness',
      thumbnail: 'https://i.ytimg.com/vi/Nt9L1jCKGnE/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Nt9L1jCKGnE',
    },
    {
      id: 'Go8nTmfrQd8',
      title: 'Black Panther: Wakanda Forever',
      thumbnail: 'https://i.ytimg.com/vi/Go8nTmfrQd8/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Go8nTmfrQd8',
    },
  ];

  const [activeTrailer, setActiveTrailer] = useState(trailers[0]);

  return (
    <section className="w-full py-16 px-4 md:px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
             Trailers
          </h2>
          <p className="text-gray-400 mt-2">
            Watch the latest movie trailers
          </p>
        </div>

        {/* Main Video */}
        <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl border-2 border-red-900/30 shadow-2xl aspect-video mb-8">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${activeTrailer.id}?autoplay=1&rel=0`}
            title={activeTrailer.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Current Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 max-w-3xl mx-auto">
          {activeTrailer.title}
        </h3>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trailers.map((trailer) => (
            <button
              key={trailer.id}
              onClick={() => setActiveTrailer(trailer)}
              className={`group relative overflow-hidden rounded-2xl aspect-video transition-all duration-300 cursor-pointer ${
                activeTrailer.id === trailer.id
                  ? 'ring-2 ring-red-500 scale-105'
                  : 'border border-gray-800 hover:border-red-500'
              }`}
            >
              <img
                src={trailer.thumbnail}
                alt={trailer.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${trailer.id}/0.jpg`;
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-red-600/90 flex items-center justify-center">
                  <HiPlay className="text-white text-xl ml-1" />
                </div>
              </div>

              {/* Movie Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-2">
                <p className="text-white text-xs md:text-sm font-medium line-clamp-2">
                  {trailer.title}
                </p>
              </div>
            </button>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TrailerSection;