import React from 'react';
import { MessageSquareQuote, Check } from 'lucide-react';
import { languagesData } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 relative bg-[#0B0D13] tech-grid-bg border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Communication &amp; Multilingual Fluency
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
            Languages <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">I Speak</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Comfortable navigating multilingual communication across technical, regional, and collaborative settings.
          </p>
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {languagesData.map((lang) => (
            <div
              key={lang.name}
              className="p-5 rounded-2xl bg-[#121522]/80 border border-white/[0.08] hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-violet-950/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white font-display">
                    {lang.name}
                  </h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      lang.proficiency === 'Native'
                        ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    }`}
                  >
                    {lang.proficiency}
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {lang.type}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] text-gray-500">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>Active fluency</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
