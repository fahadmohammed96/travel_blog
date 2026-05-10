/* prototipo pages — footer destinations */

const COUNTRIES = [
  { id: 'pt', name: 'Portogallo', flag: '🇵🇹', count: 4, image: 'https://images.unsplash.com/photo-1588535226203-93dd3a9e3aaf?w=900&q=80' },
  { id: 'jp', name: 'Giappone', flag: '🇯🇵', count: 3, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=80' },
  { id: 'mx', name: 'Messico', flag: '🇲🇽', count: 2, image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=900&q=80' },
  { id: 'is', name: 'Islanda', flag: '🇮🇸', count: 2, image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=900&q=80' },
  { id: 'it', name: 'Italia', flag: '🇮🇹', count: 5, image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=900&q=80' },
  { id: 'ma', name: 'Marocco', flag: '🇲🇦', count: 2, image: 'https://images.unsplash.com/photo-1539020140153-e479b8c61bf8?w=900&q=80' },
  { id: 'gr', name: 'Grecia', flag: '🇬🇷', count: 1, image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&q=80' },
  { id: 'vn', name: 'Vietnam', flag: '🇻🇳', count: 1, image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=80' },
];

const SEASONS = [
  { id: 'spring', name: 'Primavera', months: 'MAR · APR · MAG', dek: 'Risvegli, glicini, sandali ancora prudenti.', icon: 'flower', color: 'var(--forest-500)', bg: 'linear-gradient(135deg, #d8e4ce, #a8c4a3)' },
  { id: 'summer', name: 'Estate', months: 'GIU · LUG · AGO', dek: 'Mari, montagne alte, viaggi al fresco.', icon: 'sun', color: 'var(--clay-700)', bg: 'linear-gradient(135deg, #f9d7a3, #e8a45c)' },
  { id: 'autumn', name: 'Autunno', months: 'SET · OTT · NOV', dek: 'Vendemmia, foliage, stagione più bella.', icon: 'leaf', color: 'var(--clay-800)', bg: 'linear-gradient(135deg, #d99a6c, #a64f1e)' },
  { id: 'winter', name: 'Inverno', months: 'DIC · GEN · FEB', dek: 'Neve, terme, cene lunghe.', icon: 'snowflake', color: 'var(--forest-800)', bg: 'linear-gradient(135deg, #b8c9c5, #6b8a7e)' },
];

const FAQS = [
  { q: 'Come funziona un Roamed Trip?', a: 'Apriamo 4–6 viaggi all\'anno, ognuno basato su una storia già scritta nel diario. Sei il primo a sapere quando aprono se sei iscritto al dispaccio. Sono di gruppo, massimo 10 persone, sempre con una guida locale.' },
  { q: 'Cosa è incluso nel prezzo?', a: 'Alloggi (in posti curati, non hotel di catena), tutti i trasferimenti durante il viaggio, le esperienze guidate, le cene di gruppo, e una guida locale 24/7. Non sono inclusi: voli, pranzi liberi, mance.' },
  { q: 'Devo viaggiare da solo? E in coppia?', a: 'Funziona benissimo da solo — circa metà dei nostri viaggiatori parte single. Per coppie c\'è la stanza matrimoniale; chi viaggia solo ha la singola senza supplemento punitivo.' },
  { q: 'Cancellazioni e rimborsi?', a: 'Cancellazione gratuita fino a 60 giorni prima. Tra 60 e 30 giorni rimborsiamo il 50%. Sotto i 30, niente — ma se trovi un sostituto è ok.' },
  { q: 'Cosa è "Roam your way"?', a: 'È il nostro servizio di viaggi su misura. Tu ci dici dove e quando, noi torniamo entro 3 giorni con un itinerario, prezzi reali e zero pressione. Niente impegno fino a quando non confermi.' },
  { q: 'Avete viaggi per famiglie con bambini?', a: 'Sì, ne apriamo due all\'anno (di solito Puglia e Portogallo, in periodi scolastici). Per bambini sotto i 6 anni preferiamo il bespoke — è più gestibile.' },
  { q: 'Come scegliete dove andare?', a: 'Il diario viene prima. Andiamo, scriviamo, e quando una storia è abbastanza forte la apriamo come viaggio. Niente trip costruiti a tavolino.' },
  { q: 'Come si paga?', a: 'Bonifico o carta. Acconto del 30% per fissare il posto, saldo 60 giorni prima della partenza. Senza commissioni.' },
];

/* ============ Per Paese ============ */
const CountriesPage = () => {
  const { go } = useApp();
  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="container">
        <Eyebrow>IL DIARIO · ARCHIVIO PAESI</Eyebrow>
        <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 24px', maxWidth: 800 }}>
          Otto paesi, finora.
        </h1>
        <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--fg-2)', maxWidth: 560, marginBottom: 56 }}>
          Alcuni cercati, altri capitati per sbaglio. Tutti raccontati.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {COUNTRIES.map((c, i) => (
            <article key={c.id} className="card cardlink rise" style={{ animationDelay: `${i * 60}ms`, cursor: 'pointer', position: 'relative' }} onClick={() => go('diary', { country: c.name })}>
              <div className="card-img" style={{ aspectRatio: '3/4' }}><img src={c.image} alt={c.name} /></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(15,26,20,0.7))' }}></div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 22px', color: 'var(--cream-50)' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{c.flag}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, margin: 0 }}>{c.name}</h3>
                <Meta style={{ color: 'var(--cream-200)', marginTop: 4 }}>{c.count} {c.count === 1 ? 'STORIA' : 'STORIE'}</Meta>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============ Per Stagione ============ */
const SeasonsPage = () => {
  const { go } = useApp();
  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="container">
        <Eyebrow>IL DIARIO · PER STAGIONE</Eyebrow>
        <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 24px', maxWidth: 800 }}>
          Ogni posto ha la sua stagione.
        </h1>
        <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--fg-2)', maxWidth: 600, marginBottom: 56 }}>
          A volte è quella che ti aspetti. Più spesso, no.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {SEASONS.map((s, i) => (
            <article key={s.id} className="rise cardlink" style={{ animationDelay: `${i * 80}ms`, background: s.bg, borderRadius: 'var(--r-lg)', padding: '40px 36px', minHeight: 280, position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: 'transform 320ms var(--ease-out)' }}
              onClick={() => go('diary', { season: s.id })}>
              <div style={{ position: 'absolute', top: 24, right: 24, color: s.color, opacity: 0.85 }}>
                <Icon name={s.icon} size={56} />
              </div>
              <Meta style={{ color: s.color, opacity: 0.9 }}>{s.months}</Meta>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 16px', color: s.color }}>{s.name}</h2>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: s.color, opacity: 0.85, maxWidth: 320, margin: 0 }}>{s.dek}</p>
              <div style={{ position: 'absolute', bottom: 24, left: 36, fontFamily: 'var(--font-mono)', fontSize: 11, color: s.color, opacity: 0.7, letterSpacing: '0.1em' }}>VEDI LE STORIE →</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============ Gruppi ============ */
const GroupsPage = () => {
  const { go } = useApp();
  return (
    <div className="page-enter">
      <section style={{ padding: '96px 0 64px', textAlign: 'center' }}>
        <div className="narrow">
          <Eyebrow>VIAGGI DI GRUPPO PRIVATI</Eyebrow>
          <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '20px 0 24px' }}>
            Il tuo gruppo. La nostra rotta.
          </h1>
          <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--fg-2)', maxWidth: 600, margin: '0 auto 36px' }}>
            Anniversari, addii al celibato lenti, viaggi di laurea, team in cerca di un break vero. Da 6 a 20 persone.
          </p>
          <Button variant="primary" size="lg" icon="arrow-right" onClick={() => go('bespoke')}>Parla con noi</Button>
        </div>
      </section>
      <section className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 96 }}>
        {[
          { icon: 'users', n: '6–20', label: 'Persone' },
          { icon: 'calendar', n: '3–10', label: 'Giorni' },
          { icon: 'compass', n: '100%', label: 'Su misura' },
        ].map((s, i) => (
          <div key={i} className="card rise" style={{ animationDelay: `${i * 80}ms`, padding: '36px 28px', textAlign: 'center' }}>
            <div style={{ width: 52, height: 52, borderRadius: 999, background: 'var(--forest-100)', color: 'var(--forest-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}><Icon name={s.icon} size={24} /></div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 400 }}>{s.n}</div>
            <Meta>{s.label}</Meta>
          </div>
        ))}
      </section>
    </div>
  );
};

/* ============ Regala (viaggio o itinerario) ============ */
const GiftPage = ({ params = {} }) => {
  const { go } = useApp();
  const initialMode = params.mode === 'itinerary' ? 'itinerary' : 'trip';
  const [mode, setMode] = React.useState(initialMode);
  const isItin = mode === 'itinerary';
  const [amount, setAmount] = React.useState(isItin ? 150 : 500);
  React.useEffect(() => { setAmount(isItin ? 150 : 500); }, [mode]);
  const presets = isItin ? [80, 150, 300, 500] : [200, 500, 1000, 2000];
  const copy = isItin
    ? { eyebrow: 'BUONO ITINERARIO', title: 'Regala un itinerario su misura.', dek: 'Riceve un brief da compilare. Noi gli mandiamo un piano cucito addosso entro tre giorni.', stamp: 'ITINERARIO' }
    : { eyebrow: 'BUONO VIAGGIO',     title: 'Regala una storia, non un oggetto.', dek: 'Lo riceve via email il giorno che vuoi tu. Vale per qualsiasi viaggio, ora e per sempre.', stamp: 'VIAGGIO' };
  return (
    <div className="page-enter" style={{ background: 'var(--bg-sunken)', minHeight: 'calc(100vh - 72px)', padding: '64px 0 96px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 460px', gap: 80, alignItems: 'center' }}>
        <div>
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '20px 0 24px' }}>
            {copy.title}
          </h1>
          <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--fg-2)', maxWidth: 540, marginBottom: 24 }}>
            {copy.dek}
          </p>
          <div style={{ display: 'inline-flex', padding: 4, background: 'var(--bg-base)', border: '1px solid var(--border-soft)', borderRadius: 999, marginBottom: 28 }}>
            <button onClick={() => setMode('trip')} style={{ padding: '8px 18px', borderRadius: 999, border: 'none', cursor: 'pointer', background: !isItin ? 'var(--clay-600)' : 'transparent', color: !isItin ? 'white' : 'var(--fg-2)', fontSize: 13, fontWeight: 500 }}>Un viaggio</button>
            <button onClick={() => setMode('itinerary')} style={{ padding: '8px 18px', borderRadius: 999, border: 'none', cursor: 'pointer', background: isItin ? 'var(--clay-600)' : 'transparent', color: isItin ? 'white' : 'var(--fg-2)', fontSize: 13, fontWeight: 500 }}>Un itinerario</button>
          </div>
          <label className="lbl">Importo</label>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {presets.map(p => <Chip key={p} active={amount === p} onClick={() => setAmount(p)}>€{p}</Chip>)}
          </div>
          <Field type="number" min="50" value={amount} onChange={e => setAmount(+e.target.value)} placeholder="Importo personalizzato" />
          <div style={{ marginTop: 28, display: 'flex', gap: 8 }}>
            <Button variant="primary" size="lg" icon="arrow-right">Compra €{amount.toLocaleString('it-IT')}</Button>
            <Button variant="ghost" size="lg" onClick={() => go('home')}>Annulla</Button>
          </div>
        </div>
        {/* Buono visivo */}
        <div style={{ background: 'linear-gradient(135deg, var(--forest-900), var(--forest-800))', color: 'var(--cream-50)', borderRadius: 'var(--r-xl)', padding: '40px 36px', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-3)', transform: 'rotate(-1deg)' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'repeating-linear-gradient(90deg, var(--clay-600) 0 12px, transparent 12px 24px)' }}></div>
          <Stamp size={80} rotate={14} />
          <Eyebrow style={{ color: 'var(--cream-300)' }}>BUONO {copy.stamp} · OOPS I ROAMED</Eyebrow>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 80, fontWeight: 300, fontStyle: 'italic', lineHeight: 1, margin: '20px 0 8px' }}>€{amount.toLocaleString('it-IT')}</div>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--cream-200)', maxWidth: 320, margin: 0 }}>
            "Vai. Perditi. Quando torni mi racconti tutto."
          </p>
          <div style={{ marginTop: 32, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cream-300)', display: 'flex', justifyContent: 'space-between' }}>
            <span>CODICE · OR-XXXX-XXXX</span>
            <span>SENZA SCADENZA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============ La nostra storia ============ */
const StoryPage = () => {
  return (
    <div className="page-enter">
      <section style={{ padding: '96px 0 64px', textAlign: 'center' }}>
        <div className="narrow">
          <Eyebrow>CHI SIAMO</Eyebrow>
          <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '20px 0 24px' }}>
            Tutto è iniziato perché abbiamo perso un treno.
          </h1>
          <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--fg-2)', maxWidth: 640, margin: '0 auto' }}>
            Era il 2018. Sofia stava andando a Lisbona. Il treno è partito senza di lei. Quattro anni dopo è diventato un blog, poi viaggi, poi questo.
          </p>
        </div>
      </section>
      <figure style={{ margin: '0 0 64px' }}>
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1800&q=80" style={{ width: '100%', height: 540, objectFit: 'cover' }} />
      </figure>
      <article className="narrow prose" style={{ paddingBottom: 96 }}>
        <p style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--fg-1)', lineHeight: 1.5 }}>
          Il blog è nato come scusa per giustificare i viaggi alla famiglia. È diventato qualcos'altro abbastanza in fretta.
        </p>
        <p>Ogni storia che leggi qui è il diario di un viaggio vero — fatto, prima ancora che scritto. Non riceviamo prodotti in cambio di recensioni. Non promuoviamo posti in cui non siamo stati. Le foto sono tutte nostre, anche quelle venute male.</p>
        <h2>Perché viaggi di gruppo</h2>
        <p>Perché ogni volta che pubblicavamo una storia, qualcuno ci scriveva chiedendoci come ricreare quel viaggio. Abbiamo provato a rispondere a tutti. Poi abbiamo pensato: e se invece ci andassimo insieme?</p>
        <blockquote>Il primo Roamed Trip era a Porto. Eravamo in sette. Sei sono diventati amici per sempre. La settima è ancora in Portogallo.</blockquote>
        <h2>Le persone</h2>
        <p>Siamo in tre. Sofia scrive e disegna gli itinerari. Marco fa la logistica e parla con i fornitori. Aya, fotografa, viene quasi sempre con noi sui viaggi. Tutto qui.</p>
      </article>
    </div>
  );
};

