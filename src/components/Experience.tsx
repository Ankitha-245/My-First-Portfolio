import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0B0D13] tech-grid-bg border-t border-white/[0.04]">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Industry Exposure
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Hands-on internship experience in data preprocessing, exploratory analysis, and visual insight reporting.
          </p>
        </div>

        {/* Experience Card */}
        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative rounded-3xl bg-[#121522]/90 border border-white/[0.08] hover:border-violet-500/40 p-6 sm:p-9 backdrop-blur-md transition-all duration-300 shadow-xl shadow-black/40 group overflow-hidden"
            >
              {/* Decorative accent gradient line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/10 border border-violet-500/30 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <span className="inline-block text-[11px] font-mono font-medium text-cyan-400 uppercase tracking-wider mb-1">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-violet-300 mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-gray-400">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] font-medium text-gray-200">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Key Responsibilities &amp; Contributions:
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-xs font-medium text-gray-400 block mb-2.5">
                  Technologies &amp; Methodologies Applied:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06] hover:border-violet-400/40 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
