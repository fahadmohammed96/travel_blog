/* prototipo · itinerari gratuiti — dati + pagine
   Lead magnet del brand: 15+ itinerari self-guided, gratuiti, scaricabili.
   Posizionati come terzo pilastro accanto a "Roamed Trips" e "Bespoke". */

const ITINERARIES = [
  { id: 'porto-3', country: 'Portogallo', city: 'Porto', days: 3, vibe: 'urban', season: ['primavera','autunno'],
    title: 'Porto in 3 giorni, senza correre',
    dek: 'Ribeira, cantine di Gaia e una giornata nel Douro. Tutto a piedi e in treno.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=85',
    budget: '€€', downloads: 1840, updated: 'MAR 2026' },
  { id: 'lisbona-5', country: 'Portogallo', city: 'Lisbona', days: 5, vibe: 'urban', season: ['primavera','autunno','inverno'],
    title: 'Lisbona lenta, cinque giorni',
    dek: 'Alfama all\'alba, Belém senza fila, Sintra in giornata. Più le tasche giuste.',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=85',
    budget: '€€', downloads: 2960, updated: 'FEB 2026' },
  { id: 'tokyo-7', country: 'Giappone', city: 'Tokyo', days: 7, vibe: 'urban', season: ['primavera','autunno'],
    title: 'Tokyo, una settimana per orientarsi',
    dek: 'Sette quartieri, un onsen, ramen tutti i giorni. Niente Disneyland.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=85',
    budget: '€€€', downloads: 3210, updated: 'GEN 2026' },
  { id: 'kyoto-4', country: 'Giappone', city: 'Kyoto', days: 4, vibe: 'cultura', season: ['primavera','autunno'],
    title: 'Kyoto alle 6 del mattino',
    dek: 'I templi prima dei bus, le case da tè quando aprono. Quattro giorni di silenzio.',
    image: 'https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=1200&q=85',
    budget: '€€', downloads: 2180, updated: 'GEN 2026' },
  { id: 'islanda-7', country: 'Islanda', city: 'Ring Road', days: 7, vibe: 'avventura', season: ['estate'],
    title: 'Ring Road in 7 giorni (al contrario)',
    dek: 'Reykjavík per ultimo. Cascate, ghiacciai, una notte alle Westman Islands.',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1200&q=85',
    budget: '€€€', downloads: 1620, updated: 'APR 2026' },
  { id: 'puglia-w', country: 'Italia', city: 'Salento', days: 4, vibe: 'mare', season: ['estate','primavera'],
    title: 'Weekend lungo nel Salento',
    dek: 'Lecce, Otranto, Castro. Quattro giorni di pietra, mare e taralli.',
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&q=85',
    budget: '€€', downloads: 2240, updated: 'MAR 2026' },
  { id: 'marocco-7', country: 'Marocco', city: 'Marrakech → Atlante', days: 7, vibe: 'cultura', season: ['primavera','autunno','inverno'],
    title: 'Marocco classico, ben fatto',
    dek: 'Marrakech, tre notti nell\'Atlante, un giorno a Essaouira. Niente Sahara turistico.',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c61bf8?w=1200&q=85',
    budget: '€€', downloads: 1480, updated: 'FEB 2026' },
  { id: 'oaxaca-5', country: 'Messico', city: 'Oaxaca', days: 5, vibe: 'cibo', season: ['autunno','inverno'],
    title: 'Cinque giorni a Oaxaca per mangiare',
    dek: 'Mercati all\'alba, mezcal al tramonto. Sette mole e un giorno a Hierve el Agua.',
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=85',
    budget: '€€', downloads: 1120, updated: 'GEN 2026' },
  { id: 'roma-3', country: 'Italia', city: 'Roma', days: 3, vibe: 'urban', season: ['primavera','autunno','inverno'],
    title: 'Roma in tre giorni, da non-turista',
    dek: 'Niente Colosseo alle 11. Una giornata a Testaccio, una sui Castelli, una al Pigneto.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=85',
    budget: '€€', downloads: 3680, updated: 'APR 2026' },
  { id: 'vietnam-10', country: 'Vietnam', city: 'Da Hanoi a Hoi An', days: 10, vibe: 'avventura', season: ['inverno','primavera'],
    title: 'Vietnam da nord a centro, 10 giorni',
    dek: 'Hanoi, Ha Long via Cat Ba, Hue in treno, Hoi An per chiudere. Niente Ho Chi Minh.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=85',
    budget: '€', downloads: 1860, updated: 'MAR 2026' },
  { id: 'grecia-7', country: 'Grecia', city: 'Naxos & Amorgos', days: 7, vibe: 'mare', season: ['estate','primavera'],
    title: 'Due isole greche poco famose',
    dek: 'Naxos per i sentieri, Amorgos per il mare. Niente Mykonos, niente Santorini.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=85',
    budget: '€€', downloads: 980, updated: 'FEB 2026' },
  { id: 'andalusia-6', country: 'Spagna', city: 'Andalusia', days: 6, vibe: 'cultura', season: ['primavera','autunno'],
    title: 'Andalusia: Siviglia, Cordoba, Granada',
    dek: 'Sei giorni, tre città, un treno veloce. Tapas mattino e sera.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=85',
    budget: '€€', downloads: 2030, updated: 'MAR 2026' },
  { id: 'norvegia-5', country: 'Norvegia', city: 'Lofoten', days: 5, vibe: 'avventura', season: ['estate'],
    title: 'Lofoten in macchina, 5 giorni',
    dek: 'Sole di mezzanotte, villaggi di pescatori, due trek facili. Una cabina rorbu.',
    image: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=1200&q=85',
    budget: '€€€', downloads: 1340, updated: 'MAG 2026' },
  { id: 'sicilia-7', country: 'Italia', city: 'Sicilia orientale', days: 7, vibe: 'cibo', season: ['primavera','autunno'],
    title: 'Sicilia est: Catania, Siracusa, Noto',
    dek: 'Etna al tramonto, mercato della Pescheria, Val di Noto barocco. Cannoli ovunque.',
    image: 'https://images.unsplash.com/photo-1471201025330-3092d6f7ca90?w=1200&q=85',
    budget: '€€', downloads: 2780, updated: 'APR 2026' },
  { id: 'praga-3', country: 'Cechia', city: 'Praga', days: 3, vibe: 'urban', season: ['primavera','autunno','inverno'],
    title: 'Praga, un weekend lungo',
    dek: 'Ponte Carlo prima delle 7, birra a Žižkov, gita ad Český Krumlov.',
    image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=85',
    budget: '€', downloads: 1560, updated: 'GEN 2026' },
  { id: 'thailandia-12', country: 'Thailandia', city: 'Da Bangkok al Sud', days: 12, vibe: 'mare', season: ['inverno']
    , title: 'Thailandia 12 giorni: città, mare, calma',
    dek: 'Tre notti a Bangkok, Chiang Mai a metà, finale a Koh Lanta. Senza zaino in spalla.',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=85',
    budget: '€', downloads: 2150, updated: 'DIC 2025' },
];

