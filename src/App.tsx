import { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HardSkillsSection from './components/HardSkillsSection';
import SoftSkillsSection from './components/SoftSkillsSection';
import RoadmapSection from './components/RoadmapSection';
import ReadingListSection from './components/ReadingListSection';
import PastPresentSection from './components/PastPresentSection';
import ResourcesSection from './components/ResourcesSection';

type Section = 'hero' | 'hard-skills' | 'soft-skills' | 'roadmap' | 'reading-list' | 'past-present' | 'resources';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('financeOS-darkMode');
    return saved !== null ? saved === 'true' : true;
  });
  const [activeSection, setActiveSectionState] = useState<Section>('hero');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [studyTimer, setStudyTimer] = useState<number | null>(null);
  const [notes, setNotes] = useState(() => localStorage.getItem('financeOS-notes') || '');
  const [showNotes, setShowNotes] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);

  useEffect(() => {
    localStorage.setItem('financeOS-darkMode', String(darkMode));
  }, [darkMode]);

  const setActiveSection = useCallback((section: string) => {
    setActiveSectionState(section as Section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchQuery('');
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Search redirect
  useEffect(() => {
    if (!searchQuery) return;
    const q = searchQuery.toLowerCase();
    if (q.includes('model') || q.includes('dcf') || q.includes('lbo') || q.includes('excel')) {
      setActiveSectionState('hard-skills');
    } else if (q.includes('python') || q.includes('ai') || q.includes('ml') || q.includes('power bi')) {
      setActiveSectionState('hard-skills');
    } else if (q.includes('soft') || q.includes('communication') || q.includes('leadership') || q.includes('network')) {
      setActiveSectionState('soft-skills');
    } else if (q.includes('road') || q.includes('plan') || q.includes('timeline')) {
      setActiveSectionState('roadmap');
    } else if (q.includes('book') || q.includes('read')) {
      setActiveSectionState('reading-list');
    } else if (q.includes('past') || q.includes('future') || q.includes('trend')) {
      setActiveSectionState('past-present');
    } else if (q.includes('resource') || q.includes('course') || q.includes('salary') || q.includes('tool')) {
      setActiveSectionState('resources');
    }
  }, [searchQuery]);

  // Pomodoro Timer
  useEffect(() => {
    if (!timerActive) return;
    const interval = setInterval(() => {
      setTimerSeconds(prev => {
        if (prev <= 1) {
          setTimerActive(false);
          return 25 * 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTimer = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const bg = darkMode ? 'bg-slate-900' : 'bg-gray-50';
  const text = darkMode ? 'text-white' : 'text-gray-900';

  const renderSection = () => {
    switch (activeSection) {
      case 'hero': return <HeroSection darkMode={darkMode} setActiveSection={setActiveSection} />;
      case 'hard-skills': return <HardSkillsSection darkMode={darkMode} />;
      case 'soft-skills': return <SoftSkillsSection darkMode={darkMode} />;
      case 'roadmap': return <RoadmapSection darkMode={darkMode} />;
      case 'reading-list': return <ReadingListSection darkMode={darkMode} />;
      case 'past-present': return <PastPresentSection darkMode={darkMode} />;
      case 'resources': return <ResourcesSection darkMode={darkMode} />;
      default: return <HeroSection darkMode={darkMode} setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className={`min-h-screen ${bg} ${text} transition-colors duration-300`}>
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className={`border-t mt-16 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">FM</div>
                <div>
                  <div className={`font-bold text-sm ${text}`}>Finance Mastery OS</div>
                  <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>2026–2030 Edition</div>
                </div>
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                The most comprehensive finance skills mastery platform. Built for serious finance professionals pursuing elite-level expertise.
              </p>
            </div>

            {/* Hard Skills */}
            <div>
              <h4 className={`font-bold text-sm mb-3 ${text}`}>Hard Skills</h4>
              <div className="space-y-1">
                {[
                  { label: 'Financial Modeling', color: '#2563EB' },
                  { label: 'Python for Finance', color: '#16A34A' },
                  { label: 'Advanced Excel', color: '#0F766E' },
                  { label: 'Financial Statement Analysis', color: '#7C3AED' },
                  { label: 'AI & ML for Finance', color: '#DC2626' },
                  { label: 'Power BI & Data Storytelling', color: '#D97706' },
                  { label: 'Case Frameworks', color: '#991B1B' },
                ].map(s => (
                  <button
                    key={s.label}
                    onClick={() => setActiveSection('hard-skills')}
                    className={`block text-xs ${darkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className={`font-bold text-sm mb-3 ${text}`}>Soft Skills</h4>
              <div className="space-y-1">
                {['Written Communication', 'Verbal Communication', 'Critical Thinking', 'Commercial Awareness', 'Strategic Networking', 'Leadership & Teamwork'].map(s => (
                  <button
                    key={s}
                    onClick={() => setActiveSection('soft-skills')}
                    className={`block text-xs ${darkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className={`font-bold text-sm mb-3 ${text}`}>Platform</h4>
              <div className="space-y-1">
                {[
                  { label: '3-Year Roadmap', section: 'roadmap' },
                  { label: 'Reading List (32+ books)', section: 'reading-list' },
                  { label: 'Past vs Present', section: 'past-present' },
                  { label: 'Resource Hub', section: 'resources' },
                ].map(s => (
                  <button
                    key={s.label}
                    onClick={() => setActiveSection(s.section)}
                    className={`block text-xs ${darkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={`border-t pt-6 ${darkMode ? 'border-slate-800' : 'border-gray-100'}`}>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-gray-400'}`}>
                <p>© 2026 Finance Mastery OS. Last Updated: January 2026.</p>
                <p className="mt-1">⚠️ Disclaimer: This platform is for educational purposes only. Not financial advice. All salary ranges are indicative. Market conditions vary.</p>
              </div>
              <div className="flex gap-3">
                {['SEBI Compliant Content', 'CFA Institute Referenced', 'India Market Focus'].map(badge => (
                  <span key={badge} className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500'}`}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Notes Panel */}
      {showNotes && (
        <div className={`fixed bottom-20 right-6 w-72 rounded-2xl border shadow-xl z-40 overflow-hidden ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
          <div className={`flex items-center justify-between p-3 border-b ${darkMode ? 'border-slate-700' : 'border-gray-100'}`}>
            <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>📝 My Notes</span>
            <button onClick={() => setShowNotes(false)} className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>✕</button>
          </div>
          <textarea
            value={notes}
            onChange={e => { setNotes(e.target.value); localStorage.setItem('financeOS-notes', e.target.value); }}
            placeholder="Jot down your learnings, insights, and questions here..."
            className={`w-full p-3 text-xs h-36 resize-none outline-none ${darkMode ? 'bg-slate-800 text-slate-300 placeholder-slate-500' : 'bg-white text-gray-700 placeholder-gray-400'}`}
          />
          <div className={`p-2 border-t ${darkMode ? 'border-slate-700' : 'border-gray-100'}`}>
            <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-gray-400'}`}>Auto-saved to browser • {notes.length} chars</div>
          </div>
        </div>
      )}

      {/* Floating Notes Button */}
      {showBackToTop && (
        <button
          onClick={() => setShowNotes(!showNotes)}
          className={`fixed bottom-20 right-6 w-10 h-10 rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center z-40 text-sm ${darkMode ? 'bg-slate-700 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}
          title="Open Notes"
        >
          📝
        </button>
      )}

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center z-40"
        >
          ↑
        </button>
      )}

      {/* Pomodoro Timer Widget */}
      <div className={`fixed bottom-6 left-6 z-40 rounded-xl border shadow-lg p-3 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}>
        <div className={`text-xs font-bold mb-1 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>⏱ Study Timer</div>
        <div className={`text-lg font-black font-mono ${timerActive ? 'text-green-400' : darkMode ? 'text-white' : 'text-gray-900'}`}>
          {formatTimer(timerSeconds)}
        </div>
        <div className="flex gap-1 mt-1">
          <button
            onClick={() => setTimerActive(!timerActive)}
            className={`text-xs px-2 py-1 rounded-md font-semibold ${timerActive ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}
          >
            {timerActive ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={() => { setTimerActive(false); setTimerSeconds(25 * 60); setStudyTimer(null); }}
            className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-slate-700 text-slate-400' : 'bg-gray-100 text-gray-500'}`}
          >
            Reset
          </button>
        </div>
        <div className="flex gap-1 mt-1">
          {[25, 50, 90].map(m => (
            <button
              key={m}
              onClick={() => { setTimerSeconds(m * 60); setTimerActive(false); setStudyTimer(m); }}
              className={`text-xs px-1.5 py-0.5 rounded ${studyTimer === m ? 'bg-blue-500 text-white' : darkMode ? 'bg-slate-700 text-slate-400' : 'bg-gray-100 text-gray-500'}`}
            >
              {m}m
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
