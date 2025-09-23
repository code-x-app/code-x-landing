'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Arsenal', href: '#arsenal' },
    { label: 'Join', href: '#join' },
    { label: 'Crew', href: '#crew' },
    { label: 'Blog', href: '#blog' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-400/20"
          >
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <motion.div 
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div>
                    <div className="relative inline-block">
                      <h1 className="font-orbitron text-xl font-bold text-cyan-300">CODE</h1>
                      <span className="absolute -top-1 -right-3 font-orbitron text-sm font-bold" style={{ color: '#ba68c8' }}>X</span>
                    </div>
                  </div>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="text-cyan-200 hover:text-cyan-300 transition-colors font-medium"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  
                  <motion.a
                    href="https://securi-x-dashboard.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button px-6 py-2 rounded-lg font-bold flex items-center gap-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Rocket className="w-4 h-4" />
                    Try <span className="relative inline-block">SECURI<span className="absolute -top-1 -right-2 text-xs" style={{ color: '#ba68c8' }}>X</span></span>
                  </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-cyan-400/20 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-cyan-200 hover:text-cyan-300 transition-colors font-medium text-left py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.a
                  href="https://securi-x.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button px-6 py-3 rounded-lg font-bold flex items-center gap-2 w-fit mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Rocket className="w-4 h-4" />
                  Try <span className="relative inline-block">SECURI<span className="absolute -top-1 -right-2 text-xs" style={{ color: '#ba68c8' }}>X</span></span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
