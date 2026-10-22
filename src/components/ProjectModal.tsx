import React, { useEffect } from 'react';
import { X, Sparkles, ExternalLink, CheckCircle2, Target, BookOpen, Layers } from 'lucide-react';
import type { ProjectItem } from '../types';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        className="relative w-full max-w-3xl bg-[#121522] border border-white/[0.12] rounded-3xl shadow-2xl shadow-violet-950/50 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
      >
        {/* Header bar with gradient border */}
        <div className="h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400" />

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Top Title & Close Button */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 border border-violet-500/20 text-violet-300 mb-2">
                {project.category}
              </span>
              <h3 id="modal-headline" className="text-2xl sm:text-3xl font-display font-bold text-white">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-cyan-300/90 mt-1">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.08] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Metrics / Key Attributes Pills */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                    {m.label}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Overview
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Objective */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-violet-400" />
              Project Objective
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed bg-[#0E101D] p-4 rounded-xl border border-white/[0.05]">
              {project.objective}
            </p>
          </div>

          {/* Methodology Steps */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Methodology &amp; Implementation Steps
            </h4>
            <ul className="space-y-2.5">
              {project.methodology.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-violet-600/15 text-violet-300 border border-violet-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              Key Learnings &amp; Takeaways
            </h4>
            <div className="space-y-2">
              {project.keyLearnings.map((learning, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs sm:text-sm text-gray-300"
                >
                  {learning}
                </div>
              ))}
            </div>
          </div>

          {/* Action Links & Disclosure */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-white border border-white/[0.1] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub Profile
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              ) : null}

              <span className="text-xs text-gray-400 bg-white/[0.02] px-3 py-1.5 rounded-lg border border-white/[0.04]">
                Academic Project Repository
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-xs font-medium text-white transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
