import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Leaf, 
  FlaskConical, 
  MountainSnow, 
  Atom, 
  Ship, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Globe2, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Zap,
  Building2,
  Lock,
  Layers,
  Camera
} from 'lucide-react';
import { NavigationTab, ServiceId, OperationalImageItem } from '../types';
import { CORE_SERVICES, INDUSTRY_SECTORS, BLOG_POSTS, OPERATIONAL_IMAGES } from '../data/mockData';
import { InteractiveParticleBackground } from '../components/InteractiveParticleBackground';
import { LiveTelemetrySimulator } from '../components/LiveTelemetrySimulator';
import { RadiationDecayCalculator } from '../components/RadiationDecayCalculator';
import { VisualShowcaseGallery } from '../components/VisualShowcaseGallery';
import { ImageTelemetryModal } from '../components/ImageTelemetryModal';

interface HomeViewProps {
  onNavigate: (tab: NavigationTab, serviceId?: ServiceId) => void;
  onOpenArticle: (postId: string) => void;
  onOpenEmergency: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenArticle,
  onOpenEmergency
}) => {
  const [activeStreamTab, setActiveStreamTab] = useState<ServiceId>('radiation-safety');
  const [activeModalImage, setActiveModalImage] = useState<OperationalImageItem | null>(null);

  const activeService = CORE_SERVICES.find(s => s.id === activeStreamTab) || CORE_SERVICES[0];


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
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-8 pb-16 overflow-hidden border-b border-slate-800/80">
        <InteractiveParticleBackground />

        {/* Ambient radial gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-sky-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>SOVEREIGN & COMMERCIAL RADIOLOGICAL EXCELLENCE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Engineering the <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-emerald-400 bg-clip-text text-transparent">
                  Atomic & Subsurface
                </span> <br />
                Frontier.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                Global leaders in high-precision radiation shielding, environmental TENORM remediation, ISO/IEC 17025 radiochemical lab testing, deep geological borehole logging, and certified nuclear materials supply chains.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-cyan-500/25 transition flex items-center gap-2 group"
                >
                  <span>Explore 6 Core Streams</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-semibold text-sm rounded-xl backdrop-blur-md transition flex items-center gap-2"
                >
                  <span>Project Scope Assessment</span>
                </button>

              </div>

              {/* Key Trust badges row */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>IAEA SSR-6 Validated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>NRC Title 10 CFR 20</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>ISO/IEC 17025 Accredited</span>
                </div>
              </div>
            </div>

            {/* Right Hero: Live Telemetry & SCADA Simulator */}
            <div className="lg:col-span-5">
              <LiveTelemetrySimulator />
            </div>
          </div>
        </div>
      </section>

      {/* Live Impact Counters Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-cyan-500/40 transition">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Audits & Licenses</span>
              <Award className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              1,480+
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Critical nuclear, defense, and accelerator facility compliance evaluations completed worldwide.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-emerald-500/40 transition">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Compliance Rate</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">
              99.98%
            </div>
            <p className="text-xs text-slate-400 mt-2">
              First-pass regulatory authorization rate under IAEA, NRC, and EURATOM safety frameworks.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-amber-500/40 transition">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Metals & Minerals</span>
              <Ship className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight">
              1.4M MT
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Class 7 radioactive materials and certified shielding metals transported with zero security incidents.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-6 relative overflow-hidden group hover:border-sky-500/40 transition">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Land Restored</span>
              <Leaf className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-4xl font-extrabold text-sky-400 font-mono tracking-tight">
              18,500 Ha
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Brownfields, uranium mine tailings, and TENORM petrochemical soils returned to unrestricted zoning.
            </p>
          </div>
        </div>
      </section>

      {/* Six Core Business Pillars Interactive Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
            <span>TECHNICAL PORTFOLIO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Six Pillars of Atomic & Geological Excellence
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Select an operational division to inspect engineering capabilities, specialized instrumentation, and international safety certifications.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {CORE_SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStreamTab(s.id)}
              className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                activeStreamTab === s.id
                  ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-lg shadow-cyan-950/60'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="text-cyan-400 mb-2">
                {getServiceIcon(s.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold font-sans block text-slate-100">{s.shortTitle}</span>
                <span className="text-[10px] text-slate-400 font-mono block truncate">{s.category}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Service Detailed Showcase Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-mono bg-cyan-950 border border-cyan-500/30 text-cyan-300 rounded-md uppercase">
                  {activeService.category}
                </span>
                <span className="text-xs font-mono text-slate-400">Pillar Reference: #{activeService.id}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeService.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeService.overview}
              </p>

              {/* Key capabilities */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Key Engineered Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.keyCapabilities.slice(0, 4).map((cap, i) => (
                    <div key={i} className="bg-slate-950/60 border border-slate-800 rounded-xl p-3">
                      <div className="text-[16px] font-bold text-slate-200 mb-1">{cap.title}</div>
                      <div className="text-[14px] text-slate-400 line-clamp-2">{cap.description}</div>
                      {cap.metrics && (
                        <div className="mt-2 text-[10px] font-mono text-cyan-400 font-semibold">
                          {cap.metrics}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onNavigate('services', activeService.id)}
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition flex items-center gap-1.5"
                >
                  <span>Full Technical Specifications</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded-lg transition"
                >
                  Request Division Quote
                </button>
              </div>
            </div>

            {/* Right details box */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-6">
  <div>
    <h4 className="text-sm md:text-base font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
      Instrumentation & Analytical Hardware:
    </h4>
    <ul className="space-y-2.5 text-sm md:text-base font-mono text-slate-300">
      {activeService.instrumentation.map((inst, i) => (
        <li key={i} className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
          <span>{inst}</span>
        </li>
      ))}
    </ul>
  </div>

  <div>
    <h4 className="text-sm md:text-base font-mono uppercase tracking-wider text-slate-400 font-bold mb-2.5">
      Compliance Mandates:
    </h4>
    <div className="flex flex-wrap gap-2">
      {activeService.complianceStandards.map((std, i) => (
        <span key={i} className="text-xs md:text-sm font-mono px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300">
          {std}
        </span>
      ))}
    </div>
  </div>

  {/* Case Study preview */}
  <div className="p-4 bg-cyan-950/20 border border-cyan-500/20 rounded-lg space-y-2">
    <span className="text-xs font-mono uppercase text-cyan-400 font-bold">CASE HIGHLIGHT</span>
    <p className="text-sm md:text-base font-bold text-white">{activeService.caseStudy.title}</p>
    <p className="text-xs md:text-sm text-slate-300 leading-relaxed">{activeService.caseStudy.outcome}</p>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Interactive Isotope Decay & Attenuation Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RadiationDecayCalculator />
      </section>

      {/* Operational Visual & Telemetry Showcase Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VisualShowcaseGallery
          images={OPERATIONAL_IMAGES}
          onSelectImage={(img) => setActiveModalImage(img)}
          onNavigate={onNavigate}
        />
      </section>

      {/* Industry Sectors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">CROSS-SECTOR IMPACT</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Engineered Solutions for Critical Industries
            </h2>
          </div>
          <button
            onClick={() => onNavigate('sectors')}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition"
          >
            <span>Explore All Industry Frameworks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INDUSTRY_SECTORS.slice(0, 3).map((sector) => (
            <div
              key={sector.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-cyan-950 border border-cyan-500/30 text-cyan-300 rounded">
                    {sector.tag}
                  </span>
                  <Zap className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                  {sector.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sector.description}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                  {sector.keySolutions.slice(0, 2).map((sol, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400">{sector.impactMetric}</span>
                <button
                  onClick={() => onNavigate('sectors')}
                  className="text-xs font-bold text-slate-300 group-hover:text-cyan-400 flex items-center gap-1"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Technical Publications & Field Insights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">KNOWLEDGE DISPATCH</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Recent Technical Publications & Field Insights
            </h2>
          </div>
          <button
            onClick={() => onNavigate('insights')}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.id}
              onClick={() => onOpenArticle(post.id)}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-cyan-400 font-semibold">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full object-cover border border-slate-700"
                  />
                  <div className="text-[11px]">
                    <div className="font-semibold text-slate-200">{post.author.name}</div>
                    <div className="text-slate-500">{post.date}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Global Client & Institutional Trust Markers */}
      <section className="border-t border-slate-800/80 bg-slate-900/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
            TRUSTED PARTNER ACROSS SOVEREIGN DEFENSE, NUCLEAR ENERGY & CRITICAL METALS CONSORTIUMS
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-70">
            {['IAEA MEMBER LABS', 'ALLIED DEFENSE CMDRS', 'GLOBAL SMR CONSORTIUM', 'CRITICAL METALS ALLIANCE', 'DEEP DISPOSAL GOVERNANCE', 'EURATOM CONTRACTORS'].map((partner, i) => (
              <div key={i} className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg text-xs font-mono font-bold text-slate-400">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

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
