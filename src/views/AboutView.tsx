import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Globe2, 
  History, 
  Target, 
  Compass, 
  Leaf, 
  Lock, 
  MapPin, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  Layers,
  FileCheck,
  Maximize2,
  Users,
  Building2,
  Activity
} from 'lucide-react';
import { NavigationTab, OperationalImageItem } from '../types';
import { GLOBAL_OFFICES, OPERATIONAL_IMAGES } from '../data/mockData';
import { ImageTelemetryModal } from '../components/ImageTelemetryModal';

interface AboutViewProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const [activeModalImage, setActiveModalImage] = useState<OperationalImageItem | null>(null);

  const hqImage = OPERATIONAL_IMAGES.find(img => img.id === 'img-corporate-hq-twilight');
  const cavernImage = OPERATIONAL_IMAGES.find(img => img.id === 'img-subsurface-lab');
  const boardroomImage = OPERATIONAL_IMAGES.find(img => img.id === 'img-executive-leadership-boardroom');
  const gisImage = OPERATIONAL_IMAGES.find(img => img.id === 'img-geoscience-gis-conference');

  const milestones = [
    {
      year: '1998',
      title: 'Founding & First Oak Ridge Research Hub',
      description: 'Established by former national laboratory health physicists to pioneer ultra-low background gamma spectroscopy and custom radiological shielding for accelerator research.'
    },
    {
      year: '2006',
      title: 'Global Environmental Remediation Division',
      description: 'Launched our dedicated NORM/TENORM soil decontamination units in response to emerging oil/gas scale pollution and legacy uranium mill tailings challenges.'
    },
    {
      year: '2014',
      title: 'Expansion into Deep Geosciences & Wireline Logging',
      description: 'Incorporated downhole spectral gamma wireline logging and 3D geophysical resistivity tomography, establishing operational depots in Perth, Australia.'
    },
    {
      year: '2020',
      title: 'Class 7 Nuclear Metals Maritime Logistics Network',
      description: 'Certified under IMO IMDG Class 7 and IAEA SSR-6 to execute trans-oceanic shipping of certified nuclear-grade alloys and Type B(U) shipping casks.'
    },
    {
      year: '2026',
      title: 'Next-Gen SMR & Rare Earth Hydrometallurgy Operations',
      description: 'Deploying MCNP6 graded-Z shielding packages for commercial SMRs and closed-loop Monazite cracking plants across 48 allied sovereign nations.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 lg:space-y-24">
      {/* Header Banner */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
          <History className="w-3.5 h-3.5" />
          <span>OUR MISSION & HERITAGE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Pioneering Radiological Safety & Earth Sciences for Over a Quarter Century
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          RadiaCore Technologies provides trusted scientific governance, high-consequence engineering, and supply chain integrity across the atomic fuel cycle and subsurface earth systems.
        </p>
      </div>

      {/* Corporate HQ Showcase Banner */}
      {hqImage && (
        <div 
          onClick={() => setActiveModalImage(hqImage)}
          className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden cursor-pointer group shadow-2xl relative"
        >
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
            <img
              src={hqImage.imageUrl}
              alt={hqImage.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-mono">
                {hqImage.badge}
              </span>
              <span className="px-3 py-1 bg-slate-950/85 backdrop-blur-md border border-slate-700 text-slate-300 rounded-lg text-xs font-mono flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Click to Inspect Campus</span>
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{hqImage.location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {hqImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  {hqImage.description}
                </p>
              </div>
              <div className="text-[11px] font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1.5 rounded-lg border border-cyan-500/30 whitespace-nowrap">
                {hqImage.telemetryTag.split('//')[0]}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mission & Vision Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden group hover:border-cyan-500/40 transition">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Corporate Mission</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            To deliver uncompromised radiation safety, ecological decontamination, and rigorous isotopic intelligence that enables humanity to harness clean nuclear power, advance medical isotopes, and extract critical minerals responsibly.
          </p>
          <ul className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Rigorous adherence to the ALARA radiological protection principle</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% first-pass regulatory compliance across IAEA and NRC jurisdictions</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden group hover:border-emerald-500/40 transition">
          <div className="w-12 h-12 rounded-xl bg-emerald-950/70 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Long-Term Vision</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            To serve as the definitive global benchmark for radiological verification, closed-loop hazardous waste stabilization, and ethical strategic metals trade in the transition to next-generation energy systems.
          </p>
          <ul className="space-y-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
            <li className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>Zero-discharge environmental site remediation frameworks</span>
            </li>
            <li className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>Strict non-proliferation safeguards and dual-use supply chain verification</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Global Research Infrastructure Visual Bento */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">SPECIALIZED INFRASTRUCTURE</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Global Research Caverns & Visualization Hubs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cavernImage && (
            <div
              onClick={() => setActiveModalImage(cavernImage)}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition cursor-pointer group shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={cavernImage.imageUrl}
                  alt={cavernImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-slate-950/85 border border-cyan-500/40 text-cyan-300 rounded">
                    {cavernImage.badge}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cavernImage.location}</span>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  {cavernImage.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {cavernImage.description}
                </p>
                <div className="pt-2 text-[10px] font-mono text-cyan-400">
                  {cavernImage.telemetryTag}
                </div>
              </div>
            </div>
          )}

          {gisImage && (
            <div
              onClick={() => setActiveModalImage(gisImage)}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition cursor-pointer group shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={gisImage.imageUrl}
                  alt={gisImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-slate-950/85 border border-cyan-500/40 text-cyan-300 rounded">
                    {gisImage.badge}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{gisImage.location}</span>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  {gisImage.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {gisImage.description}
                </p>
                <div className="pt-2 text-[10px] font-mono text-cyan-400">
                  {gisImage.telemetryTag}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Leadership Boardroom Spotlight */}
      {boardroomImage && (
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <Users className="w-4 h-4" />
                <span>EXECUTIVE GOVERNANCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Guided by World-Leading Nuclear Physicists & Geoscientists
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our board and senior scientific fellows steer complex regulatory submissions, environmental remediation covenants, and international strategic metals trade.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('team')}
                  className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase font-mono rounded-xl transition flex items-center gap-2"
                >
                  <span>Meet Executive Leadership</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div 
              onClick={() => setActiveModalImage(boardroomImage)}
              className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 cursor-pointer group relative shadow-2xl"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-950">
                <img
                  src={boardroomImage.imageUrl}
                  alt={boardroomImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="font-semibold text-white">{boardroomImage.title}</span>
                  <span className="text-cyan-400">Inspect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Heritage Timeline */}
      <div className="space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">CHRONICLE OF EXCELLENCE</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            28 Years of Engineering Milestones
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:bg-cyan-500 transition">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 group-hover:border-cyan-500/40 transition">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-white mt-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Accreditations & Standards Matrix */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase">INTERNATIONAL COMPLIANCE</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Accreditations & Regulatory Authorizations
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <FileCheck className="w-4 h-4" />
            <span>42 Fully Certified Laboratory Facilities</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold">ISO/IEC 17025:2017</span>
            <h4 className="text-sm font-bold text-white">Testing & Calibration</h4>
            <p className="text-xs text-slate-400">
              Covers HPGe gamma spectrometry, alpha scintillation, and ICP-MS isotopic assay.
            </p>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold">IAEA SSR-6 / GSG-7</span>
            <h4 className="text-sm font-bold text-white">Transport & Protection</h4>
            <p className="text-xs text-slate-400">
              International atomic safety standards for radioactive material packaging and public dose control.
            </p>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold">US NRC 10 CFR Part 20</span>
            <h4 className="text-sm font-bold text-white">Dose Standards</h4>
            <p className="text-xs text-slate-400">
              Compliance protocols for occupational limits, ALARA engineering, and sealed source licensing.
            </p>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
            <span className="text-xs font-mono text-cyan-400 font-bold">IMO IMDG Class 7</span>
            <h4 className="text-sm font-bold text-white">Maritime Dangerous Goods</h4>
            <p className="text-xs text-slate-400">
              Certified containerization, vessel placarding, and Class 7 emergency convoy protocol.
            </p>
          </div>
        </div>
      </div>

      {/* Global Tactical Facilities Directory */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase">TACTICAL FOOTPRINT</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Global Operations & Regional Centers
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GLOBAL_OFFICES.map((off) => (
            <div key={off.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 hover:border-cyan-500/40 transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{off.city}, {off.country}</h3>
                  <p className="text-xs font-mono text-cyan-400">{off.role}</p>
                </div>
                <Globe2 className="w-5 h-5 text-slate-500" />
              </div>

              <div className="text-xs text-slate-300 space-y-1.5 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{off.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{off.phone}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1 font-mono">
                <div className="text-slate-200 font-bold uppercase text-[10px]">Facility Capabilities:</div>
                {off.facilitySpecs.map((spec, idx) => (
                  <div key={idx} className="truncate">• {spec}</div>
                ))}
              </div>
            </div>
          ))}
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

