import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    title: 'E-Card Creator & Sharing Platform',
    emoji: '🎴',
    description: 'A customizable digital greeting card platform where users can create, edit, and send personalized e-cards.',
    problem: 'Existing greeting apps lacked personalization options and felt generic.',
    solution: 'Built an editable platform allowing custom text, design choices, and unique layouts for every card.',
    features: ['Custom card designer', 'Real-time preview', 'Shareable links', 'Multiple templates', 'Download as image'],
    tech: ['React', 'Node.js', 'CSS', 'HTML Canvas'],
    github: 'https://github.com/darihafebi825-collab/E-INVITE',
    demo: null,
    status: 'Completed',
    statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Movie Rater App',
    emoji: '🎬',
    description: 'Recommends movies based on ratings and shared preferences among users.',
    problem: 'Users waste time and money on movies that don\'t match their taste.',
    solution: 'Built a collaborative recommendation system using user ratings and preference matching.',
    features: ['Rating-based recommendations', 'User preference matching', 'Movie database', 'Search & filter', 'Watchlist'],
    tech: ['Python', 'React', 'MongoDB', 'Node.js'],
    github: 'https://github.com/darihafebi825-collab/MOVIE-RATER',
    demo: null,
    status: 'Completed',
    statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'AI-Powered Yoga Pose Detector',
    emoji: '🧘',
    description: 'Real-time AI posture detection app for guided home yoga practice.',
    problem: 'People needed accessible home-based fitness solutions with proper guidance.',
    solution: 'Built real-time posture detection and correction feedback using computer vision.',
    features: ['Real-time pose detection', 'Posture correction feedback', 'Multiple yoga poses', 'Accuracy scoring', 'Beginner-friendly UI'],
    tech: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe', 'React'],
    github: 'https://github.com/darihafebi825-collab/AIYOGATRAINER',
    demo: null,
    status: 'Completed',
    statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Arrival Alert',
    emoji: '🚌',
    description: 'Smart bus/train reminder app that notifies passengers before their stop.',
    problem: 'Passengers frequently miss their stop due to distractions or falling asleep.',
    solution: 'Users set customizable arrival reminders using GPS-based location tracking.',
    features: ['GPS-based alerts', 'Customizable reminder radius', 'Multiple route support', 'Push notifications', 'Offline mode'],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Geolocation API'],
    github: null,
    demo: null,
    status: 'In Progress',
    statusColor: 'text-amber-600 bg-amber-50 border-amber-200',
  },
];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="glass-card overflow-hidden"
    >
      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{project.emoji}</span>
            <div>
              <h3 className="section-title text-lg font-semibold">{project.title}</h3>
              <span
                className={`inline-block mt-1 text-xs font-body font-medium px-2.5 py-0.5 rounded-full border ${project.statusColor}`}
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>

        <p className="font-body text-[#6b5a7e] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Expandable */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="border-t pt-5 mb-5" style={{ borderColor: 'rgba(205,180,219,0.25)' }}>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <p className="font-body font-semibold text-xs uppercase tracking-wide mb-2" style={{ color: '#9c8aaf' }}>
                      Problem
                    </p>
                    <p className="font-body text-sm text-[#6b5a7e] leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-xs uppercase tracking-wide mb-2" style={{ color: '#9c8aaf' }}>
                      Solution
                    </p>
                    <p className="font-body text-sm text-[#6b5a7e] leading-relaxed">{project.solution}</p>
                  </div>
                </div>
                <div>
                  <p className="font-body font-semibold text-xs uppercase tracking-wide mb-2.5" style={{ color: '#9c8aaf' }}>
                    Key Features
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#CDB4DB' }} />
                        <span className="font-body text-sm text-[#6b5a7e]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex gap-2.5">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-btn px-4 py-2 text-xs flex items-center gap-1.5"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={13} />
                GitHub
              </motion.a>
            )}
            {project.demo ? (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="lavender-btn px-4 py-2 text-xs flex items-center gap-1.5"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={13} />
                Live Demo
              </motion.a>
            ) : (
              <span
                className="text-xs font-body px-3 py-2 rounded-full"
                style={{ color: '#9c8aaf', background: 'rgba(205,180,219,0.1)' }}
              >
                Demo coming soon
              </span>
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-body font-medium transition-colors"
            style={{ color: '#9333ea' }}
          >
            {expanded ? (
              <><ChevronUp size={14} /> Less</>
            ) : (
              <><ChevronDown size={14} /> Details</>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: '#f9f5ff' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-[#9333ea] opacity-70">
            — what i've built —
          </span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