const ITIN_VIBES = [
  { id: 'urban', label: 'Città', icon: 'building-2' },
  { id: 'mare', label: 'Mare', icon: 'waves' },
  { id: 'avventura', label: 'Avventura', icon: 'mountain' },
  { id: 'cultura', label: 'Cultura', icon: 'landmark' },
  { id: 'cibo', label: 'Cibo', icon: 'utensils-crossed' },
];

/* Sample dettaglio giorno-per-giorno — usiamo Porto come canone, ma generabile per ognuno */
const ITIN_DETAILS = {
  'porto-3': {
    summary: 'Tre giorni a Porto facendo le cose giuste e nessun museo che non vuoi vedere. Si cammina molto. Si beve abbastanza.',
    bestFor: 'Prima volta in Portogallo · coppie · solo travel',
    intensity: 'Media — molte salite',
    cost: 'Circa €400–€600 a persona escluso volo',
    days: [
      { n: 1, title: 'Atterraggio + Ribeira',
        stops: [
          { time: '13:00', text: 'Arrivo a OPO. Metro fino a Trindade, poi 10 min a piedi al B&B.' },
          { time: '16:00', text: 'Caffè + pastel da Manteigaria do Bolhão. Niente fila.' },
          { time: '17:30', text: 'Discesa alla Ribeira via Rua das Flores. Soste senza ordine.' },
          { time: '20:30', text: 'Cena alla Tasca da Badalhoca. Niente prenotazione, niente menù.' },
        ]},
      { n: 2, title: 'Gaia, le cantine vere',
        stops: [
          { time: '09:30', text: 'Caffè e bifana al Café Santiago.' },
          { time: '11:00', text: 'Ponte Luís I a piedi, livello superiore. Foto poche, sguardo molto.' },
          { time: '12:30', text: 'Cantine Kopke + Graham\'s. Prenota Graham\'s la sera prima.' },
          { time: '20:00', text: 'Tramonto al Jardim do Morro con un porto in carta.' },
        ]},
      { n: 3, title: 'Douro in treno',
        stops: [
          { time: '08:15', text: 'Treno da São Bento a Pinhão. Lato destro del vagone.' },
          { time: '12:00', text: 'Pranzo alla Quinta do Bomfim. Degustazione + tre piatti.' },
          { time: '17:00', text: 'Ritorno lento. Tramonto sul fiume dalla finestra.' },
          { time: '21:00', text: 'Volo o ultima notte. Cena leggera al Casa Guedes.' },
        ]},
    ],
    practical: [
      { k: 'COME ARRIVARE', v: 'Voli diretti da Milano, Roma, Bologna. Metro Linea E dall\'aeroporto al centro: 45 min, €2,60.' },
      { k: 'DOVE DORMIRE', v: 'Cedofeita o Bonfim per quartieri veri. Ribeira è bella ma rumorosa e costosa.' },
      { k: 'TRASPORTI', v: 'Tutto a piedi. Per Pinhão treno regionale. Per Sintra/Lisbona Alfa Pendular.' },
      { k: 'COSA EVITARE', v: 'Tour delle sei cantine in mezza giornata. Risto-vista sul fiume dopo le 19.' },
    ],
  },
};

