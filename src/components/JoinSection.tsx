'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, ArrowRight, CheckCircle, MessageCircle, Compass } from 'lucide-react';

// Helper function to encode form data
function encode(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export const JoinSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const formData = new FormData(e.currentTarget);
      
      await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "beta-signup",
          "bot-field": "", // Honeypot field
          name: formData.get("name") as string,
          email: formData.get("email") as string,
        }),
      });
      
      // Reset form and show success
      setName('');
      setEmail('');
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      // Still show success for UX (form might have worked)
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { 
      icon: Compass, 
      href: '#', 
      label: 'Get Early Access',
      description: 'Be first to try new tools',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      icon: Github, 
      href: '#', 
      label: 'Contribute on GitHub',
      description: 'Help build the future',
      color: 'from-purple-400 to-indigo-500'
    },
    { 
      icon: MessageCircle, 
      href: '#', 
      label: 'Chat on Discord',
      description: 'Join our community',
      color: 'from-indigo-400 to-purple-500'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/CodeX_er', 
      label: 'Follow on X',
      description: 'Stay updated',
      color: 'from-blue-400 to-cyan-500'
    },
  ];

  return (
    <section id="join" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 glow-cyan">
            Join the Force
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto mb-8"></div>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're building an open space where explorers can tinker, learn, and sharpen their defenses.
          </p>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto">
            Jump in, share ideas, or help us evolve <span className="relative inline-block mr-1">SECURI<span className="absolute -top-1 -right-2 text-sm" style={{ color: '#ba68c8' }}>X</span></span> and other <span className="relative inline-block mr-1">CODE<span className="absolute -top-1 -right-2 text-sm" style={{ color: '#ba68c8' }}>X</span></span> tools.
          </p>
        </motion.div>
        
        {/* Early Access Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 mb-12 max-w-2xl mx-auto"
        >
          <form 
            name="beta-signup"
            onSubmit={handleSubmit} 
            className="space-y-4 mb-6"
          >
            <input type="hidden" name="form-name" value="beta-signup" />
            
            {/* Honeypot field for spam protection */}
            <p style={{ display: "none" }}>
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            
            {/* Name and Email inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="flex-1 px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access..."
                className="flex-1 px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </div>
            
            <button
              type="submit"
              className="cyber-button w-full sm:w-auto px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 whitespace-nowrap mx-auto"
            >
              {subscribed ? <CheckCircle className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              {subscribed ? 'Welcome to the Force!' : 'Join Beta'}
            </button>
          </form>
          
          {subscribed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-green-400 font-semibold text-center"
            >
              Welcome to the cyber-spider force! 🕷️
            </motion.div>
          )}
        </motion.div>
        
        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${social.color} bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300`}>
                <social.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-orbitron text-lg font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
                {social.label}
              </h3>
              <p className="text-cyan-200/80 text-sm">
                {social.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
