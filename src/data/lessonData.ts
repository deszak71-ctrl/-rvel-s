import { BioFact, MatchingItem, QuizQuestion, StanzaData } from '../types';

export const LESSON_PHASES = [
  { id: 'warmup', label: '1. Ráhangolódás', duration: '5-7 perc', description: 'Játékos utazási asszociációk és képeslap-nyomozó' },
  { id: 'bio', label: '2. Életrajz', duration: '8-10 perc', description: 'Babits pályaképe – a legfontosabb sarokpontok' },
  { id: 'poem', label: '3. A vers világa', duration: '15-18 perc', description: 'Messze... messze... – 8 képeslap és stíluselemzés' },
  { id: 'practice', label: '4. Gyakorló feladatok', duration: '7-8 perc', description: 'Interaktív párosítás, szófajvadászat és kvízfeladatok' },
  { id: 'quiz', label: '5. Zárókvíz', duration: '6-7 perc', description: '10 kérdéses pontozott ellenőrzés értékeléssel' },
] as const;

export const WARMUP_SCENARIOS = [
  {
    id: 'post_1',
    clues: [
      'Hűsítő szökőkutak csobognak, ókori fehér márványoszlopok töredékei állnak a mirtuszbokrok között.',
      'A nyári égbolt sötét és fülledt, felette gömbölyded, göndör fellegek tornyosulnak.',
      'A költő a déli forróságot és az antik művészet emlékeit idézi fel.'
    ],
    options: ['Olaszhon (Itália)', 'Némethon (Németország)', 'Angolhon (Anglia)'],
    correctIndex: 0,
    country: 'Olaszhon',
    explanation: 'A szökőkutak, a göndör fellegek, a fülledt ég és a tört márványok Itáliát idézik elénk.'
  },
  {
    id: 'post_2',
    clues: [
      'Hatalmas kormos kéményekből gomolyog a fekete füst, a folyó felett vastag köd lebeg.',
      'Pompás kastélyok mellett gondozott zöld parkok és labdaterek terülnek el, kövér birkanyájak legelnek.',
      'Az ipari forradalom és a hagyományos arisztokrata vidék jellegzetes keveréke.'
    ],
    options: ['Svédhon (Skandinávia)', 'Angolhon (Anglia)', 'Spanyolhon (Spanyolország)'],
    correctIndex: 1,
    country: 'Angolhon',
    explanation: 'A hidak, a ködök, a gyárkémények és a kövér legelők tipikusan Anglia korabeli képét jelenítik meg.'
  },
  {
    id: 'post_3',
    clues: [
      'Sziklaszirtek, szédítő mélységek és örök hó borította jégmezők.',
      'Zerge ugrik a meredélyen, sikló kúszik fel a felhők fölé emelkedő hegyi tanyához.',
      'A levegő olyan tiszta és fagyos, hogy "harapni lehet".'
    ],
    options: ['Göröghon (Görögország)', 'Frankhon (Franciaország)', 'Svájc'],
    correctIndex: 2,
    country: 'Svájc',
    explanation: 'A zerge, a bércek, a sikló, a jégmező és a harapni friss alpesi levegő mind Svájc jelképei.'
  }
];

