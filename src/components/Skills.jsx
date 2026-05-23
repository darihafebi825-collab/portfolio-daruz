import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Software Engineering',
    emoji: '⚙️',
    skills: ['Python', 'C#', '.NET Core', 'SQL', 'PostgreSQL'],
  },
  {
    title: 'Web Development',
    emoji: '🌐',
    skills: ['React.js', 'Node.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'REST APIs'],
  },
  {
    title: 'Project Management',
    emoji: '📋',
    skills: ['Agile/Scrum', 'Sprint Planning', 'SDLC', 'Risk Tracking', 'JIRA', 'Trello', 'Gantt Charts'],
  },
  {
    title: 'AI / ML Operations',
    emoji: '🧠',
    skills: ['OpenCV', 'MediaPipe', 'AI Chatbot Workflows', 'Product Coordination'],
  },
  {
    title: 'Engineering Tools',
    emoji: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Microsoft Excel'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: '#f9f5ff' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#9333ea] opacity-70">— what i know —</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Skills</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, ci) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: ci * 0.08 }}
              whileHover={{ y: -5 }} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="font-display text-lg font-semibold" style={{ color: '#2d1b4e' }}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ delay: ci * 0.08 + si * 0.05 }}
                    whileHover={{ scale: 1.06 }} className="skill-tag">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
