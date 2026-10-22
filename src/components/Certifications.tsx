import React, { useState } from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const providers = ['All', 'Infosys Springboard', 'Microsoft / Simplilearn', 'Google Cloud / Simplilearn', 'Cisco Networking Academy'];

  const filteredCerts =
    selectedFilter === 'All'
      ? certificationsData
      : certificationsData.filter((c) => c.provider === selectedFilter);

  return (
    <section id="certifications" className="py-24 relative bg-[#0B0D13] tech-grid-bg border-t border-white/[0.04]">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            Skill Validation
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Certifications &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">Continuous Learning</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Verified coursework completed with industry leaders to expand expertise in AI, Python, algorithms, and data tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {providers.map((p) => (
            <button
              key={p}
              onClick={() => setSelectedFilter(p)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedFilter === p
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-500/20'
                  : 'bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#121522]/80 border border-white/[0.08] hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-violet-950/20 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-violet-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  {cert.badge && (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-white/[0.04] text-cyan-300 border border-white/[0.08]">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white font-display mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
              </div>

              {/* Provider Information */}
              <div className="pt-4 border-t border-white/[0.06] mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase tracking-wider">
                    Issued By
                  </span>
                  <span className="text-xs font-medium text-gray-200">
                    {cert.provider}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
