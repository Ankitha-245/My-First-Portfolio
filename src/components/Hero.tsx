import React from 'react';
import { ArrowRight, FileText, Mail, MapPin, Sparkles, Terminal, Download } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid-bg"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status & Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-6 hover:border-violet-500/40 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-300">
                {profileData.availability}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
                {profileData.name}
              </span>
              <span className="inline-block animate-pulse text-violet-400">.</span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-300/95 font-display mb-3 tracking-wide">
              {profileData.headline}
            </h2>

            {/* Tagline / Supporting Line */}
            <p className="text-base sm:text-lg text-gray-200 font-medium mb-4 italic">
              "{profileData.subheadline}"
            </p>

            {/* Short Supporting Paragraph */}
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mb-8">
              {profileData.bioIntro}
            </p>

            {/* Location & Contact Meta Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs text-gray-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {profileData.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                <Terminal className="w-3.5 h-3.5 text-violet-400" />
                B.E. in AI &amp; ML (2027) • CGPA 8.38
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-violet-600/30 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                Get In Touch
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={onOpenResume}
                  className="px-5 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-gray-300 hover:text-white font-medium text-sm border border-white/[0.08] transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-initial"
                >
                  <FileText className="w-4 h-4 text-violet-400" />
                  View Resume
                </button>
                <a
                  href="/Ankitha.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Ankitha.pdf"
                  title="Download Resume PDF"
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-cyan-400 hover:text-cyan-300 border border-white/[0.08] transition-all duration-300 flex items-center justify-center"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06] w-full">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                Connect Directly:
              </span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 hover:text-cyan-300 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email Ankitha"
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 hover:text-violet-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Abstract AI Graphic / Generative Technology Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Concentric rotating glow rings */}
              <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-dashed border-cyan-500/20 animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-14 rounded-full border border-violet-400/10" />

              {/* Glowing Center Card with Abstract Neural & AI Nodes */}
              <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-b from-[#161A2B] to-[#0E101D] border border-white/10 p-6 shadow-2xl shadow-violet-950/40 flex flex-col justify-between overflow-hidden group hover:border-violet-500/40 transition-all duration-500">
                {/* Background Tech Nodes Visual */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="150" cy="150" r="110" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="150" cy="150" r="70" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
                  
                  {/* Neural Connection Lines */}
                  <line x1="60" y1="90" x2="150" y2="150" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1.5" />
                  <line x1="240" y1="90" x2="150" y2="150" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" />
                  <line x1="90" y1="230" x2="150" y2="150" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1.5" />
                  <line x1="210" y1="230" x2="150" y2="150" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" />

                  {/* Nodes */}
                  <circle cx="60" cy="90" r="5" fill="#8B5CF6" />
                  <circle cx="240" cy="90" r="5" fill="#06B6D4" />
                  <circle cx="90" cy="230" r="5" fill="#A78BFA" />
                  <circle cx="210" cy="230" r="5" fill="#22D3EE" />
                  <circle cx="150" cy="150" r="9" fill="#C4B5FD" className="animate-pulse" />
                </svg>

                {/* Floating Meta Badges inside visual */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-[11px] font-mono text-violet-300">
                    <Sparkles className="w-3 h-3 text-violet-400" />
                    AI &amp; ML
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                </div>

                {/* Center Initials Hologram */}
                <div className="relative z-10 my-auto text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-violet-600/40 via-indigo-600/20 to-cyan-500/40 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg shadow-violet-500/20">
                    <span className="font-display font-extrabold text-3xl text-white tracking-widest drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]">
                      A
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-mono text-cyan-300 tracking-wider">
                    AIML_UNDERGRAD
                  </p>
                </div>

                {/* Bottom stats inside card */}
                <div className="relative z-10 grid grid-cols-2 gap-2 pt-3 border-t border-white/[0.08] text-left">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Graduation</span>
                    <span className="text-xs font-semibold text-white">2027 B.E.</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Domain</span>
                    <span className="text-xs font-semibold text-cyan-300">Data &amp; ML</span>
                  </div>
                </div>
              </div>

              {/* Orbiting micro-cards */}
              <div className="absolute -top-3 -right-2 bg-[#121522]/90 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-lg text-xs hidden sm:flex items-center gap-2 animate-bounce [animation-duration:5s]">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-gray-200 font-medium">Scikit-learn &amp; Pandas</span>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-[#121522]/90 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-lg text-xs hidden sm:flex items-center gap-2 animate-bounce [animation-duration:6s]">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-gray-200 font-medium">Python &amp; SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
