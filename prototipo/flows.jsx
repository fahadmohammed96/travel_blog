/* prototipo flows — tutti i 4 flow + state globale */

const useApp = () => React.useContext(AppCtx);
const AppCtx = React.createContext(null);

/* ============ HOME ============ */
const Home = () => {
  const { go, saved, toggleSave } = useApp();
  return (
    <div className="page-enter">
      <section className="hero">
        <div className="hero-img"><img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1800&q=85" /></div>
        <div className="hero-content">
          <div className="eyebrow rise rise-1" style={{ color: 'var(--clay-300)', marginBottom: 20 }}>BENVENUTO · DAL 2021</div>
          <h1 className="h-display-it rise rise-2" style={{ maxWidth: 900 }}>
            Viaggia un po'.<br />Perditi.<br /><em style={{ fontWeight: 300 }}>Raccontacelo.</em>
          </h1>
          <p className="rise rise-3" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, marginTop: 32, maxWidth: 540, color: 'var(--cream-100)' }}>
            Un diario di viaggio che ogni tanto ti vende un biglietto aereo. Storie lunghe, viaggi in piccoli gruppi, e itinerari costruiti uno alla volta.
          </p>
          <div className="rise rise-4" style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" onClick={() => go('trips')} takeoff>Prenota un viaggio</Button>
            <button className="btn btn-lg btn-outline-light" onClick={() => go('bespoke')}>Costruiscine uno tuo</button>
            <button onClick={() => go('diary')} style={{ background: 'transparent', border: 'none', color: 'var(--cream-100)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 17, cursor: 'pointer', textDecoration: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '6px', padding: '0 12px' }}>o leggi prima il diario →</button>
          </div>
          <div className="rise rise-4" style={{ display: 'flex', gap: 24, marginTop: 36, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cream-200)', letterSpacing: '0.06em', textTransform: 'uppercase', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ color: 'var(--clay-300)', fontFamily: 'var(--font-display)', fontSize: 16, textTransform: 'none' }}>★ 4.9</span> · 67 recensioni</span>
            <span style={{ width: 4, height: 4, background: 'var(--cream-200)', borderRadius: 999, opacity: 0.5 }}></span>
            <span>247 viaggiatori dal 2021</span>
            <span style={{ width: 4, height: 4, background: 'var(--cream-200)', borderRadius: 999, opacity: 0.5 }}></span>
            <span>Max 10 per gruppo</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <Eyebrow>DAL DIARIO</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(34px, 7vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0' }}>Viaggi recenti, raccontati con calma.</h2>
            </div>
            <Button variant="ghost" onClick={() => go('diary')} icon="arrow-right">Tutte le storie</Button>
          </div>
          <div className="mob-hide" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 24 }}>
            <ArticleCard article={ARTICLES[0]} size="lg" onOpen={() => go('article', { id: 'porto-d' })} saved={saved.articles.has('porto-d')} onSave={() => toggleSave('articles', 'porto-d')} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <ArticleCard article={ARTICLES[1]} onOpen={() => go('article', { id: 'lisbon' })} saved={saved.articles.has('lisbon')} onSave={() => toggleSave('articles', 'lisbon')} />
              <ArticleCard article={ARTICLES[2]} onOpen={() => go('article', { id: 'kyoto' })} saved={saved.articles.has('kyoto')} onSave={() => toggleSave('articles', 'kyoto')} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <ArticleCard article={ARTICLES[3]} onOpen={() => go('article', { id: 'oaxaca-d' })} saved={saved.articles.has('oaxaca-d')} onSave={() => toggleSave('articles', 'oaxaca-d')} />
              <ArticleCard article={ARTICLES[4]} onOpen={() => go('article', { id: 'iceland' })} saved={saved.articles.has('iceland')} onSave={() => toggleSave('articles', 'iceland')} />
            </div>
          </div>
          {/* Mobile: flat carousel — uniform cards */}
          <div className="mob-carousel" style={{ gap: 16 }}>
            <ArticleCard article={ARTICLES[0]} onOpen={() => go('article', { id: 'porto-d' })} saved={saved.articles.has('porto-d')} onSave={() => toggleSave('articles', 'porto-d')} />
            <ArticleCard article={ARTICLES[1]} onOpen={() => go('article', { id: 'lisbon' })} saved={saved.articles.has('lisbon')} onSave={() => toggleSave('articles', 'lisbon')} />
            <ArticleCard article={ARTICLES[2]} onOpen={() => go('article', { id: 'kyoto' })} saved={saved.articles.has('kyoto')} onSave={() => toggleSave('articles', 'kyoto')} />
            <ArticleCard article={ARTICLES[3]} onOpen={() => go('article', { id: 'oaxaca-d' })} saved={saved.articles.has('oaxaca-d')} onSave={() => toggleSave('articles', 'oaxaca-d')} />
            <ArticleCard article={ARTICLES[4]} onOpen={() => go('article', { id: 'iceland' })} saved={saved.articles.has('iceland')} onSave={() => toggleSave('articles', 'iceland')} />
          </div>
        </div>
      </section>

      <section style={{ padding: '96px 0', background: 'var(--bg-sunken)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <Eyebrow>ROAMED TRIPS</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(34px, 7vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0' }}>Vieni con noi.</h2>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 20, color: 'var(--fg-2)', maxWidth: 540, marginTop: 14 }}>
                Viaggi in piccoli gruppi basati su storie già nel diario. Massimo dieci persone. Le parti difficili le abbiamo già fatte noi.
              </p>
            </div>
            <Button variant="primary" onClick={() => go('trips')}>Tutti i viaggi</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TRIPS.slice(0, 3).map(t => <TripCard key={t.id} trip={t} onOpen={() => go('trip', { id: t.id })} saved={saved.trips.has(t.id)} onSave={() => toggleSave('trips', t.id)} />)}
          </div>
        </div>
      </section>

      {/* Comparatore tre modi */}
      <section style={{ padding: '96px 0', background: 'var(--bg-default)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <Eyebrow>TRE MODI DI VIAGGIARE CON NOI</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(34px, 7vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px auto 14px', maxWidth: 720 }}>
              Quanto vuoi che decidiamo per te?
            </h2>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 20, color: 'var(--fg-2)', maxWidth: 540, margin: '0 auto' }}>
              Niente è giusto o sbagliato. Dipende dal viaggio che hai in testa.
            </p>
          </div>
          <ComparatorCard onPickRoamed={() => go('trips')} onPickBespoke={() => go('bespoke')} onPickItinerary={() => go('itineraries')} />
        </div>
      </section>

      {/* Itinerari gratuiti — lead magnet */}
      <section style={{ padding: '96px 0', background: 'var(--bg-sunken)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 48 }}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow>ITINERARI GRATUITI · {window.ITINERARIES?.length || 15} DISPONIBILI</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 14px' }}>
                Parti da soli, ma non da zero.
              </h2>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(18px, 2.2vw, 22px)', color: 'var(--fg-2)', margin: 0 }}>
                Quindici viaggi che abbiamo fatto e scritto bene. PDF gratis, senza email obbligatoria.
              </p>
            </div>
            <Button variant="ghost" icon="arrow-right" onClick={() => go('itineraries')}>Vedi tutti</Button>
          </div>
          <div className="itin-grid">
            {(window.ITINERARIES || []).slice(0, 3).map((it, i) => (
              <ItineraryCard key={it.id} it={it} i={i} onOpen={() => go('itinerary', { id: it.id })} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--forest-900)', color: 'var(--cream-50)', padding: '128px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 60, right: 80, opacity: 0.5 }}><Stamp size={140} rotate={12} /></div>
        <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
          <Eyebrow>ROAM YOUR WAY</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(40px, 8vw, 64px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '20px 0 28px' }}>
            Oppure costruisci qualcosa che nessun altro ha.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--cream-200)', maxWidth: 620, margin: '0 auto 36px' }}>
            Dicci dove vuoi andare e più o meno quando. Entro tre giorni ti rispondiamo con un itinerario, prezzi reali, e zero pressione.
          </p>
          <Button variant="accent" size="lg" onClick={() => go('bespoke')} icon="arrow-right">Inizia una richiesta</Button>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
};

