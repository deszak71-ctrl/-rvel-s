import React, { useState } from 'react';
import { Layers, CheckCircle2, AlertOctagon, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { TIP_PUZZLES, FALLACY_CARDS } from '../../data/argumentationData';
import { ArgumentationTab } from '../../types';

interface TIPModelStepProps {
  onNext: (tab: ArgumentationTab) => void;
}

export const TIPModelStep: React.FC<TIPModelStepProps> = ({ onNext }) => {
  // Puzzle state
  const activePuzzle = TIP_PUZZLES[0];
  const [selectedThesis, setSelectedThesis] = useState<number | null>(null);
  const [selectedReasoning, setSelectedReasoning] = useState<number | null>(null);
  const [selectedExample, setSelectedExample] = useState<number | null>(null);
  const [isPuzzleEvaluated, setIsPuzzleEvaluated] = useState(false);

  // Fallacy state
  const [activeFallacyId, setActiveFallacyId] = useState<string>('f1');

  const isPuzzleCorrect =
    selectedThesis === activePuzzle.correctCombination.thesisIndex &&
    selectedReasoning === activePuzzle.correctCombination.reasoningIndex &&
    selectedExample === activePuzzle.correctCombination.exampleIndex;

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>2. Lépés az érvelésben</span>
          <span aria-hidden="true">·</span>
          <span>12 perc</span>
          <span aria-hidden="true">·</span>
          <span>Az érv anatómiája</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Hogyan adjunk jó érveket indoklással? (A T-I-P modell)
        </h1>
        <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
          A puszta vélemény („szerintem rossz”) még nem érv! A meggyőző érv egy precíz géphez hasonlít, 
          amely három összekapcsolódó fogaskerékből áll: <strong>Tétel, Indoklás és Példa</strong>.
        </p>
      </div>

      {/* The 3 components of TIP */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-amber-300 rounded-2xl p-6 shadow-2xs space-y-3 relative overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-amber-800 text-white font-serif font-bold text-lg flex items-center justify-center">
            T
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Tétel (Mit állítok?)
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Egyetlen világos, egyértelmű kijelentő mondat. Nem tartalmaz felesleges mellébeszélést, hanem rögzíti a vizsgált állítást.
          </p>
          <div className="text-[11px] bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-amber-950 italic">
            „A klasszikus regények olvasása gazdagítja a szókincset és az empátiát.”
          </div>
        </div>

        <div className="bg-white border-2 border-indigo-300 rounded-2xl p-6 shadow-2xs space-y-3 relative overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-indigo-800 text-white font-serif font-bold text-lg flex items-center justify-center">
            I
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Indoklás (Miért?)
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            A logikai ok-okozati magyarázat. Tipikus kötőszava a <em>„mert...”</em>, <em>„mivel...”</em>, <em>„ugyanis...”</em>. Megválaszolja, miért igaz a tétel.
          </p>
          <div className="text-[11px] bg-indigo-50 p-2.5 rounded-lg border border-indigo-200 text-indigo-950 italic">
            „...mert a szereplők vívódásait követve megértjük a tetteik mögötti emberi indítékokat.”
          </div>
        </div>

        <div className="bg-white border-2 border-emerald-300 rounded-2xl p-6 shadow-2xs space-y-3 relative overflow-hidden">
          <div className="w-8 h-8 rounded-full bg-emerald-800 text-white font-serif font-bold text-lg flex items-center justify-center">
            P
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Példa (Bizonyíték)
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Életszerű, konkrét bizonyíték a mindennapokból, kutatásokból, történelemből vagy irodalomból.
          </p>
          <div className="text-[11px] bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 text-emerald-950 italic">
            „Például Jókai műveiben olyan ritka kifejezésekkel találkozunk, amelyek árnyalják a gondolkodást.”
          </div>
        </div>
      </section>

      {/* Interactive TIP Puzzle */}
      <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase text-amber-900 block mb-1">
            Interaktív Érv-építő Puzzle
          </span>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Építsd fel a hibátlan érvet a 3 darabból!
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Téma: <strong>{activePuzzle.topic}</strong>. Keresd meg a precíz tételt, az igazi logikai indoklást és a konkrét példát!
          </p>
        </div>

        {/* Step 1: Choose Thesis */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-amber-800">
            1. Válassz Tételt (T):
          </span>
          <div className="space-y-1.5">
            {activePuzzle.theses.map((t, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedThesis(i);
                  setIsPuzzleEvaluated(false);
                }}
                className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                  selectedThesis === i
                    ? 'bg-amber-800 text-white font-medium border-amber-800 shadow-2xs'
                    : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Choose Reasoning */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-indigo-800">
            2. Válassz Indoklást (I):
          </span>
          <div className="space-y-1.5">
            {activePuzzle.reasonings.map((r, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedReasoning(i);
                  setIsPuzzleEvaluated(false);
                }}
                className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                  selectedReasoning === i
                    ? 'bg-indigo-800 text-white font-medium border-indigo-800 shadow-2xs'
                    : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Choose Example */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-emerald-800">
            3. Válassz Példát (P):
          </span>
          <div className="space-y-1.5">
            {activePuzzle.examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedExample(i);
                  setIsPuzzleEvaluated(false);
                }}
                className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                  selectedExample === i
                    ? 'bg-emerald-800 text-white font-medium border-emerald-800 shadow-2xs'
                    : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        {selectedThesis !== null && selectedReasoning !== null && selectedExample !== null && (
          <div>
            {!isPuzzleEvaluated ? (
              <button
                onClick={() => setIsPuzzleEvaluated(true)}
                className="px-5 py-2.5 bg-stone-900 text-white font-bold rounded-xl text-xs hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Érv ellenőrzése
              </button>
            ) : (
              <div
                className={`p-4 rounded-xl border text-xs leading-relaxed ${
                  isPuzzleCorrect
                    ? 'bg-emerald-50 text-emerald-950 border-emerald-300'
                    : 'bg-amber-50 text-amber-950 border-amber-300'
                }`}
              >
                {isPuzzleCorrect ? (
                  <div className="space-y-2">
                    <strong className="block text-emerald-900 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-700" />
                      Briliáns érvelés!
                    </strong>
                    <p>
                      Összeállt a tökéletes T-I-P lánc: <em>„{activePuzzle.theses[selectedThesis]} {activePuzzle.reasonings[selectedReasoning]} {activePuzzle.examples[selectedExample]}”</em>
                    </p>
                    <p className="text-[11px] text-emerald-800 pt-1">
                      {activePuzzle.explanation}
                    </p>
                  </div>
                ) : (
                  <p>
                    <strong>Még nem az igazi:</strong> Valamelyik darabka hibás (nem valódi indoklás vagy komolytalan példa). Próbálj olyan elemeket választani, amelyek tényleges logikai bizonyítékként szolgálnak!
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Part 3: Érvelési Bakik / Hiba-vadász */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-rose-800 mb-1">
            <AlertOctagon className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              Veszélyzóna
            </span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            A 4 leggyakoribb érvelési hiba (Ne kövesd el őket!)
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Ezek azok a hibák, amelyekért a felvételin és a fogalmazásban azonnal pontlevonás jár.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
          {FALLACY_CARDS.map((card) => (
            <button
              key={card.id}
              onClick={() => setActiveFallacyId(card.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeFallacyId === card.id
                  ? 'bg-rose-800 text-white font-semibold'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {card.name}
            </button>
          ))}
        </div>

        {(() => {
          const card = FALLACY_CARDS.find((c) => c.id === activeFallacyId) || FALLACY_CARDS[0];

          return (
            <div className="bg-white border-2 border-rose-200 rounded-2xl p-6 shadow-2xs space-y-4">
              <h3 className="font-serif text-xl font-bold text-rose-950">
                {card.name}
              </h3>

              <div className="bg-rose-50/70 border border-rose-200 p-4 rounded-xl space-y-1">
                <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block">
                  Példa a rossz érvelésre:
                </span>
                <p className="font-serif text-base text-rose-950 italic">
                  {card.example}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <strong className="text-stone-900 block mb-1">Miért súlyos hiba?</strong>
                  <p className="text-stone-600 leading-relaxed">{card.whyWrong}</p>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <strong className="text-emerald-950 block mb-1">Hogyan javítsd ki kulturáltan?</strong>
                  <p className="text-emerald-900 leading-relaxed">{card.howToFix}</p>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-stone-200">
        <button
          onClick={() => onNext('intro')}
          className="text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          ‹ Vissza: A jó bevezetés
        </button>

        <button
          onClick={() => onNext('pro_contra')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább a 3. lépésre: Pro és Kontra (Mérleg)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