/* Genera un dettaglio fallback per gli itinerari senza copia completa */
function getItinDetail(it) {
  if (ITIN_DETAILS[it.id]) return ITIN_DETAILS[it.id];
  // Fallback strutturato
  return {
    summary: `${it.days} giorni a ${it.city} pensati per chi ha poco tempo ma non vuole una lista di "cose da vedere". Costruito su ${it.days} esperienze reali.`,
    bestFor: it.vibe === 'mare' ? 'Coppie · famiglie · chi cerca calma' :
             it.vibe === 'avventura' ? 'Chi cammina · gruppi piccoli · 25–45 anni' :
             it.vibe === 'cibo' ? 'Foodie · viaggi a budget medio' :
             it.vibe === 'cultura' ? 'Prima volta nel paese · chi legge molto' :
             'Tutti i tipi di viaggiatore',
    intensity: it.vibe === 'avventura' ? 'Alta' : it.vibe === 'mare' ? 'Bassa' : 'Media',
    cost: it.budget === '€' ? '€30–60 al giorno' : it.budget === '€€' ? '€80–140 al giorno' : '€180–280 al giorno',
    days: Array.from({ length: Math.min(it.days, 4) }, (_, i) => ({
      n: i + 1,
      title: i === 0 ? `Arrivo a ${it.city}` :
             i === it.days - 1 ? 'Ultimo giorno, partenza lenta' :
             `Giorno ${i + 1}`,
      stops: [
        { time: '09:00', text: 'Colazione lenta nel quartiere. Caffè da bar locale.' },
        { time: '11:30', text: 'Prima esperienza del giorno — vedi PDF per l\'indirizzo.' },
        { time: '13:30', text: 'Pranzo dove mangia chi ci vive.' },
        { time: '16:00', text: 'Pomeriggio libero o seconda esperienza.' },
        { time: '20:30', text: 'Cena. Suggerito un posto specifico nel PDF.' },
      ],
    })).concat(it.days > 4 ? [{ n: '+', title: `Altri ${it.days - 4} giorni nel PDF`, stops: [] }] : []),
    practical: [
      { k: 'COME ARRIVARE', v: `Voli diretti dai principali hub italiani verso ${it.city}.` },
      { k: 'DOVE DORMIRE', v: 'Tre zone consigliate nel PDF, con prezzi indicativi e tipologia.' },
      { k: 'TRASPORTI', v: 'Indicazioni dettagliate nel PDF — biglietti, app, pass.' },
      { k: 'STAGIONE', v: `Meglio in ${it.season.join(' / ')}.` },
    ],
  };
}

