import React, { useState } from 'react';
import { Flag, CheckCircle2, AlertTriangle, ArrowRight, Sparkles, Target } from 'lucide-react';
import { ArgumentationTab } from '../../types';

interface ConclusionStepProps {
  onNext: (tab: ArgumentationTab) => void;
}

export const ConclusionStep: React.FC<ConclusionStepProps> = ({ onNext }) => {
  const [selectedConclusion, setSelectedConclusion] = useState<number | null>(null);

  const conclusionOptions = [
    {
      id: 1,
      title: 'A hirtelen, semmitmondó zárlat',
      text: 'Hát ennyi volt a véleményem. Remélem mindenkinek tetszett, köszönöm a figyelmet.',
      isGood: false,
      critique: 'Hiba: Nem foglalja össze az érveket, nem von le semmilyen tanulságot, és szóbeli köszönéssel zárja az írásbeli esszét.',
    },
    {
      id: 2,
      title: 'Az elkalandozó zárlat új érvvel',
      text: 'Összességében szerintem nem jó a hétvégi házi feladat, és egyébként a menza ételei is nagyon rosszak az iskolában, azon is sürgősen változtatni kellene.',
      isGood: false,
      critique: 'Súlyos hiba: A befejezésben soha nem szabad vadonatúj témát vagy eddig nem említett panaszt bedobni!',
    },
    {
      id: 3,
      title: 'A meggyőző, előremutató mester-lezárás',
      text: 'Mindent egybevetve úgy gondolom, hogy a 8. osztályosok felvételi terhei mellett a hétvégi feladatok ésszerű korlátozása nem a lustaságot támogatja, hanem a kiegyensúlyozott fejlődést. Ha a diákok hétvégén feltöltődhetnek, hétfőn kipihenten és sokkal nagyobb hatékonysággal folytathatják a munkát. A kulcs a mértéktartásban és a kölcsönös bizalomban rejlik.',
      isGood: true,
      critique: 'Mesteri: Összegzi az érvek lényegét, megerősíti az álláspontot, és egy előremutató kompromisszumos gondolattal teszi kerekké a fogalmazást!',
    },
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>5. Lépés az érvelésben</span>
          <span aria-hidden="true">·</span>
          <span>8 perc</span>
          <span aria-hidden="true">·</span>
          <span>A hatásos lezárás</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Milyen a jó lezárás? Hogyan tegyük kerekké a fogalmazást?
        </h1>
        <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
          A jó befejezés az érvelés „koronája”. Nem engedi el bizonytalanul az olvasó kezét, hanem szintézist alkot: 
          összegzi a bizonyított érveket, és egy előremutató gondolattal vagy kompromisszummal zárja a gondolatmenetet.
        </p>
      </div>

      {/* 4 Golden Rules of the Conclusion */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase block">1. Szabály</span>
          <h3 className="font-serif text-lg font-bold text-stone-900">Szintézis és összegzés</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Ne másold le szó szerint az eddigi mondatokat! Új kifejezésekkel, tömören foglald össze a 2-3 legfőbb érvedet.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase block">2. Szabály</span>
          <h3 className="font-serif text-lg font-bold text-stone-900">A tételmondat megerősítése</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Csatold vissza a gondolatmenetet a bevezetéshez: a bizonyítás után most már megfellebbezhetetlen tényként tér vissza az alapgondolat.
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase block">3. Szabály</span>
          <h3 className="font-serif text-lg font-bold text-stone-900">Távlatnyitás vagy kompromisszum</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Mutass utat a jövőbe: mi lenne a legjobb közös megoldás? Mi az a tanulság, amit mindkét oldal magával vihet?
          </p>
        </div>

        <div className="bg-white border border-rose-200 rounded-xl p-5 shadow-2xs space-y-2">
          <span className="text-xs font-mono font-bold text-rose-800 uppercase block">4. Szabály (TILALOM!)</span>
          <h3 className="font-serif text-lg font-bold text-rose-950">NE hozz be új érvet!</h3>
          <p className="text-xs text-rose-900 leading-relaxed">
            Soha ne dobj be a befejezésben új szempontot vagy melléktémát, mert ott már nincs tered annak bizonyítására!
          </p>
        </div>
      </section>

      {/* Interactive Conclusion Comparator */}
      <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase text-amber-900 block mb-1">
            Zárás-teszt · Keresd a mestermunkát!
          </span>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Melyik lezárás méltó egy 8. osztályos érvelő fogalmazáshoz?
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Téma: <em>Hétvégi házi feladat a 8. osztályban</em>
          </p>
        </div>

        <div className="space-y-3">
          {conclusionOptions.map((opt, i) => {
            const isSelected = selectedConclusion === i;

            return (
              <div key={opt.id} className="space-y-2">
                <button
                  onClick={() => setSelectedConclusion(i)}
                  className={`w-full text-left p-4 rounded-xl border text-xs leading-relaxed transition-all cursor-pointer ${
                    isSelected
                      ? opt.isGood
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium'
                        : 'bg-rose-50 border-rose-400 text-rose-950'
                      : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <div className="font-serif text-sm font-bold text-stone-900 mb-1">
                    {opt.title}
                  </div>
                  <p className="italic font-serif text-stone-700">
                    "{opt.text}"
                  </p>
                </button>

                {isSelected && (
                  <div
                    className={`p-3 rounded-lg text-xs leading-snug animate-in fade-in flex items-start gap-2 ${
                      opt.isGood
                        ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-300'
                        : 'bg-amber-100/70 text-amber-900 border border-amber-300'
                    }`}
                  >
                    {opt.isGood ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    )}
                    <span>{opt.critique}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-stone-200">
        <button
          onClick={() => onNext('personal_opinion')}
          className="text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          ‹ Vissza: Személyes vélemény
        </button>

        <button
          onClick={() => onNext('workshop')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább a 6. lépésre: Érvelő Műhely (Írd meg a sajátodat!)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
