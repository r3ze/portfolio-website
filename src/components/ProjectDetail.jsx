import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  FolderOpen,
} from 'lucide-react';
import { projects } from '../data/projects';

const statusConfig = {
  completed: { label: 'Completed', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
  'in-progress': { label: 'In Progress', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
  archived: { label: 'Archived', color: 'text-text-muted', bg: 'bg-white/5 border-white/10' },
};

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X size={20} />
      </button>

      {/* Image */}
      <motion.div
        key={current}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-5xl max-h-[85vh] mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`Screenshot ${current + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-xl"
        />

        {/* Counter */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-mono">
          {current + 1} / {images.length}
        </div>
      </motion.div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </motion.div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary flex flex-col items-center justify-center gap-6 text-text-secondary">
        <p className="text-xl">Project not found.</p>
        <Link
          to="/"
          className="flex items-center gap-2 text-accent-cyan hover:underline"
        >
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </div>
    );
  }

  const status = statusConfig[project.status] || statusConfig.completed;
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary antialiased">
      {/* Top gradient bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to projects</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.featured && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan text-xs font-medium">
                <Star size={10} fill="currentColor" />
                Featured
              </span>
            )}
            <span className={`px-3 py-1 rounded-full border text-xs font-medium ${status.bg} ${status.color}`}>
              {status.label}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-5 leading-tight">
            {project.title}
          </h1>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-mono bg-white/5 border border-white/8 text-text-secondary rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent-cyan to-accent-purple text-white rounded-xl hover:opacity-90 transition-opacity duration-200"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-white/10 text-text-secondary rounded-xl hover:border-white/20 hover:text-text-primary transition-all duration-200"
              >
                <Github size={15} />
                View on GitHub
              </a>
            )}
          </div>
        </motion.div>

        {/* Hero image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 rounded-2xl overflow-hidden border border-white/8 cursor-pointer"
            onClick={() => hasImages && setLightboxIndex(0)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[480px] object-contain hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
            <span className="w-1 h-5 rounded-full bg-gradient-to-b from-accent-cyan to-accent-purple" />
            About this project
          </h2>
          <p className="text-text-secondary leading-relaxed text-base">
            {project.longDescription || project.description}
          </p>
        </motion.div>

        {/* Additional images gallery */}
        {hasImages && project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold text-text-primary mb-5 flex items-center gap-3">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-accent-cyan to-accent-purple" />
              Screenshots
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.images.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-xl overflow-hidden border border-white/8 cursor-pointer bg-white/3"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    className="w-full h-48 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty state when no image at all */}
        {!project.image && !hasImages && (
          <div className="mb-12 flex flex-col items-center justify-center py-16 rounded-2xl border border-white/8 text-text-muted">
            <FolderOpen size={48} className="opacity-30 mb-3" />
            <p className="text-sm">No screenshots available yet.</p>
          </div>
        )}

        {/* Bottom divider + back */}
        <div className="border-t border-white/8 pt-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors duration-200 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to all projects</span>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={project.images}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
