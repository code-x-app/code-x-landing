'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail, ExternalLink } from 'lucide-react';
import { CyberSpider } from './CyberSpider';

export const FooterSection = () => (
  <footer className="py-12 px-6 border-t border-cyan-400/20 bg-black/30 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>
    
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <div>
              <div className="relative inline-block">
                <h3 className="font-orbitron text-2xl font-bold text-cyan-300">CODE</h3>
                <span className="absolute -top-1 -right-3 font-orbitron text-lg font-bold" style={{ color: '#ba68c8' }}>X</span>
              </div>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-cyan-200/80 mb-6 max-w-md leading-relaxed"
          >
            Assembling an intergalactic force to defend the digital frontier 
            and protect Web3 explorers everywhere. Together we weave a safer digital universe.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Twitter, href: 'https://x.com/CodeX_er', label: 'Twitter' },
              { icon: Mail, href: 'mailto:support@code-x.app', label: 'Email' },
            ].map((social, _index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 border border-cyan-400/30 rounded-lg bg-black/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 group-hover:text-cyan-300" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Arsenal Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="font-orbitron text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            Arsenal
          </h4>
          <ul className="space-y-3 text-cyan-200/80">
            <li>
              <a 
                href="https://securi-x-dashboard.pages.dev/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300 transition-colors flex items-center gap-2 group"
              >
                <span className="relative inline-block">SECURI<span className="absolute -top-1 -right-2 text-xs text-magenta-400">X</span> MVP</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li><a href="#" className="hover:text-cyan-300 transition-colors">Future Labs</a></li>
            <li><a href="#" className="hover:text-cyan-300 transition-colors">Developer SDK</a></li>
            <li><a href="#" className="hover:text-cyan-300 transition-colors">Enterprise</a></li>
          </ul>
        </motion.div>
        
        {/* Mission Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="font-orbitron text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-magenta-400 rounded-full"></span>
            Mission
          </h4>
          <ul className="space-y-3 text-cyan-200/80">
            <li><a href="#about" className="hover:text-cyan-300 transition-colors">About</a></li>
            <li><a href="#crew" className="hover:text-cyan-300 transition-colors">Team</a></li>
            <li><a href="#blog" className="hover:text-cyan-300 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-300 transition-colors">Careers</a></li>
            <li><a href="#join" className="hover:text-cyan-300 transition-colors">Join Beta</a></li>
          </ul>
        </motion.div>
      </div>
      
      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="border-t border-cyan-400/20 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p className="text-cyan-200/60 text-sm mb-4 md:mb-0">
          © 2024 Code-X. All rights reserved. 
          <span className="text-cyan-400 ml-2 font-medium">Defending the digital frontier.</span>
        </p>
        <div className="flex gap-6 text-cyan-200/60 text-sm">
          <a href="#" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">Terms of Service</a>
          <a href="mailto:support@code-x.app" className="hover:text-cyan-300 transition-colors">Contact</a>
        </div>
      </motion.div>
      
      {/* Cyber Spider Force Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-8 pt-8 border-t border-cyan-400/10"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-400/10 to-magenta-400/10 border border-cyan-400/20 rounded-full">
          <div className="w-6 h-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-1 bg-black rounded-full"></div>
          </div>
          <span className="text-cyan-300 font-medium text-sm">
            Proudly weaving security into exploration
          </span>
          <div className="w-6 h-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-magenta-400 to-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-1 bg-black rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </footer>
);
