interface Props { darkMode: boolean; }

export default function PastPresentSection({ darkMode }: Props) {
  const text = darkMode ? 'text-white' : 'text-gray-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-gray-500';
  const textMed = darkMode ? 'text-slate-300' : 'text-gray-600';
  const card = darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-gray-200';

  const comparisons = [
    {
      skill: 'Financial Modeling',
      icon: '📊',
      color: '#2563EB',
      timelines: [
        { year: '2010', title: 'Manual Everything', desc: 'Static Excel models built manually, data entered by hand, simple linear projections, no cloud collaboration, models rarely exceed 3-5 years of history.' },
        { year: '2015', title: 'Templates Emerge', desc: 'Model templates proliferate on Wall Street training platforms. Excel macros automate formatting. Comps databases emerge. Analyst training programs standardize methodology.' },
        { year: '2020', title: 'Cloud + Python', desc: 'Google Sheets cloud collaboration, Python begins appearing alongside Excel, API-linked real-time data, dynamic arrays transform Excel capability, first AI writing assistance.' },
        { year: '2026', title: 'AI Co-Pilot Era', desc: 'AI writes first drafts of 3-statement models in 60 seconds, humans add judgment and validate. Real-time data connections standard. LLMs interpret model outputs automatically.' },
        { year: '2030 (Projected)', title: 'Fully Augmented', desc: 'AI handles all mechanical modeling. Human value is entirely in assumption quality, client relationships, and strategic interpretation. Model-building skill becomes model-auditing skill.' },
      ],
      implications: 'Master the WHY behind every model line. Learn to evaluate AI-generated models, not just build manual ones. Python proficiency is now table stakes.'
    },
    {
      skill: 'Python for Finance',
      icon: '🐍',
      color: '#16A34A',
      timelines: [
        { year: '2010', title: 'Niche Quant Tool', desc: 'Python used only by quantitative analysts and PhDs. Finance professionals almost exclusively use Excel. Python ecosystem for finance is underdeveloped.' },
        { year: '2015', title: 'Academic Crossover', desc: 'pandas 0.16 released, making data manipulation practical. Academic finance adopts Python. First finance-focused Python courses appear on Coursera and edX.' },
        { year: '2020', title: 'Professional Adoption', desc: 'Goldman Sachs, JP Morgan announce Python as required skill. Jupyter Notebooks standard for financial analysis. yfinance, QuantLib libraries mature. First job postings require Python.' },
        { year: '2026', title: 'Non-Negotiable Standard', desc: 'Every top-tier finance job description requires Python. Analysts who cannot code face systematic replacement by those who can. AI-augmented Python workflows standard at leading firms.' },
        { year: '2030 (Projected)', title: 'Foundational Literacy', desc: 'Python is as fundamental as Excel was in 2015. Specialization shifts to AI orchestration, system design, and proprietary algorithm development. Basic Python fully automated.' },
      ],
      implications: 'Start Python today — it is no longer optional. Focus on finance-specific libraries (pandas, yfinance, scikit-learn) before general programming concepts.'
    },
    {
      skill: 'Financial Statement Analysis',
      icon: '🔍',
      color: '#7C3AED',
      timelines: [
        { year: '2010', title: 'Manual Reading', desc: 'Physical or PDF annual reports read end-to-end. No screening tools. Ratio calculation in Excel is manual. Indian GAAP creates complexity. Limited comparative benchmarking.' },
        { year: '2015', title: 'Screening Tools Emerge', desc: 'Screener.in launches, revolutionizing Indian stock analysis. Tickertape, Trendlyne emerge. Pre-calculated ratios available free. Comparative analysis across 10 years becomes practical.' },
        { year: '2020', title: 'Data Abundance', desc: 'Bloomberg, Refinitiv data standardized. Ind AS adoption complete for listed companies. SEBI improves disclosure requirements. Screener.in and Trendlyne premium features available at low cost.' },
        { year: '2026', title: 'AI-Augmented FSA', desc: 'AI tools summarize annual reports in seconds. Key risk flags auto-detected. BRSR sustainability reporting mandatory for top 1,000 companies. Human value in interpretation, not extraction.' },
        { year: '2030 (Projected)', title: 'Expert Judgment Premium', desc: 'AI handles all routine ratio calculation and initial flag detection. Premium is on experts who can interpret ambiguous signals, detect novel manipulation techniques, and integrate qualitative context.' },
      ],
      implications: 'Learn to extract signals from data that AI misses — contextual judgment, management credibility assessment, and industry-specific accounting nuances are becoming the core human skill.'
    },
    {
      skill: 'AI & ML for Finance',
      icon: '🤖',
      color: '#DC2626',
      timelines: [
        { year: '2010', title: 'Academic Only', desc: 'ML in finance limited to PhD research and quant hedge funds. Computational cost prohibitive. Limited financial data in digital format. No practical tools for non-programmers.' },
        { year: '2015', title: 'Quant Adoption', desc: 'Deep learning breakthrough. TensorFlow and Scikit-learn mature. Renaissance Technologies and Two Sigma demonstrate ML alpha. First practical courses appear. GPU computing costs drop.' },
        { year: '2020', title: 'Industry Mainstream', desc: 'GPT-3 released. Transformer models demonstrate financial text understanding. Banks begin AI credit scoring pilots. Regulatory frameworks for AI risk emerging. Python ML stack matures.' },
        { year: '2026', title: 'GPT-4 Era / Agentic AI', desc: 'LLMs generate financial analysis, earnings summaries, and model first-drafts. Agentic AI executes multi-step research workflows. RAG systems enable document Q&A. AI governance mandatory in regulated sectors.' },
        { year: '2030 (Projected)', title: 'AI-Native Finance', desc: 'Most routine analytical tasks automated. Differentiation in AI system design, governance, and proprietary data strategy. Human finance professionals are AI orchestrators and judgment providers.' },
      ],
      implications: 'This is the highest-leverage skill investment for 2026–2030. Even basic AI literacy (prompt engineering, RAG, model evaluation) dramatically increases your career optionality and compensation.'
    },
    {
      skill: 'Power BI & Data Storytelling',
      icon: '📈',
      color: '#D97706',
      timelines: [
        { year: '2010', title: 'Excel Charts Only', desc: 'Financial dashboards built entirely in Excel. Static charts emailed as attachments. No self-service analytics. IT controls all reporting. Monthly cycles for data refresh.' },
        { year: '2015', title: 'Power BI Launches', desc: 'Microsoft releases Power BI in 2013, matures by 2015. Tableau adoption in finance accelerates. First self-service analytics tools. Data refresh speeds from monthly to weekly.' },
        { year: '2020', title: 'Cloud Dashboards Standard', desc: 'Power BI Service enables cloud sharing and collaboration. Real-time dashboards become feasible. Mobile-optimized reports. AI-powered Q&A features launch. COVID accelerates remote dashboard adoption.' },
        { year: '2026', title: 'AI-Powered Insights', desc: 'Power BI Copilot generates dashboards from natural language descriptions. Automated insight narratives. Real-time data from multiple APIs standard. Mobile-first executive dashboards the norm.' },
        { year: '2030 (Projected)', title: 'Conversational Analytics', desc: 'Natural language querying standard. AI generates dynamic dashboards on demand. Traditional static reporting largely eliminated. Human value in insight design and stakeholder communication.' },
      ],
      implications: 'Power BI is the fastest way to get visibility in any organization. A 40-hour investment in Power BI skills pays dividends immediately — executive dashboards get noticed and appreciated.'
    },
    {
      skill: 'Consulting Case Frameworks',
      icon: '🏛️',
      color: '#991B1B',
      timelines: [
        { year: '2010', title: 'Consulting-Only Skill', desc: 'Case interview preparation limited to consulting candidates. Frameworks used almost exclusively in consulting firms. Limited resources — only Case In Point and Victor Cheng content available.' },
        { year: '2015', title: 'PE/IB Adoption', desc: 'Private equity firms adopt consulting frameworks for deal screening. Strategy roles at corporates begin requiring case skills. PrepLounge launches. More democratized preparation resources.' },
        { year: '2020', title: 'Universal Strategy Language', desc: 'All strategy roles now expect consulting frameworks. MBA programs standardize on MECE, hypothesis-driven thinking. Virtual case interviews become common. Automated case practice platforms emerge.' },
        { year: '2026', title: 'AI-Augmented Case Solving', desc: 'AI platforms provide real-time case practice with feedback. Data-driven cases become standard — candidates analyze actual datasets in interviews. ESG and digital transformation standard framework areas.' },
        { year: '2030 (Projected)', title: 'Integration with AI Systems', desc: 'Cases involve designing AI solutions for business problems. Strategic judgment on AI deployment becomes a core interview competency. Frameworks evolve to include AI transformation dimensions.' },
      ],
      implications: 'Consulting frameworks are no longer optional for serious finance career advancement. Even non-consulting roles at PE, corporate strategy, and senior banking now expect structured problem-solving.'
    }
  ];

  return (
    <section className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-black mb-2 ${text}`}>
            🕐 Past vs Present vs Future
          </h2>
          <p className={`text-lg ${textSub}`}>
            How each finance skill has evolved and where it's heading 2026–2030
          </p>
        </div>

        <div className="space-y-8">
          {comparisons.map((comp) => (
            <div key={comp.skill} className={`rounded-2xl border overflow-hidden ${card}`} style={{ borderColor: `${comp.color}20` }}>
              {/* Header */}
              <div className="p-5 border-b flex items-center gap-3" style={{ borderColor: `${comp.color}20`, backgroundColor: `${comp.color}08` }}>
                <span className="text-3xl">{comp.icon}</span>
                <div>
                  <h3 className={`text-xl font-black ${text}`}>{comp.skill}</h3>
                  <p className={`text-xs font-semibold mt-0.5`} style={{ color: comp.color }}>Evolution Timeline: 2010 → 2030</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-5">
                <div className="grid sm:grid-cols-5 gap-3 mb-5">
                  {comp.timelines.map((t, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl border relative ${
                        t.year.includes('2030') ? darkMode ? 'border-dashed border-slate-600' : 'border-dashed border-gray-300' :
                        t.year === '2026' ? '' :
                        darkMode ? 'border-slate-700/50' : 'border-gray-100'
                      }`}
                      style={t.year === '2026' ? { borderColor: `${comp.color}40`, backgroundColor: `${comp.color}08` } : {}}
                    >
                      {t.year === '2026' && (
                        <div
                          className="absolute -top-2 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: comp.color }}
                        >
                          NOW
                        </div>
                      )}
                      {t.year.includes('2030') && (
                        <div className={`absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-bold px-2 py-0.5 rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'}`}>
                          FUTURE
                        </div>
                      )}
                      <div className="font-black text-xs mb-1 mt-1" style={{ color: comp.color }}>{t.year}</div>
                      <div className={`font-bold text-xs mb-1.5 ${text}`}>{t.title}</div>
                      <p className={`text-xs leading-relaxed ${textMed}`}>{t.desc}</p>
                    </div>
                  ))}
                </div>

                {/* What This Means */}
                <div className={`p-3 rounded-xl border ${darkMode ? 'bg-amber-900/20 border-amber-700/40' : 'bg-amber-50 border-amber-200'}`}>
                  <span className={`text-xs font-bold ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>⚡ What This Means For YOU: </span>
                  <span className={`text-xs ${darkMode ? 'text-amber-200' : 'text-amber-900'}`}>{comp.implications}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Macro View */}
        <div className={`mt-10 rounded-2xl border p-6 ${card}`}>
          <h3 className={`text-xl font-bold mb-6 ${text}`}>🌐 The Big Picture: Finance in 2026–2030</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className={`font-bold mb-3 ${text}`}>⬆️ Skills Becoming MORE Valuable</h4>
              <div className="space-y-2">
                {[
                  'AI/ML model evaluation and governance',
                  'Strategic judgment and contextual interpretation',
                  'Cross-disciplinary synthesis (finance + tech + regulatory)',
                  'Stakeholder communication and persuasion',
                  'Proprietary data sourcing and alternative data analysis',
                  'Human relationship building and trust creation',
                  'Ethical AI deployment and model risk management',
                  'Sector-specific deep expertise + AI tooling combination',
                ].map((s, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${textMed}`}>
                    <span className="text-green-400">↑</span> {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`font-bold mb-3 ${text}`}>⬇️ Skills Becoming LESS Valuable (Automated)</h4>
              <div className="space-y-2">
                {[
                  'Manual data entry and formatting',
                  'Basic ratio calculation and report generation',
                  'Template-based financial modeling',
                  'Routine document summarization',
                  'Standard compliance checking',
                  'Basic market data aggregation',
                  'Formulaic news analysis',
                  'Standard template presentation creation',
                ].map((s, i) => (
                  <div key={i} className={`flex items-center gap-2 text-sm ${textMed}`}>
                    <span className="text-red-400">↓</span> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
