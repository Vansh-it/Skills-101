interface Props { darkMode: boolean; }

export default function RoadmapSection({ darkMode }: Props) {
  const text = darkMode ? 'text-white' : 'text-gray-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-gray-500';
  const textMed = darkMode ? 'text-slate-300' : 'text-gray-600';
  const card = darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-gray-200';

  const years = [
    {
      year: 'Year 1 (2026)',
      title: 'Foundation Builder',
      color: '#2563EB',
      icon: '🏗️',
      quarters: [
        {
          period: 'Q1 (Jan–Mar 2026)',
          primarySkill: 'Advanced Excel Mastery',
          secondarySkill: 'Financial Statement Analysis Basics',
          book: 'The Intelligent Investor — Benjamin Graham',
          project: 'Build 3-statement model for any Nifty 50 company',
          metric: 'Can name and explain all items on 3 financial statements',
          softSkill: 'Written Communication — Start weekly LinkedIn market commentary',
          tasks: [
            'Complete Excel shortcuts mastery (100+ shortcuts)',
            'Learn XLOOKUP, INDEX-MATCH, Power Query',
            'Read first 3 annual reports end-to-end',
            'Calculate 20 ratios for 5 companies',
            'Join CFA India Society',
          ]
        },
        {
          period: 'Q2 (Apr–Jun 2026)',
          primarySkill: 'Financial Modeling Foundations',
          secondarySkill: 'Python Basics',
          book: 'Investment Banking: Valuation, LBOs, M&A — Rosenbaum & Pearl',
          project: 'Build a DCF valuation model from scratch',
          metric: 'Can build and explain a 3-statement model without help',
          softSkill: 'Verbal Communication — Join Toastmasters this month',
          tasks: [
            'Build first 3-statement model from blank Excel',
            'Learn Python fundamentals (pandas, numpy basics)',
            'Download and analyze data for 10 companies',
            'Start a financial modeling journal (learnings log)',
            'Attend 1 industry networking event',
          ]
        },
        {
          period: 'Q3 (Jul–Sep 2026)',
          primarySkill: 'Financial Statement Analysis Deep Dive',
          secondarySkill: 'Power BI Introduction',
          book: 'Financial Statement Analysis — Penman',
          project: 'Complete FSA of a company that has faced regulatory action',
          metric: 'Can identify 5 red flags in any annual report',
          softSkill: 'Critical Thinking — Start daily decision journal',
          tasks: [
            'Read 10 annual reports with forensic mindset',
            'Build Power BI dashboard for one company',
            'Learn DAX basics (10 essential formulas)',
            'Practice Fermi estimation daily (5 min/day)',
            'Write 2 mock equity research reports',
          ]
        },
        {
          period: 'Q4 (Oct–Dec 2026)',
          primarySkill: 'Portfolio Building & Review',
          secondarySkill: 'Soft Skills Activation',
          book: 'Thinking, Fast and Slow — Daniel Kahneman',
          project: '5-company peer comparison analysis (portfolio-quality)',
          metric: 'Have 3 portfolio projects ready to show in interviews',
          softSkill: 'Commercial Awareness — Daily news reading routine established',
          tasks: [
            'Build 3 portfolio-quality analyses',
            'Give first technical presentation to 5+ people',
            'Connect with 50 professionals on LinkedIn',
            'Apply to 3 internships or analyst positions',
            'Conduct Year 1 skill audit and plan Year 2',
          ]
        }
      ]
    },
    {
      year: 'Year 2 (2027)',
      title: 'Professional Builder',
      color: '#16A34A',
      icon: '📈',
      quarters: [
        {
          period: 'Q5 (Jan–Mar 2027)',
          primarySkill: 'Advanced Financial Modeling (LBO, M&A)',
          secondarySkill: 'Python for Finance (Intermediate)',
          book: 'Python for Finance — Yves Hilpisch',
          project: 'Build a complete LBO model for a fictional PE acquisition',
          metric: 'Can build LBO and merger models in under 8 hours',
          softSkill: 'Commercial Awareness — Write monthly sector analysis',
          tasks: [
            'Build first LBO model from scratch',
            'Learn yfinance, pandas, matplotlib for financial data',
            'Build automated ratio calculator in Python',
            'Attend 1 CFA India event and make 10 connections',
            'Start a weekly writing practice on LinkedIn',
          ]
        },
        {
          period: 'Q6 (Apr–Jun 2027)',
          primarySkill: 'AI/ML for Finance Introduction',
          secondarySkill: 'Advanced Excel (VBA, Power Pivot)',
          book: 'Advances in Financial Machine Learning — López de Prado',
          project: 'Build a sentiment analysis model for earnings call transcripts',
          metric: 'Can build and deploy a basic ML model for financial data',
          softSkill: 'Networking — Build personal board of advisors (5 mentors)',
          tasks: [
            'Complete ML crash course (Google or fast.ai)',
            'Build first sentiment analysis pipeline',
            'Learn VBA basics and write first automation macro',
            'Connect with 5 ML practitioners in finance',
            'Publish first technical article on LinkedIn',
          ]
        },
        {
          period: 'Q7 (Jul–Sep 2027)',
          primarySkill: 'Consulting Case Frameworks',
          secondarySkill: 'Advanced FSA (Banks, Insurance, Real Estate)',
          book: 'The McKinsey Way — Ethan Rasiel',
          project: 'Solve 20 cases and document learnings in a case journal',
          metric: 'Can solve any profitability or market entry case in 20 minutes',
          softSkill: 'Verbal Communication — Give 3 public presentations',
          tasks: [
            'Practice 20 cases with a partner',
            'Complete bank financial modeling module',
            'Build full Power BI dashboard for a sector',
            'Apply MECE to 10 different business problems',
            'Start mentoring 1 junior finance student',
          ]
        },
        {
          period: 'Q8 (Oct–Dec 2027)',
          primarySkill: 'Portfolio Building & Career Positioning',
          secondarySkill: 'Integration of All Skills Learned',
          book: 'Never Split the Difference — Chris Voss',
          project: 'Complete capstone project: full investment thesis (15+ pages)',
          metric: 'Have a comprehensive portfolio showing 3 hard skills at intermediate+ level',
          softSkill: 'Leadership — Lead a team project or study group',
          tasks: [
            'Complete capstone analysis and publish publicly',
            'Update LinkedIn with all portfolio projects',
            'Request 10 informational interviews at target firms',
            'Negotiate better compensation at current role',
            'Conduct Year 2 audit and plan Year 3 specialization',
          ]
        }
      ]
    },
    {
      year: 'Year 3 (2028)',
      title: 'Elite Level',
      color: '#DC2626',
      icon: '🏆',
      quarters: [
        {
          period: 'Q9 (Jan–Mar 2028)',
          primarySkill: 'AI/ML Advanced (Deep Learning, RAG, Agentic AI)',
          secondarySkill: 'Specialization Choice (pick your domain)',
          book: 'Poor Charlie\'s Almanack — Charlie Munger',
          project: 'Build an agentic AI research pipeline for your sector',
          metric: 'Can build and evaluate production-ready financial AI systems',
          softSkill: 'Thought Leadership — Publish original research monthly',
          tasks: [
            'Build a RAG system for financial documents',
            'Choose specialization sector and go deep',
            'Publish 4 pieces of original research content',
            'Speak at 1 industry event (webinar or conference)',
            'Build personal brand: 1,000+ LinkedIn followers',
          ]
        },
        {
          period: 'Q10 (Apr–Jun 2028)',
          primarySkill: 'Expert-Level Projects in Your Specialization',
          secondarySkill: 'Teaching & Content Creation',
          book: 'Grit — Angela Duckworth',
          project: 'Build a fully automated financial analysis pipeline for your sector',
          metric: 'Peers and juniors consider you the reference expert in your area',
          softSkill: 'Strategic Networking — Build 3 board-level relationships',
          tasks: [
            'Mentor 5+ junior finance professionals',
            'Create first piece of monetizable content (course/template)',
            'Build relationships at C-suite/partner level',
            'Speak at 2 conferences in your specialty',
            'Build a proprietary framework and publish it',
          ]
        },
        {
          period: 'Q11 (Jul–Sep 2028)',
          primarySkill: 'Building Proprietary Systems & Frameworks',
          secondarySkill: 'Cross-Skill Integration Mastery',
          book: 'Pitch Anything — Oren Klaff',
          project: 'Develop and publish a proprietary analytical framework',
          metric: 'Have published work cited or referenced by industry professionals',
          softSkill: 'Leadership — Lead a significant organizational initiative',
          tasks: [
            'Publish proprietary framework on LinkedIn/Substack',
            'Build a community around your specialty (Discord, Slack)',
            'Write 1 comprehensive sector report (20+ pages)',
            'Apply for senior role using full portfolio',
            'Develop a personal monetization strategy for expertise',
          ]
        },
        {
          period: 'Q12 (Oct–Dec 2028)',
          primarySkill: 'Career Positioning & Elite Network',
          secondarySkill: 'Contribution to the Profession',
          book: 'Outliers — Malcolm Gladwell',
          project: 'Complete the 3-year journey with a comprehensive portfolio',
          metric: 'Recognized as expert in chosen domain. Salary in top 10% for experience level.',
          softSkill: 'All Soft Skills — Integrated into daily professional practice',
          tasks: [
            'Complete 3-year portfolio review and document learnings',
            'Build a network of 500+ high-quality connections',
            'Establish recurring income from expertise (consulting/content/teaching)',
            'Plan Years 4–10: longer-term career strategy',
            'Give back: create free resource for next generation',
          ]
        }
      ]
    }
  ];

  return (
    <section className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-black mb-2 ${text}`}>
            🗺️ 3-Year Mastery Roadmap
          </h2>
          <p className={`text-lg ${textSub}`}>
            Month-by-month blueprint from foundation to elite (2026–2028)
          </p>
        </div>

        {/* Timeline Progress Bar */}
        <div className={`flex items-center mb-10 p-4 rounded-2xl border ${card}`}>
          <div className="flex-1 text-center">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mx-auto mb-1">1</div>
            <div className={`text-xs font-semibold ${text}`}>Foundation</div>
            <div className={`text-xs ${textSub}`}>2026</div>
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded" />
          <div className="flex-1 text-center">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mx-auto mb-1">2</div>
            <div className={`text-xs font-semibold ${text}`}>Professional</div>
            <div className={`text-xs ${textSub}`}>2027</div>
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-red-600 rounded" />
          <div className="flex-1 text-center">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold mx-auto mb-1">3</div>
            <div className={`text-xs font-semibold ${text}`}>Elite</div>
            <div className={`text-xs ${textSub}`}>2028</div>
          </div>
        </div>

        {/* Years */}
        {years.map((year) => (
          <div key={year.year} className="mb-10">
            {/* Year Header */}
            <div
              className={`rounded-2xl p-6 mb-4 border text-white`}
              style={{ background: `linear-gradient(135deg, ${year.color}, ${year.color}99)` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{year.icon}</span>
                <div>
                  <h3 className="text-2xl font-black">{year.year}</h3>
                  <p className="text-base font-semibold opacity-90">{year.title}</p>
                </div>
              </div>
            </div>

            {/* Quarters */}
            <div className="grid sm:grid-cols-2 gap-4">
              {year.quarters.map((q, qi) => (
                <div key={qi} className={`rounded-2xl border p-5 ${card}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`font-bold text-sm ${text}`}>{q.period}</h4>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: year.color }}
                    >
                      Q{qi + 1 + (years.indexOf(year) * 4)}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-blue-50 border-blue-100'}`}>
                      <div className={`text-xs font-bold mb-1`} style={{ color: year.color }}>🎯 Primary Skill</div>
                      <div className={`text-sm font-semibold ${text}`}>{q.primarySkill}</div>
                    </div>

                    <div className={`p-3 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-gray-50 border-gray-100'}`}>
                      <div className={`text-xs font-bold mb-1 ${textSub}`}>📚 Secondary Skill</div>
                      <div className={`text-sm ${textMed}`}>{q.secondarySkill}</div>
                    </div>

                    <div className={`p-3 rounded-xl border ${darkMode ? 'bg-orange-900/20 border-orange-800/40' : 'bg-orange-50 border-orange-100'}`}>
                      <div className={`text-xs font-bold mb-1 ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>📖 Read This Book</div>
                      <div className={`text-sm ${textMed}`}>{q.book}</div>
                    </div>

                    <div className={`p-3 rounded-xl border ${darkMode ? 'bg-purple-900/20 border-purple-800/40' : 'bg-purple-50 border-purple-100'}`}>
                      <div className={`text-xs font-bold mb-1 ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>🏗️ Build This Project</div>
                      <div className={`text-sm ${textMed}`}>{q.project}</div>
                    </div>

                    <div className={`p-3 rounded-xl border ${darkMode ? 'bg-green-900/20 border-green-800/40' : 'bg-green-50 border-green-100'}`}>
                      <div className={`text-xs font-bold mb-1 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>✅ Milestone Achieved When</div>
                      <div className={`text-sm ${textMed}`}>{q.metric}</div>
                    </div>

                    <div className={`p-3 rounded-xl border ${darkMode ? 'bg-pink-900/20 border-pink-800/40' : 'bg-pink-50 border-pink-100'}`}>
                      <div className={`text-xs font-bold mb-1 ${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>🧠 Soft Skill Focus</div>
                      <div className={`text-sm ${textMed}`}>{q.softSkill}</div>
                    </div>

                    <div>
                      <div className={`text-xs font-bold mb-2 ${textSub}`}>📋 Action Items</div>
                      <div className="space-y-1">
                        {q.tasks.map((task, ti) => (
                          <div key={ti} className={`flex items-start gap-2 text-xs ${textMed}`}>
                            <span style={{ color: year.color }}>▸</span>
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Summary Stats */}
        <div className={`rounded-2xl border p-6 ${card}`}>
          <h3 className={`text-xl font-bold mb-6 text-center ${text}`}>📊 3-Year Journey Summary</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '36', label: 'Months of Learning', icon: '📅' },
              { value: '12', label: 'Quarterly Milestones', icon: '🎯' },
              { value: '13+', label: 'Portfolio Projects', icon: '💼' },
              { value: 'Top 10%', label: 'Target Salary Percentile', icon: '💰' },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`text-center p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-gray-50 border-gray-100'}`}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className={`text-2xl font-black ${text}`}>{stat.value}</div>
                <div className={`text-xs ${textSub}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
