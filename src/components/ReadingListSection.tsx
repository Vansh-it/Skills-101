import { useState } from 'react';

interface Props { darkMode: boolean; }

const books = [
  // Hard Skills
  { title: "Financial Modeling", author: "Simon Benninga", year: 2014, category: "Hard Skills — Modeling", rating: 5, difficulty: "Intermediate", free: false, summary: "The gold standard textbook for Excel-based financial modeling. Essential for every finance professional.", icon: "📊", color: "#2563EB" },
  { title: "Investment Banking: Valuation, LBOs, M&A", author: "Rosenbaum & Pearl", year: 2013, category: "Hard Skills — Modeling", rating: 5, difficulty: "Intermediate", free: false, summary: "The Wall Street bible for valuation and deal structuring. Used in analyst training at all bulge brackets.", icon: "🏦", color: "#2563EB" },
  { title: "Valuation: Measuring and Managing Value of Companies", author: "McKinsey & Company", year: 2020, category: "Hard Skills — Modeling", rating: 5, difficulty: "Advanced", free: false, summary: "The definitive corporate valuation guide by McKinsey. Covers WACC, capital structure, and M&A value creation.", icon: "📉", color: "#2563EB" },
  { title: "Damodaran on Valuation", author: "Aswath Damodaran", year: 2006, category: "Hard Skills — Modeling", rating: 5, difficulty: "Advanced", free: false, summary: "The most comprehensive valuation book by the 'Dean of Valuation'. Covers every asset type and scenario.", icon: "🎓", color: "#2563EB" },
  { title: "Python for Finance", author: "Yves Hilpisch", year: 2019, category: "Hard Skills — Python", rating: 5, difficulty: "Intermediate", free: false, summary: "The definitive Python for finance textbook. Covers pandas, algorithmic trading, and AI integration.", icon: "🐍", color: "#16A34A" },
  { title: "Advances in Financial Machine Learning", author: "Marcos López de Prado", year: 2018, category: "Hard Skills — AI/ML", rating: 5, difficulty: "Advanced", free: false, summary: "Research-level ML for finance from AQR Capital. The bible for quant researchers and advanced practitioners.", icon: "🤖", color: "#DC2626" },
  { title: "Machine Learning for Asset Managers", author: "Marcos López de Prado", year: 2020, category: "Hard Skills — AI/ML", rating: 5, difficulty: "Advanced", free: false, summary: "Practical ML applications for portfolio management and asset allocation.", icon: "📊", color: "#DC2626" },
  { title: "Financial Statement Analysis and Security Valuation", author: "Stephen Penman", year: 2013, category: "Hard Skills — FSA", rating: 5, difficulty: "Advanced", free: false, summary: "The most rigorous academic treatment of FSA. Teaches you to see through accounting to find intrinsic value.", icon: "🔍", color: "#7C3AED" },
  { title: "The Financial Numbers Game", author: "Charles Mulford & Eugene Comiskey", year: 2002, category: "Hard Skills — FSA", rating: 5, difficulty: "Intermediate", free: false, summary: "Master class in detecting creative accounting. Every trick management uses is exposed in detail.", icon: "🎭", color: "#7C3AED" },
  { title: "Quality of Earnings", author: "Thornton O'Glove", year: 1987, category: "Hard Skills — FSA", rating: 5, difficulty: "Intermediate", free: false, summary: "The classic text on separating real earnings from accounting artifacts. Still the best book on this topic.", icon: "💡", color: "#7C3AED" },
  { title: "The Definitive Guide to DAX", author: "Marco Russo & Alberto Ferrari", year: 2019, category: "Hard Skills — Power BI", rating: 5, difficulty: "Advanced", free: false, summary: "The complete reference for DAX language in Power BI. Essential for any serious Power BI practitioner.", icon: "📈", color: "#D97706" },
  { title: "Case In Point", author: "Marc Cosentino", year: 2020, category: "Hard Skills — Consulting", rating: 4, difficulty: "Beginner", free: false, summary: "The classic case interview prep guide covering all major consulting frameworks and 40+ practice cases.", icon: "🏛️", color: "#991B1B" },
  { title: "The McKinsey Way", author: "Ethan Rasiel", year: 1999, category: "Hard Skills — Consulting", rating: 4, difficulty: "Beginner", free: false, summary: "Inside view of McKinsey's problem-solving approach. Essential reading for aspiring consultants and strategists.", icon: "🎯", color: "#991B1B" },
  // Soft Skills / Mental Models
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, category: "Mental Models & Thinking", rating: 5, difficulty: "Intermediate", free: false, summary: "The most important book on human decision-making. Every finance professional must read this to understand their own biases.", icon: "🧠", color: "#7C3AED" },
  { title: "Poor Charlie's Almanack", author: "Charlie Munger", year: 2005, category: "Mental Models & Thinking", rating: 5, difficulty: "Intermediate", free: false, summary: "Charlie Munger's collected wisdom on mental models, rationality, and business. A lifetime of insight in one book.", icon: "🦉", color: "#92400E" },
  { title: "The Pyramid Principle", author: "Barbara Minto", year: 1987, category: "Soft Skills — Communication", rating: 5, difficulty: "Intermediate", free: false, summary: "The definitive guide to structured communication used by every McKinsey consultant. The SCQA framework explained.", icon: "🔺", color: "#0891B2" },
  { title: "Never Split the Difference", author: "Chris Voss", year: 2016, category: "Soft Skills — Negotiation", rating: 5, difficulty: "Beginner", free: false, summary: "FBI negotiation techniques applied to business. The most practical negotiation book ever written.", icon: "🤝", color: "#0F766E" },
  { title: "Pitch Anything", author: "Oren Klaff", year: 2011, category: "Soft Skills — Presentation", rating: 5, difficulty: "Beginner", free: false, summary: "Neuroeconomics-based framework for pitching investment ideas and business proposals. Game-changing for finance professionals.", icon: "🎤", color: "#16A34A" },
  { title: "Grit", author: "Angela Duckworth", year: 2016, category: "Soft Skills — Mindset", rating: 4, difficulty: "Beginner", free: false, summary: "The science of perseverance and passion. Essential reading for anyone pursuing mastery in a difficult field.", icon: "💪", color: "#DC2626" },
  { title: "Storytelling with Data", author: "Cole Nussbaumer Knaflic", year: 2015, category: "Soft Skills — Visualization", rating: 5, difficulty: "Beginner", free: false, summary: "The best book on data visualization and communication. Changed how thousands of analysts present data.", icon: "📊", color: "#D97706" },
  { title: "Influence", author: "Robert Cialdini", year: 1984, category: "Soft Skills — Persuasion", rating: 5, difficulty: "Beginner", free: false, summary: "The science of persuasion and influence. Understanding these principles is essential for client-facing finance roles.", icon: "⚡", color: "#7C3AED" },
  // Finance Classics
  { title: "Security Analysis", author: "Benjamin Graham & David Dodd", year: 1934, category: "Finance Classics", rating: 5, difficulty: "Advanced", free: false, summary: "The foundational text of value investing. Graham and Dodd defined financial statement analysis and security valuation.", icon: "📜", color: "#1E40AF" },
  { title: "The Intelligent Investor", author: "Benjamin Graham", year: 1949, category: "Finance Classics", rating: 5, difficulty: "Beginner", free: true, summary: "Graham's masterwork on investment philosophy. Warren Buffett calls it 'the best book ever written on investing.'", icon: "💎", color: "#1E40AF" },
  { title: "A Random Walk Down Wall Street", author: "Burton Malkiel", year: 1973, category: "Finance Classics", rating: 4, difficulty: "Beginner", free: false, summary: "The definitive argument for index investing. Essential for understanding market efficiency and its limits.", icon: "🚶", color: "#1E40AF" },
  { title: "One Up On Wall Street", author: "Peter Lynch", year: 1989, category: "Finance Classics", rating: 4, difficulty: "Beginner", free: false, summary: "Peter Lynch's practical framework for finding winning stocks from everyday observations. Timeless and readable.", icon: "🦶", color: "#1E40AF" },
  // Biographies
  { title: "The Snowball: Warren Buffett and the Business of Life", author: "Alice Schroeder", year: 2008, category: "Finance Biographies", rating: 5, difficulty: "Beginner", free: false, summary: "The definitive Buffett biography. Shows the habits, mental models, and work ethic behind the world's greatest investor.", icon: "⛄", color: "#92400E" },
  { title: "Liar's Poker", author: "Michael Lewis", year: 1989, category: "Finance Biographies", rating: 5, difficulty: "Beginner", free: false, summary: "Michael Lewis's debut — his experience as a Salomon Brothers bond trader. The most readable Wall Street memoir.", icon: "🎲", color: "#92400E" },
  { title: "Too Big to Fail", author: "Andrew Ross Sorkin", year: 2009, category: "Finance Biographies", rating: 5, difficulty: "Intermediate", free: false, summary: "The definitive account of the 2008 financial crisis. Inside story of the decisions that shaped the global economy.", icon: "🏛️", color: "#92400E" },
  // India Specific
  { title: "Bulls, Bears and Other Beasts", author: "Santosh Nair", year: 2016, category: "India Finance", rating: 4, difficulty: "Beginner", free: false, summary: "The history of India's stock market from 1992 onwards. Essential context for Indian finance professionals.", icon: "🇮🇳", color: "#FF6B35" },
  { title: "The Scam", author: "Sucheta Dalal & Debashish Basu", year: 1992, category: "India Finance", rating: 5, difficulty: "Beginner", free: false, summary: "The original investigative account of Harshad Mehta's scam. Foundational reading for understanding Indian market history.", icon: "📰", color: "#FF6B35" },
  // AI & Future
  { title: "AI and Finance", author: "Yves Hilpisch", year: 2020, category: "AI & Future Finance", rating: 4, difficulty: "Intermediate", free: false, summary: "Practical AI applications in trading, risk management, and portfolio management. Forward-looking and practical.", icon: "🤖", color: "#DC2626" },
  { title: "The Second Machine Age", author: "Brynjolfsson & McAfee", year: 2014, category: "AI & Future Finance", rating: 4, difficulty: "Beginner", free: false, summary: "How digital technology is transforming the economy. Essential context for understanding AI's impact on finance.", icon: "⚙️", color: "#DC2626" },
];

