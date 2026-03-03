import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { experience } from '../data/experience';
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

const typeColors = {
  'Full-time': 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20',
  'Part-time': 'text-accent-purple bg-accent-purple/10 border-accent-purple/20',
  Freelance: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Internship: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

function TimelineItem({ item, index, isLast }) {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 flex items-center justify-center shrink-0 z-10">
          <Briefcase size={16} className="text-accent-cyan" />
          {item.endDate === 'Present' && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-bg-primary animate-pulse" />
          )}
        </div>
        {/* Connector */}
        {!isLast && (
          <div className="w-px flex-1 mt-2 bg-gradient-to-b from-accent-cyan/30 to-transparent" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-10">
        <div
          className="group p-6 rounded-2xl border hover:border-accent-cyan/20 transition-all duration-300"
          style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-cyan transition-colors duration-200">
                {item.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent-cyan hover:underline font-medium text-sm"
                  >
                    {item.company}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-accent-cyan font-medium text-sm">{item.company}</span>
                )}
              </div>
            </div>
            <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${typeColors[item.type] || typeColors['Full-time']}`}>
              {item.type}
            </span>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-text-muted mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar size={12} />
              {item.startDate} — {item.endDate}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} />
              {item.location}
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            {item.description.split('\n').map((line, i) => (
              line.trim() && (
                <p key={i} className="text-text-secondary text-sm leading-relaxed">
                  {line.trim()}
                </p>
              )
            ))}
          </div>

          {/* Achievements */}
          {item.achievements?.length > 0 && (
            <ul className="mb-4 space-y-1">
              {item.achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-accent-cyan mt-1 shrink-0">▸</span>
                  {a}
                </li>
              ))}
            </ul>
          )}

          {/* Tech stack */}
          {item.tech?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/8 text-text-muted rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-bg-primary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <SectionLabel>experience.sort()</SectionLabel>
          <h2 className="text-4xl font-bold text-text-primary">
            Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
              Experience
            </span>
          </h2>
          <p className="text-text-secondary mt-3">
            My professional journey and the impact I've made.
          </p>
        </motion.div>

        <div>
          {experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
