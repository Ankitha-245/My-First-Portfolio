import React from 'react';
import { Code2, Globe, Database, Cpu, CheckCircle2, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-violet-400" />,
  Globe: <Globe className="w-5 h-5 text-cyan-400" />,
  Database: <Database className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#0B0D13] tech-grid-bg border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Technologies &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">Skills</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Organized around practical applications in machine learning, exploratory data analysis, and software development.
          </p>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#121522]/80 border border-white/[0.08] hover:border-violet-500/40 backdrop-blur-md transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-violet-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    {categoryIcons[category.iconName]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-xl border transition-all duration-200 group ${
                        skill.highlight
                          ? 'bg-violet-950/20 border-violet-500/30 hover:border-violet-400/60'
                          : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300">
                            Key
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-gray-400 leading-snug">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-[11px] text-gray-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500/70 shrink-0" />
                <span>Applied through academic projects &amp; continuous coursework</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
