import { useState } from 'react';

interface Props {
  darkMode: boolean;
  skillName: string;
  skillColor: string;
}

const quizzes: Record<string, { question: string; options: string[]; correct: number; explanation: string }[]> = {
  'financial-modeling': [
    { question: "In a 3-statement model, where does Net Income link to on the Balance Sheet?", options: ["Total Assets", "Retained Earnings", "Long-term Debt", "Revenue Reserves"], correct: 1, explanation: "Net Income flows to Retained Earnings on the Balance Sheet, completing the IS → BS linkage." },
    { question: "What does WACC stand for and what is it used for in a DCF?", options: ["Weighted Average Capital Cost — used for capex", "Weighted Average Cost of Capital — the discount rate", "Working Average Cost Calculation", "Weighted Annual Capital Charge"], correct: 1, explanation: "WACC is the blended cost of all capital (debt + equity) and serves as the discount rate in DCF analysis." },
    { question: "Which of the following is the MOST reliable measure of earnings quality?", options: ["Net Income Growth", "EPS Growth", "CFO / Net Income Ratio", "EBITDA Margin"], correct: 2, explanation: "The CFO/NI ratio (cash flow quality ratio) measures how much of reported profits are backed by actual cash. Below 0.8 consistently signals earnings manipulation." },
    { question: "In an LBO model, what is the primary return metric for PE investors?", options: ["NPV", "WACC", "IRR (Internal Rate of Return)", "P/E Multiple"], correct: 2, explanation: "PE investors measure returns using IRR (typically targeting 20%+ over a 5-year hold period) and MOIC (Money-on-Invested-Capital)." },
    { question: "What is the purpose of a 'Checks' tab in a financial model?", options: ["To store macros", "To verify model integrity (BS balances, sum checks)", "To display assumptions", "To calculate WACC"], correct: 1, explanation: "A Checks tab contains formulas that verify model integrity — balance sheet must balance to zero, plug cells must equal zero. Any non-zero check means the model is broken." },
    { question: "In Excel, what shortcut traces the cells that feed into the active cell (precedents)?", options: ["Ctrl+]", "Ctrl+[", "F2", "Ctrl+F3"], correct: 1, explanation: "Ctrl+[ traces precedent cells (inputs feeding the active cell). Ctrl+] traces dependents (cells that use the active cell's value)." },
    { question: "Which terminal value method assumes the company grows at a constant rate forever?", options: ["Exit Multiple Method", "Liquidation Value", "Gordon Growth Model", "Book Value Method"], correct: 2, explanation: "The Gordon Growth Model (perpetuity growth model) assumes cash flows grow at a constant rate (g) forever: TV = FCF(1+g) / (WACC-g)." },
    { question: "What color convention do Goldman Sachs models use for hardcoded assumptions?", options: ["Black", "Red", "Green", "Blue"], correct: 3, explanation: "The Goldman Standard: Blue for hardcoded inputs, Black for formulas from the same sheet, Green for cross-sheet links, Red for external links." },
    { question: "What does 'accretion' mean in an M&A merger model?", options: ["The deal increases buyer's assets", "The deal increases buyer's EPS", "The deal decreases buyer's P/E", "The deal is completed successfully"], correct: 1, explanation: "A deal is accretive if it increases the acquirer's EPS after the transaction. If EPS decreases, the deal is dilutive." },
    { question: "In a DCF, if WACC > terminal growth rate is violated, what happens?", options: ["Nothing — it still works", "The terminal value becomes negative or undefined", "EPS increases", "EBITDA margin expands"], correct: 1, explanation: "The Gordon Growth Model denominator (WACC - g) must be positive. If g >= WACC, the terminal value becomes negative or infinite — a mathematical impossibility." },
  ],
  'python-finance': [
    { question: "Which pandas method is used to download stock data using yfinance?", options: ["pd.read_csv()", "yf.download()", "pd.read_api()", "yf.get_data()"], correct: 1, explanation: "yf.download('TICKER', start='YYYY-MM-DD', end='YYYY-MM-DD') is the standard method to download OHLCV stock data using yfinance." },
    { question: "What is the main advantage of vectorized operations over loops in pandas?", options: ["Better code readability", "Dramatically faster execution (10-100x)", "More memory efficient always", "Better for small datasets"], correct: 1, explanation: "Vectorized operations apply to entire arrays simultaneously using optimized C/Fortran code, making them 10-100x faster than Python loops for financial data processing." },
    { question: "What does .resample('M') do to a daily time series DataFrame?", options: ["Removes monthly data", "Groups data by month for aggregation", "Adds monthly index", "Filters to monthly values only"], correct: 1, explanation: ".resample('M') is a time-based groupby that aggregates daily data to monthly frequency. Follow with .mean(), .sum(), or .last() to specify the aggregation." },
    { question: "Which library provides pre-trained models for financial text sentiment analysis?", options: ["pandas", "QuantLib", "HuggingFace (FinBERT)", "scipy"], correct: 2, explanation: "FinBERT (available via HuggingFace transformers) is a BERT model fine-tuned on financial text, achieving state-of-the-art results on financial sentiment analysis." },
    { question: "What is the purpose of TimeSeriesSplit in scikit-learn for financial ML?", options: ["Splits data randomly", "Ensures future data never contaminates training set", "Improves model accuracy", "Reduces overfitting for any dataset"], correct: 1, explanation: "TimeSeriesSplit ensures chronological splits — training data always comes before test data. Using random splits in time series creates data leakage." },
    { question: "Which Jupyter shortcut runs a cell and moves to the next cell?", options: ["Ctrl+Enter", "Shift+Enter", "Alt+Enter", "F5"], correct: 1, explanation: "Shift+Enter runs the current cell and moves focus to the next cell. Ctrl+Enter runs the cell and stays in place." },
    { question: "In pandas, what is the risk of using df.append() in pandas 2.0+?", options: ["It's slower", "It was deprecated and removed", "It creates duplicate columns", "It only works on Series"], correct: 1, explanation: "df.append() was deprecated in pandas 1.4 and removed in 2.0. Use pd.concat([df1, df2]) instead for combining DataFrames." },
    { question: "What does SHAP provide for machine learning models in finance?", options: ["Faster model training", "Explainable feature importance for individual predictions", "Better accuracy scores", "Automated hyperparameter tuning"], correct: 1, explanation: "SHAP (SHapley Additive exPlanations) explains individual model predictions by calculating each feature's contribution — required for regulatory compliance in credit models." },
    { question: "What is the purpose of a virtual environment (venv) in Python development?", options: ["Speed up code execution", "Isolate project dependencies to prevent conflicts", "Access the internet securely", "Enable GPU computing"], correct: 1, explanation: "Virtual environments isolate package dependencies for each project, preventing version conflicts between different finance projects you're working on simultaneously." },
    { question: "Which library is most commonly used to build interactive financial web dashboards?", options: ["matplotlib", "seaborn", "Streamlit", "scipy"], correct: 2, explanation: "Streamlit enables building interactive financial dashboards in pure Python with minimal code. It's widely used for rapid prototyping of financial analytics applications." },
  ],
};

