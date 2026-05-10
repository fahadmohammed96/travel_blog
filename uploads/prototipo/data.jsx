/* prototipo data — italian content */

const TRIPS = [
  { id: 'porto', kind: 'ROAMED TRIP', country: 'PORTOGALLO', title: 'Tre giorni persi a Porto',
    dek: 'Un weekend lungo tra vino di Porto, azulejos e le strade più ripide che le tue ginocchia incontreranno.',
    nights: 3, dates: '22–25 SET 2025', month: 'Settembre 2025',
    price: 890, status: { kind: 'b-new', label: 'NUOVO' }, spots: 6, totalSpots: 10, edition: 4, rating: 4.9, reviewCount: 23, soldOut: false,
    guideId: 'sofia',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1400&q=80' },
  { id: 'puglia', kind: 'ROAMED TRIP', country: 'ITALIA', title: 'La strada lenta in Puglia',
    dek: 'Trulli, orecchiette, luce di mare. Sei giorni da Bari fino a Lecce, con sosta per le mandorle.',
    nights: 6, dates: '14–20 OTT 2025', month: 'Ottobre 2025',
    price: 1890, status: { kind: 'b-soft', label: '4 posti rimasti' }, spots: 4, totalSpots: 10, edition: 3, rating: 4.8, reviewCount: 19, soldOut: false,
    guideId: 'marco',
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1400&q=80' },
  { id: 'hokkaido', kind: 'ROAMED TRIP', country: 'GIAPPONE', title: 'Hokkaido a febbraio (sì, davvero)',
    dek: 'Neve farinosa, onsen e le izakaya più silenziose in cui ti sia mai seduto.',
    nights: 8, dates: '08–16 FEB 2026', month: 'Febbraio 2026',
    price: 3240, status: { kind: 'b-soldout', label: 'TUTTO ESAURITO' }, spots: 0, totalSpots: 10, edition: 2, rating: 5.0, reviewCount: 14, soldOut: true,
    nextEdition: 'FEB 2027',
    guideId: 'aya',
    image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=1400&q=80' },
  { id: 'oaxaca', kind: 'ROAMED TRIP', country: 'MESSICO', title: 'Una settimana di mole a Oaxaca',
    dek: 'Mercati all\'alba, mezcal al tramonto, tessitura nel mezzo. Gruppo piccolo, si mangia tanto.',
    nights: 7, dates: '04–11 NOV 2025', month: 'Novembre 2025',
    price: 2180, status: { kind: 'b-soft', label: 'Si riempie in fretta' }, spots: 3, totalSpots: 10, edition: 2, rating: 4.9, reviewCount: 11, soldOut: false,
    guideId: 'sofia',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1400&q=80' },
];

const ARTICLES = [
  { id: 'porto-d', eyebrow: 'DIARIO · PORTOGALLO', title: 'Tre giorni persi a Porto',
    dek: 'Un primo viaggio senza piani, senza prenotazioni, e con un\'opinione molto forte sui pastéis de nata.',
    meta: '5 min di lettura · Set 2025 · Porto', readTime: 5,
    image: 'https://images.unsplash.com/photo-1581873372796-635b67ca2008?w=1600&q=85' },
  { id: 'lisbon', eyebrow: 'DIARIO · PORTOGALLO', title: 'Perché torniamo sempre a Lisbona',
    dek: 'Quattro viaggi, mai uguali. Un piccolo manuale per chi sta pensando di andarci.',
    meta: '7 min di lettura · Ago 2025', readTime: 7,
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=80' },
  { id: 'kyoto', eyebrow: 'DIARIO · GIAPPONE', title: 'Una passeggiata mattutina a Kyoto',
    dek: 'Prima che arrivino i bus turistici. Un\'ora di città a noi soli.',
    meta: '4 min di lettura · Giu 2025', readTime: 4,
    image: 'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=1200&q=80' },
  { id: 'oaxaca-d', eyebrow: 'DIARIO · MESSICO', title: 'Sette mole, classifica ingiusta',
    meta: '6 min di lettura · Mag 2025', readTime: 6,
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80' },
  { id: 'iceland', eyebrow: 'DIARIO · ISLANDA', title: 'La ring road, ma al contrario',
    meta: '9 min di lettura · Apr 2025', readTime: 9,
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1200&q=80' },
  { id: 'morocco', eyebrow: 'DIARIO · MAROCCO', title: 'Tre notti sull\'Atlante',
    meta: '5 min di lettura · Mar 2025', readTime: 5,
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c61bf8?w=1200&q=80' },
];

const ITINERARY_PORTO = [
  { day: 1, title: 'Arrivo a Porto', subtitle: 'Sistemarsi, camminare lungo il fiume',
    items: [
      { time: '14:00', icon: 'plane', text: 'Arrivo a OPO. Trasferimento di gruppo alla Ribeira.' },
      { time: '17:30', icon: 'coffee', text: 'Drink di benvenuto al Café Guarany — port tonic.' },
      { time: '20:00', icon: 'utensils-crossed', text: 'Cena alla Cantina 32. Andiamoci piano, il jet lag esiste.' },
    ]},
  { day: 2, title: 'Oltre il fiume', subtitle: 'Vila Nova de Gaia, con calma',
    items: [
      { time: '09:30', icon: 'coffee', text: 'Colazione con pastéis alla Manteigaria.' },
      { time: '11:00', icon: 'map', text: 'Tour a piedi di Gaia + due cantine.' },
      { time: '15:00', icon: 'camera', text: 'Pomeriggio libero. Suggerito: giardini di Serralves.' },
      { time: '20:30', icon: 'utensils-crossed', text: 'Cena di gruppo da Tasquinha do Adelino.' },
    ]},
  { day: 3, title: 'Gita nel Douro', subtitle: 'Treno, barca, vigna',
    items: [
      { time: '08:15', icon: 'train', text: 'Treno da São Bento a Pinhão — siediti a destra.' },
      { time: '12:00', icon: 'wine', text: 'Pranzo alla Quinta do Bomfim, con degustazione.' },
      { time: '17:00', icon: 'train', text: 'Treno lento per il ritorno. Tramonto sul fiume.' },
    ]},
  { day: 4, title: 'Ultimo giorno', subtitle: 'Una mattina libera, e poi via',
    items: [
      { time: '10:00', icon: 'coffee', text: 'Colazione lenta. Mercato do Bolhão se vuoi.' },
      { time: '13:00', icon: 'plane', text: 'Trasferimento all\'aeroporto.' },
    ]},
];

/* Route maps — viewBox 1000×700.
   silhouette = sagoma del paese/regione (sfondo)
   coast = mare/costa (opzionale, dietro la silhouette)
   river = fiume (opzionale, sopra la silhouette)
   stops: labelDir = 'r' | 'l' | 'b' (default 'r') — direzione della label */
const ROUTES = {
  porto: {
    title: 'PORTOGALLO · NORD',
    region: 'Vale do Douro',
    coast: 'M 0,0 L 0,700 L 230,700 Q 220,560 235,440 Q 245,310 230,170 Q 215,80 230,0 Z',
    silhouette: 'M 230,0 Q 215,80 230,170 Q 245,310 235,440 Q 220,560 235,700 L 1000,700 L 1000,0 Z',
    river: 'M 240,440 Q 320,420 400,430 Q 500,450 600,420 Q 700,380 770,360 Q 850,340 920,320',
    stops: [
      { x: 250, y: 460, label: 'PORTO', day: 1, sub: 'Ribeira', labelDir: 'r' },
      { x: 270, y: 510, label: 'GAIA', day: 2, sub: 'Cantine', labelDir: 'r' },
      { x: 770, y: 360, label: 'PINHÃO', day: 3, sub: 'Douro', labelDir: 'l' },
      { x: 250, y: 460, label: 'PORTO', day: 4, sub: 'Volo', labelDir: 'b' },
    ],
    path: 'M 250,460 Q 260,490 270,510 Q 460,420 770,360 Q 470,420 250,460',
  },
  puglia: {
    title: 'ITALIA · PUGLIA',
    region: 'Il tacco',
    coast: 'M 0,0 L 1000,0 L 1000,700 L 0,700 Z',
    silhouette: 'M 130,80 L 280,140 Q 380,180 480,250 Q 580,330 670,420 Q 750,500 810,580 Q 850,630 870,650 L 820,640 Q 740,580 640,490 Q 540,400 440,320 Q 340,240 240,180 Q 160,140 130,80 Z M 130,80 L 280,140 Q 320,200 240,180',
    stops: [
      { x: 195, y: 130, label: 'BARI', day: 1, labelDir: 'l' },
      { x: 320, y: 220, label: 'ALBEROBELLO', day: 2, sub: 'Trulli', labelDir: 'l' },
      { x: 440, y: 320, label: 'OSTUNI', day: 3, labelDir: 'l' },
      { x: 600, y: 460, label: 'LECCE', day: 4, sub: 'Barocco', labelDir: 'r' },
      { x: 750, y: 580, label: 'OTRANTO', day: 5, sub: 'Mare', labelDir: 'r' },
      { x: 600, y: 460, label: 'LECCE', day: 6, labelDir: 'b' },
    ],
    path: 'M 195,130 Q 250,180 320,220 Q 380,270 440,320 Q 520,390 600,460 Q 675,520 750,580 Q 670,520 600,460',
  },
  hokkaido: {
    title: 'GIAPPONE · HOKKAIDO',
    region: 'Isola del nord',
    coast: 'M 0,0 L 1000,0 L 1000,700 L 0,700 Z',
    silhouette: 'M 220,100 Q 350,80 480,90 Q 620,100 760,140 Q 850,170 880,230 Q 870,300 830,360 Q 800,420 760,470 Q 700,530 620,560 Q 540,580 460,560 Q 380,540 320,500 Q 250,450 200,390 Q 160,330 150,260 Q 150,180 220,100 Z',
    stops: [
      { x: 380, y: 380, label: 'SAPPORO', day: 1, labelDir: 'r' },
      { x: 320, y: 470, label: 'NISEKO', day: 2, sub: 'Sci', labelDir: 'b' },
      { x: 480, y: 280, label: 'OTARU', day: 4, labelDir: 'r' },
      { x: 620, y: 380, label: 'NOBORIBETSU', day: 6, sub: 'Onsen', labelDir: 'r' },
      { x: 540, y: 540, label: 'HAKODATE', day: 8, labelDir: 'b' },
    ],
    path: 'M 380,380 Q 350,425 320,470 Q 380,400 480,280 Q 550,330 620,380 Q 580,460 540,540',
  },
  oaxaca: {
    title: 'MESSICO · OAXACA',
    region: 'Stato del sud',
    coast: 'M 0,0 L 1000,0 L 1000,700 L 0,700 Z',
    silhouette: 'M 100,180 Q 200,140 320,130 Q 460,120 600,140 Q 740,165 850,210 Q 920,250 920,330 Q 910,410 850,470 Q 760,530 640,540 Q 500,540 380,520 Q 260,490 170,440 Q 100,380 90,290 Q 90,220 100,180 Z',
    stops: [
      { x: 380, y: 280, label: 'OAXACA CITY', day: 1, sub: 'Centro', labelDir: 'l' },
      { x: 500, y: 320, label: 'TEOTITLÁN', day: 3, sub: 'Tessitura', labelDir: 'r' },
      { x: 620, y: 360, label: 'MITLA', day: 4, labelDir: 'r' },
      { x: 540, y: 460, label: 'HIERVE EL AGUA', day: 5, labelDir: 'b' },
      { x: 380, y: 280, label: 'OAXACA CITY', day: 7, sub: 'Volo', labelDir: 'b' },
    ],
    path: 'M 380,280 Q 440,300 500,320 Q 560,340 620,360 Q 580,410 540,460 Q 460,370 380,280',
  },
};

/* Polaroid wall — foto dei viaggiatori per ogni trip */
const TRIP_POLAROIDS = {
  porto: [
    { url: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80', caption: 'Ribeira, primo giro', author: 'Anna · 2024', x: 4, y: 20, rotate: -6, w: 240 },
    { url: 'https://images.unsplash.com/photo-1518730518541-d0843268c287?w=600&q=80', caption: 'cantine a Gaia', author: 'Marco · 2024', x: 24, y: 90, rotate: 4, w: 220 },
    { url: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&q=80', caption: 'tram 28, accidentalmente', author: 'Giulia · 2023', x: 44, y: 40, rotate: -3, w: 220 },
    { url: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80', caption: 'pinhão dal treno', author: 'Sofia · 2024', x: 64, y: 130, rotate: 8, w: 230 },
    { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', caption: 'tasca senza nome — €11', author: 'Aya · 2024', x: 12, y: 250, rotate: 5, w: 210 },
    { url: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?w=600&q=80', caption: 'tramonto sul Douro', author: 'Luca · 2023', x: 48, y: 270, rotate: -8, w: 240 },
    { url: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&q=80', caption: 'bifana #4 della giornata', author: 'Tommy · 2024', x: 74, y: 290, rotate: 3, w: 200 },
  ],
  puglia: [
    { url: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&q=80', caption: 'trulli al mattino', author: 'Anna · 2024', x: 8, y: 20, rotate: -5, w: 230 },
    { url: 'https://images.unsplash.com/photo-1539020140153-e479b8c61bf8?w=600&q=80', caption: 'Lecce barocca', author: 'Marco · 2024', x: 38, y: 60, rotate: 4, w: 220 },
    { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80', caption: 'orecchiette imparate', author: 'Sofia · 2023', x: 64, y: 30, rotate: -8, w: 220 },
    { url: 'https://images.unsplash.com/photo-1550000000000?w=600&q=80', caption: 'Otranto, mare aperto', author: 'Giulia · 2024', x: 18, y: 250, rotate: 6, w: 220 },
    { url: 'https://images.unsplash.com/photo-1558005530-a7958896ec60?w=600&q=80', caption: 'olive vecchie 800 anni', author: 'Luca · 2023', x: 50, y: 280, rotate: -3, w: 220 },
  ],
  hokkaido: [
    { url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80', caption: 'neve farinosa', author: 'Anna · 2024', x: 6, y: 20, rotate: -7, w: 230 },
    { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80', caption: 'onsen al tramonto', author: 'Marco · 2024', x: 38, y: 60, rotate: 5, w: 220 },
    { url: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=600&q=80', caption: 'ramen #1 di Sapporo', author: 'Sofia · 2023', x: 64, y: 30, rotate: -3, w: 220 },
    { url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80', caption: 'foresta a Niseko', author: 'Giulia · 2024', x: 22, y: 250, rotate: 4, w: 220 },
  ],
  oaxaca: [
    { url: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80', caption: 'mercato 20 de Noviembre', author: 'Anna · 2024', x: 6, y: 20, rotate: -6, w: 230 },
    { url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80', caption: 'tessitrice, Teotitlán', author: 'Marco · 2024', x: 38, y: 60, rotate: 5, w: 220 },
    { url: 'https://images.unsplash.com/photo-1518551933037-91b2f5f229cc?w=600&q=80', caption: 'mole negro, sette ore', author: 'Sofia · 2023', x: 64, y: 30, rotate: -8, w: 220 },
    { url: 'https://images.unsplash.com/photo-1594388572748-aa3e8c5ed0c6?w=600&q=80', caption: 'Hierve el Agua', author: 'Giulia · 2024', x: 28, y: 270, rotate: 7, w: 220 },
  ],
};

/* Profili guide locali (placeholder) */
const GUIDES = {
  sofia: { name: 'Sofia Marchetti', role: 'Founder · accompagna anche', city: 'Lisbona, PT', langs: ['IT', 'EN', 'PT'], trips: 38, years: 4, photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', bio: 'Vivo a Lisbona da quattro anni, scrivo da sempre. Ho fondato Oops I Roamed perché qualcuno doveva pure rispondere a tutte quelle email su "come ricreare quel viaggio".' },
  marco: { name: 'Marco D\'Angelo', role: 'Logistica · guida in Italia', city: 'Bari, IT', langs: ['IT', 'EN', 'FR'], trips: 24, years: 3, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Pugliese di nascita, romano per scelta. Conosco le strade secondarie e i ristoranti senza insegna meglio di Google Maps.' },
  aya: { name: 'Aya Tanaka', role: 'Fotografa · guida in Asia', city: 'Kyoto, JP', langs: ['IT', 'EN', 'JP'], trips: 16, years: 3, photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', bio: 'Cresciuta tra Roma e Tokyo. Le foto del diario asiatico sono quasi tutte mie. Sui viaggi parlo poco e indico molto.' },
};

/* Testimonianze viaggiatori (placeholder credibili) */
const TESTIMONIALS = {
  porto: [
    { author: 'Anna B.', city: 'Milano', age: 34, edition: '2024', rating: 5, photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', quote: 'Sono partita da sola e sono tornata con sei amici e cinque chili in più. Sofia ha la rara dote di farti sentire sempre nel posto giusto.', highlight: 'Da sola → tornata con sei amici' },
    { author: 'Luca R.', city: 'Bologna', age: 41, edition: '2024', rating: 5, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', quote: 'Avevo prenotato a malincuore — di solito viaggio per conto mio. La differenza tra essere turisti e essere portati per mano si vede al secondo giorno.', highlight: 'Solo traveler convertito' },
    { author: 'Giulia & Tommy', city: 'Torino', age: 29, edition: '2023', rating: 5, photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', quote: 'Scelti i posti dove mangiare e dormire come l\'avremmo fatto noi, ma meglio. Zero stress, zero "trappole turistiche". Torneremo di sicuro su un altro viaggio.', highlight: 'Coppia 30 anni' },
  ],
  puglia: [
    { author: 'Chiara M.', city: 'Roma', age: 38, edition: '2024', rating: 5, photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', quote: 'In sei giorni ho mangiato meglio che in un anno. Ma soprattutto: ho imparato a fare le orecchiette da una signora di 78 anni che non parla italiano standard.', highlight: 'Foodie, ne valeva ogni euro' },
    { author: 'Andrea P.', city: 'Verona', age: 52, edition: '2024', rating: 5, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', quote: 'Mio padre dopo l\'infarto aveva bisogno di un viaggio facile ma vero. Marco ha calibrato passo, soste e cibo. Roba da agenzia di lusso, prezzi normali.', highlight: 'Viaggio multi-generazionale' },
    { author: 'Elena T.', city: 'Genova', age: 45, edition: '2023', rating: 4, photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', quote: 'Una stella in meno solo perché un giorno ha piovuto e non era colpa loro. Tutto il resto: perfetto.', highlight: '4 stelle (per onestà)' },
  ],
  hokkaido: [
    { author: 'Federico L.', city: 'Milano', age: 36, edition: '2024', rating: 5, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', quote: 'Avevo paura del Giappone "vero" senza menù in inglese. Aya ti porta in posti dove non saresti mai entrato e dopo due giorni ordini come un local.', highlight: 'Prima volta in Asia' },
    { author: 'Beatrice S.', city: 'Padova', age: 31, edition: '2025', rating: 5, photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', quote: 'Onsen, neve farinosa, ramen alle 23. Per chi pensa che il Giappone sia solo Tokyo e Kyoto, questo viaggio cambia idea in tre giorni.', highlight: '"Non sapevo che esistesse"' },
  ],
  oaxaca: [
    { author: 'Marta C.', city: 'Firenze', age: 47, edition: '2024', rating: 5, photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', quote: 'Il viaggio più colorato che abbia fatto. E la guida ci ha portato in un mercato che non c\'è su nessuna guida — solo per quello pagherei due volte.', highlight: 'Off the beaten path vero' },
    { author: 'Davide & Sara', city: 'Napoli', age: 33, edition: '2024', rating: 5, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', quote: 'Luna di miele alternativa. Niente resort, tutto vero. Sofia ha aggiunto due notti di calma a metà viaggio quando ha capito che ne avevamo bisogno.', highlight: 'Luna di miele non-convenzionale' },
  ],
};

/* Cosa è incluso / escluso per ogni Roamed Trip */
const INCLUSIONS = {
  default: {
    included: [
      { icon: 'bed', text: 'Tutti gli alloggi (case curate, mai catene)' },
      { icon: 'utensils-crossed', text: 'Cene di gruppo + colazioni' },
      { icon: 'user-round', text: 'Guida locale 24/7 con noi' },
      { icon: 'compass', text: 'Tutte le esperienze guidate dell\'itinerario' },
      { icon: 'bus', text: 'Trasferimenti interni durante il viaggio' },
      { icon: 'phone', text: 'Numero WhatsApp dedicato anche post-viaggio' },
    ],
    excluded: [
      { icon: 'plane', text: 'Voli internazionali andata/ritorno' },
      { icon: 'utensils', text: 'Pranzi liberi (consigliamo dove andare)' },
      { icon: 'wallet', text: 'Mance e spese personali' },
      { icon: 'shield', text: 'Assicurazione viaggio (consigliata, ti aiutiamo)' },
    ],
  },
};

/* Statistiche brand globali */
const BRAND_STATS = {
  travelersCount: 247,
  tripsCount: 22,
  countriesCount: 8,
  avgRating: 4.9,
  reviewsCount: 67,
  yearsActive: 4,
};

/* Quote stampa per footer / hero (riassunte da PressPage) */
const PRESS_QUOTES_SHORT = [
  { src: 'Vogue Italia', short: '"Capisce davvero la lentezza"' },
  { src: 'Il Post',      short: '"Una persona reale che ti racconta un viaggio"' },
  { src: 'Domus',        short: '"Una nuova generazione di travel writing"' },
];

/* FAQ pre-vendita rapide nel TripDetail */
const PREBUY_FAQ = [
  { q: 'Posso partire da solo/a?', a: 'Sì, circa metà dei viaggiatori parte single. La singola non ha supplemento punitivo — pagamento equo, non penalizzante.' },
  { q: 'Cosa succede se devo cancellare?', a: 'Cancellazione gratuita fino a 60 giorni prima. Tra 60 e 30 rimborsiamo il 50%. Sotto i 30 puoi trovare un sostituto.' },
  { q: 'Quante persone in totale?', a: 'Massimo 10 viaggiatori, sempre. La guida è in più. Sotto i 4 iscritti il viaggio non parte e rimborsiamo tutto.' },
  { q: 'Devo essere "in forma"?', a: 'Specificato per ogni trip — Porto richiede gambe per le salite, Hokkaido sci base. Hai dubbi? Scrivici prima.' },
];

/* Pagine legali — versioni placeholder credibili */
const LEGAL = {
  privacy: {
    title: 'Privacy & dati',
    intro: 'Cosa raccogliamo, perché, e come ti tuteliamo. Senza giri di parole.',
    sections: [
      { h: 'Chi siamo', p: 'Oops I Roamed S.r.l. — sede legale Lisbona, NIF PT517XXXXXX. Titolare del trattamento: Sofia Marchetti, ciao@oopsiroamed.com.' },
      { h: 'Cosa raccogliamo', p: 'Solo i dati necessari: nome, email, città di partenza per le prenotazioni; preferenze per gli itinerari su misura. Niente tracking pubblicitario di terze parti.' },
      { h: 'Perché', p: 'Per organizzare il tuo viaggio, mandarti la newsletter (solo se l\'hai chiesta), e rispondere ai tuoi messaggi. Niente profilazione, niente vendita a terzi.' },
      { h: 'Cookie', p: 'Solo i tecnici necessari. Per le statistiche aggregate usiamo Plausible (no cookie, no IP). Vedi la pagina Cookie per dettagli.' },
      { h: 'I tuoi diritti', p: 'GDPR pieno. Puoi chiedere accesso, rettifica, cancellazione, portabilità in qualsiasi momento scrivendo a privacy@oopsiroamed.com. Rispondiamo entro 30 giorni (di solito molto prima).' },
      { h: 'Conservazione', p: 'Dati di prenotazione: 10 anni (obblighi fiscali). Newsletter: finché sei iscritta. Richieste bespoke non confermate: 24 mesi.' },
    ],
    updated: '01 gennaio 2026',
  },
  terms: {
    title: 'Termini & condizioni',
    intro: 'Le regole del gioco, scritte per essere lette davvero.',
    sections: [
      { h: 'Prenotazioni', p: 'La conferma del Roamed Trip è valida solo dopo il pagamento dell\'acconto del 30%. Saldo dovuto 60 giorni prima della partenza. Tutti i prezzi includono l\'IVA.' },
      { h: 'Cancellazioni viaggiatore', p: 'Gratuita fino a 60gg dalla partenza. 60–30gg: 50% di rimborso. Meno di 30gg: nessun rimborso, ma puoi cedere il posto a un sostituto pagando solo €40 di pratica.' },
      { h: 'Cancellazione da parte nostra', p: 'Se sotto i 4 iscritti annulliamo il viaggio entro 45gg dalla partenza e rimborsiamo il 100%. Se forza maggiore (eventi naturali, restrizioni), rimborso integrale o credito a tua scelta.' },
      { h: 'Cosa è incluso', p: 'Vedi pagina di ogni viaggio. Voli internazionali e assicurazione viaggio non sono mai inclusi (ti aiutiamo a sceglierli).' },
      { h: 'Itinerari su misura', p: 'La proposta è gratuita e senza impegno. Diventa vincolante solo dopo conferma scritta + acconto.' },
      { h: 'Responsabilità', p: 'Siamo organizzatori di viaggio coperti da polizza RC ai sensi del D.Lgs 79/2011. Numero IATA in fase di registrazione.' },
      { h: 'Foro', p: 'Foro competente: Lisbona, PT. Le controversie con consumatori UE possono essere risolte tramite la piattaforma ODR della Commissione Europea.' },
    ],
    updated: '01 gennaio 2026',
  },
  cookie: {
    title: 'Cookie',
    intro: 'Pochissimi, dichiarati, mai pubblicitari.',
    sections: [
      { h: 'Cookie tecnici', p: 'Necessari al funzionamento del sito (login, carrello, preferenze). Non puoi disattivarli senza rompere qualcosa. Durata: sessione o 1 anno max.' },
      { h: 'Statistiche', p: 'Usiamo Plausible Analytics, ospitato in UE. Non usa cookie, non traccia IP, non profila. Numeri aggregati per capire cosa vi piace leggere.' },
      { h: 'Niente terze parti pubblicitarie', p: 'No Google Ads, no Meta Pixel, no remarketing. Quando linkiamo prodotti su Amazon (Shop) il cookie è di Amazon — non lo controlliamo, ma puoi bloccarlo nel browser.' },
      { h: 'Embed', p: 'Le mappe usano OpenStreetMap (no cookie). I video YouTube vengono caricati solo dopo il tuo click esplicito.' },
    ],
    updated: '01 gennaio 2026',
  },
};

Object.assign(window, { TRIPS, ARTICLES, ITINERARY_PORTO, ROUTES, TRIP_POLAROIDS, GUIDES, TESTIMONIALS, INCLUSIONS, BRAND_STATS, PRESS_QUOTES_SHORT, PREBUY_FAQ, LEGAL });
