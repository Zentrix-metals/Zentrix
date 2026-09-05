import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  Layers, 
  BookOpen, 
  CheckCircle2, 
  Lock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';
import { NavigationTab, ResourceItem, GlossaryTerm } from '../types';
import { RESOURCE_ITEMS, GLOSSARY_TERMS } from '../data/mockData';

interface ResourcesViewProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'papers' | 'glossary'>('papers');
  const [docFilter, setDocFilter] = useState<string>('All');
  const [glossarySearch, setGlossarySearch] = useState<string>('');
  const [glossaryCategory, setGlossaryCategory] = useState<string>('All');
  const [downloadingDocId, setDownloadingDocId] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [downloadedDocs, setDownloadedDocs] = useState<Record<string, boolean>>({});

  const documentTypes = ['All', 'White Paper', 'Safety Protocol', 'Technical Standard', 'Regulatory Guide'];
  const glossaryCategories = ['All', 'Radiation Safety', 'Nuclear Physics', 'Geology', 'Environmental', 'Metallurgy'];

  const filteredDocs = useMemo(() => {
    if (docFilter === 'All') return RESOURCE_ITEMS;
    return RESOURCE_ITEMS.filter(d => d.type === docFilter);
  }, [docFilter]);

  const filteredGlossary = useMemo(() => {
    return GLOSSARY_TERMS.filter(g => {
      const matchesCategory = glossaryCategory === 'All' || g.category === glossaryCategory;
      const matchesSearch = 
        g.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
        g.definition.toLowerCase().includes(glossarySearch.toLowerCase()) ||
        (g.acronym && g.acronym.toLowerCase().includes(glossarySearch.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [glossarySearch, glossaryCategory]);

  const handleDownload = (doc: ResourceItem) => {
    setDownloadingDocId(doc.id);
    setDownloadProgress(10);
    
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadingDocId(null);
            setDownloadedDocs(prevMap => ({ ...prevMap, [doc.id]: true }));
          }, 400);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
          <FileText className="w-3.5 h-3.5" />
          <span>OPEN TECHNICAL REPOSITORY & REPOSITORY GLOSSARY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical Standards, White Papers & Regulatory Glossary
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Access our certified safety protocols, laboratory calibration methodologies, MCNP6 radiation monographs, and standardized nuclear terminology lexicon.
        </p>
      </div>

      {/* Primary Section Switcher Tabs */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
        <button
          onClick={() => setActiveTab('papers')}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 ${
            activeTab === 'papers'
              ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Technical White Papers & SOPs ({RESOURCE_ITEMS.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('glossary')}
          className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 ${
            activeTab === 'glossary'
              ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Regulatory & Physics Glossary ({GLOSSARY_TERMS.length})</span>
        </button>
      </div>

      {/* Tab 1: Technical Documents */}
      {activeTab === 'papers' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Document Filters */}
          <div className="flex flex-wrap gap-2">
            {documentTypes.map((type) => (
              <button
                key={type}
                onClick={() => setDocFilter(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                  docFilter === type
                    ? 'bg-cyan-950 border border-cyan-400 text-cyan-300 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-cyan-500/40 transition flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[11px] font-mono bg-cyan-950 border border-cyan-500/30 text-cyan-300 rounded font-bold">
                      {doc.documentId}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{doc.date} • {doc.size}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-slate-300">
                      {doc.type}
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      {doc.securityLevel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {doc.abstract}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    Format: PDF ({doc.pages} Pages)
                  </span>

                  {downloadingDocId === doc.id ? (
                    <div className="w-36 space-y-1">
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-cyan-400 h-full transition-all duration-150" 
                          style={{ width: `${downloadProgress}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 block text-right">
                        Downloading {downloadProgress}%
                      </span>
                    </div>
                  ) : downloadedDocs[doc.id] ? (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Downloaded</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDownload(doc)}
                      className="px-4 py-2 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-mono font-bold rounded-lg transition flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Regulatory Glossary */}
      {activeTab === 'glossary' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Glossary Search & Category Filter */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search glossary terms by keyword (e.g., ALARA, Sievert, Becquerel, TENORM, HPGe)..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {glossaryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGlossaryCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                    glossaryCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Glossary Terms Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.length === 0 ? (
              <div className="col-span-full py-12 text-center text-slate-400">
                No glossary terms matching your search query.
              </div>
            ) : (
              filteredGlossary.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/40 transition space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-slate-950 border border-slate-800 text-cyan-400 rounded">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold text-white mt-1.5 flex items-center gap-2">
                        <span>{item.term}</span>
                        {item.acronym && (
                          <span className="font-mono text-cyan-300 font-normal">({item.acronym})</span>
                        )}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.definition}
                  </p>

                  {item.formula && (
                    <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-cyan-300">
                      <span className="text-slate-500">MATHEMATICAL FORMULATION: </span>
                      {item.formula}
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                    <span className="text-slate-400 font-semibold">Regulatory Standard: </span>
                    {item.regulatoryBody}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
