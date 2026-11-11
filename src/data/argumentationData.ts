import {
  ArgumentTopic,
  IntroExample,
  TIPArgumentPuzzle,
  FallacyCard,
  StyleTransformTask,
  QuizQuestion,
} from '../types';

export const ARGUMENT_STEPS = [
  { id: 'intro', label: '1. A jó bevezetés', time: '10 perc', description: 'Figyelemfelkeltés, témafelvetés és tételmondat megfogalmazása' },
  { id: 'tip_model', label: '2. Az érv felépítése (T-I-P)', time: '12 perc', description: 'Tétel + Indoklás + Példa, valamint az érvelési hibák leleplezése' },
  { id: 'pro_contra', label: '3. Pro és Kontra (Mérleg)', time: '12 perc', description: 'Kétoldalú mérlegelés, ellenérvek kezelése és a hatásos cáfolat' },
  { id: 'personal_opinion', label: '4. Személyes vélemény', time: '8 perc', description: 'Elegáns, meggyőző kifejezéstár és a vitakultúra szabályai' },
  { id: 'conclusion', label: '5. A jó lezárás', time: '8 perc', description: 'Összegzés, végső következtetés és jövőkép (új érv nélkül!)' },
  { id: 'workshop', label: '6. Érvelő Műhely', time: '15 perc', description: 'Lépésről lépésre saját érvelő fogalmazás építése Érv-Mérővel' },
  { id: 'quiz', label: '7. Érvelési Bajnokság', time: '10 perc', description: '10 kérdéses pontozott ellenőrzés értékeléssel' },
] as const;

