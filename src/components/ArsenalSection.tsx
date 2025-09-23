'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, CheckCircle, ExternalLink } from 'lucide-react';

export const ArsenalSection = () => {
  const tools = [
    {
      name: "SECURI^X MVP",
      description: "A lightweight Web3 security companion — explains transactions, manages approvals, blocks phishing.",
      icon: Shield,
      status: "Live",
      color: "from-cyan-400 to-blue-500",
      features: ["Transaction Analysis", "SIWE Validation", "Approval Management", "Phishing Protection"],
      link: "https://securi-x-dashboard.pages.dev/"
    },
    {
      name: "Future Labs",
      description: "Experimental security tools and research projects in development.",
      icon: Zap,
      status: "Coming Soon",
      color: "from-magenta-400 to-purple-500",
      features: ["Advanced Analytics", "AI Threat Detection", "Multi-Chain Support", "Enterprise Features"]
    },
    {
      name: "Developer SDK",
      description: "Integration tools for developers to build security into their dApps.",
      icon: Globe,
      status: "Planned",
      color: "from-purple-400 to-indigo-500",
      features: ["Easy Integration", "Custom Rules", "Real-time Alerts", "Dashboard Analytics"]
    }
  ];

  return (
    <section id="arsenal" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 glow-magenta">
            The Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
            Discover our suite of cyber-security tools designed to protect and empower Web3 explorers.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 h-full hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${tool.color} bg-opacity-20`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tool.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-400/30' :
                    tool.status === 'Coming Soon' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30' :
                    'bg-gray-500/20 text-gray-400 border border-gray-400/30'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                
                <h3 className="font-orbitron text-xl font-bold text-cyan-300 mb-3">
                  {tool.name === "SECURI^X MVP" ? (
                    <span>
                      <span className="relative inline-block mr-2">SECURI<span className="absolute -top-1 -right-2 text-sm" style={{ color: '#ba68c8' }}>X</span></span> MVP
                    </span>
                  ) : (
                    tool.name
                  )}
                </h3>
                
                <p className="text-cyan-200 mb-4 text-sm leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-cyan-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {tool.link ? (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 cyber-button flex items-center justify-center gap-2"
                  >
                    Try Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button 
                    className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 border-2 border-gray-500 text-gray-400 hover:border-cyan-400 hover:text-cyan-400"
                    disabled
                  >
                    {tool.status === 'Coming Soon' ? 'Coming Soon' : 'Planned'}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
