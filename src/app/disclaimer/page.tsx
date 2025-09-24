'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DisclaimerPage() {
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">General Disclaimer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400"></div>
        </motion.div>

        {/* Disclaimer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              Important Notice
            </h3>
            <p className="text-cyan-200/90 leading-relaxed">
              All products, services, and tools developed and offered by Code X (including but not limited to Securi-X, AccessShield AI, and future offerings) are provided strictly on an "as-is" and "as-available" basis.
            </p>
          </div>

          <div className="space-y-6 text-cyan-200/90 leading-relaxed">
            <p>
              Code X solutions are designed to provide security insights, risk warnings, and informational support. They do not manage user funds, store private keys, or execute transactions on behalf of users. Final decisions and actions remain solely the responsibility of the user.
            </p>

            <div className="bg-black/30 border border-cyan-400/20 rounded-lg p-6">
              <h4 className="text-lg font-bold text-cyan-300 mb-4">By using any Code X product or service, you acknowledge and agree that:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Code X provides advisory and informational tools only; it does not provide financial, investment, or legal advice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Code X does not guarantee prevention of loss, theft, or fraud, nor uninterrupted or error-free service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Code X and its developers, affiliates, and partners are not liable for any direct, indirect, incidental, or consequential damages or losses arising from use of its products and services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Users remain fully responsible for safeguarding their wallets, assets, credentials, and transactions.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 border border-cyan-400/30 rounded-lg p-6">
              <p className="text-center font-medium">
                By continuing to use Code X products or services, you accept these terms in full. If you do not agree, please discontinue use immediately.
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
