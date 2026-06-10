interface HeroSectionProps {
  darkMode: boolean;
  setActiveSection: (s: string) => void;
}

export default function HeroSection({ darkMode, setActiveSection }: HeroSectionProps) {
  const stats = [
    { value: "7", label: "Hard Skills", icon: "📊" },
    { value: "6", label: "Soft Skills", icon: "🧠" },
    { value: "32", label: "Chapters Each", icon: "📚" },
    { value: "100+", label: "Practice Challenges", icon: "🎯" },
    { value: "3-Year", label: "Mastery Roadmap", icon: "🗺️" },
    { value: "2026", label: "Edition", icon: "🚀" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`} />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-emerald-600/10" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${
            darkMode
              ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <span className="animate-pulse w-2 h-2 rounded-full bg-blue-500 inline-block" />
            The Most Comprehensive Finance Skills Platform • Updated 2026
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Finance
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent"> Mastery OS</span>
          </h1>
          <h2 className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 ${darkMode ? 'text-slate-300' : 'text-gray-600'}`}>
            The Complete Elite Finance Skills Platform
            <span className={`block text-lg sm:text-xl mt-2 font-normal ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>
              2026–2030 Edition
            </span>
          </h2>
          <p className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            The definitive A-to-Z guide for finance professionals pursuing elite mastery.
            Master every hard and soft skill required to thrive in the 2026–2030 era of finance —
            from Financial Modeling to AI/ML, from Written Communication to Strategic Leadership.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveSection('hard-skills')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            📊 Start Hard Skills
          </button>
          <button
            onClick={() => setActiveSection('soft-skills')}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            🧠 Start Soft Skills
          </button>
          <button
            onClick={() => setActiveSection('roadmap')}
            className={`px-6 py-3 font-semibold rounded-xl transition-all transform hover:scale-105 border ${
              darkMode
                ? 'border-slate-600 text-slate-300 hover:bg-slate-700'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            🗺️ View 3-Year Roadmap
          </button>
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 rounded-2xl border ${
          darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-gray-200'
        } shadow-xl`}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className={`text-2xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
              <div className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skill Preview Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {[
            { name: 'Financial Modeling', color: '#2563EB', icon: '📊' },
            { name: 'Python for Finance', color: '#16A34A', icon: '🐍' },
            { name: 'Advanced Excel', color: '#0F766E', icon: '📗' },
            { name: 'FSA', color: '#7C3AED', icon: '🔍' },
            { name: 'AI & ML Finance', color: '#DC2626', icon: '🤖' },
            { name: 'Power BI', color: '#D97706', icon: '📈' },
            { name: 'Case Frameworks', color: '#991B1B', icon: '🏛️' },
          ].map((skill) => (
            <button
              key={skill.name}
              onClick={() => setActiveSection('hard-skills')}
              className={`p-3 rounded-xl border text-center transition-all hover:scale-105 group ${
                darkMode ? 'bg-slate-800/50 border-slate-700/50 hover:border-slate-500' : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-xl mb-1">{skill.icon}</div>
              <div
                className="text-xs font-semibold leading-tight"
                style={{ color: skill.color }}
              >
                {skill.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
