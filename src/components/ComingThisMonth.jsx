'use client';

import React from 'react';
import { CalendarDays } from 'lucide-react';

const upcomingMovies = [
  {
    date: 'JUN 05',
    title: 'Thunderbolts',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200',
  },
  {
    date: 'JUN 12',
    title: 'Fantastic Four',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200',
  },
  {
    date: 'JUN 19',
    title: 'Spider-Man: Beyond',
    image:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200',
  },
  {
    date: 'JUN 26',
    title: 'Avengers: Secret Wars',
    image:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200',
  },
];

const ComingThisMonth = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold tracking-[0.3em] uppercase">
            Upcoming Releases
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Coming This Month
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            The biggest blockbusters arriving this month. Mark your calendar and
            get ready for an unforgettable cinematic experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {upcomingMovies.map((movie, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:-translate-y-3"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Upcoming
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)]"></div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-red-400 text-sm mb-3">
                    <CalendarDays size={16} />
                    {movie.date}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {movie.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Reserve your seats early and be among the first to watch.
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  <div className="absolute inset-0 border border-red-500/30 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingThisMonth;