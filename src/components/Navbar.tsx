import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Search, 
  Menu, 
  X, 
  PhoneCall, 
  Code2, 
  Layers, 
  Building2, 
  BookOpen, 
  Users, 
  FileText, 
  HelpCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { NavigationTab, ServiceId } from '../types';
import { CORE_SERVICES } from '../data/mockData';

interface NavbarProps {
  currentTab: NavigationTab;
  onNavigate: (tab: NavigationTab, serviceId?: ServiceId) => void;
  onOpenSearch: () => void;
  onOpenEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onOpenSearch,
  onOpenEmergency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home' as NavigationTab, label: 'Overview' },
    { id: 'about' as NavigationTab, label: 'About Us' },
    { id: 'services' as NavigationTab, label: 'Services', hasDropdown: true },
    { id: 'sectors' as NavigationTab, label: 'Sectors' },
    { id: 'insights' as NavigationTab, label: 'Insights' },
    { id: 'team' as NavigationTab, label: 'Leadership' },
    { id: 'resources' as NavigationTab, label: 'Resource Hub' },
    { id: 'contact' as NavigationTab, label: 'Contact & Inquiry' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      {/* High-Tech Top Status Bar */}
      <div className="hidden md:flex items-center justify-between px-4 lg:px-8 py-1 bg-slate-900/90 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>GLOBAL RADIOLOGICAL MONITORING: NOMINAL</span>
          </div>
          <span className="text-slate-600">|</span>
          <span>IAEA SSR-6 / ISO 17025 ACCREDITED</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">GENEVA • OAK RIDGE • PERTH • TOKYO</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenEmergency}
            className="flex items-center gap-1.5 text-red-400 hover:text-red-300 transition font-bold"
          >
            <ShieldAlert className="w-3.5 h-3.5 animate-pulse" />
            <span>24/7 Red Line: +41 22 819 9999</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-slate-900 p-0.5 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold tracking-tight text-white text-lg font-sans">
                Zentrix<span className="text-cyan-400">METALS</span>
              </span>
              <span className="px-1.5 py-0.2 bg-slate-800 text-[10px] font-mono text-cyan-300 rounded border border-slate-700">
                DYNAMIC
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase -mt-0.5">
              Nuclear & Geosciences
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            
            if (item.hasDropdown) {
              return (
                <div 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => onNavigate('services')}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-1 transition ${
                      isActive
                        ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 transition-all duration-200 ${
                    servicesDropdownOpen ? 'opacity-100 visible translate-y-1' : 'opacity-0 invisible pointer-events-none'
                  }`}>
                    <div className="text-[10px] font-mono text-slate-400 px-3 py-1.5 border-b border-slate-800 uppercase">
                      6 Core Business Pillars
                    </div>
                    <div className="py-1 space-y-1">
                      {CORE_SERVICES.map((s) => (
                        <button
                          key={s.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('services', s.id);
                            setServicesDropdownOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800 transition flex flex-col group/item"
                        >
                          <span className="text-xs font-bold text-slate-200 group-hover/item:text-cyan-400 transition">
                            {s.shortTitle}
                          </span>
                          <span className="text-[11px] text-slate-400 truncate">
                            {s.category}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-slate-800">
                      <button
                        onClick={() => {
                          onNavigate('services');
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-center py-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition"
                      >
                        View Full Services Hub →
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono transition"
            title="Search database (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Search Index</span>
            <kbd className="hidden lg:inline px-1.5 py-0.5 text-[9px] bg-slate-950 rounded text-slate-400 border border-slate-800">⌘K</kbd>
          </button>

          {/* Primary Consultation CTA */}
          <button
            onClick={() => onNavigate('contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-cyan-500/20 transition"
          >
            Request Protocol
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-left text-xs font-bold uppercase tracking-wider ${
                  currentTab === item.id
                    ? 'bg-cyan-950/70 border border-cyan-500/40 text-cyan-300'
                    : 'bg-slate-900 border border-slate-800 text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                onNavigate('prompt-architect');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-slate-900 border border-cyan-500/40 rounded-lg text-xs font-mono text-cyan-300 flex items-center justify-center gap-2"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>AI Prompt Architect Hub</span>
            </button>

            <button
              onClick={() => {
                onOpenEmergency();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-red-950/60 border border-red-500/50 rounded-lg text-xs font-mono font-bold text-red-300 flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>24/7 Emergency Radiological Red Line</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
