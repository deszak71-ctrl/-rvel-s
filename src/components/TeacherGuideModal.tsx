import React from 'react';
import { X, Sparkles, BookOpen, Clock, Target, CheckCircle2 } from 'lucide-react';

interface TeacherGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherGuideModal: React.FC<TeacherGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-amber-900 text-amber-50">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif text-lg font-bold">
                Tanári Módszertani Útmutató és 45 Perces Óraterv
              </h3>
              <p className="text-xs text-amber-200">
                8. évfolyam · Magyar irodalom · Sokszínű irodalom 8. (44–47. o.)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-amber-200 hover:text-white rounded-lg hover:bg-amber-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800 text-xs leading-relaxed">
          {/* Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                <BookOpen className="w-4 h-4" />
                <span>Tananyag</span>
              </div>
              <p className="text-stone-600">Babits Mihály: Messze... messze...</p>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                <Clock className="w-4 h-4" />
                <span>Időkeret</span>
              </div>
              <p className="text-stone-600">45 perc (1 tanóra) vagy 2×45 perc tömbösítve</p>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
              <div className="flex items-center gap-1.5 text-amber-800 font-bold">
                <Target className="w-4 h-4" />
                <span>Célkorosztály</span>
              </div>
              <p className="text-stone-600">8. osztály (13–14 éves korosztály)</p>
            </div>
          </div>

          {/* Competences */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider">
              Fejlesztendő kompetenciák és tanulási célok:
            </h4>
            <ul className="space-y-1 text-stone-700">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Irodalmi és esztétikai érzék:</strong> Az impresszionista képszerűség, a pillanatnyi érzéki benyomások felismerése a lírában.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Anyanyelvi és stilisztikai tudatosság:</strong> A névszói stílus (főnevek és melléknevek túlsúlya az igékkel szemben) funkciójának megértése az állókép-teremtésben.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Szövegértési képesség:</strong> Babits életrajzának lényeges elemei (származás, tanulmányok, poeta doctus, fogarasi magány, Dante-fordítás, autogramfal).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Érzelmi intelligencia és empátia:</strong> A vágyakozás és a megvalósíthatatlanság lírai feszültségének átélése (a "rabsors" motívuma).</span>
              </li>
            </ul>
          </div>

          {/* 45-Minute Breakdown Table */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider">
              45 perces óravázlat (Ajánlott időbeosztás):
            </h4>
            <div className="border border-stone-200 rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-stone-100 border-b border-stone-200 text-stone-700 font-semibold">
                  <tr>
                    <th className="p-2.5">Idő</th>
                    <th className="p-2.5">Fázis</th>
                    <th className="p-2.5">Tevékenység és pedagógiai cél</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="p-2.5 font-mono font-bold text-amber-900">00–07' (7p)</td>
                    <td className="p-2.5 font-semibold text-stone-900">1. Ráhangolódás</td>
                    <td className="p-2.5 text-stone-600">Gondolatébresztő indítás az 1900-as évek utazási lehetőségeiről. Képeslap-nyomozó játék (3 korabeli leírás kitalálása).</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-bold text-amber-900">07–15' (8p)</td>
                    <td className="p-2.5 font-semibold text-stone-900">2. Életrajzi szövegértés</td>
                    <td className="p-2.5 text-stone-600">A lényeges pontok feldolgozása: a poeta doctus, fogarasi tanárkodás (magány), autogramfal, beszélgetőfüzetek. 4 mikró-ellenőrző kérdés.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-bold text-amber-900">15–32' (17p)</td>
                    <td className="p-2.5 font-semibold text-stone-900">3. A vers világa (FÓKUSZ)</td>
                    <td className="p-2.5 text-stone-600">A 8 európai képeslap interaktív végigjárása, szómagyarázatok (minarét, gyopár, fjord, stb.). Impresszionista stílus & szófaji vizsgálat (névszói stílus), a 8. versszak lírai csattanója.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-bold text-amber-900">32–39' (7p)</td>
                    <td className="p-2.5 font-semibold text-stone-900">4. Interaktív gyakorlás</td>
                    <td className="p-2.5 text-stone-600">Képeslap-párosító játék, szófajvadászat (névszók vs. igék), hiányos verssorok kiegészítése azonnali visszajelzéssel.</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-mono font-bold text-amber-900">39–45' (6p)</td>
                    <td className="p-2.5 font-semibold text-stone-900">5. Zárókvíz & Összegzés</td>
                    <td className="p-2.5 text-stone-600">10 kérdéses pontozott ellenőrzés jegymegállapítással, magyarázatok áttekintése, órai reflexió.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Rendben, bezárás
          </button>
        </div>
      </div>
    </div>
  );
};
