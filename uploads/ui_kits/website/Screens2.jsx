/* Screens2.jsx — destination, itinerary, booking, profile, search, bespoke */

const DestinationScreen = ({ onNav }) => (
  <>
    <section style={{ position: 'relative', height: 520, overflow: 'hidden' }}>
      <img src="https://images.unsplash.com/photo-1513735492246-483525079686?w=1800&q=85" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,26,20,0) 50%, rgba(15,26,20,.55) 100%)' }}></div>
      <div style={{ position: 'absolute', bottom: 48, left: 0, right: 0 }}>
        <div className="container" style={{ color: 'var(--cream-50)' }}>
          <Eyebrow>PORTUGAL · 8 STORIES · 2 TRIPS</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(56px, 8vw, 112px)', lineHeight: 1, letterSpacing: '-0.02em', margin: '12px 0 0' }}>Lisbon</h1>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 80 }}>
        <div className="prose" style={{ fontSize: 19 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 26, color: 'var(--fg-1)', lineHeight: 1.4 }}>
            Hilly, tiled, slightly sun-bleached. We've been to Lisbon four times now, and we still haven't done the same trip twice.
          </p>
          <p>The city rewards walking — slowly, with stops. Our shorthand: Alfama for mornings, Príncipe Real for lunch, the river at sunset, and Bairro Alto only after midnight (or never).</p>
          <h2>When to go</h2>
          <p>Late April through early June, then again in September and October. July is hot and full. August is hot and emptier. February is rainy but quiet, and the light is unreal.</p>
        </div>
        <aside style={{ position: 'sticky', top: 100, alignSelf: 'flex-start' }}>
          <div className="card" style={{ padding: 28 }}>
            <Eyebrow>QUICK FACTS</Eyebrow>
            <dl style={{ margin: '20px 0 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 12px', fontSize: 14 }}>
              <dt style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>FLY INTO</dt><dd style={{ margin: 0, fontWeight: 500 }}>LIS</dd>
              <dt style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>STAY</dt><dd style={{ margin: 0, fontWeight: 500 }}>4–5 nights</dd>
              <dt style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>CURRENCY</dt><dd style={{ margin: 0, fontWeight: 500 }}>EUR</dd>
              <dt style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>LANGUAGE</dt><dd style={{ margin: 0, fontWeight: 500 }}>Portuguese</dd>
            </dl>
          </div>
        </aside>
      </div>
    </section>

    <section style={{ padding: '64px 0 96px', background: 'var(--bg-sunken)' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, margin: '0 0 36px' }}>Trips here</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {TRIPS.slice(0, 2).map(t => <TripCard key={t.id} trip={t} onOpen={() => onNav('booking')} />)}
        </div>
      </div>
    </section>
  </>
);

/* -------- Itinerary -------- */

