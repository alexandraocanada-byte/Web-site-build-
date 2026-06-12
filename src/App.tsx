import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import BookingForm from './components/BookingForm';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1A1A]">
      <Navbar />
      <main>
        <header className="py-20 px-12 text-center border-b border-[#1A1A1A]/10">
          <h1 className="text-7xl font-light leading-[0.9] tracking-tight mb-8 italic">Premium Websites for Growing Businesses</h1>
          <p className="text-sm text-[#1A1A1A]/70 max-w-lg mx-auto">Let me build you a unique, high-performing website that stands out. Every pixel is handcrafted.</p>
        </header>
        <Portfolio />
        <BookingForm />
      </main>
      <footer className="h-12 flex items-center justify-center text-[9px] font-medium tracking-widest uppercase opacity-60 border-t border-[#1A1A1A]/10">
        &copy; 2026 WebBuild Agency. All rights reserved.
      </footer>
    </div>
  );
}
