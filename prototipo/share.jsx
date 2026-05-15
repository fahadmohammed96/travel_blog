/* ============ SHARE — invio foto per il diario ============ */

const Share = ({ params }) => {
  const { go, user, setUser, bookings, photos, addPhotos } = useApp();
  const preTrip = params.tripId || (bookings[0] && bookings[0].tripId) || null;

  const [step, setStep] = React.useState(1); // 1 intro, 2 upload, 3 tag, 4 story, 5 confirm
  const [files, setFiles] = React.useState([]); // [{id, name, size, dataUrl, tripId, dayLabel, caption}]
  const [story, setStory] = React.useState('');
  const [consent, setConsent] = React.useState(false);
  const [consentFaces, setConsentFaces] = React.useState(true);
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [emailOpen, setEmailOpen] = React.useState(false);
  const [signupName, setSignupName] = React.useState('');
  const [signupEmail, setSignupEmail] = React.useState('');

  const total = 5;
  const stepLabels = ['Cosa ci serve', 'Carica', 'Tagga', 'Racconta', 'Conferma'];

  // Icon ora renderizza SVG inline — non serve più lucide.createIcons()

  const onPickFiles = (filesList) => {
    const nextErrors = {};
    const accepted = [];
    Array.from(filesList).forEach(f => {
      if (!/^image\/(jpeg|png|heic|heif|webp)$/i.test(f.type) && !/\.(jpg|jpeg|png|heic|heif|webp)$/i.test(f.name)) {
        nextErrors.type = `${f.name} non è una foto. Solo JPG, PNG, HEIC.`;
        return;
      }
      if (f.size > 10 * 1024 * 1024) {
        nextErrors.size = `${f.name} pesa ${(f.size / 1024 / 1024).toFixed(1)}MB. Massimo 10MB per foto.`;
        return;
      }
      accepted.push(f);
    });
    if (files.length + accepted.length > 20) {
      nextErrors.count = `Massimo 20 foto alla volta. Ne hai ${files.length + accepted.length}.`;
      accepted.splice(20 - files.length);
    }
    setErrors(nextErrors);

    accepted.forEach(f => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFiles(prev => [...prev, {
          id: Math.random().toString(36).slice(2),
          name: f.name,
          size: f.size,
          dataUrl: e.target.result,
          tripId: preTrip,
          dayLabel: '',
          caption: '',
        }]);
      };
      reader.readAsDataURL(f);
    });
  };

  const removeFile = (id) => setFiles(prev => prev.filter(f => f.id !== id));
  const updateFile = (id, patch) => setFiles(prev => prev.map(f => f.id === id ? { ...f, ...patch } : f));
  const applyTripToAll = (tripId) => setFiles(prev => prev.map(f => ({ ...f, tripId })));

  const validate = () => {
    const e = {};
    if (step === 2 && files.length === 0) e.upload = 'Aggiungi almeno una foto.';
    if (step === 3) {
      const untagged = files.filter(f => !f.tripId);
      if (untagged.length) e.tag = `${untagged.length} foto senza viaggio. Taggale tutte.`;
    }
    if (step === 5) {
      if (!consent) e.consent = 'Serve il consenso per pubblicare.';
      if (!user && !signupEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email non valida.';
      if (!user && signupName.trim().length < 2) e.name = 'Dicci come ti chiami.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validate()) return;
    if (step < total) setStep(step + 1);
    else submit();
  };

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!user) {
        setUser({
          name: signupName, email: signupEmail,
          firstName: signupName.split(' ')[0],
          initials: signupName.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase(),
        });
      }
      const submission = {
        id: 'PHOTO-' + (Math.floor(Math.random() * 90000) + 10000),
        date: new Date().toISOString(),
        photos: files,
        story,
        consentFaces,
        status: 'review',
      };
      addPhotos(submission);
      setDone(true);
      setTimeout(() => setEmailOpen(true), 800);
    }, 1500);
  };

  // ----------------- DONE state -----------------
  if (done) {
    const photoCount = files.length;
    return (
      <div className="page-enter" style={{ padding: '128px 0', textAlign: 'center', position: 'relative' }}>
        <div className="rise" style={{ position: 'absolute', top: 80, left: '50%', marginLeft: -260 }}><Stamp size={140} rotate={-12} /></div>
        <div style={{ position: 'absolute', top: 60, right: '50%', marginRight: -340 }} className="rise rise-2">
          <div style={{ display: 'flex', gap: -16 }}>
            {files.slice(0, 3).map((f, i) => (
              <div key={f.id} style={{ width: 90, height: 110, background: 'var(--cream-50)', padding: 6, paddingBottom: 18, boxShadow: 'var(--shadow-3)', transform: `rotate(${(i - 1) * 8}deg) translateX(${i * -22}px)`, position: 'relative' }}>
                <img src={f.dataUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
        <div className="narrow" style={{ position: 'relative' }}>
          <div className="rise rise-1"><Eyebrow>FOTO RICEVUTE</Eyebrow></div>
          <h1 className="rise rise-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic', fontSize: 80, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '20px 0 24px' }}>Le guardiamo a mano.</h1>
          <p className="rise rise-3" style={{ fontSize: 18, color: 'var(--fg-2)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.6 }}>
            Abbiamo ricevuto le tue {photoCount} foto. Le revisioniamo entro sette giorni. Se ne pubblichiamo qualcuna nel diario o nella polaroid wall, te lo diciamo per email.
          </p>
          <div className="rise rise-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => setEmailOpen(true)} icon="mail">Vedi la conferma</Button>
            <Button variant="secondary" onClick={() => go('account')}>Le mie foto</Button>
            <Button variant="ghost" onClick={() => go('home')}>Torna alla home</Button>
          </div>
        </div>
        <PhotoEmailModal open={emailOpen} onClose={() => setEmailOpen(false)} photoCount={photoCount} userName={user?.firstName || signupName.split(' ')[0]} />
      </div>
    );
  }

  // ----------------- STEPS -----------------
  return (
    <div className="page-enter" style={{ padding: '48px 0 128px', background: 'var(--bg-sunken)' }}>
      <div className="narrow" style={{ background: 'var(--bg-elevated)', borderRadius: 'var(--r-xl)', padding: 48, boxShadow: 'var(--shadow-2)' }}>
        {/* Header con back + progress */}
        <button className="btn btn-ghost btn-sm" onClick={() => step > 1 ? setStep(step - 1) : go('home')} style={{ paddingLeft: 0, marginBottom: 12 }}>
          <Icon name="arrow-left" size={14} /> {step > 1 ? 'Indietro' : 'Annulla'}
        </button>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <Eyebrow>STEP {step} DI {total} · {stepLabels[step - 1].toUpperCase()}</Eyebrow>
          <div style={{ display: 'flex', gap: 4 }}>
            {[...Array(total)].map((_, i) => (
              <div key={i} style={{ width: 32, height: 3, background: i < step ? 'var(--clay-600)' : 'var(--cream-300)', borderRadius: 2, transition: 'background 280ms var(--ease-out)' }}></div>
            ))}
          </div>
        </div>

        {/* STEP 1 — Intro */}
        {step === 1 && (
          <div className="page-enter">
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(34px, 7vw, 56px)', lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 16px' }}>
              <em>Mandaci</em> le tue foto.
            </h1>
            <p style={{ fontSize: 19, color: 'var(--fg-2)', lineHeight: 1.6, margin: '0 0 32px', maxWidth: 580 }}>
              Le foto migliori del diario non sono nostre. Sono di chi è venuto in viaggio con noi e ha visto cose che ci eravamo persi.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, margin: '32px 0' }}>
              {[
                { icon: 'camera', title: 'Cosa cerchiamo', text: 'Foto vere. Anche dal telefono, se sono fatte bene. Niente filtri instagram.' },
                { icon: 'image', title: 'Come le usiamo', text: 'Polaroid wall sul viaggio, articoli del diario, social — sempre con il tuo nome.' },
                { icon: 'clock', title: 'Tempistiche', text: 'Le guardiamo a mano. Risposta in sette giorni. Quelle pubblicate, te le segnaliamo.' },
              ].map((c, i) => (
                <div key={i} className="rise" style={{ animationDelay: `${i * 100}ms`, background: 'var(--cream-100)', borderRadius: 'var(--r-md)', padding: 24 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, color: 'var(--clay-700)' }}>
                    <Icon name={c.icon} size={20} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, margin: '0 0 6px' }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.5, margin: 0 }}>{c.text}</p>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--forest-100)', borderRadius: 'var(--r-md)', padding: '16px 20px', display: 'flex', gap: 12, alignItems: 'flex-start', margin: '0 0 32px' }}>
              <Icon name="info" size={18} style={{ color: 'var(--forest-700)', flexShrink: 0, marginTop: 2 }} />
              <div style={{ fontSize: 14, color: 'var(--forest-900)', lineHeight: 1.55 }}>
                <strong>Linee guida brevi.</strong> Massimo 20 foto per invio, 10MB ognuna. JPG, PNG, HEIC. Se ci sono persone riconoscibili, assicurati di avere il loro consenso.
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 — Upload */}
        {step === 2 && (
          <div className="page-enter">
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 38, margin: '12px 0 24px' }}>Trascinale qui.</h2>

            <div
              onDragOver={e => { e.preventDefault(); e.currentTarget.style.borderColor = 'var(--clay-600)'; e.currentTarget.style.background = 'var(--cream-100)'; }}
              onDragLeave={e => { e.currentTarget.style.borderColor = 'var(--cream-300)'; e.currentTarget.style.background = 'var(--bg-sunken)'; }}
              onDrop={e => { e.preventDefault(); e.currentTarget.style.borderColor = 'var(--cream-300)'; e.currentTarget.style.background = 'var(--bg-sunken)'; onPickFiles(e.dataTransfer.files); }}
              style={{
                border: '2px dashed var(--cream-300)', borderRadius: 'var(--r-lg)', background: 'var(--bg-sunken)',
                padding: '48px 24px', textAlign: 'center', cursor: 'pointer', transition: 'all 200ms var(--ease-out)',
                opacity: files.length >= 20 ? 0.4 : 1, pointerEvents: files.length >= 20 ? 'none' : 'auto',
              }}
              onClick={() => document.getElementById('share-file-input').click()}
            >
              <input id="share-file-input" type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={e => onPickFiles(e.target.files)} />
              <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--cream-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--clay-700)', marginBottom: 16 }}>
                <Icon name="upload-cloud" size={26} />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, margin: '0 0 4px' }}>
                {files.length === 0 ? 'Trascina le foto qui' : `${files.length} di 20 foto`}
              </div>
              <div style={{ fontSize: 13, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                {files.length === 0 ? 'O clicca per scegliere · JPG, PNG, HEIC · max 10MB' : 'Aggiungine altre o continua'}
              </div>
            </div>

            {(errors.type || errors.size || errors.count || errors.upload) && (
              <div style={{ background: '#fdf0ed', border: '1px solid #d97757', borderRadius: 'var(--r-sm)', padding: '10px 14px', marginTop: 16, fontSize: 13, color: '#a04525', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Icon name="alert-circle" size={16} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>{errors.type || errors.size || errors.count || errors.upload}</div>
              </div>
            )}

            {/* Grid preview */}
            {files.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 24 }}>
                {files.map((f, i) => (
                  <div key={f.id} className="rise" style={{ animationDelay: `${i * 40}ms`, position: 'relative', aspectRatio: '1', background: 'var(--cream-100)', borderRadius: 'var(--r-sm)', overflow: 'hidden' }}>
                    <img src={f.dataUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button onClick={() => removeFile(f.id)} style={{
                      position: 'absolute', top: 6, right: 6, width: 24, height: 24, borderRadius: 999,
                      background: 'rgba(15,26,20,0.7)', color: 'white', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}><Icon name="x" size={12} /></button>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px 10px', background: 'linear-gradient(transparent, rgba(15,26,20,0.6))', color: 'white', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.05em' }}>
                      {(f.size / 1024 / 1024).toFixed(1)}MB
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STEP 3 — Tag */}
        {step === 3 && (
          <div className="page-enter">
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 38, margin: '12px 0 8px' }}>Da quale viaggio?</h2>
            <p style={{ color: 'var(--fg-2)', fontSize: 15, margin: '0 0 24px' }}>
              Tagga ogni foto. Una didascalia breve aiuta — finisce sotto la polaroid se la pubblichiamo.
            </p>

            {/* Bulk apply */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24, padding: '14px 16px', background: 'var(--cream-100)', borderRadius: 'var(--r-md)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.1em' }}>APPLICA A TUTTE:</span>
              <select className="field" style={{ flex: 1, fontSize: 14 }} onChange={e => e.target.value && applyTripToAll(e.target.value)} defaultValue="">
                <option value="">— scegli un viaggio —</option>
                {TRIPS.map(t => <option key={t.id} value={t.id}>{t.title} · {t.dates}</option>)}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {files.map((f, i) => {
                const trip = TRIPS.find(t => t.id === f.tripId);
                return (
                  <div key={f.id} className="rise" style={{ animationDelay: `${i * 40}ms`, display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, padding: 14, background: 'var(--bg-sunken)', borderRadius: 'var(--r-md)' }}>
                    <div style={{ aspectRatio: '1', borderRadius: 'var(--r-sm)', overflow: 'hidden', background: 'var(--cream-100)' }}>
                      <img src={f.dataUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                        <select className="field" style={{ fontSize: 13 }} value={f.tripId || ''} onChange={e => updateFile(f.id, { tripId: e.target.value })}>
                          <option value="">Quale viaggio?</option>
                          {TRIPS.map(t => <option key={t.id} value={t.id}>{t.country} · {t.title}</option>)}
                        </select>
                        <input className="field" placeholder="Giorno o tappa (es: giorno 3, Pinhão)" value={f.dayLabel} onChange={e => updateFile(f.id, { dayLabel: e.target.value })} style={{ fontSize: 13 }} />
                      </div>
                      <div style={{ position: 'relative' }}>
                        <input className="field" placeholder="Didascalia breve (opzionale, per la polaroid)"
                          maxLength="80" value={f.caption}
                          onChange={e => updateFile(f.id, { caption: e.target.value })}
                          style={{ fontSize: 13, paddingRight: 50 }} />
                        <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-mono)', fontSize: 10, color: f.caption.length > 70 ? 'var(--clay-700)' : 'var(--fg-3)' }}>
                          {f.caption.length}/80
                        </span>
                      </div>
                      {trip && (
                        <div style={{ fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                          ✓ {trip.title.toUpperCase()} · {trip.dates}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {errors.tag && (
              <div style={{ background: '#fdf0ed', border: '1px solid #d97757', borderRadius: 'var(--r-sm)', padding: '10px 14px', marginTop: 16, fontSize: 13, color: '#a04525', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Icon name="alert-circle" size={16} style={{ flexShrink: 0, marginTop: 1 }} />
                <div>{errors.tag}</div>
              </div>
            )}
          </div>
        )}

        {/* STEP 4 — Story */}
        {step === 4 && (
          <div className="page-enter">
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 38, margin: '12px 0 8px' }}>Una cosa che ricordi.</h2>
            <p style={{ color: 'var(--fg-2)', fontSize: 15, margin: '0 0 24px' }}>
              Opzionale. Un paragrafo, un dettaglio, una conversazione. Se troviamo qualcosa di vero, può finire come spunto in un articolo del diario — sempre con il tuo nome.
            </p>
            <textarea className="field" rows="8" value={story} onChange={e => setStory(e.target.value)}
              placeholder="Es. il signore della tasca senza nome ci ha insegnato a fare la francesinha sbagliata. Ha detto che è meglio così…"
              style={{ fontSize: 15, lineHeight: 1.6, fontFamily: 'var(--font-body)' }} />
            <div style={{ marginTop: 20, padding: 16, background: 'var(--cream-100)', borderRadius: 'var(--r-md)', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--clay-700)', flexShrink: 0 }}>
                <Icon name="feather" size={16} />
              </div>
              <div style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.55 }}>
                Non serve scrivere bene. Ci pensiamo noi. Ci serve solo qualcosa di vero da cui partire.
              </div>
            </div>
          </div>
        )}

        {/* STEP 5 — Confirm */}
        {step === 5 && (
          <div className="page-enter">
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 38, margin: '12px 0 24px' }}>Pronta a inviarle.</h2>

            <div style={{ background: 'var(--bg-sunken)', borderRadius: 'var(--r-md)', padding: 24, marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
                <Eyebrow>RIEPILOGO</Eyebrow>
                <button onClick={() => setStep(2)} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--clay-700)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Modifica</button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {files.slice(0, 12).map(f => (
                  <div key={f.id} style={{ width: 56, height: 56, borderRadius: 4, overflow: 'hidden' }}>
                    <img src={f.dataUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
                {files.length > 12 && (
                  <div style={{ width: 56, height: 56, borderRadius: 4, background: 'var(--cream-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--fg-2)' }}>
                    +{files.length - 12}
                  </div>
                )}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, fontSize: 13, color: 'var(--fg-2)' }}>
                <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.1em' }}>FOTO</div><div style={{ marginTop: 4, fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--fg-1)' }}>{files.length}</div></div>
                <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.1em' }}>VIAGGI</div><div style={{ marginTop: 4, fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--fg-1)' }}>{new Set(files.map(f => f.tripId)).size}</div></div>
                <div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.1em' }}>STORIA</div><div style={{ marginTop: 4, fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--fg-1)' }}>{story.trim().length > 0 ? `${story.trim().split(/\s+/).length} parole` : '—'}</div></div>
              </div>
            </div>

            {!user && (
              <div style={{ marginBottom: 24 }}>
                <Eyebrow>I TUOI DATI</Eyebrow>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
                  <Field label="Nome" placeholder="Anna Rossi" value={signupName} onChange={e => setSignupName(e.target.value)} error={errors.name} />
                  <Field label="Email" type="email" placeholder="anna@esempio.it" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} error={errors.email} />
                </div>
                <p style={{ fontSize: 12, color: 'var(--fg-3)', margin: '8px 0 0' }}>Solo per dirti se le pubblichiamo. Niente newsletter automatica.</p>
              </div>
            )}

            <Eyebrow>CONSENSI</Eyebrow>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer', padding: 14, background: consent ? 'var(--forest-100)' : 'var(--bg-sunken)', borderRadius: 'var(--r-md)', border: errors.consent ? '1px solid var(--clay-600)' : '1px solid transparent', transition: 'all 200ms' }}>
                <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} style={{ marginTop: 4, accentColor: 'var(--forest-700)' }} />
                <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--fg-1)' }}>
                  <strong>Acconsento all'uso editoriale.</strong> Oops I Roamed può pubblicare le mie foto sul sito, sui social e nei materiali del diario, sempre con credito al mio nome. Mantengo i diritti d'autore.
                </div>
              </label>
              {errors.consent && <div style={{ fontSize: 12, color: 'var(--clay-700)', paddingLeft: 14 }}>{errors.consent}</div>}

              <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer', padding: 14, background: 'var(--bg-sunken)', borderRadius: 'var(--r-md)' }}>
                <input type="checkbox" checked={consentFaces} onChange={e => setConsentFaces(e.target.checked)} style={{ marginTop: 4, accentColor: 'var(--forest-700)' }} />
                <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--fg-1)' }}>
                  <strong>Le persone ritratte sono d'accordo.</strong> Se qualcuno è riconoscibile in queste foto, ho il loro consenso a pubblicarle.
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Footer azioni */}
        <div style={{ display: 'flex', gap: 8, marginTop: 36, alignItems: 'center' }}>
          <Button variant="primary" size="lg" onClick={next} loading={loading} icon={step === total ? 'send' : 'arrow-right'}>
            {step === total ? 'Invia le foto' : (step === 1 ? 'Inizia' : 'Continua')}
          </Button>
          {step === 4 && <Button variant="ghost" size="lg" onClick={() => setStep(step + 1)}>Salta</Button>}
          <div style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
            {files.length > 0 && step > 1 && step < 5 && `${files.length} FOTO PRONTE`}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============ PhotoEmailModal — conferma stile inbox ============ */
function PhotoEmailModal({ open, onClose, photoCount, userName }) {
  if (!open) return null;
  const ref = 'PHOTO-' + (Math.floor(Math.random() * 90000) + 10000);
  return (
    <div className="scrim" onClick={onClose}>
      <div className="modal" style={{ maxWidth: 640, padding: 0, overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
        <div style={{ background: 'var(--bg-sunken)', padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.05em' }}>
          <span>POSTA IN ARRIVO · UNA NUOVA EMAIL</span>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--fg-2)', display: 'flex' }}><Icon name="x" size={16} /></button>
        </div>
        <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: 999, background: 'linear-gradient(135deg, var(--clay-300), var(--forest-500))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 16 }}>OR</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Aya, dal diario <span style={{ color: 'var(--fg-3)', fontWeight: 400 }}>&lt;diario@oopsiroamed.com&gt;</span></div>
              <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 2 }}>a te · ora</div>
            </div>
            <Icon name="image" size={18} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, margin: '20px 0 0', letterSpacing: '-0.01em' }}>Grazie {userName || ''}. Le tue {photoCount} foto sono al sicuro.</h3>
        </div>
        <div style={{ padding: '24px 28px', fontSize: 15, lineHeight: 1.65, color: 'var(--fg-2)', maxHeight: 380, overflowY: 'auto' }}>
          <p style={{ margin: '0 0 16px' }}>Ciao,</p>
          <p style={{ margin: '0 0 16px' }}>abbiamo ricevuto le tue foto. Ora siedono in una cartella che apriremo a mano nei prossimi giorni — di solito ci vuole una settimana, a volte qualcosa di più se siamo in viaggio.</p>
          <div style={{ background: 'var(--bg-sunken)', borderRadius: 'var(--r-md)', padding: 16, margin: '20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 13 }}>
            <div><div style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}>RIFERIMENTO</div><div style={{ fontFamily: 'var(--font-mono)', marginTop: 4 }}>{ref}</div></div>
            <div><div style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}>FOTO</div><div style={{ marginTop: 4 }}>{photoCount}</div></div>
            <div><div style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}>STATUS</div><div style={{ marginTop: 4, color: 'var(--clay-700)' }}>● In revisione</div></div>
            <div><div style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}>RISPOSTA ENTRO</div><div style={{ marginTop: 4 }}>7 giorni</div></div>
          </div>
          <p style={{ margin: '0 0 16px' }}>Se ci sembrano in linea con il diario, te lo diciamo qui. Se finiscono nella polaroid wall di un viaggio o in un articolo, te lo diciamo qui. Se invece non funzionano, te lo diciamo lo stesso (con onestà).</p>
          <p style={{ margin: '0 0 8px' }}>In ogni caso: grazie. Le foto vere fanno il diario.</p>
          <p style={{ margin: '24px 0 4px', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--fg-1)' }}>Un abbraccio,</p>
          <p style={{ margin: 0, fontFamily: '"Caveat", cursive', fontSize: 26, color: 'var(--clay-700)' }}>Aya</p>
          <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--fg-3)' }}>Diario · Oops I Roamed</p>
        </div>
        <div style={{ padding: 16, background: 'var(--bg-sunken)', display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button variant="ghost" onClick={onClose}>Chiudi</Button>
          <Button variant="primary" icon="arrow-right" onClick={onClose}>Vedi le mie foto</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Share, PhotoEmailModal });
