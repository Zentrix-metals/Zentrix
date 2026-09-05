import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Award, 
  BookOpen, 
  Lock, 
  Mail, 
  Linkedin, 
  X, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck,
  Building2,
  ExternalLink,
  Maximize2,
  MapPin,
  Activity
} from 'lucide-react';
import { TeamMember, NavigationTab, OperationalImageItem } from '../types';
import { TEAM_MEMBERS, OPERATIONAL_IMAGES } from '../data/mockData';
import { ImageTelemetryModal } from '../components/ImageTelemetryModal';

interface TeamViewProps {
  initialLeaderId?: string | null;
  onNavigate: (tab: NavigationTab) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({
  initialLeaderId,
  onNavigate
}) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('All');
  const [activeLeaderId, setActiveLeaderId] = useState<string | null>(initialLeaderId || null);
  const [activeModalImage, setActiveModalImage] = useState<OperationalImageItem | null>(null);

  const boardroomImage = OPERATIONAL_IMAGES.find(img => img.id === 'img-executive-leadership-boardroom');

  const divisions = [
    'All',
    'Executive Board',
    'Nuclear Physics & Safety',
    'Geosciences & Exploration',
    'Materials & Metallurgy',
    'Regulatory & Ethics'
  ];

  const filteredTeam = useMemo(() => {
    if (selectedDivision === 'All') return TEAM_MEMBERS;
    return TEAM_MEMBERS.filter(m => m.division === selectedDivision);
  }, [selectedDivision]);

  const activeLeader = useMemo(() => {
    if (!activeLeaderId) return null;
    return TEAM_MEMBERS.find(m => m.id === activeLeaderId) || null;
  }, [activeLeaderId]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
          <Users className="w-3.5 h-3.5" />
          <span>SCIENTIFIC GOVERNANCE & LEADERSHIP</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Executive Leadership & World-Renowned Scientists
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Our senior fellows, health physics directors, and geological exploration leaders bring decades of experience from national laboratories, sovereign regulatory commissions, and advanced research institutions.
        </p>
      </div>

      {/* Boardroom Showcase Banner */}
      {boardroomImage && (
        <div 
          onClick={() => setActiveModalImage(boardroomImage)}
          className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden cursor-pointer group shadow-2xl relative"
        >
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
            <img
              src={boardroomImage.imageUrl}
              alt={boardroomImage.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-cyan-300 rounded-lg text-xs font-mono">
                {boardroomImage.badge}
              </span>
              <span className="px-3 py-1 bg-slate-950/85 backdrop-blur-md border border-slate-700 text-slate-300 rounded-lg text-xs font-mono flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Click to Inspect Boardroom</span>
              </span>
            </div>

            <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-xs font-mono text-slate-300">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">{boardroomImage.title}</h3>
                <p className="text-slate-300 max-w-xl line-clamp-1">{boardroomImage.description}</p>
              </div>
              <div className="text-cyan-400 text-[11px] bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30 whitespace-nowrap">
                {boardroomImage.location}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Division Selector */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {divisions.map((div) => (
          <button
            key={div}
            onClick={() => setSelectedDivision(div)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono transition ${
              selectedDivision === div
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {div}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeam.map((member) => (
          <div
            key={member.id}
            onClick={() => setActiveLeaderId(member.id)}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500/40 transition cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-slate-700 group-hover:border-cyan-400 transition"
                />
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block truncate">
                    {member.division}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition truncate">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Credentials pills */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                {member.credentials.slice(0, 2).map((cred, i) => (
                  <div key={i} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5 truncate">
                    <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{cred}</span>
                  </div>
                ))}
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] font-mono">
                <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-slate-400">
                  <span className="text-white font-bold">{member.publicationsCount}</span> Papers Published
                </div>
                <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-slate-400">
                  <span className="text-cyan-300 font-bold">{member.patentsCount}</span> Patents Held
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500 truncate max-w-[180px]">
                {member.securityClearance}
              </span>
              <span className="text-xs font-bold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Dossier</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership Dossier Modal */}
      {activeLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div 
            className="w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-slate-950 border-b border-slate-800 p-6 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <img
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-400"
                />
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase">{activeLeader.division}</span>
                  <h2 className="text-2xl font-bold text-white">{activeLeader.name}</h2>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">{activeLeader.role}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveLeaderId(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Academic & Professional Credentials:
                </h4>
                <div className="space-y-1.5">
                  {activeLeader.credentials.map((cred, i) => (
                    <div key={i} className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 flex items-center gap-2">
                      <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Biographical Overview:
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeLeader.bio}
                </p>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                  Core Scientific Domains:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeLeader.specialties.map((spec, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono rounded-lg">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clearance & Metrics */}
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block text-[10px]">SECURITY CLEARANCE:</span>
                  <span className="text-emerald-400 font-bold">{activeLeader.securityClearance}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px]">DIRECT INQUIRIES:</span>
                  <span className="text-cyan-300 font-bold">{activeLeader.email}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-950 border-t border-slate-800 p-4 sm:p-6 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">RadiaCore Senior Governance Board</span>
              <button
                onClick={() => {
                  setActiveLeaderId(null);
                  onNavigate('contact');
                }}
                className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Telemetry Lightbox Modal */}
      {activeModalImage && (
        <ImageTelemetryModal
          image={activeModalImage}
          allImages={OPERATIONAL_IMAGES}
          onClose={() => setActiveModalImage(null)}
          onSelectImage={(img) => setActiveModalImage(img)}
        />
      )}
    </div>
  );
};