/* ============ NEWSLETTER ============ */
const NewsletterSection = () => {
  const { subscribe, isSubscribed } = useApp();
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { setErr('Serve un\'email valida.'); return; }
    setErr(''); setLoading(true);
    setTimeout(() => { setLoading(false); subscribe(email); setEmail(''); }, 800);
  };
  return (
    <section style={{ padding: '96px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <Eyebrow>IL DISPACCIO · OGNI MERCOLEDÌ</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(34px, 7vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 18px' }}>Una mail a settimana. Niente offerte, niente urgenza.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--fg-2)', maxWidth: 480, marginBottom: 24 }}>
            Una nuova storia dal diario, un viaggio appena aperto, e l'unica panetteria per cui vale la pena fare una deviazione. Tutto qui. — la fondatrice
          </p>
          <div style={{ display: 'flex', gap: 24, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <div><strong style={{ color: 'var(--fg-1)', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, display: 'block' }}>600+</strong> iscritti</div>
            <div><strong style={{ color: 'var(--fg-1)', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, display: 'block' }}>62%</strong> tasso di apertura</div>
            <div><strong style={{ color: 'var(--fg-1)', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, display: 'block' }}>0</strong> partner pubblicitari</div>
          </div>
          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'flex-start' }}>
            <NewsletterPreview />
          </div>
        </div>
        {isSubscribed ? (
          <div className="rise" style={{ background: 'var(--forest-100)', padding: 28, borderRadius: 'var(--r-lg)', display: 'flex', alignItems: 'center', gap: 16, color: 'var(--forest-800)' }}>
            <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--forest-700)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={20} /></div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>Ci sei.</div>
              <div style={{ fontSize: 14, color: 'var(--fg-2)', marginTop: 4 }}>Ti abbiamo appena scritto. Controlla anche lo spam, succede.</div>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <Field placeholder="la-tua@email.it" value={email} onChange={e => { setEmail(e.target.value); if (err) setErr(''); }} error={err} />
              <Button variant="primary" type="submit" loading={loading}>Iscrivimi</Button>
            </div>
            <Meta style={{ marginTop: 6 }}>NESSUNO SPAM · DISCRIVITI IN UN CLICK</Meta>
          </form>
        )}
      </div>
    </section>
  );
};

