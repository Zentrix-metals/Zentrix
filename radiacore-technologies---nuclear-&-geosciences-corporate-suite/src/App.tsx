/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavigationTab, ServiceId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { EmergencyHotlineModal } from './components/EmergencyHotlineModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { SectorsView } from './views/SectorsView';
import { InsightsView } from './views/InsightsView';
import { TeamView } from './views/TeamView';
import { ResourcesView } from './views/ResourcesView';
import { ContactView } from './views/ContactView';
import { PromptArchitectView } from './views/PromptArchitectView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('radiation-safety');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  
  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState<boolean>(false);

  // Global keyboard shortcut for search (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on tab change
  const handleNavigate = (tab: NavigationTab, serviceId?: ServiceId) => {
    setCurrentTab(tab);
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenArticle = (postId: string) => {
    setSelectedArticleId(postId);
    setCurrentTab('insights');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Fixed Header */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenArticle={handleOpenArticle}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            selectedServiceId={selectedServiceId}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'sectors' && (
          <SectorsView
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'insights' && (
          <InsightsView
            initialArticleId={selectedArticleId}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'team' && (
          <TeamView
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'resources' && (
          <ResourcesView
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
          />
        )}

        {currentTab === 'prompt-architect' && (
          <PromptArchitectView />
        )}
      </main>

      {/* Corporate Compliance & Quick Access Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Global Quick Search Modal (Cmd+K) */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(tab, id) => {
          handleNavigate(tab, id as ServiceId);
          setIsSearchOpen(false);
        }}
      />

      {/* Global 24/7 Radiological Emergency Hotline Modal */}
      <EmergencyHotlineModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />
    </div>
  );
}
