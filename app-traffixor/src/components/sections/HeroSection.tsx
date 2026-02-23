import React, { useState, useEffect } from 'react';
import { TypeWriter } from '../ui/TypeWriter';
import { NeonButton } from '../ui/NeonButton';
import { GlassCard } from '../ui/GlassCard';

export const HeroSection: React.FC = () => {
  const [showHeadline, setShowHeadline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeadline(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Neural System v3.0 Online // Multi-Market Infrastructure
        </div>

        {/* Terminal Effect + Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          {!showHeadline ? (
            <TypeWriter text="INITIALIZING NEURAL ENGINE v3.0..." />
          ) : (
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              The AI infrastructure your operation needs to scale
            </span>
          )}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Automate complex processes, unify siloed data, and accelerate growth with our low-latency neural API. 
          Designed for <span className="text-cyan-400">B2B</span>, <span className="text-cyan-400">B2C</span>, and <span className="text-cyan-400">Digital Products</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <NeonButton className="px-8 py-4 text-lg">
            Create Free Account
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NeonButton>
          <NeonButton variant="secondary" className="px-8 py-4 text-lg">
            Read Technical Documentation
          </NeonButton>
        </div>

        {/* Architecture Diagram */}
        <div className="relative max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <svg viewBox="0 0 800 200" className="w-full h-auto">
              {/* Data Source */}
              <g transform="translate(50, 80)">
                <rect x="0" y="0" width="140" height="80" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
                <text x="70" y="35" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="500">Your Data Source</text>
                <text x="70" y="55" textAnchor="middle" fill="#64748b" fontSize="10">CRM • E-commerce • Forms</text>
              </g>

              {/* Animated Flow Line 1 */}
              <path 
                d="M 190 120 Q 280 120 320 100" 
                fill="none" 
                stroke="url(#gradient1)" 
                strokeWidth="2"
                strokeDasharray="8,4"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="48" dur="1s" repeatCount="indefinite"/>
              </path>

              {/* Neural Core */}
              <g transform="translate(320, 50)">
                <defs>
                  <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <rect x="0" y="0" width="160" height="120" rx="16" fill="rgba(16,185,129,0.1)" stroke="url(#coreGrad)" strokeWidth="2" filter="url(#glow)"/>
                <text x="80" y="45" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">TRAFFIXOR</text>
                <text x="80" y="65" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="500">Neural Core</text>
                <text x="80" y="85" textAnchor="middle" fill="#64748b" fontSize="10">&lt;50ms latency</text>
                
                {/* Pulsing dots */}
                <circle cx="80" cy="30" r="3" fill="#10b981">
                  <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                </circle>
              </g>

              {/* Animated Flow Line 2 */}
              <path 
                d="M 480 100 Q 520 120 610 120" 
                fill="none" 
                stroke="url(#gradient2)" 
                strokeWidth="2"
                strokeDasharray="8,4"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="48" dur="1s" repeatCount="indefinite"/>
              </path>

              {/* Target Tools */}
              <g transform="translate(610, 80)">
                <rect x="0" y="0" width="140" height="80" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
                <text x="70" y="35" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="500">Your Target Tools</text>
                <text x="70" y="55" textAnchor="middle" fill="#64748b" fontSize="10">Slack • Zapier • Database</text>
              </g>

              {/* Gradients */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#94a3b8"/>
                  <stop offset="100%" stopColor="#10b981"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4"/>
                  <stop offset="100%" stopColor="#94a3b8"/>
                </linearGradient>
              </defs>
            </svg>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};