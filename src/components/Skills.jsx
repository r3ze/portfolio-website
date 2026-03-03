import { motion } from 'framer-motion';
import { skills } from '../data/skills';
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

function SkillBar({ name, level, color, delay }) {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
          {name}
        </span>
        <span className="text-xs font-mono text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
        >
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-lg"
            style={{ background: color, boxShadow: `0 0 6px ${color}` }}
          />
        </motion.div>
      </div>
    </div>
  );
}

function SkillCard({ category, color, items, cardDelay }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: cardDelay }}
      className="relative group rounded-2xl border border-white/8 overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.02)',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${color}08, transparent 70%)` }}
      />

      <div className="p-6">
        {/* Category header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
          <h3 className="text-base font-semibold text-text-primary">{category}</h3>
          <div className="ml-auto text-xs font-mono text-text-muted">
            {items.length} skills
          </div>
        </div>

        {/* Skill bars */}
        <div className="space-y-4">
          {items.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={color}
              delay={cardDelay + i * 0.08}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-bg-primary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <SectionLabel>skills.map()</SectionLabel>
          <h2 className="text-4xl font-bold text-text-primary">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
              Skills
            </span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <SkillCard
              key={group.category}
              {...group}
              cardDelay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
