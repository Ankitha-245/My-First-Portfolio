import React from 'react';
import { BrainCircuit, BarChart3, Terminal, Sparkles, MapPin, GraduationCap, Compass } from 'lucide-react';
import { profileData, aboutHighlights } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-violet-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-cyan-400" />,
  Terminal: <Terminal className="w-5 h-5 text-indigo-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-emerald-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0B0D13] tech-grid-bg border-t border-white/[0.04]">
      {/* Decorative side light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            A Little <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">About Me</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Grounded in engineering principles, powered by curiosity, and focused on solving real-world challenges through data and code.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Story Text */}
          <div className="lg:col-span-7 bg-[#121522]/80 border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white font-display">Student &amp; Emerging Technologist</h3>
                <p className="text-xs text-gray-400">A J Institute of Engineering &amp; Technology • Mangaluru</p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              {profileData.aboutStory.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Fact Badges */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[11px] text-gray-400 block mb-0.5">Location</span>
                <span className="text-xs font-semibold text-white flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  Mangaluru, India
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[11px] text-gray-400 block mb-0.5">Degree</span>
                <span className="text-xs font-semibold text-white">B.E. in AI &amp; ML</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] col-span-2 sm:col-span-1">
                <span className="text-[11px] text-gray-400 block mb-0.5">Graduation</span>
                <span className="text-xs font-semibold text-cyan-300">Expected 2027</span>
              </div>
            </div>
          </div>

          {/* 4 Core Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="group p-5 rounded-2xl bg-[#121522]/60 hover:bg-[#161A2B] border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-violet-950/40"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] group-hover:bg-white/[0.08] border border-white/[0.08] flex items-center justify-center mb-4 transition-colors">
                  {iconMap[highlight.icon]}
                </div>
                <h4 className="text-base font-semibold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
