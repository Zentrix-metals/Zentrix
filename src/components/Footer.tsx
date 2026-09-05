import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Mail, 
  PhoneCall, 
  MapPin, 
  Lock, 
  ArrowUpRight, 
  CheckCircle2, 
  Award, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { NavigationTab, ServiceId } from '../types';
import { CORE_SERVICES } from '../data/mockData';

interface FooterProps {
  onNavigate: (tab: NavigationTab, serviceId?: ServiceId) => void;
  onOpenEmergency: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEmergency }) => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setSubscribedEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      {/* Compliance & Accreditations Ribbon */}
      <div className="border-b border-slate-800/80 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300 font-bold">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>OFFICIALLY GOVERNED BY GLOBAL REGULATORY BODIES:</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-slate-400">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                IAEA SSR-6 / GSG-7
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                ISO/IEC 17025:2017
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                US NRC 10 CFR 20
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                EURATOM 2013/59
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
                IMO IMDG Class 7
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-slate-900 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold tracking-tight text-white text-lg font-sans">
                  RADIA<span className="text-cyan-400">CORE</span>
                </span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Technologies Global
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Global leaders in radiological safety engineering, environmental site remediation, advanced isotopic laboratory analysis, deep borehole geosciences, and Class 7 nuclear materials logistics.
            </p>

            {/* Emergency Hotline Widget */}
            <div className="p-3.5 bg-red-950/40 border border-red-500/30 rounded-xl space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-red-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  24/7 RADIOLOGICAL RED LINE
                </span>
                <span className="text-[10px] font-mono bg-red-500 text-slate-950 px-1.5 py-0.2 rounded font-bold">
                  ACTIVE
                </span>
              </div>
              <p className="text-xs text-white font-mono font-bold">
                +41 22 819 9999 / +1 865 482 9911
              </p>
              <button
                onClick={onOpenEmergency}
                className="text-[11px] font-mono text-red-300 hover:text-red-200 underline block pt-0.5"
              >
                Trigger Incident Dispatch Protocol →
              </button>
            </div>
          </div>

          {/* Core Services Hub Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold border-l-2 border-cyan-400 pl-2">
              Six Core Pillars
            </h4>
            <ul className="space-y-2 text-xs">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services', s.id)}
                    className="text-slate-400 hover:text-cyan-300 transition flex items-center justify-between w-full text-left group"
                  >
                    <span className="truncate">{s.shortTitle}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-cyan-400 transition" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate & Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold border-l-2 border-cyan-400 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('about')} className="text-slate-400 hover:text-white transition">
                  About Us & Heritage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sectors')} className="text-slate-400 hover:text-white transition">
                  Industry Sectors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="text-slate-400 hover:text-white transition">
                  Technical Insights & Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="text-slate-400 hover:text-white transition">
                  Executive & Science Board
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="text-slate-400 hover:text-white transition">
                  White Papers & Glossary
                </button>
              </li>
            </ul>
          </div>

          {/* Technical Bulletin Subscription */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold border-l-2 border-cyan-400 pl-2">
              Nuclear Science Dispatch
            </h4>
            <p className="text-xs text-slate-400">
              Receive quarterly peer-reviewed white papers, regulatory updates, and radiological shielding monographs.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed to Technical Repository Digest.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="official.email@organization.gov"
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold rounded-lg transition"
                >
                  SUBSCRIBE TO BULLETIN
                </button>
              </form>
            )}

            <div className="pt-2 text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-cyan-400" />
              <span>TLS 1.3 256-Bit Encrypted Data Privacy</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} RadiaCore Technologies & Geosystems Inc. All Rights Reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-[11px]">
            <span className="hover:text-slate-400 cursor-pointer">Non-Proliferation Ethics</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">IAEA Safeguards Agreement</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Dual-Use Export Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
