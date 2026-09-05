import React, { useState, useEffect } from 'react';
import { Activity, Radio, ShieldCheck, Waves, Gauge, RefreshCw, Cpu } from 'lucide-react';

export const LiveTelemetrySimulator: React.FC = () => {
  const [gammaFlux, setGammaFlux] = useState<number>(0.118);
  const [countsPerSec, setCountsPerSec] = useState<number>(24.2);
  const [radonFlux, setRadonFlux] = useState<number>(14.6);
  const [seismicRes, setSeismicRes] = useState<number>(182.4);
  const [activeSensors, setActiveSensors] = useState<number>(142);
  const [facilityStatus, setFacilityStatus] = useState<'NOMINAL' | 'ELEVATED' | 'CALIBRATING'>('NOMINAL');
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate minor natural fluctuations
      const gammaDelta = (Math.random() - 0.5) * 0.008;
      const cpsDelta = (Math.random() - 0.5) * 1.6;
      const radonDelta = (Math.random() - 0.5) * 0.4;
      const seismicDelta = (Math.random() - 0.5) * 1.2;

      setGammaFlux(prev => +(Math.max(0.08, prev + gammaDelta)).toFixed(3));
      setCountsPerSec(prev => +(Math.max(12, prev + cpsDelta)).toFixed(1));
      setRadonFlux(prev => +(Math.max(8, prev + radonDelta)).toFixed(1));
      setSeismicRes(prev => +(Math.max(150, prev + seismicDelta)).toFixed(1));
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  const handleManualCalibrate = () => {
    setIsUpdating(true);
    setFacilityStatus('CALIBRATING');
    setTimeout(() => {
      setGammaFlux(0.112);
      setCountsPerSec(23.8);
      setRadonFlux(14.2);
      setSeismicRes(180.0);
      setFacilityStatus('NOMINAL');
      setIsUpdating(false);
    }, 1200);
  };

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-500/20 rounded-xl p-4 sm:p-5 shadow-2xl shadow-cyan-950/40 relative overflow-hidden">
      {/* Background scanline indicator */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400">TELEMETRIC GRID MATRIX</span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                LIVE SCADA
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">Oak Ridge Hot Lab & Perth Subsurface Node</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleManualCalibrate}
            disabled={isUpdating}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 border border-slate-700 rounded transition"
            title="Recalibrate sensor baselines"
          >
            <RefreshCw className={`w-3 h-3 text-cyan-400 ${isUpdating ? 'animate-spin' : ''}`} />
            <span>{isUpdating ? 'CALIBRATING...' : 'ZERO SYNC'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Metric 1: Gamma Ambient Dose */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-3 relative group hover:border-cyan-500/40 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-mono flex items-center gap-1">
              <Radio className="w-3.5 h-3.5 text-cyan-400" />
              GAMMA FLUX
            </span>
            <span className="text-[10px] font-mono text-emerald-400">NOMINAL</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-100 tracking-tight">
              {gammaFlux}
            </span>
            <span className="text-[11px] font-mono text-slate-400">μSv/h</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-emerald-500 via-cyan-400 to-amber-500 h-full rounded-full transition-all duration-700" 
              style={{ width: `${Math.min(100, (gammaFlux / 0.25) * 100)}%` }}
            />
          </div>
          <span className="text-[9px] font-mono text-slate-500 block mt-1">Threshold limit: &lt; 0.25 μSv/h</span>
        </div>

        {/* Metric 2: Gross Counts Per Second */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-3 hover:border-cyan-500/40 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-mono flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              DETECTOR CPS
            </span>
            <span className="text-[10px] font-mono text-cyan-400">HPGe 77K</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-100 tracking-tight">
              {countsPerSec}
            </span>
            <span className="text-[11px] font-mono text-slate-400">CPS</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-emerald-400 h-full rounded-full transition-all duration-700" 
              style={{ width: `${Math.min(100, (countsPerSec / 50) * 100)}%` }}
            />
          </div>
          <span className="text-[9px] font-mono text-slate-500 block mt-1">Cryo Dewar: -196°C Normal</span>
        </div>

        {/* Metric 3: Radon Soil Flux */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-3 hover:border-cyan-500/40 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-mono flex items-center gap-1">
              <Waves className="w-3.5 h-3.5 text-amber-400" />
              RADON-222 FLUX
            </span>
            <span className="text-[10px] font-mono text-slate-400">LUCAS CELL</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-100 tracking-tight">
              {radonFlux}
            </span>
            <span className="text-[11px] font-mono text-slate-400">Bq/m³</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-amber-400 h-full rounded-full transition-all duration-700" 
              style={{ width: `${Math.min(100, (radonFlux / 50) * 100)}%` }}
            />
          </div>
          <span className="text-[9px] font-mono text-slate-500 block mt-1">EPA Action Target: &lt; 148 Bq/m³</span>
        </div>

        {/* Metric 4: Apparent Formation Resistivity */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-3 hover:border-cyan-500/40 transition">
          <div className="flex items-center justify-between text-slate-400 mb-1">
            <span className="text-[11px] font-mono flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-sky-400" />
              SUBGRADE RESISTIVITY
            </span>
            <span className="text-[10px] font-mono text-slate-400">BOREHOLE</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-100 tracking-tight">
              {seismicRes}
            </span>
            <span className="text-[11px] font-mono text-slate-400">Ω·m</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-sky-400 h-full rounded-full transition-all duration-700" 
              style={{ width: `${Math.min(100, (seismicRes / 300) * 100)}%` }}
            />
          </div>
          <span className="text-[9px] font-mono text-slate-500 block mt-1">Solid Granite Basalt Stratum</span>
        </div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-slate-300">
            <Cpu className="w-3 h-3 text-cyan-400" />
            Active Remote Telemetry Nodes: <span className="text-cyan-300 font-bold">{activeSensors}</span>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="hidden sm:inline">IAEA Safeguards Telemetry Channel #08-ALPHA</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ALL BIOLOGICAL SHIELDING PERIMETERS SECURE</span>
        </div>
      </div>
    </div>
  );
};
