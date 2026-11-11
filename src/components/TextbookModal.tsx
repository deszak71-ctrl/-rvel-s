import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface TextbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TextbookModal: React.FC<TextbookModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState<'p44' | 'p46'>('p44');
  const [isZoomed, setIsZoomed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950 text-stone-100">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-serif text-lg font-semibold tracking-wide text-amber-200">
                Sokszínű irodalom 8. – Tankönyvi forrásoldalak
              </h3>
              <p className="text-xs text-stone-400">
                Mozaik Kiadó · {currentPage === 'p44' ? '44–45. oldal: Babits életrajza és a vers kezdete' : '46–47. oldal: A vers zárlata, stílusjegyek és feladatok'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-stone-800 rounded-lg p-1 mr-2">
              <button
                onClick={() => setCurrentPage('p44')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  currentPage === 'p44' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                44–45. oldal
              </button>
              <button
                onClick={() => setCurrentPage('p46')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  currentPage === 'p46' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                46–47. oldal
              </button>
            </div>

            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 text-stone-400 hover:text-stone-100 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors"
              title={isZoomed ? 'Kicsinyítés' : 'Nagyítás'}
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-100 bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors"
              title="Bezárás"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body / Image Viewer */}
        <div className="relative flex-1 overflow-auto bg-stone-950 flex items-center justify-center p-4">
          <div className={`transition-all duration-200 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'}`}>
            <img
              src={currentPage === 'p44' ? '/public/assets/aistudio/image_684afd58.png' : '/public/assets/aistudio/image_9ccae1ff.png'}
              alt={currentPage === 'p44' ? 'Sokszínű irodalom 8. tankönyv 44-45. oldal' : 'Sokszínű irodalom 8. tankönyv 46-47. oldal'}
              className="max-h-[75vh] w-auto rounded-lg shadow-lg object-contain border border-stone-800"
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>

          {/* Quick Page Prev/Next Floating Buttons */}
          <button
            onClick={() => setCurrentPage(currentPage === 'p44' ? 'p46' : 'p44')}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-stone-900/80 hover:bg-stone-800 text-stone-200 rounded-full border border-stone-700 shadow-xl transition-transform hover:scale-110"
            title="Előző / Következő oldal"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentPage(currentPage === 'p44' ? 'p46' : 'p44')}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-stone-900/80 hover:bg-stone-800 text-stone-200 rounded-full border border-stone-700 shadow-xl transition-transform hover:scale-110"
            title="Előző / Következő oldal"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-stone-900 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
          <span>Kattints a képre vagy használd a nagyító ikont a szöveg közelebbi olvasásához!</span>
          <span className="font-mono">{currentPage === 'p44' ? '44–45 / 280' : '46–47 / 280'}</span>
        </div>
      </div>
    </div>
  );
};
