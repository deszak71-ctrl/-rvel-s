import React, { useState } from 'react';
import { BookOpen, CheckCircle, HelpCircle, ArrowRight, Award, PenTool, Flame, HeartHandshake } from 'lucide-react';
import { BIO_FACTS, BIO_CHECK_QUESTIONS } from '../data/lessonData';
import { LessonTab } from '../types';

interface BiographySectionProps {
  onNext: (tab: LessonTab) => void;
  onOpenTextbook: () => void;
  isTeacherMode: boolean;
}

export const BiographySection: React.FC<BiographySectionProps> = ({
  onNext,
  onOpenTextbook,
  isTeacherMode,
}) => {
  const [activeFact, setActiveFact] = useState<string>('teaching');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number | null>>({
    bio_q1: null,
    bio_q2: null,
    bio_q3: null,
    bio_q4: null,
  });

  const handleSelectQuiz = (qId: string, optIndex: number) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIndex }));
  };

  const answeredCount = Object.values(quizAnswers).filter((v) => v !== null).length;
  const correctCount = BIO_CHECK_QUESTIONS.filter(
    (q) => quizAnswers[q.id] === q.correctAnswer
  ).length;

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>2. Fázis</span>
          <span aria-hidden="true">·</span>
          <span>8–10 perc</span>
          <span aria-hidden="true">·</span>
          <span>Lényegretörő életrajzi szövegértés</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
              Babits Mihály pályaképe (1883 – 1941)
            </h1>
            <p className="text-base text-stone-600 max-w-2xl">
              A 20. századi magyar líra meghatározó alakja, a <em>poeta doctus</em> (tudós költő), 
              a Nyugat szerkesztője, világirodalmi rangú műfordító.
            </p>
          </div>

          <button
            onClick={onOpenTextbook}
            className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg shrink-0 cursor-pointer transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>Portré a tankönyvben (44. o.)</span>
          </button>
        </div>

        {isTeacherMode && (
          <div className="mt-4 p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900">
            <strong>Módszertani megjegyzés:</strong> A tananyag feldolgozásánál szándékosan csak a vershez közvetlenül kapcsolódó sarokpontokat emeljük ki (fogarasi magány mint a vágyódás forrása, poeta doctus nyelvi gazdagsága, első verseskötet).
          </div>
        )}
      </div>

      {/* Part 1: Négy Lényeges Állomás Kártyán */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-700" />
          <span>A pálya 4 kulcsfontosságú állomása</span>
        </h2>
        <p className="text-sm text-stone-600">
          Kattints az állomásokra a részletek megtekintéséhez, és figyeld meg, miért pont Fogarason született meg az európai utazás vágya!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {BIO_FACTS.map((fact) => {
            const isActive = activeFact === fact.id;
            return (
              <button
                key={fact.id}
                onClick={() => setActiveFact(fact.id)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-amber-50 border-amber-600 shadow-2xs ring-1 ring-amber-600'
                    : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <div>
                  <span className="text-[11px] font-mono font-semibold text-amber-800 uppercase block mb-1">
                    {fact.period}
                  </span>
                  <h3 className="font-serif text-base font-bold text-stone-900 leading-snug">
                    {fact.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                  {fact.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Kiválasztott állomás kibontása */}
        {(() => {
          const current = BIO_FACTS.find((f) => f.id === activeFact) || BIO_FACTS[0];
          return (
            <div className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-900 uppercase mb-1">
                <span>{current.period}</span>
                <span aria-hidden="true">·</span>
                <span>Fókuszban</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                {current.title}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4">
                {current.detail}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-stone-200">
                <span className="text-xs font-bold text-stone-600 mr-1">Kulcsfogalmak:</span>
                {current.keyConcepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-stone-700 bg-white border border-stone-300 px-2.5 py-0.5 rounded-md font-medium"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Part 2: Érdekességek – Autogramfal & Poeta Doctus */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <PenTool className="w-5 h-5" />
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Az esztergomi Autogramfal
            </h3>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Babitsék esztergomi előhegyi nyári házában a vendégségbe érkező barátok – köztük Móricz Zsigmond, 
            Kosztolányi Dezső, Karinthy Frigyes, Radnóti Miklós – ceruzával és tollal aláírták a szoba fehér falát. 
            Hogy az írások ne kopjanak le, felesége, Török Sophie freskófestékkel gondosan átrajzolta valamennyit.
          </p>
          <div className="text-[11px] text-stone-500 italic pt-1 border-t border-stone-100">
            Forrás: Tankönyv 44. oldal, 44.2. ábra
          </div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-amber-800">
            <HeartHandshake className="w-5 h-5" />
            <h3 className="font-serif text-lg font-bold text-stone-900">
              A "beszélgetőfüzetek" titka
            </h3>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Élete utolsó éveiben súlyos gégedaganat támadta meg, melynek következtében gégemetszést hajtottak végre rajta. 
            Hangját elveszítette, de szellemi ereje töretlen maradt: kis füzetekbe írva válaszolt orvosainak, 
            szeretteinek és látogatóinak. Ekkor vetette papírra utolsó nagy művét, a <em>Jónás könyvét</em> is.
          </p>
          <div className="text-[11px] text-stone-500 italic pt-1 border-t border-stone-100">
            Forrás: Tankönyv 44. oldal
          </div>
        </div>
      </section>

      {/* Part 3: Szövegértési mikró-ellenőrzés */}
      <section className="space-y-6 pt-4 border-t border-stone-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-700" />
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              Szövegértési ellenőrző: Emlékszel a lényegre?
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            Kitöltve: {answeredCount} / {BIO_CHECK_QUESTIONS.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BIO_CHECK_QUESTIONS.map((q, idx) => {
            const selected = quizAnswers[q.id];
            const isAnswered = selected !== null && selected !== undefined;
            const isCorrect = selected === q.correctAnswer;

            return (
              <div
                key={q.id}
                className="bg-white border border-stone-200 rounded-xl p-5 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <span className="text-[11px] font-mono text-stone-600 block mb-1">
                    {idx + 1}. kérdés
                  </span>
                  <h4 className="font-medium text-stone-900 text-sm mb-3">
                    {q.question}
                  </h4>
                </div>

                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    let optStyle = 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200';
                    if (isAnswered) {
                      if (optIdx === q.correctAnswer) {
                        optStyle = 'bg-emerald-50 text-emerald-900 border-emerald-300 font-semibold';
                      } else if (optIdx === selected) {
                        optStyle = 'bg-rose-50 text-rose-900 border-rose-300 line-through';
                      } else {
                        optStyle = 'opacity-40 border-stone-200';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isAnswered}
                        onClick={() => handleSelectQuiz(q.id, optIdx)}
                        className={`w-full text-left px-3 py-2 text-xs rounded-lg border transition-all cursor-pointer ${optStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}

                  {isAnswered && (
                    <div
                      className={`p-2.5 rounded-lg text-xs mt-2 ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}
                    >
                      <strong>{isCorrect ? 'Pontos válasz!' : 'Figyelj:'}</strong> {q.explanation}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {answeredCount === BIO_CHECK_QUESTIONS.length && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 text-sm flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>
                Nagyszerű! {correctCount} / {BIO_CHECK_QUESTIONS.length} helyes válasz. Most, hogy ismerjük a költő élethelyzetét, vizsgáljuk meg a fókuszban lévő verset!
              </span>
            </div>
          </div>
        )}
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-stone-200">
        <button
          onClick={() => onNext('warmup')}
          className="text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          ‹ Vissza: Ráhangolódás
        </button>

        <button
          onClick={() => onNext('poem')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább a 3. fázisra: A vers világa (Fókusz)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
