import React, { useState } from 'react';
import { AlertTriangle, PhoneCall, ShieldAlert, Radio, Clock, CheckCircle2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EmergencyHotlineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyHotlineModal: React.FC<EmergencyHotlineModalProps> = ({ isOpen, onClose }) => {
  const [incidentType, setIncidentType] = useState('Radiological Containment Anomaly');
  const [facilityLocation, setFacilityLocation] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [isDispatched, setIsDispatched] = useState(false);

  if (!isOpen) return null;

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDispatched(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div 
        className="w-full max-w-xl bg-slate-900 border-2 border-red-500/60 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Urgent Header */}
        <div className="bg-red-950/80 border-b border-red-500/40 p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/30 border border-red-500 rounded-lg animate-pulse text-red-400">
              <ShieldAlert className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-red-400 tracking-wider">PRIORITY RED LINE</span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-red-500 text-slate-950 font-bold rounded">
                  24/7 ACTIVE
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Radiological Emergency & Spill Response
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {isDispatched ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Emergency Response Team Alerted</h4>
                <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto">
                  A certified Health Physicist on-call commander is dialing <span className="font-mono text-cyan-400 font-bold">{contactPhone || '+1 (865) 482-9911'}</span> within 120 seconds.
                </p>
              </div>
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-left max-w-md mx-auto space-y-1 text-slate-400">
                <div>DISPATCH TICKET: <span className="text-cyan-400 font-bold">EMERG-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                <div>CLASSIFICATION: <span className="text-red-400 font-bold">{incidentType}</span></div>
                <div>TACTICAL HUB: Oak Ridge Central Emergency Command</div>
              </div>
              <button
                onClick={() => {
                  setIsDispatched(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleDispatch} className="space-y-4">
              {/* Direct Dial Banner */}
              <div className="p-3.5 bg-red-950/40 border border-red-500/30 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-red-300">DIRECT INSTANT SATELLITE DISPATCH:</div>
                  <div className="text-lg font-mono font-bold text-white mt-0.5">+91 8873282265 | AMIT AGARWAL</div>
                </div>
                <a
                  href="tel:+18654829911"
                  className="px-3.5 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold rounded-lg flex items-center gap-1.5 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  DIAL NOW
                </a>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Incident Classification:
                </label>
                <select
                  value={incidentType}
                  onChange={(e) => setIncidentType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-200 focus:border-red-500 focus:outline-none font-mono"
                >
                  <option value="Radiological Containment Anomaly">Radiological Containment Anomaly / Sealed Source Leak</option>
                  <option value="NORM / TENORM Uncontrolled Spill">NORM / TENORM Uncontrolled Spill or Pipe Rupture</option>
                  <option value="Class 7 Dangerous Goods Transport Incident">Class 7 Dangerous Goods Transport Incident</option>
                  <option value="Unidentified Radioactive Material Discovery">Unidentified Radioactive Material Discovery</option>
                  <option value="Regulatory Urgent Audit / Exceedance Alert">Regulatory Urgent Audit / Exceedance Alert</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Facility / Site Location:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sector 4, Antwerp Port"
                    value={facilityLocation}
                    onChange={(e) => setFacilityLocation(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-200 focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Direct Contact Phone:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2831"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-200 focus:border-red-500 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg text-xs text-slate-400 flex items-start gap-2">
                <Clock className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Immediate escalation triggers encrypted PGP audio dispatch to Regional Health Physics Commander and Nuclear Logistics Officer.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-red-950/60 transition flex items-center justify-center gap-2"
              >
                <Radio className="w-4 h-4 animate-pulse" />
                TRANSMIT PRIORITY DISPATCH ALERT
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