/* ============ TRIPS LIST ============ */
const TripsList = () => {
  const { go, saved, toggleSave } = useApp();
  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="container">
        <Eyebrow>ROAMED TRIPS</Eyebrow>
        <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 24px', maxWidth: 800 }}>
          Viaggi in piccoli gruppi, basati su storie già nel diario.
        </h1>
        <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--fg-2)', maxWidth: 560, marginBottom: 48 }}>
          Massimo dieci persone. Le parti difficili le abbiamo già fatte noi.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {TRIPS.map((t, i) => (
            <div key={t.id} className="rise" style={{ animationDelay: `${i * 80}ms` }}>
              <TripCard trip={t} onOpen={() => go('trip', { id: t.id })} saved={saved.trips.has(t.id)} onSave={() => toggleSave('trips', t.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============ TRIP DETAIL ============ */
const TripDetail = ({ params }) => {
  const { go, saved, toggleSave } = useApp();
  const trip = TRIPS.find(t => t.id === params.id) || TRIPS[0];
  const [day, setDay] = React.useState(1);
  const [mapMode, setMapMode] = React.useState('hand');
  const isPorto = trip.id === 'porto';
  const itin = isPorto ? ITINERARY_PORTO : ITINERARY_PORTO; // demo: porto only
  const current = itin.find(d => d.day === day);
  const polaroids = TRIP_POLAROIDS[trip.id] || TRIP_POLAROIDS.porto;
  return (
    <div className="page-enter">
      <section style={{ position: 'relative', height: 520, overflow: 'hidden' }}>
        <img src={trip.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,26,20,0) 50%, rgba(15,26,20,.6) 100%)' }}></div>
        <button onClick={() => go('trips')} style={{ position: 'absolute', top: 24, left: 24, background: 'rgba(255,255,255,.18)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.25)', color: 'var(--cream-50)', padding: '8px 14px', borderRadius: 999, font: 'inherit', fontSize: 13, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <Icon name="arrow-left" size={14} /> Tutti i viaggi
        </button>
        <button className={`save-btn ${saved.trips.has(trip.id) ? 'saved' : ''}`} style={{ position: 'absolute', top: 24, right: 24 }} onClick={() => toggleSave('trips', trip.id)}><Icon name="heart" size={20} /></button>
        <div style={{ position: 'absolute', bottom: 48, left: 0, right: 0, color: 'var(--cream-50)' }}>
          <div className="container">
            <Eyebrow>{trip.kind} · {trip.country} · {trip.nights} NOTTI</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0' }}>{trip.title}</h1>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 0' }}>
        <div className="container mob-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 64, alignItems: 'flex-start' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 26, color: 'var(--fg-1)', lineHeight: 1.4, marginTop: 0 }}>{trip.dek}</p>
            <hr className="divider" />

            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 4.5vw, 36px)', margin: '0 0 8px' }}>La rotta</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <p style={{ color: 'var(--fg-3)', fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase', margin: 0 }}>
                {mapMode === 'hand' ? 'Disegnata a mano. Ogni linea è una giornata.' : 'Mappa reale. Ingrandisci, esplora.'}
              </p>
              <div style={{ display: 'inline-flex', background: 'var(--bg-sunken)', borderRadius: 999, padding: 3, gap: 2 }}>
                {[['hand', 'Disegnata'], ['real', 'Reale']].map(([k, l]) => (
                  <button key={k} onClick={() => setMapMode(k)} style={{
                    border: 'none', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em',
                    padding: '7px 14px', borderRadius: 999,
                    background: mapMode === k ? 'var(--cream-50)' : 'transparent',
                    color: mapMode === k ? 'var(--fg-1)' : 'var(--fg-3)',
                    boxShadow: mapMode === k ? 'var(--shadow-1)' : 'none',
                    transition: 'all 200ms var(--ease-out)',
                  }}>{l.toUpperCase()}</button>
                ))}
              </div>
            </div>
            <div className="page-enter" key={mapMode}>
              {mapMode === 'hand' ? <TripMap tripId={trip.id} /> : <RealMap tripId={trip.id} height={420} />}
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 4.5vw, 36px)', margin: '56px 0 28px' }}>L'itinerario, giorno per giorno</h2>
            <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
              {itin.map(d => (
                <Chip key={d.day} active={day === d.day} onClick={() => setDay(d.day)}>Giorno {d.day}</Chip>
              ))}
            </div>
            <div className="page-enter" key={day} style={{ background: 'var(--bg-elevated)', borderRadius: 'var(--r-lg)', padding: 28 }}>
              <Eyebrow>GIORNO {String(current.day).padStart(2, '0')} · {current.subtitle.toUpperCase()}</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400, margin: '8px 0 24px' }}>{current.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {current.items.map((it, i) => (
                  <div key={i} className="rise" style={{ animationDelay: `${i * 80}ms`, display: 'grid', gridTemplateColumns: '70px 32px 1fr', gap: 16, padding: '18px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)', paddingTop: 4 }}>{it.time}</div>
                    <div style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--forest-100)', color: 'var(--forest-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={it.icon} size={16} /></div>
                    <div style={{ fontSize: 15, lineHeight: 1.5, color: 'var(--fg-1)', paddingTop: 6 }}>{it.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cosa è incluso / escluso */}
            <div style={{ marginTop: 72 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 4.5vw, 36px)', margin: '0 0 20px' }}>Cosa c'è dentro il prezzo (e cosa no).</h2>
              <IncludedExcluded tripId={trip.id} />
            </div>

            {/* La tua guida */}
            {trip.guideId && (
              <div style={{ marginTop: 72 }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 4.5vw, 36px)', margin: '0 0 20px' }}>Chi vi accompagna.</h2>
                <GuideCard guideId={trip.guideId} />
              </div>
            )}

            {/* Polaroid wall — foto dei viaggiatori */}
            <div style={{ marginTop: 72 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 4.5vw, 36px)', margin: '0 0 6px' }}>Chi c'è già stato.</h2>
              <p style={{ color: 'var(--fg-3)', fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 20px' }}>
                {polaroids.length} foto dai viaggiatori delle edizioni precedenti
              </p>
              <div style={{ background: 'var(--cream-100)', borderRadius: 'var(--r-lg)', padding: '32px 24px', backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(15,26,20,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                <PolaroidWall photos={polaroids} />
              </div>
            </div>

            {/* Testimonianze */}
            <TestimonialSection tripId={trip.id} title="Cosa dicono i viaggiatori" subtitle={`Ed. ${trip.edition || 1} · feedback verificati`} rating={trip.rating} count={trip.reviewCount} />

            {/* FAQ pre-vendita */}
            <PreBuyFAQ />
          </div>

          <aside className="trip-aside" style={{ position: 'sticky', top: 100, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card" style={{ padding: 28 }}>
              {trip.status && <Badge kind={trip.status.kind}>{trip.status.label}</Badge>}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 16 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5.5vw, 44px)', lineHeight: 1 }}>€{trip.price.toLocaleString('it-IT')}</div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em' }}>/ persona</span>
              </div>
              <Meta style={{ marginTop: 4 }}>{trip.dates} · {trip.nights} NOTTI</Meta>

              {!trip.soldOut && (
                <div style={{ marginTop: 16, padding: '10px 12px', background: trip.spots <= 4 ? 'var(--clay-100)' : 'var(--bg-sunken)', borderRadius: 'var(--r-sm)' }}>
                  <SpotsRemaining spots={trip.spots} totalSpots={trip.totalSpots || 10} />
                </div>
              )}

              {trip.rating && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)' }}>
                  <span style={{ color: 'var(--clay-700)', fontFamily: 'var(--font-display)', fontSize: 16 }}>★ {trip.rating.toFixed(1)}</span>
                  <span style={{ letterSpacing: '0.04em' }}>· {trip.reviewCount} recensioni · ed. {trip.edition}</span>
                </div>
              )}

              <hr className="divider" />
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'var(--fg-2)' }}>
                <li style={{ display: 'flex', gap: 10 }}><Icon name="users" size={16} /> Massimo 10 viaggiatori</li>
                <li style={{ display: 'flex', gap: 10 }}><Icon name="bed" size={16} /> {trip.nights} notti in alloggi piccoli e curati</li>
                <li style={{ display: 'flex', gap: 10 }}><Icon name="utensils-crossed" size={16} /> Cene di gruppo incluse</li>
                <li style={{ display: 'flex', gap: 10 }}><Icon name="user-round" size={16} /> Una guida locale, sempre</li>
              </ul>
              <hr className="divider" />
              {trip.soldOut ? (
                <>
                  <Button variant="secondary" block disabled>Tutto esaurito</Button>
                  {trip.nextEdition && (
                    <div style={{ marginTop: 10, padding: '10px 12px', background: 'var(--bg-sunken)', borderRadius: 'var(--r-sm)', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)', letterSpacing: '0.04em', textAlign: 'center' }}>
                      Prossima edizione: <strong style={{ color: 'var(--fg-1)' }}>{trip.nextEdition}</strong>
                    </div>
                  )}
                  <button className="btn btn-ghost btn-block" style={{ marginTop: 10 }} onClick={() => go('signup')}>
                    <Icon name="bell" size={14} /> Avvisami quando riapre
                  </button>
                </>
              ) : (
                <Button variant="primary" block size="lg" icon="arrow-right" onClick={() => go('book', { id: trip.id, step: 1 })}>Prenota questo viaggio</Button>
              )}
              <button className="btn btn-ghost btn-block" style={{ marginTop: 8 }} onClick={() => toggleSave('trips', trip.id)}>
                <Icon name="heart" size={16} /> {saved.trips.has(trip.id) ? 'Salvato' : 'Salva per dopo'}
              </button>
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px dashed var(--border)', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.04em', textAlign: 'center' }}>
                ACCONTO 30% · SALDO 60GG PRIMA<br />Cancellazione gratuita ≥60 giorni
              </div>
            </div>

            <BookingTrustBadges />

            {trip.guideId && <GuideCard guideId={trip.guideId} compact />}
          </aside>
        </div>
      </section>

      <StickyMobileCTA trip={trip} onBook={() => go('book', { id: trip.id, step: 1 })} onSave={() => toggleSave('trips', trip.id)} isSaved={saved.trips.has(trip.id)} />
    </div>
  );
};

/* ============ BOOKING (3-step) ============ */
const Booking = ({ params }) => {
  const { go, user, addBooking, setUser } = useApp();
  const trip = TRIPS.find(t => t.id === params.id) || TRIPS[0];
  const [step, setStep] = React.useState(1);
  const [travelers, setTravelers] = React.useState(2);
  const [details, setDetails] = React.useState({ name: user?.name || '', email: user?.email || '', city: '', notes: '' });
  const [card, setCard] = React.useState({ num: '', exp: '', cvc: '', name: '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [paymentError, setPaymentError] = React.useState(false);
  const [emailOpen, setEmailOpen] = React.useState(false);
  const [confirmedBooking, setConfirmedBooking] = React.useState(null);

  const subtotal = trip.price * travelers;
  const earlyBird = travelers >= 2 ? 120 : 0;
  const total = subtotal - earlyBird;

  const validateStep1 = () => {
    const e = {};
    if (!details.name.trim()) e.name = 'Come ti chiami?';
    if (!details.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email non valida.';
    if (!details.city.trim()) e.city = 'Da dove parti?';
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const validateStep2 = () => {
    const e = {};
    if (card.num.replace(/\s/g, '').length < 12) e.num = 'Numero carta troppo corto.';
    if (!card.exp.match(/^\d{2}\s?\/\s?\d{2}$/)) e.exp = 'Formato MM/AA.';
    if (card.cvc.length < 3) e.cvc = 'CVC troppo corto.';
    if (!card.name.trim()) e.cardname = 'Nome sulla carta?';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePay = () => {
    if (!validateStep2()) return;
    setLoading(true); setPaymentError(false);
    setTimeout(() => {
      // simulate fail on cvc 000
      if (card.cvc === '000') { setLoading(false); setPaymentError(true); return; }
      setLoading(false);
      if (!user) setUser({ name: details.name, email: details.email, firstName: details.name.split(' ')[0], initials: details.name.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase() });
      const b = { tripId: trip.id, travelers, total, date: new Date().toISOString() };
      addBooking(b);
      setConfirmedBooking(b);
      setStep(3);
      setTimeout(() => setEmailOpen(true), 800);
    }, 1100);
  };

  if (step === 3) {
    return (
      <div className="page-enter" style={{ padding: '128px 0', textAlign: 'center', position: 'relative' }}>
        <div className="rise" style={{ position: 'absolute', top: 80, left: '50%', marginLeft: -200 }}><Stamp size={140} rotate={-12} /></div>
        <div className="narrow" style={{ position: 'relative' }}>
          <div className="rise rise-1"><Eyebrow>PRENOTAZIONE CONFERMATA</Eyebrow></div>
          <h1 className="rise rise-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 80, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '20px 0 24px' }}>Sei dei nostri.</h1>
          <p className="rise rise-3" style={{ fontSize: 18, color: 'var(--fg-2)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.6 }}>
            Ti abbiamo appena mandato la conferma, l'itinerario, e una lista di cose da mettere in valigia che nessuno legge mai. Non vediamo l'ora.
          </p>
          <div className="rise rise-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => setEmailOpen(true)} icon="mail">Vedi l'email di conferma</Button>
            <Button variant="secondary" onClick={() => go('account')}>I miei viaggi</Button>
            <Button variant="ghost" onClick={() => go('home')}>Torna alla home</Button>
          </div>
        </div>
        <EmailModal open={emailOpen} onClose={() => setEmailOpen(false)} booking={confirmedBooking || { travelers, total }} trip={trip} />
      </div>
    );
  }

  return (
    <div className="page-enter" style={{ padding: '48px 0 128px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 64 }}>
        <main>
          <button className="btn btn-ghost btn-sm" onClick={() => go('trip', { id: trip.id })} style={{ paddingLeft: 0, marginBottom: 16 }}>
            <Icon name="arrow-left" size={14} /> Torna al viaggio
          </button>
          <Eyebrow>ROAMED TRIP · PRENOTAZIONE</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 6vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 32px' }}>{trip.title}</h1>

          <div className="stepper" style={{ marginBottom: 36 }}>
            <span className={`s ${step >= 2 ? 'done' : 'cur'}`}>{step >= 2 ? '✓' : '01'} DETTAGLI</span><span>—</span>
            <span className={`s ${step === 2 ? 'cur' : ''}`}>02 PAGAMENTO</span><span>—</span>
            <span className="s">03 CONFERMA</span>
          </div>

          {step === 1 && (
            <div className="page-enter" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Field label="Nome e cognome" placeholder="Anna Rossi" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} error={errors.name} />
              <Field label="Email" type="email" placeholder="anna@esempio.it" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} error={errors.email} />
              <div>
                <label className="lbl">Viaggiatori</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => setTravelers(Math.max(1, travelers - 1))}>−</button>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, minWidth: 30, textAlign: 'center' }}>{travelers}</span>
                  <button className="btn btn-secondary btn-sm" onClick={() => setTravelers(Math.min(8, travelers + 1))}>+</button>
                  {travelers >= 2 && <Meta style={{ marginLeft: 12, color: 'var(--success)' }}>SCONTO EARLY-BIRD APPLICATO</Meta>}
                </div>
              </div>
              <Field label="Città di partenza" placeholder="Milano (MXP)" value={details.city} onChange={e => setDetails({ ...details, city: e.target.value })} error={errors.city} />
              <div style={{ gridColumn: 'span 2' }}>
                <label className="lbl">Qualcosa che dobbiamo sapere?</label>
                <textarea className="field" rows="3" value={details.notes} onChange={e => setDetails({ ...details, notes: e.target.value })} placeholder="Diete, accessibilità, il fatto che odi i bus…"></textarea>
              </div>
              <div style={{ gridColumn: 'span 2', marginTop: 16 }}>
                <Button variant="primary" size="lg" onClick={() => { if (validateStep1()) setStep(2); }} icon="arrow-right">Vai al pagamento</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="page-enter">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, padding: '10px 14px', background: 'var(--forest-100)', borderRadius: 'var(--r-md)', color: 'var(--forest-700)', fontSize: 13 }}>
                <Icon name="lock" size={16} /> <span>Pagamento crittografato · Stripe · Nessuna carta salvata sui nostri server</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {paymentError && (
                <div style={{ gridColumn: 'span 2', background: 'rgba(181,70,46,.08)', border: '1px solid var(--danger)', color: 'var(--danger)', padding: '12px 16px', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                  <Icon name="alert-circle" size={18} /> Carta rifiutata. Prova un'altra. (suggerimento: CVC 000 = errore)
                </div>
              )}
              <div style={{ gridColumn: 'span 2' }}>
                <Field label="Numero carta" placeholder="4242 4242 4242 4242" value={card.num} onChange={e => setCard({ ...card, num: e.target.value })} error={errors.num} />
              </div>
              <Field label="Scadenza" placeholder="09 / 28" value={card.exp} onChange={e => setCard({ ...card, exp: e.target.value })} error={errors.exp} />
              <Field label="CVC" placeholder="123" value={card.cvc} onChange={e => setCard({ ...card, cvc: e.target.value })} error={errors.cvc} />
              <div style={{ gridColumn: 'span 2' }}>
                <Field label="Nome sulla carta" placeholder="Anna Rossi" value={card.name} onChange={e => setCard({ ...card, name: e.target.value })} error={errors.cardname} />
              </div>
              <div style={{ gridColumn: 'span 2', display: 'flex', gap: 8, marginTop: 16 }}>
                <Button variant="secondary" onClick={() => setStep(1)}>Indietro</Button>
                <Button variant="primary" size="lg" onClick={handlePay} loading={loading} icon="lock">Paga acconto €{Math.round(total * 0.3).toLocaleString('it-IT')}</Button>
              </div>
              <div style={{ gridColumn: 'span 2', marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em' }}>
                Oggi paghi solo il 30%. Saldo automatico 60 giorni prima della partenza. Cancella entro 60gg → rimborso 100%.
              </div>
              </div>
              <div style={{ marginTop: 28 }}>
                <BookingTrustBadges />
              </div>
            </div>
          )}
        </main>

        <aside>
          <div className="card" style={{ overflow: 'hidden', position: 'sticky', top: 100 }}>
            <img src={trip.image} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            <div style={{ padding: 24 }}>
              <Eyebrow>IL TUO ORDINE</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 400, margin: '8px 0 12px' }}>{trip.title}</h3>
              <Meta>{trip.dates} · {trip.nights} NOTTI</Meta>
              {trip.spots > 0 && (
                <div style={{ marginTop: 12, padding: '8px 12px', background: trip.spots <= 4 ? 'var(--clay-100)' : 'var(--bg-sunken)', borderRadius: 'var(--r-sm)' }}>
                  <SpotsRemaining spots={trip.spots} totalSpots={trip.totalSpots || 10} compact />
                </div>
              )}
              <hr className="divider" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--fg-2)' }}>€{trip.price.toLocaleString('it-IT')} × {travelers}</span><span>€{subtotal.toLocaleString('it-IT')}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--fg-2)' }}>Commissioni</span><span style={{ color: 'var(--success)' }}>€0</span></div>
                {earlyBird > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--success)' }}><span>Sconto early-bird</span><span>−€{earlyBird}</span></div>}
              </div>
              <hr className="divider" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 600 }}>Totale</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 32 }}>€{total.toLocaleString('it-IT')}</span>
              </div>
              <div style={{ marginTop: 8, padding: '10px 12px', background: 'var(--bg-sunken)', borderRadius: 'var(--r-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-2)', letterSpacing: '0.04em' }}>
                <span>OGGI PAGHI</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--fg-1)' }}>€{Math.round(total * 0.3).toLocaleString('it-IT')}</span>
              </div>
            </div>
          </div>
          {trip.guideId && <div style={{ marginTop: 16 }}><GuideCard guideId={trip.guideId} compact /></div>}
        </aside>
      </div>
    </div>
  );
};