export default function SkillQuiz({ darkMode, skillName, skillColor }: Props) {
  const skillId = skillName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '');
  const questions = quizzes[skillId] || quizzes['financial-modeling'];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  const text = darkMode ? 'text-white' : 'text-gray-900';
  const textSub = darkMode ? 'text-slate-400' : 'text-gray-500';
  const textMed = darkMode ? 'text-slate-300' : 'text-gray-600';
  const card = darkMode ? 'bg-slate-900/50 border-slate-700/50' : 'bg-gray-50 border-gray-100';

  const q = questions[current];
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowResult(true);
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers(new Array(questions.length).fill(null));
    setShowResult(false);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const level = pct >= 80 ? 'Advanced' : pct >= 60 ? 'Intermediate' : 'Beginner';
    const levelColor = pct >= 80 ? '#16A34A' : pct >= 60 ? '#D97706' : '#DC2626';
    return (
      <div className={`rounded-2xl border p-6 ${card}`}>
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{pct >= 80 ? '🏆' : pct >= 60 ? '📈' : '📚'}</div>
          <h4 className={`text-xl font-black mb-1 ${text}`}>Quiz Complete!</h4>
          <p className={`text-sm ${textSub}`}>{skillName} Self-Assessment</p>
        </div>
        <div className="text-center mb-6">
          <div className={`text-6xl font-black mb-2`} style={{ color: skillColor }}>{score}/{questions.length}</div>
          <div className={`text-2xl font-bold mb-1`} style={{ color: levelColor }}>{pct}% — {level} Level</div>
          <p className={`text-sm ${textMed}`}>
            {pct >= 80
              ? 'Excellent! You have strong foundations in this skill.'
              : pct >= 60
              ? 'Good progress! Keep practicing to reach advanced level.'
              : 'You\'re at the beginning of your journey. Great time to start!'}
          </p>
        </div>
        {/* Score Bar */}
        <div className={`h-3 rounded-full mb-6 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
          <div
            className="h-3 rounded-full transition-all"
            style={{ width: `${pct}%`, backgroundColor: levelColor }}
          />
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center p-3 rounded-xl border" style={{ borderColor: `${skillColor}30`, backgroundColor: `${skillColor}10` }}>
            <div className="font-bold text-lg" style={{ color: skillColor }}>{score}</div>
            <div className={`text-xs ${textSub}`}>Correct</div>
          </div>
          <div className="text-center p-3 rounded-xl border" style={{ borderColor: '#DC262630', backgroundColor: '#DC262610' }}>
            <div className="font-bold text-lg text-red-400">{questions.length - score}</div>
            <div className={`text-xs ${textSub}`}>To Review</div>
          </div>
          <div className="text-center p-3 rounded-xl border" style={{ borderColor: '#D9770630', backgroundColor: '#D9770610' }}>
            <div className="font-bold text-lg text-amber-400">{level}</div>
            <div className={`text-xs ${textSub}`}>Your Level</div>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="w-full py-3 rounded-xl text-white font-bold transition-all hover:opacity-90"
          style={{ backgroundColor: skillColor }}
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border p-6 ${card}`}>
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-sm font-semibold ${textSub}`}>Question {current + 1} of {questions.length}</span>
        <span className="text-sm font-bold" style={{ color: skillColor }}>Score: {score}/{current}</span>
      </div>
      <div className={`h-2 rounded-full mb-6 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
        <div
          className="h-2 rounded-full transition-all"
          style={{ width: `${((current) / questions.length) * 100}%`, backgroundColor: skillColor }}
        />
      </div>

      {/* Question */}
      <h4 className={`text-base font-bold mb-5 ${text}`}>{q.question}</h4>

      {/* Options */}
      <div className="space-y-2 mb-4">
        {q.options.map((opt, i) => {
          let btnStyle = '';
          let border = '';
          if (showResult) {
            if (i === q.correct) {
              btnStyle = darkMode ? 'bg-green-900/30' : 'bg-green-50';
              border = 'border-green-500';
            } else if (i === selected && i !== q.correct) {
              btnStyle = darkMode ? 'bg-red-900/30' : 'bg-red-50';
              border = 'border-red-500';
            } else {
              border = darkMode ? 'border-slate-700/50' : 'border-gray-100';
            }
          } else {
            border = darkMode ? 'border-slate-700/50 hover:border-slate-500' : 'border-gray-100 hover:border-gray-300';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 ${btnStyle} ${border}`}
            >
              <span
                className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 text-white"
                style={{ backgroundColor: showResult && i === q.correct ? '#16A34A' : showResult && i === selected ? '#DC2626' : skillColor + '80' }}
              >
                {String.fromCharCode(65 + i)}
              </span>
              <span className={`text-sm ${textMed}`}>{opt}</span>
              {showResult && i === q.correct && <span className="ml-auto text-green-400 text-sm">✓</span>}
              {showResult && i === selected && i !== q.correct && <span className="ml-auto text-red-400 text-sm">✗</span>}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className={`p-3 rounded-xl mb-4 ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-blue-50 border border-blue-100'}`}>
          <span className={`text-xs font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>💡 Explanation: </span>
          <span className={`text-xs ${textMed}`}>{q.explanation}</span>
        </div>
      )}

      {/* Next Button */}
      {showResult && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl text-white font-bold transition-all hover:opacity-90"
          style={{ backgroundColor: skillColor }}
        >
          {current < questions.length - 1 ? 'Next Question →' : 'See Results 🏆'}
        </button>
      )}
    </div>
  );
}