/* ============ ITINERARIES LIST PAGE ============ */
const ItinerariesPage = ({ params = {} }) => {
  const { go } = useApp();
  const [vibe, setVibe] = React.useState(params.vibe || 'all');
  const [country, setCountry] = React.useState(params.country || 'all');
  const [duration, setDuration] = React.useState('all'); // short, medium, long

  const countries = ['all', ...Array.from(new Set(ITINERARIES.map(i => i.country)))];

  const filtered = ITINERARIES.filter(it => {
    if (vibe !== 'all' && it.vibe !== vibe) return false;
    if (country !== 'all' && it.country !== country) return false;
    if (duration === 'short' && it.days > 3) return false;
    if (duration === 'medium' && (it.days < 4 || it.days > 6)) return false;
    if (duration === 'long' && it.days < 7) return false;
    return true;
  });

  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="container">
        <Eyebrow>ITINERARI GRATUITI · {ITINERARIES.length} DISPONIBILI</Eyebrow>
        <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 24px', maxWidth: 880 }}>
          Itinerari pronti, da usare come sono.
        </h1>
        <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(18px, 2.2vw, 22px)', color: 'var(--fg-2)', maxWidth: 640, marginBottom: 12 }}>
          Quindici viaggi che abbiamo fatto e scritto bene. Scaricabili in PDF, gratis, senza email obbligatoria.
        </p>
        <div className="rise rise-2" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '.1em', marginBottom: 48 }}>
          ↳ Ogni itinerario è una guida self-guided, aggiornata, non un riassunto generico.
        </div>

        {/* Filtri */}
        <div className="itin-filters rise rise-3" style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40, padding: '24px 28px', background: 'var(--bg-elevated)', borderRadius: 'var(--r-lg)', border: '1px solid var(--border-soft)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
            <Meta style={{ minWidth: 80 }}>VIBE</Meta>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <Chip active={vibe === 'all'} onClick={() => setVibe('all')}>Tutti</Chip>
              {ITIN_VIBES.map(v => <Chip key={v.id} icon={v.icon} active={vibe === v.id} onClick={() => setVibe(v.id)}>{v.label}</Chip>)}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
            <Meta style={{ minWidth: 80 }}>DURATA</Meta>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <Chip active={duration === 'all'} onClick={() => setDuration('all')}>Tutte</Chip>
              <Chip active={duration === 'short'} onClick={() => setDuration('short')}>Weekend · 2-3 gg</Chip>
              <Chip active={duration === 'medium'} onClick={() => setDuration('medium')}>Settimana · 4-6 gg</Chip>
              <Chip active={duration === 'long'} onClick={() => setDuration('long')}>Lunga · 7+ gg</Chip>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
            <Meta style={{ minWidth: 80 }}>PAESE</Meta>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {countries.map(c => <Chip key={c} active={country === c} onClick={() => setCountry(c)}>{c === 'all' ? 'Ovunque' : c}</Chip>)}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
          <Meta>{filtered.length} {filtered.length === 1 ? 'ITINERARIO' : 'ITINERARI'}</Meta>
          {(vibe !== 'all' || country !== 'all' || duration !== 'all') && (
            <button className="btn btn-ghost btn-sm" onClick={() => { setVibe('all'); setCountry('all'); setDuration('all'); }}>
              <Icon name="x" size={14} /> Azzera filtri
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div style={{ padding: 64, textAlign: 'center', background: 'var(--bg-sunken)', borderRadius: 'var(--r-lg)' }}>
            <Icon name="search-x" size={32} style={{ color: 'var(--fg-3)', marginBottom: 12 }} />
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, margin: '0 0 16px' }}>Nessun itinerario con questi filtri.</p>
            <Button variant="secondary" onClick={() => { setVibe('all'); setCountry('all'); setDuration('all'); }}>Vedi tutti</Button>
          </div>
        ) : (
          <div className="itin-grid">
            {filtered.map((it, i) => <ItineraryCard key={it.id} it={it} i={i} onOpen={() => go('itinerary', { id: it.id })} />)}
          </div>
        )}

        {/* CTA bespoke a fondo lista */}
        <div className="itin-bespoke-cta rise" style={{ marginTop: 80, padding: 40, background: 'linear-gradient(135deg, var(--forest-900), var(--forest-800))', borderRadius: 'var(--r-xl)', color: 'var(--cream-50)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: '1 1 320px' }}>
            <Eyebrow style={{ color: 'var(--cream-300)' }}>NON TROVI IL TUO?</Eyebrow>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.1, margin: '12px 0 8px' }}>
              Ti facciamo un itinerario su misura.
            </h3>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--cream-200)', margin: 0, maxWidth: 480 }}>
              Brief in 5 minuti, piano cucito addosso entro 3 giorni. Gratis e senza impegno.
            </p>
          </div>
          <Button variant="accent" size="lg" icon="arrow-right" onClick={() => go('bespoke')}>Richiedi il tuo</Button>
        </div>
      </div>
    </div>
  );
};

