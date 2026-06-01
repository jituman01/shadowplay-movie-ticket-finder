'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { LogOut, Search, Menu, X } from 'lucide-react'; 
import { signOut, useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleLogOut = async () => {
    await signOut();
    router.push('/');
  };

  return (
    <nav className="fixed w-full z-50 flex items-center justify-between px-10 py-6 text-white">
      <div className="flex items-center">
  <Link href="/" className="flex items-center">
    <Image
      src="/assets/shadowplay-logo.png"
      alt="ShadowPlay Logo"
      width={100}
      height={30}
      priority
      className="h-10 w-auto"
    />

    <span className="text-2xl font-bold tracking-tight text-white">
      hadowPlay
    </span>
  </Link>
</div>

      <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
        <Link href="/" className="hover:text-red-500 transition">Home</Link>
        <Link href="/movies" className="hover:text-red-500 transition">Movies</Link>
        <Link href="/theatres" className="hover:text-red-500 transition">Theatres</Link>
        <Link href="/releases" className="hover:text-red-500 transition">Releases</Link>
        <Link href="/favorites" className="hover:text-red-500 transition">Favorites</Link>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Search className="w-6 h-6 cursor-pointer hover:text-red-500 transition" />
        
        {!isPending && !session ? 
          <>
            <Link href="/login" className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-medium transition">Log In</Link>
            <Link href="/register" className="text-white hover:text-red-600 font-medium transition">Register</Link>
          </>
         : 
          <div className="relative group flex gap-2">
              <div>               
                <Avatar>
                <Avatar.Image alt="John Doe" src={session?.user?.image} />
               <Avatar.Fallback>{session?.user?.name?.charAt(0) }</Avatar.Fallback>
               </Avatar>             
                  </div>
                  
              <div>
                <button variant='outline'
                onClick={handleLogOut}  className="px-4 py-2 text-sm  hover:bg-red-50 flex items-center gap-3  text-left cursor-pointer border rounded-full">
                  <LogOut className="w-4 h-4 cursor-pointer" /> Log Out
                </button>
              </div>
              
            </div>
        }
      </div>

      {/* Hamburger Icon */}
      <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/95 p-6 flex flex-col gap-4 md:hidden border-b border-gray-800">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/movies" onClick={() => setIsMenuOpen(false)}>Movies</Link>
          <Link href="/theatres" onClick={() => setIsMenuOpen(false)}>Theatres</Link>
          {!session ? (
            <>
              <Link href="/login" onClick={() => setIsMenuOpen(false)} className="text-red-500 font-bold">Log In</Link>
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
            </>
          ) : (
            <button onClick={handleLogOut} className="text-left text-red-500">Log Out</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;