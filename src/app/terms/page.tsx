'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative inline-block mb-4">
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-cyan-300">
              CODE
            </h1>
            <span className="absolute -top-2 -right-8 font-orbitron text-3xl md:text-4xl font-bold" style={{ color: '#ba68c8' }}>X</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Terms of Service</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400"></div>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-400/30 rounded-lg p-6 mb-8">
            <p className="text-cyan-200/90 leading-relaxed mb-0">
              <strong className="text-cyan-300">Effective Date:</strong> September 24, 2024
            </p>
          </div>

          <div className="space-y-8 text-cyan-200/90 leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your access to and use of Code X products and services, including Securi-X. By using our services, you agree to these Terms.
            </p>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                1. Service Scope
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Code X products are experimental MVP tools provided "as is."</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We do not provide financial, legal, or investment advice.</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                2. User Responsibilities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>You are solely responsible for your wallet, private keys, and assets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>You must verify all transactions before signing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>You must not misuse our services for unlawful or malicious purposes.</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                3. Disclaimer of Warranties
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Code X disclaims all warranties, express or implied.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We do not guarantee uninterrupted service, accuracy of alerts, or prevention of all threats.</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                4. Limitation of Liability
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To the maximum extent permitted by law, Code X is not liable for any loss of digital assets, damages, or claims arising from your use of our services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Use of our products is entirely at your own risk.</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                5. Contact
              </h3>
              <p>
                For support, email us at <a href="mailto:support@code-x.app" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@code-x.app</a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-cyan-400/20 text-center"
        >
          <p className="text-cyan-200/60 text-sm">
            © 2024 Code-X. All rights reserved. Defending the digital frontier.
          </p>
        </motion.div>
      </div>
    </div>
  );
}