/* ============ ITINERARY CARD ============ */
const ItineraryCard = ({ it, i, onOpen }) => (
  <article className="card cardlink rise" onClick={onOpen}
    style={{ animationDelay: `${i * 50}ms`, cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
    <div className="card-img" style={{ aspectRatio: '4/3', position: 'relative' }}>
      <img src={it.image} alt={it.title} loading="lazy" />
      <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(15,26,20,.78)', backdropFilter: 'blur(8px)', color: 'var(--cream-50)', padding: '6px 12px', borderRadius: 999, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.1em' }}>
        GRATIS · PDF
      </div>
      <div style={{ position: 'absolute', top: 14, right: 14, background: 'var(--cream-50)', padding: '6px 10px', borderRadius: 999, fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500, color: 'var(--ink-1000)' }}>
        {it.days} {it.days === 1 ? 'giorno' : 'giorni'}
      </div>
    </div>
    <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Eyebrow>{it.country.toUpperCase()} · {it.city.toUpperCase()}</Eyebrow>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.015em', margin: '6px 0 10px' }}>{it.title}</h3>
      <p style={{ margin: '0 0 16px', color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.55, flex: 1 }}>{it.dek}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-soft)', paddingTop: 14, gap: 8 }}>
        <Meta>{it.budget} · {it.downloads.toLocaleString('it-IT')} DOWNLOAD</Meta>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--clay-700)', letterSpacing: '.08em' }}>APRI →</span>
      </div>
    </div>
  </article>
);

