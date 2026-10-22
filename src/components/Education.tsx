import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#0B0D13] tech-grid-bg border-t border-white/[0.04]">
      {/* Glow effect */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Qualifications</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Verified academic track record demonstrating discipline, high performance, and focused engineering study.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central/left line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-500 opacity-30" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Timeline Node Icon in center */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0B0D13] border-2 border-violet-500 group-hover:border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="w-4 h-4 text-violet-400 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  {/* Empty spacer on one side for alternating desktop layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card on the other side */}
                  <div className="ml-10 sm:ml-0 sm:w-1/2">
                    <div className="p-6 rounded-2xl bg-[#121522]/90 border border-white/[0.08] hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-violet-950/30 group-hover:-translate-y-1">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs font-medium text-gray-300">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/30 text-xs font-bold text-white">
                          <Award className="w-3.5 h-3.5 text-cyan-400" />
                          {item.gradeType}: {item.grade}
                        </span>
                      </div>

                      {/* Degree / Course Title */}
                      <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h3>

                      {/* Institution & Location */}
                      <div className="text-sm text-violet-300/90 font-medium mb-1">
                        {item.institution}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
                        <MapPin className="w-3 h-3 text-gray-500" />
                        {item.location}
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5 text-xs text-gray-300">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
