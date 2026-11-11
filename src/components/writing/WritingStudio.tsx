import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Copy,
  Check,
  Printer,
  BookOpen,
  HelpCircle,
  Lightbulb,
  FileText,
  RotateCcw,
  Scale
} from 'lucide-react';
import { WRITING_TOPICS, WritingTopic, SENTENCE_STARTERS } from '../../data/writingStudioData';

interface WritingStudioProps {
  initialTopicId: string;
  onOpenSampleEssay: (topic: WritingTopic) => void;
}

export const WritingStudio: React.FC<WritingStudioProps> = ({
  initialTopicId,
  onOpenSampleEssay,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stance, setStance] = useState<'pro' | 'contra'>('pro');

  const topic = WRITING_TOPICS.find((t) => t.id === selectedTopicId) || WRITING_TOPICS[0];

  // User input draft states
  const [introText, setIntroText] = useState<string>('');
  const [arg1Text, setArg1Text] = useState<string>('');
  const [arg2Text, setArg2Text] = useState<string>('');
  const [refutationText, setRefutationText] = useState<string>('');
  const [conclusionText, setConclusionText] = useState<string>('');

  const [studentName, setStudentName] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // When changing topic, prefill with starter suggestions
  useEffect(() => {
    const t = WRITING_TOPICS.find((item) => item.id === selectedTopicId) || WRITING_TOPICS[0];
    const data = stance === 'pro' ? t.proStance : t.contraStance;

    setIntroText(
      `A 21. századi mindennapjainkban egyre élesebben merül fel a kérdés: ${t.dilemma.toLowerCase()} ${data.thesis}`
    );
    setArg1Text(
      `Elsősorban azért tartom ezt fontosnak, mert ${data.arg1.thesis.toLowerCase()} ${data.arg1.reasoning} ${data.arg1.example}`
    );
    setArg2Text(
      `Továbbá nem hagyható figyelmen kívül az a szempont sem, hogy ${data.arg2.thesis.toLowerCase()} ${data.arg2.reasoning} ${data.arg2.example}`
    );
    setRefutationText(
      `Bár ${data.counterArg.toLowerCase()} mégis meg kell fontolnunk: ${data.refutation}`
    );
    setConclusionText(
      `Mindent egybevetve úgy gondolom: ${data.conclusion}`
    );
  }, [selectedTopicId, stance]);

  // Append a sentence starter to the active step's text field
  const handleInsertStarter = (starter: string) => {
    if (currentStep === 2) {
      setIntroText((prev) => (prev ? `${prev} ${starter}` : starter));
    } else if (currentStep === 3) {
      setArg1Text((prev) => (prev ? `${prev} ${starter}` : starter));
    } else if (currentStep === 4) {
      setRefutationText((prev) => (prev ? `${prev} ${starter}` : starter));
    } else if (currentStep === 5) {
      setConclusionText((prev) => (prev ? `${prev} ${starter}` : starter));
    }
  };

  // Word count & quality calculations
  const fullEssay = `${introText}\n\n${arg1Text}\n\n${arg2Text}\n\n${refutationText}\n\n${conclusionText}`.trim();
  const wordCount = fullEssay ? fullEssay.split(/\s+/).filter(Boolean).length : 0;

  const calculateQuality = () => {
    let score = 0;
    const lower = fullEssay.toLowerCase();

    // Structural checks (20 pts each)
    if (introText.trim().length > 30) score += 20;
    if (arg1Text.trim().length > 30) score += 20;
    if (arg2Text.trim().length > 30) score += 20;
    if (refutationText.trim().length > 30) score += 20;
    if (conclusionText.trim().length > 30) score += 20;

    // Connectors bonus
    const connectors = [
      'mert',
      'mivel',
      'ugyanis',
      'például',
      'meglátásom szerint',
      'úgy vélem',
      'bár',
      'mégis',
      'mindazonáltal',
      'mindent egybevetve'
    ];
    const found = connectors.filter((c) => lower.includes(c)).length;
    score += Math.min(20, found * 2);

    return Math.min(100, score);
  };

  const qualityScore = calculateQuality();

  const handleCopy = () => {
    const formatted = `Érvelő fogalmazás\nCím: ${topic.title}\nSzerző: ${studentName || '8. osztályos tanuló'}\nÁlláspont: ${stance === 'pro' ? 'PRO (mellette)' : 'KONTRA (ellene)'}\n\n${fullEssay}`;
    navigator.clipboard.writeText(formatted);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const resetDraft = () => {
    setIntroText('');
    setArg1Text('');
    setArg2Text('');
    setRefutationText('');
    setConclusionText('');
  };

  const currentStanceData = stance === 'pro' ? topic.proStance : topic.contraStance;

  return (
    <div className="space-y-10 max-w-5xl mx-auto py-6">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-1">
            <span>Interaktív Írásműhely</span>
            <span aria-hidden="true">·</span>
            <span>8. Osztályos Fogalmazás</span>
            <span aria-hidden="true">·</span>
            <span>Lépésről lépésre</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-stone-900 tracking-tight">
            Érvelés-szerkesztő Műhely
          </h1>
          <p className="text-xs text-stone-600 mt-1">
            Téma: <strong>{topic.title}</strong> ({topic.category})
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenSampleEssay(topic)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-800 bg-white border border-stone-300 hover:bg-stone-50 rounded-lg shadow-2xs transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-800" />
            <span>Kész mintaesszé megtekintése</span>
          </button>
        </div>
      </div>

      {/* Step Progress Tracker (1 to 5) */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-2xs">
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          {[
            { step: 1, label: '1. Állásfoglalás' },
            { step: 2, label: '2. Bevezetés' },
            { step: 3, label: '3. Főérvek (T-I-P)' },
            { step: 4, label: '4. Cáfolat' },
            { step: 5, label: '5. Befejezés' },
            { step: 6, label: '6. Kész Fogalmazás' },
          ].map((item) => (
            <button
              key={item.step}
              onClick={() => setCurrentStep(item.step)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                currentStep === item.step
                  ? 'bg-amber-800 text-white font-bold shadow-2xs'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-mono font-bold ${
                  currentStep === item.step ? 'bg-amber-950 text-white' : 'bg-stone-200 text-stone-700'
                }`}
              >
                {item.step}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Step Work Area */}
        <div className="lg:col-span-8 space-y-6">
          {/* STEP 1: TOPIC & STANCE */}
          {currentStep === 1 && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xs">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-900 block mb-1">
                  1. Lépés · A téma és a saját álláspont kijelölése
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Melyik oldalon állsz ebben a vitában?
                </h2>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  A jó érvelő először tisztázza a saját határozott álláspontját. Válassz az 5 téma közül, majd döntsd el: 
                  <strong> PRO (mellette)</strong> vagy <strong>KONTRA (ellene)</strong> fogsz érvelni!
                </p>
              </div>

              {/* Topic Selector dropdown/strip */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                  Válassz egyet az 5 érdekes téma közül:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {WRITING_TOPICS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopicId(t.id)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedTopicId === t.id
                          ? 'bg-amber-50 border-amber-600 font-bold text-amber-950 ring-1 ring-amber-600'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <span className="text-[10px] font-mono text-amber-800 uppercase block">
                        {t.number}. Téma
                      </span>
                      <div className="text-xs font-serif font-bold">{t.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dilemma card */}
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  A vita kérdése:
                </span>
                <p className="font-serif text-base text-stone-900 italic">
                  "{topic.dilemma}"
                </p>
              </div>

              {/* Stance Selector */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                  Válaszd ki az álláspontodat:
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setStance('pro')}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                      stance === 'pro'
                        ? 'bg-emerald-50 border-emerald-600 shadow-2xs'
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase text-emerald-800 block mb-1">
                        + PRO Álláspont (Támogató)
                      </span>
                      <p className="text-xs text-stone-700 leading-snug">
                        {topic.proStance.thesis}
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => setStance('contra')}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer text-left flex flex-col justify-between ${
                      stance === 'contra'
                        ? 'bg-rose-50 border-rose-600 shadow-2xs'
                        : 'bg-white border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold uppercase text-rose-800 block mb-1">
                        - KONTRA Álláspont (Ellenző)
                      </span>
                      <p className="text-xs text-stone-700 leading-snug">
                        {topic.contraStance.thesis}
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Name field */}
              <div className="pt-2">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                  A szerző neve (opcionális):
                </label>
                <input
                  type="text"
                  placeholder="Pl. Kis Kata, 8. a"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full sm:w-64 px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="flex justify-end pt-4 border-t border-stone-100">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Tovább a 2. lépésre: Bevezetés megírása</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: INTRODUCTION */}
          {currentStep === 2 && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xs">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-900 block mb-1">
                  2. Lépés · A meggyőző bevezetés
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Formáld meg a felütést és a tételmondatot!
                </h2>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  A jó kezdés 3 pillére: <strong>1) Figyelemfelkeltő felütés</strong>, <strong>2) Témamegjelölés</strong> és <strong>3) Tételmondat</strong>.
                  Használd az inspirációs mondatindítókat, vagy írd át a szöveget saját szavaiddal!
                </p>
              </div>

              {/* Sentence Starters Bar */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>Kattintható mondatindítók a bevezetéshez:</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SENTENCE_STARTERS.hooks.slice(0, 3).map((hook, i) => (
                    <button
                      key={i}
                      onClick={() => handleInsertStarter(hook)}
                      className="text-[11px] px-2.5 py-1 bg-stone-100 hover:bg-amber-100 text-stone-800 rounded-md border border-stone-300 transition-colors cursor-pointer"
                    >
                      + {hook}
                    </button>
                  ))}
                  {SENTENCE_STARTERS.thesis.slice(0, 2).map((th, i) => (
                    <button
                      key={i}
                      onClick={() => handleInsertStarter(th)}
                      className="text-[11px] px-2.5 py-1 bg-amber-50 hover:bg-amber-200 text-amber-950 font-medium rounded-md border border-amber-300 transition-colors cursor-pointer"
                    >
                      + {th}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Area */}
              <div>
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-1">
                  Bevezetés szövege (1. bekezdés):
                </label>
                <textarea
                  rows={5}
                  value={introText}
                  onChange={(e) => setIntroText(e.target.value)}
                  className="w-full p-4 text-xs font-serif text-stone-900 bg-stone-50 border border-stone-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500 leading-relaxed"
                  placeholder="Írd ide a bevezetésedet..."
                />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center gap-1 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Vissza: Állásfoglalás</span>
                </button>
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Tovább a 3. lépésre: Főérvek kidolgozása</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: MAIN ARGUMENTS (TIP 1 & TIP 2) */}
          {currentStep === 3 && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xs">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-900 block mb-1">
                  3. Lépés · A Főérvek kidolgozása a T-I-P modellel
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Tétel + Indoklás ("mert...") + Példa ("például...")
                </h2>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Fogalmazz meg legalább <strong>két önálló érvelő bekezdést</strong>! 
                  Minden érv tartalmazzon egy konkrét tételt, egy logikai indoklást és egy életszerű példát!
                </p>
              </div>

              {/* Argument 1 */}
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    1. Főérv (T-I-P modell alapján):
                  </span>
                  <span className="text-[11px] text-stone-500 font-mono">2. bekezdés</span>
                </div>
                <div className="text-[11px] text-stone-600 italic bg-white p-2.5 rounded-lg border border-stone-200">
                  <strong>Tipp erre a témára:</strong> {currentStanceData.arg1.thesis}
                </div>
                <textarea
                  rows={4}
                  value={arg1Text}
                  onChange={(e) => setArg1Text(e.target.value)}
                  className="w-full p-3 text-xs font-serif text-stone-900 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 leading-relaxed"
                  placeholder="Elsősorban azért, mert..."
                />
              </div>

              {/* Argument 2 */}
              <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    2. Főérv (Második szempont bevonása):
                  </span>
                  <span className="text-[11px] text-stone-500 font-mono">3. bekezdés</span>
                </div>
                <div className="text-[11px] text-stone-600 italic bg-white p-2.5 rounded-lg border border-stone-200">
                  <strong>Tipp erre a témára:</strong> {currentStanceData.arg2.thesis}
                </div>
                <textarea
                  rows={4}
                  value={arg2Text}
                  onChange={(e) => setArg2Text(e.target.value)}
                  className="w-full p-3 text-xs font-serif text-stone-900 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 leading-relaxed"
                  placeholder="Továbbá figyelembe kell venni..."
                />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex items-center gap-1 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Vissza: Bevezetés</span>
                </button>
                <button
                  onClick={() => setCurrentStep(4)}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Tovább a 4. lépésre: Ellenérv & Cáfolat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: REFUTATION */}
          {currentStep === 4 && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xs">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-rose-800 block mb-1">
                  4. Lépés · A Cáfolat Művészete
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Ismerd el a másik felet, majd bizonyítsd az igazadat!
                </h2>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  A jó érvelő nem dugja homokba a fejét: bemutatja az ellenfél legerősebb megfontolását 
                  (<em>„Bár kétségtelen, hogy van igazság abban...”</em>), majd megmutatja, miért nem ez a döntő szempont (<em>„...mégis...”</em>).
                </p>
              </div>

              {/* Refutation helper card */}
              <div className="p-4 bg-rose-50/60 border border-rose-200 rounded-xl space-y-2 text-xs">
                <span className="font-bold text-rose-950 uppercase tracking-wider block">
                  Erre a témára jellemző ellenérv:
                </span>
                <p className="text-rose-900 italic">
                  "{currentStanceData.counterArg}"
                </p>
                <div className="pt-1 text-stone-700">
                  <strong>Javasolt cáfolati irány:</strong> {currentStanceData.refutation}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-1">
                  Cáfolat szövege (4. bekezdés):
                </label>
                <textarea
                  rows={5}
                  value={refutationText}
                  onChange={(e) => setRefutationText(e.target.value)}
                  className="w-full p-4 text-xs font-serif text-stone-900 bg-stone-50 border border-stone-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-rose-500 leading-relaxed"
                  placeholder="Bár igaz, hogy..., mégis..."
                />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="flex items-center gap-1 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Vissza: Főérvek</span>
                </button>
                <button
                  onClick={() => setCurrentStep(5)}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Tovább az 5. lépésre: Hatásos lezárás</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: CONCLUSION */}
          {currentStep === 5 && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xs">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-900 block mb-1">
                  5. Lépés · A Meggyőző Lezárás
                </span>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Tedd kerekké a fogalmazásodat!
                </h2>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Fogald össze az érveket új szavakkal, erősítsd meg a tételmondatodat, és mutass utat a jövőbe! 
                  <strong> Szigorú tilalom:</strong> soha ne hozz be vadonatúj érvet a befejezésbe!
                </p>
              </div>

              {/* Starter chips */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  <span>Kattintható lezáró fordulatok:</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SENTENCE_STARTERS.conclusions.map((con, i) => (
                    <button
                      key={i}
                      onClick={() => handleInsertStarter(con)}
                      className="text-[11px] px-2.5 py-1 bg-amber-50 hover:bg-amber-200 text-amber-950 font-medium rounded-md border border-amber-300 transition-colors cursor-pointer"
                    >
                      + {con}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider block mb-1">
                  Befejezés szövege (5. bekezdés):
                </label>
                <textarea
                  rows={4}
                  value={conclusionText}
                  onChange={(e) => setConclusionText(e.target.value)}
                  className="w-full p-4 text-xs font-serif text-stone-900 bg-stone-50 border border-stone-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-500 leading-relaxed"
                  placeholder="Mindent egybevetve úgy vélem..."
                />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="flex items-center gap-1 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Vissza: Cáfolat</span>
                </button>
                <button
                  onClick={() => setCurrentStep(6)}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Kész fogalmazás megtekintése (6. lépés)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: FINAL ESSAY PREVIEW */}
          {currentStep === 6 && (
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-amber-900 block mb-1">
                    Kész Fogalmazásod
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    {topic.title}
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Szerző: {studentName || '8. osztályos tanuló'} · Álláspont: {stance === 'pro' ? 'PRO' : 'KONTRA'} · {wordCount} szó
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Másolva!' : 'Másolás'}</span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Nyomtatás</span>
                  </button>
                </div>
              </div>

              {/* Formatted Essay Sheet */}
              <div className="p-6 md:p-8 bg-[#fdfcf9] rounded-xl border border-stone-200 font-serif text-sm leading-loose text-stone-900 space-y-5 shadow-2xs">
                <div className="text-center pb-3 border-b border-stone-200">
                  <h3 className="font-bold text-xl text-stone-900 mb-1">{topic.title}</h3>
                  <div className="text-xs font-sans text-stone-500">
                    Érvelő esszé · {studentName || '8. osztályos diák munkája'}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="indent-6 text-justify">
                    <span className="text-stone-400 font-sans text-[10px] uppercase font-bold mr-1">[Bevezetés]</span>
                    {introText || 'A bevezetés még üres...'}
                  </p>
                  <p className="indent-6 text-justify">
                    <span className="text-stone-400 font-sans text-[10px] uppercase font-bold mr-1">[1. Érv]</span>
                    {arg1Text || 'Az első érv még üres...'}
                  </p>
                  <p className="indent-6 text-justify">
                    <span className="text-stone-400 font-sans text-[10px] uppercase font-bold mr-1">[2. Érv]</span>
                    {arg2Text || 'A második érv még üres...'}
                  </p>
                  <p className="indent-6 text-justify bg-rose-50/50 p-3 rounded-lg border border-rose-200/50">
                    <span className="text-rose-800 font-sans text-[10px] uppercase font-bold mr-1">[Cáfolat]</span>
                    {refutationText || 'A cáfolat még üres...'}
                  </p>
                  <p className="indent-6 text-justify">
                    <span className="text-stone-400 font-sans text-[10px] uppercase font-bold mr-1">[Befejezés]</span>
                    {conclusionText || 'A befejezés még üres...'}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                <button
                  onClick={() => setCurrentStep(5)}
                  className="flex items-center gap-1 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Vissza a szerkesztéshez</span>
                </button>
                <button
                  onClick={resetDraft}
                  className="flex items-center gap-1 text-xs text-rose-700 hover:text-rose-900 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Szöveg törlése és újrakezdés</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: "Érv-Doktor" Real-Time Quality Assistant */}
        <div className="lg:col-span-4 space-y-5 sticky top-24">
          <div className="bg-white border border-stone-200 rounded-2xl p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <span className="font-serif font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-700" />
                <span>Érv-Doktor Asszisztens</span>
              </span>
              <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                {qualityScore} / 100 pont
              </span>
            </div>

            {/* Word count meter */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-stone-700">Terjedelem (szavak száma):</span>
                <span className="font-mono text-stone-900 font-bold">{wordCount} szó</span>
              </div>
              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    wordCount >= 120 && wordCount <= 280
                      ? 'bg-emerald-600'
                      : wordCount > 280
                      ? 'bg-amber-600'
                      : 'bg-stone-400'
                  }`}
                  style={{ width: `${Math.min(100, (wordCount / 200) * 100)}%` }}
                />
              </div>
              <p className="text-[11px] text-stone-500">
                8. osztályos elvárás: 120–250 szó ({wordCount >= 120 ? '✓ Megfelelő hossz' : 'Még bővítsd!'})
              </p>
            </div>

            {/* Structure Checklist */}
            <div className="space-y-2 pt-2 border-t border-stone-100">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                Szerkezeti ellenőrző lista:
              </span>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-center gap-2">
                  <span className={introText.trim().length > 30 ? 'text-emerald-600 font-bold' : 'text-stone-300'}>
                    ✓
                  </span>
                  <span className={introText.trim().length > 30 ? 'text-stone-800 font-medium' : 'text-stone-500'}>
                    1. Bevezetés és tételmondat
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={arg1Text.trim().length > 30 ? 'text-emerald-600 font-bold' : 'text-stone-300'}>
                    ✓
                  </span>
                  <span className={arg1Text.trim().length > 30 ? 'text-stone-800 font-medium' : 'text-stone-500'}>
                    2. Első T-I-P érv
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={arg2Text.trim().length > 30 ? 'text-emerald-600 font-bold' : 'text-stone-300'}>
                    ✓
                  </span>
                  <span className={arg2Text.trim().length > 30 ? 'text-stone-800 font-medium' : 'text-stone-500'}>
                    3. Második T-I-P érv
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={refutationText.trim().length > 30 ? 'text-emerald-600 font-bold' : 'text-stone-300'}>
                    ✓
                  </span>
                  <span className={refutationText.trim().length > 30 ? 'text-stone-800 font-medium' : 'text-stone-500'}>
                    4. Ellenérv és cáfolat
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={conclusionText.trim().length > 30 ? 'text-emerald-600 font-bold' : 'text-stone-300'}>
                    ✓
                  </span>
                  <span className={conclusionText.trim().length > 30 ? 'text-stone-800 font-medium' : 'text-stone-500'}>
                    5. Összegző befejezés
                  </span>
                </li>
              </ul>
            </div>

            {/* Advice Box */}
            <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200 text-xs text-amber-950 leading-relaxed">
              <strong className="block font-bold mb-0.5">Érv-Doktor tanácsa:</strong>
              {qualityScore >= 80
                ? 'Kiváló munka! Megvan mind az 5 kötelező bekezdés, a cáfolat és a logikai kötőszavak is szépen összekapcsolják a mondatokat.'
                : 'Mindenképpen ügyelj a "mert..." indoklásokra és a "például..." konkrét bizonyítékokra a főérvekben!'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