const categories = [...new Set(books.map(b => b.category))];

export default function ReadingListSection({ darkMode }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQ, setSearchQ] = useState('');

  const filtered = books.filter(b => {
    const matchesCat = activeCategory === 'All' || b.category === activeCategory;
    const matchesSearch = !searchQ || b.title.toLowerCase().includes(searchQ.toLowerCase()) || b.author.toLowerCase().includes(searchQ.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const text = darkMode ? 'text-white' : 'text-gray-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-gray-500';
  const textMed = darkMode ? 'text-slate-300' : 'text-gray-600';
  const card = darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-gray-200';

  return (
    <section className={`min-h-screen ${darkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-black mb-2 ${text}`}>
            📚 Essential Finance Reading List
          </h2>
          <p className={`text-lg ${textSub}`}>
            {books.length}+ curated books across all finance disciplines — 2026 Edition
          </p>
        </div>

        {/* Search */}
        <div className={`flex items-center gap-3 p-4 rounded-2xl border mb-6 ${card}`}>
          <svg className={`w-5 h-5 ${textSub}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            value={searchQ}
            onChange={e => setSearchQ(e.target.value)}
            placeholder="Search books by title or author..."
            className={`flex-1 bg-transparent outline-none text-sm ${text} placeholder:${textSub}`}
          />
          {searchQ && (
            <button onClick={() => setSearchQ('')} className={`text-xs ${textSub} hover:${text}`}>Clear</button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : darkMode
                  ? 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-slate-500'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
              }`}
            >
              {cat} {cat === 'All' ? `(${books.length})` : `(${books.filter(b => b.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* Books Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((book, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-5 transition-all hover:shadow-lg hover:scale-[1.01] ${card}`}
              style={{ borderColor: `${book.color}20` }}
            >
              {/* Book Icon + Category */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${book.color}15` }}
                >
                  {book.icon}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end mb-1">
                    {[...Array(book.rating)].map((_, ri) => (
                      <span key={ri} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                  {book.free && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-bold">FREE</span>
                  )}
                </div>
              </div>

              {/* Title + Author */}
              <h4 className={`font-bold text-sm mb-1 leading-tight ${text}`}>{book.title}</h4>
              <div className={`text-xs mb-1 ${textSub}`}>{book.author} • {book.year}</div>

              {/* Category badge */}
              <span
                className="inline-block text-xs px-2 py-0.5 rounded-full font-semibold mb-3"
                style={{ backgroundColor: `${book.color}15`, color: book.color }}
              >
                {book.category}
              </span>

              {/* Summary */}
              <p className={`text-xs leading-relaxed mb-3 ${textMed}`}>{book.summary}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'}`}>
                  {book.difficulty}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: book.color }}
                >
                  📖 {book.free ? 'Available Free' : 'Amazon India'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={`text-center py-12 ${textSub}`}>
            <div className="text-4xl mb-3">📚</div>
            <p>No books match your search. Try a different term.</p>
          </div>
        )}

        {/* Reading Strategy */}
        <div className={`mt-10 rounded-2xl border p-6 ${card}`}>
          <h3 className={`text-xl font-bold mb-4 ${text}`}>📖 Reading Strategy for Finance Mastery</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                phase: 'Year 1: Foundation Books',
                color: '#2563EB',
                books: ['The Intelligent Investor', 'Financial Modeling (Benninga)', 'Thinking, Fast and Slow', 'Case In Point', 'The McKinsey Way']
              },
              {
                phase: 'Year 2: Professional Books',
                color: '#16A34A',
                books: ['Investment Banking (Rosenbaum)', 'Python for Finance', 'Financial Statement Analysis (Penman)', 'Never Split the Difference', 'Storytelling with Data']
              },
              {
                phase: 'Year 3: Elite Books',
                color: '#DC2626',
                books: ["Advances in Financial ML (López de Prado)", 'Poor Charlie\'s Almanack', 'Valuation (McKinsey)', 'Security Analysis', 'The Pyramid Principle']
              }
            ].map((phase) => (
              <div
                key={phase.phase}
                className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-gray-50 border-gray-100'}`}
              >
                <h4 className="font-bold text-sm mb-3" style={{ color: phase.color }}>{phase.phase}</h4>
                <div className="space-y-1">
                  {phase.books.map((b, bi) => (
                    <div key={bi} className={`text-xs flex items-start gap-1.5 ${textMed}`}>
                      <span style={{ color: phase.color }}>▸</span> {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
