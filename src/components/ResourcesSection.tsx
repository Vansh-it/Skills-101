interface Props { darkMode: boolean; }

export default function ResourcesSection({ darkMode }: Props) {
  const text = darkMode ? 'text-white' : 'text-gray-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-gray-500';
  const textMed = darkMode ? 'text-slate-300' : 'text-gray-600';
  const card = darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-gray-200';
  const cardInner = darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-gray-50 border-gray-100';

  const categories = [
    {
      title: 'Free Learning Platforms',
      icon: '🆓',
      color: '#16A34A',
      resources: [
        { name: "Aswath Damodaran's Website", url: "pages.stern.nyu.edu/~adamodar", desc: "The world's best free valuation resource. All lectures, datasets, and models free forever.", tags: ["Valuation", "Financial Modeling", "Finance"] },
        { name: "Coursera (Audit Mode)", url: "coursera.org", desc: "Audit 95% of courses free. Financial analysis, Python, and data science courses from top universities.", tags: ["All Skills", "Certificates"] },
        { name: "Khan Academy Finance", url: "khanacademy.org/economics-finance-domain", desc: "Best free introduction to financial concepts from first principles. Brilliant for building intuition.", tags: ["Foundation", "Basics"] },
        { name: "fast.ai", url: "fast.ai", desc: "World's best free practical deep learning course. Top-down approach, directly applicable to financial ML.", tags: ["AI/ML", "Python"] },
        { name: "edX (Audit Mode)", url: "edx.org", desc: "MIT, Harvard, Berkeley courses on finance, statistics, and Python — most auditable for free.", tags: ["All Skills"] },
        { name: "Google Machine Learning Crash Course", url: "developers.google.com/machine-learning", desc: "Google's free ML course — practical, well-structured, and directly applicable to financial use cases.", tags: ["AI/ML"] },
        { name: "Microsoft Learn (Power BI)", url: "learn.microsoft.com", desc: "Official free Microsoft training for Power BI, Excel, and Azure — the definitive reference.", tags: ["Power BI", "Excel"] },
        { name: "CFI Free Courses", url: "corporatefinanceinstitute.com", desc: "Several foundational finance courses free. Excellent for financial modeling and FSA basics.", tags: ["Financial Modeling", "FSA"] },
      ]
    },
    {
      title: 'Indian Finance Platforms',
      icon: '🇮🇳',
      color: '#FF6B35',
      resources: [
        { name: "Screener.in", url: "screener.in", desc: "The best platform for Indian stock FSA. 10 years of data, custom screens, ratio analysis. Free + ₹1,950/yr premium.", tags: ["FSA", "Indian Markets"] },
        { name: "Tickertape", url: "tickertape.in", desc: "Visual analytics for Indian stocks with ESG scoring, peer comparison, and portfolio analysis.", tags: ["Indian Markets", "FSA"] },
        { name: "Trendlyne", url: "trendlyne.com", desc: "Advanced screener and analytics for NSE/BSE stocks. Includes promoter pledging and FII/DII tracking.", tags: ["Indian Markets"] },
        { name: "NSE India", url: "nseindia.com", desc: "Official NSE portal — all historical data, corporate filings, derivatives data. Free and authoritative.", tags: ["Data", "Indian Markets"] },
        { name: "BSE India", url: "bseindia.com", desc: "Official BSE portal — annual reports, SEBI filings, AGM notices, financial results all available free.", tags: ["Data", "Indian Markets"] },
        { name: "SEBI Website", url: "sebi.gov.in", desc: "All SEBI circulars, regulations, and guidelines. Essential for regulatory compliance awareness.", tags: ["Regulatory", "Compliance"] },
        { name: "RBI Publications", url: "rbi.org.in", desc: "Monetary policy reports, annual reports, financial stability reports — free and comprehensive.", tags: ["Macro", "Banking"] },
        { name: "Capitalmind Premium", url: "capitalmind.in", desc: "Deepak Shenoy's investment research and financial data — one of India's best independent finance platforms.", tags: ["Indian Markets", "Research"] },
      ]
    },
    {
      title: 'YouTube Channels',
      icon: '▶️',
      color: '#DC2626',
      resources: [
        { name: "Aswath Damodaran (NYU Stern)", url: "youtube.com/user/damodaranonline", desc: "The Professor's full lecture series on valuation and corporate finance. The best free finance education on YouTube.", tags: ["Valuation", "DCF"] },
        { name: "Excel Campus (Jon Acampora)", url: "youtube.com/excelmouse", desc: "Best free Excel tutorials for finance professionals. Power Query, VBA, and advanced formula videos.", tags: ["Excel"] },
        { name: "SQLBI (Marco Russo)", url: "youtube.com/sqlbi", desc: "The world's best free DAX and Power BI education from the authors of the definitive DAX book.", tags: ["Power BI", "DAX"] },
        { name: "Sentdex", url: "youtube.com/sentdex", desc: "Python for data science and finance — algorithmic trading, ML models, and financial data analysis.", tags: ["Python", "AI/ML"] },
        { name: "Breaking Into Wall Street", url: "youtube.com/breakingintowallstreet", desc: "IB analyst-level financial modeling tutorials. DCF, LBO, merger models from Wall Street practitioners.", tags: ["Financial Modeling", "IB"] },
        { name: "The Plain Bagel", url: "youtube.com/theplainbagel", desc: "Clear, unbiased financial education covering investing concepts, personal finance, and market mechanics.", tags: ["Finance Basics"] },
        { name: "Victor Cheng CaseInterview", url: "youtube.com/victorcaseconsulting", desc: "Victor Cheng's framework videos — essential for case interview preparation.", tags: ["Consulting"] },
        { name: "3Blue1Brown", url: "youtube.com/3blue1brown", desc: "Beautiful mathematical explanations including statistics and linear algebra underlying financial models.", tags: ["Math", "AI/ML"] },
      ]
    },
    {
      title: 'Podcasts',
      icon: '🎙️',
      color: '#7C3AED',
      resources: [
        { name: "Odd Lots (Bloomberg)", url: "bloomberg.com/oddlots", desc: "Joe Weisenthal and Tracy Alloway discuss market mechanics, economics, and finance in depth.", tags: ["Macro", "Markets"] },
        { name: "The Acquired Podcast", url: "acquired.fm", desc: "Multi-hour deep dives into the history and strategy of the world's greatest businesses. Essential for commercial awareness.", tags: ["Business Strategy", "Commercial Awareness"] },
        { name: "We Study Billionaires (TIP)", url: "theinvestorspodcast.com", desc: "Deep analysis of Warren Buffett, Charlie Munger, and other legendary investors. Mental models-focused.", tags: ["Investing", "Mental Models"] },
        { name: "The Ken India", url: "the-ken.com/podcast", desc: "The best Indian business journalism podcast. In-depth stories on Indian companies and markets.", tags: ["India", "Commercial Awareness"] },
        { name: "Bloomberg Surveillance", url: "bloomberg.com/surveillance", desc: "Daily macro and markets discussion with leading economists and investors. Builds commercial awareness rapidly.", tags: ["Macro", "Markets"] },
        { name: "Patrick O'Shaughnessy Invest Like the Best", url: "joincolossus.com", desc: "Conversations with investment legends, founders, and capital allocators. Essential for investment mindset.", tags: ["Investing", "Mindset"] },
      ]
    },
    {
      title: 'Communities & Networks',
      icon: '🤝',
      color: '#0F766E',
      resources: [
        { name: "CFA India Society", url: "cfainstitute.org/en/membership/societies/india", desc: "The most important professional network for Indian finance professionals. Events, mentoring, CPE credits.", tags: ["Networking", "Certification"] },
        { name: "r/IndiaInvestments", url: "reddit.com/r/IndiaInvestments", desc: "High-quality Indian investment community on Reddit. Screener-level discussions on Indian stocks.", tags: ["Indian Markets", "Community"] },
        { name: "r/SecurityAnalysis", url: "reddit.com/r/SecurityAnalysis", desc: "Investment research and discussion. Links to research papers, valuation discussions, and thesis deep dives.", tags: ["Research", "Investing"] },
        { name: "r/quant", url: "reddit.com/r/quant", desc: "Quantitative finance community. ML models, algorithmic trading, and quant research discussions.", tags: ["Quant", "AI/ML"] },
        { name: "LinkedIn Finance Groups", url: "linkedin.com", desc: "CFA Members Group, Financial Modeling Professionals, Private Equity Network India — all high-signal groups.", tags: ["Networking"] },
        { name: "PrepLounge", url: "preplounge.com", desc: "Largest global community for case interview practice. Find practice partners for MBB case preparation.", tags: ["Consulting", "Case Prep"] },
        { name: "QuantLib Community", url: "quantlib.org", desc: "Open-source derivatives pricing library community. Essential for fixed income and derivatives professionals.", tags: ["Quant", "Python"] },
        { name: "Hugging Face Finance", url: "huggingface.co", desc: "FinBERT and other financial NLP models. Community of AI practitioners applying LLMs to finance.", tags: ["AI/ML", "NLP"] },
      ]
    },
    {
      title: 'Certifications',
      icon: '📜',
      color: '#D97706',
      resources: [
        { name: "CFA (Chartered Financial Analyst)", url: "cfainstitute.org", desc: "Gold standard finance certification globally. 3 levels, ~900 hours total. Investment analysis, portfolio management, ethics.", tags: ["Investing", "Career", "₹30,000-60,000/level"] },
        { name: "FRM (Financial Risk Manager)", url: "garp.org", desc: "Global risk management certification. 2 parts. Essential for risk roles at banks and asset managers.", tags: ["Risk", "Banking", "₹20,000-40,000"] },
        { name: "FMVA (Corporate Finance Institute)", url: "corporatefinanceinstitute.com", desc: "Financial Modeling & Valuation Analyst. Practical certification with real modeling projects.", tags: ["Financial Modeling", "₹25,000-35,000"] },
        { name: "NISM Certifications", url: "nism.ac.in", desc: "Mandatory for most regulated activities in Indian capital markets (SEBI requirement). Multiple modules available.", tags: ["India", "Regulatory", "₹2,000-5,000"] },
        { name: "Google Data Analytics Certificate", url: "coursera.org/professional-certificates/google-data-analytics", desc: "Google's professional data analytics certification. Strong foundation for finance data analysis.", tags: ["Data", "Python", "₹3,000-5,000"] },
        { name: "Microsoft PL-300 (Power BI)", url: "learn.microsoft.com", desc: "Official Microsoft Power BI Data Analyst certification. Validates professional Power BI skills.", tags: ["Power BI", "₹8,000-12,000"] },
        { name: "CA (Chartered Accountant) - ICAI", url: "icai.org", desc: "India's premier accounting qualification. Essential for Big 4 audit, tax, and advisory roles. 3 levels.", tags: ["Accounting", "India", "Career"] },
        { name: "CMA (Cost & Management Accountant)", url: "icmai.in", desc: "ICMAI's CMA certification. Strong for management accounting and costing roles in Indian industry.", tags: ["Accounting", "India"] },
      ]
    },
  ];

  return (
    <section className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-black mb-2 ${text}`}>
            🛠️ Resource Hub
          </h2>
          <p className={`text-lg ${textSub}`}>
            Curated platforms, tools, communities, and certifications for every finance skill
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.title} className={`rounded-2xl border overflow-hidden ${card}`} style={{ borderColor: `${cat.color}20` }}>
              {/* Category Header */}
              <div className="p-5 border-b flex items-center gap-3" style={{ borderColor: `${cat.color}20`, backgroundColor: `${cat.color}08` }}>
                <span className="text-2xl">{cat.icon}</span>
                <h3 className={`text-lg font-bold ${text}`}>{cat.title}</h3>
                <span className={`ml-auto text-xs px-2 py-1 rounded-full font-semibold`} style={{ backgroundColor: `${cat.color}20`, color: cat.color }}>
                  {cat.resources.length} resources
                </span>
              </div>

              {/* Resources Grid */}
              <div className="p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {cat.resources.map((r, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${cardInner}`}>
                    <h4 className={`font-bold text-sm mb-1 ${text}`}>{r.name}</h4>
                    <div className={`text-xs ${textSub} mb-2 font-mono`}>{r.url}</div>
                    <p className={`text-xs leading-relaxed mb-3 ${textMed}`}>{r.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {r.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="text-xs px-1.5 py-0.5 rounded-md font-semibold"
                          style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* India-Specific Salary Guide */}
        <div className={`mt-10 rounded-2xl border p-6 ${card}`}>
          <h3 className={`text-xl font-bold mb-6 ${text}`}>💰 India Finance Salary Guide 2026</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {['Role', 'Experience', 'Top Firms (₹ LPA)', 'Mid-Tier (₹ LPA)', 'Skills Required'].map(h => (
                    <th key={h} className={`text-left p-3 text-xs font-bold ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-700'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Financial Analyst (IB)', '0-2 years', '15-28 LPA', '8-15 LPA', 'Excel, Financial Modeling, DCF'],
                  ['IB Associate', '3-5 years', '35-60 LPA', '20-35 LPA', 'Modeling, Client Skills, Deal Experience'],
                  ['PE Analyst', '2-4 years', '30-60 LPA + carry', '20-35 LPA', 'LBO Modeling, Due Diligence, Python'],
                  ['Equity Research Analyst', '1-3 years', '12-25 LPA', '8-15 LPA', 'FSA, Sector Knowledge, Writing'],
                  ['Data Scientist (Finance)', '2-5 years', '25-60 LPA', '15-30 LPA', 'Python, ML, SQL, Financial Domain'],
                  ['Quant Analyst', '2-6 years', '40-100 LPA', '25-50 LPA', 'Python, ML, Statistics, C++'],
                  ['Management Consultant', '0-2 years', '20-40 LPA', '12-20 LPA', 'Case Frameworks, Communication, Excel'],
                  ['FP&A Manager', '5-8 years', '25-50 LPA', '15-25 LPA', 'Excel, Power BI, Financial Modeling'],
                  ['Risk Manager', '4-8 years', '25-50 LPA', '15-28 LPA', 'Python, Statistics, Regulatory Knowledge'],
                  ['CFO (mid-size firm)', '15+ years', '60-200 LPA', '40-80 LPA', 'All Finance Skills + Leadership'],
                ].map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? darkMode ? 'bg-slate-900/30' : 'bg-gray-50/50' : ''}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={`p-3 text-xs ${ci === 2 ? 'text-green-400 font-bold' : textMed} ${ci === 3 ? darkMode ? 'text-slate-400' : 'text-gray-500' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={`text-xs mt-3 ${textSub}`}>* Salary ranges are indicative for 2026. Actual compensation varies significantly by firm, city, performance, and market conditions. All figures in ₹ LPA (Lakhs Per Annum). Bonus and carried interest not included.</p>
        </div>
      </div>
    </section>
  );
}
