import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Tag, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  X, 
  Share2, 
  Download, 
  CheckCircle2, 
  ArrowRight,
  FileText
} from 'lucide-react';
import { BlogPost, NavigationTab } from '../types';
import { BLOG_POSTS } from '../data/mockData';

interface InsightsViewProps {
  initialArticleId?: string | null;
  onNavigate: (tab: NavigationTab) => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({
  initialArticleId,
  onNavigate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticleId, setActiveArticleId] = useState<string | null>(initialArticleId || null);

  const categories = ['All', 'Radiation Science', 'Geological Physics', 'Regulatory Compliance', 'Metals Market', 'Environmental Remediation'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesQuery = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const activeArticle = useMemo(() => {
    if (!activeArticleId) return null;
    return BLOG_POSTS.find(p => p.id === activeArticleId) || null;
  }, [activeArticleId]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>SCIENTIFIC INSIGHTS & WHITE PAPERS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Field Insights, Monographs & Regulatory Analyses
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Explore technical analyses published by our chief nuclear physicists, geologists, and environmental engineers on cutting-edge radiological containment and deep earth physics.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles by title, keyword (e.g., MCNP6, TENORM, Zircaloy), or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 font-sans"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-400">
            No technical articles found matching your query.
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveArticleId(post.id)}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="px-2 py-0.5 bg-slate-950 border border-slate-800 rounded text-cyan-400 font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 rounded text-slate-400 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-700"
                  />
                  <div className="text-xs">
                    <div className="font-semibold text-slate-200">{post.author.name}</div>
                    <div className="text-[11px] text-slate-500">{post.date}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
              </div>
            </article>
          ))
        )}
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
          <div 
            className="w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header bar */}
            <div className="bg-slate-950 border-b border-slate-800 p-4 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 text-xs font-mono bg-cyan-950 border border-cyan-500/30 text-cyan-300 rounded">
                  {activeArticle.category}
                </span>
                <span className="text-xs font-mono text-slate-400">{activeArticle.readTime}</span>
              </div>
              <button
                onClick={() => setActiveArticleId(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {activeArticle.title}
                </h2>

                <div className="flex items-center gap-3 py-3 border-y border-slate-800">
                  <img
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-cyan-500/40"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{activeArticle.author.name}</div>
                    <div className="text-xs text-cyan-400 font-mono">{activeArticle.author.role}</div>
                  </div>
                  <div className="ml-auto text-xs font-mono text-slate-500">
                    Published: {activeArticle.date}
                  </div>
                </div>
              </div>

              {/* Executive Summary Callout */}
              <div className="p-5 bg-cyan-950/30 border-l-4 border-cyan-400 rounded-r-2xl space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  Executive Briefing & Abstract
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {activeArticle.content.executiveSummary}
                </p>
              </div>

              {/* Subsections */}
              <div className="space-y-6">
                {activeArticle.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-xl font-bold text-white border-b border-slate-800/80 pb-2">
                      {section.heading}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {section.body}
                    </p>
                    {section.callout && (
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-amber-300">
                        <span className="font-bold">⚠️ CRITICAL PARAMETER: </span>
                        {section.callout}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Key Takeaways for Field Operators:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                  {activeArticle.content.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Citations */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs font-mono text-slate-500">
                <div className="text-slate-400 font-bold uppercase">Peer-Reviewed References & Standards:</div>
                {activeArticle.content.citations.map((cite, i) => (
                  <div key={i}>[{i + 1}] {cite}</div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-950 border-t border-slate-800 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400">
                RadiaCore Open Technical Repository
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setActiveArticleId(null);
                    onNavigate('contact');
                  }}
                  className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition"
                >
                  Consult Authors
                </button>
                <button
                  onClick={() => setActiveArticleId(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