/* ============ DIARY LIST ============ */
const REGION_BY_EYEBROW = {
  'DIARIO · PORTOGALLO': { region: 'europa', country: 'Portogallo' },
  'DIARIO · ITALIA': { region: 'europa', country: 'Italia' },
  'DIARIO · ISLANDA': { region: 'europa', country: 'Islanda' },
  'DIARIO · GIAPPONE': { region: 'asia', country: 'Giappone' },
  'DIARIO · VIETNAM': { region: 'asia', country: 'Vietnam' },
  'DIARIO · THAILANDIA': { region: 'asia', country: 'Thailandia' },
  'DIARIO · MESSICO': { region: 'americhe', country: 'Messico' },
  'DIARIO · PERÙ': { region: 'americhe', country: 'Perù' },
  'DIARIO · CILE': { region: 'americhe', country: 'Cile' },
  'DIARIO · ARGENTINA': { region: 'americhe', country: 'Argentina' },
  'DIARIO · MAROCCO': { region: 'africa', country: 'Marocco' },
  'DIARIO · KENYA': { region: 'africa', country: 'Kenya' },
  'DIARIO · NAMIBIA': { region: 'africa', country: 'Namibia' },
};
const REGIONS = [
  { id: 'europa',    name: 'Europa',    icon: 'castle',     dek: 'Vicina, vecchia, infinita' },
  { id: 'asia',      name: 'Asia',      icon: 'torii-gate', dek: 'Lontano e vicinissimo allo stesso tempo' },
  { id: 'americhe',  name: 'Americhe',  icon: 'mountain',   dek: 'Dal Messico alla Patagonia' },
  { id: 'africa',    name: 'Africa',    icon: 'sun',        dek: 'Luce, scala, silenzio' },
  { id: 'oceania',   name: 'Oceania',   icon: 'waves',      dek: 'In fondo al mondo' },
];
const _regionOf = (a) => REGION_BY_EYEBROW[a.eyebrow]?.region || 'europa';
const _countryOf = (a) => REGION_BY_EYEBROW[a.eyebrow]?.country || a.eyebrow.replace('DIARIO · ', '');
const SEASONS_LABELS = { spring: 'Primavera', summer: 'Estate', autumn: 'Autunno', winter: 'Inverno' };

