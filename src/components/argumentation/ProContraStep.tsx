import React, { useState } from 'react';
import { Scale, CheckCircle2, ArrowRight, Sparkles, RefreshCw, Layers } from 'lucide-react';
import { ARGUMENT_TOPICS } from '../../data/argumentationData';
import { ArgumentationTab } from '../../types';

interface ProContraStepProps {
  onNext: (tab: ArgumentationTab) => void;
}

export const ProContraStep: React.FC<ProContraStepProps> = ({ onNext }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('travel_experience');
  const currentTopic = ARGUMENT_TOPICS.find((t) => t.id === selectedTopicId) || ARGUMENT_TOPICS[0];

  // Balance scale classification game:
  const [classifiedCards, setClassifiedCards] = useState<Record<number, 'pro' | 'contra'>>({});

  const cardsToClassify = [
    { id: 1, text: 'A könyvek olvasása révén bárki ingyen vagy csekély pénzből bejárhatja a világot.', isPro: true },
    { id: 2, text: 'A helyi ételek ízét és az óceán sós illatát semmilyen virtuális leírás nem tudja visszaadni.', isPro: false },
    { id: 3, text: 'A környezetvédelmi szempontok miatt a felesleges repülőutak csökkentése felelős magatartás.', isPro: true },
    { id: 4, text: 'Az önálló idegen nyelvi tájékozódás egy másik országban felbecsülhetetlen önbizalmat ad a fiataloknak.', isPro: false },
  ];

  const handleClassify = (cardId: number, type: 'pro' | 'contra') => {
    setClassifiedCards((prev) => ({ ...prev, [cardId]: type }));
  };

  const resetGame = () => {
    setClassifiedCards({});
  };

  const proCount = Object.values(classifiedCards).filter((v) => v === 'pro').length;
  const contraCount = Object.values(classifiedCards).filter((v) => v === 'contra').length;
  const tiltDeg = (contraCount - proCount) * 4; // Visual tilt angle

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>3. Lépés az érvelésben</span>
          <span aria-hidden="true">·</span>
          <span>12 perc</span>
          <span aria-hidden="true">·</span>
          <span>Pro, kontra és a cáfolat</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Mi az a PRO és KONTRA érv? A mérlegelés művészete
        </h1>
        <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
          Az érett érvelő nem csak a saját igazát hajtogatja: ismeri és megérti az ellenérveket is. 
          A valódi meggyőzés kulcsa a <strong>cáfolat</strong>: elismerni a másik fél aggályát, majd megmutatni, 
          miért a mi álláspontunk a megalapozottabb.
        </p>
      </div>

      {/* Conceptual Split: Pro vs Contra vs Refutation */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-800 uppercase block">Pro Érv</span>
          <h3 className="font-serif text-xl font-bold text-emerald-950">A mellette szóló érv</h3>
          <p className="text-xs text-emerald-900 leading-relaxed">
            Latinul a <em>pro</em> jelentése: „-ért, valaminek a javára”. Olyan érvek, amelyek alátámasztják és bizonyítják a saját tételünket.
          </p>
        </div>

        <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-rose-800 uppercase block">Kontra Érv</span>
          <h3 className="font-serif text-xl font-bold text-rose-950">Az ellene szóló érv</h3>
          <p className="text-xs text-rose-900 leading-relaxed">
            Latinul a <em>contra</em> jelentése: „ellen”. Az ellenfél vagy az ellenkező álláspont megfontolása, amely rámutat a kockázatokra.
          </p>
        </div>

        <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase block">Cáfolat</span>
          <h3 className="font-serif text-xl font-bold text-amber-950">A döntő lépés</h3>
          <p className="text-xs text-amber-900 leading-relaxed">
            Nem söpörjük le az ellenérvet, hanem elegánsan felülbíráljuk: <em>„Bár elismerem, hogy..., mégis figyelembe kell venni, hogy...”</em>
          </p>
        </div>
      </section>

      {/* Interactive Scale Game */}
      <section className="bg-white border-2 border-stone-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-amber-800 uppercase block mb-1">
              Interaktív Érvmérleg Játék
            </span>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Helyezd az állításokat a megfelelő serpenyőbe!
            </h2>
            <p className="text-xs text-stone-600 mt-0.5">
              Téma: <em>Képzeletbeli utazás (Babits verse kapcsán) vagy valódi világjárás?</em>
            </p>
          </div>

          <button
            onClick={resetGame}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer self-start sm:self-center"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Mérleg kiürítése</span>
          </button>
        </div>

        {/* Visual Balance Scale Representation */}
        <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 flex flex-col items-center justify-center">
          <div className="text-xs font-mono text-stone-500 mb-2">
            Mérleg állása: {proCount} PRO érv vs. {contraCount} KONTRA érv
          </div>

          {/* Scale beam with dynamic CSS rotation */}
          <div className="w-64 sm:w-80 h-3 bg-stone-700 rounded-full relative transition-transform duration-500 ease-out flex items-center justify-between px-2"
               style={{ transform: `rotate(${tiltDeg}deg)` }}>
            {/* Center Pivot */}
            <div className="absolute left-1/2 -top-3 -translate-x-1/2 w-6 h-6 bg-amber-600 rounded-full border-2 border-white shadow-xs" />

            {/* Left Pan (PRO) */}
            <div className="w-16 h-12 bg-emerald-100 border-2 border-emerald-500 rounded-b-xl flex items-center justify-center text-xs font-bold text-emerald-900 shadow-2xs">
              PRO ({proCount})
            </div>

            {/* Right Pan (KONTRA) */}
            <div className="w-16 h-12 bg-rose-100 border-2 border-rose-500 rounded-b-xl flex items-center justify-center text-xs font-bold text-rose-900 shadow-2xs">
              KONTRA ({contraCount})
            </div>
          </div>
          {/* Base stand */}
          <div className="w-4 h-12 bg-stone-500 mt-2" />
          <div className="w-24 h-3 bg-stone-700 rounded-full" />
        </div>

        {/* The Cards to classify */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
            Döntsd el mindegyik kártyáról: PRO (képzelet/könyvek mellett) vagy KONTRA (személyes utazás mellett)?
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cardsToClassify.map((card) => {
              const choice = classifiedCards[card.id];
              const isClassified = !!choice;
              const isCorrect = isClassified && ((choice === 'pro' && card.isPro) || (choice === 'contra' && !card.isPro));

              return (
                <div
                  key={card.id}
                  className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    isClassified
                      ? isCorrect
                        ? 'bg-emerald-50/80 border-emerald-300'
                        : 'bg-rose-50/80 border-rose-300'
                      : 'bg-white border-stone-200 shadow-2xs'
                  }`}
                >
                  <p className="text-xs text-stone-800 leading-relaxed mb-3">
                    "{card.text}"
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      disabled={isClassified}
                      onClick={() => handleClassify(card.id, 'pro')}
                      className={`flex-1 py-1.5 text-xs rounded-lg border font-semibold transition-all cursor-pointer ${
                        choice === 'pro'
                          ? 'bg-emerald-700 text-white border-emerald-700'
                          : 'bg-stone-50 text-emerald-800 border-stone-200 hover:bg-emerald-100'
                      }`}
                    >
                      + PRO érv
                    </button>
                    <button
                      disabled={isClassified}
                      onClick={() => handleClassify(card.id, 'contra')}
                      className={`flex-1 py-1.5 text-xs rounded-lg border font-semibold transition-all cursor-pointer ${
                        choice === 'contra'
                          ? 'bg-rose-700 text-white border-rose-700'
                          : 'bg-stone-50 text-rose-800 border-stone-200 hover:bg-rose-100'
                      }`}
                    >
                      - KONTRA érv
                    </button>
                  </div>

                  {isClassified && (
                    <div className="text-[11px] mt-2 pt-2 border-t border-stone-200/60 font-medium">
                      {isCorrect ? (
                        <span className="text-emerald-800">✓ Helyes besorolás!</span>
                      ) : (
                        <span className="text-rose-800">✗ Nem pontos! Ez a megfontolás a másik oldalt támogatja.</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Part 3: A Cáfolat Mesterfogása (How to refute) */}
      <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-700" />
          <span>A cáfolat aranyszabálya: Így győzd meg a kételkedőt!</span>
        </h3>
        <p className="text-xs text-stone-700 leading-relaxed">
          Amikor érvelő fogalmazást írsz, szánj egy önálló bekezdést az ellenérv bemutatására és cáfolatára. 
          Használd a <strong>Kétlépéses Cáfolati Képletet</strong>:
        </p>

        <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-3 font-serif text-sm">
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-stone-800 leading-relaxed">
            <span className="font-sans text-[11px] font-bold text-amber-800 uppercase block mb-1">
              Mintamondat Babits kapcsán:
            </span>
            <em>
              „<strong>Bár kétségtelen</strong>, hogy a személyes utazás során szerzett tapasztalatok pótolhatatlanok, 
              <strong>mégis meg kell fontolnunk</strong>, hogy a könyvek és a képzelet ereje révén Babits olyan költői állóképeket tudott megfesteni, 
              amelyek több mint száz év múltán is mélyebben hatnak az olvasóra, mint egy egyszerű fényképes úti beszámoló.”
            </em>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-stone-200">
        <button
          onClick={() => onNext('tip_model')}
          className="text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          ‹ Vissza: Az érv anatómiája
        </button>

        <button
          onClick={() => onNext('personal_opinion')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább a 4. lépésre: Személyes vélemény és vitakultúra</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
