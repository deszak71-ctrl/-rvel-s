import React, { useState } from 'react';
import { MessageSquare, CheckCircle2, ArrowRight, Sparkles, BookOpen, HeartHandshake } from 'lucide-react';
import { STYLE_TRANSFORM_TASKS } from '../../data/argumentationData';
import { ArgumentationTab } from '../../types';

interface PersonalOpinionStepProps {
  onNext: (tab: ArgumentationTab) => void;
}

export const PersonalOpinionStep: React.FC<PersonalOpinionStepProps> = ({ onNext }) => {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const [chosenOption, setChosenOption] = useState<number | null>(null);

  const activeTask = STYLE_TRANSFORM_TASKS[selectedTaskIndex];

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>4. Lépés az érvelésben</span>
          <span aria-hidden="true">·</span>
          <span>8 perc</span>
          <span aria-hidden="true">·</span>
          <span>Kifejezésmód és vitakultúra</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Hogyan fogalmazzunk személyes véleményt?
        </h1>
        <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
          Az érvelés nem vita vagy sértegetés. A meggyőző diák úgy tud határozott álláspontot képviselni, 
          hogy közben tiszteletben tartja a másik felet, és választékos, kifejező stílust használ.
        </p>
      </div>

      {/* The 4 Linguistic Toolsets */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <MessageSquare className="w-5 h-5" />
            <h3 className="font-serif text-lg font-bold text-stone-900">
              1. A saját álláspont bevezetése
            </h3>
          </div>
          <p className="text-xs text-stone-600">
            Kerüld az unalmas „szerintem”-et! Helyette válaszd ezeket a kifejezéseket:
          </p>
          <ul className="text-xs text-stone-800 space-y-1.5 font-medium">
            <li className="bg-stone-50 p-2 rounded-lg border border-stone-200">„Meglátásom szerint...”</li>
            <li className="bg-stone-50 p-2 rounded-lg border border-stone-200">„Úgy vélem, hogy...”</li>
            <li className="bg-stone-50 p-2 rounded-lg border border-stone-200">„Személyes tapasztalataim azt támasztják alá...”</li>
            <li className="bg-stone-50 p-2 rounded-lg border border-stone-200">„Mélyen egyetértek azzal a gondolattal, hogy...”</li>
          </ul>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-indigo-800">
            <HeartHandshake className="w-5 h-5" />
            <h3 className="font-serif text-lg font-bold text-stone-900">
              2. A partner nézőpontjának elismerése
            </h3>
          </div>
          <p className="text-xs text-stone-600">
            A legérettebb érvelői fordulatok, amelyek tiszteletet mutatnak:
          </p>
          <ul className="text-xs text-stone-800 space-y-1.5 font-medium">
            <li className="bg-stone-50 p-2 rounded-lg border border-stone-200">„Bár megértem azokat, akik úgy gondolják...”</li>
            <li className="bg-stone-50 p-2 rounded-lg border border-stone-200">„Kétségkívül van igazság abban a felvetésben, hogy...”</li>
            <li className="bg-stone-50 p-2 rounded-lg border border-stone-200">„Nem hagyható figyelmen kívül az az ellenérv sem, miszerint...”</li>
            <li className="bg-stone-50 p-2 rounded-lg border border-stone-200">„Bár első pillantásra megalapozottnak tűnik az aggály...”</li>
          </ul>
        </div>
      </section>

      {/* Interactive Style Transformation Lab */}
      <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase text-amber-900 block mb-1">
            Stílus-átalakító Labor
          </span>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Alakítsd át a gyenge vagy indulatos mondatot meggyőző érveléssé!
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Válaszd ki a 3 átirat közül azt, amelyik leginkább megfelel az igényes 8. osztályos érvelésnek!
          </p>
        </div>

        {/* Task Selector */}
        <div className="flex gap-2">
          {STYLE_TRANSFORM_TASKS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTaskIndex(idx);
                setChosenOption(null);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                selectedTaskIndex === idx
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              {idx + 1}. Eset
            </button>
          ))}
        </div>

        {/* Original flawed sentence */}
        <div className="p-4 bg-white border border-rose-200 rounded-xl space-y-1">
          <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block">
            Eredeti (hibás / igénytelen) mondat:
          </span>
          <p className="font-serif text-lg text-rose-950 italic">
            {activeTask.original}
          </p>
          <span className="text-[11px] text-stone-500 block pt-1">
            Hiba jellege: {activeTask.flaw}
          </span>
        </div>

        {/* Reformulation options */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
            Melyik átirat a leghatásosabb és legkulturáltabb?
          </span>

          {activeTask.options.map((opt, i) => {
            const isSelected = chosenOption === i;

            return (
              <div key={i} className="space-y-2">
                <button
                  onClick={() => setChosenOption(i)}
                  className={`w-full text-left p-4 rounded-xl border text-xs leading-relaxed transition-all cursor-pointer ${
                    isSelected
                      ? opt.isBest
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium'
                        : 'bg-rose-50 border-rose-400 text-rose-950'
                      : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  {opt.text}
                </button>

                {isSelected && (
                  <div
                    className={`p-3 rounded-lg text-xs leading-snug animate-in fade-in ${
                      opt.isBest
                        ? 'bg-emerald-100/70 text-emerald-900 border border-emerald-300'
                        : 'bg-amber-100/70 text-amber-900 border border-amber-300'
                    }`}
                  >
                    <strong>{opt.isBest ? 'Tökéletes megfogalmazás!' : 'Nem ideális:'}</strong> {opt.feedback}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Part 3: Vitakultúra 5 aranyszabálya */}
      <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-2xs">
        <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-700" />
          <span>A felnőtt vitakultúra 5 aranyszabálya</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong>1. A gondolatot bíráld, ne az embert!</strong> Soha ne gúnyold a vitapartneredet.
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong>2. Ne általánosíts!</strong> Használj árnyalt szavakat: „gyakran”, „sokan”, a „mindenki” helyett.
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong>3. Hallgasd végig a másikat!</strong> Az ellenérv megértése nélkül nem tudsz érdemben cáfolni.
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong>4. Támaszkodj tényekre!</strong> A puszta hangerő nem helyettesíti a logikus bizonyítást.
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-stone-200">
        <button
          onClick={() => onNext('pro_contra')}
          className="text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          ‹ Vissza: Pro és kontra
        </button>

        <button
          onClick={() => onNext('conclusion')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább az 5. lépésre: A hatásos lezárás</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
