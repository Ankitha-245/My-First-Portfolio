import React from 'react';
import { Mail, Sparkles, ArrowUp } from 'lucide-react';
import { profileData, navItems } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const currentYear = 2026;

export const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#080A0F] border-t border-white/[0.08] text-gray-400 text-xs py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Logo & Intro */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#0B0D13] rounded-[7px] flex items-center justify-center">
                  <span className="font-display font-bold text-sm text-cyan-300">A</span>
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wide">
                {profileData.name}
              </span>
            </div>
            <p className="text-gray-400 text-xs max-w-sm">
              AI &amp; Machine Learning Student • Aspiring Developer • Data Enthusiast
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-400 hover:text-cyan-300 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              aria-label="Email Ankitha"
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-gray-400 hover:text-violet-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 text-violet-300 hover:text-white transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and motto */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-gray-500 text-[11px]">
          <div>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Curiosity, code, and continuous learning.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