/* ============ Stampa ============ */
const PressPage = () => {
  const press = [
    { src: 'Vogue Italia', date: 'NOV 2024', quote: 'Il travel blog che ha capito davvero la lentezza.' },
    { src: 'Il Post', date: 'SET 2024', quote: 'Sembra una persona reale che ti racconta un viaggio. Perché lo è.' },
    { src: 'Domus', date: 'MAR 2024', quote: 'Una nuova generazione di travel writing italiano.' },
    { src: 'Linkiesta', date: 'OTT 2023', quote: 'Pochi viaggi, scelti bene, raccontati meglio.' },
  ];
  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="container">
        <Eyebrow>RASSEGNA STAMPA</Eyebrow>
        <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 56px', maxWidth: 800 }}>
          Cosa hanno detto di noi.
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {press.map((p, i) => (
            <div key={i} className="card rise" style={{ animationDelay: `${i * 80}ms`, padding: '36px 32px' }}>
              <Meta>{p.src} · {p.date}</Meta>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 26, lineHeight: 1.4, margin: '16px 0 24px', color: 'var(--fg-1)' }}>"{p.quote}"</p>
              <Button variant="ghost" size="sm" icon="external-link">Leggi l'articolo</Button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 64, padding: 36, background: 'var(--bg-sunken)', borderRadius: 'var(--r-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          <div>
            <Eyebrow>KIT STAMPA</Eyebrow>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, margin: '8px 0 4px' }}>Logo, foto e bio in alta risoluzione.</h3>
            <p style={{ color: 'var(--fg-2)', margin: 0 }}>Per giornalisti, podcast, eventi. Risposta in 48h.</p>
          </div>
          <Button variant="primary" icon="download">Scarica kit</Button>
        </div>
      </div>
    </div>
  );
};

