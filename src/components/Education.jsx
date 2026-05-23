import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const certifications = [
  { title: 'Google Product Management', issuer: 'Google (In Progress)', icon: '📦' },
  { title: 'Software Project Management', issuer: 'Alison', icon: '📋' },
  { title: 'Agile and Scrum Fundamentals', issuer: 'Certification Program', icon: '🔄' },
  { title: 'Full Stack Python Development', issuer: 'Technical Certification', icon: '🐍' },
  { title: 'TEK RO & TEK WIZARD', issuer: 'Robotics Research Institution · 2017', icon: '🤖' },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 notebook-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#9333ea] opacity-70">— academic journey —</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Education</h2>
        </motion.div>

        {/* Education Card */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="glass-card p-8 mb-16">
          <div className="flex flex-wrap items-start gap-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, rgba(205,180,219,0.3), rgba(232,213,245,0.4))' }}>
              <GraduationCap size={28} style={{ color: '#9333ea' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="section-title text-2xl">Anna University</h3>
                <span className="font-mono text-xs px-3 py-1 rounded-full"
                  style={{ background: 'rgba(205,180,219,0.2)', border: '1px solid rgba(205,180,219,0.4)', color: '#7e22ce' }}>
                  2021 – 2025
                </span>
              </div>
              <p className="font-body font-medium text-[#9333ea] mb-3">
                Bachelor of Engineering — Computer Science Engineering
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="font-mono text-xs text-[#9c8aaf] uppercase tracking-wide mb-0.5">CGPA</p>
                  <p className="section-title text-3xl font-bold" style={{ color: '#CDB4DB' }}>80.9%</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#9c8aaf] uppercase tracking-wide mb-1">Focus Areas</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {['AI/ML', 'Full Stack Dev', 'Product Management', 'Agile/Scrum', 'Data Management'].map((t) => (
                      <span key={t} className="skill-tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award size={18} style={{ color: '#CDB4DB' }} />
            <h3 className="section-title text-2xl">Certifications &amp; Achievements</h3>
          </div>
          <p className="font-body text-sm text-[#9c8aaf]">Continuous learning &amp; professional growth</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div key={cert.title} initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }}
              className="cert-badge p-5 flex items-center gap-4">
              <span className="text-2xl flex-shrink-0">{cert.icon}</span>
              <div>
                <p className="font-body font-semibold text-sm text-[#2d1b4e]">{cert.title}</p>
                <p className="font-body text-xs text-[#9c8aaf] mt-0.5">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Communication note */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 glass-card p-5 flex items-center gap-4">
          <span className="text-2xl">🌍</span>
          <div>
            <p className="font-body font-semibold text-sm text-[#2d1b4e]">Languages &amp; Communication</p>
            <p className="font-body text-xs text-[#9c8aaf] mt-0.5">
              Fluent in English · Expert in cross-functional synergy for global EMEA/US teams
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
