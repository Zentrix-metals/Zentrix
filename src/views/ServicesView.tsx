import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Leaf, 
  FlaskConical, 
  MountainSnow, 
  Atom, 
  Ship, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  FileCheck, 
  Sparkles, 
  ChevronRight, 
  TrendingUp, 
  Download,
  Maximize2,
  MapPin,
  Activity,
  Camera
} from 'lucide-react';
import { NavigationTab, ServiceId, OperationalImageItem } from '../types';
import { CORE_SERVICES, OPERATIONAL_IMAGES } from '../data/mockData';
import { ImageTelemetryModal } from '../components/ImageTelemetryModal';

interface ServicesViewProps {
  selectedServiceId?: ServiceId;
  onNavigate: (tab: NavigationTab, serviceId?: ServiceId) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  selectedServiceId = 'radiation-safety',
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<ServiceId>(selectedServiceId);
  const [activeModalImage, setActiveModalImage] = useState<OperationalImageItem | null>(null);

  useEffect(() => {
    if (selectedServiceId) {
      setActiveTab(selectedServiceId);
    }
  }, [selectedServiceId]);

  const activeService = CORE_SERVICES.find(s => s.id === activeTab) || CORE_SERVICES[0];

  // Associated operational images for this service
  const serviceImages = OPERATIONAL_IMAGES.filter(img => img.serviceId === activeTab);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Leaf': return <Leaf className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'MountainSnow': return <MountainSnow className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'Ship': return <Ship className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
          <Layers className="w-3.5 h-3.5" />
          <span>TECHNICAL SERVICES SUITE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Comprehensive Nuclear, Environmental & Geological Services
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          From Monte Carlo shielding design and ISO 17025 radiochemical spectrometry to downhole wireline logging and Class 7 maritime logistics, explore our six core technical offerings.
        </p>
      </div>

      {/* Service Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-slate-800 pb-4">
        {CORE_SERVICES.map((service) => {
          const isActive = activeTab === service.id;
          return (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                isActive
                  ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-lg shadow-cyan-950/50'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className={`mb-2 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                {getServiceIcon(service.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold font-sans block text-slate-100">{service.shortTitle}</span>
                <span className="text-[10px] text-slate-400 font-mono block truncate">{service.category}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Active Service Detail Section */}
      <div className="space-y-12 animate-in fade-in duration-300">
        {/* Service Hero Card with Operational Visual Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden relative shadow-2xl">
          {/* Main Visual Top Banner */}
          {serviceImages.length > 0 && (
            <div 
              onClick={() => setActiveModalImage(serviceImages[0])}
              className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950 cursor-pointer group"
            >
              <img
                src={serviceImages[0].imageUrl}
                alt={serviceImages[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-950/60" />
              
              {/* Telemetry Tag Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-mono flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>{serviceImages[0].telemetryTag}</span>
                </div>
                <div className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 rounded-lg text-xs font-mono flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">Click to Inspect Asset</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="font-semibold text-white">{serviceImages[0].location}</span>
                </div>
                <span className="px-2.5 py-0.5 bg-cyan-950 border border-cyan-500/30 text-cyan-300 rounded">
                  {serviceImages[0].badge}
                </span>
              </div>
            </div>
          )}

          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-mono bg-cyan-950 border border-cyan-500/30 text-cyan-300 rounded-md">
                    {activeService.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">Pillar ID: {activeService.id}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {activeService.title}
                </h2>

                <p className="text-base text-cyan-300/90 font-mono font-medium">
                  {activeService.tagline}
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                  {activeService.overview}
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2"
                  >
                    <span>Request Assessment for {activeService.shortTitle}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('resources')}
                    className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded-xl transition flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download Protocol Guide</span>
                  </button>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold block border-b border-slate-800 pb-2">
                  Pillar Benchmarks
                </span>
                <div className="space-y-3">
                  {activeService.keyStats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{stat.label}</span>
                      <span className="font-mono font-bold text-base text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Field Assets Gallery for this Service */}
        {serviceImages.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">DEPLOYED ASSETS</span>
                <h3 className="text-2xl font-bold text-white mt-1">Operational Facilities & Field Hardware</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {serviceImages.length} Operational Photography Assets
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setActiveModalImage(img)}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition cursor-pointer group flex flex-col justify-between shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-950">
                    <img
                      src={img.imageUrl}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 rounded-md">
                        {img.badge}
                      </span>
                      <span className="p-1 rounded-md bg-slate-950/80 text-slate-300 group-hover:text-cyan-400 transition">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="truncate">{img.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition line-clamp-1">
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {img.description}
                    </p>
                    <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-cyan-400 flex items-center justify-between">
                      <span className="truncate">{img.telemetryTag.split('//')[0]}</span>
                      <span>Click to Zoom</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Technical Capabilities */}
        <div className="space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">ENGINEERED WORKFLOWS</span>
            <h3 className="text-2xl font-bold text-white mt-1">Core Operational Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeService.keyCapabilities.map((cap, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold">
                    <span>CAPABILITY #{idx + 1}</span>
                  </div>
                  {cap.metrics && (
                    <span className="text-[11px] font-mono px-2 py-0.5 bg-cyan-950 text-cyan-300 rounded border border-cyan-500/30">
                      {cap.metrics}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-white">{cap.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware & Compliance Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Instrumentation */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
              <Cpu className="w-4 h-4" />
              <span>Deployed Instrumentation & Analytical Systems</span>
            </div>
            <h3 className="text-xl font-bold text-white">Laboratory & Field Hardware</h3>
            <ul className="space-y-3 pt-2">
              {activeService.instrumentation.map((inst, i) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Standards */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
              <FileCheck className="w-4 h-4" />
              <span>Regulatory Frameworks & Standards</span>
            </div>
            <h3 className="text-xl font-bold text-white">Governance & Safety Codes</h3>
            <ul className="space-y-3 pt-2">
              {activeService.complianceStandards.map((std, i) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Case Study Feature */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-4 h-4" />
            <span>FIELD PROVEN RESULTS</span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase">{activeService.caseStudy.clientSector}</span>
            <h3 className="text-2xl font-bold text-white">{activeService.caseStudy.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1">
              <span className="text-xs font-mono text-red-400 uppercase font-bold">1. Challenge</span>
              <p className="text-xs text-slate-300">{activeService.caseStudy.challenge}</p>
            </div>
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase font-bold">2. Engineered Solution</span>
              <p className="text-xs text-slate-300">{activeService.caseStudy.solution}</p>
            </div>
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold">3. Verified Outcome</span>
              <p className="text-xs text-slate-300">{activeService.caseStudy.outcome}</p>
            </div>
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

