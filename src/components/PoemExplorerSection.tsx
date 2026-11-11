import React, { useState } from 'react';
import { BookOpen, Sparkles, Eye, Volume2, Thermometer, Layers, ChevronLeft, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';
import { POEM_STANZAS } from '../data/lessonData';
import { LessonTab, StanzaData } from '../types';

interface PoemExplorerSectionProps {
  onNext: (tab: LessonTab) => void;
  onOpenTextbook: () => void;
  isTeacherMode: boolean;
}

export const PoemExplorerSection: React.FC<PoemExplorerSectionProps> = ({
  onNext,
  onOpenTextbook,
  isTeacherMode,
}) => {
  const [activeStanzaIndex, setActiveStanzaIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'postcard' | 'full'>('postcard');
  const [highlightPartsOfSpeech, setHighlightPartsOfSpeech] = useState(false);
  const [activeWordPopup, setActiveWordPopup] = useState<{ word: string; meaning: string } | null>(null);

  const activeStanza: StanzaData = POEM_STANZAS[activeStanzaIndex];

  // Specific word highlighter helper for the grammatical insight
  const renderLineWithGrammar = (line: string) => {
    if (!highlightPartsOfSpeech) return line;

    // List of verbs in the poem:
    const verbs = ['nyujt', 'mereng', 'lanyhul', 'föllobog', 'pipáló', 'füstölög', 'hull', 'láthatom'];

    const words = line.split(/(\s+|[,.:!?-])/);
    return words.map((chunk, i) => {
      const clean = chunk.toLowerCase().replace(/[,.:!?-]/g, '');
      const isVerb = verbs.some((v) => clean.startsWith(v));
      const isMeaningful = clean.length > 2 && !['és', 'a', 'az', 'hogy', 'sok', 'mind'].includes(clean);

      if (isVerb) {
        return (
          <span
            key={i}
            className="bg-rose-100 text-rose-900 font-semibold px-1 py-0.5 rounded-sm border border-rose-300"
            title="Ige / cselekvés"
          >
            {chunk}
          </span>
        );
      } else if (isMeaningful) {
        return (
          <span
            key={i}
            className="bg-amber-100 text-amber-950 px-1 py-0.5 rounded-sm"
            title="Névszó (főnév / melléknév)"
          >
            {chunk}
          </span>
        );
      }
      return chunk;
    });
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>3. Fázis · A Tanóra Fókusza</span>
          <span aria-hidden="true">·</span>
          <span>15–18 perc</span>
          <span aria-hidden="true">·</span>
          <span>Részletes verselemzés</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
              Babits Mihály: Messze... messze... (1907)
            </h1>
            <p className="text-base text-stone-600 max-w-2xl">
              Nyolc európai ország színes képeslapja a vágyódás prizmáján keresztül. 
              Impresszionista állóképek és egy fájdalmas lírai csattanó.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenTextbook}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg shrink-0 cursor-pointer transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              <span>Vers a tankönyvben (45–46. o.)</span>
            </button>
          </div>
        </div>

        {isTeacherMode && (
          <div className="mt-4 p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-900">
            <strong>Módszertani kulcs:</strong> Irányítsuk a figyelmet arra, miért hat a vers úgy, mintha képeslapokat forgatnánk (igék hiánya, névszói stílus). Külön térjünk ki a 8. versszak váratlan hangulatváltására (rabsors).
          </div>
        )}
      </div>

      {/* View Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-stone-100 rounded-xl border border-stone-200">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setViewMode('postcard')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              viewMode === 'postcard'
                ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Képeslap-album nézet (1-8)
          </button>
          <button
            onClick={() => setViewMode('full')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              viewMode === 'full'
                ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Teljes vers egyben
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setHighlightPartsOfSpeech(!highlightPartsOfSpeech)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border transition-all cursor-pointer ${
              highlightPartsOfSpeech
                ? 'bg-amber-800 text-white border-amber-800 font-semibold shadow-2xs'
                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{highlightPartsOfSpeech ? 'Szófaji színező bekapcsolva' : 'Szófaji elemző kiemelés'}</span>
          </button>
        </div>
      </div>

      {highlightPartsOfSpeech && (
        <div className="p-3 bg-white border border-stone-200 rounded-xl text-xs flex flex-wrap items-center gap-4 text-stone-700">
          <span className="font-semibold text-stone-900">Jelmagyarázat:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-amber-200 border border-amber-300 rounded-xs inline-block" />
            <span>Névszó (főnév, melléknév) – állókép, színek, formák</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 bg-rose-200 border border-rose-300 rounded-xs inline-block" />
            <span>Ige (cselekvés/történés) – ritka, alig akad benne mozgás!</span>
          </span>
        </div>
      )}

      {/* VIEW MODE 1: KÉPESLAP-ALBUM (POSTCARD VIEW) */}
      {viewMode === 'postcard' && (
        <section className="space-y-6">
          {/* Postcard selector tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
            {POEM_STANZAS.map((stanza, idx) => (
              <button
                key={stanza.id}
                onClick={() => {
                  setActiveStanzaIndex(idx);
                  setActiveWordPopup(null);
                }}
                className={`px-3 py-1.5 text-xs whitespace-nowrap rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
                  activeStanzaIndex === idx
                    ? 'bg-stone-900 text-white shadow-2xs font-semibold'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {idx + 1}. {stanza.countryAdjective}
              </button>
            ))}
          </div>

          {/* The Active Postcard Card */}
          <div className="bg-white border-2 border-stone-200 rounded-2xl shadow-sm overflow-hidden transition-all">
            {/* Postcard Header / Stamp & Airmail styling */}
            <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
                  {activeStanza.id}. Képeslap · {activeStanza.countryAdjective} ({activeStanza.country})
                </span>
              </div>

              {/* Simulated Postcard Stamp */}
              <div className="hidden sm:flex items-center gap-2 border border-dashed border-stone-400 px-2.5 py-1 bg-amber-50/50 rounded-xs text-[11px] text-stone-600 font-mono">
                <span>POSTA 1907</span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-800 font-bold">{activeStanza.countryAdjective.toUpperCase()}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-stone-200">
              {/* Left Column: The Poem Stanza */}
              <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-widest text-stone-600 font-mono block mb-1">
                      A versszak szövege:
                    </span>
                    <div className="space-y-1.5 font-serif text-xl md:text-2xl text-stone-900 leading-relaxed">
                      {activeStanza.lines.map((line, lineIdx) => (
                        <div
                          key={lineIdx}
                          className={`${
                            activeStanza.id === 8 && lineIdx >= 3
                              ? 'text-red-900 font-bold underline decoration-red-400 decoration-1 underline-offset-4'
                              : ''
                          }`}
                        >
                          {renderLineWithGrammar(line)}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mt-4 italic bg-stone-50 p-3 rounded-lg border border-stone-200">
                    "{activeStanza.description}"
                  </p>
                </div>

                {/* Vocabulary badges for this stanza */}
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-2">
                    Nehéz szavak & szómagyarázatok (Kattints a részletekért):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeStanza.vocabulary.map((vocab, vIdx) => (
                      <button
                        key={vIdx}
                        onClick={() => setActiveWordPopup(vocab)}
                        className={`text-xs px-2.5 py-1 rounded-md border transition-colors cursor-pointer flex items-center gap-1 ${
                          activeWordPopup?.word === vocab.word
                            ? 'bg-amber-800 text-white border-amber-800 font-semibold'
                            : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                        }`}
                      >
                        <HelpCircle className="w-3 h-3 text-amber-600" />
                        <span>{vocab.word}</span>
                      </button>
                    ))}
                  </div>

                  {activeWordPopup && (
                    <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-stone-800 animate-in fade-in">
                      <strong className="text-amber-950 font-bold">{activeWordPopup.word}:</strong>{' '}
                      {activeWordPopup.meaning}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Sensory Analysis & Impressionism note */}
              <div className="md:col-span-5 p-6 bg-stone-50/60 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>Érzékszervi benyomások</span>
                  </h4>

                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg border border-stone-200">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900 mb-1">
                        {activeStanza.sensoryDominance === 'látás' && <Eye className="w-3.5 h-3.5 text-amber-700" />}
                        {activeStanza.sensoryDominance === 'hallás' && <Volume2 className="w-3.5 h-3.5 text-violet-700" />}
                        {activeStanza.sensoryDominance === 'tapintás/hő' && <Thermometer className="w-3.5 h-3.5 text-sky-700" />}
                        {activeStanza.sensoryDominance === 'térérzet' && <Layers className="w-3.5 h-3.5 text-teal-700" />}
                        <span className="capitalize">Domináns érzékelés: {activeStanza.sensoryDominance}</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {activeStanza.sensoryDescription}
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-stone-200">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block mb-1.5">
                        Festői kulcsszavak:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeStanza.keywords.map((kw, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-stone-100 text-stone-800 px-2 py-0.5 rounded-sm border border-stone-200"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {activeStanza.id === 8 && (
                      <div className="bg-red-50 border border-red-200 p-3 rounded-lg text-xs text-red-950">
                        <strong className="block font-bold mb-1">A vers kulcsa és lényege:</strong>
                        Itt törik meg a szép leírások sora! A költő nem csupán gyönyörködik, 
                        hanem fájdalmasan felkiált: mindez csak képzelet, saját „rabsorsa” 
                        miatt soha nem juthat el ezekre a csodás helyekre.
                      </div>
                    )}
                  </div>
                </div>

                {/* Prev / Next controls */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <button
                    disabled={activeStanzaIndex === 0}
                    onClick={() => {
                      setActiveStanzaIndex((prev) => Math.max(0, prev - 1));
                      setActiveWordPopup(null);
                    }}
                    className="flex items-center gap-1 text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Előző képeslap</span>
                  </button>

                  <span className="text-xs font-mono text-stone-600 font-semibold">
                    {activeStanzaIndex + 1} / {POEM_STANZAS.length}
                  </span>

                  <button
                    disabled={activeStanzaIndex === POEM_STANZAS.length - 1}
                    onClick={() => {
                      setActiveStanzaIndex((prev) => Math.min(POEM_STANZAS.length - 1, prev + 1));
                      setActiveWordPopup(null);
                    }}
                    className="flex items-center gap-1 text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
                  >
                    <span>Következő képeslap</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VIEW MODE 2: TELJES VERS (FULL VIEW) */}
      {viewMode === 'full' && (
        <section className="space-y-6">
          <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {POEM_STANZAS.map((stanza) => (
                <div
                  key={stanza.id}
                  className={`p-4 rounded-xl border transition-all ${
                    stanza.id === 8
                      ? 'bg-rose-50/60 border-rose-300'
                      : 'bg-stone-50/60 border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-amber-900 uppercase">
                      {stanza.id}. {stanza.countryAdjective}
                    </span>
                    <span className="text-[11px] text-stone-600 font-medium">
                      {stanza.country}
                    </span>
                  </div>

                  <div className="space-y-1 font-serif text-lg text-stone-900">
                    {stanza.lines.map((line, idx) => (
                      <p
                        key={idx}
                        className={`${
                          stanza.id === 8 && idx >= 3 ? 'text-red-900 font-bold' : ''
                        }`}
                      >
                        {renderLineWithGrammar(line)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Part 3: Irodalomelméleti Mesterkurzus – Impresszionizmus & Névszói stílus */}
      <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono font-semibold text-amber-900 uppercase block mb-1">
            Poétikai sajátosságok · Tankönyv 46–47. o.
          </span>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Hogyan éri el Babits a képeslap-hatást?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2.5">
            <h3 className="font-serif text-lg font-bold text-stone-900">
              1. Az impresszionizmus jegyei
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Az impresszionizmus a <strong>pillanatnyi hangulatok, fények, színek és érzéki benyomások</strong> megragadására törekszik. 
              Babits nem összefüggő történetet vagy cselekményt mesél el, hanem egy-egy jellegzetes fény- és hangulatfelvillanással 
              idézi meg a tájakat (pl. a lemenő nap bíbor fénye Spanyolhonban, a ködös Temze hidakkal Londonban).
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-2.5">
            <h3 className="font-serif text-lg font-bold text-stone-900">
              2. Névszói stílus – Miért nincs szinte ige a versben?
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              A versben alig találunk igéket: <strong>a névszók (főnevek és jelzők) uralják a szöveget</strong>. 
              Az igék mellőzése megállítja az időt: a vers nem mozog, hanem állóképekből, festményekből, 
              fényképekből álló montázst formál. Ez teszi lehetővé, hogy a szöveget egy képeslap-albumként érzékeljük.
            </p>
          </div>
        </div>

        {/* Dynamic comparison stat bar */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2">
          <div className="flex justify-between items-center text-xs font-medium">
            <span className="text-amber-950 font-bold">Névszók aránya a költeményben: ~88% (főnevek, melléknevek)</span>
            <span className="text-rose-800 font-bold">Igék aránya: ~12% (mindössze 7 ige a teljes versben!)</span>
          </div>
          <div className="w-full bg-rose-200 h-3 rounded-full overflow-hidden flex">
            <div className="bg-amber-600 h-full" style={{ width: '88%' }} title="Névszók aránya" />
            <div className="bg-rose-600 h-full" style={{ width: '12%' }} title="Igék aránya" />
          </div>
          <p className="text-[11px] text-stone-600 italic">
            Figyeld meg: a vers 32 sorából a legtöbb sorban egyetlen ige sincs, kizárólag felsorolt látványelemek és jelzők!
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-stone-200">
        <button
          onClick={() => onNext('bio')}
          className="text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          ‹ Vissza: Életrajz
        </button>

        <button
          onClick={() => onNext('practice')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább a 4. fázisra: Interaktív gyakorlás</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
