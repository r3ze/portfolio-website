import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { techBadges } from '../data/skills';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

function TypewriterText({ texts }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
      {displayText}
      <span className="animate-pulse text-accent-cyan">|</span>
    </span>
  );
}

// Animated background orbs
function BackgroundOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute top-1/3 -right-32 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent-pink/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '4s' }}
      />
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-30" />
    </div>
  );
}

export default function Hero() {
  const socials = Object.entries(profile.social).filter(([, url]) => url);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      <BackgroundOrbs />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Available badge */}
        {profile.available && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for work
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink">
            {profile.name}
          </span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-secondary mb-6 h-12"
        >
          <TypewriterText texts={profile.titles} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-text-secondary text-lg max-w-2xl mx-auto mb-8"
        >
          {profile.tagline}
        </motion.p>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono font-medium bg-white/5 border border-white/10 text-text-secondary rounded-full hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold rounded-xl shadow-glow-sm hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-0.5"
          >
            <ExternalLink size={18} />
            View Projects
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 px-8 py-3 border border-white/10 text-text-primary font-semibold rounded-xl hover:bg-white/5 hover:border-accent-cyan/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail size={18} />
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center gap-4 mb-16"
        >
          {socials.map(([platform, url]) => {
            const Icon = socialIcons[platform] || ExternalLink;
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            );
          })}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/40 hover:bg-accent-cyan/5 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors duration-200 mx-auto"
        >
          <span className="text-xs font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
