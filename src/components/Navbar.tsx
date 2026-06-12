import React from 'react';

export default function Navbar() {
  return (
    <nav className="h-20 border-b border-[#1A1A1A]/10 px-12 flex justify-between items-center bg-[#F9F7F2]">
      <div className="text-2xl font-bold italic tracking-tighter text-[#1A1A1A]">WebBuild.</div>
      <div className="flex space-x-8 text-xs font-semibold tracking-widest uppercase text-[#1A1A1A]">
        <a href="#portfolio" className="opacity-40 hover:opacity-100">Portfolio</a>
        <a href="#book" className="opacity-40 hover:opacity-100">Book Now</a>
      </div>
    </nav>
  );
}
