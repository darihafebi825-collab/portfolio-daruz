import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Lumid AI',
    role: 'React Developer Intern & Project Coordinator',
    period: 'Jan 2026',
    location: 'Remote',
    type: 'Internship',
    achievements: [
      'Orchestrated communication between leads and developers, maintaining high-visibility project trackers that improved task monitoring efficiency by 25%.',
      'Built responsive React UI components for AI chatbot platforms, ensuring 100% timely sprint delivery from Figma designs.',
      'Managed blocker identification and milestone tracking, utilizing AI-augmented tools to optimize the development release cycle.',
    ],
  },
  {
    company: 'M Square Software, Technopark Kerala',
    role: 'AI/ML Developer Intern & Team Lead',
    period: 'Mar 2025 – Jun 2025',
    location: 'Kerala, India',
    type: 'Internship',
    achievements: [
      'Led a 6-member cross-functional team, designing Excel-based sprint milestone and risk trackers that reduced project delays by 15%.',
      'Engineered an AI yoga pose recognition system (Python, OpenCV, MediaPipe) achieving 92% accuracy.',
      'Reported project status and blocker analysis to mentors, ensuring successful enterprise-level project delivery.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 notebook-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#9333ea] opacity-70">— where i've worked —</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Experience</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, #CDB4DB, transparent)' }} />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div key={exp.company} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="md:pl-16 relative">
                <div className="hidden md:flex absolute left-0 top-6 items-center justify-center">
                  <div className="timeline-dot" />
                </div>

                <div className="glass-card p-7 hover:shadow-soft-lg transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} style={{ color: '#CDB4DB' }} />
                        <span className="font-mono text-xs tracking-wide uppercase" style={{ color: '#9c8aaf' }}>
                          {exp.type} · {exp.location}
                        </span>
                      </div>
                      <h3 className="section-title text-xl font-semibold">{exp.company}</h3>
                      <p className="font-body font-medium text-sm mt-0.5" style={{ color: '#9333ea' }}>{exp.role}</p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{ background: 'rgba(205,180,219,0.18)', border: '1px solid rgba(205,180,219,0.35)', color: '#7e22ce' }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {exp.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#CDB4DB' }} />
                        <span className="font-body text-[0.88rem] text-[#6b5a7e] leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
