import React, { useState } from 'react';
import { Swords, CheckCircle2, XCircle, RotateCcw, Award, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { DUEL_ROUNDS, DuelRound } from '../../data/writingStudioData';

export const ArgumentDuel: React.FC = () => {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<Record<number, number>>({});
  const [isDuelFinished, setIsDuelFinished] = useState(false);

  const round: DuelRound = DUEL_ROUNDS[currentRoundIndex];
  const currentChoiceId = selectedAnswers[round.id];
  const isRoundAnswered = !!currentChoiceId;

  const handleSelectOption = (option: (typeof round.options)[0]) => {
    if (isRoundAnswered) return;

    setSelectedAnswers((prev) => ({ ...prev, [round.id]: option.id }));
    setScores((prev) => ({ ...prev, [round.id]: option.points }));
  };

  const handleNextRound = () => {
    if (currentRoundIndex < DUEL_ROUNDS.length - 1) {
      setCurrentRoundIndex((prev) => prev + 1);
    } else {
      setIsDuelFinished(true);
    }
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = DUEL_ROUNDS.length * 10;

  const handleReset = () => {
    setCurrentRoundIndex(0);
    setSelectedAnswers({});
    setScores({});
    setIsDuelFinished(false);
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto py-6">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>Interaktív Gyakorlójáték</span>
          <span aria-hidden="true">·</span>
          <span>5 Menet</span>
          <span aria-hidden="true">·</span>
          <span>A cáfolat mestere</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2 flex items-center gap-3">
          <Swords className="w-8 h-8 text-amber-800" />
          <span>Érv-Párbaj: Döntsd meg az ellenfelet!</span>
        </h1>
        <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
          Az érvelés csúcsa a cáfolat! Az ellenfél bedob egy provokatív, túlzó vagy téves állítást. 
          Válaszd ki a 3 válasz közül a leginkább meggyőző, kulturált és logikus ellenérvet!
        </p>
      </div>

      {!isDuelFinished ? (
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs font-medium bg-stone-100 p-3 rounded-xl border border-stone-200">
            <span className="font-mono text-stone-800 font-bold">
              {currentRoundIndex + 1}. Menet / {DUEL_ROUNDS.length}
            </span>
            <span className="text-amber-900 font-bold">
              Jelenlegi pontszám: {totalScore} pont
            </span>
          </div>

          {/* Duel Arena Card */}
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xs">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-800 block mb-1">
                Téma: {round.topicTitle}
              </span>
              <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1">
                <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block">
                  Az ellenfél támadó állítása:
                </span>
                <p className="font-serif text-lg text-rose-950 italic">
                  {round.opponentStatement}
                </p>
              </div>
            </div>

            {/* Response Options */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                Mivel cáfolod meg leginkább? (Kattints a választásodra):
              </span>

              {round.options.map((opt) => {
                const isSelected = currentChoiceId === opt.id;

                let optClass = 'bg-stone-50 border-stone-200 hover:border-stone-400 hover:bg-stone-100/70 text-stone-800';
                if (isRoundAnswered) {
                  if (opt.isBest) {
                    optClass = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-medium ring-1 ring-emerald-400';
                  } else if (isSelected) {
                    optClass = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    optClass = 'bg-stone-50/50 border-stone-200 text-stone-400';
                  }
                }

                return (
                  <div key={opt.id} className="space-y-2">
                    <button
                      disabled={isRoundAnswered}
                      onClick={() => handleSelectOption(opt)}
                      className={`w-full text-left p-4 rounded-xl border text-xs leading-relaxed transition-all cursor-pointer ${optClass}`}
                    >
                      {opt.text}
                    </button>

                    {isRoundAnswered && isSelected && (
                      <div
                        className={`p-3 rounded-lg text-xs flex items-start gap-2 leading-snug animate-in fade-in ${
                          opt.isBest
                            ? 'bg-emerald-100/80 text-emerald-900 border border-emerald-300'
                            : 'bg-amber-100/80 text-amber-900 border border-amber-300'
                        }`}
                      >
                        {opt.isBest ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <strong>{opt.isBest ? 'Találat! (+10 pont)' : `Csak ${opt.points} pont:`}</strong>{' '}
                          {opt.feedback}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Next Round Button */}
            {isRoundAnswered && (
              <div className="flex justify-end pt-4 border-t border-stone-100">
                <button
                  onClick={handleNextRound}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-stone-900 text-white font-bold text-xs rounded-xl hover:bg-stone-800 transition-colors cursor-pointer shadow-xs"
                >
                  <span>{currentRoundIndex < DUEL_ROUNDS.length - 1 ? 'Következő menet' : 'Párbaj összesítése'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* DUEL FINISHED */
        <div className="bg-white border-2 border-amber-300 rounded-2xl p-6 md:p-8 space-y-6 shadow-sm text-center">
          <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block mb-1">
              Párbaj Eredménye
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              {totalScore} / {maxScore} pont ({Math.round((totalScore / maxScore) * 100)}%)
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
              {totalScore >= 40
                ? 'Kiváló vitapartner vagy! Felismered a demagógiát és a személyeskedést, és szilárd tényekkel, kulturáltan tudsz cáfolni.'
                : 'Szép próbálkozás! Gyakorold még a mértéktartó, de határozott ellenérvelést az Írásműhelyben.'}
            </p>
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-5 py-2.5 bg-stone-900 text-white text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Új párbaj indítása</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
