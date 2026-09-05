import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  Layers, 
  Eye, 
  EyeOff, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { OperationalImageItem, NavigationTab, ServiceId } from '../types';

interface ImageTelemetryModalProps {
  image: OperationalImageItem | null;
  allImages: OperationalImageItem[];
  onClose: () => void;
  onSelectImage: (img: OperationalImageItem) => void;
  onNavigate?: (tab: NavigationTab, serviceId?: ServiceId) => void;
}

export const ImageTelemetryModal: React.FC<ImageTelemetryModalProps> = ({
  image,
  allImages,
  onClose,
  onSelectImage,
  onNavigate
}) => {
  const [showTelemetryHUD, setShowTelemetryHUD] = useState<boolean>(true);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, allImages]);

  if (!image) return null;

  const currentIndex = allImages.findIndex(img => img.id === image.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    onSelectImage(allImages[nextIndex]);
    setIsZoomed(false);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    onSelectImage(allImages[prevIndex]);
    setIsZoomed(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Modal Container */}
      <div 
        id="image-telemetry-lightbox"
        className="bg-slate-900 border border-cyan-500/30 rounded-3xl max-w-6xl w-full max-h-[95vh] flex flex-col overflow-hidden shadow-2xl shadow-cyan-950/80"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[11px] font-mono font-bold bg-cyan-950 border border-cyan-500/40 text-cyan-300 rounded-md">
              {image.badge}
            </span>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{image.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTelemetryHUD(!showTelemetryHUD)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition flex items-center gap-1.5 ${
                showTelemetryHUD 
                  ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300' 
                  : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
              title="Toggle HUD Telemetry Overlay"
            >
              {showTelemetryHUD ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">HUD Telemetry</span>
            </button>

            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="Toggle Zoom"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/60 hover:text-rose-400 text-slate-300 transition"
              title="Close inspection"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Area */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[320px] max-h-[62vh]">
          {/* Main Image */}
          <div className={`w-full h-full flex items-center justify-center transition-transform duration-300 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
            <img
              src={image.imageUrl}
              alt={image.title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[60vh] object-contain select-none"
            />
          </div>

          {/* HUD Telemetry Visual Overlay */}
          {showTelemetryHUD && (
            <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
              {/* Top Corners */}
              <div className="flex justify-between items-start">
                <div className="bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 rounded-lg p-2.5 font-mono text-[10px] text-cyan-300 max-w-sm space-y-0.5">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>REAL-TIME SCADA TELEMETRY</span>
                  </div>
                  <div className="text-slate-300 truncate">{image.telemetryTag}</div>
                </div>

                <div className="bg-slate-950/80 backdrop-blur-md border border-slate-700/60 rounded-lg px-2.5 py-1 font-mono text-[10px] text-slate-300">
                  <span>PHOTO REF #{image.id}</span>
                </div>
              </div>

              {/* Bottom Corners */}
              <div className="flex justify-between items-end">
                <div className="bg-slate-950/85 backdrop-blur-md border border-slate-700 rounded-lg p-2.5 max-w-md hidden sm:block">
                  <div className="text-xs font-bold text-white mb-0.5">{image.title}</div>
                  <div className="text-[11px] text-slate-300 font-mono">{image.subtitle}</div>
                </div>

                <div className="bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 rounded-lg px-3 py-1 font-mono text-[11px] text-cyan-400 font-bold">
                  {currentIndex + 1} / {allImages.length}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition shadow-lg"
            title="Previous asset (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-cyan-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition shadow-lg"
            title="Next asset (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Bottom Metadata Panel */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">{image.category}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono text-slate-400">{image.section}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">{image.title}</h3>
            </div>

            {image.serviceId && onNavigate && (
              <button
                onClick={() => {
                  onClose();
                  onNavigate('services', image.serviceId);
                }}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold font-mono uppercase rounded-lg transition flex items-center gap-1.5 self-start sm:self-auto shrink-0"
              >
                <span>View Service Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {image.description}
          </p>

          {/* Thumbnails strip */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {allImages.map((thumb) => {
              const isSelected = thumb.id === image.id;
              return (
                <button
                  key={thumb.id}
                  onClick={() => onSelectImage(thumb)}
                  className={`w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden shrink-0 border transition ${
                    isSelected ? 'border-cyan-400 ring-2 ring-cyan-500/30' : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb.imageUrl}
                    alt={thumb.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