/* ============ Contatti ============ */
const ContactPage = () => {
  const [form, setForm] = React.useState({ name: '', email: '', topic: 'generale', message: '' });
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };
  if (sent) return (
    <div className="page-enter" style={{ padding: '128px 0', textAlign: 'center' }}>
      <div className="narrow">
        <div className="rise"><Stamp size={100} rotate={-8} /></div>
        <h1 className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 64, margin: '24px 0 16px' }}>Ricevuta.</h1>
        <p className="rise rise-2" style={{ fontSize: 18, color: 'var(--fg-2)', maxWidth: 440, margin: '0 auto' }}>Ti rispondiamo entro 48 ore. A volte prima — dipende dal fuso in cui ci troviamo.</p>
      </div>
    </div>
  );
  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <Eyebrow>CONTATTI</Eyebrow>
          <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 24px' }}>
            Scrivici. Davvero.
          </h1>
          <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--fg-2)', maxWidth: 460 }}>
            Non c'è un bot. Non c'è un ticketing system. Leggiamo tutto e rispondiamo entro due giorni.
          </p>
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: 'mail', label: 'EMAIL', value: 'ciao@oopsiroamed.com' },
              { icon: 'phone', label: 'WHATSAPP', value: '+39 333 1234567' },
              { icon: 'map-pin', label: 'STUDIO', value: 'Lisbona, Portogallo' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--forest-100)', color: 'var(--forest-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={c.icon} size={18} /></div>
                <div><Meta>{c.label}</Meta><div style={{ fontSize: 16, marginTop: 2 }}>{c.value}</div></div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={submit} style={{ background: 'var(--bg-elevated)', padding: 36, borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-2)', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Field label="Nome" placeholder="Anna Rossi" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          <Field label="Email" type="email" placeholder="anna@esempio.it" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          <div>
            <label className="lbl">Di cosa parliamo?</label>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {[['generale', 'Generale'], ['viaggio', 'Un viaggio'], ['stampa', 'Stampa'], ['lavora', 'Collaboriamo']].map(([k, l]) =>
                <Chip key={k} active={form.topic === k} onClick={() => setForm({ ...form, topic: k })}>{l}</Chip>
              )}
            </div>
          </div>
          <div>
            <label className="lbl">Messaggio</label>
            <textarea className="field" rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tutto quello che vuoi dirci…" required></textarea>
          </div>
          <Button variant="primary" type="submit" loading={loading} icon="send">Invia</Button>
        </form>
      </div>
    </div>
  );
};