/* ============ ITINERARY DETAIL ============ */
const ItineraryDetail = ({ params }) => {
  const { go } = useApp();
  const it = ITINERARIES.find(x => x.id === params.id) || ITINERARIES[0];
  const detail = getItinDetail(it);
  const [openDay, setOpenDay] = React.useState(0);
  const [downloaded, setDownloaded] = React.useState(false);
  const [showOptionalEmail, setShowOptionalEmail] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleDownload = () => {
    setDownloaded(true);
    setShowOptionalEmail(true);
    // In una vera implementazione: trigger download del PDF
  };

  // related: altri itinerari stesso paese o stessa vibe
  const related = ITINERARIES.filter(x => x.id !== it.id && (x.country === it.country || x.vibe === it.vibe)).slice(0, 3);

  return (
    <div className="page-enter">
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: 460, display: 'flex', alignItems: 'flex-end', padding: '48px 0 56px', background: 'var(--ink-1000)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img src={it.image} alt={it.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,26,20,.3) 0%, rgba(15,26,20,.85) 100%)' }}></div>
        </div>
        <div className="container" style={{ position: 'relative', color: 'var(--cream-50)' }}>
          <button onClick={() => go('itineraries')} style={{ background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', color: 'var(--cream-50)', padding: '6px 14px', borderRadius: 999, font: 'inherit', fontSize: 12, cursor: 'pointer', marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Icon name="arrow-left" size={14} /> Tutti gli itinerari
          </button>
          <Eyebrow style={{ color: 'var(--clay-300)' }}>{it.country.toUpperCase()} · {it.city.toUpperCase()} · {it.days} GIORNI</Eyebrow>
          <h1 className="h-display-it" style={{ margin: '12px 0 20px', maxWidth: 900, fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>{it.title}</h1>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 22px)', maxWidth: 600, color: 'var(--cream-100)', margin: 0 }}>{it.dek}</p>
          <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <Button variant="accent" size="lg" icon={downloaded ? 'check' : 'download'} onClick={handleDownload}>
              {downloaded ? 'PDF scaricato' : 'Scarica PDF — gratis'}
            </Button>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cream-200)', letterSpacing: '.08em' }}>
              {it.downloads.toLocaleString('it-IT')} download · agg. {it.updated}
            </div>
          </div>
        </div>
      </section>

      {/* SOMMARIO + PRATICO */}
      <section className="itin-detail-grid" style={{ padding: '64px 0 32px' }}>
        <div className="container itin-detail-cols">
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(20px, 2.4vw, 26px)', color: 'var(--fg-1)', lineHeight: 1.45, marginTop: 0 }}>{detail.summary}</p>
            <div className="itin-meta-row" style={{ marginTop: 32 }}>
              {[
                { k: 'Adatto a', v: detail.bestFor },
                { k: 'Intensità', v: detail.intensity },
                { k: 'Costo indicativo', v: detail.cost },
                { k: 'Aggiornato', v: it.updated },
              ].map(m => (
                <div key={m.k} style={{ padding: '14px 0', borderBottom: '1px solid var(--border-soft)' }}>
                  <Meta>{m.k.toUpperCase()}</Meta>
                  <div style={{ fontSize: 15, color: 'var(--fg-1)', marginTop: 4 }}>{m.v}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Sticky download card desktop */}
          <aside className="itin-side">
            <div className="itin-side-card">
              <Eyebrow style={{ color: 'var(--clay-700)' }}>L'ITINERARIO COMPLETO</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 28, margin: '8px 0 16px', lineHeight: 1.2 }}>Tutto in un PDF.</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Giorno per giorno, ora per ora', 'Indirizzi, prezzi, prenotazioni', 'Mappe offline', 'Frasi locali utili'].map(t => (
                  <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--fg-2)' }}>
                    <Icon name="check" size={16} style={{ color: 'var(--forest-700)', marginTop: 2, flex: 'none' }} /> {t}
                  </li>
                ))}
              </ul>
              <Button variant="primary" block icon={downloaded ? 'check' : 'download'} onClick={handleDownload}>
                {downloaded ? 'Scaricato!' : 'Scarica gratis'}
              </Button>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '.08em', textAlign: 'center' }}>
                NESSUNA EMAIL · NESSUNA REGISTRAZIONE
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* GIORNI */}
      <section style={{ padding: '32px 0' }}>
        <div className="container narrow" style={{ paddingLeft: 24, paddingRight: 24 }}>
          <Eyebrow>GIORNO PER GIORNO</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.015em', margin: '8px 0 32px' }}>Come si svolge.</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {detail.days.map((d, i) => {
              const isOpen = openDay === i;
              return (
                <div key={i} style={{ borderTop: i === 0 ? '1px solid var(--border)' : 'none', borderBottom: '1px solid var(--border)' }}>
                  <button onClick={() => setOpenDay(isOpen ? -1 : i)} style={{ width: '100%', background: 'transparent', border: 'none', padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, font: 'inherit', textAlign: 'left' }}>
                    <div style={{ display: 'flex', gap: 20, alignItems: 'baseline', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-700)', letterSpacing: '.12em' }}>GIORNO {String(d.n).padStart(2, '0')}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 400, color: 'var(--fg-1)' }}>{d.title}</span>
                    </div>
                    <Icon name={isOpen ? 'minus' : 'plus'} size={20} />
                  </button>
                  <div style={{ maxHeight: isOpen ? 800 : 0, overflow: 'hidden', transition: 'max-height 380ms var(--ease-out), padding 380ms var(--ease-out)', paddingBottom: isOpen ? 24 : 0 }}>
                    {d.stops.length > 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingLeft: 4 }}>
                        {d.stops.map((s, j) => (
                          <div key={j} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 16, padding: '8px 0', borderTop: j === 0 ? 'none' : '1px solid var(--border-soft)' }}>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)', paddingTop: 2 }}>{s.time}</div>
                            <div style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.55 }}>{s.text}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--fg-2)', fontSize: 18 }}>
                        Tutti i dettagli sono nel PDF — scaricalo qui sopra.
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRATICO */}
      <section style={{ padding: '48px 0', background: 'var(--bg-sunken)', marginTop: 48 }}>
        <div className="container narrow" style={{ paddingLeft: 24, paddingRight: 24 }}>
          <Eyebrow>SAPERE PRIMA DI PARTIRE</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1, letterSpacing: '-0.015em', margin: '8px 0 32px' }}>Il lato pratico.</h2>
          <div className="itin-practical-grid">
            {detail.practical.map(p => (
              <div key={p.k} style={{ padding: '20px 24px', background: 'var(--bg-elevated)', borderRadius: 'var(--r-md)' }}>
                <Meta>{p.k}</Meta>
                <p style={{ fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.6, margin: '8px 0 0' }}>{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORRELATI */}
      {related.length > 0 && (
        <section style={{ padding: '64px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
              <div>
                <Eyebrow>ALTRI ITINERARI</Eyebrow>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.1, letterSpacing: '-0.015em', margin: '8px 0 0' }}>Ti potrebbero piacere anche</h2>
              </div>
              <Button variant="ghost" icon="arrow-right" onClick={() => go('itineraries')}>Vedi tutti</Button>
            </div>
            <div className="itin-grid">
              {related.map((r, i) => <ItineraryCard key={r.id} it={r} i={i} onOpen={() => go('itinerary', { id: r.id })} />)}
            </div>
          </div>
        </section>
      )}

      {/* BESPOKE CTA */}
      <section style={{ padding: '48px 0 96px' }}>
        <div className="container">
          <div style={{ padding: 'clamp(28px, 5vw, 48px)', background: 'linear-gradient(135deg, var(--clay-600), var(--clay-700))', borderRadius: 'var(--r-xl)', color: 'var(--cream-50)', textAlign: 'center' }}>
            <Eyebrow style={{ color: 'var(--cream-200)' }}>O FACCIAMO NOI</Eyebrow>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1, margin: '12px auto 16px', maxWidth: 700 }}>
              Vuoi questo itinerario adattato a te?
            </h3>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--cream-100)', maxWidth: 540, margin: '0 auto 28px' }}>
              Tempi, date, budget, persone diverse — lo cuciamo addosso entro 3 giorni. Gratis.
            </p>
            <Button variant="primary" size="lg" icon="arrow-right" onClick={() => go('bespoke')}>Richiedi su misura</Button>
          </div>
        </div>
      </section>

      {/* OPTIONAL EMAIL after download */}
      {showOptionalEmail && (
        <div className="scrim" onClick={() => setShowOptionalEmail(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <Stamp size={64} rotate={-8} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 32, margin: '16px 0 8px', lineHeight: 1.1 }}>Goditelo.</h3>
            <p style={{ color: 'var(--fg-2)', margin: '0 0 20px', lineHeight: 1.55 }}>
              Se vuoi, ti mandiamo i prossimi itinerari quando escono. Una mail al mese, mai più.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <input className="field" placeholder="la-tua@email.it" value={email} onChange={e => setEmail(e.target.value)} style={{ flex: '1 1 200px' }} />
              <Button variant="primary" onClick={() => setShowOptionalEmail(false)}>Iscriviti</Button>
            </div>
            <button onClick={() => setShowOptionalEmail(false)} style={{ background: 'transparent', border: 'none', color: 'var(--fg-3)', cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '.08em', marginTop: 16, padding: 0 }}>
              NO GRAZIE, CHIUDI
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { ITINERARIES, ITIN_VIBES, ItinerariesPage, ItineraryDetail, ItineraryCard });
