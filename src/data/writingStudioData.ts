export interface WritingTopic {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: 'iskola' | 'technológia' | 'életmód' | 'társadalom';
  badgeColor: string;
  dilemma: string;
  context: string;
  proStance: {
    thesis: string;
    arg1: { thesis: string; reasoning: string; example: string };
    arg2: { thesis: string; reasoning: string; example: string };
    counterArg: string;
    refutation: string;
    conclusion: string;
  };
  contraStance: {
    thesis: string;
    arg1: { thesis: string; reasoning: string; example: string };
    arg2: { thesis: string; reasoning: string; example: string };
    counterArg: string;
    refutation: string;
    conclusion: string;
  };
  sampleEssay: {
    title: string;
    author: string;
    stance: string;
    intro: string;
    body1: string;
    body2: string;
    refutation: string;
    conclusion: string;
    teacherNotes: string;
  };
}

export interface DuelRound {
  id: number;
  topicTitle: string;
  opponentStatement: string;
  options: {
    id: string;
    text: string;
    isBest: boolean;
    feedback: string;
    points: number;
  }[];
}

export const WRITING_TOPICS: WritingTopic[] = [
  {
    id: 'topic_phone',
    number: 1,
    title: 'Okostelefon az iskolában',
    subtitle: 'Teljes tiltás a szünetekben is, vagy felelős használat?',
    category: 'iskola',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    dilemma: 'Legyen-e teljes telefonhasználati tilalom a tanítási nap egészén (a szünetekben is), vagy indokolt engedélyezni a diákoknak az okoseszközök használatát a tanórák közötti időben?',
    context: 'Számos országban és Magyarországon is törvényi korlátozás vonatkozik az iskolai okoseszközökre. A cél a figyelemelterelés és a cyberbullying csökkentése, miközben sokan a digitális önállóság elnyomását látják a tiltásban.',
    proStance: {
      thesis: 'Meglátásom szerint az iskolai szünetekben fenntartott telefonmentesség elengedhetetlen a valódi baráti kapcsolatok és a koncentráció megőrzéséhez.',
      arg1: {
        thesis: 'A képernyőmentes szünetek segítik az elmagányosodás visszaszorítását és a közösségépítést.',
        reasoning: 'amikor a diákok nem a közösségi médiát pörgetik, kénytelenek egymással beszélgetni, társasjátékozni vagy mozogni.',
        example: 'Például egy felmérés szerint a készülékek reggeli leadása után 40%-kal nőtt a könyvtárba járó és a folyosón csocsózó diákok aránya.'
      },
      arg2: {
        thesis: 'A szünet alatti pihenés javítja az órai figyelmet és a tanulmányi eredményeket.',
        reasoning: 'ugyanis az agy a rövid videók pörgetése közben nem pihen meg, hanem információs túltelítettségbe kerül, ami a következő órán tompaságot okoz.',
        example: 'Például pedagógiai kutatások kimutatták, hogy telefonmentes iskolákban 25%-kal csökkent a tanórai fegyelmezetlenség.'
      },
      counterArg: 'Sokan azzal érvelnek, hogy a telefonra a szünetben szükség van a szülőkkel való kapcsolattartáshoz vagy a buszmenetrend ellenőrzéséhez.',
      refutation: 'Bár ez érthető igény, vészhelyzetben az iskolatitkárságon keresztül bármikor elérhető a szülő, a közösségi jólét pedig fontosabb, mint a folyamatos online jelenlét.',
      conclusion: 'Mindent egybevetve a szünetbeli telefonmentesség nem büntetés, hanem lehetőség a valódi kamaszkori élmények és barátságok megélésére.'
    },
    contraStance: {
      thesis: 'Úgy vélem, a teljes tiltás helyett a felelős, irányított digitális kultúrára kellene tanítani a diákokat a szünetekben.',
      arg1: {
        thesis: 'A tiltás nem készít fel a felnőtt világ digitális kihívásaira és az önkontrollra.',
        reasoning: 'mert a diákok a kapun kilépve azonnal a kijelzőre tapadnak, ahelyett hogy megtanulnák a mértékletes használat szabályait.',
        example: 'Például skandináv iskolákban a diákok szabadon használhatják a gépeket, de digitális etikát tanulnak, és egymást figyelmeztetik a túlzásokra.'
      },
      arg2: {
        thesis: 'A telefon a modern tanulási folyamat és a mindennapi tájékozódás hatékony eszköze.',
        reasoning: 'mivel a szünetekben a diákok utánanézhetnek a következő óra fogalmainak, vagy digitális szótárat használhatnak.',
        example: 'Például egy 8. osztályos a szünetben gyorsan megnézheti egy fizikai kísérlet animációját a felkészüléshez.'
      },
      counterArg: 'Kétségtelen, hogy a telefonfüggőség és a játékok elterelhetik a figyelmet a tanulásról.',
      refutation: 'Mindazonáltal a szigorú tiltás csak titkolózást szül; ahelyett, hogy elvennénk az eszközöket, a közösségi szabályok betartására kellene nevelni.',
      conclusion: 'Véleményem szerint a 21. századi iskolának nem a technológia ellen kell küzdenie, hanem a tudatos használat színterévé kell válnia.'
    },
    sampleEssay: {
      title: 'Képernyők helyett emberi szavak – Miért van szükség telefonmentes szünetekre?',
      author: 'Kovács Hanna, 8. osztály',
      stance: 'Pro (A szünetbeli telefontilalom mellett)',
      intro: 'A mai tizenévesek zsebében ott lapul az egész világ. Az okostelefon egyszerre könyvtár, mozi és kapcsolattartási felület. Mégis, amikor végigsétálunk egy általános iskola folyosóján a szünetben, sokszor dermesztő csend fogad: a diákok a falnak dőlve némán görgetik a rövid videókat. Meglátásom szerint az iskolai szünetekben fenntartott telefonmentesség elengedhetetlen a valódi baráti kapcsolatok és a szellemi felfrissülés megőrzéséhez.',
      body1: 'Elsősorban azért szükséges a korlátozás, mert a képernyőmentesség visszaszorítja az elmagányosodást és megteremti a valódi közösségi élményeket. Amikor a tanulók nem a virtuális lájkokat hajszolják, kénytelenek egymás szemébe nézni, beszélgetni, nevetni vagy éppen pingpongozni. Például egy budapesti általános iskolában a telefonok reggeli leadása után a diákok spontán kártyabajnokságokat szerveztek, és érezhetően barátságosabbá vált az osztályközösség hangulata.',
      body2: 'Továbbá a telefonmentes szünet biztosítja az agy valódi pihenését a tanórák között. A villogó ingerek és a közösségi média folyamatos stresszt és információs túltelítettséget okoznak. Például neurológiai kutatások bizonyítják, hogy a képernyőzés után a diákok koncentrációs képessége 20 perccel lassabban tér vissza, ami rontja a következő órai megértést.',
      refutation: 'Bár kétségtelenül igaz az az ellenérv, hogy a telefon hasznos lehet a szülőkkel való gyors egyeztetésre vagy az órarend ellenőrzésére, úgy vélem, vészhelyzetben a pedagógusokon keresztül bármikor kapcsolatba lehet lépni a családdal. A ritka vészhelyzetek nem igazolhatják a mindennapos elszigetelődést.',
      conclusion: 'Mindent egybevetve úgy gondolom, hogy a szünetbeli telefontilalom nem szabadságelvonás, hanem védelem. Lehetőséget teremt arra, hogy a 8. osztályosok megéljék az igazi gyermekkort, és a virtuális világ helyett a valódi jelenben legyenek együtt.',
      teacherNotes: 'Kiváló struktúra! Hatásos kontraszttal nyit, mindkét főérv követi a T-I-P modellt, a cáfolat tisztelettudó, a zárás pedig szép szintézissel ad értelmet az állításnak.'
    }
  },
  {
    id: 'topic_ai',
    number: 2,
    title: 'Mesterséges intelligencia a tanulásban',
    subtitle: 'Hasznos korrepetitor vagy a gondolkodás ellustítója?',
    category: 'technológia',
    badgeColor: 'bg-violet-100 text-violet-900 border-violet-300',
    dilemma: 'Szabad-e a 8. osztályosoknak AI-eszközöket használniuk a házi feladatok megoldásához és a fogalmazások vázlatának elkészítéséhez?',
    context: 'A mesterséges intelligencia másodpercek alatt kész esszéket és feladatmegoldásokat generál. Forradalmasíthatja a tanulást, de elsorvaszthatja a saját íráskészséget is a középiskolai felvételi előtt.',
    proStance: {
      thesis: 'Meggyőződésem, hogy az AI-eszközök okos használata forradalmasíthatja a tanulást, mint egy végtelenül türelmes személyes magántanár.',
      arg1: {
        thesis: 'Az AI segít a nehezen érthető fogalmak egyéni szintre szabott elmagyarázásában.',
        reasoning: 'mert ha egy diák nem érti az órai magyarázatot, a gép öt különböző analógiával mutatja be újra meg újra.',
        example: 'Például egy diák megkérheti az AI-t, hogy magyarázza el a fotoszintézist egy egyszerű képregény történeteként.'
      },
      arg2: {
        thesis: 'A mesterséges intelligencia kiváló ötletbörze-partner a kreatív feladatokhoz.',
        reasoning: 'ugyanis nem kész szöveget kell másolni, hanem szempontokat és vázlatokat lehet gyűjteni vele.',
        example: 'Például egy történelem beadandóhoz az AI segíthet összegyűjteni a reformkor legfontosabb vitapontjait.'
      },
      counterArg: 'Sokan attól tartanak, hogy a diákok egyszerűen lemásolják a gép válaszait gondolkodás nélkül.',
      refutation: 'Bár ez valós veszély, a megoldás nem a tiltás, hanem a feladatok megváltoztatása: a másolás helyett a kritikai elemzésre kell helyezni a hangsúlyt.',
      conclusion: 'Összegzésként az AI olyan, mint a számológép a matematikában: ha értjük az alapokat, óriási segítséget nyújt a fejlődésben.'
    },
    contraStance: {
      thesis: 'Úgy vélem, az általános iskolai házi feladatoknál korlátozni kell az AI használatát, mert elsorvasztja az önálló gondolkodást.',
      arg1: {
        thesis: 'A kész szövegek generálása meggátolja az önálló fogalmazási készség kialakulását.',
        reasoning: 'mert az íráskészség csak az agy kitartó erőfeszítése és a szavak keresése közben fejlődik.',
        example: 'Például azok a felvételizők, akik AI-val íratták a leckéjüket, a papíralapú központi vizsgán képtelenek voltak önálló gondolatmenetet felépíteni.'
      },
      arg2: {
        thesis: 'Az AI megbízhatatlan információkat adhat, ami téves tudáshoz vezet.',
        reasoning: 'ugyanis a modellek gyakran kitalálnak nem létező forrásokat és adatokat ("hallucinálnak").',
        example: 'Például egy irodalmi kérdésre az AI létezőnek tüntetett fel egy sosem volt Arany János-balladát.'
      },
      counterArg: 'Elismerem, hogy a jövő munkaerőpiacán elengedhetetlen lesz a digitális eszközök készségszintű kezelése.',
      refutation: 'Mindazonáltal a technológia használatát csak az tanulhatja meg felelősen, aki előtte megtanult önállóan, mélyen gondolkodni és érvelni.',
      conclusion: 'Mindent egybevetve az alapvető készségek elsajátításáig a saját emberi intelligenciánk edzésére kell koncentrálnunk.'
    },
    sampleEssay: {
      title: 'Mankó vagy szárnyak? – A mesterséges intelligencia helye a 8. osztályos tanulásban',
      author: 'Szabó Bence, 8. osztály',
      stance: 'Pro (A tudatos használat mellett)',
      intro: 'Képzeljünk el egy tanárt, aki soha nem fárad el, a nap huszonnégy órájában elérhető, és a világ összes tantárgyát ismeri. Ez ma már nem sci-fi: a mesterséges intelligencia beköltözött a diákok szobájába. Míg sokan a diákok elbutulásától tartanak, meglátásom szerint az AI tudatos alkalmazása forradalmasíthatja a felkészülést, amennyiben nem mankóként, hanem gondolkodást segítő partnerként tekintünk rá.',
      body1: 'A legfőbb érv az AI mellett, hogy személyre szabott virtuális magántanárként képes működni. A 30 fős osztályokban a pedagógusnak ritkán jut ideje minden egyes tanuló tempójához igazodni. Ezzel szemben a mesterséges intelligenciától bármikor megkérdezhetjük: "Magyarázd el a Newton-törvényeket egy gördeszkás példáján keresztül!". Ez a rugalmas támogatás felzárkóztatja a lemaradókat és inspirálja a tehetségeket.',
      body2: 'Továbbá az AI kiválóan alkalmas az ötletbörzére és a gondolatok rendszerezésére. Egy érvelő fogalmazás megírása előtt a diák megkérheti a rendszert, hogy soroljon fel pro és kontra érveket egy vitatémában. A tanuló feladata nem a szöveg kimásolása, hanem a szempontok mérlegelése, az érvényességük ellenőrzése és saját gondolataival való kiegészítése, ami fejleszti a kritikai gondolkodást.',
      refutation: 'Kétségtelen, hogy komoly veszélyt jelent a diákok elkényelmesedése és a kész esszék gátlástalan másolása. Azonban úgy vélem, a tiltás régen sem működött: amikor megjelent a zsebszámológép, azt is be akarták tiltani, mégis megtanultunk élni vele. A megoldás a számonkérés megújítása: szóbeli feleletekkel és órai írásbeli esszékkel könnyen kiszűrhető a másolás.',
      conclusion: 'Összegzésként megállapítható, hogy a mesterséges intelligencia nem helyettesítheti az emberi szellemet és az egyéni erőfeszítést. Ha megtanuljuk felelősen, kérdező partnerként használni, nem elbutulunk, hanem kitágítjuk a tanulás határait.',
      teacherNotes: 'Nagyon érett gondolatmenet! A számológép-hasonlat kiváló történelmi párhuzam, a T-I-P modell mindkét érvben mintaszerű.'
    }
  },
  {
    id: 'topic_homework',
    number: 3,
    title: 'Hétvégi házi feladat a 8. osztályban',
    subtitle: 'Nélkülözhetetlen vizsgarutin vagy a pihenés ellopása?',
    category: 'iskola',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    dilemma: 'Legyen-e hétvégi házi feladat a 8. osztályosoknak a középiskolai felvételi készülés idején, vagy legyen tilos pénteken feladni?',
    context: 'A 8. osztály a legstresszesebb év az általános iskolában. Heti 30-32 tanóra mellett sokan szombat-vasárnap is napi 4-5 órát tanulnak, ami kimerültséghez és szorongáshoz vezethet.',
    proStance: {
      thesis: 'Úgy vélem, a 8. osztály első félévében a mértékletes hétvégi gyakorlás nélkülözhetetlen a sikeres középiskolai felvételihez.',
      arg1: {
        thesis: 'A 45 perces felvételi feladatsorokat csak hétvégén lehet nyugodt körülmények között gyakorolni.',
        reasoning: 'mert hétköznap a 7-8 tanóra után a diákok agyilag kimerültek, így a tesztek megírása nem mérné a valós képességeket.',
        example: 'Például szombat délelőtt egy teljes magyar vagy matematika próbasor megoldása pontosan szimulálja a vizsgahelyzetet.'
      },
      arg2: {
        thesis: 'A rendszeres ismétlés megakadályozza az ismeretek elfelejtését.',
        reasoning: 'mivel az emberi agy 48 óra tétlenség után az új információk jelentős részét törli a rövid távú memóriából.',
        example: 'Például heti egy nyelvtan feladatlap megoldása frissen tartja a mondatelemzési szabályokat.'
      },
      counterArg: 'Sokan hangsúlyozzák, hogy a folyamatos terhelés kiégéshez és alvászavarhoz vezet.',
      refutation: 'Bár a pihenés elengedhetetlen, a hétvégi feladatoknak nem kell egész naposaknak lenniük: napi 1 óra fókuszált munka mellett bőségesen marad idő a kikapcsolódásra.',
      conclusion: 'Mindent egybevetve a cél nem a diákok kizsigerelése, hanem a jövőbeli álomiskolába való bejutás esélyeinek maximalizálása.'
    },
    contraStance: {
      thesis: 'Meglátásom szerint a hétvégi házi feladatokat el kell törölni, mert a pihenés hiánya rontja a tanulási hatékonyságot és a testi egészséget.',
      arg1: {
        thesis: 'A kipihent agy bizonyítottan jobban teljesít és gyorsabban rögzíti az információkat.',
        reasoning: 'ugyanis az elalvás és a fizikai feltöltődés során konszolidálódnak az emlékek és a megértett összefüggések.',
        example: 'Például orvosi kutatások kimutatták, hogy a hétvégén sportoló és eleget alvó diákok hétfőn 20%-kal kevesebb hibát ejtenek dolgozatíráskor.'
      },
      arg2: {
        thesis: 'A családi élet és a társas kapcsolatok ápolása alapvető érzelmi biztonságot ad.',
        reasoning: 'mert ha a serdülő vasárnap este még görnyed a könyvek felett, elvész a közös családi ebéd és a baráti kirándulás öröme.',
        example: 'Például sok 8. osztályos szorongásról és elmagányosodásról számol be a hétvégi tanulási kényszer miatt.'
      },
      counterArg: 'Kétségtelen, hogy a felvételire sok feladatot kell megoldani.',
      refutation: 'Mindazonáltal ezt a gyakorlást a hétköznapi órák hatékonyabb megszervezésével és felkészítő szakkörökkel kell biztosítani, nem a regeneráció rovására.',
      conclusion: 'Véleményem szerint egy kimerült, stresszes diák nem tud jól vizsgázni: az igazi felvételi siker kulcsa a szellemi és lelki egyensúly.'
    },
    sampleEssay: {
      title: 'Pihenés nélkül nincs siker – Miért kell eltörölni a hétvégi házi feladatot?',
      author: 'Molnár Dániel, 8. osztály',
      stance: 'Contra (A hétvégi lecke ellen)',
      intro: 'Péntek délután kicsengetnek. A diákok fellélegeznek, ám az öröm csupán néhány percig tart: a tanárok sorra diktálják be a hétvégi feladatokat. "Hétfőre három oldal matek, esszé történelemből és két felvételi feladatsor!". Meglátásom szerint a 8. osztályosok hétvégi házi feladatait radikálisan korlátozni kellene, mert a folyamatos túlterhelés nem a tudást mélyíti, hanem a szellemi kiégéshez és kimerültséghez vezet.',
      body1: 'A legfőbb érv a leckementes hétvége mellett az idegrendszer biológiai szükséglete a regenerációra. A hétköznapi 7-8 tanóra és az utána következő különórák után az agy telítődik. A tudósok rég bizonyították, hogy az ismeretek elmélyülése a nyugodt alvás és a fizikai kikapcsolódás során történik meg. Például egy nemzetközi felmérés kimutatta, hogy azok a diákok, akik vasárnap sportolnak és nem tanulnak, hétfőn 20%-kal jobb koncentrációval és kreativitással oldják meg az új problémákat.',
      body2: 'Továbbá a hétvége az egyetlen időszak, amikor a kamaszok a családjukkal és barátaikkal minőségi időt tölthetnek. Ha a vasárnap délután a füzetek feletti görcsös körmöléssel telik, a diákok elszigetelődnek és szorongóvá válnak. Például egy osztályfőnöki beszélgetésen a diákok 80%-a vallotta be, hogy a vasárnapi leckék miatt rettegnek a hétfőtől.',
      refutation: 'Bár megértem a pedagógusok szándékát, akik a közelgő középiskolai felvételire való minél alaposabb felkészülést szeretnék garantálni, úgy vélem, a mennyiség nem pótolja a minőséget. A kimerült, fáradt diák mechanikusan, hibát hibára halmozva oldja meg a teszteket, ami nem tanulás, hanem felesleges kínlódás.',
      conclusion: 'Mindent egybevetve úgy gondolom, a hétvége szentségét vissza kell adni a fiataloknak. Egy kipihent, kiegyensúlyozott és vidám 8. osztályos sokkal magabiztosabban és sikeresebben fogja megírni a januári felvételit, mint egy szeme alatt karikákat viselő, kimerült társa.',
      teacherNotes: 'Megindító, életszerű felütés! A biológiai érvek és az ellenérv méltányos kezelése kifejezetten érett tanulóra vall.'
    }
  },
  {
    id: 'topic_uniform',
    number: 4,
    title: 'Iskolai egyenruha vagy szabad öltözködés?',
    subtitle: 'Társadalmi egyenlőség vagy az önkifejezés elnyomása?',
    category: 'társadalom',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    dilemma: 'Legyen-e kötelező egységes egyenruha az iskolákban, vagy maradjon meg a diákok szabad öltözködési joga?',
    context: 'Angliában, Japánban és számos magániskolában az egyenruha magától értetődő. Nálunk sokan a márkák miatti csúfolódás ellenszereként javasolják, míg mások a szabadságjogok csorbítását látják benne.',
    proStance: {
      thesis: 'Meggyőződésem, hogy az iskolai egyenruha bevezetése csökkentené a vagyoni különbségekből fakadó kiközösítést és erősítené az összetartozást.',
      arg1: {
        thesis: 'Az egyenruha megszünteti a drága márkák és ruhák miatti rivalizálást.',
        reasoning: 'mert ha minden diák ugyanazt viseli, nem a család pénztárcája, hanem a személyiség és a tudás határozza meg a tiszteletet.',
        example: 'Például egy angliai kutatásban a diákok 65%-a mondta azt, hogy az egyenruha miatt megszűnt a ruhák miatti gúnyolódás az iskolában.'
      },
      arg2: {
        thesis: 'Az egységes öltözet megkönnyíti a reggeli készülődést és csökkenti a családi kiadásokat.',
        reasoning: 'hiszen nem kell minden reggel azon stresszelni, mit vegyen fel a diák, és nem kell szezononként tucatnyi divatcikket vásárolni.',
        example: 'Például a szülők évente átlagosan 50-80 ezer forintot spórolhatnak meg, ha csak néhány váltás egyenruhát kell venniük.'
      },
      counterArg: 'Sokan azt állítják, hogy az egyenruha megöli a diákok egyéniségét és kreativitását.',
      refutation: 'Bár az önkifejezés fontos, az egyéniséget nem a pólónk logója, hanem a gondolataink, a hobbijaink és a tetteink határozzák meg; a délutáni órákban pedig mindenki szabadon öltözködhet.',
      conclusion: 'Összegzésként az egyenruha nem korlát, hanem egyenlő startvonal: az iskolát a tanulás és az elfogadás helyévé teszi.'
    },
    contraStance: {
      thesis: 'Úgy vélem, az iskolai egyenruha bevezetése káros lenne, mert a serdülőkori önkifejezés és a sokszínűség korlátozását jelenti.',
      arg1: {
        thesis: 'A ruházat a kamaszok legfontosabb identitásformáló és önkifejezési eszköze.',
        reasoning: 'mivel a stílusunkon keresztül fejezzük ki zenei ízlésünket, hangulatunkat és személyiségünket.',
        example: 'Például egy diák a kedvenc zenekarának pólóját viselve könnyen megtalálja a hasonló érdeklődésű barátokat a folyosón.'
      },
      arg2: {
        thesis: 'Az egyenruha csupán felszínes látszatot teremt, nem oldja meg a vagyoni különbségek problémáját.',
        reasoning: 'mert a diákok a telefonok, cipők és táskák alapján ugyanúgy látni fogják, ki a tehetősebb.',
        example: 'Például egyenruhás iskolákban a diákok a méregdrága sportcipőkkel és okosórákkal kezdtek el versengeni egymással.'
      },
      counterArg: 'Kétségtelen, hogy az egyenruha leegyszerűsíti a reggeli öltözködést.',
      refutation: 'Mindazonáltal a döntési szabadság és a saját stílus megtalálása felnőtté válási folyamat, amit nem szabad merev szabályokkal elfojtani.',
      conclusion: 'Véleményem szerint nem az öltözetet kell uniformizálni, hanem a toleranciát és a belső értékek tiszteletét kell megtanítani a fiataloknak.'
    },
    sampleEssay: {
      title: 'A sokszínűség ereje – Miért nincs szükség iskolai egyenruhára?',
      author: 'Tóth Lili, 8. osztály',
      stance: 'Contra (A szabad öltözködés mellett)',
      intro: 'Kék zakó, fehér ing, szürke nadrág vagy szoknya. Sokak számára ez a fegyelem és az elegancia szimbóluma, másoknak a szürke egyformaság és a szabadság elfojtása. Az iskolai egyenruha kérdése évtizedek óta megosztja a szülőket és a pedagógusokat. Meglátásom szerint az általános iskolákban nem szabad kötelező egyenruhát bevezetni, mert az elnyomja a diákok önkifejezését, és csupán hamis látszatmegoldást nyújt a társadalmi egyenlőtlenségekre.',
      body1: 'A legfőbb érv a szabad öltözködés mellett az, hogy a kamaszkor az identitáskeresés időszaka. A ruházatunk nem pusztán textília, hanem a személyiségünk, a zenei ízlésünk és a világnézetünk kifejeződése. Például amikor egy diák egy környezetvédelmi feliratos pulóvert vagy a kedvenc művészének pólóját viseli, üzen a külvilágnak, és könnyebben talál magához hasonló gondolkodású barátokra.',
      body2: 'Továbbá az egyenruha hívei azzal érvelnek, hogy a kötelező viselet eltünteti a szegényebbek és gazdagabbak közötti szakadékot. Ez azonban naiv illúzió. A diákok azonnal megtalálják az egyéb megkülönböztető jegyeket: a legújabb százezer forintos okostelefont, a dizájner cipőt vagy a luxus hátizsákot. Például brit szociológiai tanulmányok kimutatták, hogy az egyenruhás iskolákban a márkás cipők és karórák miatt pontosan ugyanolyan mértékű volt a rivalizálás, mint a kötetlen öltözködésű intézményekben.',
      refutation: 'Bár megértem azokat a szülőket, akik úgy gondolják, hogy az egyenruha megspórolná a reggeli idegeskedést a szekrény előtt, úgy vélem, a mindennapi döntések meghozatala – még az olyan egyszerű is, mint a ruhaválasztás – az önállóságra nevelés elengedhetetlen része.',
      conclusion: 'Mindent egybevetve úgy gondolom, a valódi egyenlőséget nem a ruhák egyformaságával, hanem a gondolkodásunk nyitottságával kell megteremtenünk. Az iskola akkor készít fel a valódi életre, ha megtanít elfogadni a sokszínűséget, nem pedig akkor, ha mindannyiunkat ugyanabba a szürke egyenruhába kényszerít.',
      teacherNotes: 'Pompás érvelés! Különösen erős a második érv, amely leleplezi az egyenruha hamis illúzióját a cipők és kütyük világában.'
    }
  },
  {
    id: 'topic_fastfashion',
    number: 5,
    title: 'Gyorsdivat (Fast Fashion) a fiatalok körében',
    subtitle: 'Olcsó trendek heti váltásban, vagy fenntartható tudatosság?',
    category: 'életmód',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    dilemma: 'Megengedhető-e, hogy a tizenévesek a közösségi média hatására néhány hetente új, olcsó ruhákat vásároljanak, vagy radikálisan korlátozni kell a gyorsdivat fogyasztását a környezet védelmében?',
    context: 'A Shein, Zara, H&M és hasonló ultragyors divatmárkákFilléres áron kínálnak hetente új kollekciókat. A fiatalok imádják az olcsó trendeket, ám a textilipar a világ egyik legsúlyosabb környezetszennyezője.',
    proStance: {
      thesis: 'Meglátásom szerint a gyorsdivat korlátlan fogyasztása morálisan és ökológiailag tarthatatlan, ezért a fiataloknak a tudatos és fenntartható öltözködésre kell áttérniük.',
      arg1: {
        thesis: 'A fast fashion iparág elképesztő mértékű környezeti pusztítást és vízszennyezést okoz.',
        reasoning: 'mert egyetlen pamutpóló előállításához 2700 liter édesvíz szükséges, a szintetikus ruhák pedig mikroműanyagokkal mérgezik az óceánokat.',
        example: 'Például az Atacama-sivatagban több tízezer tonna eladatlan és kidobott fast fashion ruha hever óriási szeméthegyként, ami az űrből is látható.'
      },
      arg2: {
        thesis: 'A használtruha-vásárlás (turkálók, Vinted) kreatívabbá és egyedibbé teszi a stílust.',
        reasoning: 'ugyanis a másodkézből szerzett ruhák között valódi kincsekre lehet bukkanni, és nem jön szembe ugyanaz a pulóver minden sarkon.',
        example: 'Például sok 8. osztályos diák ma már büszkén vadászik vintage darabokra online alkalmazásokon, ami ráadásul a zsebpénzt is kíméli.'
      },
      counterArg: 'Sokan azzal védekeznek, hogy a fenntartható márkák megfizethetetlenek egy zsebpénzből élő tinédzsernek.',
      refutation: 'Bár az etikus márkák valóban drágábbak, a megoldás nem az olcsó szemét halmozása, hanem a kevesebb, de tartósabb darab vásárlása, valamint a ruhacserebere a barátokkal.',
      conclusion: 'Összességében meg kell értenünk: nem a ruháink száma tesz értékessé, a bolygónk jövője pedig fontosabb, mint egy két hétig tartó TikTok-trend.'
    },
    contraStance: {
      thesis: 'Úgy vélem, a tinédzserek hibáztatása igazságtalan, mert az olcsó divat teszi lehetővé a kispénzű fiatalok számára az elfogadható megjelenést.',
      arg1: {
        thesis: 'A gyorsdivat demokratizálta az öltözködést a szerényebb anyagi helyzetű családoknak.',
        reasoning: 'hiszen nem minden szülő engedheti meg magának a 30 ezer forintos minőségi cipőt vagy a drága márkás kabátot.',
        example: 'Például egy gyorsan növő kamasznak felesleges drága ruhát venni, amit fél év múlva úgyis kinő.'
      },
      arg2: {
        thesis: 'A globális környezeti problémákat a gyártók szigorú törvényi szabályozásával kell megoldani, nem a kamaszok bűntudatkeltésével.',
        reasoning: 'mert a nagyvállalatok felelőssége a környezetbarát technológiák bevezetése, nem a zsebpénzből élő diákoké.',
        example: 'Például az Európai Unió textiltörvényei kötelezik a gyárakat az újrahasznosításra, ami valódi megoldást hozhat.'
      },
      counterArg: 'Kétségtelen, hogy a túlfogyasztás és a pazarlás súlyos etikai gond.',
      refutation: 'Mindazonáltal a fiatalok többsége ma már szelektíven gyűjti és eladományozza a megunt ruháit, így nem kerül minden a szemétbe.',
      conclusion: 'Véleményem szerint a felelősségteljes gondolkodást kell erősíteni anélkül, hogy elítélnénk azokat, akik olcsóbb áruházakban kénytelenek vásárolni.'
    },
    sampleEssay: {
      title: 'A divat ára – Miért nem fizethet a Föld a mi olcsó ruháinkért?',
      author: 'Horváth Zsófia, 8. osztály',
      stance: 'Pro (A fenntarthatóság mellett)',
      intro: 'Kattintunk a kosárra, és a futár három nap múlva hozza az ezerötszáz forintos felsőt és a háromezres szoknyát. A közösségi médiát elárasztják a ruhabontogató videók, és a tizenévesek körében szinte ciki ugyanazt a szettet kétszer felvenni egy héten. De vajon elgondolkodunk-e azon, mi az igazi ára ezeknek a filléres daraboknak? Meglátásom szerint a gyorsdivat mértéktelen fogyasztása súlyos környezeti és etikai katasztrófa, amellyel a fiataloknak sürgősen szembe kell nézniük.',
      body1: 'A legfőbb érv a fast fashion ellen a Föld kíméletlen kizsákmányolása. A textilipar a világ második legnagyobb vízszennyezője. Egyetlen egyszerű pamutpóló elkészítéséhez mintegy 2700 liter vízre van szükség, ami egy ember csaknem háromévi ivóvíz-mennyisége. Ráadásul az olcsó műszálas anyagok minden egyes mosáskor mikroműanyagok millióit juttatják a folyókba és a tengerekbe, amelyek végül a halak gyomrán át a mi tányérunkra kerülnek.',
      body2: 'Továbbá a gyorsdivat kultúrája elhiteti velünk, hogy a boldogság a folyamatos vásárlásban rejlik, miközben a ruhák minősége siralmas. Két mosás után kibomlanak a varrások, a ruha pedig a szeméttelepen végzi. Ezzel szemben a tudatos vásárlás, a vintage turkálók és a Vinted-hez hasonló felületek nemcsak kímélik a természetet, hanem sokkal egyedibb, kreatívabb stílust tesznek lehetővé, mint a tucatáruk.',
      refutation: 'Bár megértem azokat a kortársaimat, akik azzal védekeznek, hogy a fenntartható márkák megfizethetetlenek egy zsebpénzből gazdálkodó tininek, úgy vélem, a megoldás a szemléletváltásban van. Nem kell drága öko-márkákat vennünk: elég, ha feleannyi ruhát vásárolunk, vigyázunk a meglévő darabokra, és megszervezzük az osztályban a ruhacserét.',
      conclusion: 'Mindent egybevetve meg kell tanulnunk: a stílus nem a ruhatárunk méretétől függ. Ideje leszámolni azzal az illúzióval, hogy a heti divat követése fontosabb, mint a tiszta ivóvíz és az élhető bolygó megőrzése a mi generációnk számára.',
      teacherNotes: 'Megdöbbentő tényadatok (2700 liter víz), erős etikai felhívás és kiváló kompromisszumos javaslat a ruhacserére. Csillagos ötös!'
    }
  }
];

