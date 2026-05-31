import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 flex items-center justify-between px-10 py-6 text-white">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold tracking-tight">
        <span className="text-red-500 text-3xl">S</span>hadowPlay
      </Link>

      <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
        <Link href="/" className="hover:text-red-500 transition">
          Home
        </Link>
        <Link href="/movies" className="hover:text-red-500 transition">
          Movies
        </Link>
        <Link href="/theatres" className="hover:text-red-500 transition">
          Theatres
        </Link>
        <Link href="/releases" className="hover:text-red-500 transition">
          Releases
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <Search className="w-6 h-6 cursor-pointer hover:text-red-500 transition" />
        <Link 
          href="/login" 
          className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-medium transition"
        >
          Log In
        </Link>
        <Link 
          href="/register" 
          className="text-white hover:text-red-600 font-medium transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;