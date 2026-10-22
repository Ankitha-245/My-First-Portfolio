import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#121522]/90 border border-violet-500/30 text-white shadow-xl shadow-black/50 backdrop-blur-md hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-600 hover:scale-110 transition-all duration-300 group"
    >
      <ArrowUp className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors" />
    </button>
  );
};
