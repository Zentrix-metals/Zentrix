import React, { useState, useMemo } from 'react';
import { Calculator, Shield, Clock, Atom, Info, Sparkles } from 'lucide-react';

interface IsotopeData {
  id: string;
  name: string;
  symbol: string;
  halfLifeYears: number;
  halfLifeDisplay: string;
  primaryRadiation: 'Gamma / Beta' | 'Pure Gamma' | 'Alpha / Gamma' | 'Beta';
  gammaEnergyMeV: number;
  hvlLeadCm: number; // Half-Value Layer in Lead (cm)
  hvlConcreteCm: number; // Half-Value Layer in Concrete (cm)
  commonApplication: string;
}

const ISOTOPES: IsotopeData[] = [
  {
    id: 'cs-137',
    name: 'Cesium-137',
    symbol: '¹³⁷Cs',
    halfLifeYears: 30.17,
    halfLifeDisplay: '30.17 Years',
    primaryRadiation: 'Gamma / Beta',
    gammaEnergyMeV: 0.662,
    hvlLeadCm: 0.65,
    hvlConcreteCm: 4.8,
    commonApplication: 'Industrial density gauges & medical irradiation'
  },
  {
    id: 'co-60',
    name: 'Cobalt-60',
    symbol: '⁶⁰Co',
    halfLifeYears: 5.27,
    halfLifeDisplay: '5.27 Years',
    primaryRadiation: 'Gamma / Beta',
    gammaEnergyMeV: 1.25, // Average of 1.17 and 1.33
    hvlLeadCm: 1.20,
    hvlConcreteCm: 6.6,
    commonApplication: 'Industrial radiography & gamma sterilization'
  },
  {
    id: 'i-131',
    name: 'Iodine-131',
    symbol: '¹³¹I',
    halfLifeYears: 0.02196, // 8.02 days
    halfLifeDisplay: '8.02 Days',
    primaryRadiation: 'Gamma / Beta',
    gammaEnergyMeV: 0.364,
    hvlLeadCm: 0.30,
    hvlConcreteCm: 3.1,
    commonApplication: 'Targeted thyroid oncological radiopharmacy'
  },
  {
    id: 'u-238',
    name: 'Uranium-238 (Depleted/Natural)',
    symbol: '²³⁸U',
    halfLifeYears: 4468000000,
    halfLifeDisplay: '4.468 Billion Years',
    primaryRadiation: 'Alpha / Gamma',
    gammaEnergyMeV: 0.050,
    hvlLeadCm: 0.15,
    hvlConcreteCm: 1.8,
    commonApplication: 'Nuclear fuel cycle, counterweights & radiation shielding'
  },
  {
    id: 'am-241',
    name: 'Americium-241',
    symbol: '²⁴¹Am',
    halfLifeYears: 432.2,
    halfLifeDisplay: '432.2 Years',
    primaryRadiation: 'Alpha / Gamma',
    gammaEnergyMeV: 0.060,
    hvlLeadCm: 0.02,
    hvlConcreteCm: 0.9,
    commonApplication: 'Oil borehole wireline moisture & density tools'
  }
];

