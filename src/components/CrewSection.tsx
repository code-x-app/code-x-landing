'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const CrewSection = () => {
  const crew = [
    {
      callsign: "Venari-01",
      name: "",
      role: "Founder & Lead Architect",
      bio: "Keeps the cyber-spiders in line while plotting new defenses.",
      skills: ["System Architecture", "Security Research", "Team Leadership"],
      funNote: "Master strategist of the digital frontier"
    },
    {
      callsign: "🕸️ Orb Weaver",
      name: "Engineer",
      role: "Senior Developer",
      bio: "Crafts the threads connecting Securi-X's modules.",
      skills: ["Full-Stack Development", "API Design", "Module Integration"],
      funNote: "Weaves code like a master craftsman"
    },
    {
      callsign: "🕶️ Phantom Crawler",
      name: "Security Researcher",
      role: "Threat Intelligence",
      bio: "Hunts phishing schemes across galaxies.",
      skills: ["Threat Analysis", "Blockchain Forensics", "Pattern Recognition"],
      funNote: "Invisible guardian of the web's shadows"
    },
    {
      callsign: "✨ Neon Spinner",
      name: "UX Designer",
      role: "Experience Architect",
      bio: "Brings webs to life with light and motion.",
      skills: ["UI/UX Design", "Animation", "User Research"],
      funNote: "Illuminates the path for all explorers"
    }
  ];

  return (
    <section id="crew" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 glow-cyan">
            Meet the Force Behind the Web
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta-400 to-cyan-400 mx-auto mb-8"></div>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            <span className="relative inline-block mr-1">CODE<span className="absolute -top-1 -right-2 text-sm" style={{ color: '#ba68c8' }}>X</span></span> is a collective of builders, researchers, and security dreamers.
          </p>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto mt-4">
            Here's the team weaving safer paths through the digital universe.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {crew.map((member, index) => (
            <motion.div
              key={member.callsign}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Callsign Header */}
              <div className="text-center mb-6">
                {member.callsign === "Venari-01" ? (
                  <div className="w-48 h-32 mb-3 mx-auto flex items-center justify-center">
                    <Image
                      src="/images/code-x-developers.png"
                      alt="Code X Developers - Cyberpunk team"
                      width={200}
                      height={120}
                      className="w-full h-auto rounded-lg border border-cyan-400/30 shadow-lg"
                      priority
                    />
                  </div>
                ) : (
                  <div className="text-4xl mb-3">{member.callsign.split(' ')[0]}</div>
                )}
                <h3 className="font-orbitron text-2xl font-bold text-cyan-300 mb-1">
                  {member.callsign === "Venari-01" ? member.callsign : member.callsign.split(' ').slice(1).join(' ')}
                </h3>
                <div className="text-cyan-200">
                  {member.callsign === "Venari-01" ? (
                    <span className="text-magenta-400 font-medium">{member.role}</span>
                  ) : (
                    <>
                      <span className="font-semibold">{member.name}</span>
                      {member.name !== member.role && (
                        <>
                          <span className="text-cyan-400 mx-2">•</span>
                          <span className="text-magenta-400 font-medium">{member.role}</span>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
              
              {/* Bio */}
              <p className="text-cyan-200 text-center leading-relaxed mb-4">
                {member.bio}
              </p>
              
              {/* Fun Note */}
              <p className="text-cyan-300 text-center italic text-sm mb-6 opacity-80">
                "{member.funNote}"
              </p>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-400/10 to-magenta-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-300 hover:border-cyan-400/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Team Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-magenta-400/10 border border-cyan-400/20 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-cyan-200 leading-relaxed">
              Each spider brings unique strengths to our web, creating a security ecosystem 
              that's both powerful and accessible. Together, we're building tools that don't just protect—they empower.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
