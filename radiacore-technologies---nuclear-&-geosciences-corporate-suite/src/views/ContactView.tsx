import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Lock, 
  Send, 
  Sparkles,
  Building2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { InquiryFormData, NavigationTab } from '../types';
import { GLOBAL_OFFICES, CORE_SERVICES } from '../data/mockData';

interface ContactViewProps {
  onOpenEmergency: () => void;
  onNavigate: (tab: NavigationTab) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onOpenEmergency,
  onNavigate
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<InquiryFormData>({
    stream: 'Radiation Safety & Protection Solutions',
    urgency: 'routine',
    siteType: 'Commercial Nuclear Power Plant',
    sampleVolume: '10 - 50 Samples / Quarterly Assay',
    location: 'North America / EU Region',
    complianceNeed: ['IAEA SSR-6 Standards', 'ISO/IEC 17025 Certified Assay'],
    timeline: '1 - 3 Months',
    company: '',
    name: '',
    email: '',
    phone: '',
    details: '',
    ndaRequired: true
  });

  const handleComplianceToggle = (item: string) => {
    setFormData(prev => {
      const exists = prev.complianceNeed.includes(item);
      if (exists) {
        return { ...prev, complianceNeed: prev.complianceNeed.filter(i => i !== item) };
      } else {
        return { ...prev, complianceNeed: [...prev.complianceNeed, item] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
          <Mail className="w-3.5 h-3.5" />
          <span>PROJECT INQUIRY & STRATEGIC ENGAGEMENT PORTAL</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Initiate a Protocol Assessment or Technical Consultation
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Submit your project specifications through our structured assessment wizard or contact our specialized regional command centers directly.
        </p>
      </div>

      {/* Emergency Red Line Callout Box */}
      <div className="bg-red-950/40 border border-red-500/40 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-600/30 border border-red-500 rounded-xl animate-pulse text-red-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-red-400">IMMEDIATE RADIOLOGICAL INCIDENT?</span>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-red-500 text-slate-950 font-bold rounded">
                PRIORITY RED LINE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              24/7 direct satellite dispatch for sealed source containment, hazardous spills, or transport anomalies.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenEmergency}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs rounded-xl shadow-lg shadow-red-950/50 transition flex items-center justify-center gap-2 shrink-0"
        >
          <PhoneCall className="w-4 h-4" />
          <span>ACCESS 24/7 DISPATCH</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive 4-Step Project Assessment Wizard */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
          {/* Progress bar */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="text-cyan-400 font-bold uppercase">
                Step {currentStep} of 4: {currentStep === 1 ? 'Pillar & Urgency' : currentStep === 2 ? 'Site & Volume Specs' : currentStep === 3 ? 'Compliance & Security' : 'Investigator Details'}
              </span>
              <span>{currentStep * 25}% Complete</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-sky-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${currentStep * 25}%` }}
              />
            </div>
          </div>

          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Project Protocol Requisition Logged</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="font-bold text-cyan-300">{formData.name || 'Investigator'}</span>. A lead health physicist from our regional technical team will review your specifications under strict NDA and reply within 1 business day.
              </p>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-slate-400">
                <div>ASSESSMENT REFERENCE: <span className="text-cyan-400 font-bold">RAD-REQ-{Math.floor(10000 + Math.random() * 90000)}</span></div>
                <div>SELECTED STREAM: <span className="text-slate-200">{formData.stream}</span></div>
                <div>COMPLIANCE TIER: <span className="text-emerald-400">{formData.complianceNeed.join(', ') || 'Standard ALARA'}</span></div>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                }}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono rounded-lg transition"
              >
                Submit Additional Project Scope
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Stream & Urgency */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      1. Select Primary Business Stream:
                    </label>
                    <select
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none font-sans"
                    >
                      {CORE_SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      2. Project Urgency Tier:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'routine', label: 'Routine Assessment', desc: 'Standard turnaround (2-4 wks)' },
                        { id: 'priority', label: 'Priority Audit', desc: 'Accelerated review (3-5 days)' },
                        { id: 'emergency-containment', label: 'Immediate Field Dispatch', desc: '< 24hr deployment' }
                      ].map((urg) => (
                        <button
                          type="button"
                          key={urg.id}
                          onClick={() => setFormData({ ...formData, urgency: urg.id as any })}
                          className={`p-3 rounded-xl border text-left transition ${
                            formData.urgency === urg.id
                              ? 'bg-cyan-950/80 border-cyan-400 text-white'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span className="text-xs font-bold font-mono block text-slate-200">{urg.label}</span>
                          <span className="text-[10px] text-slate-500 font-mono block mt-0.5">{urg.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Site Specifications */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Facility / Infrastructure Type:
                    </label>
                    <select
                      value={formData.siteType}
                      onChange={(e) => setFormData({ ...formData, siteType: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="Commercial Nuclear Power Plant">Commercial Nuclear Power Plant (PWR/BWR/SMR)</option>
                      <option value="Research Cyclotron & Medical Radiopharmacy">Research Cyclotron & Medical Radiopharmacy</option>
                      <option value="Petrochemical / TENORM Decommissioning Site">Petrochemical / TENORM Decommissioning Site</option>
                      <option value="Uranium / Rare Earth Mining Operation">Uranium / Rare Earth Mining Operation</option>
                      <option value="Defense / Classified Naval Facility">Defense / Classified Naval Facility</option>
                      <option value="Deep Borehole Geological Site">Deep Borehole Geological Site</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Geographic Region:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. North America, EU, Western Australia"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Estimated Scope / Volume:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 50 soil cores / 1,200 MT lead"
                        value={formData.sampleVolume}
                        onChange={(e) => setFormData({ ...formData, sampleVolume: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Compliance & NDA */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Required Compliance & Regulatory Standards:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'IAEA SSR-6 Standards',
                      'US NRC Title 10 CFR 20',
                      'ISO/IEC 17025 Certified Assay',
                      'EURATOM Safety Directives',
                      'EPA 40 CFR 192 NORM Clearance',
                      'IMO Class 7 Maritime Transport'
                    ].map((item) => {
                      const isChecked = formData.complianceNeed.includes(item);
                      return (
                        <button
                          type="button"
                          key={item}
                          onClick={() => handleComplianceToggle(item)}
                          className={`p-3 rounded-xl border text-left text-xs font-mono transition flex items-center justify-between ${
                            isChecked
                              ? 'bg-cyan-950/70 border-cyan-400 text-cyan-200 font-bold'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <span>{item}</span>
                          {isChecked && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-cyan-400" />
                        Execute Mutual Non-Disclosure Agreement (NDA)
                      </span>
                      <p className="text-[11px] text-slate-400">
                        Automatically route through encrypted legal portal prior to data transmission.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.ndaRequired}
                      onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                      className="w-4 h-4 accent-cyan-400 rounded cursor-pointer"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Details */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Principal Investigator Name: *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Organization / Ministry: *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. National Energy Authority"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Institutional Email: *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="s.jenkins@energy.gov"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Secure Contact Phone: *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 392-1082"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Specific Project Objectives & Parameters:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Outline target isotopes, dose rates, geological depths, or delivery timelines..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded-xl transition flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Step</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-1.5"
                  >
                    <span>Proceed to Step {currentStep + 1}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-500/25 transition flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Scope</span>
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Global Tactical Hubs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-cyan-400" />
              Regional Command Facilities
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direct access lines to our certified operational stations worldwide.
            </p>

            <div className="space-y-3 pt-2">
              {GLOBAL_OFFICES.slice(0, 3).map((off) => (
                <div key={off.id} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{off.city}, {off.country}</span>
                    <span className="text-[10px] font-mono text-cyan-400">{off.timezone.split(' ')[0]}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span className="truncate">{off.address}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-slate-300">{off.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
