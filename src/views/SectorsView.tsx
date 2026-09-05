import React, { useState } from 'react';
import { 
  Zap, 
  Shield, 
  Rocket, 
  HeartPulse, 
  Factory, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Award,
  Sparkles,
  ChevronRight,
  Maximize2,
  MapPin,
  Activity
} from 'lucide-react';
import { NavigationTab, OperationalImageItem } from '../types';
import { INDUSTRY_SECTORS, OPERATIONAL_IMAGES } from '../data/mockData';
import { ImageTelemetryModal } from '../components/ImageTelemetryModal';

interface SectorsViewProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const SectorsView: React.FC<SectorsViewProps> = ({ onNavigate }) => {
  const [activeSectorId, setActiveSectorId] = useState<string>(INDUSTRY_SECTORS[0].id);
  const [activeModalImage, setActiveModalImage] = useState<OperationalImageItem | null>(null);

  const activeSector = INDUSTRY_SECTORS.find(s => s.id === activeSectorId) || INDUSTRY_SECTORS[0];

  // Map sector to appropriate image
  const getSectorImage = (id: string): OperationalImageItem | undefined => {
    switch (id) {
      case 'nuclear-power':
        return OPERATIONAL_IMAGES.find(img => img.id === 'img-holographic-decay');
      case 'defense-cbrn':
        return OPERATIONAL_IMAGES.find(img => img.id === 'img-alpha-scintillation');
      case 'aerospace-defense':
        return OPERATIONAL_IMAGES.find(img => img.id === 'img-aerospace-rad-sensor');
      case 'healthcare-pharma':
        return OPERATIONAL_IMAGES.find(img => img.id === 'img-radiopharm-cleanroom');
      case 'mining-raw-materials':
        return OPERATIONAL_IMAGES.find(img => img.id === 'img-open-pit-telemetry');
      default:
        return OPERATIONAL_IMAGES[0];
    }
  };

  const sectorImage = getSectorImage(activeSector.id);

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'Factory': return <Factory className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
          <Building2 className="w-3.5 h-3.5" />
          <span>INDUSTRY SPECIALIZATIONS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Tailored Engineering Frameworks by Industrial Sector
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Explore specialized radiological safety, critical mineral supply, and regulatory compliance protocols customized to the operational demands of each industry.
        </p>
      </div>

      {/* Sector Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {INDUSTRY_SECTORS.map((sector) => {
          const isActive = sector.id === activeSectorId;
          return (
            <button
              key={sector.id}
              onClick={() => setActiveSectorId(sector.id)}
              className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between ${
                isActive
                  ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-lg shadow-cyan-950/50'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className={`p-2 rounded-xl w-fit mb-3 ${isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-950 text-cyan-400'}`}>
                {getSectorIcon(sector.iconName)}
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  {sector.tag}
                </span>
                <span className="text-sm font-bold text-white block">
                  {sector.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Sector Deep Dive */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl animate-in fade-in duration-300">
        {/* Sector Visual Banner */}
        {sectorImage && (
          <div 
            onClick={() => setActiveModalImage(sectorImage)}
            className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950 cursor-pointer group"
          >
            <img
              src={sectorImage.imageUrl}
              alt={sectorImage.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-950/60" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-mono flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>{sectorImage.telemetryTag}</span>
              </div>
              <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 rounded-lg text-xs font-mono flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Click to Inspect Asset</span>
              </span>
            </div>

            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold text-white">{sectorImage.location}</span>
              </div>
              <span className="px-2.5 py-0.5 bg-cyan-950 border border-cyan-500/30 text-cyan-300 rounded">
                {sectorImage.badge}
              </span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 text-xs font-mono bg-cyan-950 text-cyan-300 rounded border border-cyan-500/30">
                  {activeSector.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">Sector Blueprint #{activeSector.id}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeSector.title}
              </h2>
            </div>

            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-emerald-400">
              <span className="text-slate-400 block text-[10px] uppercase">Demonstrated Impact:</span>
              <span className="font-bold text-sm">{activeSector.impactMetric}</span>
            </div>
          </div>

          <p className="text-base text-slate-300 leading-relaxed max-w-4xl">
            {activeSector.description}
          </p>

          {/* Specialized Solutions Stack */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Tailored Sector Solution Stack:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeSector.keySolutions.map((sol, i) => (
                <div key={i} className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{sol}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certified Protocols & Representative Case */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-slate-800">
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Mandatory Certified Protocols:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeSector.certifiedProtocols.map((prot, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-cyan-300 font-bold">
                    {prot}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-2">
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">REPRESENTATIVE CONTRACT HIGHLIGHT</span>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                {activeSector.caseSummary}
              </p>
            </div>
          </div>

          {/* Requisition Action */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              Need custom regulatory scoping for your {activeSector.title.split(' ')[0]} facility?
            </span>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2"
            >
              <span>Initiate Sector Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Telemetry Lightbox Modal */}
      {activeModalImage && (
        <ImageTelemetryModal
          image={activeModalImage}
          allImages={OPERATIONAL_IMAGES}
          onClose={() => setActiveModalImage(null)}
          onSelectImage={(img) => setActiveModalImage(img)}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};

