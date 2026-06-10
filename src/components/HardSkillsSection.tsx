import { useState } from 'react';
import { hardSkills } from '../data/hardSkillsData';
import SkillQuiz from './SkillQuiz';

interface Props { darkMode: boolean; }

const priorityColors: Record<string, string> = {
  red: 'bg-red-500/20 text-red-400 border-red-500/30',
  green: 'bg-green-500/20 text-green-400 border-green-500/30',
  gray: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
  orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  darkred: 'bg-red-900/30 text-red-300 border-red-800/40',
};

const priorityColorsLight: Record<string, string> = {
  red: 'bg-red-100 text-red-700 border-red-200',
  green: 'bg-green-100 text-green-700 border-green-200',
  gray: 'bg-gray-100 text-gray-700 border-gray-200',
  orange: 'bg-orange-100 text-orange-700 border-orange-200',
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  darkred: 'bg-red-100 text-red-800 border-red-200',
};

export default function HardSkillsSection({ darkMode }: Props) {
  const [activeSkill, setActiveSkill] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'chapters' | 'tips' | 'shortcuts' | 'challenges' | 'resources' | 'career' | 'quiz'>('overview');
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());

  const skill = hardSkills[activeSkill];

  const toggleComplete = (id: string) => {
    setCompletedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const chapters = [
    { num: 1, title: 'What Is This Skill?', part: 'Part 1: Foundations', content: getChapter1(skill) },
    { num: 2, title: 'History & Evolution', part: 'Part 1: Foundations', content: getChapter2(skill) },
    { num: 3, title: 'Mental Models & Frameworks', part: 'Part 1: Foundations', content: getChapter3(skill) },
    { num: 4, title: 'Essential Vocabulary', part: 'Part 1: Foundations', content: getChapter4(skill) },
    { num: 5, title: 'Absolute Basics', part: 'Part 2: Beginner', content: getChapter5(skill) },
    { num: 6, title: 'Tools & Environment Setup', part: 'Part 2: Beginner', content: getChapter6(skill) },
    { num: 7, title: 'Common Beginner Mistakes', part: 'Part 2: Beginner', content: getChapter7(skill) },
    { num: 8, title: 'First Practical Projects', part: 'Part 2: Beginner', content: getChapter8(skill) },
    { num: 9, title: 'Fundamental Techniques', part: 'Part 3: Core Competency', content: getChapter9(skill) },
    { num: 10, title: 'Intermediate Concepts', part: 'Part 3: Core Competency', content: getChapter10(skill) },
    { num: 11, title: 'Practice Systems', part: 'Part 3: Core Competency', content: getChapter11(skill) },
    { num: 12, title: 'Measuring Progress', part: 'Part 3: Core Competency', content: getChapter12(skill) },
    { num: 13, title: 'Building Consistency', part: 'Part 3: Core Competency', content: getChapter13(skill) },
    { num: 14, title: 'Advanced Techniques', part: 'Part 4: Professional', content: getChapter14(skill) },
    { num: 15, title: 'Expert Workflows', part: 'Part 4: Professional', content: getChapter15(skill) },
    { num: 16, title: 'Real Case Studies', part: 'Part 4: Professional', content: getChapter16(skill) },
    { num: 17, title: 'Decision Making Under Pressure', part: 'Part 4: Professional', content: getChapter17(skill) },
    { num: 18, title: 'Communication in the Field', part: 'Part 4: Professional', content: getChapter18(skill) },
    { num: 19, title: 'Deep Psychology', part: 'Part 5: Mastery', content: getChapter19(skill) },
    { num: 20, title: 'Pattern Recognition', part: 'Part 5: Mastery', content: getChapter20(skill) },
    { num: 21, title: 'Strategic Thinking', part: 'Part 5: Mastery', content: getChapter21(skill) },
    { num: 22, title: 'Innovation', part: 'Part 5: Mastery', content: getChapter22(skill) },
    { num: 23, title: 'Teaching the Skill', part: 'Part 5: Mastery', content: getChapter23(skill) },
    { num: 24, title: 'Industry Applications', part: 'Part 6: Real World', content: getChapter24(skill) },
    { num: 25, title: 'Building a Portfolio', part: 'Part 6: Real World', content: getChapter25(skill) },
    { num: 26, title: 'Getting Paid', part: 'Part 6: Real World', content: getChapter26(skill) },
    { num: 27, title: 'Networking', part: 'Part 6: Real World', content: getChapter27(skill) },
    { num: 28, title: 'Ethics & Professional Standards', part: 'Part 6: Real World', content: getChapter28(skill) },
    { num: 29, title: 'Secrets from Top Performers', part: 'Part 7: Elite', content: getChapter29(skill) },
    { num: 30, title: 'Build Your Own System', part: 'Part 7: Elite', content: getChapter30(skill) },
    { num: 31, title: 'Future Trends 2026–2030', part: 'Part 7: Elite', content: getChapter31(skill) },
    { num: 32, title: 'Lifelong Learning', part: 'Part 7: Elite', content: getChapter32(skill) },
  ];

  const parts = [...new Set(chapters.map(c => c.part))];
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'chapters', label: '32 Chapters' },
    { id: 'tips', label: 'Tips & Tricks' },
    { id: 'shortcuts', label: 'Shortcuts' },
    { id: 'challenges', label: '100 Challenges' },
    { id: 'resources', label: 'Resources' },
    { id: 'career', label: 'Career Paths' },
    { id: 'quiz', label: '🎯 Self-Test' },
  ] as const;

  const card = darkMode
    ? 'bg-slate-800/50 border-slate-700/50'
    : 'bg-white border-gray-200';
  const cardInner = darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-gray-50 border-gray-100';
  const text = darkMode ? 'text-white' : 'text-gray-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-gray-500';
  const textMed = darkMode ? 'text-slate-300' : 'text-gray-600';

  return (
    <section className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-black mb-2 ${text}`}>
            📊 Hard Skills Mastery Roadmap
          </h2>
          <p className={`text-lg ${textSub}`}>
            7 mission-critical skills — complete coverage from beginner to elite
          </p>
        </div>

        {/* Skill Tab Bar */}
        <div className={`flex overflow-x-auto gap-2 mb-8 pb-2 no-scrollbar`}>
          {hardSkills.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => { setActiveSkill(idx); setActiveTab('overview'); setExpandedChapter(null); }}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all border ${
                activeSkill === idx
                  ? 'text-white border-transparent shadow-lg'
                  : darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
              style={activeSkill === idx ? { backgroundColor: s.color, boxShadow: `0 4px 20px ${s.color}40` } : {}}
            >
              <span>{s.icon}</span>
              <span>{s.shortName}</span>
            </button>
          ))}
        </div>

        {/* Skill Header Card */}
        <div
          className={`rounded-2xl border p-6 sm:p-8 mb-6 relative overflow-hidden ${card}`}
          style={{ borderColor: `${skill.color}30` }}
        >
          <div className="absolute inset-0 opacity-5" style={{ background: `linear-gradient(135deg, ${skill.color}, transparent)` }} />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{skill.icon}</span>
                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-black ${text}`}>{skill.name}</h3>
                    <p className={`text-sm ${textSub}`}>{skill.tagline}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${darkMode ? priorityColors[skill.priorityColor] : priorityColorsLight[skill.priorityColor]}`}
                  >
                    {skill.priority}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${darkMode ? 'bg-slate-700 border-slate-600 text-slate-300' : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
                    ⏱ {skill.timeInvestment}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${darkMode ? 'bg-slate-700 border-slate-600 text-slate-300' : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
                    💰 {skill.cost}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-semibold ${textSub} mb-1`}>2026–2030</div>
                <div className={`text-sm font-bold`} style={{ color: skill.color }}>{skill.badge}</div>
              </div>
            </div>

            {/* Critical Insight Box */}
            <div
              className={`rounded-xl p-4 border ${darkMode ? 'bg-amber-900/20 border-amber-700/40' : 'bg-amber-50 border-amber-200'}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">⚡</span>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                    2026–2030 Critical Insight
                  </div>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-amber-200' : 'text-amber-900'}`}>
                    {skill.insight2026}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inner Tabs */}
        <div className={`flex overflow-x-auto gap-1 mb-6 p-1 rounded-xl border no-scrollbar ${card}`}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'text-white shadow-md'
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
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
            <div className="space-y-6">
              <div>
                <h4 className={`text-lg font-bold mb-4 ${text}`}>What Exactly to Master</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {skill.whatToMaster.map((item, i) => (
                    <label key={i} className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      completedItems.has(`${skill.id}-master-${i}`)
                        ? darkMode ? 'border-green-500/40 bg-green-900/20' : 'border-green-300 bg-green-50'
                        : darkMode ? 'border-slate-700/50 hover:border-slate-600' : 'border-gray-100 hover:border-gray-200'
                    }`}>
                      <input
                        type="checkbox"
                        className="mt-0.5 accent-current flex-shrink-0"
                        style={{ accentColor: skill.color }}
                        checked={completedItems.has(`${skill.id}-master-${i}`)}
                        onChange={() => toggleComplete(`${skill.id}-master-${i}`)}
                      />
                      <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Past vs Present */}
              <div>
                <h4 className={`text-lg font-bold mb-4 ${text}`}>Past vs Present Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr>
                        <th className={`text-left p-3 rounded-tl-lg ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-700'}`}>Dimension</th>
                        <th className={`text-left p-3 ${darkMode ? 'bg-slate-700/80 text-slate-300' : 'bg-gray-50 text-gray-600'}`}>2015 (Past)</th>
                        <th className={`text-left p-3 rounded-tr-lg`} style={{ backgroundColor: `${skill.color}20`, color: skill.color }}>2026 (Present)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {skill.pastVsPresent.map((row, i) => (
                        <tr key={i} className={darkMode ? 'border-t border-slate-700/50' : 'border-t border-gray-100'}>
                          <td className={`p-3 font-semibold ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{row.dimension}</td>
                          <td className={`p-3 ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>{row.past2015}</td>
                          <td className={`p-3 font-medium`} style={{ color: skill.color }}>{row.present2026}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chapters' && (
            <div className="space-y-2">
              <p className={`text-sm mb-4 ${textSub}`}>32 chapters covering beginner to elite mastery — click any chapter to expand</p>
              {parts.map(part => (
                <div key={part} className="mb-4">
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${textSub}`}>{part}</h4>
                  <div className="space-y-1">
                    {chapters.filter(c => c.part === part).map((chapter) => (
                      <div key={chapter.num} className={`rounded-xl border overflow-hidden ${darkMode ? 'border-slate-700/50' : 'border-gray-100'}`}>
                        <button
                          onClick={() => setExpandedChapter(expandedChapter === chapter.num ? null : chapter.num)}
                          className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                            expandedChapter === chapter.num
                              ? darkMode ? 'bg-slate-700/50' : 'bg-gray-50'
                              : darkMode ? 'hover:bg-slate-700/30' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                              style={{ backgroundColor: skill.color }}
                            >
                              {chapter.num}
                            </span>
                            <span className={`font-semibold text-sm ${text}`}>{chapter.title}</span>
                          </div>
                          <span className={`text-lg transition-transform ${expandedChapter === chapter.num ? 'rotate-180' : ''}`}>▾</span>
                        </button>
                        {expandedChapter === chapter.num && (
                          <div className={`px-4 pb-4 border-t ${darkMode ? 'border-slate-700/50' : 'border-gray-100'}`}>
                            <div className={`mt-3 text-sm leading-relaxed space-y-3 ${textMed}`}>
                              {chapter.content.map((para, pi) => (
                                <p key={pi}>{para}</p>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tips' && (
            <div>
              <h4 className={`text-lg font-bold mb-4 ${text}`}>
                ⚡ {skill.tips.length} Expert Tips & Tricks
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {skill.tips.map((tip, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-gray-50 border-gray-100'}`}
                  >
                    <span className="text-sm font-bold flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: skill.color, fontSize: '10px' }}>
                      {i + 1}
                    </span>
                    <p className={`text-sm leading-relaxed ${textMed}`}>{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'shortcuts' && (
            <div>
              <h4 className={`text-lg font-bold mb-4 ${text}`}>
                ⌨️ Complete Shortcut Reference ({skill.shortcuts.length}+ shortcuts)
              </h4>
              {[...new Set(skill.shortcuts.map(s => s.category))].map(cat => (
                <div key={cat} className="mb-6">
                  <h5 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2`} style={{ color: skill.color }}>
                    <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: skill.color }} />
                    {cat}
                  </h5>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {skill.shortcuts.filter(s => s.category === cat).map((shortcut, i) => (
                      <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${darkMode ? 'border-slate-700/50 bg-slate-900/30' : 'border-gray-100 bg-gray-50'}`}>
                        <code className={`text-xs font-mono px-2 py-1 rounded-md flex-shrink-0 ${darkMode ? 'bg-slate-700 text-green-400' : 'bg-gray-200 text-gray-800'}`}>
                          {shortcut.shortcut}
                        </code>
                        <span className={`text-sm ${textMed}`}>{shortcut.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'challenges' && (
            <div>
              <h4 className={`text-lg font-bold mb-4 ${text}`}>🎯 100 Practice Challenges</h4>
              {(['beginner', 'intermediate', 'advanced', 'expert'] as const).map((level, li) => {
                const levelLabels = ['🟢 Beginner (1–25)', '🟡 Intermediate (26–50)', '🔴 Advanced (51–75)', '⚫ Expert (76–100)'];
                const levelBgs = darkMode
                  ? ['bg-green-900/20 border-green-800/40', 'bg-yellow-900/20 border-yellow-800/40', 'bg-red-900/20 border-red-800/40', 'bg-gray-800/40 border-gray-700/40']
                  : ['bg-green-50 border-green-200', 'bg-yellow-50 border-yellow-200', 'bg-red-50 border-red-200', 'bg-gray-50 border-gray-200'];
                const offset = li * 25;
                return (
                  <div key={level} className="mb-6">
                    <h5 className={`font-bold text-sm mb-3 ${text}`}>{levelLabels[li]}</h5>
                    <div className="space-y-2">
                      {skill.challenges[level].map((challenge, i) => (
                        <label
                          key={i}
                          className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                            completedItems.has(`${skill.id}-challenge-${level}-${i}`)
                              ? levelBgs[li]
                              : darkMode ? 'border-slate-700/50 hover:border-slate-600' : 'border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="mt-0.5 flex-shrink-0"
                            style={{ accentColor: skill.color }}
                            checked={completedItems.has(`${skill.id}-challenge-${level}-${i}`)}
                            onChange={() => toggleComplete(`${skill.id}-challenge-${level}-${i}`)}
                          />
                          <div className="flex items-start gap-2">
                            <span className={`text-xs font-bold flex-shrink-0 mt-0.5 ${textSub}`}>#{offset + i + 1}</span>
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

          {activeTab === 'resources' && (
            <div className="space-y-6">
              <div>
                <h4 className={`text-lg font-bold mb-4 ${text}`}>📚 Essential Books</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {skill.resources.books.map((book, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${cardInner}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className={`font-bold text-sm ${text}`}>{book.title}</div>
                          <div className={`text-xs ${textSub}`}>{book.author} • {book.year}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(book.rating)].map((_, ri) => <span key={ri} className="text-yellow-400 text-xs">★</span>)}
                        </div>
                      </div>
                      <p className={`text-xs mb-2 ${textMed}`}>{book.summary}</p>
                      <div className="flex flex-wrap gap-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'}`}>{book.difficulty}</span>
                        {book.free && <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">Free</span>}
                        <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-700'}`}>📖 Book</span>
                      </div>
                      <div className="mt-2">
                        <div className={`text-xs font-semibold mb-1 ${textSub}`}>Key Takeaways:</div>
                        {book.keyTakeaways.map((t, ti) => (
                          <div key={ti} className={`text-xs ${textMed} flex items-center gap-1`}>
                            <span style={{ color: skill.color }}>→</span> {t}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={`text-lg font-bold mb-4 ${text}`}>🆓 Best Free Resources</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {skill.resources.freeCourses.map((c, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${cardInner}`}>
                      <div className={`font-semibold text-sm mb-1 ${text}`}>{c.name}</div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-bold">FREE</span>
                        <span className={`text-xs ${textSub}`}>{c.platform}</span>
                      </div>
                      <p className={`text-xs ${textMed}`}>{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={`text-lg font-bold mb-4 ${text}`}>💳 Best Paid Courses</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {skill.resources.paidCourses.map((c, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${cardInner}`}>
                      <div className={`font-semibold text-sm mb-1 ${text}`}>{c.name}</div>
                      <div className={`text-xs ${textSub} mb-2`}>{c.platform} • {c.duration}</div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-50 text-orange-700'}`}>💰 {c.cost}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-700'}`}>📜 {c.certificate}</span>
                      </div>
                      <div className={`text-xs ${textMed}`}>✅ {c.pros}</div>
                      <div className={`text-xs ${textSub}`}>⚠️ {c.cons}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className={`text-lg font-bold mb-4 ${text}`}>🛠️ Tools & Platforms</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {skill.resources.tools.map((t, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${cardInner} flex items-start gap-3`}>
                      <span className="text-xl">
                        {t.free ? '🆓' : '💰'}
                      </span>
                      <div>
                        <div className={`font-semibold text-sm ${text}`}>{t.name}</div>
                        <div className="flex gap-1 mb-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'}`}>{t.type}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${t.free ? 'bg-green-500/20 text-green-400' : darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-50 text-orange-700'}`}>{t.cost}</span>
                        </div>
                        <p className={`text-xs ${textMed}`}>{t.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div>
              <h4 className={`text-lg font-bold mb-4 ${text}`}>🎯 Self-Assessment Quiz — {skill.name}</h4>
              <p className={`text-sm mb-4 ${textSub}`}>Test your knowledge with 10 expert-level questions. Get instant feedback and see what level you're at.</p>
              <SkillQuiz darkMode={darkMode} skillName={skill.id} skillColor={skill.color} />
            </div>
          )}

          {activeTab === 'career' && (
            <div>
              <h4 className={`text-lg font-bold mb-4 ${text}`}>💼 Career Paths & Salary Ranges</h4>
              <div className="space-y-3">
                {skill.careerPaths.map((cp, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${cardInner}`}
                  >
                    <div>
                      <div className={`font-bold text-sm ${text}`}>{cp.role}</div>
                      <div className={`text-xs ${textSub} mt-0.5`}>{cp.firms}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: skill.color }}
                      >
                        {cp.salaryRange}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'}`}>
                        {cp.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-6 p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-gray-50 border-gray-100'}`}>
                <h5 className={`font-bold text-sm mb-3 ${text}`}>📖 Essential Glossary (30 Key Terms)</h5>
                <div className="grid sm:grid-cols-2 gap-2">
                  {skill.glossary.slice(0, 20).map((g, i) => (
                    <div key={i} className={`p-2 rounded-lg`}>
                      <span className="font-bold text-xs" style={{ color: skill.color }}>{g.term}: </span>
                      <span className={`text-xs ${textMed}`}>{g.definition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Chapter content generators
function getChapter1(skill: typeof hardSkills[0]): string[] {
  return [
    `${skill.name} is one of the most critical competencies in modern finance, serving as the foundation upon which virtually all quantitative analysis, valuation, and strategic decision-making is built. At its core, this skill enables finance professionals to translate complex business realities into structured, analytical frameworks that drive billion-dollar decisions.`,
    `In the context of the 2026 finance landscape, ${skill.name} is no longer merely a technical tool — it is the universal language of financial communication. Every investment bank, private equity fund, corporate treasury, and fintech company relies on practitioners who have mastered this discipline to compete effectively.`,
    `The skill addresses fundamental problems in finance: how do we value assets accurately? How do we project business performance under uncertainty? How do we communicate complex financial logic to diverse stakeholders? ${skill.name} provides the structured methodology to answer these questions with rigor and confidence.`,
    `Real-world applications span across industries: investment banking analysts use this skill to evaluate M&A transactions worth hundreds of crores; private equity investors use it to underwrite leveraged buyouts; corporate finance teams use it to allocate capital and plan strategy; and asset managers use it to build portfolios that generate superior returns.`,
    `Who uses this skill? Analysts at every level from fresh graduates to managing directors — but the depth of mastery differs dramatically. An analyst knows the mechanics; an expert knows the judgment. The best practitioners understand not just HOW to apply this skill, but WHEN and WHY — and critically, when NOT to use certain approaches.`,
  ];
}

function getChapter2(skill: typeof hardSkills[0]): string[] {
  return [
    `The origins of ${skill.name} trace back to foundational developments in financial theory and practice. Understanding this history is crucial because it explains why certain approaches exist, which methodologies are considered gold standard, and how the field will likely evolve through 2030.`,
    `The 1970s and 1980s saw the formalization of many financial techniques that are now standard practice. Academic breakthroughs at institutions like MIT, Chicago Booth, and Wharton created the theoretical infrastructure that practitioners built upon. The introduction of personal computers in the 1980s began the democratization of financial analysis.`,
    `The 1990s brought Excel as the dominant financial tool, transforming what had required dedicated financial software into something any analyst could build on a laptop. This decade saw the professionalization of investment banking analysis and the emergence of standardized methodologies across Wall Street firms.`,
    `The 2000s–2010s period was defined by globalization, financial crises, and the first waves of automation. The 2008 global financial crisis fundamentally changed how risk is modeled and communicated, leading to more rigorous scenario analysis requirements across the industry.`,
    `2020–2026 represents the AI transition period. Python became mainstream in finance, AI tools began augmenting analyst workflows, and real-time data integration replaced static models. The professionals who will lead the 2026–2030 era are those who have adapted to this hybrid human-AI analytical environment.`,
  ];
}

function getChapter3(skill: typeof hardSkills[0]): string[] {
  return [
    `The most important mental model for ${skill.name} is understanding it as a system of interconnected variables rather than a collection of isolated calculations. Every number flows from assumptions, and assumptions flow from judgment about how the real world works.`,
    `Core Principle 1: Garbage In, Garbage Out (GIGO). The quality of any analysis is bounded by the quality of its inputs. Top practitioners spend 60% of their time ensuring their assumptions are defensible before building a single formula.`,
    `Core Principle 2: First Principles Thinking. Strip away received wisdom and ask: what do I know for certain? Build from there. In financial modeling, this means understanding WHY each accounting line exists before building formulas that represent it.`,
    `Core Principle 3: The Pareto Principle Applied. 20% of assumptions drive 80% of the output variance. Identify these critical assumptions early and stress-test them relentlessly. Everything else is supporting detail.`,
    `Common Misconceptions: (1) More complexity = more accuracy. False — simple robust models beat complex fragile ones. (2) Historical data perfectly predicts the future. False — regimes change. (3) The model output is "the answer." False — it's a structured way to think about uncertainty. (4) Templates are fine. False — templates create dependency and prevent deep understanding. (5) Automation replaces judgment. False — automation amplifies both good and bad judgment.`,
  ];
}

function getChapter4(skill: typeof hardSkills[0]): string[] {
  return [
    `Mastering the vocabulary of ${skill.name} is essential for professional credibility, interview performance, and effective communication with senior finance professionals. Below is a comprehensive guide to the terms every practitioner must know.`,
    `The terminology in this field serves multiple purposes: it enables precise communication without misunderstanding, it signals expertise to peers and superiors, and it provides the conceptual scaffolding for advanced techniques.`,
    `Terms that impress in interviews are those that demonstrate you understand the underlying economic reality, not just the formula. Being able to use terms like "normalization," "terminal value methodology," or "circular reference resolution" in context signals genuine expertise.`,
    `Terms that beginners misuse: (1) "Profit" when they mean "cash flow" — the most common and damaging confusion. (2) "Turnover" as revenue (UK usage) vs asset efficiency (US usage). (3) "Leverage" as debt ratio vs operational leverage — these are fundamentally different concepts.`,
    `Building your vocabulary is a daily practice. Keep a finance terms journal, define every new term you encounter, and use each term in context within 48 hours of learning it. See the full glossary in the Career Paths tab for 30 essential terms for this skill.`,
  ];
}

function getChapter5(skill: typeof hardSkills[0]): string[] {
  return [
    `The absolute beginner in ${skill.name} needs a clear starting point — an honest assessment of prerequisites and a concrete Day 1 action plan. Most people fail to build this skill because they start too advanced, get overwhelmed, and quit.`,
    `Prerequisite Knowledge Required: (1) Basic accounting — understanding what a P&L, balance sheet, and cash flow statement represents at a conceptual level. (2) Basic mathematics — percentages, ratios, growth rates, and compound interest. (3) Excel fundamentals — entering data, basic formulas, and formatting. (4) Business context — a general understanding of how companies make money.`,
    `Day 1 Action Plan: Morning — download the free Screener.in data for any Nifty 50 company. Afternoon — identify the three financial statements and label every line item. Evening — calculate 5 simple ratios: Revenue Growth, Gross Margin, Net Margin, ROCE, and Debt/Equity. Reflection — write 3 sentences explaining what you learned in plain English.`,
    `The beginner's biggest enemy is trying to learn everything at once. Follow the sequence: understand concepts before touching Excel, build simple models before complex ones, master the 3-statement model before attempting valuation, and practice with real companies, not theoretical examples.`,
    `Building blocks for ${skill.name}: Start with income statement analysis (most intuitive). Then balance sheet (more abstract). Then cash flow statement (most important but hardest). Only after you can explain all three from memory should you begin connecting them in a model.`,
  ];
}

function getChapter6(skill: typeof hardSkills[0]): string[] {
  return [
    `Setting up the right environment for learning and practicing ${skill.name} dramatically accelerates your progress. The tools you use, how you configure them, and the resources you have access to determine your daily learning velocity.`,
    `Required Tools: Microsoft Excel (M365 recommended for latest functions), Screener.in (free tier sufficient for beginners), a Screener premium subscription (₹1,950/year — worth every rupee), access to SEC EDGAR for global company filings, and a dedicated note-taking system (Notion or Obsidian work well).`,
    `Setup Guide Step-by-Step: (1) Install Microsoft Office M365 — enable the data analysis and solver add-ins immediately. (2) Enable iterative calculations: File → Options → Formulas → check "Enable Iterative Calculation." (3) Create a dedicated folder structure: Projects/Finance-Learning/[Skill]/[Company]/[Date]. (4) Set up a Screener.in account and practice downloading data for 5 companies. (5) Bookmark key reference sites: SEBI, BSE, NSE, Damodaran's data page.`,
    `Free vs Paid Tool Comparison: The free tier of most tools gets you 80% of the functionality for learning purposes. The remaining 20% (Bloomberg Terminal, premium databases, etc.) becomes relevant once you're working at a financial institution that provides access. Don't spend money you don't need to at the beginner stage.`,
    `System Requirements: Modern laptop with 8GB+ RAM (16GB preferred for large models), Excel M365 subscription (₹4,000-6,000/year is the single best investment for this skill), and reliable internet connection for data access. A second monitor is highly recommended for keeping data and model visible simultaneously.`,
  ];
}

function getChapter7(skill: typeof hardSkills[0]): string[] {
  return [
    `Understanding the 15 most common beginner mistakes in ${skill.name} is arguably more valuable than any tutorial. Knowing what to avoid prevents the wasted weeks that most self-taught practitioners experience.`,
    `Mistake #1: Hard-coding values that should be input assumptions. Every number that could change belongs in a clearly labeled input cell. When you hard-code, you create a model that requires manual updating — and every manual update is an opportunity for error. Fix: Color all inputs blue, all formulas black.`,
    `Mistake #2: Not checking the balance sheet balance. In a 3-statement model, Assets = Liabilities + Equity at every period. If it doesn't balance, your model is wrong. Fix: Build a check cell from day 1.`,
    `Mistake #3: Circular references without iterative calculation enabled. Many financial models have legitimate circular references (e.g., interest income depends on the revolver balance, which depends on net income, which includes interest income). Fix: Enable iterative calculations in Excel options.`,
    `Mistake #4: Learning from templates without understanding first principles. Templates teach you the output, not the logic. If you can't build a model from a blank spreadsheet, you don't understand it. Fix: Always rebuild templates from scratch as a learning exercise.`,
    `Mistake #5: Confusing EBITDA with cash flow. EBITDA ≠ operating cash flow. Working capital changes, capex, and tax timing can create massive differences. Fix: Always build the cash flow statement separately rather than treating EBITDA as a cash proxy.`,
    `Why People Quit: Most learners quit at the 6-week mark when complexity increases faster than confidence. The fix is to commit to one complete project — even if imperfect — before moving to the next concept. A finished imperfect model teaches more than ten unfinished perfect attempts.`,
  ];
}

function getChapter8(skill: typeof hardSkills[0]): string[] {
  return [
    `The five beginner projects below are specifically designed to build ${skill.name} competency progressively. Each project is harder than the last, teaches specific skills, and produces a portfolio piece you can show in an interview.`,
    `Project 1 (Beginner): Choose any Nifty 50 company and reconstruct the last 3 years of P&L from their annual report in Excel. Don't copy-paste — manually input every line. This forces you to understand every item. Expected time: 4 hours. What you learn: reading financials, Excel structure, accounting line items.`,
    `Project 2 (Easy-Intermediate): Calculate 20 ratios for the same company across 3 years, interpret the trend for each ratio, and write a 200-word commentary. Expected time: 3 hours. What you learn: ratio analysis, trend interpretation, written commentary.`,
    `Project 3 (Intermediate): Build a simple 3-statement model with 2-year projections for a company with straightforward financials (avoid banks, insurance, and oil companies at this stage). Expected time: 8-10 hours. What you learn: financial statement integration, basic modeling.`,
    `Project 4 (Intermediate-Hard): Build a basic DCF valuation for the same company using your projections from Project 3. Calculate WACC manually and perform sensitivity analysis on key assumptions. Expected time: 6-8 hours. What you learn: valuation methodology, WACC construction, sensitivity tables.`,
    `Project 5 (Portfolio-Quality): Build a comparables analysis comparing your company to 4 competitors. Source multiples from public data, normalize for anomalies, and present a valuation range with your recommendation. Expected time: 10-12 hours. What you learn: relative valuation, data sourcing, presentation. This project is interview-ready.`,
  ];
}

function getChapter9(skill: typeof hardSkills[0]): string[] {
  return [
    `Applying the 80/20 principle to ${skill.name}, there are specific techniques that deliver the vast majority of professional results. Master these before attempting advanced specializations.`,
    `Core Technique 1: The 3-Statement Integration. Understanding precisely how the income statement, balance sheet, and cash flow statement are linked is the foundation of everything. The key linkages: Net Income flows to Retained Earnings on the BS; D&A is added back in operating activities on the CF; Capex flows to PP&E on the BS; Working capital changes appear in both BS and CF.`,
    `Core Technique 2: The Revenue Build. Before modeling anything else, understand how the company makes money. Break revenue into its constituent drivers: Price × Volume for product businesses; Users × ARPU for digital businesses; Capacity × Utilization × Rate for service businesses. Build the revenue drivers explicitly.`,
    `Core Technique 3: Ratio-Based Projection. For many line items, the most defensible projection methodology is expressing them as a % of revenue (or another driver) and projecting that ratio based on historical trends and industry benchmarks. This creates "coherent" models where all items move together realistically.`,
    `When NOT to use certain techniques: Don't use comparable company multiples when the peer group is too small or too diverse. Don't use DCF when the forecast period is longer than 5 years without exceptional business visibility. Don't use LBO methodology for companies with insufficient free cash flow to service debt. Knowing when NOT to apply a technique is the mark of a sophisticated practitioner.`,
  ];
}

function getChapter10(skill: typeof hardSkills[0]): string[] {
  return [
    `Moving beyond foundations into intermediate concepts for ${skill.name} requires developing multi-dimensional thinking — the ability to hold multiple frameworks in mind simultaneously and integrate them coherently.`,
    `Intermediate Concept 1: Scenario Integration. A professional model doesn't just have one projection — it has bear, base, and bull scenarios that are toggled with a single input cell. The art is in making the scenarios distinct and defensible: what specific assumptions differ between scenarios, and why? Each scenario should tell a coherent business story.`,
    `Intermediate Concept 2: The Bridge From Historical to Projected. Sophisticated practitioners don't just project into the future — they reconcile the model's historical period with actual reported numbers first. If the model can't reproduce history accurately, it certainly won't project the future accurately.`,
    `Intermediate Concept 3: Integration with Other Finance Disciplines. ${skill.name} doesn't exist in isolation. Models feed valuation, which informs M&A decisions, which require understanding of capital structure. The best practitioners see the full picture and build models that can answer questions across all these dimensions.`,
    `Real-World Application: In a live deal, you'll be asked to turn a model around in 4 hours with new information coming in continuously. Intermediate skills mean you have the model architecture solid enough to update quickly and validate the output efficiently. The ability to rapidly update and explain model changes is what distinguishes a competent analyst from a great one.`,
  ];
}

function getChapter11(skill: typeof hardSkills[0]): string[] {
  return [
    `Deliberate practice for ${skill.name} follows specific principles that differ from casual learning. The key is practicing at the edge of your current capability — not so easy that you're bored, not so hard that you're paralyzed.`,
    `Weekly Practice Schedule: Monday — build one new technical component (e.g., a circular reference debt sweep). Tuesday — rebuild a classic model from scratch (time yourself). Wednesday — analyze a real company using the techniques learned this week. Thursday — practice explaining what you built to a non-technical person. Friday — review errors and document learnings.`,
    `Spaced Repetition for Finance Concepts: The forgetting curve is real. After learning a formula or concept, review it at 1 day, 1 week, 2 weeks, and 1 month. Using flashcard apps (Anki) with finance formulas significantly improves retention. Create cards for every key formula, with the problem on one side and the solution approach on the other.`,
    `Simulating Real Work Environments: The best practice is analysis that replicates real work. Use real company data (not fictional textbook companies), impose time pressure (set a timer), and deliver an output to a real person who provides feedback. Analysis done under pressure with real stakes improves much faster than leisurely tutorial exercises.`,
    `Practice Resources Ranked by Quality: (1) Aswath Damodaran's free valuation classes and case studies — best free resource globally. (2) Actual company annual reports — the most realistic practice material. (3) BIWS/WSP case studies — closest to real IB analyst work. (4) CFI model templates — good for understanding structure but must be rebuilt from scratch to learn. (5) YouTube tutorials — useful for specific techniques but insufficient on their own.`,
  ];
}

function getChapter12(skill: typeof hardSkills[0]): string[] {
  return [
    `Measuring your progress in ${skill.name} requires concrete, objective benchmarks — not just a feeling that you're improving. The framework below gives you clear targets at each level.`,
    `Beginner Level: Can explain all three financial statements and their linkages. Can calculate 20 standard ratios. Can build a simple model from provided historical data. Timeline: 0–3 months.`,
    `Intermediate Level: Can build a complete 3-statement model from scratch with projections. Can perform DCF and comps analysis. Can explain assumptions and defend them under questioning. Timeline: 3–6 months.`,
    `Advanced Level: Can build complex models (LBO, merger, project finance) under time pressure. Can identify errors in another analyst's model in under 30 minutes. Can present findings persuasively. Timeline: 6–18 months.`,
    `Expert Level: Can build any model type from memory. Has built 20+ real-company models. Has taught the skill to others. Is considered a reference resource by peers. Timeline: 18+ months.`,
    `Self-Assessment Questions: (1) Can I explain what happens to the cash flow statement if accounts receivable increases? (2) Can I describe 3 methods to calculate terminal value and when to use each? (3) Can I audit a model I've never seen before in under 1 hour? (4) Can I explain WACC to a non-finance executive in 3 minutes? If you can answer all 4 confidently, you are at least at Intermediate level.`,
  ];
}

function getChapter13(skill: typeof hardSkills[0]): string[] {
  return [
    `Consistency is the meta-skill that determines whether you will actually achieve mastery in ${skill.name}. The biggest predictor of skill development is not intelligence or initial ability — it is the number of hours of deliberate practice accumulated over time.`,
    `The Habit Formation System: Attach your ${skill.name} practice to an existing daily habit (habit stacking). Most successful learners practice first thing in the morning before email or news — this ensures the practice happens regardless of how the day unfolds.`,
    `The 66-Day Rule: Research shows it takes approximately 66 days (not the mythical 21) to form a stable habit. Commit to 66 consecutive days of minimum 30-minute practice. After 66 days, the behavior becomes automatic.`,
    `Managing the Plateau: Every learner hits a plateau around weeks 6-10 where progress feels invisible. This is normal — it means the brain is consolidating learning from the "stretching" phase. The solution is to push through with more challenging material, not easier material.`,
    `Accountability Systems: (1) Learning partner — someone at a similar stage who you check in with weekly. (2) Public commitment — post your learning goals on LinkedIn, which creates social accountability. (3) Progress journal — write one paragraph daily about what you practiced and what you learned. (4) Mentorship — a monthly check-in with someone more advanced who can course-correct your trajectory.`,
  ];
}

function getChapter14(skill: typeof hardSkills[0]): string[] {
  return [
    `Advanced techniques in ${skill.name} represent the approaches used by top 1% practitioners at bulge bracket banks, elite PE funds, and consulting firms. These go beyond textbook methodology into the practical wisdom that only comes from doing real deals.`,
    `Advanced Technique 1: Dynamic Architecture Design. At the professional level, models aren't just built to work — they're built to be used by others, updated frequently, and audited externally. This means designing models with explicit assumption logs, check systems, and clear navigation before writing a single formula.`,
    `Advanced Technique 2: Scenario Integration with Business Logic. Professional scenarios are not just different numbers — they are different business stories with internally consistent assumptions. The bull case isn't just "everything goes up" — it's "specific market conditions materialize that enable specific strategic advantages with predictable outcomes."`,
    `Advanced Technique 3: Model Governance and Version Control. At professional level, models go through multiple reviews and revisions. Maintaining version control (date-stamped files, change logs), protecting formula cells, and using a review checklist prevents the embarrassing errors that destroy credibility.`,
    `Industry Standards in 2026: The Goldman Sachs formatting standard (blue for inputs, black for formulas, green for cross-sheet links, red for external links) has become the industry norm across IB. The FAST Standard (Flexible, Appropriate, Structured, Transparent) provides a broader framework for model quality. All professional models are now expected to meet one of these standards.`,
  ];
}

function getChapter15(skill: typeof hardSkills[0]): string[] {
  return [
    `How do elite practitioners of ${skill.name} operate day-to-day? The workflow of a Goldman Sachs analyst or McKinsey associate is systematically different from that of an average practitioner — not just in technical depth, but in process discipline.`,
    `Morning Routine of Top Performers: The best practitioners begin each day with a review of market data and news that could affect the models they're working on. They update any live-data-linked models before diving into new work. They also maintain a "model status tracker" — a simple document listing every active model, its current state, and pending issues.`,
    `The 4-Eye Review System: Elite firms require every model to be reviewed by a second analyst before any output is shared. The reviewer uses a systematic checklist (sum checks, balance checks, formula audits) rather than relying on judgment alone. This system catches 80% of errors before they reach clients.`,
    `Quality Control Process: Before any model output is used in a client context: (1) Run all check calculations. (2) Stress test with extreme assumptions (0% growth, -50% margins) to verify the model doesn't break. (3) Cross-check outputs against publicly available consensus estimates for reasonableness. (4) Have someone not involved in building the model perform a 15-minute walkthrough.`,
    `How Top Fund Managers Use This Skill: At the PM level, the skill shifts from building models to interrogating them. Top PMs ask: which assumption is the model most sensitive to? What would the stock price be under 3 different scenarios? Is the market currently pricing in the bull or bear case? They use the model as a framework for thinking, not as a precise predictor.`,
  ];
}

function getChapter16(skill: typeof hardSkills[0]): string[] {
  return [
    `Case Study 1 — Success: The Infosys Valuation Challenge (2024). An analyst at a mid-tier Indian brokerage used advanced ${skill.name} techniques to identify that Infosys was undervalued by 30% relative to its peers. The key insight came from normalizing for a one-time tax gain that inflated reported earnings and building a detailed segmental model that the market wasn't pricing correctly. The stock subsequently re-rated 28% in 12 months, validating the thesis.`,
    `Case Study 2 — Failure/Learning: The Satyam Scandal (2009). This is the canonical example of what happens when ${skill.name} fails. Auditors and analysts accepted reported financials at face value without applying forensic techniques to detect the massive fabrication of cash balances. The lesson: every number on a financial statement is an allegation until verified against independent evidence.`,
    `Case Study 3 — Indian IPO Application: The Zomato IPO Analysis (2021). Analysts needed to value a loss-making food delivery company with explosive growth. Traditional DCF failed due to uncertainty. The best analyses used scenario analysis with clearly articulated assumptions about food delivery market penetration, unit economics improvement timelines, and path to profitability. Those who built rigorous scenario models were able to frame the investment debate accurately.`,
    `Case Study 4 — PE Deal: A ₹500 Cr LBO of an Indian manufacturing company. The deal team built a detailed LBO model showing that at 4.5x EBITDA entry, a 5-year hold with conservative assumptions still generated a 22% IRR. The model sensitivity analysis showed that the deal worked even if EBITDA growth was zero — giving the investment committee confidence to proceed.`,
    `Case Study 5 — Corporate Finance: A Tata Group subsidiary was evaluating whether to build a greenfield plant or acquire a competitor. The corporate development team built a side-by-side model comparing NPV, payback period, risk profile, and strategic optionality for each option. The build option won by ₹300 Cr NPV but carried 2x the execution risk — a nuance that only the model could quantify.`,
  ];
}

function getChapter17(skill: typeof hardSkills[0]): string[] {
  return [
    `Applying ${skill.name} under time pressure is a completely different challenge from applying it in a learning environment. The ability to produce high-quality work under extreme time constraints is what separates junior from senior practitioners.`,
    `The 2-Hour Model Framework: When you have 2 hours instead of 2 days, prioritize ruthlessly. Build the minimum viable model: revenue projection + simplified cost structure + EBITDA → then cash conversion → then valuation. Get a rough answer first, then refine. An 80% accurate model delivered in 2 hours beats a perfect model delivered in 2 days when the deal is closing tonight.`,
    `Uncertainty Management: When key data is unavailable (common in early-stage deals), use ranges instead of point estimates. Build your model with "low, mid, high" scenarios from the start. This forces you to think about the distribution of outcomes rather than a single false-precision number.`,
    `Crisis Scenario Protocol: When a model produces an unexpected or alarming output in front of a client or in an investment committee: (1) Stay calm — don't immediately accept or reject the number. (2) Say "let me verify this assumption" — buy yourself time to check. (3) Trace back through the logic systematically. (4) If wrong, acknowledge and correct immediately — credibility comes from integrity, not from being right every time.`,
    `High-Stakes Presentation Survival Guide: Know your model's top 5 assumptions cold. Know the sensitivity of the output to each assumption. Prepare for the 5 most likely pushback questions before entering the room. Have a "bull case" number and a "bear case" number ready without needing to go back to the model. Confidence in a presentation comes from having stress-tested your own work before the room does it for you.`,
  ];
}

function getChapter18(skill: typeof hardSkills[0]): string[] {
  return [
    `The ability to communicate the outputs of ${skill.name} to diverse audiences is itself a mastery-level skill. A brilliant analysis communicated poorly is worth less than a good analysis communicated brilliantly. The financial professional's job is not done when the model is built — it begins.`,
    `Report Writing Standards: All financial reports should follow the Pyramid Principle: start with the conclusion, then provide supporting evidence. The first paragraph of any analysis should answer the key question — what is the recommendation? The rest of the report provides the evidence. Executive readers often read only the first paragraph.`,
    `Slide Deck Best Practices: Each slide should convey exactly one insight. The slide title should be a complete insight sentence ("Revenue growth decelerated to 12% due to India market headwinds") not a description ("Revenue Analysis"). Visuals should be self-explanatory without presenter narration for maximum impact.`,
    `Explaining Complexity to Non-Technical Stakeholders: The ADEPT method works well: use an Analogy, draw a Diagram, provide an Example, describe the Plain English explanation, then the Technical detail. Never lead with the technical detail when talking to a CFO who doesn't come from an analytical background.`,
    `Email Communication Standards in Finance: Subject line should contain the key information: "Q3 Analysis: Revenue ₹450 Cr, 15% above consensus — Upgrade to Buy." The body should be maximum 5 sentences with one clear ask. Attachments should be named clearly with date and version: "HDFC_Model_v3_2026-01-15.xlsx." Never send a model without a cover note explaining what's in it.`,
  ];
}

function getChapter19(skill: typeof hardSkills[0]): string[] {
  return [
    `The psychological dimension of ${skill.name} mastery is rarely discussed in technical training programs — yet it often determines whether a technically skilled practitioner succeeds or fails in practice. Understanding the human behavioral factors that affect analytical work is a significant competitive advantage.`,
    `Cognitive Bias in Financial Analysis: Confirmation bias — the tendency to seek information that confirms your existing thesis — is the most dangerous bias in finance. Once an analyst has built a model with a specific output, they unconsciously resist information that would change that output. The professional antidote is actively seeking disconfirming evidence as a routine part of every analysis.`,
    `Anchoring Effect: The first number you see anchors all subsequent judgment. In negotiations, in valuation, in forecasting — the initial anchor has a disproportionate influence on the final number. Sophisticated analysts control for this by building their own range before looking at consensus estimates or other references.`,
    `Emotional Control Under Market Pressure: When markets are crashing and your investment thesis is being tested, the emotional pressure to change your analysis to match the market is intense. Elite practitioners have pre-committed to their analytical framework and know the difference between "the market is wrong" (which is often true short-term) and "my analysis was wrong" (which must be acknowledged honestly).`,
    `Overconfidence — the most expensive bias in finance: Research shows that finance professionals are systematically overconfident in their predictions. The solution is calibration — tracking your predictions over time and measuring how often your "80% confident" predictions are actually right. Most people find their "80% confident" predictions are right only 60% of the time. Knowing this about yourself is incredibly valuable.`,
  ];
}

function getChapter20(skill: typeof hardSkills[0]): string[] {
  return [
    `Pattern recognition is what separates experts from beginners in ${skill.name}. After seeing 50–100 models or analyses, you begin to recognize instantly what's wrong, what's missing, and what's exceptional. This pattern library is built through deliberate exposure to many examples.`,
    `How Masters See What Beginners Miss: An experienced financial modeler looking at a new model scans for specific patterns in the first 5 minutes: does the balance sheet balance? Are there obvious circular references? Are growth rates coherent across time periods? Are margins trending in a direction that requires explanation? These pattern checks happen automatically after sufficient practice.`,
    `Building Your Pattern Library: After completing each analysis or model, add a one-page summary to a personal "pattern journal." Document: what was unusual about this company or situation, what assumption drove the most output variance, what error did you catch and how, what insight did you find that wasn't obvious initially. After 50 entries, this journal becomes a powerful pattern recognition tool.`,
    `Opportunity Identification Frameworks: The best practitioners spot opportunities that others miss because they recognize patterns across time, companies, and sectors. An analyst who has studied 100 Indian midcap companies can immediately identify which ones fit the pattern of "pre-re-rating value plays" — a pattern recognition skill that takes 2–3 years to develop.`,
    `Speed Reading of Complex Financial Data: A senior banker should be able to scan a 10-K in 30 minutes and extract the key investment considerations. This speed comes entirely from pattern recognition — knowing exactly which sections contain the most important information, which footnotes deserve full attention, and which boilerplate can be skipped. This skill is built through analyzing 100+ annual reports, not through any shortcut.`,
  ];
}

function getChapter21(skill: typeof hardSkills[0]): string[] {
  return [
    `Strategic thinking with ${skill.name} means using it not just for tactical analysis but as a foundation for career strategy, competitive positioning, and long-term value creation. The practitioners who build 20-year careers in finance use their skills strategically, not just technically.`,
    `Long-Term Planning Using This Skill: At every stage of your career, ask: "How does my mastery of ${skill.name} compound over time?" The answer is through: (1) Building a network of people who know you as the expert. (2) Creating intellectual property (frameworks, templates, published research) that generates ongoing value. (3) Teaching the skill, which deepens your own mastery more than any other activity.`,
    `Competitive Advantage Creation: In 2026, basic proficiency in ${skill.name} is table stakes. The competitive advantage comes from specialization: being the best at financial modeling for Indian fintech companies, or the most rigorous DCF practitioner in renewable energy, or the Python-enabled analyst who automates what others do manually.`,
    `How This Skill Compounds Over Time: Unlike many professional skills that plateau, ${skill.name} exhibits compound growth when practiced consistently. Each new industry you analyze adds pattern recognition. Each challenging model you build reveals new complexity to master. Each teaching engagement forces deeper understanding. After 10,000 hours, you possess a skill set that is genuinely rare and valuable.`,
    `Career Strategy Built Around This Skill: The most successful finance careers are built on owning a domain: "I am the India consumer sector analyst at [firm]." The path to domain ownership is 3–4 years of focused skill development + sector expertise + relationship building in that specific area. ${skill.name} provides the technical foundation; sector expertise and relationships provide the moat.`,
  ];
}

function getChapter22(skill: typeof hardSkills[0]): string[] {
  return [
    `Innovation in ${skill.name} means creating approaches that improve upon existing methods, solve problems that current techniques cannot, or anticipate future needs before they become requirements. The innovators in any field create disproportionate value and achieve outsized success.`,
    `Creating New Methods: The first step to innovation is mastery of existing methods. You cannot improve what you don't fully understand. Once you have genuine mastery, innovation happens naturally from encountering problems that existing methods solve poorly. Document these problems — they are the seed of innovation.`,
    `Emerging Applications in 2026–2030: AI integration is creating new applications for ${skill.name} that didn't exist 5 years ago. Automated analysis pipelines, LLM-assisted model interpretation, real-time data integration, and agentic research workflows are all areas where practitioners with both technical depth and AI literacy are building genuinely new approaches.`,
    `Building Proprietary Frameworks: Every expert eventually develops their own approach that synthesizes what they've learned into an original methodology. This might be a unique way of projecting a specific financial metric, a novel risk assessment framework, or an original approach to a specific valuation challenge. Publishing these frameworks (on LinkedIn, in research notes) builds reputation and creates inbound opportunities.`,
    `Publishing Thought Leadership: The highest-value activity for a senior practitioner is making their implicit knowledge explicit through writing. A published framework, research note, or methodology guide creates value for thousands of readers and establishes the author as the definitive expert. In 2026, this content is both more valuable (AI makes information abundant, making genuine expertise scarce) and easier to distribute (LinkedIn, Substack, institutional channels).`,
  ];
}

function getChapter23(skill: typeof hardSkills[0]): string[] {
  return [
    `Teaching ${skill.name} to others is simultaneously the best way to deepen your own mastery and a highly valuable contribution to the finance profession. The Feynman Technique holds that you truly understand something only when you can explain it simply.`,
    `How to Explain This Skill to Others: The biggest mistake in technical explanation is starting with the technique rather than the problem it solves. Always begin with: "Here's the business problem we're trying to solve." Then: "Here's why existing approaches fail." Then: "Here's what ${skill.name} does differently." This sequence creates understanding, not just information transfer.`,
    `Mentoring Junior Professionals: The most valuable mentorship is not just teaching techniques — it's teaching judgment: when to use which approach, how to handle uncertainty, how to communicate with senior stakeholders. These judgment skills take years to develop through experience, but can be accelerated significantly through mentorship.`,
    `Creating Your Own Frameworks and Teaching Them: The act of creating a teaching framework forces you to identify what is truly essential versus what is peripheral. Most teaching frameworks reveal gaps in the teacher's understanding. Creating a comprehensive curriculum for ${skill.name} — even just for yourself — is one of the most valuable learning exercises available.`,
    `Content Creation Strategy: Teaching at scale through content (LinkedIn posts, YouTube videos, newsletters, courses) creates leverage on your expertise. A 20-minute tutorial that 10,000 people watch creates more value — and more professional visibility — than teaching the same content in person 1,000 times. The best content is specific and practical: "Here is exactly how I built this model" outperforms "Introduction to Financial Modeling."`,
  ];
}

function getChapter24(skill: typeof hardSkills[0]): string[] {
  return [
    `${skill.name} is applied across virtually every sector of the financial industry, and increasingly in corporate functions beyond traditional finance. Understanding which industries offer the best opportunities — and what each career path looks like day-to-day — allows you to target your skill development optimally.`,
    `Investment Banking Applications: IB analysts apply this skill daily for 60-80 hours per week in their first 2 years. The work is model-intensive and deadline-driven, building extraordinary technical depth rapidly. The trade-off: extreme hours and pressure in exchange for accelerated skill development and compensation. Top IB analysts in India earn ₹15-30 LPA at entry level, rising to ₹50-100 LPA at associate level.`,
    `Private Equity Applications: PE analysts use this skill for investment evaluation, portfolio company monitoring, and exit planning. The work is more strategic and less mechanical than IB — fewer models, but each model carries more weight. PE is the pinnacle for practitioners who want to combine deep ${skill.name} mastery with strategic decision-making. Entry-level at KKR India or Warburg Pincus starts at ₹20-35 LPA.`,
    `Corporate Finance Applications: FP&A teams in large companies use this skill for budgeting, forecasting, and strategic planning. The work is more repetitive but offers work-life balance and broader business exposure. The best corporate finance roles at MNCs like Unilever, Nestle, or tech companies pay ₹15-30 LPA with clearer work-life boundaries.`,
    `Freelance Market: There is a growing freelance market for ${skill.name} expertise. Independent consultants charge ₹5,000-50,000 per model depending on complexity. Platforms like Toptal, Upwork, and direct LinkedIn outreach can build a sustainable freelance practice. The constraint is that freelance work requires existing credibility — typically 3-5 years of institutional experience first.`,
  ];
}

function getChapter25(skill: typeof hardSkills[0]): string[] {
  return [
    `Building a portfolio of ${skill.name} work is the most powerful way to demonstrate competency without having an elite employer brand on your resume. A well-curated portfolio of real analyses can get you into rooms that a resume alone cannot open.`,
    `What Interviewers Look For: Real work beats tutorials. A model built for a real company, with real data, showing real judgment — even if imperfect — tells interviewers more than 10 tutorial projects. The questions interviewers ask about portfolio work are about judgment: "Why did you make this assumption?" "What would change your view?" These questions cannot be answered by someone who just followed a template.`,
    `10 Portfolio Project Ideas: (1) Full 3-statement model for a Nifty 50 company from scratch. (2) DCF valuation with scenario analysis — upload to GitHub with README. (3) Comparable company analysis for an Indian sector. (4) LBO model for a fictional PE acquisition. (5) Industry research report combining quantitative and qualitative analysis. (6) Python-automated ratio analysis for all Nifty 50 companies. (7) A "portfolio piece" — your single best analysis on a company you know deeply. (8) A sector-specific financial model (bank, real estate, or insurance). (9) A merger model showing accretion/dilution analysis. (10) A presentation deck presenting your investment thesis professionally.`,
    `How to Document and Present: GitHub is the professional standard for code-based work. Excel models should be saved as .xlsx with a cover page explaining the analysis. LinkedIn posts documenting your work generate visibility. A personal Notion page or website acts as a curated portfolio hub. Always include a brief written description of the analysis, the key findings, and what you learned.`,
    `Real Examples of Impressive Finance Portfolios: The most impressive finance portfolios have 3 characteristics: (1) They cover a specific sector or theme deeply (e.g., 5 Indian fintech analyses rather than 5 random companies). (2) They show evolution over time — earlier work is noticeably less sophisticated than recent work. (3) They include at least one piece of original analysis — an insight that isn't just reproduced from an existing report.`,
  ];
}

function getChapter26(skill: typeof hardSkills[0]): string[] {
  return [
    `Understanding the economic value of ${skill.name} mastery helps you optimize your career and compensation decisions. Below is a comprehensive guide to employment, consulting, and freelance income opportunities for this skill in 2026.`,
    `Employment Salary Ranges by Level (India): Entry-level (0-2 years): ₹8-20 LPA at top firms, ₹5-10 LPA at mid-tier. Mid-level (3-6 years): ₹20-50 LPA at top firms, ₹15-25 LPA at mid-tier. Senior-level (7-12 years): ₹50-120 LPA at top firms with bonus. Partner/MD level: ₹100 LPA+ plus carried interest or profit share.`,
    `Consulting and Freelance Rates: Independent consultants with demonstrated expertise charge ₹5,000-25,000 per hour for advice and ₹50,000-500,000 per project for financial models or analysis work. Freelance platforms like Toptal list finance experts at $100-300/hour (₹8,000-25,000/hour). Building a freelance practice takes 2-3 years of institutional credibility-building first.`,
    `Side Income Opportunities: Teaching courses (Udemy, your own platform): ₹1-10 LPA passive once established. Creating financial model templates for sale: ₹5,000-50,000 per template. Writing for finance publications: ₹5,000-25,000 per article. Mentoring sessions: ₹2,000-10,000 per hour. YouTube/content creation: ₹0 initially, significant passive income potential after 2-3 years of consistent content.`,
    `How to Negotiate Compensation: The key to compensation negotiation is having competing offers — this is the single most effective lever. Document your specific value contribution with numbers (e.g., "I built models that supported 3 deals totaling ₹2,000 Cr in advisory fees"). Demonstrate market awareness: know the salary benchmarks for your role and experience level. Never accept the first offer without a counter — the worst they can say is no.`,
  ];
}

function getChapter27(skill: typeof hardSkills[0]): string[] {
  return [
    `Building a professional network using ${skill.name} as your credibility anchor is dramatically more effective than generic networking. When you are known as the expert in a specific skill, the right people seek you out.`,
    `Using the Skill as Networking Currency: The most valuable networking is offering something of value first. Sharing a framework you've developed, publishing an analysis that helps someone make a decision, or offering to review another analyst's model — these acts of value create genuine relationships.`,
    `Online Communities for This Skill: LinkedIn groups ("Financial Modeling Professionals," "CFA India Members," "Investment Banking Career"), Reddit communities (r/finance, r/IndiaInvestments, r/SecurityAnalysis), Twitter/X (follow Aswath Damodaran, finance professors, and senior practitioners), and Discord servers (Breaking Into Wall Street Discord, various MBA communities).`,
    `How to Approach Senior Professionals: The cold LinkedIn message that works has 4 elements: (1) Specific reference to their work ("I read your note on Jio's valuation and had a question about your WACC assumption"). (2) Brief relevant credential ("I've been building financial models for 2 years"). (3) Specific ask ("Would you have 15 minutes for a call to discuss valuation of telecom businesses?"). (4) Easy out ("If you're too busy, any reading recommendations would be appreciated").`,
    `Indian Finance Communities: The CFA India Society is the most valuable institutional network in Indian finance. Their events, study groups, and mentoring programs connect you with thousands of practitioners across firms. Attend at least 4 events per year. Additionally, IIM alumni networks, NSE/BSE investor communities, and Screener.in community forums offer valuable India-specific networking.`,
  ];
}

function getChapter28(skill: typeof hardSkills[0]): string[] {
  return [
    `The ethical application of ${skill.name} is not just a regulatory requirement — it is the foundation of long-term career sustainability. Finance professionals who compromise on ethics destroy careers that took decades to build.`,
    `Responsible Use of This Skill: Every analysis influences decisions that affect real stakeholders — investors, employees, communities, and shareholders. The responsibility to be accurate, honest, and clear about uncertainty is not just professional — it is moral. Presenting a model without disclosing its key assumptions and limitations is a form of deception, even if unintentional.`,
    `Regulatory Considerations: In India, SEBI governs the conduct of investment analysts, portfolio managers, and investment bankers. The SEBI (Research Analysts) Regulations 2014 and SEBI (Investment Advisers) Regulations 2013 set clear standards for how financial analysis must be conducted and disclosed. Non-compliance carries severe professional and legal consequences.`,
    `Conflicts of Interest: The most common ethical challenge in finance is the conflict of interest. An investment bank advising a company on an acquisition is simultaneously valuing the target and incentivized to complete the deal. Recognizing these conflicts, disclosing them, and managing them professionally is a non-negotiable ethical requirement.`,
    `Professional Certifications: The CFA designation (Chartered Financial Analyst) is the gold standard for investment professionals globally. The CFA Institute's Code of Ethics and Standards of Professional Conduct applies to all CFA charterholders and sets a globally recognized ethical standard. In India, NISM (National Institute of Securities Markets) certifications are required for many regulated activities. These certifications are not just credential signals — they represent genuine ethical commitments.`,
  ];
}

function getChapter29(_skill: typeof hardSkills[0]): string[] {
  return [
    `These insights are extracted from patterns observed across elite finance practitioners — the common approaches and mindsets that separate those in the top 1% from the rest of the field.`,
    `Secret #1: The top 1% are masters of communication, not just analysis. Technical brilliance without communication ability caps careers at the Analyst level. The biggest career accelerator is learning to present complex analysis simply and confidently to senior stakeholders.`,
    `Secret #2: They read primary sources, not summaries. While peers read equity research reports, the top performers read actual annual reports, SEBI filings, and original academic papers. The insight advantage from primary source reading is substantial.`,
    `Secret #3: They are relentless about assumption quality. A Goldman Sachs MD once said: "I care more about the 3 assumptions driving 80% of the output than about the 200 assumptions that drive the rest." Knowing which assumptions matter most — and spending time only there — is a professional superpower.`,
    `Secret #4: They maintain a personal intellectual framework. The best practitioners have their own mental models, refined over years, that they apply consistently. They don't start fresh with each new analysis — they have a framework that they update with new evidence.`,
    `Secret #5: They teach. Every elite practitioner has a mentoring or teaching practice — formal or informal. Teaching reveals gaps in your knowledge, builds reputation, and creates a network of people who credit you for their development. The network built through teaching is the most loyal and high-quality professional network possible.`,
  ];
}

function getChapter30(skill: typeof hardSkills[0]): string[] {
  return [
    `Building your personal methodology for ${skill.name} is the most advanced stage of mastery — where you move from applying others' frameworks to creating your own. This typically happens after 5+ years of serious practice.`,
    `How to Develop Personal Methodology: Your personal methodology emerges from the intersection of your unique experiences, the patterns you've observed, and the specific context you operate in. Start by documenting every non-standard approach you've used in your work. Over time, cluster these approaches by problem type. Eventually, you'll have a set of proprietary approaches that constitute your methodology.`,
    `Leveraging Unique Strengths: Everyone has a unique combination of skills, experiences, and knowledge. The best personal methodologies leverage these uniquely — a practitioner who has deep knowledge of Indian real estate AND strong financial modeling skills can develop approaches to real estate financial modeling that no textbook covers.`,
    `Building Proprietary Tools and Templates: Once your methodology is established, codify it into tools: Excel templates with your preferred structure, Python scripts for your analytical workflow, checklists for your quality control process. These tools encode your methodology and allow you to apply it consistently and rapidly.`,
    `Creating Intellectual Property: The highest form of personal methodology creation is publishing it — making your proprietary approach available to the world. This creates reputation, inbound opportunities, and a form of professional immortality. Your published framework will be used and cited long after you've moved to a different role or organization.`,
  ];
}

function getChapter31(skill: typeof hardSkills[0]): string[] {
  return [
    `The future of ${skill.name} through 2030 will be shaped by two dominant forces: the continued advancement of AI tools that automate routine analytical work, and the increasing complexity of the business and regulatory environment that requires more sophisticated judgment.`,
    `AI/Automation Impact (2026–2028): By 2028, AI tools will handle the routine, mechanical aspects of ${skill.name} — data collection, basic model construction, standard report formatting, and first-pass analysis. This will reduce demand for practitioners who can ONLY do these tasks. It will dramatically increase demand for practitioners who can design AI-augmented workflows, validate AI outputs, and add judgment that AI cannot replicate.`,
    `Skills That Will Become Obsolete: Purely mechanical data entry and formatting work. Basic ratio calculation (AI does this instantly). Standard template-based modeling (AI generates drafts faster). Manual data extraction from PDFs and filings.`,
    `New Sub-Skills Emerging: AI model evaluation and governance. Prompt engineering for financial analysis. Human-AI workflow design. Cross-disciplinary integration (combining this skill with AI/ML, Python, and regulatory knowledge). ESG-integrated versions of all traditional analytical techniques.`,
    `How to Stay Ahead of the Curve: (1) Learn Python and AI tools NOW — don't wait until they're mandatory. (2) Develop judgment that AI cannot replicate: industry expertise, relationship intelligence, contextual understanding. (3) Become the person who trains and evaluates AI in your area of expertise. (4) Build depth in one area that is complex enough to resist full automation for the foreseeable future. The future belongs to practitioners who use AI to amplify their expertise, not those who resist or ignore it.`,
  ];
}

function getChapter32(skill: typeof hardSkills[0]): string[] {
  return [
    `${skill.name} is not a skill you learn once — it is a living discipline that evolves constantly with the financial industry. Building systems for lifelong learning is the final and most important chapter in this framework.`,
    `Systems for Staying Current: (1) Weekly reading ritual — 2-3 industry publications + 1 research report + 1 regulatory update. (2) Monthly practice — one new analysis using recently learned techniques. (3) Quarterly skill audit — review your current competency level and identify the biggest gap. (4) Annual conference or training — at least one significant learning event per year.`,
    `Continuous Improvement Framework: The Japanese concept of Kaizen — small, continuous improvements — is directly applicable to skill development. A 1% improvement per week compounds to a 67% improvement per year. Identify one specific thing to improve each week, practice it deliberately, and measure whether it improved.`,
    `Annual Skill Audit Process: Every January, answer these questions honestly: (1) What has changed in this field in the past 12 months? (2) Am I still at the same relative skill level as 12 months ago, or has the field moved faster than my learning? (3) What is the ONE skill gap that, if closed, would have the biggest impact on my career and compensation? (4) What is my specific learning plan for the next 12 months?`,
    `Community Engagement for Staying Sharp: The most sustainable learning systems are social. Join or create a study group of 4-6 practitioners at similar levels. Attend CFA India events, industry conferences, and online forums regularly. Mentor at least one junior practitioner — teaching is the ultimate form of learning. The finance professionals who maintain elite-level skills through their 40s and 50s are those who have built rich learning communities around them.`,
  ];
}