const DiaryList = ({ params = {} }) => {
  const { go, saved, toggleSave } = useApp();
  const [tab, setTab] = React.useState(params.tab === 'world' ? 'world' : 'recent');
  const [countryFilter, setCountryFilter] = React.useState(params.country || null);
  const [regionFilter, setRegionFilter] = React.useState(params.region || null);
  const [seasonFilter, setSeasonFilter] = React.useState(params.season || null);
  React.useEffect(() => { if (params.tab) setTab(params.tab === 'world' ? 'world' : 'recent'); }, [params.tab]);
  React.useEffect(() => { setCountryFilter(params.country || null); setRegionFilter(params.region || null); setSeasonFilter(params.season || null); }, [params.country, params.region, params.season]);
  const SEASON_MONTHS = { spring: ['MAR','APR','MAG'], summer: ['GIU','LUG','AGO'], autumn: ['SET','OTT','NOV'], winter: ['DIC','GEN','FEB'] };
  let filtered = ARTICLES;
  if (countryFilter) filtered = filtered.filter(a => _countryOf(a).toLowerCase() === countryFilter.toLowerCase());
  if (regionFilter) filtered = filtered.filter(a => _regionOf(a) === regionFilter);
  if (seasonFilter) {
    const months = SEASON_MONTHS[seasonFilter] || [];
    filtered = filtered.filter(a => months.some(m => (a.date || '').toUpperCase().includes(m)));
  }
  const activeFilter = countryFilter || regionFilter || (seasonFilter && SEASONS_LABELS[seasonFilter]);
  return (
    <div className="page-enter" style={{ padding: '64px 0 96px' }}>
      <div className="container">
        <Eyebrow>IL DIARIO</Eyebrow>
        <h1 className="rise" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '12px 0 24px', maxWidth: 800 }}>
          Storie raccolte un viaggio alla volta.
        </h1>
        <p className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--fg-2)', maxWidth: 560, marginBottom: 32 }}>
          Otto paesi finora. Alcuni per caso.
        </p>
        <div style={{ display: 'inline-flex', padding: 4, background: 'var(--bg-sunken)', border: '1px solid var(--border-soft)', borderRadius: 999, marginBottom: 48 }}>
          <button onClick={() => setTab('recent')} style={{ padding: '10px 22px', borderRadius: 999, border: 'none', cursor: 'pointer', background: tab === 'recent' ? 'var(--clay-600)' : 'transparent', color: tab === 'recent' ? 'white' : 'var(--fg-2)', fontSize: 13, fontWeight: 500 }}>Viaggi recenti</button>
          <button onClick={() => setTab('world')} style={{ padding: '10px 22px', borderRadius: 999, border: 'none', cursor: 'pointer', background: tab === 'world' ? 'var(--clay-600)' : 'transparent', color: tab === 'world' ? 'white' : 'var(--fg-2)', fontSize: 13, fontWeight: 500 }}>Mete per il mondo</button>
        </div>
        {activeFilter && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px 8px 16px', background: 'var(--clay-100)', border: '1px solid var(--clay-300)', borderRadius: 999, marginBottom: 24, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--clay-700)', textTransform: 'uppercase' }}>
            FILTRO: <strong style={{ fontFamily: 'var(--font-display)', fontSize: 14, textTransform: 'none', letterSpacing: 0, color: 'var(--fg-1)' }}>{activeFilter}</strong>
            <button onClick={() => { setCountryFilter(null); setRegionFilter(null); setSeasonFilter(null); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--clay-700)', fontSize: 16, marginLeft: 4, lineHeight: 1 }} aria-label="Rimuovi filtro">×</button>
            <span style={{ marginLeft: 6, color: 'var(--fg-3)' }}>· {filtered.length} {filtered.length === 1 ? 'STORIA' : 'STORIE'}</span>
          </div>
        )}
        {tab === 'recent' && (
          filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {filtered.map((a, i) => (
                <div key={a.id} className="rise" style={{ animationDelay: `${i * 60}ms` }}>
                  <ArticleCard article={a} onOpen={() => go('article', { id: a.id })} saved={saved.articles.has(a.id)} onSave={() => toggleSave('articles', a.id)} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: 60, textAlign: 'center', background: 'var(--bg-sunken)', borderRadius: 'var(--r-lg)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--fg-2)', margin: '0 0 16px' }}>Nessuna storia per questo filtro — ancora.</p>
              <button onClick={() => { setCountryFilter(null); setRegionFilter(null); setSeasonFilter(null); }} className="btn btn-secondary">Mostra tutte le storie</button>
            </div>
          )
        )}
        {tab === 'world' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {REGIONS.map(r => {
              const arts = ARTICLES.filter(a => _regionOf(a) === r.id);
              if (arts.length === 0) return null;
              const countries = [...new Set(arts.map(a => _countryOf(a)))];
              return (
                <section key={r.id}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24, paddingBottom: 14, borderBottom: '1px solid var(--border-soft)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Icon name={r.icon} size={22} style={{ color: 'var(--clay-700)' }} />
                      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 4.5vw, 36px)', letterSpacing: '-0.015em', margin: 0 }}>{r.name}</h2>
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--fg-2)' }}>{r.dek}</span>
                    <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '.1em' }}>{arts.length} STORIE · {countries.length} PAESI</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                    {countries.map(c => <span key={c} style={{ fontSize: 12, padding: '6px 12px', borderRadius: 999, background: 'var(--bg-sunken)', color: 'var(--fg-2)', fontFamily: 'var(--font-mono)', letterSpacing: '.04em' }}>{c}</span>)}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                    {arts.map((a, i) => (
                      <div key={a.id} className="rise" style={{ animationDelay: `${i * 50}ms` }}>
                        <ArticleCard article={a} onOpen={() => go('article', { id: a.id })} saved={saved.articles.has(a.id)} onSave={() => toggleSave('articles', a.id)} />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

/* ============ ARTICLE ============ */
const Article = ({ params }) => {
  const { go, saved, toggleSave } = useApp();
  const a = ARTICLES.find(x => x.id === params.id) || ARTICLES[0];
  return (
    <div className="page-enter">
      <section style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div className="narrow" style={{ textAlign: 'center' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => go('diary')} style={{ marginBottom: 12 }}><Icon name="arrow-left" size={14} /> Tutte le storie</button>
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <h1 className="rise rise-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '20px 0 24px' }}>{a.title}</h1>
          {a.dek && <p className="rise rise-2" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, color: 'var(--fg-2)', maxWidth: 600, margin: '0 auto 32px' }}>{a.dek}</p>}
          <Meta>{a.meta}</Meta>
          <div style={{ marginTop: 24 }}>
            <button className="btn btn-secondary" onClick={() => toggleSave('articles', a.id)}>
              <Icon name="heart" size={16} /> {saved.articles.has(a.id) ? 'Salvato' : 'Salva per dopo'}
            </button>
          </div>
        </div>
      </section>
      <figure style={{ margin: '0 0 64px' }}>
        <img src={a.image} style={{ width: '100%', height: 600, objectFit: 'cover' }} />
      </figure>
      <article className="narrow prose" style={{ position: 'relative' }}>
        <p style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--fg-1)', lineHeight: 1.5 }}>
          Siamo atterrati alle sei del mattino e abbiamo subito sbagliato il bus dall'aeroporto. Due volte. Quando abbiamo trovato l'appartamento, la città si era svegliata — lenta, piastrellata, con l'odore di sardine grigliate da qualche parte due strade più in là.
        </p>
        <div style={{ position: 'relative' }}>
          <MarginNote side="right" rotate={-3} top={0} color="var(--clay-700)">
            il giro lungo paga<br />sempre. ogni volta.
          </MarginNote>
          <p>Porto è costruita su una collina che fa finta di essere tante colline più piccole. Ogni strada va in salita. Ogni strada, in qualche modo, va anche in discesa. Abbiamo imparato a fare il giro lungo, perché il giro lungo passava dal fiume.</p>
        </div>
        <h2>Cosa abbiamo mangiato, cosa ci siamo persi</h2>
        <div style={{ position: 'relative' }}>
          <MarginNote side="left" rotate={4} top={20} color="var(--forest-700)">
            la francesinha è<br />vera. ed è <em>tanto</em>.
          </MarginNote>
          <p>La francesinha esiste davvero, le leggende sono accurate, e noi non siamo costruiti per affrontarla. Al secondo giorno siamo passati alle bifanas — panini di maiale grandi come un libro tascabile — e non ci siamo più ripresi.</p>
        </div>
        <blockquote>Il posto migliore in cui abbiamo mangiato era una tasca di cui non abbiamo mai imparato il nome. Due tavoli. Una nonna. €11 per tutto.</blockquote>
        <aside style={{ margin: '40px -20px', padding: '28px 32px', background: 'var(--cream-100)', border: '1px solid var(--clay-300)', borderRadius: 'var(--r-md)', display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 24, alignItems: 'center', position: 'relative' }}>
          <div style={{ width: 80, height: 80, borderRadius: 'var(--r-sm)', overflow: 'hidden', flexShrink: 0 }}>
            <img src={a.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--clay-700)', marginBottom: 6 }}>↳ VIAGGIO COLLEGATO · 7 GIORNI · DA €1.480</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.2, color: 'var(--fg-1)' }}>Vuoi vivere {a.title.split(',')[0].toLowerCase()} di persona?</div>
          </div>
          <Button variant="secondary" size="md" onClick={() => go('trip', { id: 'porto' })} icon="arrow-right">Vedi viaggio</Button>
        </aside>
        <div style={{ position: 'relative' }}>
          <MarginNote side="right" rotate={2} top={10} color="var(--clay-800)">
            martedì 16:00 →<br />trucco confermato 🍷
          </MarginNote>
          <p>Le cantine dall'altra parte del fiume erano più affollate di quanto volessimo. Il trucco, l'abbiamo capito dopo, è andarci alle 16 di un martedì. O saltarle e bere ai bar di Cais da Estiva, che è quello che abbiamo fatto il resto del viaggio.</p>
        </div>
      </article>
      <section style={{ padding: '96px 0', background: 'var(--bg-sunken)', marginTop: 96 }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <Stamp size={80} rotate={-6} />
          <Eyebrow>VIAGGIO DISPONIBILE</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5.5vw, 44px)', fontWeight: 400, margin: '12px 0 16px' }}>Vuoi vivere questa storia di persona?</h2>
          <p style={{ color: 'var(--fg-2)', fontSize: 17, marginBottom: 24 }}>Abbiamo aperto un viaggio basato proprio su questo diario.</p>
          <Button variant="primary" size="lg" onClick={() => go('trip', { id: 'porto' })} icon="arrow-right">Vedi il viaggio</Button>
        </div>
      </section>
    </div>
  );
};

/* ============ BESPOKE FORM (4-step) ============ */
const Bespoke = () => {
  const { go, addBespoke, user, setUser } = useApp();
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({ where: '', when: '', people: '2', vibes: new Set(), interests: new Set(), pace: 3, budget: 'medio', notes: '', name: user?.name || '', email: user?.email || '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const total = 5;

  const toggleVibe = (v) => { const n = new Set(data.vibes); n.has(v) ? n.delete(v) : n.add(v); setData({ ...data, vibes: n }); };
  const toggleInterest = (v) => { const n = new Set(data.interests); n.has(v) ? n.delete(v) : n.add(v); setData({ ...data, interests: n }); };

  const next = () => {
    const e = {};
    if (step === 1 && !data.where.trim()) e.where = 'Anche solo un\'idea va bene.';
    if (step === 1 && !data.when.trim()) e.when = 'Quando, più o meno?';
    if (step === 5) {
      if (!data.name.trim()) e.name = 'Come ti chiami?';
      if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email non valida.';
    }
    setErrors(e);
    if (Object.keys(e).length) return;
    if (step < total) setStep(step + 1);
    else submit();
  };

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!user) setUser({ name: data.name, email: data.email, firstName: data.name.split(' ')[0], initials: data.name.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase() });
      addBespoke({ ...data, vibes: Array.from(data.vibes), interests: Array.from(data.interests), createdAt: new Date().toISOString() });
      setStep(6);
    }, 1100);
  };

  if (step === 6) {
    return (
      <div className="page-enter" style={{ padding: '128px 0', textAlign: 'center', position: 'relative' }}>
        <div className="rise" style={{ position: 'absolute', top: 80, left: '50%', marginLeft: -200 }}><Stamp size={140} rotate={8} /></div>
        <div className="narrow" style={{ position: 'relative' }}>
          <div className="rise rise-1"><Eyebrow>RICHIESTA RICEVUTA</Eyebrow></div>
          <h1 className="rise rise-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 80, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '20px 0 24px' }}>Ci pensiamo noi.</h1>
          <p className="rise rise-3" style={{ fontSize: 18, color: 'var(--fg-2)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.6 }}>
            Ti scriviamo entro tre giorni lavorativi con un itinerario di prova, prezzi reali, e zero impegno. Sul serio.
          </p>
          <div className="rise rise-4" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Button variant="primary" onClick={() => go('account')}>Vedi le mie richieste</Button>
            <Button variant="ghost" onClick={() => go('home')}>Torna alla home</Button>
          </div>
        </div>
      </div>
    );
  }

  const vibeOptions = ['Lento', 'Foodie', 'Off-season', 'Attivo', 'Luna di miele', 'Famiglia', 'Solo', 'Treno', 'Costa', 'Montagna'];
  const interestOptions = [
    { id: 'food', icon: 'utensils-crossed', label: 'Cibo & vino', sub: 'Mercati, cantine, tasche locali' },
    { id: 'art', icon: 'palette', label: 'Arte & artigianato', sub: 'Gallerie, botteghe, atelier' },
    { id: 'nature', icon: 'mountain', label: 'Natura & trekking', sub: 'Sentieri, parchi, vista' },
    { id: 'history', icon: 'landmark', label: 'Storia & rovine', sub: 'Siti, musei, antichità' },
    { id: 'music', icon: 'music', label: 'Musica & locali', sub: 'Concerti, club, vita serale' },
    { id: 'wellness', icon: 'sparkles', label: 'Wellness & terme', sub: 'Onsen, hammam, lentezza' },
    { id: 'design', icon: 'armchair', label: 'Design & architettura', sub: 'Hotel curati, edifici notevoli' },
    { id: 'photo', icon: 'camera', label: 'Fotografia', sub: 'Luce, paesaggi, dettagli' },
    { id: 'shopping', icon: 'shopping-bag', label: 'Negozi & vintage', sub: 'Boutique, mercatini, libri' },
    { id: 'spirit', icon: 'heart', label: 'Spirituale & lento', sub: 'Templi, eremi, monasteri' },
  ];
  const budgets = [['economico', '< €1.500/p'], ['medio', '€1.500 – €3.000/p'], ['comodo', '€3.000 – €5.000/p'], ['nessun limite', 'Cieli aperti']];

  return (
    <div className="page-enter" style={{ padding: '48px 0 128px', background: 'var(--bg-sunken)' }}>
      <div className="narrow" style={{ background: 'var(--bg-elevated)', borderRadius: 'var(--r-xl)', padding: 48, boxShadow: 'var(--shadow-2)' }}>
        <button className="btn btn-ghost btn-sm" onClick={() => step > 1 ? setStep(step - 1) : go('home')} style={{ paddingLeft: 0, marginBottom: 12 }}>
          <Icon name="arrow-left" size={14} /> {step > 1 ? 'Indietro' : 'Annulla'}
        </button>
        <Eyebrow>ROAM YOUR WAY · PASSO {step} DI {total}</Eyebrow>
        <div className="progress" style={{ margin: '14px 0 36px' }}><div style={{ width: `${(step / total) * 100}%` }}></div></div>

        {step === 1 && (
          <div className="page-enter">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5.5vw, 44px)', fontWeight: 400, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Dove e quando?</h2>
            <p style={{ color: 'var(--fg-2)', marginBottom: 24 }}>Anche solo "Giappone in primavera" va bene. Si raffina insieme.</p>
            <div style={{ background: 'var(--forest-100)', border: '1px solid var(--forest-300, #c7d4cb)', borderRadius: 'var(--r-md)', padding: '16px 18px', marginBottom: 28 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--forest-700)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>★ PRIMA DI INIZIARE — SAPPI CHE</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 13, color: 'var(--fg-1)' }}>
                <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}><Icon name="check" size={14} style={{ color: 'var(--forest-700)', marginTop: 2 }} /> <span>Risposta entro <strong>3 giorni</strong> con itinerario</span></li>
                <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}><Icon name="check" size={14} style={{ color: 'var(--forest-700)', marginTop: 2 }} /> <span><strong>Gratis e zero impegno</strong> fino a conferma</span></li>
                <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}><Icon name="check" size={14} style={{ color: 'var(--forest-700)', marginTop: 2 }} /> <span>Ti scrive <strong>una persona vera</strong>, non un bot</span></li>
                <li style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}><Icon name="check" size={14} style={{ color: 'var(--forest-700)', marginTop: 2 }} /> <span><strong>Zero email pubblicitarie</strong>, mai</span></li>
              </ul>
            </div>
            <div style={{ display: 'grid', gap: 16 }}>
              <Field label="Dove vorresti andare" placeholder="Giappone, Portogallo, ovunque ci siano montagne…" value={data.where} onChange={e => setData({ ...data, where: e.target.value })} error={errors.where} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <Field label="Più o meno quando?" placeholder="Primavera 2026" value={data.when} onChange={e => setData({ ...data, when: e.target.value })} error={errors.when} />
                <Field label="In quanti?" type="number" min="1" max="12" value={data.people} onChange={e => setData({ ...data, people: e.target.value })} />
              </div>
              <div style={{ marginTop: 4, padding: '10px 14px', background: 'var(--bg-sunken)', borderRadius: 'var(--r-sm)', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em' }}>
                I prossimi 3 step (vibe, interessi, budget) sono <strong style={{ color: 'var(--fg-2)' }}>opzionali</strong> — puoi saltarli e ti facciamo qualche domanda nella prima email.
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="page-enter">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5.5vw, 44px)', fontWeight: 400, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Che vibe?</h2>
            <p style={{ color: 'var(--fg-2)', marginBottom: 28 }}>Scegline quanti vuoi, anche zero.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {vibeOptions.map(v => <Chip key={v} active={data.vibes.has(v)} onClick={() => toggleVibe(v)}>{v}</Chip>)}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="page-enter">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5.5vw, 44px)', fontWeight: 400, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Cosa ti interessa davvero?</h2>
            <p style={{ color: 'var(--fg-2)', marginBottom: 28 }}>Su cosa concentriamo l'itinerario? Scegli quanti vuoi — non è una lista della spesa.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {interestOptions.map(opt => {
                const on = data.interests.has(opt.id);
                return (
                  <button key={opt.id} onClick={() => toggleInterest(opt.id)} style={{
                    display: 'grid', gridTemplateColumns: '40px 1fr', gap: 14, alignItems: 'center',
                    padding: '14px 16px', textAlign: 'left', cursor: 'pointer', font: 'inherit',
                    background: on ? 'var(--forest-100)' : 'transparent',
                    border: `1px solid ${on ? 'var(--primary)' : 'var(--border)'}`,
                    borderRadius: 'var(--r-md)',
                    transition: 'all 180ms var(--ease-out)',
                  }}>
                    <div style={{ width: 40, height: 40, borderRadius: 999, background: on ? 'var(--primary)' : 'var(--bg-sunken)', color: on ? 'var(--cream-50)' : 'var(--fg-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 180ms var(--ease-out)' }}><Icon name={opt.icon} size={18} /></div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 14, color: 'var(--fg-1)' }}>{opt.label}</div>
                      <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 2 }}>{opt.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div style={{ marginTop: 28 }}>
              <label className="lbl">Ritmo del viaggio</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '8px 4px' }}>
                <span style={{ fontSize: 12, color: 'var(--fg-3)' }}>LENTO</span>
                <input type="range" min="1" max="5" value={data.pace} onChange={e => setData({ ...data, pace: +e.target.value })} style={{ flex: 1, accentColor: 'var(--primary)' }} />
                <span style={{ fontSize: 12, color: 'var(--fg-3)' }}>PIENO</span>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="page-enter">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5.5vw, 44px)', fontWeight: 400, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Budget?</h2>
            <p style={{ color: 'var(--fg-2)', marginBottom: 28 }}>Prezzi indicativi a persona, voli esclusi.</p>
            <div style={{ display: 'grid', gap: 10 }}>
              {budgets.map(([k, v]) => (
                <button key={k} onClick={() => setData({ ...data, budget: k })}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px',
                    background: data.budget === k ? 'var(--forest-100)' : 'transparent',
                    border: `1px solid ${data.budget === k ? 'var(--primary)' : 'var(--border)'}`,
                    borderRadius: 'var(--r-md)', cursor: 'pointer', font: 'inherit', textAlign: 'left',
                    transition: 'all 160ms var(--ease-out)' }}>
                  <span style={{ fontWeight: 500, textTransform: 'capitalize' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>{v}</span>
                </button>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <label className="lbl">C'è altro che dovremmo sapere?</label>
              <textarea className="field" rows="4" value={data.notes} onChange={e => setData({ ...data, notes: e.target.value })} placeholder="Cose già decise, paure, hard no, anniversari, allergie…"></textarea>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="page-enter">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 5.5vw, 44px)', fontWeight: 400, margin: '0 0 8px', letterSpacing: '-0.02em' }}>Dove ti scriviamo?</h2>
            <p style={{ color: 'var(--fg-2)', marginBottom: 28 }}>Ti rispondiamo entro tre giorni lavorativi. Da una persona vera.</p>
            <div style={{ display: 'grid', gap: 16 }}>
              <Field label="Nome" placeholder="Anna Rossi" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} error={errors.name} />
              <Field label="Email" type="email" placeholder="anna@esempio.it" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} error={errors.email} />
            </div>
            <div style={{ marginTop: 24, padding: 20, background: 'var(--cream-100)', borderRadius: 'var(--r-md)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>★ COSA SUCCEDE ADESSO</div>
              <div style={{ display: 'grid', gap: 14 }}>
                {[
                  { n: '01', d: 'Oggi', t: 'Riceviamo la tua richiesta. Niente conferme automatiche fastidiose.' },
                  { n: '02', d: 'Entro 24h', t: 'Ti scriviamo a mano per chiarire 2-3 cose.' },
                  { n: '03', d: 'Entro 3 giorni', t: 'Itinerario di prova con prezzi reali e tempi.' },
                  { n: '04', d: 'Quando vuoi', t: 'Conferma con acconto 30% o chiedi modifiche. Zero pressione.' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '32px 90px 1fr', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-700)', letterSpacing: '0.04em' }}>{s.n}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase', paddingTop: 2 }}>{s.d}</div>
                    <div style={{ fontSize: 13, color: 'var(--fg-1)', lineHeight: 1.5 }}>{s.t}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 20, padding: 20, background: 'var(--bg-sunken)', borderRadius: 'var(--r-md)', fontSize: 14, color: 'var(--fg-2)' }}>
              <Meta>RIEPILOGO</Meta>
              <div style={{ marginTop: 8 }}><strong>{data.where || '—'}</strong> · {data.when || '—'} · {data.people} persone</div>
              {data.vibes.size > 0 && <div style={{ marginTop: 4 }}>Vibe: {Array.from(data.vibes).join(', ')}</div>}
              {data.interests.size > 0 && <div style={{ marginTop: 4 }}>Interessi: {Array.from(data.interests).map(i => interestOptions.find(o => o.id === i)?.label).join(', ')}</div>}
              <div style={{ marginTop: 4 }}>Ritmo: {['molto lento', 'lento', 'equilibrato', 'attivo', 'pieno'][data.pace - 1]} · Budget: {data.budget}</div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 8, marginTop: 36, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary" size="lg" onClick={next} loading={loading} icon="arrow-right">{step === total ? 'Invia richiesta gratuita' : 'Continua'}</Button>
          {step < total && <Button variant="ghost" size="lg" onClick={() => setStep(step + 1)}>Salta</Button>}
          {step > 1 && step < total && (
            <button onClick={() => setStep(total)} style={{ marginLeft: 'auto', background: 'transparent', border: 'none', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 15, color: 'var(--clay-700)', cursor: 'pointer', textDecoration: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '4px' }}>
              Vai direttamente all'invio →
            </button>
          )}
        </div>
        {step === total && (
          <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            ★ GRATIS · NESSUN IMPEGNO · NESSUNA EMAIL PROMOZIONALE
          </div>
        )}
      </div>
    </div>
  );
};

