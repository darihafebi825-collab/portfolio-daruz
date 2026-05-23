import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Cpu, Briefcase, Globe } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'B.E. Computer Science', sub: 'Anna University · CGPA 80.9%' },
  { icon: Cpu, label: 'AI/ML Developer', sub: 'OpenCV · MediaPipe · Python' },
  { icon: Briefcase, label: 'Product Coordinator', sub: 'Agile · Scrum · JIRA · Trello' },
  { icon: Globe, label: 'Full Stack Engineer', sub: 'React.js · Node.js · REST APIs' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 notebook-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#9333ea] opacity-70">— who i am —</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="glass-card p-8">
              <p className="font-body text-[#4a3a5e] leading-relaxed text-[0.97rem] mb-5">
                Aspiring Product Manager Intern with hands-on experience in SaaS product coordination,
                Agile execution, and AI-powered application development. Strong foundation in software
                engineering with practical exposure to sprint planning, stakeholder management, and
                cross-functional team coordination.
              </p>
              <p className="font-body text-[#6b5a7e] leading-relaxed text-[0.92rem] mb-5">
                Passionate about building user-centric AI and SaaS products with measurable impact.
                Fluent in English and experienced in cross-functional synergy for global EMEA/US teams.
              </p>
              <div className="flex items-center gap-1.5 text-sm font-body mb-6" style={{ color: '#9c8aaf' }}>
                <MapPin size={14} />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a href="https://github.com/darihafebi825-collab" target="_blank" rel="noopener noreferrer" className="outline-btn px-4 py-2 text-sm">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dariha-febi-mol-a-b651303bb/" target="_blank" rel="noopener noreferrer" className="outline-btn px-4 py-2 text-sm">LinkedIn ↗</a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div key={h.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }} className="glass-card p-5 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(205,180,219,0.2)' }}>
                  <h.icon size={18} style={{ color: '#9333ea' }} />
                </div>
                <div>
                  <p className="font-body font-semibold text-[#2d1b4e] text-sm">{h.label}</p>
                  <p className="font-body text-[#9c8aaf] text-xs mt-0.5">{h.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
