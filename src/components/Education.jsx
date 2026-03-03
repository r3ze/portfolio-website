import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, Calendar } from 'lucide-react';
import { education, certifications } from '../data/education';
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

function EducationCard({ item, index }) {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl border hover:border-accent-purple/30 transition-all duration-300"
      style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-purple/0 to-accent-cyan/0 group-hover:from-accent-purple/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 border border-accent-purple/30 flex items-center justify-center shrink-0">
          <GraduationCap size={22} className="text-accent-purple" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-purple transition-colors duration-200 leading-tight">
              {item.degree}
            </h3>
            {item.gpa && (
              <span className="px-2.5 py-1 text-xs font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full shrink-0">
                GPA {item.gpa}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
            {item.schoolUrl ? (
              <a
                href={item.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-accent-purple hover:underline font-medium"
              >
                {item.school}
                <ExternalLink size={12} />
              </a>
            ) : (
              <span className="text-accent-purple font-medium">{item.school}</span>
            )}
            <span className="text-text-muted text-xs">•</span>
            <span className="text-text-muted text-xs flex items-center gap-1">
              <Calendar size={11} />
              {item.startYear} – {item.endYear}
            </span>
            <span className="text-text-muted text-xs">•</span>
            <span className="text-text-muted text-xs">{item.location}</span>
          </div>

          {item.description && (
            <p className="text-text-secondary text-sm leading-relaxed mb-3">
              {item.description}
            </p>
          )}

          {item.achievements?.length > 0 && (
            <ul className="space-y-1">
              {item.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-accent-purple mt-1 shrink-0">▸</span>
                  {ach}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CertCard({ cert, index }) {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <motion.a
      ref={ref}
      href={cert.credentialUrl || '#'}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex items-center gap-4 p-4 rounded-xl border hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-0.5"
      style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="w-9 h-9 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
        <Award size={16} className="text-accent-cyan" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-text-primary group-hover:text-accent-cyan transition-colors duration-200 truncate">
          {cert.title}
        </div>
        <div className="text-xs text-text-muted mt-0.5">
          {cert.issuer} · {cert.date}
        </div>
      </div>
      <ExternalLink size={14} className="text-text-muted group-hover:text-accent-cyan transition-colors duration-200 shrink-0" />
    </motion.a>
  );
}

export default function Education() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="education" className="py-24 bg-bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <SectionLabel>education.find()</SectionLabel>
          <h2 className="text-4xl font-bold text-text-primary">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
              Certifications
            </span>
          </h2>
          <p className="text-text-secondary mt-3">Academic background and continuous learning.</p>
        </motion.div>

        {/* Education cards */}
        <div className="space-y-4 mb-12">
          {education.map((item, i) => (
            <EducationCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-2"
            >
              <Award size={20} className="text-accent-cyan" />
              Certifications
            </motion.h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
