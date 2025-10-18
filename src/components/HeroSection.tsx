'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Play, X } from 'lucide-react';
import { pushToDataLayer } from './GoogleTagManager';

const VIDEO_MP4 = "/videos/grok-video-d48d90f9-c3c2-4d0e-9cfb-8e858a4833e4.mp4";
// Optional WebM fallback (create this if you can)
const VIDEO_WEBM = "/videos/grok-video-d48d90f9-c3c2-4d0e-9cfb-8e858a4833e4.webm";
const SESSION_FLAG = "hero_video_splash_shown";

type HeroVideoSplashProps = {
  children: React.ReactNode;
  alwaysShow?: boolean;
  fadeDurationMs?: number;
  posterSrc?: string;
};

function HeroVideoSplash({
  children,
  alwaysShow = false,
  fadeDurationMs = 400,
  posterSrc,
}: HeroVideoSplashProps) {
  const disabled = process.env.NEXT_PUBLIC_DISABLE_HERO_VIDEO === "1";
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showSplash, setShowSplash] = useState(false);
  const [isHoveringReplay, setIsHoveringReplay] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  // Decide whether to show (once per session unless forced)
  useEffect(() => {
    if (disabled) return; // completely skip video
    try {
      const hasShown = sessionStorage.getItem(SESSION_FLAG) === "1";
      if (!hasShown || alwaysShow) {
        setShowSplash(true);
        if (!alwaysShow) sessionStorage.setItem(SESSION_FLAG, "1");
      }
    } catch {
      setShowSplash(true);
    }
  }, [alwaysShow, disabled]);

  // Try to autoplay when overlay opens
  useEffect(() => {
    if (!showSplash || disabled) return;
    const v = videoRef.current;
    if (!v) return;
    (async () => {
      try {
        await v.play();
        setAutoplayBlocked(false);
      } catch (e) {
        // Autoplay blocked — leave controls visible so user can tap play
        console.warn("Autoplay blocked or failed:", e);
        setAutoplayBlocked(true);
      }
    })();
  }, [showSplash, disabled]);

  const handleEnded = () => {
    setTimeout(() => setShowSplash(false), fadeDurationMs);
  };

  const replay = async () => {
    if (disabled) return;
    const v = videoRef.current;
    if (!v) return;
    setErrMsg(null);
    setShowSplash(true);
    try {
      v.currentTime = 0;
      await v.play();
    } catch (e) {
      console.warn("Replay failed:", e);
    }
  };

  const onError = () => {
    const v = videoRef.current;
    let detail = "Video failed to load.";
    if (v?.error) {
      const { code, message } = v.error as MediaError;
      detail = `Video error code ${code}${message ? `: ${message}` : ""}`;
    }
    console.error(detail);
    setErrMsg(
      "We couldn't load the intro video (codec/path/MIME). The page is still usable—click Skip below."
    );
  };

  const onLoadedData = () => {
    // Fired when the first frame is loaded
    setErrMsg(null);
  };

  const onCanPlay = () => {
    // Ready to play through
    setCanPlay(true);
  };

  return (
    <div className="relative">
      {/* Normal hero content */}
      {children}

      {/* Replay button (still present when disabled so UX is consistent; it won't do anything if disabled) */}
      <button
        type="button"
        onClick={replay}
        aria-label="Replay intro video"
        className={[
          "fixed right-4 bottom-4 z-30 inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-lg",
          "bg-white/90 text-gray-900 backdrop-blur hover:bg-white dark:bg-neutral-900/90 dark:text-white dark:hover:bg-neutral-900",
          "transition-all duration-200",
          isHoveringReplay ? "scale-[1.03]" : "scale-100",
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        ].join(" ")}
        onMouseEnter={() => setIsHoveringReplay(true)}
        onMouseLeave={() => setIsHoveringReplay(false)}
      >
        <Play size={16} />
        <span className="text-sm font-medium">Replay</span>
      </button>

      {/* Splash overlay */}
      <div
        className={[
          "pointer-events-auto fixed inset-0 z-20 flex items-center justify-center",
          showSplash && !disabled ? "opacity-100" : "opacity-0 pointer-events-none",
          `transition-opacity duration-[${fadeDurationMs}ms] ease-out`,
        ].join(" ")}
        aria-hidden={!(showSplash && !disabled)}
      >
        {/* Dim background */}
        <div className="absolute inset-0 bg-black/90" />

        {/* Tiny toast error (if any) */}
        {errMsg && (
          <div className="absolute top-4 left-1/2 z-30 -translate-x-1/2 rounded-md bg-red-600/90 px-3 py-2 text-xs text-white shadow">
            {errMsg}
          </div>
        )}

        {/* Video container */}
        <div className="relative mx-auto w-[min(100%,_1120px)] px-4">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <video
              ref={videoRef}
              className="block h-full w-full"
              autoPlay
              muted
              playsInline
              controls
              onError={onError}
              onLoadedData={onLoadedData}
              onCanPlay={onCanPlay}
              onEnded={handleEnded}
              onStalled={() => setErrMsg("Video stalled — likely missing or blocked. Click Skip to continue.")}
              poster={posterSrc}
              preload="metadata"
            >
              {/* WebM first (if present), then MP4 */}
              <source src={VIDEO_WEBM} type="video/webm" />
              <source src={VIDEO_MP4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Status hint if loaded but not yet ready */}
            {!canPlay && !errMsg && !autoplayBlocked && (
              <div className="absolute inset-x-0 bottom-3 mx-auto w-fit rounded bg-black/60 px-2 py-1 text-[11px] text-white">
                Loading video…
              </div>
            )}

            {/* Manual play button when autoplay is blocked */}
            {autoplayBlocked && !errMsg && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  onClick={async () => {
                    const v = videoRef.current;
                    if (v) {
                      try {
                        await v.play();
                        setAutoplayBlocked(false);
                      } catch (e) {
                        console.error("Manual play failed:", e);
                      }
                    }
                  }}
                  className="flex items-center gap-3 rounded-full bg-white/90 px-6 py-3 text-gray-900 shadow-lg hover:bg-white transition-colors"
                >
                  <Play size={20} />
                  <span className="font-medium">Play Video</span>
                </button>
              </div>
            )}

            {/* Close / Skip */}
            <button
              type="button"
              onClick={handleEnded}
              className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur transition hover:bg-black/80"
            >
              Skip
            </button>
          </div>

          {/* Hard fallback CTA if video fails */}
          {errMsg && (
            <div className="mt-3 text-center text-sm text-white/80">
              Having trouble?{" "}
              <button className="underline" onClick={() => window.location.reload()}>
                Reload
              </button>{" "}
              or{" "}
              <a className="underline" href={VIDEO_MP4} target="_blank" rel="noreferrer">
                open the video directly
              </a>
              .
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  
  return (
    <HeroVideoSplash>
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
    </HeroVideoSplash>
  );
};
