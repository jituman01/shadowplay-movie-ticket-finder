import React from 'react';
import Image from 'next/image';
import { Calendar, CalendarHeartIcon, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="pt-15 relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-16"
      style={{
        backgroundImage: "url('/assets/backgroundImage.jpg')",
        backgroundColor: "#030303", 
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto pt-24 md:pt-32 pb-16">
        
        {/* Left Side: Text and Button */}
        <div className="flex flex-col justify-center items-start text-white space-y-6 md:space-y-8">
          
          {/* Marvel Studios Logo */}
          <div className="w-24 md:w-32">
            <Image 
              src="/assets/marvelLogo.svg" 
              alt="Marvel Studios Logo" 
              width={128} 
              height={40} 
              className="object-contain"
            />
          </div>

          {/* Movie Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Avengers <br className="hidden md:block" />
            Infinity War
          </h1>

          {/* Details Row */}
          <div className="flex gap-5 text-sm md:text-base text-gray-300">
            <p>Action | Adventure | Sci-Fi</p>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span role="img" aria-label="Calendar Icon"><Calendar className='w-4'/></span>
                2018
              </span>
              <span className="flex items-center gap-2">
                <span role="img" aria-label="Clock Icon"><Clock className='w-4'/></span>
                2h 8m
              </span>
            </div>
          </div>

          {/* Movie Description */}
          <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed">
            ShadowPlay is a sleek, modern, and immersive movie ticket booking platform designed for a premium cinematic experience. Built with a dark, atmospheric interface and glassmorphism elements.
          </p>

          {/* Explore Button */}
          <button className="bg-red-500 hover:bg-red-700 px-8 py-3 rounded-full font-bold transition flex items-center gap-2 text-white text-sm md:text-base cursor-pointer">
            Explore Movies
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4"
            >
                <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Right Side Placeholder */}
        <div className="hidden md:block absolute right-0 bottom-0 top-0 w-1/2">
        </div>
      </div>
    </section>
  );
};

export default Hero;