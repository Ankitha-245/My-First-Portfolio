import React, { useState } from 'react';
import { FolderGit2, ArrowRight, Sparkles, BarChart, Car, Code, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#0B0D13] tech-grid-bg border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Applied Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Data science analysis and predictive machine learning models built through rigorous preprocessing and evaluation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#121522]/90 border border-white/[0.08] hover:border-violet-500/40 overflow-hidden backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-950/30"
              >
                {/* Visual Header Artwork (Themed & Abstract) */}
                <div className="relative h-48 w-full bg-gradient-to-br from-[#161B2E] to-[#0D101C] border-b border-white/[0.06] overflow-hidden flex items-center justify-center p-6">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 tech-grid-bg opacity-30" />

                  {/* Geometric Illustration based on project type */}
                  {isFirst ? (
                    /* Supermarket Sales / EDA Graphic */
                    <div className="relative z-10 flex items-center justify-center gap-4">
                      <div className="w-20 h-28 bg-white/[0.03] border border-violet-500/30 rounded-xl p-2.5 flex flex-col justify-end gap-1.5 shadow-lg group-hover:border-violet-400/60 transition-colors">
                        <div className="w-full bg-cyan-400/40 h-8 rounded-sm animate-pulse" />
                        <div className="w-full bg-violet-500/50 h-14 rounded-sm" />
                        <div className="w-full bg-indigo-500/60 h-18 rounded-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                          <BarChart className="w-3.5 h-3.5" />
                          Sales_Trends.eda
                        </div>
                        <div className="px-3 py-1.5 rounded-lg bg-violet-950/40 border border-violet-500/30 text-xs font-mono text-violet-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Outlier_Handling.clean
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Used Car / ML Graphic */
                    <div className="relative z-10 flex items-center justify-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Car className="w-10 h-10 text-cyan-300" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="px-3 py-1.5 rounded-lg bg-violet-950/40 border border-violet-500/30 text-xs font-mono text-violet-300 flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5" />
                          Regression_Model.fit()
                        </div>
                        <div className="px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Price_Estimator.predict()
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0B0D13]/90 border border-white/10 text-gray-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.statusText}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-violet-300 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-white transition-colors group/btn"
                      >
                        <Eye className="w-4 h-4 text-cyan-400" />
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-gray-400">
                          Google Colab Notebook
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
