import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Scale, CheckCircle2 } from 'lucide-react';
import { WRITING_TOPICS, WritingTopic } from '../../data/writingStudioData';

interface TopicCardsProps {
  selectedTopicId: string;
  onSelectTopic: (topicId: string) => void;
  onOpenSampleEssay: (topic: WritingTopic) => void;
  onStartWriting: (topicId: string) => void;
}

export const TopicCards: React.FC<TopicCardsProps> = ({
  selectedTopicId,
  onSelectTopic,
  onOpenSampleEssay,
  onStartWriting,
}) => {
  return (
    <div className="space-y-10 max-w-5xl mx-auto py-6">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>8. Osztályos Érvelő Írásműhely</span>
          <span aria-hidden="true">·</span>
          <span>5 Érdekes Téma</span>
          <span aria-hidden="true">·</span>
          <span>Valós dilemmák</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Válassz egy témát, és sajátítsd el az érvelés művészetét!
        </h1>
        <p className="text-base text-stone-600 max-w-3xl leading-relaxed">
          Az alábbi 5 téma mindegyike valós, titeket közvetlenül érintő kérdést vet fel. 
          Válaszd ki a számodra legizgalmasabbat, és tanuld meg lépésről lépésre felépíteni a saját meggyőző fogalmazásodat!
        </p>
      </div>

      {/* Grid of the 5 Topics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WRITING_TOPICS.map((topic) => {
          const isSelected = selectedTopicId === topic.id;

          return (
            <div
              key={topic.id}
              className={`bg-white border-2 rounded-2xl p-6 flex flex-col justify-between transition-all shadow-2xs hover:shadow-md ${
                isSelected
                  ? 'border-amber-600 ring-2 ring-amber-600/20'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-amber-900 uppercase">
                    {topic.number}. Téma
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${topic.badgeColor}`}
                  >
                    {topic.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug mb-1">
                  {topic.title}
                </h3>
                <p className="text-xs font-medium text-amber-900 mb-3">
                  {topic.subtitle}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {topic.dilemma}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-2">
                <button
                  onClick={() => onStartWriting(topic.id)}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Ezt a témát írom meg</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenSampleEssay(topic)}
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                  <span>Kész 8. o. mintaesszé</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
