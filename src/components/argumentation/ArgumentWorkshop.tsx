import React, { useState } from 'react';
import { Sparkles, Copy, Check, Printer, ArrowRight, BookOpen, Layers, Edit3, HelpCircle } from 'lucide-react';
import { ARGUMENT_TOPICS } from '../../data/argumentationData';
import { ArgumentationTab } from '../../types';

interface ArgumentWorkshopProps {
  onNext: (tab: ArgumentationTab) => void;
}

export const ArgumentWorkshop: React.FC<ArgumentWorkshopProps> = ({ onNext }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('travel_experience');
  const [isCopied, setIsCopied] = useState(false);

  const currentTopic = ARGUMENT_TOPICS.find((t) => t.id === selectedTopicId) || ARGUMENT_TOPICS[0];

  // Workshop draft fields:
  const [introText, setIntroText] = useState(
    'A 21. századi digitális világban mindannyiunk zsebében ott lapul a virtuális utazás lehetősége. Babits Mihály Messze... messze... című költeménye is bizonyítja, hogy a képzelet ereje képes csodás tájakat megidézni. Meglátásom szerint azonban a virtuális élmények soha nem helyettesíthetik a személyes tapasztalatot és a valódi világjárást.'
  );

  const [arg1Text, setArg1Text] = useState(
    'Elsősorban azért nélkülözhetetlen a valóságos utazás, mert az érzékszervi tapasztalatokat és az emberi találkozásokat semmilyen könyv nem pótolhatja. Például hiába olvasunk az alpesi jégmezőkről, a ritka hegyi levegő haraphatóságát és a hideg szél erejét csak a bérceken élhetjük át.'
  );

  const [arg2Text, setArg2Text] = useState(
    'Továbbá a valódi utazás elengedhetetlen személyiségfejlesztő erővel bír, ugyanis önállóságra és problémamegoldásra tanít. Például amikor egy fiatalnak egy külföldi pályaudvaron idegen nyelven kell segítséget kérnie, felbecsülhetetlen önbizalmat szerez.'
  );

  const [refutationText, setRefutationText] = useState(
    'Bár kétségtelen, hogy a könyvek és a képek révén Babits szobájából is varázslatos képeslapok születtek, mégis figyelembe kell venni, hogy a költő maga is fájdalmas "rabsorsként" élte meg a bezártságot, és egész életében sóvárgott a valós utazás után.'
  );

  const [conclusionText, setConclusionText] = useState(
    'Mindent egybevetve úgy vélem, a könyvek gazdagítják a képzeletünket, de az igazi élet a komfortzónán túl kezdődik. A legjobb megoldás, ha a könyvekből inspirálódunk, de amikor csak tehetjük, bátran elindulunk felfedezni a valóságos világot.'
  );

  // Quality calculation:
  const calculateScore = () => {
    let score = 0;
    const fullText = `${introText} ${arg1Text} ${arg2Text} ${refutationText} ${conclusionText}`.toLowerCase();

    // Check presence of blocks:
    if (introText.trim().length > 40) score += 20;
    if (arg1Text.trim().length > 40) score += 20;
    if (arg2Text.trim().length > 40) score += 20;
    if (refutationText.trim().length > 30) score += 20;
    if (conclusionText.trim().length > 30) score += 20;

    // Bonus for connectors:
    const connectors = ['mert', 'mivel', 'például', 'meglátásom szerint', 'bár', 'mégis', 'mindent egybevetve', 'úgy vélem'];
    const foundConnectors = connectors.filter((c) => fullText.includes(c)).length;

    return Math.min(100, score + foundConnectors * 2);
  };

  const qualityScore = calculateScore();

  const handleCopy = () => {
    const fullEssay = `Érvelő fogalmazás: ${currentTopic.title}\n\n${introText}\n\n${arg1Text}\n\n${arg2Text}\n\n${refutationText}\n\n${conclusionText}`;
    navigator.clipboard.writeText(fullEssay);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>6. Lépés az érvelésben</span>
          <span aria-hidden="true">·</span>
          <span>15 perc</span>
          <span aria-hidden="true">·</span>
          <span>Interaktív Érvelő Műhely</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Érvelő Műhely: Építsd fel a saját fogalmazásodat blokkonként!
        </h1>
        <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
          Itt egy teljes, mintaszerű 8. osztályos érvelő fogalmazást szerkeszthetsz meg lépésről lépésre. 
          A rendszer valós időben méri az <strong>Érv-Minőséget</strong>, a T-I-P szerkezetet és a cáfolat meglétét!
        </p>
      </div>

      {/* Topic selector */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
          1. Lépés: Válassz témát a műhelymunkához:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ARGUMENT_TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                selectedTopicId === topic.id
                  ? 'bg-amber-800 text-white border-amber-800 shadow-2xs font-semibold'
                  : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <span className="text-[11px] uppercase tracking-wider block mb-0.5 opacity-80">
                {topic.category}
              </span>
              <div className="font-serif text-sm font-bold">
                {topic.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quality Score Meter */}
      <div className="p-4 bg-white border border-stone-200 rounded-xl shadow-2xs space-y-2">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="text-stone-800 font-bold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Érv-Mérő (Fogalmazási minőség):</span>
          </span>
          <span className="font-mono text-amber-900 font-bold">{qualityScore} / 100 pont</span>
        </div>
        <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-amber-600 h-full transition-all duration-300"
            style={{ width: `${qualityScore}%` }}
          />
        </div>
        <div className="text-[11px] text-stone-500 flex justify-between">
          <span>Struktúra: 5/5 blokk</span>
          <span>Összekötő kifejezések és cáfolat ellenőrizve</span>
        </div>
      </div>

      {/* The 5 Building Blocks */}
      <div className="space-y-6">
        {/* Block 1: Introduction */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase">
              1. Blokk: Bevezetés (Figyelemfelkeltés + Tételmondat)
            </span>
            <span className="text-[11px] text-stone-600">Kb. 2–3 mondat</span>
          </div>
          <textarea
            rows={3}
            value={introText}
            onChange={(e) => setIntroText(e.target.value)}
            className="w-full p-3 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-serif text-stone-900 leading-relaxed"
          />
        </div>

        {/* Block 2: Argument 1 */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase">
              2. Blokk: 1. Érv (Tétel + Indoklás + Példa)
            </span>
            <span className="text-[11px] text-stone-600">T-I-P szerkezet</span>
          </div>
          <textarea
            rows={3}
            value={arg1Text}
            onChange={(e) => setArg1Text(e.target.value)}
            className="w-full p-3 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-serif text-stone-900 leading-relaxed"
          />
        </div>

        {/* Block 3: Argument 2 */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase">
              3. Blokk: 2. Érv (Második szempont kifejtése)
            </span>
            <span className="text-[11px] text-stone-600">T-I-P szerkezet</span>
          </div>
          <textarea
            rows={3}
            value={arg2Text}
            onChange={(e) => setArg2Text(e.target.value)}
            className="w-full p-3 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-serif text-stone-900 leading-relaxed"
          />
        </div>

        {/* Block 4: Counter-argument and Refutation */}
        <div className="bg-white border border-rose-200 rounded-xl p-5 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-rose-800 uppercase">
              4. Blokk: Ellenérv bemutatása és Cáfolata
            </span>
            <span className="text-[11px] text-rose-600">„Bár igaz, hogy..., mégis...”</span>
          </div>
          <textarea
            rows={3}
            value={refutationText}
            onChange={(e) => setRefutationText(e.target.value)}
            className="w-full p-3 text-xs bg-rose-50/50 border border-rose-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-rose-500 font-serif text-stone-900 leading-relaxed"
          />
        </div>

        {/* Block 5: Conclusion */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-2xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase">
              5. Blokk: Befejezés (Összegzés és Előremutató gondolat)
            </span>
            <span className="text-[11px] text-stone-600">Új érv nélkül!</span>
          </div>
          <textarea
            rows={3}
            value={conclusionText}
            onChange={(e) => setConclusionText(e.target.value)}
            className="w-full p-3 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 font-serif text-stone-900 leading-relaxed"
          />
        </div>
      </div>

      {/* Full Preview and Actions */}
      <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold text-stone-900">
            A kész érvelő fogalmazás egyben:
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-stone-300 hover:bg-stone-50 rounded-lg transition-colors cursor-pointer text-stone-800"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Másolva!' : 'Szöveg másolása'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-stone-300 hover:bg-stone-50 rounded-lg transition-colors cursor-pointer text-stone-800"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Nyomtatás</span>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-stone-200 font-serif text-sm leading-loose text-stone-900 space-y-4 shadow-2xs">
          <h4 className="font-bold text-lg text-amber-950 pb-2 border-b border-stone-100">
            {currentTopic.title}
          </h4>
          <p className="indent-4">{introText}</p>
          <p className="indent-4">{arg1Text}</p>
          <p className="indent-4">{arg2Text}</p>
          <p className="indent-4">{refutationText}</p>
          <p className="indent-4">{conclusionText}</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4 border-t border-stone-200">
        <button
          onClick={() => onNext('conclusion')}
          className="text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
        >
          ‹ Vissza: A jó lezárás
        </button>

        <button
          onClick={() => onNext('quiz')}
          className="flex items-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-medium rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          <span>Tovább a 7. lépésre: Érvelési Bajnokság (Kvíz)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
