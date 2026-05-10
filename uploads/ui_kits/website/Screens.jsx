/* Screens.jsx — the 8 click-thru screens */

const HomeScreen = ({ onNav }) => (
  <>
    <section className="hero">
      <div className="hero-img"><img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1800&q=85" alt="" /></div>
      <div className="hero-content">
        <div className="eyebrow" style={{ color: 'var(--clay-300)', marginBottom: 20 }}>WELCOME · ESTABLISHED 2021</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: 0, maxWidth: 900, fontVariationSettings: '"opsz" 144' }}>
          Travel a little.<br />Get lost.<br /><em style={{ fontWeight: 300 }}>Tell us about it.</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, marginTop: 32, maxWidth: 540, color: 'var(--cream-100)' }}>
          A travel diary that occasionally sells you a plane ticket. Long-form stories, small-group trips, and itineraries built one at a time.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
          <Button variant="accent" size="lg" onClick={() => onNav('trips')} icon="arrow-right">See the trips</Button>
          <Button variant="secondary" size="lg" onClick={() => onNav('article')} style={{ background: 'rgba(250,246,236,0.12)', borderColor: 'rgba(250,246,236,0.3)', color: 'var(--cream-50)' }}>Read the diary</Button>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <Eyebrow>FROM THE DIARY</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0', color: 'var(--fg-1)' }}>
              Recent journeys, told slowly.
            </h2>
          </div>
          <Button variant="ghost" onClick={() => onNav('index')} icon="arrow-right">All stories</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 24 }}>
          <ArticleCard article={ARTICLES[0]} size="lg" onOpen={() => onNav('article')} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <ArticleCard article={ARTICLES[1]} onOpen={() => onNav('article')} />
            <ArticleCard article={ARTICLES[2]} onOpen={() => onNav('article')} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <ArticleCard article={ARTICLES[3]} onOpen={() => onNav('article')} />
            <ArticleCard article={ARTICLES[4]} onOpen={() => onNav('article')} />
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--bg-sunken)', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <Eyebrow>ROAMED TRIPS</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0' }}>
              Come with us.
            </h2>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 20, color: 'var(--fg-2)', maxWidth: 540, marginTop: 14 }}>
              Small-group trips based on stories already in the diary. Ten people, max. We've already done the hard parts.
            </p>
          </div>
          <Button variant="primary" onClick={() => onNav('trips')}>See all trips</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {TRIPS.slice(0, 3).map(t => <TripCard key={t.id} trip={t} onOpen={() => onNav('booking')} />)}
        </div>
      </div>
    </section>

    <section style={{ background: 'var(--forest-900)', color: 'var(--cream-50)', padding: '128px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 60, right: 80, opacity: 0.5 }}><Stamp size={140} rotate={12} /></div>
      <div className="container" style={{ maxWidth: 880, textAlign: 'center', position: 'relative' }}>
        <Eyebrow>ROAM YOUR WAY</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 64, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '20px 0 28px' }}>
          Or build something nobody else has.
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.7, color: 'var(--cream-200)', maxWidth: 620, margin: '0 auto 36px' }}>
          Tell us where you want to go and roughly when. We'll write you back within three days with a draft itinerary, real prices, and zero pressure.
        </p>
        <Button variant="accent" size="lg" onClick={() => onNav('bespoke')} icon="arrow-right">Start a request</Button>
      </div>
    </section>

    <NewsletterSection />
  </>
);

const NewsletterSection = () => (
  <section className="section">
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
      <div>
        <Eyebrow>THE DISPATCH</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 18px' }}>
          One email a month. No deals, no urgency.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--fg-2)', maxWidth: 480 }}>
          A new diary entry, a trip we just opened, and the one bakery worth a detour. That's it. — the founder
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: 8 }}>
        <input className="field" placeholder="your@email.com" style={{ flex: 1 }} />
        <Button variant="primary">Subscribe</Button>
      </form>
    </div>
  </section>
);

/* -------- Article -------- */

const ArticleScreen = ({ onNav }) => (
  <>
    <section style={{ paddingTop: 64, paddingBottom: 32 }}>
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <Eyebrow>DIARY · PORTUGAL</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '20px 0 24px' }}>
          Three days lost in <em style={{ fontWeight: 300 }}>Porto</em>
        </h1>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 22, color: 'var(--fg-2)', maxWidth: 600, margin: '0 auto 32px' }}>
          A first trip with no plans, no reservations, and a strong opinion about pastel de nata.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, color: 'var(--fg-3)' }}>
          <Meta>By Sofia · 5 min read · Sep 2025</Meta>
        </div>
      </div>
    </section>
    <figure style={{ margin: '0 0 64px' }}>
      <img src="https://images.unsplash.com/photo-1581873372796-635b67ca2008?w=1800&q=85" style={{ width: '100%', height: 600, objectFit: 'cover' }} />
    </figure>
    <article className="container-narrow prose">
      <p style={{ fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 300, color: 'var(--fg-1)', lineHeight: 1.5 }}>
        We landed at six in the morning and immediately got the airport bus wrong. Twice. By the time we found our place, the city had woken up — slow, tiled, smelling of grilled sardines somewhere two streets over.
      </p>
      <p>Porto is built on a hill that pretends to be several smaller hills. Every street goes up. Every street, somehow, also goes down. We learned to take the long way around, because the long way around had the river.</p>
      <h2>What we ate, what we missed</h2>
      <p>The francesinha is real, the legends are accurate, and we are not built for it. Two days in we switched to bifanas — pork sandwiches the size of a paperback — and never recovered.</p>
      <blockquote>The best place we ate was a tasca whose name we never learned. Two tables. A grandmother. €11 for everything.</blockquote>
      <p>Cellars across the river were busier than we wanted. The trick, we learned later, is to go at 4pm on a Tuesday. Or just to skip them and drink at the bars on Cais da Estiva instead, which is what we did the rest of the trip.</p>
      <h2>What we'd do differently</h2>
      <p>Stay four nights, not three. Take the train to the Douro on the second day, not the last. And book one nice dinner ahead — we missed Cantina 32 twice.</p>
    </article>
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 40, margin: 0 }}>Keep reading</h2>
          <Button variant="ghost" onClick={() => onNav('index')} icon="arrow-right">All diaries</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {ARTICLES.slice(1, 4).map(a => <ArticleCard key={a.id} article={a} onOpen={() => {}} />)}
        </div>
      </div>
    </section>
  </>
);

/* -------- Destinations index -------- */

const DestinationsScreen = ({ onNav }) => {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Europe', 'Asia', 'Americas', 'Africa'];
  return (
    <>
      <section style={{ padding: '80px 0 48px' }}>
        <div className="container">
          <Eyebrow>DESTINATIONS</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: '16px 0 20px', maxWidth: 800 }}>
            Every place we've roamed, sorted by the ones we'd go back to.
          </h1>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 20, color: 'var(--fg-2)', maxWidth: 560 }}>
            Eight countries so far. Some by accident.
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 36 }}>
            {filters.map(f => <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</Chip>)}
          </div>
        </div>
      </section>
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {DESTINATIONS.map(d => (
              <a key={d.id} className="card cursor-pointer" onClick={() => onNav('destination')}>
                <div className="card-img" style={{ aspectRatio: '3/4' }}>
                  <img src={d.image} alt={d.name} />
                </div>
                <div className="card-body" style={{ padding: '14px 16px 18px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, margin: '0 0 4px', color: 'var(--fg-1)' }}>{d.name}</h3>
                  <Meta>{d.country} · {d.stories} stories</Meta>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { HomeScreen, ArticleScreen, DestinationsScreen, NewsletterSection });
