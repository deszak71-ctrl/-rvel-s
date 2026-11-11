import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Award, Lightbulb, ChevronRight, ChevronLeft, ArrowRight, Printer } from 'lucide-react';
import { ARGUMENTATION_QUIZ } from '../../data/argumentationData';
import { ArgumentationTab } from '../../types';

interface ArgumentQuizProps {
  onRestart: (tab: ArgumentationTab) => void;
}

export const ArgumentQuiz: React.FC<ArgumentQuizProps> = ({ onRestart }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const totalQuestions = ARGUMENTATION_QUIZ.length;
  const currentQuestion = ARGUMENTATION_QUIZ[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const answeredCount = Object.keys(selectedAnswers).length;

  const calculateScore = () => {
    let score = 0;
    ARGUMENTATION_QUIZ.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const percentage = Math.round((score / totalQuestions) * 100);

  const getGrade = (pts: number) => {
    if (pts >= 9) return { grade: 'Jeles (5)', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-300', feedback: 'Kiváló vitázó és érvelő készség! A T-I-P modell, a cáfolat és a stílus mestere vagy.' };
    if (pts >= 7) return { grade: 'Jó (4)', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-300', feedback: 'Szép munka! Az alapvető érvelési szerkezeteket és a pro-kontra mérlegelést magabiztosan kezeled.' };
    if (pts >= 5) return { grade: 'Közepes (3)', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-300', feedback: 'Megfelelő alaptudás, de az érvelési hibák felismerésében és a cáfolat technikájában érdemes még fejlődnöd.' };
    if (pts >= 4) return { grade: 'Elégséges (2)', color: 'text-orange-700', bg: 'bg-orange-50 border-orange-300', feedback: 'A fogalmak még keverednek. Nézd át újra a T-I-P modellt és a bevezetés szabályait!' };
    return { grade: 'Elégtelen (1)', color: 'text-rose-700', bg: 'bg-rose-50 border-rose-300', feedback: 'Ne keseredj el! Járd végig újra a lépéseket, és próbáld meg ismét a tesztet!' };
  };

  const gradeInfo = getGrade(score);

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    setShowHint(false);
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto py-6">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>7. Lépés · Érvelési Bajnokság</span>
          <span aria-hidden="true">·</span>
          <span>10 perc</span>
          <span aria-hidden="true">·</span>
          <span>Pontozott záróellenőrzés</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Érvelési Bajnokság: 8. osztályos tudáspróba
        </h1>
        <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
          10 elgondolkodtató kérdés a jó bevezetésről, a T-I-P modellről, a pro-kontra mérlegelésről, 
          a cáfolatról és a lezárásról.
        </p>
      </div>

      {/* BEFORE SUBMISSION */}
      {!isSubmitted ? (
        <div className="space-y-6">
          {/* Rail */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-stone-100 p-3 rounded-xl border border-stone-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-stone-700">
                Kérdés: {currentQuestionIndex + 1} / {totalQuestions}
              </span>
              <span className="text-stone-300">|</span>
              <span className="text-xs text-stone-500">
                Megválaszolva: <strong className="text-stone-800 tabular-nums">{answeredCount}</strong> / {totalQuestions}
              </span>
            </div>

            <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {ARGUMENTATION_QUIZ.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const hasAnswer = selectedAnswers[q.id] !== undefined;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestionIndex(idx);
                      setShowHint(false);
                    }}
                    className={`w-7 h-7 text-xs font-mono rounded-md flex items-center justify-center transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-amber-800 text-white font-bold ring-2 ring-amber-700'
                        : hasAnswer
                        ? 'bg-stone-300 text-stone-900 font-semibold'
                        : 'bg-white text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white border-2 border-stone-200 rounded-2xl p-6 md:p-8 shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold text-amber-900 uppercase block mb-1">
                {currentQuestion.id}. feladat
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-stone-900 leading-snug">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, optIdx) => {
                const isSelected = selectedAnswers[currentQuestion.id] === optIdx;

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-amber-50 border-amber-700 text-amber-950 font-medium ring-1 ring-amber-700 shadow-2xs'
                        : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400 hover:bg-stone-50/50'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-amber-800 text-white'
                          : 'bg-stone-100 text-stone-600 border border-stone-300'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Hint toggler */}
            <div className="pt-2">
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>{showHint ? 'Tipp elrejtése' : 'Segítség / Tipp kérése'}</span>
              </button>
              {showHint && (
                <div className="mt-2 p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 animate-in fade-in">
                  <strong>Tipp a válaszhoz:</strong> {currentQuestion.hint}
                </div>
              )}
            </div>

            {/* Prev/Next */}
            <div className="flex items-center justify-between pt-6 border-t border-stone-100">
              <button
                disabled={currentQuestionIndex === 0}
                onClick={() => {
                  setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
                  setShowHint(false);
                }}
                className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Előző</span>
              </button>

              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={() => {
                    setCurrentQuestionIndex((prev) => Math.min(totalQuestions - 1, prev + 1));
                    setShowHint(false);
                  }}
                  className="flex items-center gap-1 px-4 py-2 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  <span>Következő</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setIsSubmitted(true)}
                  disabled={answeredCount === 0}
                  className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-all cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <Award className="w-4 h-4" />
                  <span>Kvíz beadása és értékelés ({answeredCount}/{totalQuestions})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* AFTER SUBMISSION */
        <div className="space-y-10 animate-in fade-in duration-300">
          <div className={`p-6 md:p-8 rounded-2xl border-2 shadow-xs ${gradeInfo.bg}`}>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-stone-200/80">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600 block mb-1">
                  Érvelési Bajnokság Eredményed
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
                  {score} / {totalQuestions} pont ({percentage}%)
                </h2>
                <p className="text-sm text-stone-700 mt-2 max-w-xl">
                  {gradeInfo.feedback}
                </p>
              </div>

              <div className="text-right flex flex-col items-end shrink-0">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-medium mb-1">
                  Érdemjegy:
                </span>
                <div className={`font-serif text-3xl font-bold px-4 py-1 rounded-xl bg-white border border-stone-300 shadow-2xs ${gradeInfo.color}`}>
                  {gradeInfo.grade}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleResetQuiz}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-white border border-stone-300 hover:bg-stone-50 rounded-lg text-stone-800 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Kvíz újrakezdése</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-white border border-stone-300 hover:bg-stone-50 rounded-lg text-stone-800 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Oklevél nyomtatása</span>
                </button>
              </div>

              <span className="text-xs text-stone-500">
                8. osztályos érvelés és vitakultúra
              </span>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Részletes válaszelemzés és tanulságok
            </h3>

            <div className="space-y-4">
              {ARGUMENTATION_QUIZ.map((q, idx) => {
                const userChoice = selectedAnswers[q.id];
                const isCorrect = userChoice === q.correctAnswer;

                return (
                  <div
                    key={q.id}
                    className={`bg-white border rounded-xl p-5 shadow-2xs space-y-3 ${
                      isCorrect ? 'border-emerald-200' : 'border-rose-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-mono text-stone-600 block mb-0.5">
                          {idx + 1}. kérdés
                        </span>
                        <h4 className="font-medium text-stone-900 text-sm">
                          {q.question}
                        </h4>
                      </div>

                      <div className="shrink-0 flex items-center gap-1">
                        {isCorrect ? (
                          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Helyes (1 pont)</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                            <XCircle className="w-3.5 h-3.5 text-rose-600" />
                            <span>Téves (0 pont)</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isUserOpt = userChoice === optIdx;
                        const isCorrectOpt = q.correctAnswer === optIdx;

                        let optClasses = 'text-stone-700 bg-stone-50 border-stone-200';
                        if (isCorrectOpt) {
                          optClasses = 'bg-emerald-50 text-emerald-950 border-emerald-300 font-semibold';
                        } else if (isUserOpt && !isCorrect) {
                          optClasses = 'bg-rose-50 text-rose-950 border-rose-300 line-through';
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`px-3 py-2 rounded-lg border flex items-center justify-between ${optClasses}`}
                          >
                            <span>{opt}</span>
                            {isCorrectOpt && (
                              <span className="text-[11px] text-emerald-700 font-bold uppercase tracking-wider">
                                Helyes válasz
                              </span>
                            )}
                            {isUserOpt && !isCorrect && (
                              <span className="text-[11px] text-rose-700 font-bold uppercase tracking-wider">
                                Te ezt jelölted
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 leading-relaxed">
                      <strong className="text-stone-900">Magyarázat:</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reset Lesson CTA */}
          <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Gyakorold újra az érvelés bármely lépését!
              </h4>
              <p className="text-xs text-stone-600 mt-0.5">
                A jó érvelés készsége a mindennapi életben és a középiskolai felvételin is óriási előny.
              </p>
            </div>

            <button
              onClick={() => onRestart('intro')}
              className="flex items-center gap-2 px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer shrink-0"
            >
              <span>Vissza az 1. lépésre (A jó bevezetés)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
