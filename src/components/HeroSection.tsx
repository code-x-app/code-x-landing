'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Play } from 'lucide-react';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <motion.div 
        style={{ y }}
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
      >
        {/* Code-X Logo with C^X concept */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="text-center">
            <div className="relative inline-block">
              <h1 className="font-orbitron text-6xl md:text-8xl font-black glow-cyan">
                CODE
              </h1>
              <div className="absolute -top-4 -right-8 md:-top-6 md:-right-12">
                <span className="font-orbitron text-4xl md:text-5xl font-black glow-magenta">X</span>
              </div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto mt-2"></div>
          </div>
        </motion.div>
        
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black mb-6 glow-magenta"
          style={{ fontFamily: 'var(--font-cyber)' }}
        >
          DEFEND THE
          <br />
          <span className="glow-cyan">DIGITAL FRONTIER</span>
        </motion.h2>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          <span className="relative inline-block mr-3">CODE<span className="absolute -top-1 -right-3 text-lg" style={{ color: '#ba68c8' }}>X</span></span> is assembling an intergalactic force — tools and experiments 
          that keep explorers safe while they tinker at the web's edge.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="https://securi-x.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button px-8 py-4 rounded-lg text-lg font-bold flex items-center gap-3"
          >
            <Rocket className="w-6 h-6" />
            Explore <span className="relative inline-block mr-1">SECURI<span className="absolute -top-1 -right-2 text-sm" style={{ color: '#ba68c8' }}>X</span></span>
          </motion.a>
          <motion.button 
            onClick={() => {
              const joinSection = document.querySelector('#join');
              if (joinSection) {
                joinSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button-secondary px-8 py-4 rounded-lg text-lg font-bold flex items-center gap-3"
          >
            <Play className="w-6 h-6" />
            Join the Beta
          </motion.button>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