/* ============ FAQ ============ */
const FaqPage = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="narrow">
        <Eyebrow>DOMANDE FREQUENTI</Eyebrow>
        <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 56px' }}>
          Probabilmente l'hai già pensato.
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rise" style={{ animationDelay: `${i * 40}ms`, borderTop: '1px solid var(--border)', padding: '4px 0' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', background: 'transparent', border: 'none', padding: '24px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, font: 'inherit', textAlign: 'left' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: 'var(--fg-1)' }}>{f.q}</span>
                  <Icon name={isOpen ? 'minus' : 'plus'} size={20} />
                </button>
                <div style={{ maxHeight: isOpen ? 400 : 0, overflow: 'hidden', transition: 'max-height 380ms var(--ease-out), padding 380ms var(--ease-out)', paddingBottom: isOpen ? 24 : 0 }}>
                  <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg-2)', margin: 0, maxWidth: 640 }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ============ Guide pratiche per viaggiatori inesperti ============ */
const PRACTICAL_GUIDES = [
  { id: 'valigia', icon: 'luggage', title: 'Come fare la valigia (e poi rifarla)', dek: 'La regola del 5-4-3-2-1 e perché alla terza piega va bene così.', read: '8 min', cat: 'PRIMA DI PARTIRE' },
  { id: 'documenti', icon: 'passport', title: 'Documenti, visti, scartoffie', dek: 'Cosa serve davvero, cosa ti dicono e basta, e dove tenere le copie.', read: '6 min', cat: 'PRIMA DI PARTIRE' },
  { id: 'budget-base', icon: 'wallet', title: 'Costruire un budget realistico', dek: 'Quanto costa un giorno medio in Europa, Asia, Sud America.', read: '10 min', cat: 'SOLDI' },
  { id: 'sim', icon: 'smartphone', title: 'Internet all\'estero senza piangere', dek: 'eSIM, SIM locali, roaming. Quando ne vale davvero la pena.', read: '5 min', cat: 'IN VIAGGIO' },
  { id: 'sicurezza', icon: 'shield', title: 'Sicurezza senza paranoia', dek: 'Cinque cose che davvero contano. Tutto il resto è rumore.', read: '7 min', cat: 'IN VIAGGIO' },
  { id: 'jetlag', icon: 'moon', title: 'Sopravvivere al jet lag', dek: 'Il trucco non è dormire. È quando esporti gli occhi al sole.', read: '4 min', cat: 'IN VIAGGIO' },
  { id: 'cibo', icon: 'utensils', title: 'Mangiare dove mangiano i locali', dek: 'Tre segnali che dicono "qui sì", due che dicono "scappa".', read: '6 min', cat: 'CULTURA' },
  { id: 'lingua', icon: 'languages', title: 'Le 12 frasi che salvano un viaggio', dek: 'Non serve parlare. Serve sapere chiedere il bagno e ringraziare.', read: '5 min', cat: 'CULTURA' },
  { id: 'foto', icon: 'camera', title: 'Foto che varrà la pena rivedere', dek: 'Meno scatti, più memoria. La regola dei tre piani.', read: '7 min', cat: 'RICORDI' },
];
const GuidePage = () => {
  const cats = [...new Set(PRACTICAL_GUIDES.map(g => g.cat))];
  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="container">
        <Eyebrow>GUIDE PRATICHE</Eyebrow>
        <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 24px', maxWidth: 800 }}>
          La prima volta non si scorda.<br/>Aiutiamo a non farla diventare un trauma.
        </h1>
        <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--fg-2)', maxWidth: 580, marginBottom: 64 }}>
          Guide brevi, oneste, scritte da chi ha sbagliato già tutto al posto tuo.
        </p>
        {cats.map(cat => (
          <section key={cat} style={{ marginBottom: 72 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24, paddingBottom: 12, borderBottom: '1px solid var(--border-soft)' }}>
              <Eyebrow>{cat}</Eyebrow>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>{PRACTICAL_GUIDES.filter(g => g.cat === cat).length} guide</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {PRACTICAL_GUIDES.filter(g => g.cat === cat).map((g, i) => (
                <article key={g.id} className="card cardlink rise" style={{ padding: 28, cursor: 'pointer', animationDelay: `${i * 50}ms` }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--bg-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--clay-700)', marginBottom: 20 }}>
                    <Icon name={g.icon} size={22} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.01em', margin: '0 0 10px' }}>{g.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.55, margin: '0 0 16px' }}>{g.dek}</p>
                  <Meta>{g.read} · LETTURA</Meta>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

/* ============ Tipi di viaggio ============ */
const TRIP_TYPES = [
  { id: 'solo', icon: 'user', title: 'Solo travel', dek: 'Il viaggio che ti insegna ad ascoltarti. Senza compromessi sull\'itinerario.', count: 12, color: 'var(--clay-600)', bg: 'linear-gradient(135deg, #f9d7a3, #e87b5a)' },
  { id: 'budget', icon: 'piggy-bank', title: 'Budget travel', dek: 'Si può viaggiare bene anche con €40 al giorno. Ti diciamo dove e come.', count: 9, color: 'var(--forest-700)', bg: 'linear-gradient(135deg, #d8e4ce, #6b8a5c)' },
  { id: 'slow', icon: 'turtle', title: 'Slow travel', dek: 'Quattro giorni in un posto, non quattro posti in un giorno.', count: 14, color: '#7a5b3a', bg: 'linear-gradient(135deg, #ecdfc8, #c9a87b)' },
  { id: 'famiglia', icon: 'baby', title: 'Famiglia con bambini', dek: 'Mete che funzionano per i grandi senza far impazzire i piccoli.', count: 7, color: '#8a4a4a', bg: 'linear-gradient(135deg, #f3d2cc, #d98e84)' },
  { id: 'coppie', icon: 'heart', title: 'Coppie', dek: 'Anniversari, lune di miele, e quel weekend che vi serve da otto mesi.', count: 11, color: '#a8456e', bg: 'linear-gradient(135deg, #f5cfd9, #c97aa2)' },
  { id: 'avventura', icon: 'mountain', title: 'Avventura', dek: 'Trekking, kayak, posti dove la connessione è un optional.', count: 8, color: '#3a6b6b', bg: 'linear-gradient(135deg, #c8dcdc, #5a9a9a)' },
  { id: 'gastro', icon: 'utensils-crossed', title: 'Gastronomico', dek: 'Mangiare dove si mangia bene davvero. La mappa non mente.', count: 10, color: '#7a4a1a', bg: 'linear-gradient(135deg, #f0d4a8, #c8893d)' },
  { id: 'workation', icon: 'laptop', title: 'Workation', dek: 'Co-working con vista. Wi-fi serio, fuso orario gestibile.', count: 6, color: '#3d4a6a', bg: 'linear-gradient(135deg, #cfd6e8, #6a7ab0)' },
];
const TripTypesPage = () => (
  <div className="page-enter" style={{ padding: '64px 0 96px' }}>
    <div className="container">
      <Eyebrow>TIPI DI VIAGGIO</Eyebrow>
      <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 24px', maxWidth: 800 }}>
        Come ti va di partire?
      </h1>
      <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--fg-2)', maxWidth: 580, marginBottom: 56 }}>
        Otto modi diversi di intendere un viaggio. Filtra storie, itinerari e guide per il tuo.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {TRIP_TYPES.map((t, i) => (
          <article key={t.id} className="rise" style={{ background: t.bg, borderRadius: 'var(--r-lg)', padding: 28, cursor: 'pointer', minHeight: 280, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white', position: 'relative', overflow: 'hidden', animationDelay: `${i * 50}ms`, transition: 'transform 240ms var(--ease-out)' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,.22)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={t.icon} size={28} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 28, lineHeight: 1.05, letterSpacing: '-0.01em', margin: '0 0 8px' }}>{t.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.5, opacity: .92, margin: '0 0 14px' }}>{t.dek}</p>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.12em', opacity: .85 }}>{t.count} STORIE →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
);

/* ============ Shop (affiliate) ============ */
const SHOP_CATS = [
  { id: 'zaini', label: 'Zaini & valigie' },
  { id: 'tech', label: 'Tech da viaggio' },
  { id: 'comfort', label: 'Comfort in volo' },
  { id: 'salute', label: 'Salute & sicurezza' },
  { id: 'foto', label: 'Fotografia' },
  { id: 'libri', label: 'Libri & guide' },
];
const SHOP = [
  { id: 1, cat: 'zaini', name: 'Zaino 35L bagaglio a mano', brand: 'Tortuga', price: '€220', stars: 5, note: 'Lo usiamo da tre anni. Nessun aereo l\'ha mai bocciato.', img: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&q=80' },
  { id: 2, cat: 'tech', name: 'Adattatore universale 100W', brand: 'Anker', price: '€42', stars: 5, note: 'Quattro USB-C, una presa AC. L\'unico che ci portiamo dietro.', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80' },
  { id: 3, cat: 'comfort', name: 'Cuscino cervicale memory', brand: 'Trtl', price: '€38', stars: 4, note: 'Sembra una sciarpa. Ma funziona. Il volo Tokyo–Roma lo conferma.', img: 'https://images.unsplash.com/photo-1558009096-a1c8c0eb4f6f?w=600&q=80' },
  { id: 4, cat: 'salute', name: 'Kit primo soccorso compatto', brand: 'MyMedic', price: '€55', stars: 4, note: 'Tutto quello che ti serve davvero, niente che non ti serva mai.', img: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600&q=80' },
  { id: 5, cat: 'foto', name: 'Mirrorless full-frame da viaggio', brand: 'Sony A7C', price: '€2.100', stars: 5, note: 'Pesa 500g. Le foto del Vietnam sono fatte con questa.', img: 'https://images.unsplash.com/photo-1606980550765-ba83b1bc1d57?w=600&q=80' },
  { id: 6, cat: 'libri', name: 'Atlante delle isole remote', brand: 'Fischer', price: '€26', stars: 5, note: 'Si legge anche da fermi. Anzi, soprattutto da fermi.', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80' },
  { id: 7, cat: 'zaini', name: 'Marsupio anti-furto', brand: 'Pacsafe', price: '€48', stars: 4, note: 'Brutto. Funziona. La RFID-block conta più dell\'estetica.', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80' },
  { id: 8, cat: 'tech', name: 'Power bank 20000mAh', brand: 'Anker', price: '€68', stars: 5, note: 'Carica un MacBook. Cinque ricariche di un iPhone. Sopravvive ai voli lunghi.', img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80' },
];
const ShopPage = () => {
  const [active, setActive] = React.useState('all');
  const items = active === 'all' ? SHOP : SHOP.filter(s => s.cat === active);
  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="container">
        <Eyebrow>LO SHOP</Eyebrow>
        <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 24px', maxWidth: 800 }}>
          La nostra borsa,<br/>messa in pubblico.
        </h1>
        <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--fg-2)', maxWidth: 580, marginBottom: 12 }}>
          Solo cose che usiamo davvero. Se compri da questi link prendiamo una piccola commissione — il prezzo per te resta lo stesso.
        </p>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '.1em', marginBottom: 40 }}>
          ↳ COMPENSATI DAI BRAND · MAI PAGATI PER MENTIRE
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          <Chip active={active === 'all'} onClick={() => setActive('all')}>Tutto</Chip>
          {SHOP_CATS.map(c => <Chip key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>{c.label}</Chip>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {items.map((p, i) => (
            <article key={p.id} className="card rise" style={{ overflow: 'hidden', animationDelay: `${i * 40}ms` }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--bg-sunken)' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <Eyebrow>{p.brand}</Eyebrow>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-700)' }}>{'★'.repeat(p.stars)}{'☆'.repeat(5 - p.stars)}</div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, lineHeight: 1.15, margin: '4px 0 12px', letterSpacing: '-0.01em' }}>{p.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--fg-2)', fontStyle: 'italic', fontFamily: 'var(--font-display)', lineHeight: 1.5, margin: '0 0 18px' }}>"{p.note}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-soft)', paddingTop: 16 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500 }}>{p.price}</span>
                  <Button variant="secondary" size="sm" icon="external-link">Vedi su Amazon</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 64, padding: 32, background: 'var(--bg-sunken)', borderRadius: 'var(--r-lg)', textAlign: 'center', maxWidth: 720, margin: '64px auto 0' }}>
          <Icon name="info" size={20} style={{ color: 'var(--fg-3)', marginBottom: 12 }} />
          <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6, margin: 0 }}>
            <strong>Trasparenza piena.</strong> Questi sono link affiliati. Se acquisti tramite noi riceviamo una piccola commissione, ma non ci paga nessuno per recensire — segnaliamo solo cose che usiamo personalmente o che abbiamo testato sul campo.
          </p>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { CountriesPage, SeasonsPage, GroupsPage, GiftPage, StoryPage, PressPage, ContactPage, FaqPage, GuidePage, TripTypesPage, ShopPage });