const ItineraryScreen = ({ onNav }) => {
  const [day, setDay] = React.useState(1);
  const current = ITINERARY.find(d => d.day === day);
  return (
    <section style={{ padding: '64px 0 128px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 64 }}>
        <aside>
          <Eyebrow>ROAMED TRIP · 3 NIGHTS</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 24px' }}>
            Three days lost in Porto
          </h1>
          <Meta>22–25 SEP 2025 · 8 ROAMERS</Meta>
          <hr className="divider" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {ITINERARY.map(d => (
              <button key={d.day} onClick={() => setDay(d.day)} style={{
                textAlign: 'left', padding: '14px 16px', background: day === d.day ? 'var(--forest-100)' : 'transparent',
                border: 'none', borderRadius: 'var(--r-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14,
                color: 'var(--fg-1)', fontFamily: 'var(--font-body)',
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', minWidth: 36 }}>DAY {String(d.day).padStart(2, '0')}</span>
                <span>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{d.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--fg-3)' }}>{d.subtitle}</div>
                </span>
              </button>
            ))}
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 8 }}>
            <Button variant="primary" onClick={() => onNav('booking')}>Book this trip</Button>
          </div>
        </aside>
        <main>
          <div style={{ marginBottom: 32 }}>
            <Eyebrow>DAY {String(current.day).padStart(2, '0')} · {current.subtitle.toUpperCase()}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0' }}>{current.title}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {current.items.map((it, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 36px 1fr', gap: 24, padding: '24px 0', borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-3)', paddingTop: 4 }}>{it.time}</div>
                <div style={{ width: 36, height: 36, borderRadius: 999, background: 'var(--forest-100)', color: 'var(--forest-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={it.kind} size={18} />
                </div>
                <div style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--fg-1)', paddingTop: 6 }}>{it.text}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

/* -------- Booking -------- */

const BookingScreen = ({ onNav }) => {
  const [step, setStep] = React.useState(1);
  const [travelers, setTravelers] = React.useState(2);
  if (step === 3) {
    return (
      <section style={{ padding: '128px 0', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 80, left: '50%', marginLeft: -200, opacity: 0.5 }}><Stamp size={140} rotate={-12} /></div>
        <div className="container-narrow" style={{ position: 'relative' }}>
          <Eyebrow>BOOKING CONFIRMED</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 72, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '20px 0 24px' }}>You're in.</h1>
          <p style={{ fontSize: 18, color: 'var(--fg-2)', maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.6 }}>
            We just emailed you a confirmation, an itinerary, and a packing list nobody actually reads. We can't wait.
          </p>
          <Button variant="primary" onClick={() => onNav('profile')}>See my trips</Button>
        </div>
      </section>
    );
  }
  return (
    <section style={{ padding: '48px 0 128px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 64 }}>
        <main>
          <Eyebrow>ROAMED TRIP · BOOKING</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 32px' }}>Three days lost in Porto</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-3)' }}>
            <span style={{ color: step >= 1 ? 'var(--primary)' : 'inherit', fontWeight: 600 }}>01 · DETAILS</span>
            <span>—</span>
            <span style={{ color: step >= 2 ? 'var(--primary)' : 'inherit', fontWeight: step === 2 ? 600 : 400 }}>02 · PAYMENT</span>
            <span>—</span>
            <span>03 · CONFIRM</span>
          </div>

          {step === 1 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Field label="Full name" placeholder="Ada Lovelace" defaultValue="Sofia Marquez" />
              <Field label="Email" type="email" placeholder="ada@example.com" defaultValue="sofia@example.com" />
              <div>
                <label className="field-label">Travelers</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => setTravelers(Math.max(1, travelers - 1))}>−</button>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, minWidth: 24, textAlign: 'center' }}>{travelers}</span>
                  <button className="btn btn-secondary btn-sm" onClick={() => setTravelers(Math.min(8, travelers + 1))}>+</button>
                </div>
              </div>
              <Field label="Departure city" placeholder="Where do you fly from?" defaultValue="Milan (MXP)" />
              <div style={{ gridColumn: 'span 2' }}>
                <label className="field-label">Anything we should know?</label>
                <textarea className="field" rows="3" placeholder="Dietary needs, accessibility, that you really hate buses…"></textarea>
              </div>
              <div style={{ gridColumn: 'span 2', marginTop: 16 }}>
                <Button variant="primary" size="lg" onClick={() => setStep(2)} icon="arrow-right">Continue to payment</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ gridColumn: 'span 2' }}>
                <Field label="Card number" placeholder="4242 4242 4242 4242" />
              </div>
              <Field label="Expiry" placeholder="09 / 28" />
              <Field label="CVC" placeholder="123" />
              <div style={{ gridColumn: 'span 2' }}>
                <Field label="Name on card" placeholder="Ada Lovelace" />
              </div>
              <div style={{ gridColumn: 'span 2', display: 'flex', gap: 8, marginTop: 16 }}>
                <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
                <Button variant="primary" size="lg" onClick={() => setStep(3)}>Pay €{(890 * travelers).toLocaleString()}</Button>
              </div>
            </div>
          )}
        </main>

        <aside>
          <div className="card" style={{ overflow: 'hidden', position: 'sticky', top: 100 }}>
            <img src={TRIPS[0].image} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            <div style={{ padding: 24 }}>
              <Eyebrow>YOUR ORDER</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 400, margin: '8px 0 16px' }}>Three days lost in Porto</h3>
              <Meta>22–25 Sep 2025 · 3 nights</Meta>
              <hr className="divider" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--fg-2)' }}>€890 × {travelers} roamers</span><span>€{(890 * travelers).toLocaleString()}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--fg-2)' }}>Booking fee</span><span>€0</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--success)' }}>Early-bird discount</span><span style={{ color: 'var(--success)' }}>−€120</span></div>
              </div>
              <hr className="divider" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontWeight: 600 }}>Total</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 32 }}>€{(890 * travelers - 120).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

/* -------- Search -------- */

const SearchScreen = ({ onNav }) => {
  const [q, setQ] = React.useState('porto');
  const [tags, setTags] = React.useState(new Set(['Slow']));
  const toggle = (t) => { const n = new Set(tags); n.has(t) ? n.delete(t) : n.add(t); setTags(n); };
  const allTags = ['Slow', 'Foodie', 'Solo', 'Off-season', 'Hiking', 'Train', 'Coast', 'Wine'];
  return (
    <section style={{ padding: '48px 0 128px' }}>
      <div className="container">
        <Eyebrow>SEARCH</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 64, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 32px' }}>Where to?</h1>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <input className="field" value={q} onChange={e => setQ(e.target.value)} style={{ flex: 1, fontSize: 17, padding: '16px 18px' }} placeholder="Type a place, a vibe, a season…" />
          <Button variant="primary" size="lg">Search</Button>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {allTags.map(t => <Chip key={t} active={tags.has(t)} onClick={() => toggle(t)}>{t}</Chip>)}
        </div>
        <hr className="divider" style={{ margin: '40px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
          <div>
            <Meta>{ARTICLES.length + TRIPS.length} RESULTS</Meta>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 32, margin: '6px 0 0' }}>For "{q}"</h2>
          </div>
          <select className="field" style={{ width: 200 }}>
            <option>Most recent</option><option>Most loved</option><option>By season</option>
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          <TripCard trip={TRIPS[0]} onOpen={() => onNav('booking')} />
          {ARTICLES.slice(0, 5).map(a => <ArticleCard key={a.id} article={a} onOpen={() => onNav('article')} />)}
        </div>
      </div>
    </section>
  );
};

/* -------- Profile -------- */

const ProfileScreen = ({ onNav }) => (
  <section style={{ padding: '48px 0 128px' }}>
    <div className="container">
      <div style={{ display: 'flex', gap: 32, alignItems: 'center', paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
        <div style={{ width: 96, height: 96, borderRadius: 999, background: 'linear-gradient(135deg, var(--clay-300), var(--forest-500))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--cream-50)' }}>SM</div>
        <div style={{ flex: 1 }}>
          <Eyebrow>FELLOW ROAMER · SINCE 2023</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 48, margin: '8px 0 6px', letterSpacing: '-0.02em' }}>Sofia Marquez</h1>
          <Meta>Milan, Italy · 4 roamed trips · 12 saved diaries</Meta>
        </div>
        <Button variant="secondary">Edit profile</Button>
      </div>

      <div style={{ display: 'flex', gap: 32, margin: '40px 0 24px', borderBottom: '1px solid var(--border)' }}>
        {['Upcoming', 'Past trips', 'Saved diaries', 'Bespoke requests'].map((t, i) => (
          <button key={t} style={{
            padding: '14px 0', background: 'none', border: 'none', cursor: 'pointer',
            fontWeight: 500, fontSize: 14, color: i === 0 ? 'var(--fg-1)' : 'var(--fg-3)',
            borderBottom: i === 0 ? '2px solid var(--clay-600)' : '2px solid transparent',
            marginBottom: -1,
          }}>{t}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
        <div className="card" style={{ display: 'grid', gridTemplateColumns: '160px 1fr', overflow: 'hidden' }}>
          <img src={TRIPS[0].image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ padding: 20 }}>
            <Badge kind="trip">CONFIRMED</Badge>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, margin: '8px 0 6px' }}>Three days lost in Porto</h3>
            <Meta>22 SEP 2025 · IN 22 DAYS</Meta>
            <div style={{ marginTop: 14 }}>
              <Button variant="ghost" onClick={() => onNav('itinerary')} icon="arrow-right">View itinerary</Button>
            </div>
          </div>
        </div>
        <div className="card" style={{ display: 'grid', gridTemplateColumns: '160px 1fr', overflow: 'hidden' }}>
          <img src={TRIPS[1].image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ padding: 20 }}>
            <Badge kind="diary">DEPOSIT PAID</Badge>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, margin: '8px 0 6px' }}>The slow road through Puglia</h3>
            <Meta>14 OCT 2025 · BALANCE DUE 14 SEP</Meta>
            <div style={{ marginTop: 14 }}>
              <Button variant="ghost" icon="arrow-right">Pay balance</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* -------- Bespoke / Roam your way -------- */