export const ARGUMENT_TOPICS: ArgumentTopic[] = [
  {
    id: 'travel_experience',
    title: 'Képzeletbeli utazás vagy valódi világjárás?',
    dilemma: 'Elegendő-e képernyőkön, könyveken és képeslapokon át megismerni a világot (mint Babits tette a Messze... messze... versében), vagy csak a személyes tapasztalat értékes?',
    category: 'irodalom',
    context: 'Babits Mihály a vers megírásakor sosem járt Spanyolhonban vagy Svédhonban, mégis lenyűgöző képeket festett. A 21. században az internet korában ismét felmerül: helyettesítheti-e a digitális világ a valóságos élményeket?',
    proArguments: [
      {
        thesis: 'A könyvek és a virtuális utazások gazdagítják a képzelőerőt és bárki számára elérhetőek.',
        reasoning: 'Mivel a valóságos utazás rengeteg pénzbe kerül és környezeti terheléssel jár, az olvasmányélmény környezetbarát módon tágítja a látókört.',
        example: 'Például Babits Mihály a fogarasi szobájában ülve olyan érzékletesen jelenítette meg az alpesi vagy spanyol tájakat, hogy az olvasó ma is szinte látja és hallja azokat.'
      },
      {
        thesis: 'A virtuális felfedezés biztonságos és időtakarékos tanulási forma.',
        reasoning: 'A diákok néhány perc alatt bejárhatják a Louvre termeit vagy az ókori Athént anélkül, hogy heteket kellene utazniuk.',
        example: 'Egy digitális múzeumi sétán a 8. osztályosok olyan műkincseket tanulmányozhatnak közelről, amelyeket élőben kordonok védenek.'
      }
    ],
    contraArguments: [
      {
        thesis: 'A személyes tapasztalatot és a valóságos érzékszervi benyomásokat semmilyen leírás nem pótolhatja.',
        reasoning: 'Egy táj valódi illatát, a helyi emberekkel folytatott beszélgetéseket és a váratlan kalandokat csak a helyszínen lehet megélni.',
        example: 'Például hiába nézünk képeket a svájci hegyekről, a szikrázó hó hidegét és a ritka alpesi levegő haraphatóságát csak a bérceken érezzük át.'
      },
      {
        thesis: 'A virtuális élmények passzívvá tehetik az embert, míg a valódi utazás önállóságra tanít.',
        reasoning: 'Egy idegen országban tájékozódni, nyelvet használni és problémákat megoldani alapvető személyiségfejlesztő élmény.',
        example: 'Aki elutazik egy külföldi táborba, megtanul idegen nyelven segítséget kérni a pályaudvaron, ami magabiztossá teszi az életben.'
      }
    ]
  },
  {
    id: 'smartphone_school',
    title: 'Okostelefonok az iskolai szünetekben',
    dilemma: 'Legyen-e teljes telefonhasználati tilalom a tanítási nap során (a szünetekben is), vagy indokolt engedélyezni a diákoknak a készülékek használatát?',
    category: 'iskola',
    context: 'Számos európai országban és Magyarországon is törvényi korlátozás vonatkozik az iskolai okoseszközökre. Hogyan érvelhetünk a kérdésben?',
    proArguments: [
      {
        thesis: 'A szünetbeli telefonmentesség javítja a valódi közösségi kapcsolatokat és a koncentrációt.',
        reasoning: 'Amikor a diákok nem a képernyőt görgetik, kénytelenek egymással beszélgetni, játszani, ami csökkenti a digitális elmagányosodást.',
        example: 'Egy magyarországi gimnáziumban a készülékek dobozba zárása után 40%-kal nőtt a könyvtárba járó és a folyosón csocsózó diákok száma.'
      }
    ],
    contraArguments: [
      {
        thesis: 'A teljes tiltás helyett a felelős, szabályozott digitális használatra kellene tanítani.',
        reasoning: 'A 21. századi élet elengedhetetlen része az okoseszköz; a tiltás nem tanít meg az időbeosztásra és az önkontrollra.',
        example: 'Például sok diák a szünetben keresne rá a tananyaggal kapcsolatos kérdésekre vagy ellenőrizné a buszmenetrendet a hazajutáshoz.'
      }
    ]
  },
  {
    id: 'ai_homework',
    title: 'Mesterséges intelligencia a házi feladatokban',
    dilemma: 'Szabad-e a diákoknak AI-eszközöket használniuk a tanuláshoz és a fogalmazások vázlatának elkészítéséhez?',
    category: 'technológia',
    context: 'A mesterséges intelligencia (pl. chatbotok) másodpercek alatt kész esszéket írnak. Segítik a felkészülést, vagy elsorvasztják a gondolkodást?',
    proArguments: [
      {
        thesis: 'Az AI személyre szabott virtuális korrepetitorként segítheti a megértést.',
        reasoning: 'Ha egy diák nem ért egy bonyolult fizikai vagy nyelvtani fogalmat, a rendszer az ő szintjén, türelmesen magyarázza el újra meg újra.',
        example: 'Például egy 8. osztályos felteheti a kérdést: "Magyarázd el egyszerű példával az impresszionizmust!", és azonnal szemléletes válaszokat kap.'
      }
    ],
    contraArguments: [
      {
        thesis: 'A kész szövegek másolása elsorvasztja a saját kritikai gondolkodást és a fogalmazási készséget.',
        reasoning: 'Az íráskészség csak kitartó gyakorlással fejlődik; ha a gép gondolkodik a diák helyett, a tanuló a középiskolai felvételin védtelen marad.',
        example: 'Azok a diákok, akik dolgozatírás előtt mindig AI-val fogalmaztatták meg a leckéjüket, a papíralapú vizsgán nem jutottak túl az első két mondaton.'
      }
    ]
  },
  {
    id: 'weekend_homework',
    title: 'Hétvégi házi feladat a 8. osztályban',
    dilemma: 'Legyen-e hétvégi házi feladat 8. osztályban a felvételi készülés mellett, vagy tilos legyen a hétvégi feladás?',
    category: 'iskola',
    context: 'A 8. osztályosok a legterheltebb korosztály: a középiskolai írásbeli felvételi, a szóbeli vizsgák és a jegyek megtartása óriási nyomást jelent.',
    proArguments: [
      {
        thesis: 'A hétvégi feladatok segítenek a vizsgarutin megszerzésében és az anyag elmélyítésében.',
        reasoning: 'A felvételi típusfeladatok (pl. 45 perces feladatsorok) hétköznap a 7-8 tanóra után nem oldhatók meg kellő figyelemmel és nyugalommal.',
        example: 'Például szombat délelőtt egy teljes magyar felvételi próbasor megírása hűen szimulálja a januári vizsgahelyzetet.'
      }
    ],
    contraArguments: [
      {
        thesis: 'A folyamatos túlterheltség kimerültséghez és kiégéshez vezet, ami rontja a teljesítményt.',
        reasoning: 'Az agy a pihenés és a fizikai mozgás során rendezi és rögzíti az elméleti ismereteket; pihenés nélkül csökken a kreativitás.',
        example: 'Orvosi kutatások bizonyítják, hogy azok a serdülők, akik vasárnap sportolnak és eleget alszanak, hétfőn 20%-kal jobb koncentrációval dolgoznak.'
      }
    ]
  }
];

