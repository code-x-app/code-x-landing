'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutSection = () => (
  <section id="about" className="py-20 px-6 relative">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 glow-cyan">
          <div className="relative inline-block">
            About CODE
            <span className="absolute -top-2 -right-4 md:-top-3 md:-right-6 text-2xl md:text-3xl glow-magenta">X</span>
          </div>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto mb-8"></div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p className="text-lg text-cyan-200 leading-relaxed mb-6">
            At <span className="relative inline-block mr-1">CODE<span className="absolute -top-1 -right-2 text-sm" style={{ color: '#ba68c8' }}>X</span></span>, we believe security should be <span className="text-cyan-400 font-semibold glow-cyan">exciting</span> — not hidden in the shadows.
          </p>
          <p className="text-lg text-cyan-200 leading-relaxed mb-6">
            Our mission is to craft lightweight, open tools that protect innovators, creators, and builders everywhere.
          </p>
          <p className="text-lg text-cyan-200 leading-relaxed">
            From <span className="text-cyan-400 font-semibold relative inline-block mr-1">SECURI<span className="absolute -top-1 -right-2 text-sm" style={{ color: '#ba68c8' }}>X</span></span>, our MVP security companion, to experimental plugins, 
            we invite you to explore, contribute, and help us weave a safer digital universe.
          </p>
        </div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-80 h-80 mx-auto relative flex items-center justify-center"
          >
            <div className="relative">
              <Image
                src="/images/code-x-dna.png"
                alt="Code X DNA - Infinity symbol with binary code on circuit board"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg border border-cyan-400/30 shadow-2xl"
                priority
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 blur-xl scale-110"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
