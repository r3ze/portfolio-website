import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail, MapPin, Phone, Github, Linkedin, Twitter,
  Send, CheckCircle, AlertCircle, ExternalLink,
} from 'lucide-react';
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

const socialConfig = [
  { key: 'github', Icon: Github, label: 'GitHub' },
  { key: 'linkedin', Icon: Linkedin, label: 'LinkedIn' },
  { key: 'twitter', Icon: Twitter, label: 'Twitter' },
];

// Simple mailto-based form — no backend needed
export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || `Portfolio contact from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    try {
      window.location.href = mailtoLink;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const contactDetails = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, label: 'Location', value: profile.location },
    ...(profile.phone ? [{ icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` }] : []),
  ];

  return (
    <section id="contact" className="py-24 bg-bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <SectionLabel>contact.send()</SectionLabel>
          <h2 className="text-4xl font-bold text-text-primary">
            Get in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
              Touch
            </span>
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl">
            Have a project in mind, a job opportunity, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/6 hover:border-accent-cyan/20 transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent-cyan" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-mono">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-text-primary hover:text-accent-cyan transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm text-text-primary">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-text-muted mb-4 font-mono">// find me on</p>
              <div className="flex gap-3 flex-wrap">
                {socialConfig.map(({ key, Icon, label }) =>
                  profile.social[key] ? (
                    <a
                      key={key}
                      href={profile.social[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/8 text-text-secondary hover:border-accent-cyan/30 hover:text-accent-cyan transition-all duration-200 text-sm"
                    >
                      <Icon size={16} />
                      {label}
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  ) : null
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl border border-white/6 space-y-4"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-text-muted font-mono mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/3 border border-white/8 rounded-xl text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-cyan/40 focus:bg-white/5 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-muted font-mono mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/3 border border-white/8 rounded-xl text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-cyan/40 focus:bg-white/5 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-text-muted font-mono mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-white/3 border border-white/8 rounded-xl text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-cyan/40 focus:bg-white/5 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs text-text-muted font-mono mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-4 py-3 bg-white/3 border border-white/8 rounded-xl text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-cyan/40 focus:bg-white/5 transition-all duration-200 resize-none"
                />
              </div>

              {/* Status message */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm p-3 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
                  <CheckCircle size={16} />
                  Your email client has been opened with the message. Send it from there!
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-lg bg-red-400/10 border border-red-400/20">
                  <AlertCircle size={16} />
                  Something went wrong. Please email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 transition-all duration-300 hover:-translate-y-0.5 shadow-glow-sm hover:shadow-glow-cyan"
              >
                <Send size={16} />
                {sending ? 'Opening...' : 'Send Message'}
              </button>

              <p className="text-center text-xs text-text-muted">
                This will open your email client with the message pre-filled.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
