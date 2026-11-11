import React from 'react';
import { BookOpen, Sparkles, Scale, GraduationCap, PenTool, Swords, FileText, ChevronDown } from 'lucide-react';
import { AppMode, ArgumentationTab, LessonTab, WritingStudioTab } from '../types';

interface TopBarProps {
  appMode: AppMode;
  onToggleAppMode: (mode: AppMode) => void;
  writingStudioTab: WritingStudioTab;
  onSelectWritingStudioTab: (tab: WritingStudioTab) => void;
  argumentationTab: ArgumentationTab;
  onSelectArgumentationTab: (tab: ArgumentationTab) => void;
  lessonTab: LessonTab;
  onSelectLessonTab: (tab: LessonTab) => void;
  onOpenSampleEssays: () => void;
  onOpenSentenceStarters: () => void;
  onOpenTextbook?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  appMode,
  onToggleAppMode,
  writingStudioTab,
  onSelectWritingStudioTab,
  argumentationTab,
  onSelectArgumentationTab,
  lessonTab,
  onSelectLessonTab,
  onOpenSampleEssays,
  onOpenSentenceStarters,
  onOpenTextbook,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fcfbf9]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
        {/* Zone 1: Wordmark & Grade Badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (appMode === 'writing_studio') {
                onSelectWritingStudioTab('topics');
              } else if (appMode === 'argumentation') {
                onSelectArgumentationTab('intro');
              } else {
                onSelectLessonTab('warmup');
              }
            }}
            className="text-left group cursor-pointer flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-800 text-amber-50 flex items-center justify-center shadow-xs shrink-0 group-hover:bg-amber-900 transition-colors">
              {appMode === 'writing_studio' ? (
                <PenTool className="w-4 h-4" />
              ) : appMode === 'argumentation' ? (
                <Scale className="w-4 h-4" />
              ) : (
                <BookOpen className="w-4 h-4" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap group-hover:text-amber-900 transition-colors">
                  {appMode === 'writing_studio'
                    ? 'Érvelő Írásműhely'
                    : appMode === 'argumentation'
                    ? 'Érvelés, de okosan!'
                    : 'Babits: Messze... messze...'}
                </span>
                <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  8. o.
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium hidden sm:block">
                {appMode === 'writing_studio'
                  ? 'Gyakorold az érvelést lépésről lépésre · 5 érdekes téma'
                  : appMode === 'argumentation'
                  ? 'Érveléstechnikai alapok, T-I-P modell és pro/kontra'
                  : '45 perces irodalomóra'}
              </p>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links for Active Mode */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-xs text-stone-600 bg-stone-100/80 p-1 rounded-xl border border-stone-200">
          {appMode === 'writing_studio' && (
            <>
              <button
                onClick={() => onSelectWritingStudioTab('topics')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  writingStudioTab === 'topics'
                    ? 'bg-white text-stone-900 font-bold shadow-2xs'
                    : 'hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                1. 5 Téma választása
              </button>
              <button
                onClick={() => onSelectWritingStudioTab('studio')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  writingStudioTab === 'studio'
                    ? 'bg-white text-stone-900 font-bold shadow-2xs'
                    : 'hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                2. Írásműhely (6 lépés)
              </button>
              <button
                onClick={() => onSelectWritingStudioTab('duel')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
                  writingStudioTab === 'duel'
                    ? 'bg-white text-stone-900 font-bold shadow-2xs'
                    : 'hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <Swords className="w-3.5 h-3.5 text-amber-700" />
                <span>3. Érv-Párbaj</span>
              </button>
              <button
                onClick={() => onSelectWritingStudioTab('guide')}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
                  writingStudioTab === 'guide'
                    ? 'bg-white text-stone-900 font-bold shadow-2xs'
                    : 'hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-amber-700" />
                <span>4. Felvételi Kisokos</span>
              </button>
            </>
          )}

          {appMode === 'argumentation' && (
            <>
              <button
                onClick={() => onSelectArgumentationTab('intro')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  argumentationTab === 'intro' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Bevezetés
              </button>
              <button
                onClick={() => onSelectArgumentationTab('tip_model')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  argumentationTab === 'tip_model' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                T-I-P Modell
              </button>
              <button
                onClick={() => onSelectArgumentationTab('pro_contra')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  argumentationTab === 'pro_contra' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Pro & Kontra
              </button>
              <button
                onClick={() => onSelectArgumentationTab('personal_opinion')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  argumentationTab === 'personal_opinion' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Vélemény
              </button>
              <button
                onClick={() => onSelectArgumentationTab('conclusion')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  argumentationTab === 'conclusion' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Lezárás
              </button>
              <button
                onClick={() => onSelectArgumentationTab('workshop')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  argumentationTab === 'workshop' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Műhely
              </button>
              <button
                onClick={() => onSelectArgumentationTab('quiz')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  argumentationTab === 'quiz' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Kvíz
              </button>
            </>
          )}

          {appMode === 'babits_literature' && (
            <>
              <button
                onClick={() => onSelectLessonTab('warmup')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  lessonTab === 'warmup' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Ráhangolódás
              </button>
              <button
                onClick={() => onSelectLessonTab('bio')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  lessonTab === 'bio' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Életrajz
              </button>
              <button
                onClick={() => onSelectLessonTab('poem')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  lessonTab === 'poem' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                A vers világa
              </button>
              <button
                onClick={() => onSelectLessonTab('practice')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  lessonTab === 'practice' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Gyakorlás
              </button>
              <button
                onClick={() => onSelectLessonTab('quiz')}
                className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  lessonTab === 'quiz' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'hover:text-stone-900'
                }`}
              >
                Tudáskvíz
              </button>
            </>
          )}
        </nav>

        {/* Zone 3: Essential Writing Helpers & Mode Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mintaesszék button */}
          <button
            onClick={onOpenSampleEssays}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors cursor-pointer shadow-2xs"
            title="8. osztályos mintaesszék megnyitása"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-800" />
            <span className="hidden sm:inline">5 Mintaesszé</span>
            <span className="sm:hidden">Minták</span>
          </button>

          {/* Mondattár button */}
          <button
            onClick={onOpenSentenceStarters}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-950 bg-amber-100 hover:bg-amber-200 border border-amber-300 rounded-lg transition-colors cursor-pointer shadow-2xs"
            title="Mondatindító kifejezéstár másolható sablonokkal"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span className="hidden sm:inline">Mondattár</span>
            <span className="sm:hidden">Mondatok</span>
          </button>

          {/* App Switcher Dropdown */}
          <div className="relative">
            <select
              value={appMode}
              onChange={(e) => onToggleAppMode(e.target.value as AppMode)}
              className="text-xs font-bold text-stone-700 bg-white border border-stone-300 rounded-lg py-1.5 pl-2.5 pr-7 focus:ring-2 focus:ring-amber-500 focus:outline-hidden cursor-pointer shadow-2xs"
              title="Váltás a tanulási módok között"
            >
              <option value="writing_studio">✍️ Írásműhely (5 téma)</option>
              <option value="argumentation">⚖️ Érvelés, de okosan! (Elmélet)</option>
              <option value="babits_literature">📜 Babits-óra (45 perc)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Mobile nav rail */}
      <div className="lg:hidden flex overflow-x-auto gap-2 px-4 py-2 border-t border-stone-200 no-scrollbar bg-stone-50/50">
        {appMode === 'writing_studio' && (
          [
            { id: 'topics' as WritingStudioTab, label: '1. 5 Téma' },
            { id: 'studio' as WritingStudioTab, label: '2. Írásműhely' },
            { id: 'duel' as WritingStudioTab, label: '3. Érv-Párbaj' },
            { id: 'guide' as WritingStudioTab, label: '4. Felvételi Kisokos' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectWritingStudioTab(item.id)}
              className={`px-3 py-1 text-xs whitespace-nowrap rounded-md font-semibold shrink-0 transition-colors cursor-pointer ${
                writingStudioTab === item.id ? 'bg-amber-800 text-white shadow-2xs' : 'bg-white text-stone-700 border border-stone-200'
              }`}
            >
              {item.label}
            </button>
          ))
        )}

        {appMode === 'argumentation' && (
          [
            { id: 'intro' as ArgumentationTab, label: '1. Bevezetés' },
            { id: 'tip_model' as ArgumentationTab, label: '2. T-I-P Modell' },
            { id: 'pro_contra' as ArgumentationTab, label: '3. Pro & Kontra' },
            { id: 'personal_opinion' as ArgumentationTab, label: '4. Vélemény' },
            { id: 'conclusion' as ArgumentationTab, label: '5. Lezárás' },
            { id: 'workshop' as ArgumentationTab, label: '6. Műhely' },
            { id: 'quiz' as ArgumentationTab, label: '7. Kvíz' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectArgumentationTab(item.id)}
              className={`px-3 py-1 text-xs whitespace-nowrap rounded-md font-semibold shrink-0 transition-colors cursor-pointer ${
                argumentationTab === item.id ? 'bg-amber-800 text-white shadow-2xs' : 'bg-white text-stone-700 border border-stone-200'
              }`}
            >
              {item.label}
            </button>
          ))
        )}

        {appMode === 'babits_literature' && (
          [
            { id: 'warmup' as LessonTab, label: '1. Ráhangolódás' },
            { id: 'bio' as LessonTab, label: '2. Életrajz' },
            { id: 'poem' as LessonTab, label: '3. Vers' },
            { id: 'practice' as LessonTab, label: '4. Gyakorlás' },
            { id: 'quiz' as LessonTab, label: '5. Kvíz' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectLessonTab(item.id)}
              className={`px-3 py-1 text-xs whitespace-nowrap rounded-md font-semibold shrink-0 transition-colors cursor-pointer ${
                lessonTab === item.id ? 'bg-amber-800 text-white shadow-2xs' : 'bg-white text-stone-700 border border-stone-200'
              }`}
            >
              {item.label}
            </button>
          ))
        )}
      </div>
    </header>
  );
};
