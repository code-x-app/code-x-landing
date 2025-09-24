'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Privacy Policy</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400"></div>
        </motion.div>

        {/* Privacy Policy Content */}
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
              Code X ("we," "our," or "us") values your privacy. This Privacy Policy explains how we handle information when you use our products and services, including but not limited to Securi-X.
            </p>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                1. Information We Collect
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-cyan-300">No Personal Data:</strong> We do not collect personally identifiable information such as names or addresses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-cyan-300">Wallet Data:</strong> When you connect a blockchain wallet, transactions are processed directly on-chain. We do not store your private keys or seed phrases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-cyan-300">Technical Logs:</strong> Limited data (e.g., device/browser type, errors, usage frequency) may be collected for debugging and performance improvements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong className="text-cyan-300">Analytics:</strong> We may use tools like Google Analytics to understand general usage patterns.</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                2. How We Use Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To provide and improve our security tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To detect and mitigate potential threats (e.g., phishing URLs, suspicious approvals).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>To support research and development of Code X solutions.</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                3. Data Sharing
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We do not sell or trade data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We may share anonymized metrics with third-party services (e.g., analytics, hosting providers).</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                4. Security
              </h3>
              <p>
                We apply reasonable technical safeguards to protect logs and analytics. However, blockchain interactions inherently involve risk, and users remain responsible for their own wallets and transactions.
              </p>
            </div>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                5. User Rights
              </h3>
              <p>
                If you want us to delete technical logs related to your use, please contact us at <a href="mailto:support@code-x.app" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@code-x.app</a>.
              </p>
            </div>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                6. Changes
              </h3>
              <p>
                We may update this Privacy Policy. Continued use means you accept the latest version.
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
