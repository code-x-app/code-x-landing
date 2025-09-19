'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Zap, Heart, Eye, Target } from 'lucide-react';

export const CreedSection = () => {
  const pledges = [
    {
      icon: Shield,
      text: "Guard the edges of the web with skill and integrity."
    },
    {
      icon: Zap,
      text: "Invent tools like Securi-X that empower others to create without fear."
    },
    {
      icon: Users,
      text: "Collaborate across disciplines, helping each other grow."
    },
    {
      icon: Eye,
      text: "Celebrate transparency, experimentation, and continuous improvement."
    },
    {
      icon: Heart,
      text: "Stand for inclusion, respect, and resilience — our webs are strongest when woven together."
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-gradient-to-r from-black/50 to-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 glow-cyan">
            Creed
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta-400 to-cyan-400 mx-auto mb-8"></div>
        </motion.div>
        
        {/* Main Creed Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-cyan-400/30 rounded-xl p-8 mb-12 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10">
            <blockquote className="text-xl md:text-2xl text-cyan-200 leading-relaxed mb-8 text-center">
              <span className="text-cyan-400 font-bold glow-cyan text-2xl md:text-3xl">
                &ldquo;We weave security into the fabric of exploration.&rdquo;
              </span>
              <br /><br />
              We are curious builders, bold defenders, and creative tinkerers.<br />
              We believe a safer digital frontier is born from openness, shared learning, and playful innovation.
            </blockquote>
          </div>
        </motion.div>
        
        {/* Pledges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-orbitron text-2xl font-bold text-magenta-400 mb-8 text-center glow-magenta">
            We pledge to:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {pledges.map((pledge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-400/10 to-magenta-400/10 rounded-lg border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="p-2 bg-gradient-to-r from-cyan-400 to-magenta-400 rounded-lg flex-shrink-0 mt-1">
                  <pledge.icon className="w-5 h-5 text-black" />
                </div>
                <p className="text-cyan-200 leading-relaxed">
                  {pledge.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-orbitron font-bold text-cyan-300 glow-cyan">
            Together we defend, inspire, and build for the common good.
          </p>
          <div className="flex justify-center mt-6">
            <Target className="w-8 h-8 text-magenta-400 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
