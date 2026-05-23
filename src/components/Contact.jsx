import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Send } from 'lucide-react';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'darihafebi825@gmail.com',
    href: 'mailto:darihafebi825@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/darihafebi',
    href: 'https://www.linkedin.com/in/darihafebi',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Darihafebi',
    href: 'https://github.com/Darihafebi',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    const text = encodeURIComponent(
      `Hi Dariha,\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/+919894838860?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: '#f9f5ff' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-[#9333ea] opacity-70">— let's connect —</span>
          <h2 className="section-title text-4xl md:text-5xl mt-3">Get In Touch</h2>
          <p className="font-body text-[#9c8aaf] text-sm mt-3 max-w-md mx-auto">
            Have a project idea or want to discuss product opportunities? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="flex flex-col gap-5">
            {socialLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} whileHover={{ x: 4 }}
                className="glass-card p-5 flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(205,180,219,0.2)' }}>
                  <link.icon size={18} style={{ color: '#9333ea' }} />
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-[#2d1b4e]">{link.label}</p>
                  <p className="font-body text-xs text-[#9c8aaf] mt-0.5">{link.value}</p>
                </div>
                <span className="ml-auto text-[#CDB4DB] opacity-0 group-hover:opacity-100 transition-opacity text-xs">↗</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <div className="glass-card p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle size={16} style={{ color: '#CDB4DB' }} />
                <h3 className="font-body font-semibold text-[#2d1b4e] text-sm">Send a message via WhatsApp</h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="font-body text-xs font-medium text-[#9c8aaf] uppercase tracking-wide block mb-1.5">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="input-field" />
                  {errors.name && <p className="text-red-400 text-xs mt-1 font-body">{errors.name}</p>}
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-[#9c8aaf] uppercase tracking-wide block mb-1.5">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="input-field" />
                  {errors.email && <p className="text-red-400 text-xs mt-1 font-body">{errors.email}</p>}
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-[#9c8aaf] uppercase tracking-wide block mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..." rows={4} className="input-field resize-none" />
                  {errors.message && <p className="text-red-400 text-xs mt-1 font-body">{errors.message}</p>}
                </div>
                <motion.button type="submit" className="lavender-btn w-full py-3 text-sm flex items-center justify-center gap-2 mt-1"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {sent ? <>✓ Sent! Redirecting to WhatsApp...</> : <><Send size={14} />Send Message on WhatsApp ↗</>}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
