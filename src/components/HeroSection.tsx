'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Play, X, RotateCcw } from 'lucide-react';
import { pushToDataLayer } from './GoogleTagManager';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  
  // Video snippet state
  const [showVideo, setShowVideo] = useState(true);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current && showVideo) {
        videoRef.current.load(); // Load the video first
        videoRef.current.play().catch((error) => {
          console.error('Video play failed:', error);
          // If video fails to play, hide the overlay
          setShowVideo(false);
          setHasPlayedOnce(true);
        });
      }
    }, 1000); // Start video after 1 second

    return () => clearTimeout(timer);
  }, [showVideo]);

  // Hide video after it ends
  const handleVideoEnd = () => {
    setShowVideo(false);
    setHasPlayedOnce(true);
  };

  // Replay video
  const handleReplayVideo = () => {
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
    }, 100);
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Snippet Overlay */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-auto">
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Video element */}
            <video
              ref={videoRef}
              className="w-full h-full object-contain rounded-lg"
              onEnded={handleVideoEnd}
              onError={(e) => {
                console.error('Video error:', e);
                setShowVideo(false);
                setHasPlayedOnce(true);
              }}
              onCanPlay={() => {
                console.log('Video can play');
                // Hide loading indicator when video is ready
                const loadingIndicator = document.querySelector('.video-loading');
                if (loadingIndicator) {
                  (loadingIndicator as HTMLElement).style.display = 'none';
                }
              }}
              onLoadStart={() => console.log('Video loading started')}
              onLoadedData={() => console.log('Video data loaded')}
              muted
              playsInline
              preload="auto"
            >
              <source src="/videos/grok-video-d48d90f9-c3c2-4d0e-9cfb-8e858a4833e4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Loading indicator */}
            <div className="video-loading absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400 mx-auto mb-2"></div>
                <p className="text-sm">Loading video...</p>
                <p className="text-xs text-gray-400 mt-1">If video doesn't load, click X to continue</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Replay Video Button */}
      {hasPlayedOnce && !showVideo && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleReplayVideo}
          className="fixed top-6 right-6 z-40 p-3 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          title="Replay Video"
        >
          <RotateCcw className="w-5 h-5 text-white" />
        </motion.button>
      )}

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
          Code-X is assembling an intergalactic cyber-spider force — tools and experiments 
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
            href="https://securi-x-dashboard.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button px-8 py-4 rounded-lg text-lg font-bold flex items-center gap-3"
            onClick={() => {
              pushToDataLayer({
                event: 'cta_clicked',
                cta_type: 'explore_securix',
                page_section: 'hero',
                destination: 'dashboard'
              });
            }}
          >
            <Rocket className="w-6 h-6" />
            Explore SECURI^X
          </motion.a>
          <motion.a
            href="#join"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button-secondary px-8 py-4 rounded-lg text-lg font-bold flex items-center gap-3"
            onClick={() => {
              pushToDataLayer({
                event: 'cta_clicked',
                cta_type: 'join_beta',
                page_section: 'hero',
                destination: 'join_section'
              });
            }}
          >
            <Play className="w-6 h-6" />
            Join the Beta
          </motion.a>
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
