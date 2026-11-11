import React from 'react';
import { BookOpen, CheckCircle2, AlertTriangle, Sparkles, Scale, FileText } from 'lucide-react';

export const WritingGuide: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto py-6">
      {/* Editorial Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800 mb-2">
          <span>8. Osztályos Érvelési Kisokos</span>
          <span aria-hidden="true">·</span>
          <span>Felvételi felkészülés</span>
          <span aria-hidden="true">·</span>
          <span>Eredményes fogalmazás</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-2">
          Hogyan írjunk hibátlan érvelő fogalmazást?
        </h1>
        <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
          Az érvelő fogalmazás a 8. osztályos központi felvételi és a magyarórák egyik legfontosabb műfaja. 
          Itt megtalálod a kötelező szerkezetet, a T-I-P szabályt és a leggyakoribb felvételi hibákat.
        </p>
      </div>

      {/* 5-Paragraph Structure Map */}
      <section className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-800" />
          <span>A hibátlan érvelő esszé 5 bekezdése</span>
        </h2>

        <div className="space-y-3">
          <div className="p-4 bg-white border border-stone-200 rounded-xl shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase">
              <span>1. Bekezdés: Bevezetés (Kb. 25–40 szó)</span>
              <span className="font-mono text-stone-500">10–15%</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              Figyelemfelkeltő indítás (kérdés, meghökkentő adat vagy erős ellentét) + a téma megnevezése + 
              a <strong>tételmondat</strong> (a szerző kristálytiszta állásfoglalása).
            </p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-xl shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase">
              <span>2. Bekezdés: 1. Főérv a T-I-P modellel (Kb. 40–60 szó)</span>
              <span className="font-mono text-stone-500">25%</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              <strong>Tétel</strong> (egyértelmű kijelentés) + <strong>Indoklás</strong> (<em>„mert...”, „ugyanis...”</em>) + 
              <strong>Példa</strong> (életszerű bizonyíték, konkrét felmérés vagy tapasztalat).
            </p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-xl shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase">
              <span>3. Bekezdés: 2. Főérv (Második szempont) (Kb. 40–60 szó)</span>
              <span className="font-mono text-stone-500">25%</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              Új szempont bevonása (pl. egészségügyi, közösségi vagy gazdasági érv) ugyanúgy a T-I-P felépítést követve.
            </p>
          </div>

          <div className="p-4 bg-white border border-rose-200 rounded-xl shadow-2xs space-y-1 bg-rose-50/30">
            <div className="flex items-center justify-between text-xs font-bold text-rose-900 uppercase">
              <span>4. Bekezdés: Ellenérv és Cáfolat (Kb. 35–50 szó)</span>
              <span className="font-mono text-stone-500">20%</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              A vitapartner ellenérvének elismerése (<em>„Bár kétségtelen, hogy van igazság abban...”</em>), 
              majd elegáns megcáfolása (<em>„...mindazonáltal meg kell fontolnunk, hogy...”</em>).
            </p>
          </div>

          <div className="p-4 bg-white border border-stone-200 rounded-xl shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-xs font-bold text-amber-900 uppercase">
              <span>5. Bekezdés: Befejezés és Szintézis (Kb. 25–40 szó)</span>
              <span className="font-mono text-stone-500">15%</span>
            </div>
            <p className="text-xs text-stone-700 leading-relaxed">
              Az érvek összegzése új szavakkal, a tétel megerősítése és előremutató tanulság vagy kompromisszum. 
              <strong> Szigorú szabály:</strong> tilos új érvet bevezetni a befejezésbe!
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Traps to Avoid */}
      <section className="bg-stone-100/70 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-700" />
          <span>A 4 leggyakoribb felvételi hiba</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
            <strong className="text-rose-900 block font-bold">1. A puszta vélemény érvnek tekintése</strong>
            <p className="text-stone-600">
              „Szerintem a telefon rossz.” Ez nem érv! Mindig kell mögé a „mert...” indoklás és a konkrét példa.
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
            <strong className="text-rose-900 block font-bold">2. A bekezdések elmulasztása</strong>
            <p className="text-stone-600">
              Egyetlen folyó szöveg átláthatatlan. A felvételin kötelező a bekezdésekkel (beljebb kezdéssel) tagolt 5 egység!
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
            <strong className="text-rose-900 block font-bold">3. Személyeskedés és sértegetés</strong>
            <p className="text-stone-600">
              „Aki nem ért egyet, az buta.” Az érvelés a gondolatot bírálja, nem az embert. Mindig maradj udvarias és mértéktartó!
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200 space-y-1">
            <strong className="text-rose-900 block font-bold">4. Új érv a befejezésben</strong>
            <p className="text-stone-600">
              Ha az utolsó mondatban dobsz be egy új gondolatot, azt már nem tudod bizonyítani, így a fogalmazásod befejezetlen marad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