/* ============ ONBOARDING / SIGNUP ============ */
const Signup = () => {
  const { setUser, go } = useApp();
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({ name: '', email: '', password: '', interests: new Set(), countries: new Set() });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const toggle = (key, v) => { const n = new Set(data[key]); n.has(v) ? n.delete(v) : n.add(v); setData({ ...data, [key]: n }); };

  const next = () => {
    const e = {};
    if (step === 1) {
      if (!data.name.trim()) e.name = 'Come ti chiami?';
      if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email non valida.';
      if (data.password.length < 6) e.password = 'Almeno 6 caratteri.';
    }
    setErrors(e);
    if (Object.keys(e).length) return;
    if (step < 3) setStep(step + 1);
    else finish();
  };

  const finish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const initials = data.name.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase();
      setUser({ name: data.name, email: data.email, firstName: data.name.split(' ')[0], initials, interests: Array.from(data.interests), countries: Array.from(data.countries), isNew: true });
      go('home', { welcome: true });
    }, 900);
  };

  const interests = ['Cibo & vino', 'Lentezza', 'Avventura', 'Cultura', 'Mare', 'Montagna', 'Solo', 'Famiglia'];
  const countries = ['Italia', 'Portogallo', 'Spagna', 'Giappone', 'Messico', 'Marocco', 'Islanda', 'Vietnam', 'Grecia', 'Francia'];

  return (
    <div className="page-enter" style={{ minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center', padding: '48px 0', background: 'var(--bg-sunken)' }}>
      <div className="narrow" style={{ background: 'var(--bg-elevated)', borderRadius: 'var(--r-xl)', padding: 48, boxShadow: 'var(--shadow-2)', width: '100%' }}>
        <Eyebrow>ENTRA NEL DIARIO · PASSO {step} DI 3</Eyebrow>
        <div className="progress" style={{ margin: '14px 0 36px' }}><div style={{ width: `${(step / 3) * 100}%` }}></div></div>

        {step === 1 && (
          <div className="page-enter">
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(34px, 7vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Crea il tuo account</h1>
            <p style={{ color: 'var(--fg-2)', marginBottom: 28 }}>Salva i diari, prenota i viaggi, ricevi il dispaccio mensile.</p>
            <div style={{ display: 'grid', gap: 16 }}>
              <Field label="Nome e cognome" placeholder="Anna Rossi" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} error={errors.name} />
              <Field label="Email" type="email" placeholder="anna@esempio.it" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} error={errors.email} />
              <Field label="Password" type="password" placeholder="Almeno 6 caratteri" value={data.password} onChange={e => setData({ ...data, password: e.target.value })} error={errors.password} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="page-enter">
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 6vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Cosa ti fa partire?</h1>
            <p style={{ color: 'var(--fg-2)', marginBottom: 28 }}>Per consigliarti le storie giuste. Niente è definitivo.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {interests.map(v => <Chip key={v} active={data.interests.has(v)} onClick={() => toggle('interests', v)}>{v}</Chip>)}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="page-enter">
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 6vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Dove sogni di andare?</h1>
            <p style={{ color: 'var(--fg-2)', marginBottom: 28 }}>Quando apriamo un viaggio in uno di questi paesi, ti scriviamo per primi.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {countries.map(c => <Chip key={c} active={data.countries.has(c)} onClick={() => toggle('countries', c)}>{c}</Chip>)}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 8, marginTop: 36, alignItems: 'center' }}>
          {step > 1 && <Button variant="secondary" onClick={() => setStep(step - 1)}>Indietro</Button>}
          <Button variant="primary" size="lg" onClick={next} loading={loading} icon="arrow-right">{step === 3 ? 'Inizia a esplorare' : 'Continua'}</Button>
          {step > 1 && step < 3 && <Button variant="ghost" onClick={() => setStep(step + 1)}>Salta</Button>}
        </div>
      </div>
    </div>
  );
};

