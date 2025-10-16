'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

export const BlogSection = () => {
  const posts = [
    {
      title: "Current Architecture for Layered Security in Warm Cryptocurrency Wallets",
      excerpt: "Warm wallets offer a balance between accessibility and security. Explore the multi-layered defense architecture that protects digital assets in 2025, from MPC to AI-driven monitoring.",
      date: "2025-10-16",
      category: "Technical",
      readTime: "8 min read",
      featured: true,
      slug: "warm-wallet-security-architecture"
    },
    {
      title: "The Future of Web3 Security",
      excerpt: "Exploring emerging threats and innovative solutions in the decentralized web. How cyber-spiders are evolving to meet new challenges.",
      date: "2024-01-15",
      category: "Research",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Securi-X MVP Launch",
      excerpt: "Introducing our first security companion tool for Web3 explorers. A lightweight guardian for the digital frontier.",
      date: "2024-01-10",
      category: "Product",
      readTime: "3 min read",
      featured: false
    },
    {
      title: "Building a Cyber-Spider Force",
      excerpt: "Behind the scenes of Code-X's mission to defend the digital frontier. Meet the team weaving security into exploration.",
      date: "2024-01-05",
      category: "Company",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "SIWE Security Deep Dive",
      excerpt: "Understanding Sign-In with Ethereum vulnerabilities and how Securi-X provides protection against replay attacks.",
      date: "2024-01-01",
      category: "Technical",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Web3 Phishing Evolution",
      excerpt: "How phishing attacks are adapting to Web3 and the countermeasures we're developing to stay ahead.",
      date: "2023-12-28",
      category: "Security",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Community-Driven Security",
      excerpt: "Why open-source security tools create stronger defenses. The power of collaborative protection.",
      date: "2023-12-20",
      category: "Community",
      readTime: "4 min read",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Research: 'from-cyan-400 to-blue-500',
      Product: 'from-magenta-400 to-purple-500',
      Company: 'from-purple-400 to-indigo-500',
      Technical: 'from-green-400 to-cyan-500',
      Security: 'from-red-400 to-pink-500',
      Community: 'from-yellow-400 to-orange-500'
    };
    return colors[category] || 'from-gray-400 to-gray-500';
  };

  return (
    <section id="blog" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-6 glow-cyan">
            Signals & Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto mb-8"></div>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest insights, releases, and behind-the-scenes content from the Code-X team. Updated 2025.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {posts.filter(post => post.featured).map((post) => (
              <Link 
                key={post.title}
                href={post.slug ? `/blog/${post.slug}/` : '#'}
                className="block bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 cursor-pointer group hover:border-cyan-400/40 transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(post.category)} bg-opacity-20 text-white rounded-full text-sm font-semibold border border-current/30`}>
                    <Tag className="w-4 h-4 inline mr-2" />
                    {post.category}
                  </span>
                  <span className="text-cyan-400/60 text-sm font-medium">FEATURED</span>
                </div>
                
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-cyan-300 mb-4 group-hover:text-cyan-200 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-cyan-200/80 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-cyan-400/60 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
              </Link>
            ))}
          </motion.article>
          
          {/* Regular Posts */}
          <div className="space-y-6">
            {posts.filter(post => !post.featured).slice(0, 3).map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 cursor-pointer group hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} bg-opacity-20 text-white rounded-full text-xs font-semibold`}>
                    {post.category}
                  </span>
                  <span className="text-cyan-400/60 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="font-orbitron text-lg font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-cyan-200/80 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400/60 text-xs">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        
        {/* More Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {posts.filter(post => !post.featured).slice(3).map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 cursor-pointer group hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} bg-opacity-20 text-white rounded-full text-xs font-semibold`}>
                  {post.category}
                </span>
                <span className="text-cyan-400/60 text-xs">{post.readTime}</span>
              </div>
              
              <h3 className="font-orbitron text-lg font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-cyan-200/80 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-cyan-400/60 text-xs">
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
                <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="cyber-button-secondary px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto">
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
