import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, Sparkles } from 'lucide-react';
import { LessonTab } from '../types';

interface LessonTimerProps {
  currentTab: LessonTab;
  onSelectTab: (tab: LessonTab) => void;
  isTeacherMode: boolean;
  onToggleTeacherMode: () => void;
}

export const LessonTimer: React.FC<LessonTimerProps> = ({
  currentTab,
  onSelectTab,
  isTeacherMode,
  onToggleTeacherMode,
}) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => (prev >= 45 * 60 ? 45 * 60 : prev + 1));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const minutes = Math.floor(secondsElapsed / 60);
  const remainingSeconds = secondsElapsed % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  const totalMinutes = 45;
  const progressPercent = Math.min(100, (secondsElapsed / (totalMinutes * 60)) * 100);

  // Determine current recommended stage based on elapsed time:
  const getPhaseByTime = (sec: number): { tab: LessonTab; label: string; tip: string } => {
    const min = sec / 60;
    if (min < 7) {
      return { tab: 'warmup', label: '1. Ráhangolódás (5-7 perc)', tip: 'Játékos utazási asszociációk és a képeslapok világa.' };
    } else if (min < 15) {
      return { tab: 'bio', label: '2. Életrajzi szövegértés (8 perc)', tip: 'Babits pályaképe, a "poeta doctus" és a fogarasi magány.' };
    } else if (min < 32) {
      return { tab: 'poem', label: '3. A vers világa (17 perc)', tip: 'A 8 képeslap, impresszionizmus, névszói stílus és a lírai csattanó.' };
    } else if (min < 39) {
      return { tab: 'practice', label: '4. Gyakorlás (7 perc)', tip: 'Interaktív párosítás, szófajkeresés és hiányos verssorok.' };
    } else {
      return { tab: 'quiz', label: '5. Zárókvíz (6 perc)', tip: '10 kérdéses pontozott ellenőrzés értékeléssel.' };
    }
  };

  const currentPhase = getPhaseByTime(secondsElapsed);

  return (
    <div className="bg-stone-50 border-b border-stone-200 px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
        {/* Left: Timer controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-stone-800 bg-white px-2.5 py-1 rounded-md border border-stone-300 shadow-2xs">
            <Clock className="w-4 h-4 text-amber-700" />
            <span className="tabular-nums">{formattedTime}</span>
            <span className="text-stone-400 font-normal text-xs">/ 45:00</span>
          </div>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
              isRunning ? 'bg-amber-100 text-amber-900 hover:bg-amber-200' : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Szünet</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Óra indítása</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setIsRunning(false);
              setSecondsElapsed(0);
            }}
            className="p-1 text-stone-500 hover:text-stone-800 hover:bg-stone-200 rounded-md transition-colors"
            title="Időmérő visszaállítása"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Center: Recommended Phase Tracker */}
        <div className="hidden lg:flex items-center gap-3 flex-1 max-w-xl mx-4">
          <div className="flex-1">
            <div className="flex justify-between items-center text-stone-600 mb-1">
              <span className="font-medium text-stone-800">Ajánlott fázis: {currentPhase.label}</span>
              <span className="text-stone-500">{Math.round(progressPercent)}% az órából</span>
            </div>
            <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-600 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {currentTab !== currentPhase.tab && (
            <button
              onClick={() => onSelectTab(currentPhase.tab)}
              className="text-amber-800 hover:text-amber-950 font-semibold underline decoration-amber-400 decoration-1 underline-offset-2 shrink-0 cursor-pointer"
            >
              Ugrás ide
            </button>
          )}
        </div>

        {/* Right: Teacher / Student mode toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTeacherMode}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors font-medium cursor-pointer ${
              isTeacherMode
                ? 'bg-amber-700 text-white shadow-2xs'
                : 'text-stone-600 hover:text-stone-900 bg-white border border-stone-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isTeacherMode ? 'Tanári módszertan bekapcsolva' : 'Tanári nézet'}</span>
          </button>
        </div>
      </div>

      {isTeacherMode && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-stone-200 text-stone-600 text-[11px] flex items-center justify-between">
          <span>
            <strong className="text-amber-900 font-semibold">Óravezetési tipp:</strong> {currentPhase.tip}
          </span>
          <span className="text-stone-500">8. évfolyam · Magyar irodalom · 45 perces tanóra</span>
        </div>
      )}
    </div>
  );
};
