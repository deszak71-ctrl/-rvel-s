import React, { useState } from 'react';
import { X, BookOpen, Layers, CheckCircle2, Copy, Check } from 'lucide-react';
import { WRITING_TOPICS, WritingTopic } from '../../data/writingStudioData';

interface SampleEssaysModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopicId?: string;
}

export const SampleEssaysModal: React.FC<SampleEssaysModalProps> = ({
  isOpen,
  onClose,
  initialTopicId,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId || 'topic_phone');
  const [highlightMode, setHighlightMode] = useState<boolean>(true);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const topic: WritingTopic = WRITING_TOPICS.find((t) => t.id === selectedTopicId) || WRITING_TOPICS[0];
  const essay = topic.sampleEssay;

  const handleCopy = () => {
    const text = `${essay.title}\nSzerző: ${essay.author}\n\n${essay.intro}\n\n${essay.body1}\n\n${essay.body2}\n\n${essay.refutation}\n\n${essay.conclusion}`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-amber-900 text-amber-50">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif text-lg font-bold">
                8. Osztályos Mintaesszék Tára · 5 Feldolgozott Téma
              </h3>
              <p className="text-xs text-amber-200">
                Példaértékű dolgozatok T-I-P érvekkel, cáfolattal és tanári értékeléssel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHighlightMode(!highlightMode)}
              className={`px-2.5 py-1 text-xs rounded-md border transition-colors cursor-pointer ${
                highlightMode
                  ? 'bg-amber-200 text-amber-950 font-bold border-amber-300'
                  : 'bg-amber-800 text-amber-100 border-amber-700'
              }`}
            >
              <span className="hidden sm:inline">Szerkezeti </span>Színező {highlightMode ? 'BE' : 'KI'}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-amber-200 hover:text-white rounded-lg hover:bg-amber-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Topic Selector Tabs */}
        <div className="flex overflow-x-auto gap-2 px-6 py-3 border-b border-stone-200 bg-stone-50 no-scrollbar">
          {WRITING_TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTopicId(t.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                selectedTopicId === t.id
                  ? 'bg-amber-800 text-white shadow-2xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {t.number}. {t.title}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          {/* Title and metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                {topic.number}. Téma · {essay.stance}
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900 leading-snug">
                {essay.title}
              </h2>
              <span className="text-xs text-stone-500 font-medium">
                Példadolgozat: {essay.author}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="self-start sm:self-center flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-stone-300 hover:bg-stone-50 rounded-lg text-stone-800 transition-colors cursor-pointer shadow-2xs"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Másolva!' : 'Minta másolása'}</span>
            </button>
          </div>

          {/* Color legend */}
          {highlightMode && (
            <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs flex flex-wrap items-center gap-4 text-stone-700">
              <span className="font-bold text-stone-900">Szerkezeti színek:</span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-emerald-200 border border-emerald-400 rounded-xs" />
                <span>Bevezetés & tételmondat</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-blue-100 border border-blue-400 rounded-xs" />
                <span>Főérvek (T-I-P)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-rose-100 border border-rose-400 rounded-xs" />
                <span>Cáfolat</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-amber-100 border border-amber-400 rounded-xs" />
                <span>Befejezés</span>
              </span>
            </div>
          )}

          {/* Essay Body */}
          <div className="font-serif text-sm leading-loose text-stone-900 space-y-4 bg-[#fdfcf9] p-6 rounded-xl border border-stone-200 shadow-2xs">
            <p
              className={`p-3 rounded-lg text-justify ${
                highlightMode ? 'bg-emerald-50/80 border border-emerald-200' : ''
              }`}
            >
              <strong className="font-sans text-[11px] uppercase font-bold text-emerald-900 block mb-1">
                [Bevezetés · Figyelemfelkeltés és Tételmondat]
              </strong>
              {essay.intro}
            </p>

            <p
              className={`p-3 rounded-lg text-justify ${
                highlightMode ? 'bg-blue-50/70 border border-blue-200' : ''
              }`}
            >
              <strong className="font-sans text-[11px] uppercase font-bold text-blue-900 block mb-1">
                [1. Főérv · Tétel + Indoklás + Példa]
              </strong>
              {essay.body1}
            </p>

            <p
              className={`p-3 rounded-lg text-justify ${
                highlightMode ? 'bg-blue-50/70 border border-blue-200' : ''
              }`}
            >
              <strong className="font-sans text-[11px] uppercase font-bold text-blue-900 block mb-1">
                [2. Főérv · Második szempont kifejtése]
              </strong>
              {essay.body2}
            </p>

            <p
              className={`p-3 rounded-lg text-justify ${
                highlightMode ? 'bg-rose-50/80 border border-rose-200' : ''
              }`}
            >
              <strong className="font-sans text-[11px] uppercase font-bold text-rose-900 block mb-1">
                [Cáfolat · Az ellenérv elismerése és felülbírálása]
              </strong>
              {essay.refutation}
            </p>

            <p
              className={`p-3 rounded-lg text-justify ${
                highlightMode ? 'bg-amber-50/80 border border-amber-200' : ''
              }`}
            >
              <strong className="font-sans text-[11px] uppercase font-bold text-amber-900 block mb-1">
                [Befejezés · Szintézis és jövőkép]
              </strong>
              {essay.conclusion}
            </p>
          </div>

          {/* Teacher review note */}
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold mb-0.5">Pedagógusi értékelés:</strong>
              {essay.teacherNotes}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Bezárás
          </button>
        </div>
      </div>
    </div>
  );
};
