import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { INTRO_EXAMPLES } from '../../data/argumentationData';
import { ArgumentationTab } from '../../types';

interface IntroStepProps {
  onNext: (tab: ArgumentationTab) => void;
}

export const IntroStep: React.FC<IntroStepProps> = ({ onNext }) => {
  const [selectedExample, setSelectedExample] = useState<string>('intro_ideal');
  const [practiceHooks, setPracticeHooks] = useState<number | null>(null);
  const [practiceThesis, setPracticeThesis] = useState<number | null>(null);
  const [isPuzzleChecked, setIsPuzzleChecked] = useState(false);

  const hookOptions = [
    { text: 'A 21. században a technológia és az okoseszközök alapjaiban változtatták meg mindennapjainkat.', isGood: true },
    { text: 'Ma a fogalmazásomban arról fogok írni, hogy miért nem jó a mobilozás a suliban.', isGood: false },
    { text: 'Mindenki hülye, aki szerint a telefon jó dolog a szünetben!', isGood: false },
  ];

  const thesisOptions = [
    { text: 'Meglátásom szerint az iskolai szünetekben fenntartott eszközmentesség elengedhetetlen a valódi baráti kapcsolatok védelmében.', isGood: true },
    { text: 'Majd a végén kiderül, mit gondolok erről az egészről.', isGood: false },
    { text: 'Szerintem mindegy, ki mit csinál, nekem nem számít.', isGood: false },
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>1. Lépés az érvelésben</span>
          <span aria-hidden="true">·</span>
          <span>10 perc</span>
          <span aria-hidden="true">·</span>
          <span>A jó bevezetés és a tételmondat</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Milyen a jó bevezetés és kezdés?
        </h1>
        <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
          Az első bekezdés dönt el mindent: felkelti-e az olvasó kíváncsiságát, megjelöli-e a vita tárgyát, 
          és kimondja-e azt az alapállítást (a <strong>tételmondatot</strong>), amit a fogalmazás során bizonyítani fogunk.
        </p>
      </div>

      {/* 3 Pillars of a Great Introduction */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase block">1. Pillér</span>
          <h3 className="font-serif text-lg font-bold text-stone-900">Figyelemfelkeltés</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Egy meghökkentő kérdés, erős kép, ellentét vagy elgondolkodtató tény. Kerüld az unalmas „Arról fogok írni...” közhelyeket!
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase block">2. Pillér</span>
          <h3 className="font-serif text-lg font-bold text-stone-900">Témamegjelölés</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Világosan jelöld meg a problémát: mi a vita tárgya, és miért érinti ez a kérdés a diákokat vagy a társadalmat.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase block">3. Pillér</span>
          <h3 className="font-serif text-lg font-bold text-stone-900">A Tételmondat</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            A bevezetés legfontosabb záró mondata: a szerző egyértelmű, határozott állásfoglalása, amit a szöveg törzsében érvekkel fog alátámasztani.
          </p>
        </div>
      </section>

      {/* Introduction Comparator: Weak vs Aggressive vs Ideal */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-700" />
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Hasonlítsd össze a 3 kezdést ugyanahhoz a témához!
          </h2>
        </div>
        <p className="text-xs text-stone-600">
          Téma: <em>„Legyen-e okostelefon-használat a szünetekben az iskolában?”</em>
        </p>

        <div className="flex overflow-x-auto gap-2 border-b border-stone-200 pb-2 no-scrollbar">
          {INTRO_EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setSelectedExample(ex.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedExample === ex.id
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {ex.title}
            </button>
          ))}
        </div>

        {(() => {
          const ex = INTRO_EXAMPLES.find((e) => e.id === selectedExample) || INTRO_EXAMPLES[2];
          const isIdeal = ex.type === 'ideal';

          return (
            <div
              className={`p-6 rounded-2xl border-2 transition-all ${
                isIdeal
                  ? 'bg-emerald-50/50 border-emerald-300'
                  : ex.type === 'aggressive'
                  ? 'bg-rose-50/50 border-rose-300'
                  : 'bg-amber-50/50 border-amber-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700">
                  {ex.title}
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                    isIdeal ? 'bg-emerald-200 text-emerald-900' : 'bg-stone-200 text-stone-800'
                  }`}
                >
                  Értékelés: {ex.score} / 10 pont
                </span>
              </div>

              <blockquote className="font-serif text-lg text-stone-900 leading-relaxed mb-4 italic bg-white p-4 rounded-xl border border-stone-200">
                "{ex.text}"
              </blockquote>

              <div className="p-3 bg-white/80 rounded-xl border border-stone-200 text-xs text-stone-700 flex items-start gap-2">
                {isIdeal ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                )}
                <span>{ex.critique}</span>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Interactive Exercise: Build a Great Introduction */}
      <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase text-amber-900 block mb-1">
            Gyakorlati feladat · Próbáld ki magad!
          </span>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Állítsd össze a meggyőző bevezetést két lépésben!
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Válaszd ki a leghatásosabb figyelemfelkeltő felütést, majd a hozzá illő tételmondatot!
          </p>
        </div>

        {/* Step 1: Hook */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
            1. Lépés: Melyik a jó figyelemfelkeltő indítás?
          </span>
          <div className="space-y-2">
            {hookOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  setPracticeHooks(i);
                  setIsPuzzleChecked(false);
                }}
                className={`w-full text-left p-3 text-xs rounded-xl border transition-all cursor-pointer ${
                  practiceHooks === i
                    ? 'bg-amber-800 text-white font-medium border-amber-800 shadow-2xs'
                    : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Thesis */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
            2. Lépés: Melyik a határozott, világos tételmondat?
          </span>
          <div className="space-y-2">
            {thesisOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  setPracticeThesis(i);
                  setIsPuzzleChecked(false);
                }}
                className={`w-full text-left p-3 text-xs rounded-xl border transition-all cursor-pointer ${
                  practiceThesis === i
                    ? 'bg-amber-800 text-white font-medium border-amber-800 shadow-2xs'
                    : 'bg-white text-stone-800 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>

        {practiceHooks !== null && practiceThesis !== null && (
          <div>
            {!isPuzzleChecked ? (
              <button
                onClick={() => setIsPuzzleChecked(true)}
                className="px-5 py-2.5 bg-stone-900 text-white font-bold rounded-xl text-xs hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Összeállítás ellenőrzése
              </button>
            ) : (
              <div
                className={`p-4 rounded-xl border text-xs leading-relaxed ${
                  hookOptions[practiceHooks].isGood && thesisOptions[practiceThesis].isGood
                    ? 'bg-emerald-50 text-emerald-950 border-emerald-300'
                    : 'bg-amber-50 text-amber-950 border-amber-300'
                }`}
              >
                {hookOptions[practiceHooks].isGood && thesisOptions[practiceThesis].isGood ? (
                  <div className="space-y-2">
                    <strong className="block text-emerald-900 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-700" />
                      Tökéletes bevezetés!
                    </strong>
                    <p>
                      Sikeresen elkerülted a sablonos közhelyeket és a személyeskedést. A felütés felkeltette az érdeklődést, a tételmondat pedig kristálytisztán kijelölte a fogalmazásod irányát!
                    </p>
                  </div>
                ) : (
                  <p>
                    <strong>Nézd át újra:</strong> Valamelyik választásod túl közhelyes vagy bizonytalan volt. A jó bevezetésben nincs helye az unalmas "erről fogok írni" frázisoknak!
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Navigation */}
      <div className="flex justify-end pt-4">
        <button
          onClick={() => onNext('tip_model')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább a 2. lépésre: Az érv anatómiája (T-I-P)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
