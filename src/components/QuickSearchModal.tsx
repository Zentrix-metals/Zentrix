import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, Shield, FileText, Users, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { CORE_SERVICES, BLOG_POSTS, TEAM_MEMBERS, RESOURCE_ITEMS, GLOSSARY_TERMS } from '../data/mockData';
import { NavigationTab, ServiceId } from '../types';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: NavigationTab, serviceId?: ServiceId) => void;
  onOpenArticle?: (postId: string) => void;
  onOpenLeader?: (leaderId: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenArticle,
  onOpenLeader
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const services = CORE_SERVICES.filter(
      s => s.title.toLowerCase().includes(q) || s.overview.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
    ).map(s => ({
      type: 'service' as const,
      id: s.id,
      title: s.title,
      subtitle: s.category,
      tag: 'Service Hub'
    }));

    const articles = BLOG_POSTS.filter(
      b => b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q) || b.tags.some(t => t.toLowerCase().includes(q))
    ).map(b => ({
      type: 'article' as const,
      id: b.id,
      title: b.title,
      subtitle: `${b.category} • ${b.readTime}`,
      tag: 'Insight'
    }));

    const resources = RESOURCE_ITEMS.filter(
      r => r.title.toLowerCase().includes(q) || r.abstract.toLowerCase().includes(q) || r.documentId.toLowerCase().includes(q)
    ).map(r => ({
      type: 'resource' as const,
      id: r.id,
      title: r.title,
      subtitle: `${r.documentId} • ${r.type}`,
      tag: 'Document'
    }));

    const team = TEAM_MEMBERS.filter(
      t => t.name.toLowerCase().includes(q) || t.role.toLowerCase().includes(q) || t.specialties.some(s => s.toLowerCase().includes(q))
    ).map(t => ({
      type: 'team' as const,
      id: t.id,
      title: t.name,
      subtitle: t.role,
      tag: 'Leadership'
    }));

    const glossary = GLOSSARY_TERMS.filter(
      g => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q) || (g.acronym && g.acronym.toLowerCase().includes(q))
    ).map(g => ({
      type: 'glossary' as const,
      id: g.term,
      title: g.term,
      subtitle: g.definition.slice(0, 90) + '...',
      tag: 'Glossary'
    }));

    return [...services, ...articles, ...resources, ...team, ...glossary].slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, whitepapers, isotopes, leaders, or glossary terms..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm sm:text-base focus:outline-none font-sans"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-800 rounded text-slate-400 mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded border border-slate-700 hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-slate-800/60">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-slate-500 text-sm">
              <p className="font-mono text-xs text-slate-400 mb-2">TRY SEARCHING FOR:</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['MCNP6 Shielding', 'TENORM Remediation', 'HPGe Gamma Spec', 'Uranium Extraction', 'Zircaloy-4 Alloys', 'ALARA', 'Dr. Elena Rostova'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 text-xs bg-slate-950 border border-slate-800 rounded-full text-slate-400 hover:border-cyan-500/50 hover:text-cyan-300 transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-8 text-center text-slate-400 text-sm">
              No matching records found for <span className="text-cyan-400 font-mono">"{query}"</span>
            </div>
          ) : (
            searchResults.map((item, idx) => (
              <button
                key={`${item.type}-${item.id}-${idx}`}
                onClick={() => {
                  onClose();
                  if (item.type === 'service') {
                    onNavigate('services', item.id as ServiceId);
                  } else if (item.type === 'article') {
                    if (onOpenArticle) onOpenArticle(item.id);
                    else onNavigate('insights');
                  } else if (item.type === 'team') {
                    if (onOpenLeader) onOpenLeader(item.id);
                    else onNavigate('team');
                  } else if (item.type === 'resource' || item.type === 'glossary') {
                    onNavigate('resources');
                  }
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 transition text-left group"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/40 shrink-0">
                    {item.type === 'service' && <Shield className="w-4 h-4" />}
                    {item.type === 'article' && <BookOpen className="w-4 h-4" />}
                    {item.type === 'resource' && <FileText className="w-4 h-4" />}
                    {item.type === 'team' && <Users className="w-4 h-4" />}
                    {item.type === 'glossary' && <Layers className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400">
                        {item.tag}
                      </span>
                      <span className="text-sm font-semibold text-white truncate group-hover:text-cyan-300">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 truncate mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition shrink-0 ml-2" />
              </button>
            ))
          )}
        </div>

        <div className="p-3 bg-slate-950 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex justify-between items-center">
          <span>RadiaCore Global Knowledge Index</span>
          <span>Use ⌘K to open anytime</span>
        </div>
      </div>
    </div>
  );
};
