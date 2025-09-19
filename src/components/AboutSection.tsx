'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
            className="w-64 h-64 mx-auto relative flex items-center justify-center"
          >
            {/* Clean geometric design */}
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 border-2 border-neon-cyan/30 rounded-full"
              />
              
              {/* Middle ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 border-2 border-neon-magenta/40 rounded-full"
              />
              
              {/* Inner core - C with power X */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="text-3xl font-orbitron font-bold text-black">C</div>
                    <div className="text-lg font-orbitron font-bold text-black absolute -top-1 -right-2">X</div>
                  </div>
                </div>
              </div>
              
              {/* Floating particles */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-neon-cyan rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                  }}
                  animate={{
                    rotate: [angle, angle + 360],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                  }}
                >
                  <div className="w-3 h-3 bg-neon-cyan rounded-full" style={{
                    transform: 'translate(-50%, -50%) translateX(100px)'
                  }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