const BespokeScreen = ({ onNav }) => (
  <section style={{ padding: '64px 0 128px' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'flex-start' }}>
      <div>
        <Eyebrow>ROAM YOUR WAY</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 72, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 24px' }}>
          A trip built for you, by us.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--fg-2)', maxWidth: 460, marginBottom: 32 }}>
          Tell us where you'd like to go and roughly when. Within three days you'll have a draft itinerary in your inbox — real prices, no upsells, no obligation.
        </p>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
          {[
            ['01', 'You tell us', 'Where, when, who, vibe. The form does the asking.'],
            ['02', 'We sketch it', 'A draft itinerary, a real price, within three working days.'],
            ['03', 'We refine together', 'One call, two emails, however many edits. No clock running.'],
            ['04', 'You go', 'We handle bookings. You handle the photos.'],
          ].map(([n, t, d]) => (
            <li key={n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--clay-600)', fontWeight: 600, paddingTop: 4 }}>{n}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--fg-1)' }}>{t}</div>
                <div style={{ color: 'var(--fg-2)', marginTop: 4 }}>{d}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <form className="card" style={{ padding: 32 }} onSubmit={e => { e.preventDefault(); onNav('home'); }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 28, margin: '0 0 24px' }}>Start a request</h3>
        <div style={{ display: 'grid', gap: 16 }}>
          <Field label="Where to (roughly)?" placeholder="Japan, Portugal, anywhere with mountains…" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Field label="When (roughly)?" placeholder="Spring 2026" />
            <Field label="How many of you?" placeholder="2" />
          </div>
          <div>
            <label className="field-label">Vibe</label>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {['Slow', 'Foodie', 'Off-season', 'Active', 'Honeymoon', 'Family'].map(v => <Chip key={v}>{v}</Chip>)}
            </div>
          </div>
          <div>
            <label className="field-label">Tell us more</label>
            <textarea className="field" rows="4" placeholder="Anything you've already decided, anything you're scared of, anything that's a hard no…"></textarea>
          </div>
          <Button variant="primary" size="lg" icon="arrow-right">Send request</Button>
          <Meta style={{ textAlign: 'center', marginTop: 4 }}>NO PAYMENT NEEDED · WE'LL REPLY IN 3 DAYS</Meta>
        </div>
      </form>
    </div>
  </section>
);

Object.assign(window, { DestinationScreen, ItineraryScreen, BookingScreen, SearchScreen, ProfileScreen, BespokeScreen });