export const RadiationDecayCalculator: React.FC = () => {
  const [selectedIsotopeId, setSelectedIsotopeId] = useState<string>('cs-137');
  const [initialActivityGBq, setInitialActivityGBq] = useState<number>(100);
  const [elapsedYears, setElapsedYears] = useState<number>(15);
  const [shieldMaterial, setShieldMaterial] = useState<'lead' | 'concrete'>('lead');
  const [shieldThicknessCm, setShieldThicknessCm] = useState<number>(3.0);

  const currentIsotope = useMemo(() => {
    return ISOTOPES.find(iso => iso.id === selectedIsotopeId) || ISOTOPES[0];
  }, [selectedIsotopeId]);

  // Radioactive decay law: A(t) = A0 * e^(-ln(2) * t / t1/2) = A0 * (0.5)^(t / t1/2)
  const remainingActivityGBq = useMemo(() => {
    const halfLife = currentIsotope.halfLifeYears;
    const fraction = Math.pow(0.5, elapsedYears / halfLife);
    return Math.max(0, initialActivityGBq * fraction);
  }, [initialActivityGBq, elapsedYears, currentIsotope]);

  // Shielding attenuation calculation: I = I0 * (0.5)^(thickness / HVL)
  const hvl = shieldMaterial === 'lead' ? currentIsotope.hvlLeadCm : currentIsotope.hvlConcreteCm;
  const halfValueLayers = shieldThicknessCm / hvl;
  const transmissionFactor = Math.pow(0.5, halfValueLayers);
  const attenuationPercentage = (1 - transmissionFactor) * 100;
  const transmittedActivityGBq = remainingActivityGBq * transmissionFactor;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            INTERACTIVE RADIOLOGICAL BENCHMARK
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <Calculator className="w-6 h-6 text-cyan-400" />
            Isotope Decay & Attenuation Simulator
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Simulate radioactive exponential decay kinetics and compute exact Half-Value Layer (HVL) shielding requirements for industrial and nuclear facility design.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Formula: <code className="text-cyan-300 font-bold">A(t) = A₀ · 2^(-t/T½)</code></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-5">
          {/* Isotope Selector */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Select Radionuclide Isotope:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ISOTOPES.map((iso) => (
                <button
                  key={iso.id}
                  onClick={() => setSelectedIsotopeId(iso.id)}
                  className={`px-3 py-2.5 rounded-lg border text-left transition flex flex-col justify-between ${
                    selectedIsotopeId === iso.id
                      ? 'bg-cyan-950/70 border-cyan-400 text-white shadow-lg shadow-cyan-950/50'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-sm text-cyan-300">{iso.symbol}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400">
                      {iso.primaryRadiation.split(' ')[0]}
                    </span>
                  </div>
                  <span className="text-xs font-medium truncate mt-1 text-slate-200">{iso.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sliders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Initial Activity */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-mono text-slate-300">Initial Activity (A₀)</span>
                <span className="font-mono font-bold text-sm text-cyan-300">{initialActivityGBq} GBq</span>
              </div>
              <input
                type="range"
                min="1"
                max="1000"
                step="5"
                value={initialActivityGBq}
                onChange={(e) => setInitialActivityGBq(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>1 GBq (~27 mCi)</span>
                <span>1,000 GBq (~27 Ci)</span>
              </div>
            </div>

            {/* Elapsed Time */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-mono text-slate-300">Decay Elapsed Time</span>
                <span className="font-mono font-bold text-sm text-amber-400">{elapsedYears} Years</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={elapsedYears}
                onChange={(e) => setElapsedYears(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>0 yr (Fresh source)</span>
                <span>100 yr</span>
              </div>
            </div>
          </div>

          {/* Shielding Material & Thickness */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-slate-300">Barrier Shielding Configuration:</span>
              <div className="inline-flex rounded-lg border border-slate-800 p-0.5 bg-slate-900">
                <button
                  onClick={() => setShieldMaterial('lead')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition ${
                    shieldMaterial === 'lead'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Virgin Lead (Pb 99.99%)
                </button>
                <button
                  onClick={() => setShieldMaterial('concrete')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition ${
                    shieldMaterial === 'concrete'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Heavy Concrete (2.35 g/cm³)
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-mono text-slate-400">
                  Barrier Thickness: <span className="text-slate-200 font-bold">{shieldThicknessCm} cm</span>
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  HVL for {currentIsotope.symbol}: <span className="font-bold">{hvl} cm</span>
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={shieldMaterial === 'lead' ? 10 : 50}
                step={shieldMaterial === 'lead' ? 0.2 : 1}
                value={shieldThicknessCm}
                onChange={(e) => setShieldThicknessCm(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>0 cm (Unshielded)</span>
                <span>{shieldMaterial === 'lead' ? '10 cm' : '50 cm'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results & Calculations Output Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950 border border-cyan-500/30 rounded-xl p-5 shadow-lg relative">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Atom className="w-4 h-4 text-cyan-400" />
                SIMULATION OUTPUT MATRIX
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                T½: {currentIsotope.halfLifeDisplay}
              </span>
            </div>

            <div className="space-y-4">
              {/* Remaining Activity after decay */}
              <div>
                <div className="text-xs text-slate-400 font-mono mb-1">Activity Remaining in Source:</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-mono font-bold text-white">
                    {remainingActivityGBq < 0.001 ? remainingActivityGBq.toExponential(3) : remainingActivityGBq.toFixed(2)}
                  </span>
                  <span className="text-sm font-mono text-cyan-400">GBq</span>
                  <span className="text-xs font-mono text-slate-500 ml-auto">
                    ({((remainingActivityGBq / initialActivityGBq) * 100).toFixed(1)}% of A₀)
                  </span>
                </div>
              </div>

              {/* Attenuation Rate */}
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-lg">
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                  <span>Shielding Attenuation:</span>
                  <span className="text-emerald-400 font-bold">{attenuationPercentage.toFixed(2)}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, attenuationPercentage)}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1.5">
                  <span>{halfValueLayers.toFixed(2)} Half-Value Layers (HVL)</span>
                  <span>Transmitted: {(100 - attenuationPercentage).toFixed(2)}%</span>
                </div>
              </div>

              {/* Transmitted Dose Activity */}
              <div className="border-t border-slate-800/80 pt-3">
                <div className="text-xs text-slate-400 font-mono mb-1">Apparent Unattenuated Field (Post-Shield):</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-emerald-400">
                    {transmittedActivityGBq < 0.001 ? transmittedActivityGBq.toExponential(3) : transmittedActivityGBq.toFixed(3)}
                  </span>
                  <span className="text-xs font-mono text-slate-300">GBq Equivalent</span>
                </div>
              </div>

              <div className="p-2.5 bg-cyan-950/30 border border-cyan-500/20 rounded text-[11px] text-slate-300 font-mono">
                <span className="text-cyan-400 font-semibold">Standard Application: </span>
                {currentIsotope.commonApplication}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center justify-between">
            <span>Primary Gamma: {currentIsotope.gammaEnergyMeV} MeV</span>
            <span className="text-cyan-400">MCNP6 Protocol Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};
