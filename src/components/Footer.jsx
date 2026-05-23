import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-6 border-t"
      style={{ background: 'rgba(253,250,255,0.95)', borderColor: 'rgba(205,180,219,0.2)' }}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center md:text-left">
          <p className="font-display text-lg font-semibold text-[#2d1b4e]">
            <span style={{ color: '#CDB4DB' }}>D</span>ariha Febi Mol
          </p>
          <p className="font-body text-xs text-[#9c8aaf] mt-1">
            Aspiring Product Manager · AI/ML Developer · Full Stack Engineer
          </p>
        </motion.div>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/darihafebi825-collab', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/dariha-febi-mol-a-b651303bb/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:darihafebi825@gmail.com', label: 'Email' },
          ].map((s) => (
            <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              whileHover={{ scale: 1.15, y: -2 }}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(205,180,219,0.15)', border: '1px solid rgba(205,180,219,0.3)', color: '#9333ea' }}>
              <s.icon size={15} />
            </motion.a>
          ))}
        </div>

        <p className="font-body text-xs text-[#9c8aaf] flex items-center gap-1">
          © 2025 Made with <Heart size={11} className="text-pink-300 mx-0.5 fill-pink-300" /> by Dariha
        </p>
      </div>
    </footer>
  );
}
