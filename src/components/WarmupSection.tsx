import React, { useState } from 'react';
import { Compass, CheckCircle2, AlertCircle, ArrowRight, Lightbulb, MapPin, Sparkles } from 'lucide-react';
import { WARMUP_SCENARIOS } from '../data/lessonData';
import { LessonTab } from '../types';

interface WarmupSectionProps {
  onNext: (tab: LessonTab) => void;
  isTeacherMode: boolean;
}

export const WarmupSection: React.FC<WarmupSectionProps> = ({ onNext, isTeacherMode }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>({
    post_1: null,
    post_2: null,
    post_3: null,
  });

  const [studentDreamTarget, setStudentDreamTarget] = useState('');
  const [studentDreamReason, setStudentDreamReason] = useState<string | null>(null);
  const [isSharedSubmitted, setIsSharedSubmitted] = useState(false);

  const handleSelectAnswer = (scenarioId: string, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [scenarioId]: optionIndex }));
  };

  const answeredCount = Object.values(selectedAnswers).filter((v) => v !== null).length;
  const correctCount = WARMUP_SCENARIOS.filter(
    (s) => selectedAnswers[s.id] === s.correctIndex
  ).length;

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>1. Fázis</span>
          <span aria-hidden="true">·</span>
          <span>5–7 perc</span>
          <span aria-hidden="true">·</span>
          <span>Játékos ráhangolódás</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-3">
          Képzeletbeli utazás az 1900-as évek elején
        </h1>
        <p className="text-base text-stone-600 leading-relaxed max-w-3xl">
          Hogyan láthattak világot az emberek több mint száz évvel ezelőtt, amikor még nem létezett internet, 
          turista repülőjárat vagy okostelefon? A távoli tájak varázsát könyvek, festmények és a frissen elterjedő 
          <strong> színezett képeslapok</strong> hozták el a szobákba.
        </p>

        {isTeacherMode && (
          <div className="mt-4 p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900">
            <strong>Módszertani cél:</strong> Az érzelmi bevonódás megteremtése. A diákok felismerik a virtuális/képzeletbeli utazás és a valóság kontrasztját, amely Babits költeményének magva.
          </div>
        )}
      </div>

      {/* Part 1: Képeslap-nyomozó játék */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-700" />
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Képeslap-nyomozó: Hová érkezett a küldemény?
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            Megoldva: {answeredCount} / {WARMUP_SCENARIOS.length}
          </span>
        </div>
        <p className="text-sm text-stone-600">
          Olvasd el a korabeli leírások nyomait! Melyik európai tájat vagy országot villantják fel a jellegzetes érzékletes részletek?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WARMUP_SCENARIOS.map((scenario, index) => {
            const selected = selectedAnswers[scenario.id];
            const isAnswered = selected !== null && selected !== undefined;
            const isCorrect = selected === scenario.correctIndex;

            return (
              <div
                key={scenario.id}
                className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between shadow-2xs hover:border-stone-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100">
                    <span className="text-xs font-mono font-medium text-stone-600">
                      #{index + 1}. Képeslap
                    </span>
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>

                  <ul className="space-y-2 mb-4 text-xs text-stone-700 leading-relaxed">
                    {scenario.clues.map((clue, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-700 font-bold shrink-0">›</span>
                        <span>{clue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="space-y-2 mb-3">
                    {scenario.options.map((opt, optIdx) => {
                      let buttonStyle = 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200';
                      if (isAnswered) {
                        if (optIdx === scenario.correctIndex) {
                          buttonStyle = 'bg-emerald-50 text-emerald-900 border-emerald-300 font-semibold';
                        } else if (optIdx === selected) {
                          buttonStyle = 'bg-rose-50 text-rose-900 border-rose-300 line-through';
                        } else {
                          buttonStyle = 'opacity-50 border-stone-200';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isAnswered}
                          onClick={() => handleSelectAnswer(scenario.id, optIdx)}
                          className={`w-full text-left px-3 py-2 text-xs rounded-lg border transition-all cursor-pointer ${buttonStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div
                      className={`p-2.5 rounded-lg text-xs leading-snug flex items-start gap-1.5 ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <strong>{isCorrect ? 'Pontos felismerés!' : 'Nem egészen:'}</strong>{' '}
                        {scenario.explanation}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {answeredCount === WARMUP_SCENARIOS.length && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-stone-800 text-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-700 shrink-0" />
              <span>
                Kiváló nyomozói munka! {correctCount} / {WARMUP_SCENARIOS.length} helyes válasz. Pontosan ezekkel a motívumokkal találkozunk Babits versében!
              </span>
            </div>
          </div>
        )}
      </section>

      {/* Part 2: Gondolkodtató korrajz – A Képeslapok világa */}
      <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center gap-2 text-amber-800">
          <Lightbulb className="w-5 h-5" />
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Tudtad? A postai képeslap volt a kor "Instagramja"
          </h3>
        </div>
        <p className="text-sm text-stone-700 leading-relaxed">
          Az 1890-es évektől robbanásszerűen népszerűvé váló színes képeslapok forradalmasították a világ megismerését. 
          A tankönyv megemlíti: <em>„Babits versében a nyolc ország leírása szinte nyolc színes képeslapként jelenik meg előttünk.”</em> 
          A költő a vers megírásakor (1907 körül) a valóságban még nem járhatott ezekben az országokban: 
          a leírások a könyvtárak albumaiból, festményekből és postán kapott képeslapokból táplálkoztak.
        </p>

        {/* Gondolatébresztő interakció */}
        <div className="mt-4 pt-4 border-t border-stone-200 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600">
            Saját képzeletbeli utazásod – Te hová vágynál leginkább?
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Pl. Izland, Japán hegyei, Firenza..."
              value={studentDreamTarget}
              onChange={(e) => setStudentDreamTarget(e.target.value)}
              className="px-3.5 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            />
            <div className="flex gap-2">
              {['A természeti csodák miatt', 'A történelmi emlékek miatt', 'A nyüzsgő kultúra miatt'].map((reason) => (
                <button
                  key={reason}
                  onClick={() => setStudentDreamReason(reason)}
                  className={`flex-1 text-[11px] px-2 py-2 rounded-lg border transition-all cursor-pointer ${
                    studentDreamReason === reason
                      ? 'bg-amber-800 text-white border-amber-800 font-semibold'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  {reason}
                </button>
              ))}
            </div>
          </div>

          {studentDreamTarget && studentDreamReason && !isSharedSubmitted && (
            <button
              onClick={() => setIsSharedSubmitted(true)}
              className="mt-2 px-4 py-2 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Képzeletbeli képeslap rögzítése
            </button>
          )}

          {isSharedSubmitted && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 flex items-center justify-between">
              <span>
                ✓ Rögzítve: Képzeletben útra keltél ide: <strong>{studentDreamTarget}</strong> ({studentDreamReason}). Most nézzük meg, hová és miért vágyott Babits Mihály!
              </span>
            </div>
          )}
        </div>
      </section>

      {/* CTA to Next Stage */}
      <div className="flex justify-end pt-4">
        <button
          onClick={() => onNext('bio')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább a 2. fázisra: Babits Mihály életrajza</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