export const BIO_FACTS: BioFact[] = [
  {
    id: 'origin',
    period: '1883 – 1906',
    title: 'Származás és egyetemi évek',
    summary: 'Szekszárdi nemesi-értelmiségi család gyermeke. Édesanyja fejből szavalta a magyar költészet remekeit.',
    detail: 'Pécsen és Pesten tanult, kiválóan sajátította el a latin és francia nyelvet. A pesti bölcsészkaron kötött életre szóló barátságot Kosztolányi Dezsővel és Juhász Gyulával.',
    keyConcepts: ['Szekszárd', 'Pécs', 'latin és francia', 'Kosztolányi Dezső', 'Juhász Gyula']
  },
  {
    id: 'teaching',
    period: '1906 – 1911',
    title: 'A vidéki tanárság és a fogarasi magány',
    summary: 'Baján, Szegeden, majd a távoli erdélyi Fogarason tanított gimnáziumban.',
    detail: 'Fogaras elzártságában mély magány gyötörte. Ebből a szellemi elszigeteltségből fakadt a vágyakozás az elérhetetlen európai kultúrtájak után: itt született a Messze... messze... is.',
    keyConcepts: ['Fogaras', 'elszigeteltség', 'utazási vágy', 'fogarasi magány']
  },
  {
    id: 'poetadoctus',
    period: '1908 – 1919',
    title: 'A "poeta doctus" és a Nyugat',
    summary: 'A 20. századi magyar irodalom óriása. Tudós költő, a Nyugat vezéregyénisége.',
    detail: '1908-ban a Holnap antológiában robbant be, 1909-ben jelent meg első önálló kötete, a Levelek Iris koszorújából. Később a Nyugat folyóirat szerkesztője, majd főszerkesztője lett haláláig.',
    keyConcepts: ['poeta doctus (tudós költő)', 'A Holnap', 'Levelek Iris koszorújából (1909)', 'Nyugat']
  },
  {
    id: 'late',
    period: '1920 – 1941',
    title: 'Esztergom, Dante és a kései évek',
    summary: 'Dante Isteni színjátékának zseniális fordítója, esztergomi menedék és a beszélgetőfüzetek.',
    detail: 'Esztergomi előhegyi házában az Autogramfal őrzi a kor szellemi nagyságainak látogatását. Dante-fordításáért elnyerte a rangos San Remo-díjat. Élete végén gégedaganata miatt elveszítette a hangját, így "beszélgetőfüzetekkel" érintkezett szeretteivel.',
    keyConcepts: ['Esztergom (Autogramfal)', 'Dante-fordítás (San Remo-díj)', 'beszélgetőfüzetek', 'Jónás könyve']
  }
];

export const BIO_CHECK_QUESTIONS = [
  {
    id: 'bio_q1',
    question: 'Mit jelent a "poeta doctus" kifejezés, amellyel Babitsot illették?',
    options: [
      'Orvos költő, aki gyógyítással is foglalkozott',
      'Tudós költő, rendkívüli műveltséggel és nyelvtudással rendelkező alkotó',
      'Politikai szónok költő, aki forradalmi verseket írt'
    ],
    correctAnswer: 1,
    explanation: 'A latin kifejezés tudós költőt jelent, akinek művészete a mély filozófiai és nyelvi műveltség talaján áll.'
  },
  {
    id: 'bio_q2',
    question: 'Hol tanított Babits, amikor a bezártság és magány élménye a távoli tájak felé fordította?',
    options: ['Bécsben', 'Fogarason', 'Párizsban'],
    correctAnswer: 1,
    explanation: 'Az erdélyi Fogaras kisvárosában tanítva érezte magát kirekesztve a zsongó szellemi életből.'
  },
  {
    id: 'bio_q3',
    question: 'Melyik városbeli nyári házában alakult ki a híres Autogramfal?',
    options: ['Esztergomban', 'Szekszárdon', 'Szegeden'],
    correctAnswer: 0,
    explanation: 'Az esztergomi Előhegyen vett házat feleségével, Török Sophie-val, ahol a vendégek a falra írták nevüket.'
  },
  {
    id: 'bio_q4',
    question: 'Miért kényszerült Babits Mihály élete végén "beszélgetőfüzeteket" használni?',
    options: [
      'Mert titkos naplót vezetett a háborúról',
      'Mert gégedaganata és műtétje miatt elveszítette a hangját',
      'Mert külföldi vendégeivel csak írásban tudott szót érteni'
    ],
    correctAnswer: 1,
    explanation: 'Súlyos gégedaganata miatt nem tudott beszélni, így a látogatókkal és orvosaival kis füzetekbe írva érintkezett.'
  }
];