export const INTRO_EXAMPLES: IntroExample[] = [
  {
    id: 'intro_weak',
    type: 'weak',
    title: 'A sablonos, unalmas bevezetés',
    text: 'Ebben a fogalmazásban arról fogok írni, hogy kell-e telefon az iskolába vagy sem. Sokan így gondolják, sokan úgy, de én most leírom a véleményemet.',
    critique: 'Hiba: Nem kelti fel a figyelmet, közhelyes ("arról fogok írni..."), nincs benne tételmondat és nem ad semmilyen gondolati kapaszkodót az olvasónak.',
    score: 3
  },
  {
    id: 'intro_aggressive',
    type: 'aggressive',
    title: 'A túl agresszív, elfogult bevezetés',
    text: 'Teljes baromság az iskolai telefontiltás! Csak a begyöpösödött felnőttek találták ki, akik semmit sem értenek a mai világból, és minden normális ember tudja, hogy a tiltás értelmetlen!',
    critique: 'Hiba: Személyeskedő, sértő hangnem, nincsenek benne valós érvek, és azonnal elidegeníti azokat az olvasókat, akik más véleményen vannak. Az érvelés nem veszekedés!',
    score: 2
  },
  {
    id: 'intro_ideal',
    type: 'ideal',
    title: 'A hatásos, mesteri bevezetés',
    text: 'A 21. századi diákok zsebében ott lapul a világ összes könyvtára, enciklopédiája és kommunikációs csatornája. Mégis, a tanórákon és a folyosókon a villogó képernyők gyakran nem a tanulást, hanem az elszigetelődést és a figyelemelterelést szolgálják. Véleményem szerint az iskolai szünetekben fenntartott eszközmentesség elengedhetetlen a valódi közösségi kapcsolatok és a pihentető feltöltődés megőrzéséhez.',
    critique: 'Mesteri: Erős figyelemfelkeltő képpel indít, felvázolja a probléma fontosságát és a két oldalt, majd a bekezdés végén világos, határozott tételmondatot fogalmaz meg!',
    score: 10
  }
];

export const TIP_PUZZLES: TIPArgumentPuzzle[] = [
  {
    id: 'tip_p1',
    topic: 'Miért fontosak a kötelező olvasmányok?',
    theses: [
      'A klasszikus regények olvasása gazdagítja a szókincset és az empátiát.',
      'Minden regényt kötelezővé kellene tenni az országban.',
      'Szerintem a könyvek nagyon nehezek a táskában.'
    ],
    reasonings: [
      'mert a sok száz oldal cipelése hátfájást okozhat a diákoknak.',
      'mert a szereplők belső vívódásainak követése során megértjük a tetteik mögött rejlő emberi indítékokat és az érzelmek sokféleségét.',
      'mert a tanárok szeretik, ha sokat olvasunk.'
    ],
    examples: [
      'Például Jókai Mór műveit olvasva a diákok olyan kifejezésekkel találkoznak, amelyek a hétköznapi beszédben nem fordulnak elő, mégis elmélyítik a gondolkodást.',
      'Például tegnap a barátom sem olvasta el a könyvet.',
      'Például az interneten gyorsabban meg lehet találni a rövid tartalmat.'
    ],
    correctCombination: { thesisIndex: 0, reasoningIndex: 1, exampleIndex: 0 },
    explanation: 'A jó érv pontos tételből áll, logikus "mert..." magyarázattal indokol, és konkrét, életszerű példával támasztja alá az állítást (T-I-P modell).'
  },
  {
    id: 'tip_p2',
    topic: 'Miért van szükség a házi feladatok ésszerű korlátozására?',
    theses: [
      'A túlzott mennyiségű házi feladat feladása kontraproduktív a tanulásban.',
      'A tanárok nem szeretnek dolgozatot javítani.',
      'A házi feladat a világ legrosszabb találmánya.'
    ],
    reasonings: [
      'mert ha a diák órákon át fáradtan körmöl, a mechanikus másolás már nem rögzíti az érdemi tudást, viszont elszívja az alvásidőt.',
      'mert a diákok inkább filmet néznének a számítógépen.',
      'mert a füzetek hamar betelnek és újat kell venni.'
    ],
    examples: [
      'Például oktatáskutatók kimutatták, hogy a napi 30 percnél több házi feladatot végzőknél a jegyek nem javulnak, de a stressz-szint duplájára nő.',
      'Például tegnap én sem csináltam meg a matekot és semmi baj nem lett.',
      'Például a füzetborító drága a papírboltban.'
    ],
    correctCombination: { thesisIndex: 0, reasoningIndex: 0, exampleIndex: 0 },
    explanation: 'A tétel szakmailag pontos, az indoklás élettani folyamatra támaszkodik, a példa pedig konkrét kutatási adatra hivatkozik.'
  }
];

