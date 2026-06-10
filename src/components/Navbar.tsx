import { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeSection: string;
  setActiveSection: (s: string) => void;
}

export default function Navbar({ darkMode, toggleDarkMode, searchQuery, setSearchQuery, activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'hard-skills', label: 'Hard Skills' },
    { id: 'soft-skills', label: 'Soft Skills' },
    { id: 'roadmap', label: '3-Year Roadmap' },
    { id: 'reading-list', label: 'Reading List' },
    { id: 'past-present', label: 'Past vs Present' },
    { id: 'resources', label: 'Resources' },
  ];

  const bg = darkMode
    ? scrolled ? 'bg-slate-900/95 border-slate-700/50' : 'bg-slate-900/80 border-transparent'
    : scrolled ? 'bg-white/95 border-gray-200' : 'bg-white/80 border-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => setActiveSection('hero')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">FM</div>
            <div className="hidden sm:block">
              <div className={`font-bold text-sm leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>Finance Mastery OS</div>
              <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>2026–2030 Elite Platform</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onBlur={() => !searchQuery && setSearchOpen(false)}
                  placeholder="Search skills, topics..."
                  className={`w-48 px-3 py-1.5 rounded-lg text-sm border transition-all ${
                    darkMode
                      ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500'
                      : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                  } outline-none`}
                />
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'text-slate-400 hover:text-white hover:bg-slate-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'text-yellow-400 hover:bg-slate-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${darkMode ? 'text-slate-300 hover:bg-slate-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`lg:hidden border-t pb-3 ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setMobileOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium ${
                  activeSection === item.id
                    ? 'text-blue-500'
                    : darkMode ? 'text-slate-300' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
