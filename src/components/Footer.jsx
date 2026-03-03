import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

const socialIcons = { github: Github, linkedin: Linkedin, twitter: Twitter };

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  const socials = Object.entries(profile.social).filter(([key, url]) => url && socialIcons[key]);

  return (
    <footer className="relative bg-bg-primary border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center text-white font-bold text-xs">
              {profile.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="text-sm font-semibold text-text-primary">{profile.name}</div>
              <div className="text-xs text-text-muted">{profile.title}</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <span>© {year} {profile.name}. Built with</span>
            <Heart size={12} className="text-accent-pink fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>

          {/* Social + scroll to top */}
          <div className="flex items-center gap-3">
            {socials.map(([key, url]) => {
              const Icon = socialIcons[key];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              );
            })}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/8 text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-200"
              >
                <Mail size={14} />
              </a>
            )}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan hover:bg-accent-cyan/20 transition-all duration-200"
              title="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