/* ============ ACCOUNT ============ */
const Account = () => {
  const { user, go, bookings, bespokes, photos, saved, signout, showToast } = useApp();
  const [tab, setTab] = React.useState('upcoming');
  if (!user) {
    return (
      <div className="page-enter" style={{ padding: '128px 0', textAlign: 'center' }}>
        <div className="narrow">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 7vw, 56px)', fontWeight: 400, margin: '0 0 16px' }}>Accedi al tuo diario</h1>
          <p style={{ color: 'var(--fg-2)', marginBottom: 24 }}>Crea un account per salvare le storie e prenotare i viaggi.</p>
          <Button variant="primary" size="lg" onClick={() => go('signup')}>Crea account</Button>
        </div>
      </div>
    );
  }
  const tabs = [['upcoming', 'In arrivo', bookings.length], ['saved', 'Salvati', saved.articles.size + saved.trips.size], ['bespoke', 'Su misura', bespokes.length], ['photos', 'Le mie foto', photos.length]];
  return (
    <div className="page-enter" style={{ padding: '48px 0 128px' }}>
      <div className="container">
        <div className="mob-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32, paddingBottom: 32, borderBottom: '1px solid var(--border)', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <div style={{ width: 96, height: 96, borderRadius: 999, background: 'linear-gradient(135deg, var(--clay-300), var(--forest-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4.5vw, 36px)', color: 'var(--cream-50)' }}>{user.initials}</div>
            <div style={{ flex: 1 }}>
              <Eyebrow>FELLOW ROAMER</Eyebrow>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px, 6vw, 48px)', margin: '8px 0 6px', letterSpacing: '-0.02em' }}>{user.name}</h1>
              <Meta>{user.email}</Meta>
              <div style={{ marginTop: 16 }}>
                <Button variant="secondary" size="sm" onClick={signout}>Esci</Button>
              </div>
            </div>
          </div>
          <Passport savedCount={saved.articles.size + saved.trips.size} bookedCount={bookings.length} bespokeCount={bespokes.length} />
        </div>

        <div style={{ display: 'flex', gap: 32, margin: '40px 0 24px', borderBottom: '1px solid var(--border)' }}>
          {tabs.map(([k, label, count]) => (
            <button key={k} onClick={() => setTab(k)} style={{
              padding: '14px 0', background: 'none', border: 'none', cursor: 'pointer',
              fontWeight: 500, fontSize: 14, color: tab === k ? 'var(--fg-1)' : 'var(--fg-3)',
              borderBottom: tab === k ? '2px solid var(--clay-600)' : '2px solid transparent',
              marginBottom: -1, display: 'flex', alignItems: 'center', gap: 8
            }}>{label} <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, opacity: 0.6 }}>{count}</span></button>
          ))}
        </div>

        <div className="page-enter" key={tab} style={{ marginTop: 24 }}>
          {tab === 'upcoming' && (
            bookings.length === 0
              ? <EmptyState icon="suitcase" title="Niente viaggi in arrivo." text="I tuoi prossimi viaggi appariranno qui." cta="Vedi i viaggi" onCta={() => go('trips')} />
              : <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
                  {bookings.map((b, i) => {
                    const t = TRIPS.find(x => x.id === b.tripId);
                    return (
                      <div key={i} className="card" style={{ display: 'grid', gridTemplateColumns: '220px 1fr 380px', overflow: 'hidden', alignItems: 'stretch' }}>
                        <img src={t.image} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 240 }} />
                        <div style={{ padding: 24 }}>
                          <Badge kind="b-trip">CONFERMATO</Badge>
                          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, margin: '8px 0 6px' }}>{t.title}</h3>
                          <Meta>{t.dates} · {b.travelers} VIAGGIATORI</Meta>
                          <div style={{ marginTop: 14, fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.6 }}>{t.dek}</div>
                          <div style={{ marginTop: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            <Button variant="primary" size="sm" icon="arrow-right" onClick={() => go('trip', { id: t.id })}>Vedi itinerario</Button>
                            <Button variant="ghost" size="sm" icon="download" onClick={() => showToast && showToast('Voucher PDF inviato alla tua email.', 'mail')}>Voucher</Button>
                            <Button variant="ghost" size="sm" icon="image" onClick={() => go('share', { tripId: t.id })}>Condividi le tue foto</Button>
                          </div>
                        </div>
                        <div style={{ padding: 16 }}>
                          <TripMap tripId={t.id} compact animate={false} />
                        </div>
                      </div>
                    );
                  })}
                </div>
          )}

          {tab === 'saved' && (
            (saved.articles.size + saved.trips.size === 0)
              ? <EmptyState icon="heart" title="Nulla salvato, ancora." text="Tocca il cuore su qualsiasi storia o viaggio per metterlo qui." cta="Sfoglia il diario" onCta={() => go('diary')} />
              : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                  {Array.from(saved.trips).map(id => { const t = TRIPS.find(x => x.id === id); return t && <TripCard key={id} trip={t} onOpen={() => go('trip', { id: t.id })} />; })}
                  {Array.from(saved.articles).map(id => { const a = ARTICLES.find(x => x.id === id); return a && <ArticleCard key={id} article={a} onOpen={() => go('article', { id: a.id })} />; })}
                </div>
          )}

          {tab === 'bespoke' && (
            bespokes.length === 0
              ? <EmptyState icon="map" title="Nessuna richiesta su misura." text="Costruiamo insieme un viaggio fatto solo per te." cta="Inizia una richiesta" onCta={() => go('bespoke')} />
              : <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {bespokes.map((b, i) => (
                    <div key={i} className="card" style={{ padding: 24, display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
                      <div>
                        <Badge kind="b-diary">IN LAVORAZIONE</Badge>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, margin: '8px 0 6px' }}>{b.where}</h3>
                        <Meta>{b.when} · {b.people} PERSONE · BUDGET {b.budget.toUpperCase()}</Meta>
                        <div style={{ marginTop: 8, fontSize: 13, color: 'var(--fg-2)' }}>Ti rispondiamo entro 3 giorni. Spesso prima.</div>
                      </div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>RIF #{String(1000 + i)}</div>
                    </div>
                  ))}
                </div>
          )}
          {tab === 'photos' && (
            photos.length === 0
              ? <EmptyState icon="image" title="Niente foto inviate, ancora." text="Se sei stata in viaggio con noi, mandaci le tue foto. Le pubblichiamo nel diario con il tuo nome." cta="Manda le tue foto" onCta={() => go('share')} />
              : <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {photos.map((sub, i) => (
                    <div key={i} className="card" style={{ padding: 20 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                        <div>
                          <Badge kind={sub.status === 'review' ? 'b-diary' : 'b-trip'}>{sub.status === 'review' ? 'IN REVISIONE' : 'PUBBLICATA'}</Badge>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.05em', marginTop: 6 }}>{sub.id} · {new Date(sub.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}</div>
                        </div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{sub.photos.length} <span style={{ fontSize: 13, color: 'var(--fg-3)' }}>foto</span></div>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {sub.photos.slice(0, 12).map(f => (
                          <div key={f.id} style={{ width: 72, height: 72, borderRadius: 4, overflow: 'hidden' }}>
                            <img src={f.dataUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                        ))}
                        {sub.photos.length > 12 && (
                          <div style={{ width: 72, height: 72, borderRadius: 4, background: 'var(--cream-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--fg-2)' }}>+{sub.photos.length - 12}</div>
                        )}
                      </div>
                      {sub.story && (
                        <div style={{ marginTop: 14, padding: 14, background: 'var(--bg-sunken)', borderRadius: 'var(--r-sm)', fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55, fontStyle: 'italic' }}>
                          “{sub.story.slice(0, 200)}{sub.story.length > 200 ? '…' : ''}”
                        </div>
                      )}
                    </div>
                  ))}
                  <div style={{ textAlign: 'center', marginTop: 8 }}>
                    <Button variant="secondary" icon="image" onClick={() => go('share')}>Manda altre foto</Button>
                  </div>
                </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ============ EmptyState ============ */
const EmptyState = ({ icon, title, text, cta, onCta }) => (
  <div style={{ textAlign: 'center', padding: '80px 24px', background: 'var(--bg-sunken)', borderRadius: 'var(--r-lg)' }}>
    <div style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--cream-200)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-3)', marginBottom: 16 }}>
      <Icon name={icon} size={28} />
    </div>
    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, margin: '0 0 8px' }}>{title}</h3>
    <p style={{ color: 'var(--fg-2)', maxWidth: 400, margin: '0 auto 20px' }}>{text}</p>
    {cta && <Button variant="primary" onClick={onCta} icon="arrow-right">{cta}</Button>}
  </div>
);

Object.assign(window, { AppCtx, useApp, Home, TripsList, TripDetail, Booking, DiaryList, Article, Bespoke, Signup, Account, NewsletterSection, EmptyState });