export const POEM_STANZAS: StanzaData[] = [
  {
    id: 1,
    country: 'Spanyolország',
    countryAdjective: 'Spanyolhon',
    lines: [
      'Spanyolhon. Tarka hímű rét.',
      'Tört árnyat nyujt a minarét.',
      'Bús donna barna balkonon',
      'mereng a bíbor alkonyon.'
    ],
    vocabulary: [
      { word: 'minarét', meaning: 'Muszlim templom (mecset) mellett álló karcsú, magas torony' },
      { word: 'donna', meaning: 'Asszony, nemes hölgy (spanyolul helyesen: doña [donya])' },
      { word: 'balkon', meaning: 'Erkély, a ház falából kiugró nyitott terasz' }
    ],
    sensoryDominance: 'látás',
    sensoryDescription: 'Erőteljes meleg színek: bíbor alkony, barna balkon, tarka hímű rét, tört árnyak.',
    keywords: ['minarét', 'donna', 'balkon', 'bíbor alkony'],
    postcardImageAlt: 'Spanyol tarka rét, minarét sziluettje és bíbor alkonyat',
    colorTheme: 'from-amber-100 to-rose-100 dark:from-amber-950/40 dark:to-rose-950/30',
    badgeBg: 'bg-rose-700 text-rose-50',
    description: 'A déli, mór építészet emlékeit és a melankolikus spanyol hölgy alakját villantja fel a lemenő nap vörös fényében.'
  },
  {
    id: 2,
    country: 'Olaszország',
    countryAdjective: 'Olaszhon',
    lines: [
      'Olaszhon. Göndör fellegek.',
      'Sötét ég lanyhul fülleteg.',
      'Szökőkut vize föllobog.',
      'Tört márvány, fáradt mirtuszok.'
    ],
    vocabulary: [
      { word: 'fülleteg', meaning: 'Fülledt, párás, meleg levegőjű' },
      { word: 'mirtusz', meaning: 'Örökzöld mediterrán cserje, az ókorban a szerelem és béke növénye' },
      { word: 'föllobog', meaning: 'Itt: a szökőkút magasra lövellő vízsugara úgy csap fel, mint a láng' }
    ],
    sensoryDominance: 'tapintás/hő',
    sensoryDescription: 'Fülledt levegő tapintható nehézsége, csobogó hűs víz, hideg sima márvány.',
    keywords: ['göndör fellegek', 'fülleteg ég', 'szökőkút', 'tört márvány', 'mirtuszok'],
    postcardImageAlt: 'Olasz antik szökőkút, tört márvány oszlopok és fülledt nyári felhők',
    colorTheme: 'from-sky-100 to-indigo-100 dark:from-sky-950/40 dark:to-indigo-950/30',
    badgeBg: 'bg-indigo-700 text-indigo-50',
    description: 'Az antik Róma romjai, a szökőkutak barokk játéka és a mediterrán fülledtség tökéletes festői pillanata.'
  },
  {
    id: 3,
    country: 'Görögország',
    countryAdjective: 'Göröghon',
    lines: [
      'Göröghon. Szirtek, régi rom,',
      'ködöt pipáló bús orom.',
      'A lég sűrű, a föld kopár.',
      'Nyáj, pásztorok, fenyő, gyopár.'
    ],
    vocabulary: [
      { word: 'ködöt pipáló', meaning: 'Költői kép: a hegycsúcs köré gyűlő felhőpamacs úgy néz ki, mintha pipafüst lenne' },
      { word: 'orom', meaning: 'Hegycsúcs, meredek magas hegygerinc' },
      { word: 'gyopár', meaning: 'Havasi gyopár, alacsony termetű, ritka hegyi vadvirág molyhos levelekkel' }
    ],
    sensoryDominance: 'térérzet',
    sensoryDescription: 'Meredek kopár hegyoldalak, sűrű levegő, végtelen antik magány.',
    keywords: ['szirtek', 'régi rom', 'bús orom', 'kopár föld', 'pásztorok', 'gyopár'],
    postcardImageAlt: 'Görög sziklás hegyoldal antik romokkal és ködös ormokkal',
    colorTheme: 'from-emerald-100 to-teal-100 dark:from-emerald-950/40 dark:to-teal-950/30',
    badgeBg: 'bg-teal-700 text-teal-50',
    description: 'Klasszikus antikvitás és pásztori idill ötvözete a vad, ködbe burkolózó görög hegyek között.'
  },
  {
    id: 4,
    country: 'Svájc',
    countryAdjective: 'Svájc',
    lines: [
      'Svájc. Zerge, bércek, szédület,',
      'Sikló. Major felhők felett.',
      'Sötétzöld völgyek, jégmező:',
      'Harapni friss a levegő.'
    ],
    vocabulary: [
      { word: 'zerge', meaning: 'Magashegyi, meredek sziklákon fürgén mozgó vadon élő patás állat' },
      { word: 'sikló', meaning: 'Meredek hegyoldalon síneken közlekedő kötélvontatású jármű' },
      { word: 'major', meaning: 'Hegyoldali gazdasági épület, tanya, erdei lakás' },
      { word: 'jégmező', meaning: 'Gleccser, magashegyi összefüggő örök jégtakaró' }
    ],
    sensoryDominance: 'tapintás/hő',
    sensoryDescription: 'Csípős hideg, harapható hegyi frissesség, szédítő függőleges térérzet.',
    keywords: ['zerge', 'bércek', 'szédület', 'sikló', 'major', 'jégmező', 'harapni friss'],
    postcardImageAlt: 'Alpesi havas hegycsúcsok, siklóvasút és felhők feletti major Svájcban',
    colorTheme: 'from-cyan-100 to-blue-100 dark:from-cyan-950/40 dark:to-blue-950/30',
    badgeBg: 'bg-cyan-800 text-cyan-50',
    description: 'A legdinamikusabb, leginkább mozgást idéző leírás: sikló emelkedik, a szédület és a metsző alpesi tisztaság ragadja magával az olvasót.'
  },
  {
    id: 5,
    country: 'Németország',
    countryAdjective: 'Némethon',
    lines: [
      'Némethon. Város, régi ház:',
      'emeletes tető, faváz.',
      'Gégérek, kancsók, ó kutak,',
      'hízott polgárok, szűk utak.'
    ],
    vocabulary: [
      { word: 'faváz', meaning: 'Gerendavázas építkezés (Fachwerk), a német középkori városok jellegzetes háztípusa' },
      { word: 'gégér', meaning: 'Régi kútcsurgató, kifolyócső vagy oromzati vízköpő' },
      { word: 'ó', meaning: 'Régi, ódon (ó kutak = ódon, régi kutak)' }
    ],
    sensoryDominance: 'látás',
    sensoryDescription: 'Kanyargós, szűk macskaköves utcák, hegyes emeletes tetők, kő- és fafaragványok.',
    keywords: ['faváz', 'gégérek', 'ó kutak', 'hízott polgárok', 'szűk utak'],
    postcardImageAlt: 'Német középkori favázas ódon házak és szűk utcák kút kancsókkal',
    colorTheme: 'from-amber-100 to-stone-200 dark:from-amber-950/40 dark:to-stone-900',
    badgeBg: 'bg-stone-700 text-stone-50',
    description: 'Nyugodt, jól táplált polgári békesség egy ódon német kisváros hangulatos, keskeny utcáin.'
  },
  {
    id: 6,
    country: 'Franciaország',
    countryAdjective: 'Frankhon',
    lines: [
      'Frankhon. Vidám, könnyelmű nép.',
      'Mennyi kirakat, mennyi kép!',
      'Mekkora nyüzsgés, mennyi hang:',
      'masina, csengő, kürt, harang.'
    ],
    vocabulary: [
      { word: 'masina', meaning: 'Gép; az 1900-as évek elején így nevezték az automobilokat, autóbuszokat' },
      { word: 'kürt', meaning: 'A korai autók gumilabdás dudája, közlekedési hangjelzés' },
      { word: 'Frankhon', meaning: 'Franciaország (a frankok népnevéből eredő régies magyar elnevezés)' }
    ],
    sensoryDominance: 'hallás',
    sensoryDescription: 'Zsongás, dübörgés, csilingelés, tülkölés: a nagyvárosi Párizs vibráló hangzavara.',
    keywords: ['vidám nép', 'kirakat', 'nyüzsgés', 'masina', 'csengő', 'kürt', 'harang'],
    postcardImageAlt: 'Párizsi sugárút nyüzsgő kirakatokkal, korai automobilokkal és harangokkal',
    colorTheme: 'from-violet-100 to-fuchsia-100 dark:from-violet-950/40 dark:to-fuchsia-950/30',
    badgeBg: 'bg-violet-800 text-violet-50',
    description: 'A vers leghangosabb, legmozgalmasabb versszaka: a Belle Époque fényei, a párizsi modern technika és divat.'
  },
  {
    id: 7,
    country: 'Anglia',
    countryAdjective: 'Angolhon',
    lines: [
      'Angolhon. Hidak és ködök.',
      'Sok kormos kémény füstölög.',
      'Kastélyok, parkok, labdatér,',
      'mert legelőkön nyáj kövér.'
    ],
    vocabulary: [
      { word: 'labdatér', meaning: 'Golf- vagy teniszpálya, a korabeli angol úri sportok tere' },
      { word: 'kormos kémény', meaning: 'Az ipari forradalom gyárkéményei, amelyek London felett a híres szmogot okozták' },
      { word: 'mert legelő', meaning: 'Bekerített, gondozott magánbirtok legelője' }
    ],
    sensoryDominance: 'látás',
    sensoryDescription: 'Szürke füstös köd a hidak felett, szemben a méregzöld, virágzó vidéki kastélyparkokkal.',
    keywords: ['hidak', 'ködök', 'kormos kémény', 'kastélyok', 'parkok', 'labdatér'],
    postcardImageAlt: 'Londoni ködös Temze hidakkal és füstölő gyárkéményekkel, valamint vidéki parkkal',
    colorTheme: 'from-slate-200 to-emerald-100 dark:from-slate-900 dark:to-emerald-950/30',
    badgeBg: 'bg-slate-700 text-slate-50',
    description: 'Kettős világ: az iparosodott, füstös brit nagyváros és a békés, kastélyos vidéki birtokok kontrasztja.'
  },
  {
    id: 8,
    country: 'Svédország & A LÍRAI FORDULAT',
    countryAdjective: 'Svédhon',
    lines: [
      'Svédhon. Csipkézve hull a fjord,',
      'sötétkék vízbe durva folt.',
      'Nagy fák és kristálytengerek,',
      'Rabsorsom milyen mostoha,',
      'hogy mind nem láthatom soha!'
    ],
    vocabulary: [
      { word: 'fjord', meaning: 'Gleccserek által kivájt, meredek sziklafalakkal övezett, mély tengeröböl' },
      { word: 'mostoha', meaning: 'Kegyetlen, rideg, nem szerető, igazságtalan (itt a költő sorsa)' },
      { word: 'rabsors', meaning: 'A tehetetlenség, a szegénység és a fogarasi magány béklyója, amely nem engedi világot látni' }
    ],
    sensoryDominance: 'látás',
    sensoryDescription: 'Hűvös kristálytiszta kék tenger, fenyvesek, majd a szívbe maró lemondás és fájdalom.',
    keywords: ['fjord', 'sötétkék víz', 'kristálytengerek', 'rabsorsom', 'nem láthatom soha'],
    postcardImageAlt: 'Északi kristálytiszta fjord sötétkék vízzel és a költő vágyakozó lemondásával',
    colorTheme: 'from-blue-200 to-slate-200 dark:from-blue-950/60 dark:to-slate-900',
    badgeBg: 'bg-red-800 text-red-50',
    description: 'A költemény dramatikus zárlata! A csodás európai utazás lelepleződik: mindez csak képzeletbeli illúzió volt, amit a költő saját "rabsorsa" miatt soha nem láthat a valóságban.'
  }
];

