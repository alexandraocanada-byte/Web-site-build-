import React from 'react';
import { portfolioItems } from '../data';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-12">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-12 opacity-50">Recent Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-[#EAE7E0] border border-[#1A1A1A]/5 p-2 flex flex-col transition-shadow hover:opacity-80">
            <img src={item.image} alt={item.title} className="w-full aspect-[3/4] object-cover mb-4" />
            <div className="p-2">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-1">{item.title}</h3>
              <p className="text-[10px] text-[#1A1A1A]/70 mb-4">{item.description}</p>
              <p className="text-xs font-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
