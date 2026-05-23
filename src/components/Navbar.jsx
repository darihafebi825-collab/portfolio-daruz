import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(205,180,219,0.2)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            className="font-display text-xl font-semibold text-[#2d1b4e] tracking-tight"
            whileHover={{ scale: 1.03 }}
          >
            <span style={{ color: '#CDB4DB' }}>D</span>aruz
            <span className="font-light text-[#9c8aaf]"> .</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="lavender-btn px-5 py-2 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-[#7e22ce] hover:bg-purple-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-4 right-4 z-40 glass-card p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-body text-[#6b5a7e] font-medium py-2 border-b border-purple-50 last:border-0 hover:text-[#7e22ce] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="lavender-btn px-5 py-2.5 text-sm text-center mt-2"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
