import { useState } from 'react';
import { softSkills } from '../data/softSkillsData';

interface Props { darkMode: boolean; }

export default function SoftSkillsSection({ darkMode }: Props) {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'advice' | 'challenges' | 'howto'>('overview');
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());

  const toggleComplete = (id: string) => {
    setCompletedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const text = darkMode ? 'text-white' : 'text-gray-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-gray-500';
  const textMed = darkMode ? 'text-slate-300' : 'text-gray-600';
  const card = darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-gray-200';
  const cardInner = darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-gray-50 border-gray-100';

  const skill = activeSkill !== null ? softSkills[activeSkill] : null;

  return (
    <section className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-black mb-2 ${text}`}>
            🧠 Soft Skills Mastery Roadmap
          </h2>
          <p className={`text-lg ${textSub}`}>
            6 elite soft skills — the final differentiator AI cannot replicate
          </p>
        </div>

        {/* Key Insight Banner */}
        <div className={`rounded-2xl border p-6 mb-8 relative overflow-hidden ${
          darkMode ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-700/40' : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'
        }`}>
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">💡</span>
            <div>
              <h3 className={`text-lg font-bold mb-2 ${text}`}>The Elite Finance Truth</h3>
              <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-purple-200' : 'text-purple-900'}`}>
                Elite firms screen for soft skills <strong>before</strong> technical skills. A candidate with average technical skills and exceptional communication, presence, and commercial awareness will beat a technically brilliant but socially awkward candidate every time. For finance professionals in 2026, soft skills are the final differentiator AI cannot replicate.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${darkMode ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-700'}`}>Goldman Sachs screens 60% for soft skills</span>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${darkMode ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-700'}`}>MBB hires 50% for communication</span>
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${darkMode ? 'bg-pink-800 text-pink-200' : 'bg-pink-100 text-pink-700'}`}>AI cannot replicate judgment & empathy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Grid */}
        {!skill && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSkill(idx)}
                className={`rounded-2xl border p-6 text-left transition-all hover:scale-105 ${card} hover:shadow-lg`}
                style={{ borderColor: `${s.color}30` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{s.icon}</span>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ backgroundColor: `${s.color}20`, color: s.color }}
                  >
                    {s.priority}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-1 ${text}`}>{s.name}</h3>
                <p className={`text-xs mb-3 ${textSub}`}>{s.tagline}</p>
                <div className={`text-xs p-3 rounded-xl border ${cardInner}`}>
                  <p className={textMed}>{s.insight}</p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className={`text-xs ${textSub}`}>{s.whatToMaster.length} topics to master</span>
                  <span className="text-xs" style={{ color: s.color }}>→ Explore</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Skill Detail View */}
        {skill && (
          <div>
            {/* Back Button */}
            <button
              onClick={() => setActiveSkill(null)}
              className={`flex items-center gap-2 mb-6 text-sm font-semibold ${textSub} hover:${text} transition-colors`}
            >
              ← Back to Soft Skills
            </button>

            {/* Skill Header */}
            <div
              className={`rounded-2xl border p-6 sm:p-8 mb-6 relative overflow-hidden ${card}`}
              style={{ borderColor: `${skill.color}30` }}
            >
              <div className="absolute inset-0 opacity-5" style={{ background: `linear-gradient(135deg, ${skill.color}, transparent)` }} />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{skill.icon}</span>
                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-black ${text}`}>{skill.name}</h3>
                    <p className={`text-sm ${textSub}`}>{skill.tagline}</p>
                    <span
                      className="inline-block mt-2 text-xs font-bold px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                    >
                      {skill.priority}
                    </span>
                  </div>
                </div>
                <div className={`rounded-xl p-4 border ${darkMode ? 'bg-amber-900/20 border-amber-700/40' : 'bg-amber-50 border-amber-200'}`}>
                  <p className={`text-sm ${darkMode ? 'text-amber-200' : 'text-amber-900'}`}>
                    <strong>⚡ 2026 Insight:</strong> {skill.insight}
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className={`flex overflow-x-auto gap-1 mb-6 p-1 rounded-xl border no-scrollbar ${card}`}>
              {[
                { id: 'overview', label: 'What to Master' },
                { id: 'advice', label: 'Best Advice' },
                { id: 'howto', label: 'How to Build' },
                { id: 'challenges', label: 'Challenges' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab.id ? 'text-white' : darkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}
                  style={activeTab === tab.id ? { backgroundColor: skill.color } : {}}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className={`rounded-2xl border p-6 ${card}`}>
              {activeTab === 'overview' && (
                <div>
                  <h4 className={`text-lg font-bold mb-4 ${text}`}>What to Master in {skill.name}</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {skill.whatToMaster.map((item, i) => (
                      <label
                        key={i}
                        className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          completedItems.has(`${skill.id}-master-${i}`)
                            ? darkMode ? 'border-green-500/40 bg-green-900/20' : 'border-green-300 bg-green-50'
                            : darkMode ? 'border-slate-700/50 hover:border-slate-600' : 'border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="mt-0.5 flex-shrink-0"
                          style={{ accentColor: skill.color }}
                          checked={completedItems.has(`${skill.id}-master-${i}`)}
                          onChange={() => toggleComplete(`${skill.id}-master-${i}`)}
                        />
                        <span className={`text-sm ${textMed}`}>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'advice' && (
                <div>
                  <h4 className={`text-lg font-bold mb-4 ${text}`}>
                    🎯 {skill.bestAdvice.length} Expert Pieces of Advice
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {skill.bestAdvice.map((advice, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 p-4 rounded-xl border ${cardInner}`}
                      >
                        <span
                          className="text-xs font-bold flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-white"
                          style={{ backgroundColor: skill.color, fontSize: '10px' }}
                        >
                          {i + 1}
                        </span>
                        <p className={`text-sm leading-relaxed ${textMed}`}>{advice}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'howto' && (
                <div>
                  <h4 className={`text-lg font-bold mb-4 ${text}`}>🛠️ How to Build This Skill</h4>
                  <div className="space-y-3">
                    {skill.howToBuild.map((item, i) => (
                      <label
                        key={i}
                        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                          completedItems.has(`${skill.id}-build-${i}`)
                            ? darkMode ? 'border-green-500/40 bg-green-900/20' : 'border-green-300 bg-green-50'
                            : darkMode ? 'border-slate-700/50 hover:border-slate-600' : 'border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="mt-0.5 flex-shrink-0"
                          style={{ accentColor: skill.color }}
                          checked={completedItems.has(`${skill.id}-build-${i}`)}
                          onChange={() => toggleComplete(`${skill.id}-build-${i}`)}
                        />
                        <div className="flex items-start gap-2">
                          <span
                            className="text-xs font-bold flex-shrink-0 mt-0.5"
                            style={{ color: skill.color }}
                          >
                            Step {i + 1}:
                          </span>
                          <span className={`text-sm ${textMed}`}>{item}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'challenges' && (
                <div>
                  <h4 className={`text-lg font-bold mb-4 ${text}`}>🎯 Practice Challenges</h4>
                  {(['beginner', 'intermediate', 'advanced', 'expert'] as const).map((level, li) => {
                    const levelLabels = ['🟢 Beginner', '🟡 Intermediate', '🔴 Advanced', '⚫ Expert'];
                    const offset = li * 10;
                    return (
                      <div key={level} className="mb-6">
                        <h5 className={`font-bold text-sm mb-3 ${text}`}>{levelLabels[li]}</h5>
                        <div className="space-y-2">
                          {skill.challenges[level].map((challenge, i) => (
                            <label
                              key={i}
                              className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                                completedItems.has(`${skill.id}-ch-${level}-${i}`)
                                  ? darkMode ? 'border-green-500/40 bg-green-900/20' : 'border-green-300 bg-green-50'
                                  : darkMode ? 'border-slate-700/50 hover:border-slate-600' : 'border-gray-100 hover:border-gray-200'
                              }`}
                            >
                              <input
                                type="checkbox"
                                className="mt-0.5 flex-shrink-0"
                                style={{ accentColor: skill.color }}
                                checked={completedItems.has(`${skill.id}-ch-${level}-${i}`)}
                                onChange={() => toggleComplete(`${skill.id}-ch-${level}-${i}`)}
                              />
                              <div className="flex items-start gap-2">
                                <span className={`text-xs font-bold flex-shrink-0 ${textSub}`}>#{offset + i + 1}</span>
                                <span className={`text-sm ${textMed}`}>{challenge}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
