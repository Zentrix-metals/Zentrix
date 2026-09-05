import React, { useState } from 'react';
import { 
  Code2, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  FileText, 
  Download, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MASTER_AI_GENERATOR_PROMPT, PROMPT_MODULES } from '../data/aiPromptDocumentation';

export const PromptArchitectView: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedPlatform, setSelectedPlatform] = useState<'universal' | 'v0' | 'bolt' | 'claude' | 'vercel'>('universal');
  const [activeTab, setActiveTab] = useState<'master' | 'modules'>('master');
  const [activeModuleId, setActiveModuleId] = useState<string>(PROMPT_MODULES[0].id);

  const getPlatformPromptPrefix = () => {
    switch (selectedPlatform) {
      case 'v0':
        return `// Target Environment: v0.dev / Next.js 14 App Router + Tailwind CSS + Lucide Icons + Framer Motion\n\n`;
      case 'bolt':
        return `// Target Environment: Bolt.new WebContainer / React + Vite + Tailwind CSS + TypeScript\n\n`;
      case 'claude':
        return `// Target Environment: Claude 3.7 Sonnet Artifacts / React Component Suite\n\n`;
      case 'vercel':
        return `// Target Deployment: Vercel Production Deployment / React 18+ & Tailwind CSS\n\n`;
      default:
        return ``;
    }
  };

  const fullExportedPrompt = getPlatformPromptPrefix() + MASTER_AI_GENERATOR_PROMPT;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(fullExportedPrompt);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const wordCount = fullExportedPrompt.split(/\s+/).length;
  const tokenEstimate = Math.round(wordCount * 1.35);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>PRODUCTION-READY AI PROMPT SPECIFICATION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          AI Code Generator Master Prompt Suite
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Engineered for v0, Bolt.new, Claude Artifacts, Lovable, and Cursor. Copy the exhaustive prompt below to instruct any leading AI code generation system to construct this complete multi-page architecture from scratch.
        </p>
      </div>

      {/* Control Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          {/* Target Platform Selector */}
          <div>
            <span className="text-xs font-mono uppercase text-slate-400 block mb-2 font-bold">
              Select Target AI Generator / Platform:
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'universal', label: 'Universal (All Models)' },
                { id: 'v0', label: 'v0.dev / Next.js' },
                { id: 'bolt', label: 'Bolt.new / Vite' },
                { id: 'claude', label: 'Claude Artifacts' },
                { id: 'vercel', label: 'Vercel Ready' }
              ].map((plat) => (
                <button
                  key={plat.id}
                  onClick={() => setSelectedPlatform(plat.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition ${
                    selectedPlatform === plat.id
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {plat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Copy Primary CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyPrompt}
              className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-xl ${
                copied
                  ? 'bg-emerald-500 text-slate-950 shadow-emerald-950/50'
                  : 'bg-gradient-to-r from-cyan-500 to-sky-400 hover:from-cyan-400 hover:to-sky-300 text-slate-950 shadow-cyan-950/50'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'PROMPT COPIED TO CLIPBOARD' : 'COPY FULL MASTER PROMPT'}</span>
            </button>
          </div>
        </div>

        {/* Prompt Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
            <span className="text-slate-500 block text-[10px]">WORD COUNT:</span>
            <span className="text-white font-bold text-sm">{wordCount.toLocaleString()} Words</span>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
            <span className="text-slate-500 block text-[10px]">ESTIMATED TOKENS:</span>
            <span className="text-cyan-300 font-bold text-sm">~{tokenEstimate.toLocaleString()} Tokens</span>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
            <span className="text-slate-500 block text-[10px]">CORE PILLARS:</span>
            <span className="text-emerald-400 font-bold text-sm">6 Complete Streams</span>
          </div>
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
            <span className="text-slate-500 block text-[10px]">VIEWS SPECIFIED:</span>
            <span className="text-amber-400 font-bold text-sm">8 Full Page Layouts</span>
          </div>
        </div>

        {/* Code Box */}
        <div className="relative rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span>production_corporate_website_ai_prompt.md</span>
            </div>
            <button
              onClick={handleCopyPrompt}
              className="hover:text-cyan-300 flex items-center gap-1 transition"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <pre className="p-5 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[600px] overflow-y-auto selection:bg-cyan-500/30">
            {fullExportedPrompt}
          </pre>
        </div>
      </div>

      {/* Modular Section Breakdown */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">MODULAR BREAKDOWN</span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Inspecting Individual Prompt Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROMPT_MODULES.map((mod) => (
            <div
              key={mod.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-cyan-500/40 transition flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white font-mono">{mod.name}</h3>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(mod.content);
                      confetti({ particleCount: 30, spread: 50 });
                    }}
                    className="p-1.5 text-slate-400 hover:text-cyan-400 rounded bg-slate-950 border border-slate-800 transition"
                    title="Copy section"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-slate-400">{mod.description}</p>
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-[11px] text-slate-300 max-h-36 overflow-y-auto whitespace-pre-wrap">
                  {mod.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
