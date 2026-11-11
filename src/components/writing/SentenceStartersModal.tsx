import React from 'react';
import { X, Sparkles, BookOpen, Copy, Check } from 'lucide-react';
import { SENTENCE_STARTERS } from '../../data/writingStudioData';

interface SentenceStartersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SentenceStartersModal: React.FC<SentenceStartersModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-amber-900 text-amber-50">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif text-lg font-bold">
                Mondatindító Bank és Érvelési Kifejezéstár
              </h3>
              <p className="text-xs text-amber-200">
                Kattints bármelyik kifejezésre a gyors másoláshoz és beillesztéshez!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-amber-200 hover:text-white rounded-lg hover:bg-amber-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-stone-800">
          {/* Category 1: Bevezetés & Figyelemfelkeltés */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider text-amber-900">
              1. Figyelemfelkeltő felütések és témafelvetések
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SENTENCE_STARTERS.hooks.map((h, i) => (
                <button
                  key={i}
                  onClick={() => handleCopy(h)}
                  className="p-2.5 bg-stone-50 hover:bg-amber-50 rounded-lg border border-stone-200 text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-medium text-stone-800">"{h}"</span>
                  <span className="text-[10px] text-stone-400 group-hover:text-amber-800 shrink-0 ml-2">
                    {copiedText === h ? '✓ Másolva' : 'Másolás'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Category 2: Tételmondat és Állásfoglalás */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider text-amber-900">
              2. Határozott tételmondat és személyes vélemény
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SENTENCE_STARTERS.thesis.map((th, i) => (
                <button
                  key={i}
                  onClick={() => handleCopy(th)}
                  className="p-2.5 bg-stone-50 hover:bg-amber-50 rounded-lg border border-stone-200 text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-medium text-stone-800">"{th}"</span>
                  <span className="text-[10px] text-stone-400 group-hover:text-amber-800 shrink-0 ml-2">
                    {copiedText === th ? '✓ Másolva' : 'Másolás'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Category 3: Főérvek és Indoklások */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider text-amber-900">
              3. Főérvek bevezetése és ok-okozati kapcsolás
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SENTENCE_STARTERS.arguments.map((arg, i) => (
                <button
                  key={i}
                  onClick={() => handleCopy(arg)}
                  className="p-2.5 bg-stone-50 hover:bg-amber-50 rounded-lg border border-stone-200 text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-medium text-stone-800">"{arg}"</span>
                  <span className="text-[10px] text-stone-400 group-hover:text-amber-800 shrink-0 ml-2">
                    {copiedText === arg ? '✓ Másolva' : 'Másolás'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Category 4: Ellenérv és Cáfolat */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider text-rose-900">
              4. Ellenérv elismerése és cáfolat ("Bár..., mégis...")
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SENTENCE_STARTERS.refutations.map((ref, i) => (
                <button
                  key={i}
                  onClick={() => handleCopy(ref)}
                  className="p-2.5 bg-rose-50/50 hover:bg-rose-100/70 rounded-lg border border-rose-200 text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-medium text-rose-950">"{ref}"</span>
                  <span className="text-[10px] text-rose-500 group-hover:text-rose-900 shrink-0 ml-2">
                    {copiedText === ref ? '✓ Másolva' : 'Másolás'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Category 5: Befejezés és Szintézis */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider text-amber-900">
              5. Befejezés, összegzés és tanulság
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SENTENCE_STARTERS.conclusions.map((con, i) => (
                <button
                  key={i}
                  onClick={() => handleCopy(con)}
                  className="p-2.5 bg-stone-50 hover:bg-amber-50 rounded-lg border border-stone-200 text-left transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-medium text-stone-800">"{con}"</span>
                  <span className="text-[10px] text-stone-400 group-hover:text-amber-800 shrink-0 ml-2">
                    {copiedText === con ? '✓ Másolva' : 'Másolás'}
                  </span>
                </button>
              ))}
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
