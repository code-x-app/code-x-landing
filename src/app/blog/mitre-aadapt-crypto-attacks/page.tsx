'use client';

import { Metadata } from 'next';
import { Shield, AlertTriangle, Target, Database, TrendingUp, ExternalLink, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MITREAADAPTCryptoAttacksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Homepage</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400 rounded-full text-sm font-semibold border border-red-400/30">
                <Target className="w-4 h-4 inline mr-2" />
                Security Analysis
              </span>
              <span className="text-cyan-400/60 text-sm font-medium">FEATURED</span>
            </div>
            
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Analyzing 2025 Crypto Attack Scenarios Through 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> MITRE AADAPT</span> TTPs
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-cyan-200/80 text-lg">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                <span>October 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-red-400 mb-4 font-orbitron">Executive Summary</h2>
              <p className="text-cyan-200/90 leading-relaxed text-lg mb-4">
                In 2025, cryptocurrency thefts surpassed <span className="text-red-400 font-bold">$2.17 billion</span> in the first half alone, driven by sophisticated attacks on warm wallets and exchanges. MITRE's AADAPT (Adversarial Actions in Digital Asset Payment Technologies) framework, launched in July 2025, provides a tailored lens for understanding these threats.
              </p>
              <p className="text-cyan-200/90 leading-relaxed">
                Modeled after ATT&CK, AADAPT catalogs blockchain-specific tactics, techniques, and procedures (TTPs) across 11 tactics: Reconnaissance, Resource Development, Initial Access, Execution, Privilege Escalation, Defense Evasion, Credential Access, Lateral Movement, Collection, Impact, and Fraud.
              </p>
            </div>
          </div>
        </div>

        {/* MITRE AADAPT Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-3 font-orbitron">
            <Shield className="w-8 h-8" />
            MITRE AADAPT Framework Overview
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <Database className="w-5 h-5" />
                Framework Structure
              </h3>
              <ul className="text-cyan-200/90 space-y-2">
                <li>• 11 Core Tactics (Reconnaissance to Fraud)</li>
                <li>• 38+ Techniques (Flash Loan Exploits, Smart Contract Attacks)</li>
                <li>• Blockchain-specific TTPs</li>
                <li>• Real-world attack mapping</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Key Focus Areas
              </h3>
              <ul className="text-cyan-200/90 space-y-2">
                <li>• Consensus mechanism vulnerabilities</li>
                <li>• Smart contract exploitation</li>
                <li>• Wallet security gaps</li>
                <li>• Cross-chain bridge attacks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* MITRE AADAPT Framework Image */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-8 my-12">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6 flex items-center gap-3 font-orbitron">
            <Shield className="w-6 h-6" />
            MITRE AADAPT Framework Launch
          </h2>
          <div className="bg-black/40 border border-cyan-400/20 rounded-lg p-6 mb-8">
            <div className="text-center mb-6">
              <Image
                src="/images/blog/mitre-aadapt-framework.png"
                alt="MITRE Launches AADAPT Framework"
                width={800}
                height={400}
                className="mx-auto rounded-lg border border-cyan-400/30"
                priority
              />
            </div>
            <div className="text-center text-cyan-200/70">
              <p className="text-lg font-semibold mb-2">MITRE AADAPT Framework Launch</p>
              <p className="text-sm">Comprehensive cybersecurity framework for digital asset payment technologies</p>
            </div>
          </div>
        </div>

        {/* Attack Scenarios */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-3 font-orbitron">
            <AlertTriangle className="w-8 h-8" />
            Key 2025 Attack Scenarios
          </h2>
          
          <div className="space-y-8">
            {/* Bybit Hack */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Bybit Hack (Feb, $1.5B Ethereum)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-cyan-200/90 leading-relaxed mb-4">
                    Attributed to North Korea's Lazarus Group (APT38), hackers exploited a third-party UI flaw in Safe Wallet during cold-to-warm transfers, using social engineering and malware to manipulate frontend and bypass multisig.
                  </p>
                  <div className="flex items-center gap-2 text-red-400/80 text-sm">
                    <span className="px-3 py-1 bg-red-500/20 rounded-full border border-red-400/30">APT38</span>
                    <span className="px-3 py-1 bg-red-500/20 rounded-full border border-red-400/30">Social Engineering</span>
                  </div>
                </div>
                <div className="bg-black/40 border border-red-400/20 rounded-lg p-4">
                  <h4 className="font-bold text-red-300 mb-2">AADAPT/ATT&CK Mapping</h4>
                  <ul className="text-cyan-200/80 text-sm space-y-1">
                    <li>• Initial Access, Execution</li>
                    <li>• Credential Access, Fraud</li>
                    <li>• T1204 (User Execution)</li>
                    <li>• T1555 (Credentials from Password Stores)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BigONE Breach */}
            <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">BigONE Breach (Jul, $27M)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-cyan-200/90 leading-relaxed mb-4">
                    Supply chain attack on CI/CD pipeline injected malicious code, altering withdrawal logic without key compromise.
                  </p>
                  <div className="flex items-center gap-2 text-orange-400/80 text-sm">
                    <span className="px-3 py-1 bg-orange-500/20 rounded-full border border-orange-400/30">Supply Chain</span>
                    <span className="px-3 py-1 bg-orange-500/20 rounded-full border border-orange-400/30">CI/CD Attack</span>
                  </div>
                </div>
                <div className="bg-black/40 border border-orange-400/20 rounded-lg p-4">
                  <h4 className="font-bold text-orange-300 mb-2">AADAPT/ATT&CK Mapping</h4>
                  <ul className="text-cyan-200/80 text-sm space-y-1">
                    <li>• Resource Development</li>
                    <li>• Initial Access, Defense Evasion</li>
                    <li>• T1195 (Supply Chain Compromise)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nobitex Attack */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-green-500/10 border border-yellow-400/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Nobitex Attack (Jun, $90M)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-cyan-200/90 leading-relaxed mb-4">
                    Hacktivists used infostealer malware on employee devices to steal credentials and drain hot wallets.
                  </p>
                  <div className="flex items-center gap-2 text-yellow-400/80 text-sm">
                    <span className="px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-400/30">Infostealer</span>
                    <span className="px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-400/30">Credential Theft</span>
                  </div>
                </div>
                <div className="bg-black/40 border border-yellow-400/20 rounded-lg p-4">
                  <h4 className="font-bold text-yellow-300 mb-2">AADAPT/ATT&CK Mapping</h4>
                  <ul className="text-cyan-200/80 text-sm space-y-1">
                    <li>• Credential Access, Collection</li>
                    <li>• T1555.003 (Credentials from Web Browsers)</li>
                    <li>• T1005 (Data from Local System)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ZKsync Hack */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4">ZKsync Hack (Apr, $5M ZK Tokens)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-cyan-200/90 leading-relaxed mb-4">
                    Compromised admin key exploited legacy airdrop contract for unauthorized minting.
                  </p>
                  <div className="flex items-center gap-2 text-green-400/80 text-sm">
                    <span className="px-3 py-1 bg-green-500/20 rounded-full border border-green-400/30">Admin Key</span>
                    <span className="px-3 py-1 bg-green-500/20 rounded-full border border-green-400/30">Contract Exploit</span>
                  </div>
                </div>
                <div className="bg-black/40 border border-green-400/20 rounded-lg p-4">
                  <h4 className="font-bold text-green-300 mb-2">AADAPT/ATT&CK Mapping</h4>
                  <ul className="text-cyan-200/80 text-sm space-y-1">
                    <li>• Privilege Escalation, Fraud</li>
                    <li>• Exploit Smart Contract</li>
                    <li>• Generate Counterfeit Tokens</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phishing/Drainer Scams */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Phishing/Drainer Scams (H1, $3.1B)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-cyan-200/90 leading-relaxed mb-4">
                    AI-driven fakes tricked users into malicious approvals, draining wallets via spoofed interfaces.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400/80 text-sm">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">AI Phishing</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-400/30">Drainer Scams</span>
                  </div>
                </div>
                <div className="bg-black/40 border border-blue-400/20 rounded-lg p-4">
                  <h4 className="font-bold text-blue-300 mb-2">AADAPT/ATT&CK Mapping</h4>
                  <ul className="text-cyan-200/80 text-sm space-y-1">
                    <li>• Initial Access, Execution, Fraud</li>
                    <li>• T1566 (Phishing)</li>
                    <li>• T1204 (User Execution)</li>
                    <li>• Manipulate Transaction History</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Wrench Attacks */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Wrench Attacks (Ongoing, $128M Cumulative)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-cyan-200/90 leading-relaxed mb-4">
                    Physical coercion targeted high-value holders for keys and phrases.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400/80 text-sm">
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-400/30">Physical Attack</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-400/30">Coercion</span>
                  </div>
                </div>
                <div className="bg-black/40 border border-purple-400/20 rounded-lg p-4">
                  <h4 className="font-bold text-purple-300 mb-2">AADAPT/ATT&CK Mapping</h4>
                  <ul className="text-cyan-200/80 text-sm space-y-1">
                    <li>• Collection, Impact</li>
                    <li>• Physical Attacks (implied)</li>
                    <li>• Highlights non-technical gaps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TTP Mapping Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-3 font-orbitron">
            <Database className="w-8 h-8" />
            TTP Mapping Summary
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 overflow-x-auto">
            <p className="text-cyan-200/90 mb-6">
              The table below maps these attacks to AADAPT tactics and techniques (where applicable) or ATT&CK for broader cyber elements. AADAPT emphasizes blockchain-specific exploits like Chain Reorganization and Smart Contract Attacks, while ATT&CK covers general TTPs like Credential Access.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cyan-400/30">
                    <th className="text-left py-3 px-4 text-cyan-300 font-bold">Attack Scenario</th>
                    <th className="text-left py-3 px-4 text-cyan-300 font-bold">AADAPT/ATT&CK Tactic</th>
                    <th className="text-left py-3 px-4 text-cyan-300 font-bold">Key Techniques</th>
                    <th className="text-left py-3 px-4 text-cyan-300 font-bold">Description & Relation</th>
                  </tr>
                </thead>
                <tbody className="text-cyan-200/90">
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-3 px-4 font-semibold text-red-400">Bybit Hack</td>
                    <td className="py-3 px-4">Initial Access, Execution, Credential Access, Fraud</td>
                    <td className="py-3 px-4">AADAPT: Exploit Smart Contract Implementation, Flash Loan; ATT&CK: T1204, T1555, T1056.001</td>
                    <td className="py-3 px-4">Social engineering lured devs into executing malware (InvisibleFerret), stealing wallet creds and manipulating frontend for fraudulent transfers.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-3 px-4 font-semibold text-orange-400">BigONE Breach</td>
                    <td className="py-3 px-4">Resource Development, Initial Access, Defense Evasion</td>
                    <td className="py-3 px-4">AADAPT: Acquire Infrastructure, Exploit External Services; ATT&CK: T1195</td>
                    <td className="py-3 px-4">Malicious code in CI/CD bypassed detection, altering logic for unauthorized withdrawals—classic supply chain exploit.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-3 px-4 font-semibold text-yellow-400">Nobitex Attack</td>
                    <td className="py-3 px-4">Credential Access, Collection, Exfiltration</td>
                    <td className="py-3 px-4">AADAPT: Exploit Unsecured Credentials; ATT&CK: T1555.003, T1005, T1048</td>
                    <td className="py-3 px-4">Infostealer malware harvested employee creds from devices/browsers, enabling wallet drains and data exfil.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-3 px-4 font-semibold text-green-400">ZKsync Hack</td>
                    <td className="py-3 px-4">Privilege Escalation, Fraud</td>
                    <td className="py-3 px-4">AADAPT: Exploit Smart Contract, Generate Counterfeit Tokens; ATT&CK: T1078</td>
                    <td className="py-3 px-4">Leaked admin key escalated to mint tokens via vulnerable contract, exploiting chain reorganization-like flaws.</td>
                  </tr>
                  <tr className="border-b border-cyan-400/10">
                    <td className="py-3 px-4 font-semibold text-blue-400">Phishing/Drainer Scams</td>
                    <td className="py-3 px-4">Initial Access, Execution, Fraud</td>
                    <td className="py-3 px-4">AADAPT: Phishing Attacks, Manipulate Transaction History; ATT&CK: T1566, T1204</td>
                    <td className="py-3 px-4">Deceptive sites induced toxic approvals, draining via smart contract exploits—prevalent in 80% of 2024 losses.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-purple-400">Wrench Attacks</td>
                    <td className="py-3 px-4">Collection, Impact</td>
                    <td className="py-3 px-4">AADAPT: Physical Attacks (implied); ATT&CK: T1498 (less direct)</td>
                    <td className="py-3 px-4">Coercion bypassed digital TTPs for key extraction; correlates with price highs, highlighting non-technical gaps.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* MITRE ATT&CK Matrix Image */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/30 rounded-lg p-8 my-12">
          <h2 className="text-2xl font-bold text-orange-300 mb-6 flex items-center gap-3 font-orbitron">
            <Database className="w-6 h-6" />
            MITRE ATT&CK Matrix Overlay
          </h2>
          <div className="bg-black/40 border border-orange-400/20 rounded-lg p-6 mb-8">
            <div className="text-center mb-6">
              <Image
                src="/images/blog/mitre-attack-matrix-overlay.png"
                alt="MITRE ATT&CK Matrix Overlay for Banking Trojans"
                width={800}
                height={600}
                className="mx-auto rounded-lg border border-orange-400/30"
                priority
              />
            </div>
            <div className="text-center text-orange-200/70">
              <p className="text-lg font-semibold mb-2">MITRE ATT&CK Matrix Overlay</p>
              <p className="text-sm">Relevant to crypto malware like InvisibleFerret used in banking trojans and crypto attacks</p>
            </div>
          </div>
        </div>

        {/* Insights and Recommendations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-3 font-orbitron">
            <TrendingUp className="w-8 h-8" />
            Insights and Recommendations
          </h2>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-8">
            <p className="text-cyan-200/90 leading-relaxed text-lg mb-6">
              These attacks blend traditional cyber TTPs (e.g., phishing, malware) with blockchain-specific ones (e.g., smart contract exploits), as AADAPT highlights. Groups like APT38 evolve from SWIFT heists to crypto, using tools like InvisibleFerret for credential theft and exfiltration.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Mitigation Strategies</h3>
                <ul className="text-cyan-200/90 space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Adopt AADAPT for threat modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Implement multi-sig/MPC solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Use hardware MFA for key access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Conduct regular opsec training</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-cyan-300 mb-4">Framework Evolution</h3>
                <ul className="text-cyan-200/90 space-y-3">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Quarterly updates to AADAPT ensure relevance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Real-world attack mapping improves accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Cross-framework integration enhances coverage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Community contributions drive innovation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-black/40 border border-cyan-400/20 rounded-lg">
              <p className="text-cyan-200/90 text-lg font-semibold text-center">
                Stay secure—crypto's future depends on it. 🛡️
              </p>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 flex items-center gap-3 font-orbitron">
            <ExternalLink className="w-8 h-8" />
            References
          </h2>
          
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://mitre.org" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  MITRE Introduces AADAPT Cybersecurity Framework for Cryptocurrency
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://webasha.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  What is the MITRE AADAPT Framework and How Does It Protect Blockchain Systems
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://attack.mitre.org" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  MITRE ATT&CK® Framework - Resource Hijacking T1496.001
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://nubetia.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  MITRE Introduces New Cybersecurity Framework to Mitigate Digital Asset Vulnerabilities
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://infosecurity-magazine.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  MITRE Launches New Framework to Tackle Crypto Risks
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://brandefense.io" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  APT38: From SWIFT Heists To Crypto Fortresses - Brandefense
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://sciencedirect.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  Enhancing cybersecurity resilience through advanced red-teaming assessments
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://tripwire.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  MITRE Introduces AADAPT Framework to Combat Crypto-Focused Cyber Threats
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://helpnetsecurity.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  New MITRE framework takes aim at crypto threats
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://businesswire.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  MITRE Introduces AADAPT Cybersecurity Framework for Cryptocurrency
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://gbhackers.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  MITRE Launches AADAPT Framework to Counter Real-World Attacks on Digital Asset Systems
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://securityweek.com" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  MITRE Unveils AADAPT Framework to Tackle Cryptocurrency Threats
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <a href="https://aadapt.mitre.org" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  MITRE AADAPT™ Official Framework
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
