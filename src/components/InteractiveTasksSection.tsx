import React, { useState } from 'react';
import { CheckCircle2, RotateCcw, Sparkles, HelpCircle, ArrowRight, Layers, FileText, SplitSquareVertical } from 'lucide-react';
import { MATCHING_ITEMS, WORD_HUNT_ITEMS, CLOZE_TASKS } from '../data/lessonData';
import { LessonTab } from '../types';

interface InteractiveTasksSectionProps {
  onNext: (tab: LessonTab) => void;
  isTeacherMode: boolean;
}

export const InteractiveTasksSection: React.FC<InteractiveTasksSectionProps> = ({
  onNext,
  isTeacherMode,
}) => {
  const [activeTaskTab, setActiveTaskTab] = useState<'matching' | 'wordhunt' | 'cloze' | 'reflection'>('matching');

  // --- Task 1: Matching Game State ---
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({}); // country -> itemId
  const [matchingFeedback, setMatchingFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    setMatchingFeedback(null);
  };

  const handleMotifClick = (item: (typeof MATCHING_ITEMS)[0]) => {
    if (!selectedCountry) {
      setMatchingFeedback({ message: 'Először válassz ki egy országot a bal oldali listából!', isCorrect: false });
      return;
    }

    if (item.country === selectedCountry) {
      setMatchedPairs((prev) => ({ ...prev, [selectedCountry]: item.id }));
      setMatchingFeedback({ message: `Helyes párosítás! ${item.explanation}`, isCorrect: true });
      setSelectedCountry(null);
    } else {
      setMatchingFeedback({
        message: `Nem pontos! Ez a motívum nem ${selectedCountry}-hoz tartozik. Próbáld újra!`,
        isCorrect: false,
      });
    }
  };

  const resetMatching = () => {
    setMatchedPairs({});
    setSelectedCountry(null);
    setMatchingFeedback(null);
  };

  // --- Task 2: Word Hunt (Noun vs Verb) ---
  const [wordClassifications, setWordClassifications] = useState<Record<string, 'noun' | 'verb'>>({});

  const handleClassifyWord = (word: string, chosenType: 'noun' | 'verb') => {
    setWordClassifications((prev) => ({ ...prev, [word]: chosenType }));
  };

  const resetWordHunt = () => {
    setWordClassifications({});
  };

  // --- Task 3: Cloze Test ---
  const [clozeAnswers, setClozeAnswers] = useState<Record<string, string>>({});

  const handleSelectCloze = (taskId: string, word: string) => {
    setClozeAnswers((prev) => ({ ...prev, [taskId]: word }));
  };

  // --- Task 4: Reflection Answers Revealed ---
  const [revealedReflections, setRevealedReflections] = useState<Record<string, boolean>>({});

  const toggleReflection = (id: string) => {
    setRevealedReflections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const matchedCount = Object.keys(matchedPairs).length;

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>4. Fázis</span>
          <span aria-hidden="true">·</span>
          <span>7–8 perc</span>
          <span aria-hidden="true">·</span>
          <span>Változatos interaktív gyakorlás</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Gyakorló feladatok azonnali visszajelzéssel
        </h1>
        <p className="text-base text-stone-600 max-w-3xl">
          Mélyítsd el a versismeretet! Válogasd össze az országok motívumait, leplezd le a ritka igéket a névszók rengetegében, 
          és pótold a költemény kulcsszavait.
        </p>

        {isTeacherMode && (
          <div className="mt-4 p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900">
            <strong>Módszertani tipp:</strong> A feladatok kooperatív munkában (páros munka) vagy egyéni differenciálásra is alkalmasak. Azonnali visszajelzést adnak a tanulóknak a kvíz előtti felkészüléshez.
          </div>
        )}
      </div>

      {/* Sub-Tabs for the 4 tasks */}
      <div className="flex overflow-x-auto gap-2 p-1.5 bg-stone-100 rounded-xl border border-stone-200 no-scrollbar">
        <button
          onClick={() => setActiveTaskTab('matching')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
            activeTaskTab === 'matching'
              ? 'bg-white text-stone-900 shadow-2xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <SplitSquareVertical className="w-3.5 h-3.5" />
          <span>1. Képeslap-párosító ({matchedCount}/8)</span>
        </button>

        <button
          onClick={() => setActiveTaskTab('wordhunt')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
            activeTaskTab === 'wordhunt'
              ? 'bg-white text-stone-900 shadow-2xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>2. Szóvadászat (Névszó vagy Ige?)</span>
        </button>

        <button
          onClick={() => setActiveTaskTab('cloze')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
            activeTaskTab === 'cloze'
              ? 'bg-white text-stone-900 shadow-2xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>3. Hiányos verssorok</span>
        </button>

        <button
          onClick={() => setActiveTaskTab('reflection')}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
            activeTaskTab === 'reflection'
              ? 'bg-white text-stone-900 shadow-2xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>4. Értelmező kérdések</span>
        </button>
      </div>

      {/* --- TASK 1: MATCHING GAME --- */}
      {activeTaskTab === 'matching' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Képeslap-rendező: Kapcsold a motívumokat az országhoz!
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Kattints először a bal oldali országra, majd keresd meg a jobb oldali dobozok közül az ahhoz tartozó versrészletet!
              </p>
            </div>

            <button
              onClick={resetMatching}
              className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 transition-colors p-2"
              title="Párosítás újrakezdése"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Újrakezdés</span>
            </button>
          </div>

          {matchingFeedback && (
            <div
              className={`p-3 rounded-xl text-xs flex items-center gap-2 animate-in fade-in ${
                matchingFeedback.isCorrect
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                  : 'bg-amber-50 text-amber-900 border border-amber-200'
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>{matchingFeedback.message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left: Countries */}
            <div className="md:col-span-5 space-y-2">
              <span className="text-xs font-mono font-bold text-stone-600 uppercase block mb-2">
                1. Válassz országot:
              </span>
              {MATCHING_ITEMS.map((item) => {
                const isMatched = !!matchedPairs[item.country];
                const isSelected = selectedCountry === item.country;

                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => handleCountryClick(item.country)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                      isMatched
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900 opacity-80'
                        : isSelected
                        ? 'bg-amber-800 text-white border-amber-800 shadow-2xs font-semibold'
                        : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span>{item.country}</span>
                    {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </button>
                );
              })}
            </div>

            {/* Right: Motifs */}
            <div className="md:col-span-7 space-y-2">
              <span className="text-xs font-mono font-bold text-stone-600 uppercase block mb-2">
                2. Kattints a hozzátartozó motívumokra:
              </span>
              {MATCHING_ITEMS.map((item) => {
                const isMatched = Object.values(matchedPairs).includes(item.id);

                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => handleMotifClick(item)}
                    className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all cursor-pointer ${
                      isMatched
                        ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950 opacity-60 line-through'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400 hover:bg-amber-50/30'
                    }`}
                  >
                    <div className="font-serif text-sm font-semibold text-stone-900 mb-0.5">
                      {item.motifs}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {matchedCount === MATCHING_ITEMS.length && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                Fantasztikus! Mind a 8 ország motívumát sikeresen és hibátlanul összekapcsoltad a költeményből!
              </span>
            </div>
          )}
        </section>
      )}

      {/* --- TASK 2: WORD HUNT --- */}
      {activeTaskTab === 'wordhunt' && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Szóvadászat: Névszó (Állókép) vagy Ige (Cselekvés)?
              </h2>
              <p className="text-xs text-stone-600 mt-1">
                Kattints a szavak mellett a megfelelő szófaji kategóriára! Figyeld meg az arányokat!
              </p>
            </div>

            <button
              onClick={resetWordHunt}
              className="flex items-center gap-1 text-xs text-stone-500 hover:text-stone-800 transition-colors p-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Újrakezdés</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {WORD_HUNT_ITEMS.map((item, idx) => {
              const classified = wordClassifications[item.word];
              const isAnswered = !!classified;
              const isCorrect = classified === item.type;

              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-xl p-4 flex flex-col justify-between shadow-2xs"
                >
                  <div className="mb-3">
                    <span className="font-serif text-lg font-bold text-stone-900 block">
                      "{item.word}"
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        disabled={isAnswered}
                        onClick={() => handleClassifyWord(item.word, 'noun')}
                        className={`px-2.5 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${
                          classified === 'noun'
                            ? isCorrect
                              ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold'
                              : 'bg-rose-100 text-rose-900 border-rose-400'
                            : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
                        }`}
                      >
                        Névszó
                      </button>

                      <button
                        disabled={isAnswered}
                        onClick={() => handleClassifyWord(item.word, 'verb')}
                        className={`px-2.5 py-1.5 text-xs rounded-lg border transition-colors cursor-pointer ${
                          classified === 'verb'
                            ? isCorrect
                              ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold'
                              : 'bg-rose-100 text-rose-900 border-rose-400'
                            : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
                        }`}
                      >
                        Ige
                      </button>
                    </div>

                    {isAnswered && (
                      <p
                        className={`text-[11px] leading-snug p-2 rounded-md ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-900'
                            : 'bg-amber-50 text-amber-900'
                        }`}
                      >
                        {item.reason}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* --- TASK 3: CLOZE TEST --- */}
      {activeTaskTab === 'cloze' && (
        <section className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Hiányos verssorok: Idézd fel a pontos szavakat!
            </h2>
            <p className="text-xs text-stone-600 mt-1">
              Válaszd ki a verssorokba pontosan illeszkedő költői kifejezést!
            </p>
          </div>

          <div className="space-y-4">
            {CLOZE_TASKS.map((task, idx) => {
              const selected = clozeAnswers[task.id];
              const isAnswered = !!selected;
              const isCorrect = selected === task.missingWord;

              return (
                <div
                  key={task.id}
                  className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between text-xs text-stone-600 font-mono">
                    <span>{idx + 1}. sorrészlet</span>
                    <span>Tipp: {task.hint}</span>
                  </div>

                  <p className="font-serif text-lg text-stone-900">
                    {task.sentence.split('___')[0]}
                    <span className="underline decoration-amber-600 decoration-2 font-bold px-1 text-amber-950">
                      {selected ? selected : '... ? ...'}
                    </span>
                    {task.sentence.split('___')[1]}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {task.options.map((opt) => (
                      <button
                        key={opt}
                        disabled={isAnswered}
                        onClick={() => handleSelectCloze(task.id, opt)}
                        className={`px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
                          selected === opt
                            ? isCorrect
                              ? 'bg-emerald-600 text-white border-emerald-600 font-bold'
                              : 'bg-rose-600 text-white border-rose-600'
                            : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {isAnswered && (
                    <div
                      className={`text-xs p-2.5 rounded-lg flex items-center gap-1.5 ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-900'
                          : 'bg-rose-50 text-rose-900'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Helyes! Pontosan ez a szó szerepel Babits versében.</span>
                        </>
                      ) : (
                        <span>Nem pontos! A helyes megoldás: <strong>{task.missingWord}</strong></span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* --- TASK 4: REFLECTION QUESTIONS --- */}
      {activeTaskTab === 'reflection' && (
        <section className="space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Gondolkodtató kérdések a tankönyvből (46. oldal)
            </h2>
            <p className="text-xs text-stone-600 mt-1">
              Gondold végig a válaszodat saját szavaiddal, majd kattints a magyarázat felfedéséhez!
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                id: 'refl_1',
                q: '1. Mit jelenthet a cím: "Messze... messze..."? Miért van benne pontozás (három pont)?',
                ans: 'A cím a végtelen távolságot, a térbeli elérhetetlenséget és a sóvárgást fejezi ki. A gondolatjelek/pontok az elmerengést, a megfoghatatlan vágyakozás befejezetlenségét és a sóhajt érzékeltetik.',
              },
              {
                id: 'refl_2',
                q: '2. Milyen életérzés jellemzi a verset? Hol válik ez egyértelművé?',
                ans: 'Az elérhetetlen szépség utáni vágyakozás és a lemondó elégikusság jellemzi. Ez az utolsó versszakban válik nyílttá: "Rabsorsom milyen mostoha, / hogy mind nem láthatom soha!".',
              },
              {
                id: 'refl_3',
                q: '3. Miért érezhetjük úgy, mintha mi magunk is látnánk, hallanánk a leírtakat?',
                ans: 'Mert Babits gazdagon halmozza az érzéki benyomásokat: színeket (bíbor, tarka, sötétkék, sötétzöld), hangokat (nyüzsgés, kürt, harang), és tapintható érzeteket (fülleteg levegő, harapni friss alpesi szél).',
              },
              {
                id: 'refl_4',
                q: '4. Miért nevezi Babits a sorsát "rabsorsnak"? Rab volt-e valójában?',
                ans: 'Nem volt fizikai börtönben. A "rabsors" lelki-szellemi bezártságot jelent: Erdélyben, a kisvárosi Fogarason tanítva magányosnak érezte magát, és anyagi helyzete sem tette lehetővé az európai utazásokat.',
              },
            ].map((item) => {
              const isRevealed = revealedReflections[item.id];

              return (
                <div
                  key={item.id}
                  className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-3"
                >
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    {item.q}
                  </h4>

                  <button
                    onClick={() => toggleReflection(item.id)}
                    className="text-xs font-semibold text-amber-800 hover:text-amber-950 underline decoration-amber-400 decoration-1 underline-offset-4 cursor-pointer"
                  >
                    {isRevealed ? 'Magyarázat elrejtése' : 'Mintamegoldás és magyarázat megtekintése'}
                  </button>

                  {isRevealed && (
                    <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-800 leading-relaxed animate-in fade-in">
                      <strong className="text-stone-900 block mb-1">Értelmezési kulcs:</strong>
                      {item.ans}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-stone-200">
        <button
          onClick={() => onNext('poem')}
          className="text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          ‹ Vissza: A vers világa
        </button>

        <button
          onClick={() => onNext('quiz')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább az 5. fázisra: Pontozott tudáskvíz</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
