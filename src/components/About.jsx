import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Download, User } from 'lucide-react';
import { profile } from '../data/profile';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-accent-cyan font-mono text-sm">{'<'}</span>
      <span className="text-text-muted font-mono text-sm">{children}</span>
      <span className="text-accent-cyan font-mono text-sm">{'/>'}</span>
    </div>
  );
}

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  const infoItems = [
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    ...(profile.phone ? [{ icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` }] : []),
  ];

  return (
    <section id="about" className="py-24 bg-bg-secondary relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel>about.me</SectionLabel>
          <h2 className="text-4xl font-bold text-text-primary mb-12">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar / Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-2xl blur-sm opacity-40" />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                {/* Fallback avatar */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ display: profile.avatar ? 'none' : 'flex' }}
                >
                  <User size={80} className="text-text-muted" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-bg-primary border border-white/10 rounded-xl px-4 py-2 shadow-card">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-text-secondary">
                    {profile.available ? 'Open to work' : 'Not available'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-4 mb-8">
              {profile.bio.split('\n').map((para, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {para.trim()}
                </p>
              ))}
            </div>

            {/* Info grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {infoItems.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/3 border border-white/8 hover:border-accent-cyan/20 transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <Icon size={16} className="text-accent-cyan shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs text-text-muted font-mono">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-text-primary hover:text-accent-cyan transition-colors truncate block">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm text-text-primary truncate">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Download resume */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 text-accent-cyan font-semibold rounded-xl hover:from-accent-cyan/30 hover:to-accent-purple/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