export const DUEL_ROUNDS: DuelRound[] = [
  {
    id: 1,
    topicTitle: 'Okostelefon az iskolában',
    opponentStatement: '„A telefonokat tilos lenne bevinni az iskolába, mert a mai fiatalok egytől egyig zombik, akik csak játszani tudnak rajta!”',
    options: [
      {
        id: 'opt1',
        text: '„Bár kétségtelen, hogy a túlzásba vitt játék figyelemelterelő, a túláltalánosítás nem segít: a telefon a digitális oktatásban és a vészhelyzeti kapcsolattartásban hasznos eszköz, ha szabályozott keretek között használjuk.”',
        isBest: true,
        feedback: 'Kiváló cáfolat! Felismeri a túláltalánosítás hibáját, elismeri a részigazságot, de logikus ellenpéldával és mértéktartással cáfol.',
        points: 10
      },
      {
        id: 'opt2',
        text: '„Maga a zombi, a felnőttek ugyanúgy a Facebookot bámulják egész nap a munkahelyen!”',
        isBest: false,
        feedback: 'Személyeskedő hiba (Ad Hominem). A vita nem veszekedés, az ellenfelet nem sértegetjük.',
        points: 0
      },
      {
        id: 'opt3',
        text: '„Lehet, de nekem akkor is kell a telefon a suliban.”',
        isBest: false,
        feedback: 'Gyenge, dacos kijelentés. Hiányzik az indoklás és a cáfolat érdemi része.',
        points: 2
      }
    ]
  },
  {
    id: 2,
    topicTitle: 'Mesterséges intelligencia a házi feladatban',
    opponentStatement: '„Az AI-t teljesen be kell tiltani a diákoknak, mert ha a gép írja a leckét, a gyerekek agya teljesen elsorvad és senki nem fog tudni semmit!”',
    options: [
      {
        id: 'opt1',
        text: '„Bár valós veszély a gondolkodás nélküli másolás, a technológia elzárása helyett a felelős használatra kell tanítani: az AI kiválóan alkalmas vázlatkészítésre és nehéz fogalmak elmagyarázására, ha a diák maga dolgozza fel az információkat.”',
        isBest: true,
        feedback: 'Mesteri cáfolat! Elismeri a kockázatot (másolás), de rámutat a pozitív pedagógiai lehetőségre.',
        points: 10
      },
      {
        id: 'opt2',
        text: '„A gépek okosabbak az embereknél, úgyhogy felesleges tanulni bármit is.”',
        isBest: false,
        feedback: 'Káros és téves megállapítás. Az emberi kritikai gondolkodás nélkül az AI semmit sem ér.',
        points: 0
      },
      {
        id: 'opt3',
        text: '„Az én barátom mindig AI-val csinálja és ötöst kapott, szóval nincs semmi baj.”',
        isBest: false,
        feedback: 'Egyedi kiragadott esetre támaszkodik, ami nem általános érvényű bizonyíték.',
        points: 3
      }
    ]
  },
  {
    id: 3,
    topicTitle: 'Hétvégi házi feladat 8. osztályban',
    opponentStatement: '„Aki hétvégén nem tanul napi 6 órát nyolcadikban, abból soha nem lesz sikeres ember, és nem veszik fel sehová!”',
    options: [
      {
        id: 'opt1',
        text: '„Kétségtelen, hogy a felvételire sok gyakorlás kell, de a pszichológiai kutatások bizonyítják: a folyamatos túlterheltség kimerültséghez vezet, míg a pihent agy bizonyítottan gyorsabban és kevesebb hibával oldja meg a feladatokat.”',
        isBest: true,
        feedback: 'Tökéletes! Tudományos érveléssel cáfolja a hamis dilemmát és a riogatást.',
        points: 10
      },
      {
        id: 'opt2',
        text: '„Akkor sem fogok tanulni szombaton, mert hétvégén bulizni kell!”',
        isBest: false,
        feedback: 'Komolytalan, felelőtlen válasz, ami azonnal hiteltelenné teszi az álláspontodat.',
        points: 0
      },
      {
        id: 'opt3',
        text: '„A tanárok csak szivatni akarnak minket a sok feladattal.”',
        isBest: false,
        feedback: 'Rosszindulatú feltételezés, nem szakmai ellenérv.',
        points: 1
      }
    ]
  },
  {
    id: 4,
    topicTitle: 'Iskolai egyenruha',
    opponentStatement: '„Az egyenruha elnyomja a szabadságot, és úgy néznénk ki benne, mint a rabok a börtönben!”',
    options: [
      {
        id: 'opt1',
        text: '„Megértem az egyéni stílus fontosságát, azonban az egyenruha nem börtön, hanem védőháló: megszünteti a drága márkák miatti gúnyolódást, és segít, hogy a diákokat a személyiségükért, ne a ruhájuk áráért értékeljék.”',
        isBest: true,
        feedback: 'Zseniális retorikai fordulat! A börtön-képet átfordítja védőhálóvá, és az igazi belső értékekre helyezi a hangsúlyt.',
        points: 10
      },
      {
        id: 'opt2',
        text: '„Igen, és a színe is biztos csúnya szürke lenne, amit utálok.”',
        isBest: false,
        feedback: 'Felszínes mellékes részlet, nem cáfolat.',
        points: 2
      },
      {
        id: 'opt3',
        text: '„Aki ezt mondja, annak nincs stílusérzéke.”',
        isBest: false,
        feedback: 'Személyeskedő megjegyzés, nem érv.',
        points: 0
      }
    ]
  },
  {
    id: 5,
    topicTitle: 'Gyorsdivat (Fast Fashion)',
    opponentStatement: '„Miért ne vehetnék heti három új pólót a zsebpénzemből, ha olyan olcsó? Semmi közöm hozzá, hogyan gyártják!”',
    options: [
      {
        id: 'opt1',
        text: '„Bár csábító az alacsony ár, vásárlóként felelősek vagyunk: egyetlen pamutpóló előállításához 2700 liter víz kell, és az olcsóság ára a fejlődő országok környezeti katasztrófája. Kevesebb, de tartósabb ruha vásárlásával valódi védelmet adhatunk a Földnek.”',
        isBest: true,
        feedback: 'Erős, tényeken nyugvó cáfolat konkrét számadattal (2700 liter) és morális felelősséggel.',
        points: 10
      },
      {
        id: 'opt2',
        text: '„Akkor járj meztelenül, ha ennyire nem érdekel a természet!”',
        isBest: false,
        feedback: 'Agresszív túlzás, ami megöli az értelmes vitát.',
        points: 0
      },
      {
        id: 'opt3',
        text: '„Hát végül is igazad van, tényleg olcsó.”',
        isBest: false,
        feedback: 'Ez nem cáfolat, hanem a vita azonnali feladása.',
        points: 1
      }
    ]
  }
];

