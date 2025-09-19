'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CreedSection } from '@/components/CreedSection';
import { ArsenalSection } from '@/components/ArsenalSection';
import { JoinSection } from '@/components/JoinSection';
import { CrewSection } from '@/components/CrewSection';
import { BlogSection } from '@/components/BlogSection';
import { FooterSection } from '@/components/FooterSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CreedSection />
      <ArsenalSection />
      <JoinSection />
      <CrewSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}