export const MATCHING_ITEMS: MatchingItem[] = [
  { id: 'm1', country: 'Spanyolhon', motifs: 'Tarka rét, minarét, bús donna, bíbor alkony', explanation: 'A lemenő bíbor napfényben merengő spanyol hölgy és a mecset tornya.' },
  { id: 'm2', country: 'Olaszhon', motifs: 'Göndör fellegek, fülleteg ég, szökőkút, tört márvány, mirtuszok', explanation: 'A mediterrán fülledtség és az ókori márványemlékek országa.' },
  { id: 'm3', country: 'Göröghon', motifs: 'Szirtek, régi rom, ködöt pipáló orom, pásztorok, gyopár', explanation: 'A magashegyi antik sziklák és a békés pásztorok vidéke.' },
  { id: 'm4', country: 'Svájc', motifs: 'Zerge, bércek, sikló, felhők feletti major, jégmező', explanation: 'A szédítő alpesi magaslatok és a "harapni friss" levegő.' },
  { id: 'm5', country: 'Némethon', motifs: 'Favázas házak, emeletes tetők, gégérek, kancsók, szűk utak', explanation: 'A középkori ódon utcácskák és a polgári békesség.' },
  { id: 'm6', country: 'Frankhon', motifs: 'Vidám nép, kirakatok, nyüzsgés, masina, csengő, kürt', explanation: 'A modern nagyváros, a Belle Époque Párizsának zsongása.' },
  { id: 'm7', country: 'Angolhon', motifs: 'Hidak, ködök, kormos kémény, kastélyok, labdatér', explanation: 'A füstös ipari város és az úri vidéki birtokok kettőssége.' },
  { id: 'm8', country: 'Svédhon', motifs: 'Csipkézett fjord, kristálytengerek és a fájdalmas rabsors panasza', explanation: 'Az északi táj leírását követi a lemondó vágyakozás csattanója.' }
];