export const SENTENCE_STARTERS = {
  hooks: [
    'A 21. században mindannyian szembesülünk azzal a kérdéssel, hogy...',
    'Képzeljünk el egy olyan világot, ahol...',
    'Napjaink egyik legvitatottabb iskolai kérdése, hogy...',
    'Gyakran halljuk a felnőttektől azt az állítást, miszerint...',
    'Bár első pillantásra egyszerűnek tűnik a döntés, valójában...'
  ],
  thesis: [
    'Meglátásom szerint elengedhetetlen, hogy...',
    'Úgy vélem, határozottan ki kell állnunk amellett, hogy...',
    'Személyes tapasztalataim és a tények alapján meggyőződésem, hogy...',
    'Véleményem szerint a legcélravezetőbb megoldás az, ha...'
  ],
  arguments: [
    'Elsősorban azért tartom ezt fontosnak, mert...',
    'Továbbá nem hagyható figyelmen kívül az a tény sem, miszerint...',
    'Másodsorban érdemes megvizsgálni a kérdés pszichológiai hátterét, ugyanis...',
    'Mindenekelőtt le kell szögeznünk, hogy...'
  ],
  examples: [
    'Például egy nemzetközi kutatás nemrég kimutatta, hogy...',
    'Jó példa erre a mindennapi iskolai életből az az eset, amikor...',
    'Például saját osztályunkban is megfigyelhető, hogy...',
    'Ezt bizonyítja az a jól ismert tapasztalat is, miszerint...'
  ],
  refutations: [
    'Bár megértem azokat, akik úgy vélik, hogy..., mégis meg kell fontolnunk, hogy...',
    'Kétségtelen, hogy van igazság abban az ellenérvben, miszerint..., mindazonáltal...',
    'Bár első hallásra logikusnak tűnik az a felvetés, hogy..., a valóságban mégis...',
    'Nem tagadható, hogy léteznek kockázatok, azonban úgy gondolom, hogy...'
  ],
  conclusions: [
    'Mindent egybevetve úgy gondolom, hogy...',
    'Összegzésként megállapítható, hogy a legfontosabb...',
    'Végezetül le kell vonnunk azt a tanulságot, hogy...',
    'A jövőre nézve a legbölcsebb lépés az lenne, ha...'
  ]
};
