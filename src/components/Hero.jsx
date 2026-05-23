import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Download, Mail } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="notebook-bg min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(205,180,219,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span
              className="inline-block text-xs font-mono tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{
                background: 'rgba(205,180,219,0.2)',
                border: '1px solid rgba(205,180,219,0.4)',
                color: '#9333ea',
              }}
            >
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="section-title text-5xl md:text-6xl lg:text-7xl leading-tight mb-3"
          >
            Dariha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base font-medium mb-2"
            style={{ color: '#9333ea' }}
          >
            Aspiring Product Manager · AI/ML Developer · Full Stack Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-[#6b5a7e] text-[0.95rem] leading-relaxed mb-6 max-w-lg"
          >
            Aspiring Product Manager with hands-on experience in SaaS product
            coordination, Agile execution, and AI-powered application
            development. Passionate about building user-centric AI and SaaS
            products with measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-4 mb-8 flex-wrap"
          >
            <div
              className="flex items-center gap-1.5 text-sm font-body"
              style={{ color: '#9c8aaf' }}
            >
              <MapPin size={14} />
              <span>Tamil Nadu, India</span>
            </div>

            <a
              href="mailto:darihafebi825@gmail.com"
              className="flex items-center gap-1.5 text-sm font-body transition-colors hover:text-purple-600"
              style={{ color: '#9c8aaf' }}
            >
              <Mail size={14} />
              <span>darihafebi825@gmail.com</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <motion.button
  onClick={() => scrollTo('#projects')}
  className="lavender-btn px-6 py-3 text-sm flex items-center gap-2"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
>
  <Download size={14} />
  Innovative Works
</motion.button>

            <motion.button
              onClick={() => scrollTo('#contact')}
              className="outline-btn px-6 py-3 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={14} />
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 60%, rgba(205,180,219,0.6) 100%)',
                transform: 'scale(1.12)',
                borderRadius: '50%',
              }}
            />

            <div
              className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{
                border: '3px solid rgba(205,180,219,0.5)',
                boxShadow: '0 12px 48px rgba(205,180,219,0.4)',
              }}
            >
              <img
  src="/port.jpeg"
  alt="Dariha"
  className="w-full h-full object-cover"
/>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: 'rgba(205,180,219,0.5)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: '#CDB4DB' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}