export const WORD_HUNT_ITEMS = [
  { word: 'minarét', type: 'noun', reason: 'Főnév – egy karcsú muszlim torony állóképi látványa' },
  { word: 'balkonon', type: 'noun', reason: 'Főnév ragos alakja – a ház kiugró terasza' },
  { word: 'mereng', type: 'verb', reason: 'Ige – belső elrévedést fejez ki, nem valódi fizikai helyváltoztatást' },
  { word: 'fülleteg', type: 'noun', reason: 'Melléknév – érzékletes állapotfestő szó' },
  { word: 'föllobog', type: 'verb', reason: 'Ige – a szökőkút vízsugarának felcsapó mozgása' },
  { word: 'tört márvány', type: 'noun', reason: 'Főnévi szerkezet (melléknév + főnév) – állóképi festői elem' },
  { word: 'szédület', type: 'noun', reason: 'Főnév – testi állapot és térérzet megnevezése' },
  { word: 'kormos', type: 'noun', reason: 'Melléknév – látványt színező névszó' },
  { word: 'füstölög', type: 'verb', reason: 'Ige – lassú, folyamatos állapotot kifejező ige' },
  { word: 'masina', type: 'noun', reason: 'Főnév – technikai eszköz, automobil' },
  { word: 'rabsorsom', type: 'noun', reason: 'Főnév birtokos jellel – a költő megkötözött helyzete' },
  { word: 'láthatom', type: 'verb', reason: 'Ige – a záró felkiáltás egyetlen akaratot kifejező igéje (amely tagadással párosul!)' }
];

