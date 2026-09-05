import React, { useState } from 'react';
import { 
  Maximize2, 
  MapPin, 
  Layers, 
  Activity, 
  Sparkles, 
  Filter,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { OperationalImageItem, NavigationTab, ServiceId } from '../types';
import { OPERATIONAL_IMAGES } from '../data/mockData';
import { ImageTelemetryModal } from './ImageTelemetryModal';

interface VisualShowcaseGalleryProps {
  initialCategory?: string;
  onNavigate?: (tab: NavigationTab, serviceId?: ServiceId) => void;
  limit?: number;
  showHeader?: boolean;
}

export const VisualShowcaseGallery: React.FC<VisualShowcaseGalleryProps> = ({
  initialCategory = 'All Operations',
  onNavigate,
  limit,
  showHeader = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [activeModalImage, setActiveModalImage] = useState<OperationalImageItem | null>(null);

  const categories = [
    'All Operations',
    'Geological Studies',
    'Radiation Safety',
    'Environmental Remediation',
    'Analytical Services',
    'Mining & Extraction',
    'Materials & Metallurgy',
    'Corporate & Facilities'
  ];

  const filteredImages = React.useMemo(() => {
    let list = OPERATIONAL_IMAGES;
    if (selectedCategory !== 'All Operations') {
      list = list.filter(img => img.category === selectedCategory);
    }
    if (limit && limit > 0) {
      list = list.slice(0, limit);
    }
    return list;
  }, [selectedCategory, limit]);

  return (
    <div className="space-y-8">
      {showHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OPERATIONAL FIELD ASSETS & TELEMETRY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Operational Facilities & Research Infrastructure
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Inspect our high-security calibration vaults, deep geological exploration rigs, radiochemical spectrometry suites, and maritime logistics depots.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>19 Verified High-Security Assets</span>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item) => (
          <div
            key={item.id}
            id={item.id}
            onClick={() => setActiveModalImage(item)}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition cursor-pointer group flex flex-col justify-between shadow-lg"
          >
            {/* Image Preview Container */}
            <div className="relative aspect-video overflow-hidden bg-slate-950">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 rounded-md">
                  {item.badge}
                </span>
                <span className="p-1 rounded-md bg-slate-950/80 text-slate-300 group-hover:text-cyan-400 group-hover:bg-slate-900 transition">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Location Overlay */}
              <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 space-y-2.5 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                  {item.category}
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Telemetry pill */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="truncate text-slate-400">{item.telemetryTag.split('//')[0]}</span>
                <span className="text-cyan-400 group-hover:translate-x-0.5 transition flex items-center gap-0.5">
                  <span>Inspect</span>
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
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