export const FALLACY_CARDS: FallacyCard[] = [
  {
    id: 'f1',
    name: 'Személyeskedés (Ad Hominem)',
    example: '„Péter szerint az egyenruha jó dolog, de hát Péter egy stréber, akit senki sem szeret, szóval nem kell rá hallgatni!”',
    whyWrong: 'Nem a vitapartner érvét és indoklását cáfolja, hanem a személyét támadja és gúnyolja.',
    howToFix: 'A gondolatot bíráld, ne az embert: „Megértem Péter szempontját az egyenlőségről, de szerintem az egyenruha elnyomná az egyéni önkifejezést.”'
  },
  {
    id: 'f2',
    name: 'Körkörös érvelés (Tautológia)',
    example: '„A mobiltelefon káros, mert rossz hatással van a gyerekekre, és mivel rossz hatású, ezért egyértelműen káros.”',
    whyWrong: 'A tétel és az indoklás pontosan ugyanazt jelenti más szavakkal, nem ad hozzá semmilyen új bizonyítékot.',
    howToFix: 'Adj valódi ok-okozati magyarázatot: „A mobiltelefon túlzott használata káros, mert a kék fény megzavarja a melatonin termelődését, ami alvászavarhoz vezet.”'
  },
  {
    id: 'f3',
    name: 'Túláltalánosítás',
    example: '„Láttam egy nyolcadikost, aki puskázott a felvételin, ebből látszik, hogy a mai fiatalok egytől egyig becstelenek és csalnak!”',
    whyWrong: 'Egyetlen kiragadott egyedi esetből von le megalapozatlan, mindenkire érvényes negatív következtetést.',
    howToFix: 'Használj árnyalt szavakat: „Bár előfordulnak tisztességtelen próbálkozások, a felvételizők döntő többsége hónapokon át becsületesen készül.”'
  },
  {
    id: 'f4',
    name: 'Hamis dilemma (Fekete-fehér gondolkodás)',
    example: '„Vagy teljesen betiltjuk az internetet a diákoknak, vagy teljesen lebutul az egész generáció!”',
    whyWrong: 'Úgy tesz, mintha csak két szélsőséges lehetőség létezne, és figyelmen kívül hagyja a köztes, ésszerű megoldásokat.',
    howToFix: 'Ajánlj fel kompromisszumot: „Nem a tiltás és a korlátlan használat között kell választanunk, hanem a szabályozott, tudatos médiahasználatot kell megtanítani.”'
  }
];

export const STYLE_TRANSFORM_TASKS: StyleTransformTask[] = [
  {
    id: 'st_1',
    original: '„Aki szerint jó a hétvégi lecke, az nem normális!”',
    flaw: 'Agresszív, sértegető, nincs benne indoklás.',
    options: [
      {
        text: 'Bár megértem azokat, akik a felvételire való folyamatos gyakorlás mellett érvelnek, úgy vélem, a szellemi pihenés nélkülözhetetlen a hatékony tanuláshoz.',
        isBest: true,
        feedback: 'Kiváló! Elismeri a másik fél szempontját, udvarias, de határozott személyes véleményt fogalmaz meg.'
      },
      {
        text: 'Szerintem a lecke hülyeség, mert én pihenni akarok.',
        isBest: false,
        feedback: 'Túl gyermeteg és szubjektív, hiányzik a meggyőző indoklás és a vitapartner tisztelete.'
      },
      {
        text: 'A tanárok rosszindulatúak, hogy feladják a leckét.',
        isBest: false,
        feedback: 'Ez ismét személyeskedő vádaskodás, ami nem érvelés.'
      }
    ]
  },
  {
    id: 'st_2',
    original: '„Hát nem tudom, lehet, hogy a Babits verse szép, de nekem uncsi.”',
    flaw: 'Bizonytalan, igénytelen szókincsű, nem fejti ki a vélemény okát.',
    options: [
      {
        text: 'Meglátásom szerint Babits verse lenyűgöző képeket villant fel, azonban a mai olvasó számára az archaikus szavak és a cselekmény hiánya megnehezítheti a befogadást.',
        isBest: true,
        feedback: 'Mesteri irodalmi érvelés! Pontosan megnevezi a saját nehézségének okát (szókincs, cselekményhiány), miközben elismeri a mű értékeit.'
      },
      {
        text: 'Nem tetszik a vers, mert nem szeretem a verseket.',
        isBest: false,
        feedback: 'Körkörös indoklás, nem visz közelebb a mű megértéséhez.'
      },
      {
        text: 'Aki szereti Babitsot, az biztos régimódi.',
        isBest: false,
        feedback: 'Előítéletes megbélyegzés, nem minőségi érvelés.'
      }
    ]
  }
];

