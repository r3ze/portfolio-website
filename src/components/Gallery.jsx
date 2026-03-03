import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Images } from 'lucide-react';
import { gallery, galleryCategories } from '../data/gallery';
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

function Lightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] w-full"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain rounded-xl"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
                <p className="text-text-primary text-sm text-center">{image.caption}</p>
              </div>
            )}
            <button
              onClick={onClose}
              className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center rounded-full bg-bg-primary border border-white/10 text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={16} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function GalleryItem({ item, index, onClick }) {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={() => onClick(item)}
      className={`group relative cursor-pointer rounded-xl overflow-hidden border border-white/6 hover:border-accent-cyan/30 transition-all duration-300 ${
        item.span === 'wide' ? 'col-span-2' : 'col-span-1'
      } ${item.span === 'tall' ? 'row-span-2' : 'row-span-1'}`}
      style={{ minHeight: '180px' }}
    >
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ minHeight: '180px', maxHeight: item.span === 'tall' ? '400px' : '220px' }}
        />
      ) : (
        <div
          className="w-full flex items-center justify-center bg-white/3"
          style={{ minHeight: '180px', maxHeight: item.span === 'tall' ? '400px' : '220px' }}
        >
          <Images size={40} className="text-text-muted opacity-30" />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-xs font-medium">{item.caption}</p>
        {item.category && (
          <span className="text-white/60 text-xs">{item.category}</span>
        )}
      </div>

      {/* Zoom icon */}
      <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn size={14} />
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const { ref, isInView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-bg-primary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <SectionLabel>gallery.render()</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold text-text-primary">
                My{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
                  Gallery
                </span>
              </h2>
              <p className="text-text-secondary mt-3">
                Moments, events, and memories captured along the way.
              </p>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-sm rounded-full border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-accent-cyan/20 border-accent-cyan/40 text-accent-cyan'
                      : 'border-white/10 text-text-secondary hover:border-white/20 hover:text-text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[180px]"
          >
            {filtered.map((item, i) => (
              <GalleryItem
                key={item.id}
                item={item}
                index={i}
                onClick={setLightbox}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <Images size={48} className="mx-auto mb-4 opacity-30" />
            <p>No images in this category yet.</p>
          </div>
        )}
      </div>

      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </section>
  );
}
