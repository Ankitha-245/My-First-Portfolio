import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ type: 'info' | 'success'; text: string } | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 3000);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email format.';
    }
    if (!formData.message.trim()) errors.message = 'Please write a message.';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Confetti celebration
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#8B5CF6', '#06B6D4', '#FFFFFF'],
      });
    } catch {
      // Confetti fallback
    }

    // Build mailto query to honestly use the client's email client
    const mailSubject = encodeURIComponent(
      formData.subject ? `[Portfolio Contact] ${formData.subject}` : `[Portfolio Contact] Message from ${formData.name}`
    );
    const mailBody = encodeURIComponent(
      `Hi Ankitha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${profileData.email}?subject=${mailSubject}&body=${mailBody}`;

    setStatusMessage({
      type: 'info',
      text: 'Opening your default email client with your message pre-filled. You can also contact directly using the details on the left.',
    });

    // Trigger mailto
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B0D13] tech-grid-bg border-t border-white/[0.04]">
      {/* Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-400">Connect</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Have an internship opportunity, a project idea, or a reason to collaborate? I'd love to connect and continue learning through meaningful technical work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121522]/90 border border-white/[0.08] backdrop-blur-md shadow-xl">
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Direct Contact Information
              </h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect with me on LinkedIn and GitHub.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 transition-all flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-violet-400" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Email Address</span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profileData.email, 'email')}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors shrink-0"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Phone Number</span>
                      <a
                        href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profileData.phone, 'phone')}
                    title="Copy Phone"
                    className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors shrink-0"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Location</span>
                    <span className="text-xs sm:text-sm font-medium text-white">
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider block mb-3">
                  Professional Profiles:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-500/40 text-xs font-medium text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    LinkedIn
                  </a>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-violet-500/40 text-xs font-medium text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-violet-400" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121522]/90 border border-white/[0.08] backdrop-blur-md shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white font-display">
                  Send a Message
                </h3>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-2 py-0.5 rounded">
                  Open for Opportunities
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-6">
                Fill in your message below. Clicking send will open your email client pre-filled with this message.
              </p>

              {statusMessage && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-cyan-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border ${
                        formErrors.name ? 'border-red-400' : 'border-white/[0.1]'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-red-400 mt-1 block">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border ${
                        formErrors.email ? 'border-red-400' : 'border-white/[0.1]'
                      } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-red-400 mt-1 block">{formErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Subject / Reason
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship opportunity, collaboration, or question"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Ankitha, I came across your portfolio and would like to discuss..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border ${
                      formErrors.message ? 'border-red-400' : 'border-white/[0.1]'
                    } text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-red-400 mt-1 block">{formErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-gray-500">
                    Transparent mailto client dispatch • No simulated or hidden database submission
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-medium text-sm shadow-lg shadow-violet-600/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