export const ARGUMENTATION_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: 'Mi a jó érvelő bevezetés legfontosabb záró eleme, amely az egész fogalmazás gerincét adja?',
    options: [
      'Egy vicces történet a szerző gyerekkorából',
      'A tételmondat (alapállítás), amely rögzíti a szerző világos álláspontját',
      'Az összes lehetséges ellenérv azonnali felsorolása',
      'A tanárnak szóló bocsánatkérés a helyesírási hibákért'
    ],
    correctAnswer: 1,
    hint: 'Ez az a mondat, amit a fogalmazás további bekezdéseiben érvekkel fogsz alátámasztani.',
    explanation: 'A tételmondat az érvelés alapköve: világosan kimondja azt az állítást, amit a szöveg törzsében bizonyítani fogunk.'
  },
  {
    id: 2,
    question: 'Melyik három kötelező alkotóelemből épül fel egy minőségi érv a T-I-P modell szerint?',
    options: [
      'Téma + Idézet + Pontozás',
      'Tétel (Állítás) + Indoklás (Miért?) + Példa (Bizonyíték)',
      'Tanulság + Ígéret + Panasz',
      'Tárgyalás + Ismétlés + Párbeszéd'
    ],
    correctAnswer: 1,
    hint: 'Mit állítok? Miért állítom? Mi a rá a bizonyíték a valós életből?',
    explanation: 'A T-I-P modell (Tétel, Indoklás, Példa) garantálja, hogy az érvünk ne pusztán puszta vélemény legyen, hanem alátámasztott, meggyőző bizonyítás.'
  },
  {
    id: 3,
    question: 'Mi a különbség a PRO és a KONTRA érv között?',
    options: [
      'A pro érv a professzionális felnőttek érve, a kontra pedig a diákoké',
      'A pro érv a tétel mellett (támogatólag) szól, a kontra érv pedig ellene (ellenérv)',
      'A pro érv mindig hosszabb, mint a kontra érv',
      'Nincs különbség, a két szó szinonimája egymásnak'
    ],
    correctAnswer: 1,
    hint: 'A latin "pro" = -ért, mellett; "contra" = ellen szavakból ered.',
    explanation: 'A pro érv a saját álláspontunkat támogatja, a kontra érv az ellenkező nézőpontot képviseli. A jó érvelő mindkettőt ismeri!'
  },
  {
    id: 4,
    question: 'Miért elengedhetetlen egy 8. osztályos érvelő fogalmazásban az ELLENÉRV (kontra) bemutatása és CÁFOLATA?',
    options: [
      'Mert így hosszabb lesz a fogalmazás és kitelik a szómennyiség',
      'Mert bizonyítja, hogy a szerző több szempontból átgondolta a problémát, és képes megvédeni az álláspontját a kétségekkel szemben is',
      'Mert kötelező megváltoztatnunk a véleményünket a fogalmazás közepén',
      'Mert így a tanár nem tud belekötni a helyesírásunkba'
    ],
    correctAnswer: 1,
    hint: 'A felnőtt, érett gondolkodás jele, ha látjuk az érme másik oldalát is.',
    explanation: 'A cáfolat teszi igazán meggyőzővé a szöveget: elismerjük a másik oldal részigazságát ("Bár igaz, hogy..."), de megmutatjuk, miért a mi álláspontunk a súlyosabb.'
  },
  {
    id: 5,
    question: 'Melyik mondat testesíti meg a kulturált, meggyőző személyes véleménynyilvánítást?',
    options: [
      '„Aki nem ért velem egyet, az vak és fogalma sincs semmiről.”',
      '„Szerintem mindenki úgy csinálja, ahogy akarja, nekem teljesen mindegy.”',
      '„Meglátásom szerint a digitális eszközök használata önmagában nem káros, ha a diákok megtanulják a felelős időbeosztást.”',
      '„A tanárok találják ki a szabályokat, úgyhogy nekünk nincs beleszólásunk.”'
    ],
    correctAnswer: 2,
    hint: 'Keresd azt a mondatot, amely árnyalt, tisztelettudó és határozott álláspontot képvisel!',
    explanation: 'A "Meglátásom szerint..." kifejezés udvariasan jelzi a saját nézőpontot, a mondat tartalma pedig kiegyensúlyozott és megalapozott.'
  },
  {
    id: 6,
    question: 'Mit NE tegyünk a fogalmazás befejező, lezáró részében?',
    options: [
      'Ne hozzunk be teljesen új, eddig nem kifejtett érveket!',
      'Ne foglaljuk össze a legfőbb gondolatokat!',
      'Ne ajánljunk kompromisszumot vagy megoldást!',
      'Ne tegyünk pontot az utolsó mondat végére!'
    ],
    correctAnswer: 0,
    hint: 'A befejezés célja a szintézis és elvarrás, nem pedig új témák megnyitása.',
    explanation: 'A befejezésben soha nem szabad vadonatúj érvet bedobni, hiszen annak kifejtésére és bizonyítására ott már nincs lehetőség!'
  },
  {
    id: 7,
    question: 'Milyen érvelési hibát követ el, aki azt mondja: „Ez a könyv azért zseniális, mert csodálatos, és azért csodálatos, mert egyszerűen zseniális”?',
    options: [
      'Személyeskedés (Ad Hominem)',
      'Körkörös érvelés (Tautológia)',
      'Tekintélyre hivatkozás',
      'Csúszós lejtő'
    ],
    correctAnswer: 1,
    hint: 'Az állítás és az indoklás egymás farkába harap, mint az önmagába visszatérő kör.',
    explanation: 'A körkörös érvelés látszólag indokol, valójában csak megismétli ugyanazt a megállapítást más szavakkal, bizonyíték nélkül.'
  },
  {
    id: 8,
    question: 'Melyik kötőszó vagy kifejezés a legalkalmasabb egy ellentétes szempont (ellenérv) bevezetésére?',
    options: [
      '„Továbbá...”',
      '„Mindazonáltal / Ezzel szemben / Bár kétségtelen, hogy...”',
      '„Elsősorban...”',
      '„Következésképpen...”'
    ],
    correctAnswer: 1,
    hint: 'Ellentétes viszonyt kifejező kötőszóra van szükségünk.',
    explanation: 'A "Mindazonáltal", "Ezzel szemben", "Bár kétségtelen, hogy..." fordulatok elegánsan és világosan jelzik az ellenérv belépését.'
  },
  {
    id: 9,
    question: 'Babits Mihály Messze... messze... költeménye kapcsán hogyan érvelhetünk amellett, hogy a képzeletbeli utazásnak is van értéke?',
    options: [
      'Úgy, hogy a költő gazdag leírásai bizonyítják: a könyvekből és képekből táplálkozó fantázia mély esztétikai élményt adhat.',
      'Úgy, hogy Babits igazából titokban elutazott mind a nyolc országba.',
      'Úgy, hogy a repülőjegyek mindig olcsóbbak voltak a könyveknél.',
      'Úgy, hogy a költő versének nincs köze az emberi vágyakhoz.'
    ],
    correctAnswer: 0,
    hint: 'Gondolj arra, hogyan festett lenyűgöző képeket Spanyolhonról úgy, hogy a fogarasi magányban élt!',
    explanation: 'Babits példája a legszebb bizonyíték arra, hogy az olvasottság és a belső képzelet ereje képes megidézni távoli kultúrákat és egyetemes emberi vágyakat.'
  },
  {
    id: 10,
    question: 'Melyik a jó érvelő lezárás egyik legfőbb ismérve?',
    options: [
      'A szerző elismeri, hogy fogalma sincs az igazságról és feladja az érvelést.',
      'Összegzi a legfőbb érveket, megerősíti a tételmondatot és távlatot nyit (tanulság, jövőkép vagy kompromisszum).',
      'Csak annyit ír: „Köszönöm a figyelmet, ennyi volt.”',
      'Sértegetéssel zárja a vitát a más véleményen lévőkkel szemben.'
    ],
    correctAnswer: 1,
    hint: 'A jó befejezés kerekké teszi a szöveget és mély benyomást hagy az olvasóban.',
    explanation: 'A hatásos befejezés szintézist alkot: összefoglalja a bizonyított állításokat, és felelős, előremutató zárszót ad az olvasónak.'
  }
];
