import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: '', email: '', websiteType: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Booking request sent successfully!');                
      setFormData({ name: '', email: '', websiteType: '', message: '' });
    } else {
      alert('Failed to send booking request.');
    }
  };

  return (
    <section id="book" className="py-16 px-12 max-w-4xl mx-auto">
      <div className="bg-[#1A1A1A] text-[#F9F7F2] p-12">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] mb-12 opacity-50">Secure Your Slot</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-[9px] uppercase tracking-widest mb-1 opacity-60">Full Name</label>
            <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b border-[#F9F7F2]/30 py-1 text-sm outline-none focus:border-[#F9F7F2]" placeholder="Jane Doe" required />
          </div>
          <div>
            <label className="block text-[9px] uppercase tracking-widest mb-1 opacity-60">Email Address</label>
            <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border-b border-[#F9F7F2]/30 py-1 text-sm outline-none focus:border-[#F9F7F2]" placeholder="jane@example.com" required />
          </div>
          <div>
            <label className="block text-[9px] uppercase tracking-widest mb-1 opacity-60">Service Interest</label>
            <select value={formData.websiteType} onChange={e => setFormData({...formData, websiteType: e.target.value})} className="w-full bg-transparent border-b border-[#F9F7F2]/30 py-1 text-sm outline-none focus:border-[#F9F7F2] text-[#F9F7F2]" required>
              <option className="text-black" value="">Select Website Type</option>
              <option className="text-black" value="minimalist">Minimalist Portfolio</option>
              <option className="text-black" value="ecommerce">E-commerce Store</option>
              <option className="text-black" value="service">Service Business Site</option>
            </select>
          </div>
          <div>
            <label className="block text-[9px] uppercase tracking-widest mb-1 opacity-60">Message</label>
            <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border-b border-[#F9F7F2]/30 py-1 text-sm outline-none focus:border-[#F9F7F2]" placeholder="Tell us about your project" required/>
          </div>
          <button type="submit" className="w-full py-4 border border-[#F9F7F2] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#F9F7F2] hover:text-[#1A1A1A] transition-colors">Submit Booking</button>
        </form>
      </div>
    </section>
  );
}
