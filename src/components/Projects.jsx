import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, FolderOpen, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
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

const statusConfig = {
  completed: { label: 'Completed', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
  'in-progress': { label: 'In Progress', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
  archived: { label: 'Archived', color: 'text-text-muted', bg: 'bg-white/5 border-white/10' },
};

function ProjectCard({ project, index, featured }) {
  const { ref, isInView } = useScrollAnimation(0.1);
  const status = statusConfig[project.status] || statusConfig.completed;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative rounded-2xl border border-white/8 overflow-hidden flex flex-col hover:border-accent-cyan/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
        featured ? 'lg:col-span-1' : ''
      }`}
      style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {/* Clickable overlay linking to detail page */}
      <Link
        to={`/projects/${project.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${project.title}`}
      />
      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/0 to-accent-purple/0 group-hover:from-accent-cyan/3 group-hover:to-accent-purple/3 transition-all duration-500 pointer-events-none" />

      {/* Project image */}
      <div className="relative h-48 bg-gradient-to-br from-white/3 to-white/1 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FolderOpen size={48} className="text-text-muted opacity-40" />
          </div>
        )}
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-xs font-medium">
            <Star size={10} fill="currentColor" />
            Featured
          </div>
        )}

        {/* Status badge */}
        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-full border text-xs font-medium ${status.bg} ${status.color}`}>
          {status.label}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/8 text-text-secondary rounded-lg hover:border-accent-cyan/30 hover:text-accent-cyan transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="relative z-20 flex items-center gap-3 flex-wrap">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-accent-cyan to-accent-purple text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/10 text-text-secondary rounded-lg hover:border-white/20 hover:text-text-primary transition-all duration-200"
            >
              <Github size={14} />
              GitHub
            </a>
          )}
          <Link
            to={`/projects/${project.id}`}
            className="ml-auto flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-accent-cyan transition-colors duration-200 group/link"
          >
            Details
            <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : [...featured, ...rest].slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <SectionLabel>projects.filter()</SectionLabel>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold text-text-primary">
                My{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
                  Projects
                </span>
              </h2>
              <p className="text-text-secondary mt-3">
                Things I've built — from passion projects to production apps.
              </p>
            </div>
            <span className="text-sm font-mono text-text-muted">
              {projects.length} total
            </span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayed.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} featured={project.featured} />
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll((v) => !v)}
              className="px-8 py-3 border border-white/10 text-text-secondary rounded-xl hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-200 font-medium text-sm"
            >
              {showAll ? 'Show Less' : `Show All ${projects.length} Projects`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
