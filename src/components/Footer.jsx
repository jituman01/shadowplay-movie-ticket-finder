import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Branding & Description */}
        <div className="space-y-6">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-red-500">S</span>hadowPlay
          </div>
          <p className="text-gray-400 max-w-xs leading-relaxed">
            ShadowPlay is your ultimate destination for cinematic experiences. 
            Book tickets for the latest blockbusters with ease and enjoy 
            seamless access to your favorite theaters.
          </p>
          
          {/* Store Buttons with SVG */}
          <div className="flex gap-4">
            <Link href="#">
              <Image 
                src="/assets/googlePlay.svg" 
                alt="Google Play" 
                width={140} 
                height={40} 
                className="cursor-pointer hover:opacity-80 transition" 
              />
            </Link>
            <Link href="#">
              <Image 
                src="/assets/appStore.svg" 
                alt="App Store" 
                width={140} 
                height={40} 
                className="cursor-pointer hover:opacity-80 transition" 
              />
            </Link>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-500 transition">About us</Link></li>
            <li><Link href="/contact" className="hover:text-red-500 transition">Contact us</Link></li>
            <li><Link href="/privacy" className="hover:text-red-500 transition">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <div className="space-y-3 text-gray-400">
            <p>contact@shadowplay.com</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        Copyright 2026 © ShadowPlay. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;