import { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { LessonTimer } from './components/LessonTimer';
import { TextbookModal } from './components/TextbookModal';
import { TeacherGuideModal } from './components/TeacherGuideModal';

// Writing Studio (New 5 Topics App)
import { TopicCards } from './components/writing/TopicCards';
import { WritingStudio } from './components/writing/WritingStudio';
import { ArgumentDuel } from './components/writing/ArgumentDuel';
import { WritingGuide } from './components/writing/WritingGuide';
import { SampleEssaysModal } from './components/writing/SampleEssaysModal';
import { SentenceStartersModal } from './components/writing/SentenceStartersModal';
import { WRITING_TOPICS, WritingTopic } from './data/writingStudioData';

// Babits Literature Components
import { WarmupSection } from './components/WarmupSection';
import { BiographySection } from './components/BiographySection';
import { PoemExplorerSection } from './components/PoemExplorerSection';
import { InteractiveTasksSection } from './components/InteractiveTasksSection';
import { QuizSection } from './components/QuizSection';

// Argumentation Theory Components
import { IntroStep } from './components/argumentation/IntroStep';
import { TIPModelStep } from './components/argumentation/TIPModelStep';
import { ProContraStep } from './components/argumentation/ProContraStep';
import { PersonalOpinionStep } from './components/argumentation/PersonalOpinionStep';
import { ConclusionStep } from './components/argumentation/ConclusionStep';
import { ArgumentWorkshop } from './components/argumentation/ArgumentWorkshop';
import { ArgumentQuiz } from './components/argumentation/ArgumentQuiz';

import { AppMode, ArgumentationTab, LessonTab, WritingStudioTab } from './types';
import { BookOpen, Sparkles, Scale, PenTool, Swords, FileText, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Main app mode: Default to the new Writing Studio with 5 topics
  const [appMode, setAppMode] = useState<AppMode>('writing_studio');

  // Writing studio navigation
  const [writingStudioTab, setWritingStudioTab] = useState<WritingStudioTab>('topics');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('topic_phone');
  const [sampleModalTopicId, setSampleModalTopicId] = useState<string>('topic_phone');

  // Argumentation theory navigation
  const [argumentationTab, setArgumentationTab] = useState<ArgumentationTab>('intro');

  // Babits literature navigation
  const [lessonTab, setLessonTab] = useState<LessonTab>('warmup');

  // Modals
  const [isSampleEssaysOpen, setIsSampleEssaysOpen] = useState(false);
  const [isSentenceStartersOpen, setIsSentenceStartersOpen] = useState(false);
  const [isTextbookOpen, setIsTextbookOpen] = useState(false);
  const [isTeacherGuideOpen, setIsTeacherGuideOpen] = useState(false);
  const [isTeacherMode, setIsTeacherMode] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#erveles-de-okosan') {
        setAppMode('argumentation');
        setArgumentationTab('intro');
        const target = document.getElementById('erveles-de-okosan');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (window.location.hash === '#irasmuhely') {
        setAppMode('writing_studio');
        setWritingStudioTab('topics');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectWritingStudioTab = (tab: WritingStudioTab) => {
    setWritingStudioTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArgumentationTab = (tab: ArgumentationTab) => {
    setArgumentationTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLessonTab = (tab: LessonTab) => {
    setLessonTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartWriting = (topicId: string) => {
    setSelectedTopicId(topicId);
    setWritingStudioTab('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSampleEssay = (topic: WritingTopic) => {
    setSampleModalTopicId(topic.id);
    setIsSampleEssaysOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf9] text-stone-900 flex flex-col selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* 1. Top Bar */}
      <TopBar
        appMode={appMode}
        onToggleAppMode={(mode) => {
          setAppMode(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        writingStudioTab={writingStudioTab}
        onSelectWritingStudioTab={handleSelectWritingStudioTab}
        argumentationTab={argumentationTab}
        onSelectArgumentationTab={handleSelectArgumentationTab}
        lessonTab={lessonTab}
        onSelectLessonTab={handleSelectLessonTab}
        onOpenSampleEssays={() => setIsSampleEssaysOpen(true)}
        onOpenSentenceStarters={() => setIsSentenceStartersOpen(true)}
        onOpenTextbook={() => setIsTextbookOpen(true)}
      />

      {/* 2. Mode Sub-Ribbon */}
      {appMode === 'writing_studio' && (
        <div className="bg-amber-50/70 border-b border-amber-200/80 px-4 py-2.5">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-amber-950 text-sm md:text-base flex items-center gap-1.5">
                <PenTool className="w-4 h-4 text-amber-800 shrink-0" />
                <span>8. Osztályos Érvelő Írásműhely</span>
              </span>
              <span className="text-amber-300 hidden sm:inline">|</span>
              <span className="text-stone-600 hidden sm:inline">
                5 önálló életszerű dilemma · Lépésről lépésre felépített érvelő fogalmazás · 120–250 szó
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleSelectWritingStudioTab('topics')}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  writingStudioTab === 'topics' ? 'bg-amber-800 text-white' : 'text-amber-900 hover:bg-amber-100'
                }`}
              >
                1. 5 Téma
              </button>
              <button
                onClick={() => handleSelectWritingStudioTab('studio')}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  writingStudioTab === 'studio' ? 'bg-amber-800 text-white' : 'text-amber-900 hover:bg-amber-100'
                }`}
              >
                2. Írásműhely
              </button>
              <button
                onClick={() => handleSelectWritingStudioTab('duel')}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  writingStudioTab === 'duel' ? 'bg-amber-800 text-white' : 'text-amber-900 hover:bg-amber-100'
                }`}
              >
                3. Érv-Párbaj
              </button>
              <button
                onClick={() => handleSelectWritingStudioTab('guide')}
                className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  writingStudioTab === 'guide' ? 'bg-amber-800 text-white' : 'text-amber-900 hover:bg-amber-100'
                }`}
              >
                4. Kisokos
              </button>
            </div>
          </div>
        </div>
      )}

      {appMode === 'argumentation' && (
        <div className="bg-amber-50/70 border-b border-amber-200/80 px-4 py-2.5">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <h1 id="erveles-de-okosan" className="font-serif font-bold text-amber-950 text-base md:text-lg flex items-center gap-2 scroll-mt-24">
                <Scale className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Érvelés, de okosan!</span>
              </h1>
              <span className="text-amber-300 hidden sm:inline">|</span>
              <span className="text-stone-600 hidden sm:inline">
                A jó bevezetés · T-I-P modell · Pro és kontra · Véleményalkotás · Hatásos lezárás
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setAppMode('writing_studio');
                  setWritingStudioTab('topics');
                }}
                className="text-xs text-amber-950 font-bold flex items-center gap-1.5 cursor-pointer bg-white px-3 py-1 rounded-md border border-amber-300 shadow-2xs hover:bg-amber-50"
              >
                <PenTool className="w-3.5 h-3.5 text-amber-800" />
                <span>Áttérés az Írásműhelyre (5 téma)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {appMode === 'babits_literature' && (
        <div>
          <div className="bg-amber-50/90 border-b border-amber-200 px-4 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs">
              <span className="text-amber-950 font-medium">
                Babits Mihály: Messze... messze... (45 perces irodalomóra)
              </span>
              <button
                onClick={() => {
                  setAppMode('writing_studio');
                  setWritingStudioTab('topics');
                }}
                className="text-xs text-amber-950 hover:text-black font-bold flex items-center gap-1.5 cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-amber-300 shadow-2xs transition-all"
              >
                <PenTool className="w-3.5 h-3.5 text-amber-800" />
                <span>Ugrás az Érvelő Írásműhelybe (5 téma)</span>
              </button>
            </div>
          </div>
          <LessonTimer
            currentTab={lessonTab}
            onSelectTab={handleSelectLessonTab}
            isTeacherMode={isTeacherMode}
            onToggleTeacherMode={() => setIsTeacherMode(!isTeacherMode)}
          />
        </div>
      )}

      {/* 3. Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* VIEW 1: WRITING STUDIO (5 Independent Topics) */}
        {appMode === 'writing_studio' && (
          <>
            {writingStudioTab === 'topics' && (
              <TopicCards
                selectedTopicId={selectedTopicId}
                onSelectTopic={(id) => setSelectedTopicId(id)}
                onOpenSampleEssay={handleOpenSampleEssay}
                onStartWriting={handleStartWriting}
              />
            )}

            {writingStudioTab === 'studio' && (
              <WritingStudio
                initialTopicId={selectedTopicId}
                onOpenSampleEssay={handleOpenSampleEssay}
              />
            )}

            {writingStudioTab === 'duel' && <ArgumentDuel />}

            {writingStudioTab === 'guide' && <WritingGuide />}
          </>
        )}

        {/* VIEW 2: ARGUMENTATION THEORY */}
        {appMode === 'argumentation' && (
          <>
            {argumentationTab === 'intro' && (
              <IntroStep onNext={handleSelectArgumentationTab} />
            )}
            {argumentationTab === 'tip_model' && (
              <TIPModelStep onNext={handleSelectArgumentationTab} />
            )}
            {argumentationTab === 'pro_contra' && (
              <ProContraStep onNext={handleSelectArgumentationTab} />
            )}
            {argumentationTab === 'personal_opinion' && (
              <PersonalOpinionStep onNext={handleSelectArgumentationTab} />
            )}
            {argumentationTab === 'conclusion' && (
              <ConclusionStep onNext={handleSelectArgumentationTab} />
            )}
            {argumentationTab === 'workshop' && (
              <ArgumentWorkshop onNext={handleSelectArgumentationTab} />
            )}
            {argumentationTab === 'quiz' && (
              <ArgumentQuiz onRestart={handleSelectArgumentationTab} />
            )}
          </>
        )}

        {/* VIEW 3: BABITS LITERATURE */}
        {appMode === 'babits_literature' && (
          <>
            {lessonTab === 'warmup' && (
              <WarmupSection
                onNext={handleSelectLessonTab}
                isTeacherMode={isTeacherMode}
              />
            )}
            {lessonTab === 'bio' && (
              <BiographySection
                onNext={handleSelectLessonTab}
                onOpenTextbook={() => setIsTextbookOpen(true)}
                isTeacherMode={isTeacherMode}
              />
            )}
            {lessonTab === 'poem' && (
              <PoemExplorerSection
                onNext={handleSelectLessonTab}
                onOpenTextbook={() => setIsTextbookOpen(true)}
                isTeacherMode={isTeacherMode}
              />
            )}
            {lessonTab === 'practice' && (
              <InteractiveTasksSection
                onNext={handleSelectLessonTab}
                isTeacherMode={isTeacherMode}
              />
            )}
            {lessonTab === 'quiz' && (
              <QuizSection
                onRestartLesson={handleSelectLessonTab}
                isTeacherMode={isTeacherMode}
              />
            )}
          </>
        )}
      </main>

      {/* 4. Footer */}
      <footer className="border-t border-stone-200 bg-white py-8 px-6 text-xs text-stone-500 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-serif font-bold text-stone-800 text-sm">
              {appMode === 'writing_studio'
                ? 'Érvelő Írásműhely · 8. osztály'
                : appMode === 'argumentation'
                ? 'Érvelés, de okosan!'
                : 'Babits Mihály: Messze... messze...'}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>8. osztályos magyar nyelv és irodalom</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>5 önálló téma · T-I-P érveléstechnika · Központi felvételi felkészülés</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSampleEssaysOpen(true)}
              className="hover:text-amber-800 transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>5 Mintaesszé</span>
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsSentenceStartersOpen(true)}
              className="hover:text-amber-800 transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Mondatindító Bank</span>
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsTeacherGuideOpen(true)}
              className="hover:text-amber-800 transition-colors cursor-pointer flex items-center gap-1 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Módszertani útmutató</span>
            </button>
          </div>
        </div>
      </footer>

      {/* 5. Modals */}
      <SampleEssaysModal
        isOpen={isSampleEssaysOpen}
        onClose={() => setIsSampleEssaysOpen(false)}
        initialTopicId={sampleModalTopicId}
      />

      <SentenceStartersModal
        isOpen={isSentenceStartersOpen}
        onClose={() => setIsSentenceStartersOpen(false)}
      />

      <TextbookModal
        isOpen={isTextbookOpen}
        onClose={() => setIsTextbookOpen(false)}
      />

      <TeacherGuideModal
        isOpen={isTeacherGuideOpen}
        onClose={() => setIsTeacherGuideOpen(false)}
      />
    </div>
  );
}