export const CLOZE_TASKS = [
  {
    id: 'cloze_1',
    sentence: 'Spanyolhon. Tarka hímű rét. Tört árnyat nyujt a ___ .',
    missingWord: 'minarét',
    options: ['minarét', 'szökőkút', 'kastély'],
    hint: 'Karcsú torony a muszlim mecset mellett.'
  },
  {
    id: 'cloze_2',
    sentence: 'Sötétzöld völgyek, jégmező: Harapni ___ a levegő.',
    missingWord: 'friss',
    options: ['friss', 'hideg', 'sűrű'],
    hint: 'Svájc magaslatán ilyen a hegyi szellő.'
  },
  {
    id: 'cloze_3',
    sentence: 'Mekkora nyüzsgés, mennyi hang: masina, csengő, ___ , harang.',
    missingWord: 'kürt',
    options: ['kürt', 'szitár', 'dob'],
    hint: 'A párizsi korai autók tülkölő dudája.'
  },
  {
    id: 'cloze_4',
    sentence: '___ milyen mostoha, hogy mind nem láthatom soha!',
    missingWord: 'Rabsorsom',
    options: ['Rabsorsom', 'Végzetem', 'Életem'],
    hint: 'A fogarasi bezártságra utaló felkiáltás az utolsó előtti sorban.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Mit jelent a Babits Mihályra gyakran használt "poeta doctus" kifejezés?',
    options: [
      'Gyakorló orvos, aki hivatása mellett versírással pihent',
      'Tudós költő, aki hatalmas műveltséggel és mély filozófiai tudással alkotott',
      'Katonai orvos, aki a harctérről küldött tudósításokat',
      'Vándorköltő, aki bejárta a világ összes egyetemét'
    ],
    correctAnswer: 1,
    hint: 'A latin kifejezés a magas szintű tudományos és nyelvi műveltségre utal.',
    explanation: 'A "poeta doctus" tudós költőt jelent. Babits kiválóan ismerte a latin, görög és modern nyelveket, filozófiai mélység jellemezte műveit.'
  },
  {
    id: 2,
    question: 'Melyik kötetében jelent meg a "Messze... messze..." című költemény 1909-ben?',
    options: [
      'Nyugtalan órák',
      'Levelek Iris koszorújából',
      'A Holnap antológia',
      'Jónás könyve'
    ],
    correctAnswer: 1,
    hint: 'Ez volt Babits első önálló verseskötete, amely azonnal az élvonalba emelte.',
    explanation: 'A költemény Babits első önálló verseskönyvében, a Levelek Iris koszorújából (1909) című kötetben látott napvilágot.'
  },
  {
    id: 3,
    question: 'Hol tanított Babits, amikor a bezártság és a "rabsors" miatti elvágyódás a vers megírására késztette?',
    options: [
      'Párizsban a Sorbonne egyetemen',
      'Az erdélyi Fogarason',
      'Budapesten a bölcsészkaron',
      'Esztergomban az Előhegyen'
    ],
    correctAnswer: 1,
    hint: 'Egy erdélyi kisváros, ahol a hegyek közé zárva magányosnak érezte magát.',
    explanation: 'A fogarasi gimnáziumi évek alatt érezte magát számkivetettnek, elzárva a budapesti és európai kulturális élettől.'
  },
  {
    id: 4,
    question: 'Hány európai országot villant fel Babits képzeletbeli utazása a költeményben?',
    options: [
      'Négyet',
      'Hatot',
      'Nyolcat',
      'Tizenkettőt'
    ],
    correctAnswer: 2,
    hint: 'Minden egyes versszak egy-egy önálló ország képeslapja.',
    explanation: 'A vers pontosan 8 ország képét vetíti elénk: Spanyolhon, Olaszhon, Göröghon, Svájc, Némethon, Frankhon, Angolhon, Svédhon.'
  },
  {
    id: 5,
    question: 'Melyik stílusirányzat sajátossága a pillanat megragadása és a színes állóképek sorozata a versben?',
    options: [
      'Klasszicizmus',
      'Impresszionizmus',
      'Naturalizmus',
      'Romantika'
    ],
    correctAnswer: 1,
    hint: 'Monet napfelkelte-festményének címe ihlette ezt a festészeti és irodalmi irányzatot.',
    explanation: 'Az impresszionizmus a pillanatnyi érzéki benyomások, a fények, hangulatok és színek megragadására törekszik.'
  },
  {
    id: 6,
    question: 'Milyen szófajtani sajátosság jellemzi leginkább a költemény nyelvezetét?',
    options: [
      'Szinte csak mozgalmas igékből áll, cselekménydús rohanás jellemzi',
      'Névszók (főnevek és melléknevek) halmozása dominál, alig akad benne mozgást jelölő ige',
      'Kizárólag indulatszavak és kötőszavak ritmusára épül',
      'Kérdő névmások és párbeszédek sora teszi dramatikussá'
    ],
    correctAnswer: 1,
    hint: 'Gondolj arra, miért hat a vers úgy, mint egy képeslap-album!',
    explanation: 'A vers állókép-jellegét az adja, hogy a névszók uralkodnak: felsorolások, színek és formák váltják egymást, míg a cselekvő igék szinte teljesen hiányoznak.'
  },
  {
    id: 7,
    question: 'Mit jelent a versben szereplő "donna" szó?',
    options: [
      'Mediterrán virágfajta',
      'Asszony, nemes hölgy',
      'Egykori spanyol pénznem',
      'Hangos utcai zenész'
    ],
    correctAnswer: 1,
    hint: 'A spanyol doña vagy olasz madonna szóból ismerős.',
    explanation: 'A "donna" asszonyt, nemes hölgyet jelent (a spanyol nyelvben doña alakban).'
  },
  {
    id: 8,
    question: 'Melyik országhoz köti a költő a "masina, csengő, kürt, harang" modern, technikai hangjait?',
    options: [
      'Göröghonhoz',
      'Frankhonhoz (Franciaország / Párizs)',
      'Némethonhoz',
      'Svájchoz'
    ],
    correctAnswer: 1,
    hint: 'A Belle Époque pezsgő metropolisza, a divat és kirakatok városa.',
    explanation: 'Frankhonban (Párizsban) villan fel a 20. század eleji technika és a modern világvárosi forgalom kavalkádja.'
  },
  {
    id: 9,
    question: 'Mi a vers utolsó két sorának lírai jelentősége ("Rabsorsom milyen mostoha, / hogy mind nem láthatom soha!")?',
    options: [
      'Kiderül, hogy a költő valójában már mindegyik országban járt, de csalódott',
      'A lírai én fájdalmas vallomása arról, hogy a csodás utazás csak képzeletbeli vágy maradt, a valóságban elérhetetlen számára',
      'A költő kijelenti, hogy soha többé nem szeretne Magyarországra visszatérni',
      'A vers a háborús katonai rabságról tudósít'
    ],
    correctAnswer: 1,
    hint: 'Ez a vers lírai csattanója és mély tragikuma.',
    explanation: 'A vers addigi idilli utazása lelepleződik: mindez pusztán szellemi vágyódás, mert anyagi és élethelyzeti korlátai miatt nem utazhat el e csodás helyekre.'
  },
  {
    id: 10,
    question: 'Miért híres Babits esztergomi előhegyi nyári háza a magyar kultúrtörténetben?',
    options: [
      'Mert itt nyomtatták a Nyugat első számát',
      'Mert a falán lévő Autogramfalon a korszak legkiválóbb írói, költői hagyták ott kézjegyüket',
      'Mert itt hozták létre az első magyarországi rádióállomást',
      'Mert itt tartották az első San Remo-díjátadót'
    ],
    correctAnswer: 1,
    hint: 'A falon ceruzával, tollal aláírt neveket Babits felesége freskófestékkel konzerválta.',
    explanation: 'Az esztergomi Autogramfalon a Nyugat és a kor szellemi nagyságai (pl. Móricz, Kosztolányi, Karinthy, Radnóti stb.) szignózták a falat, amit Török Sophie művészien átrajzolt.'
  }
];
