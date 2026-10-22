import React, { useState, useEffect } from 'react';
import { X, Printer, Download, Copy, Check, FileText, ExternalLink, MapPin } from 'lucide-react';
import { profileData, educationData, experienceData, projectsData, skillCategories, certificationsData, languagesData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
ANKITHA
Mangaluru, Karnataka, India | Phone: ${profileData.phone} | Email: ${profileData.email}
LinkedIn: ${profileData.linkedin} | GitHub: ${profileData.github}

CAREER OBJECTIVE:
${profileData.bioIntro}

EDUCATION:
${educationData
  .map(
    (e) => `• ${e.institution} - ${e.degree} (${e.period}) - ${e.gradeType}: ${e.grade} - ${e.location}`
  )
  .join('\n')}

TECHNICAL SKILLS:
${skillCategories
  .map(
    (cat) =>
      `• ${cat.title}: ${cat.skills.map((s) => `${s.name} (${s.context})`).join(', ')}`
  )
  .join('\n')}

INTERNSHIP:
${experienceData
  .map(
    (exp) =>
      `• ${exp.company} - ${exp.role} (${exp.duration})\n  Responsibilities:\n${exp.responsibilities
        .map((r) => `  - ${r}`)
        .join('\n')}`
  )
  .join('\n\n')}

PROJECTS:
${projectsData
  .map(
    (p) =>
      `• ${p.title} (${p.category})\n  Technologies: ${p.technologies.join(', ')}\n  Description: ${p.description}\n  Objective: ${p.objective}`
  )
  .join('\n\n')}

CERTIFICATIONS:
${certificationsData.map((c) => `• ${c.title} — ${c.provider}`).join('\n')}

LANGUAGES:
${languagesData.map((l) => `• ${l.name} (${l.proficiency})`).join(', ')}
`.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-4xl bg-[#0F121C] border border-white/[0.12] rounded-3xl shadow-2xl shadow-violet-950/60 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-left"
      >
        {/* Header toolbar */}
        <div className="px-6 py-4 bg-[#141824] border-b border-white/[0.08] flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-display font-bold text-white text-sm sm:text-base">
              Resume Preview — {profileData.name}
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href="/Ankitha.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Ankitha.pdf"
              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Download Official PDF
            </a>

            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white text-xs font-medium border border-white/[0.08] flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Copied Text!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Text
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume"
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B0D13]">
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/[0.1]">
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-wide mb-2">
              {profileData.name}
            </h1>
            <p className="text-cyan-300 text-sm font-medium mb-3">
              {profileData.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {profileData.location}
              </span>
              <span>•</span>
              <a href={`mailto:${profileData.email}`} className="text-gray-300 hover:text-white">
                {profileData.email}
              </a>
              <span>•</span>
              <a href={`tel:${profileData.phone}`} className="text-gray-300 hover:text-white">
                {profileData.phone}
              </a>
            </div>
            <div className="flex justify-center gap-4 mt-2 text-xs">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-cyan-300 underline underline-offset-2 flex items-center gap-1"
              >
                LinkedIn Profile <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-300 hover:text-cyan-300 underline underline-offset-2 flex items-center gap-1"
              >
                GitHub Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2 border-b border-white/[0.08] pb-1">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {profileData.bioIntro}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 border-b border-white/[0.08] pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {educationData.map((e) => (
                <div key={e.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white">
                    <span>{e.institution}</span>
                    <span className="text-gray-400 text-xs font-normal">{e.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-300 mt-0.5">
                    <span className="text-violet-300">{e.degree}</span>
                    <span className="text-cyan-300 font-medium">{e.gradeType}: {e.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 border-b border-white/[0.08] pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <span className="font-semibold text-white block mb-1">{cat.title}:</span>
                  <span className="text-gray-300">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Experience / Internship */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 border-b border-white/[0.08] pb-1">
              Internship
            </h2>
            {experienceData.map((exp) => (
              <div key={exp.id} className="text-xs sm:text-sm mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-white">
                  <span>{exp.company} — {exp.role}</span>
                  <span className="text-gray-400 text-xs font-normal">{exp.duration}</span>
                </div>
                <ul className="mt-2 space-y-1.5 list-disc list-inside text-gray-300 text-xs">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 border-b border-white/[0.08] pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map((p) => (
                <div key={p.id} className="text-xs sm:text-sm">
                  <div className="font-semibold text-white">
                    {p.title}
                  </div>
                  <div className="text-cyan-300 text-xs mb-1 font-mono">
                    Technologies: {p.technologies.join(', ')}
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3 border-b border-white/[0.08] pb-1">
              Certifications
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              {certificationsData.map((c) => (
                <li key={c.id} className="flex items-start gap-1.5">
                  <span className="text-cyan-400">•</span>
                  <span><strong>{c.title}</strong> — {c.provider}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2 border-b border-white/[0.08] pb-1">
              Languages
            </h2>
            <p className="text-xs text-gray-300">
              {languagesData.map((l) => `${l.name} (${l.proficiency})`).join(' • ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
