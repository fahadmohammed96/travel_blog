/* prototipo components — primitives + Header/Footer */

// Map kebab-case "arrow-right" → PascalCase "ArrowRight" for lucide.icons lookup
const _toPascal = (n) => n.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('');
const _iconCache = {};
const Icon = ({ name, size = 18, style, ...rest }) => {
  const key = _toPascal(name);
  const lib = (window.lucide && window.lucide.icons) || {};
  // Pre-compute SVG once per name and cache (works whether lucide gives array of [tag,attrs] or pre-rendered string)
  if (!_iconCache[key]) {
    const def = lib[key];
    if (Array.isArray(def)) {
      const children = def.map(([tag, attrs]) =>
        `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ')}/>`
      ).join('');
      _iconCache[key] = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${children}</svg>`;
    } else {
      _iconCache[key] = '';
    }
  }
  return (
    <span
      aria-hidden="true"
      className={rest.className}
      style={{ width: size, height: size, display: 'inline-flex', flex: 'none', alignItems: 'center', justifyContent: 'center', ...style }}
      dangerouslySetInnerHTML={{ __html: _iconCache[key] }}
    />
  );
};
const Logo = ({ height = 44 }) => (
  <img src="../assets/logo.svg" alt="Oops I Roamed" style={{ height, width: 'auto' }} />
);
const Eyebrow = ({ children }) => <div className="eyebrow">{children}</div>;
const Meta = ({ children, style }) => <div className="meta" style={style}>{children}</div>;
const Badge = ({ kind = 'b-soft', children }) => <span className={`badge ${kind}`}>{children}</span>;

const Button = ({ variant = 'primary', size, children, onClick, icon, iconPos = 'right', loading, block, type, disabled }) => {
  const cls = ['btn', `btn-${variant}`, size && `btn-${size}`, block && 'btn-block'].filter(Boolean).join(' ');
  return (
    <button type={type || 'button'} className={cls} onClick={onClick} disabled={disabled || loading}>
      {loading && <span className="spin" />}
      {!loading && icon && iconPos === 'left' && <Icon name={icon} size={16} />}
      {children}
      {!loading && icon && iconPos === 'right' && <Icon name={icon} size={16} />}
    </button>
  );
};

const Chip = ({ active, onClick, children, icon }) => (
  <button className={`chip ${active ? 'on' : ''}`} onClick={onClick} type="button">
    {icon && <Icon name={icon} size={14} />}{children}
  </button>
);

const Field = ({ label, error, ...rest }) => (
  <div>
    {label && <label className="lbl">{label}</label>}
    <input className={`field ${error ? 'err' : ''}`} {...rest} />
    {error && <div className="err-msg">{error}</div>}
  </div>
);

const Toast = ({ children, icon = 'check' }) => (
  <div className="toast"><Icon name={icon} size={16} />{children}</div>
);

const NavMenu = ({ label, active, items, onNav }) => {
  const [open, setOpen] = React.useState(false);
  const [openChild, setOpenChild] = React.useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) { setOpen(false); setOpenChild(null); } };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  const closeAll = () => { setOpen(false); setOpenChild(null); };
  return (
    <div className="nav-menu" ref={ref} onMouseEnter={() => setOpen(true)} onMouseLeave={() => { setOpen(false); setOpenChild(null); }}>
      <a className={active ? 'on' : ''} onClick={() => setOpen(o => !o)}>
        {label}<Icon name="chevron-down" size={14} style={{ marginLeft: 4, transition: 'transform 160ms', transform: open ? 'rotate(180deg)' : 'none' }} />
      </a>
      {open && (
        <div className="nav-dd">
          {items.map((it, i) => {
            if (it.divider) return <div key={`d${i}`} className="nav-dd-div" />;
            if (it.children) {
              const isOpen = openChild === i;
              return (
                <div key={i} className="nav-dd-parent" onMouseEnter={() => setOpenChild(i)}>
                  <a className={'has-children' + (isOpen ? ' open' : '')}>
                    <div>
                      <span className="nav-dd-label">{it.label}</span>
                      {it.dek && <span className="nav-dd-dek">{it.dek}</span>}
                    </div>
                    <Icon name="chevron-right" size={16} className="nav-dd-chev" />
                  </a>
                  {isOpen && (
                    <div className="nav-dd-flyout">
                      {it.children.map((c, j) => (
                        <a key={j} onClick={() => { closeAll(); onNav(c.route, c.params); }}>
                          <span className="nav-dd-label">{c.label}</span>
                          {c.dek && <span className="nav-dd-dek">{c.dek}</span>}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a key={i} className={it.sub ? 'sub' : ''} onClick={() => { closeAll(); onNav(it.route, it.params); }}>
                <span className="nav-dd-label">{it.label}</span>
                {it.dek && <span className="nav-dd-dek">{it.dek}</span>}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Header = ({ active, onNav, user }) => {
  const inViaggi = ['trips', 'bespoke', 'groups', 'gift'].includes(active);
  const inDiario = ['diary', 'article', 'countries', 'seasons'].includes(active);
  const inChi = ['story', 'press', 'contact', 'faq'].includes(active);
  return (
  <header className="hdr">
    <div className="container hdr-in">
      <div className="brand" onClick={() => onNav('home')}><Logo /></div>
      <nav className="nav">
        <a className={active === 'home' ? 'on' : ''} onClick={() => onNav('home')}>Home</a>
        <NavMenu label="Viaggi" active={inViaggi} onNav={onNav} items={[
          { label: 'Parti con noi', dek: 'I viaggi di gruppo già programmati', children: [
            { route: 'trips', label: 'Prenota un viaggio', dek: 'Vedi le partenze aperte' },
            { route: 'gift', params: { mode: 'trip' }, label: 'Regala un viaggio', dek: 'Buono regalo · qualsiasi data' },
          ]},
          { label: 'Richiedi un itinerario', dek: 'Su misura, costruito per te', children: [
            { route: 'bespoke', label: 'Crea il tuo itinerario', dek: 'Brief in 5 minuti, piano in 3 giorni' },
            { route: 'gift', params: { mode: 'itinerary' }, label: 'Regala un itinerario', dek: 'Buono regalo · su misura' },
          ]},
          { divider: true },
          { route: 'groups', label: 'Gruppi privati', dek: 'Famiglie, amici, team' },
        ]} />
        <NavMenu label="Diario" active={inDiario} onNav={onNav} items={[
          { route: 'diary', params: { tab: 'recent' }, label: 'Viaggi recenti', dek: 'Le ultime storie scritte' },
          { label: 'Mete per il mondo', dek: 'Esplora per regione o stagione', children: [
            { route: 'diary', params: { tab: 'world' }, label: 'Tutte le mete', dek: 'Mappa per continente' },
            { route: 'countries', label: 'Per paese', dek: 'Otto paesi finora' },
            { route: 'seasons', label: 'Per stagione', dek: 'Quando partire e perché' },
          ]},
        ]} />
        <a className={active === 'guide' ? 'on' : ''} onClick={() => onNav('guide')}>Guide</a>
        <a className={active === 'types' ? 'on' : ''} onClick={() => onNav('types')}>Tipi di viaggio</a>
        <a className={active === 'shop' ? 'on' : ''} onClick={() => onNav('shop')}>Shop</a>
        <NavMenu label="Chi siamo" active={inChi} onNav={onNav} items={[
          { route: 'story', label: 'La nostra storia', dek: 'Come è nato Oops I Roamed' },
          { route: 'press', label: 'Stampa', dek: 'Articoli, recensioni, premi' },
        ]} />
      </nav>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-ghost btn-sm"><Icon name="search" size={16} /></button>
        {user
          ? <div onClick={() => onNav('account')} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <div style={{ width: 32, height: 32, borderRadius: 999, background: 'linear-gradient(135deg, var(--clay-300), var(--forest-500))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 14 }}>{user.initials}</div>
              <span style={{ fontSize: 13 }}>Ciao, {user.firstName}</span>
            </div>
          : <Button variant="secondary" size="sm" onClick={() => onNav('signup')}>Accedi</Button>
        }
      </div>
    </div>
  </header>
  );
};

const Footer = () => {
  const ctx = React.useContext(AppCtx);
  const go = ctx?.go || (() => {});
  return (
  <footer className="ftr">
    <div className="container">
      <div>
        <Logo height={40} />
        <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, marginTop: 18, color: 'var(--cream-100)', maxWidth: 320, lineHeight: 1.4 }}>
          Viaggia un po'. Perditi. Raccontacelo.
        </div>
      </div>
      <div><h4>Il diario</h4><ul>
        <li><a onClick={() => go('diary', { tab: 'recent' })}>Viaggi recenti</a></li>
        <li><a onClick={() => go('diary', { tab: 'world' })}>Mete per il mondo</a></li>
        <li><a onClick={() => go('countries')}>Per paese</a></li>
        <li><a onClick={() => go('seasons')}>Per stagione</a></li>
      </ul></div>
      <div><h4>Viaggia con noi</h4><ul>
        <li><a onClick={() => go('trips')}>Parti con noi</a></li>
        <li><a onClick={() => go('bespoke')}>Richiedi un itinerario</a></li>
        <li><a onClick={() => go('groups')}>Gruppi privati</a></li>
        <li><a onClick={() => go('gift', { mode: 'trip' })}>Regala un viaggio</a></li>
        <li><a onClick={() => go('gift', { mode: 'itinerary' })}>Regala un itinerario</a></li>
      </ul></div>
      <div><h4>Risorse</h4><ul>
        <li><a onClick={() => go('guide')}>Guide pratiche</a></li>
        <li><a onClick={() => go('types')}>Tipi di viaggio</a></li>
        <li><a onClick={() => go('shop')}>Lo Shop</a></li>
        <li><a onClick={() => go('home')}>Newsletter</a></li>
      </ul></div>
      <div><h4>Chi siamo</h4><ul>
        <li><a onClick={() => go('story')}>La nostra storia</a></li>
        <li><a onClick={() => go('press')}>Stampa</a></li>
      </ul></div>
      <div><h4>Aiuto</h4><ul>
        <li><a onClick={() => go('contact')}>Contattaci</a></li>
        <li><a onClick={() => go('faq')}>Domande frequenti</a></li>
      </ul></div>
    </div>
    <div className="container ftr-social">
      <div className="ftr-social-line">Seguici per perderti con noi</div>
      <div className="ftr-social-icons">
        <a href="#" aria-label="Instagram"><Icon name="instagram" size={20} /></a>
        <a href="#" aria-label="TikTok"><Icon name="music" size={20} /></a>
        <a href="#" aria-label="YouTube"><Icon name="youtube" size={20} /></a>
        <a href="#" aria-label="Threads"><Icon name="at-sign" size={20} /></a>
        <a href="#" aria-label="X"><Icon name="twitter" size={20} /></a>
        <a href="#" aria-label="Facebook"><Icon name="facebook" size={20} /></a>
      </div>
    </div>
    <div className="container ftr-bot"><div>© 2025 Oops I Roamed · Lisboa, Portogallo</div><div>Privacy · Termini · Cookie</div></div>
  </footer>
  );
};

const Stamp = ({ size = 100, rotate = -8 }) => (
  <img src="../assets/stamp.svg" alt="" style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, opacity: 0.85 }} />
);

const TripCard = ({ trip, onOpen, saved, onSave }) => (
  <article className={`card cardlink ${trip.soldOut ? '' : ''}`} onClick={onOpen} style={{ cursor: 'pointer', position: 'relative' }}>
    <div className="card-img"><img src={trip.image} alt={trip.title} /></div>
    {onSave && (
      <button className={`save-btn ${saved ? 'saved' : ''}`} style={{ position: 'absolute', top: 14, right: 14 }}
        onClick={(e) => { e.stopPropagation(); onSave(); }}>
        <Icon name={saved ? 'heart' : 'heart'} size={18} />
      </button>
    )}
    <div style={{ padding: '18px 20px 22px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <Eyebrow>{trip.kind} · {trip.country}</Eyebrow>
        {trip.status && <Badge kind={trip.status.kind}>{trip.status.label}</Badge>}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, lineHeight: 1.1, letterSpacing: '-0.015em', margin: '4px 0 12px' }}>
        {trip.title}
      </h3>
      <p style={{ margin: '0 0 16px', color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6 }}>{trip.dek}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Meta>{trip.dates} · {trip.nights} NOTTI</Meta>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>€{trip.price.toLocaleString('it-IT')}</div>
      </div>
    </div>
  </article>
);

const ArticleCard = ({ article, onOpen, saved, onSave, size = 'md' }) => (
  <article className="card cardlink" onClick={onOpen} style={{ cursor: 'pointer', position: 'relative' }}>
    <div className="card-img" style={{ aspectRatio: size === 'lg' ? '16/10' : '4/3' }}>
      <img src={article.image} alt={article.title} />
    </div>
    {onSave && (
      <button className={`save-btn ${saved ? 'saved' : ''}`} style={{ position: 'absolute', top: 14, right: 14 }}
        onClick={(e) => { e.stopPropagation(); onSave(); }}>
        <Icon name="heart" size={18} />
      </button>
    )}
    <div style={{ padding: '18px 20px 22px' }}>
      <Eyebrow>{article.eyebrow}</Eyebrow>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: size === 'lg' ? 32 : 22, lineHeight: 1.15, letterSpacing: '-0.015em', margin: '6px 0 10px' }}>
        {article.title}
      </h3>
      {size === 'lg' && article.dek && <p style={{ margin: '0 0 14px', color: 'var(--fg-2)', fontSize: 15 }}>{article.dek}</p>}
      <Meta>{article.meta}</Meta>
    </div>
  </article>
);

/* ============ TripMap — mappa editoriale con sagoma del paese ============ */
const TripMap = ({ tripId, compact, animate = true }) => {
  const route = ROUTES[tripId];
  if (!route) return null;
  const VW = 1000, VH = 700;
  const h = compact ? 280 : 520;

  // Calcola posizione label da labelDir
  const labelPos = (s) => {
    const d = s.labelDir || 'r';
    if (d === 'l') return { x: s.x - 26, y: s.y, anchor: 'end' };
    if (d === 'b') return { x: s.x, y: s.y + 42, anchor: 'middle' };
    return { x: s.x + 26, y: s.y, anchor: 'start' };
  };

  return (
    <div style={{ background: 'var(--cream-100)', borderRadius: 'var(--r-lg)', padding: compact ? 12 : 20, position: 'relative', overflow: 'hidden', border: '1px solid var(--cream-300)' }}>
      <svg width="100%" viewBox={`0 0 ${VW} ${VH}`} style={{ display: 'block', height: 'auto' }}>
        <defs>
          {/* sea hatching pattern */}
          <pattern id={`sea-${tripId}`} width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="var(--forest-300)" strokeWidth="0.5" opacity="0.35" />
          </pattern>
          {/* paper texture */}
          <filter id={`paper-${tripId}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" seed="3" />
            <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.18  0 0 0 0 0.12  0 0 0 0.04 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>

        {/* SEA — pattern + subtle hatch */}
        <rect width={VW} height={VH} fill={`url(#sea-${tripId})`} />

        {/* COUNTRY/REGION SILHOUETTE — paper-cut */}
        <path d={route.silhouette} fill="var(--cream-50)" stroke="var(--ink-1000)" strokeWidth="1.2" strokeLinejoin="round" opacity="0.95" />
        <path d={route.silhouette} fill="none" stroke="var(--ink-1000)" strokeWidth="0.6" strokeLinejoin="round" opacity="0.4" transform="translate(2,3)" />

        {/* RIVER (optional) */}
        {route.river && (
          <path d={route.river} fill="none" stroke="var(--forest-500)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        )}

        {/* ROUTE — dashed line */}
        <path d={route.path} fill="none" stroke="var(--clay-700)" strokeWidth="3" strokeDasharray="8 6" strokeLinecap="round"
          style={animate ? { strokeDasharray: '1500', strokeDashoffset: '1500', animation: 'drawRoute 2.4s ease-out 0.4s forwards' } : { strokeDasharray: '8 6' }} />

        {/* STOPS */}
        {route.stops.map((s, i) => {
          const lp = labelPos(s);
          return (
            <g key={i} style={animate ? { opacity: 0, animation: `popStop 320ms ease-out ${0.7 + i * 0.18}s forwards` } : {}}>
              {/* outer halo */}
              <circle cx={s.x} cy={s.y} r="18" fill="var(--cream-50)" stroke="var(--ink-1000)" strokeWidth="1.5" />
              {/* dot */}
              <circle cx={s.x} cy={s.y} r="6" fill="var(--clay-600)" />
              {/* day number */}
              <text x={s.x} y={s.y - 26} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--fg-3)" letterSpacing="0.1em">{String(s.day).padStart(2, '0')}</text>
              {/* label */}
              <text x={lp.x} y={lp.y - 2} textAnchor={lp.anchor} fontFamily="var(--font-display)" fontSize="18" fill="var(--ink-1000)" fontWeight="500" style={{ letterSpacing: '-0.01em' }}>{s.label}</text>
              {s.sub && (
                <text x={lp.x} y={lp.y + 16} textAnchor={lp.anchor} fontFamily="var(--font-mono)" fontSize="10" fill="var(--fg-3)" letterSpacing="0.05em">{s.sub.toUpperCase()}</text>
              )}
            </g>
          );
        })}

        {/* COMPASS — minimal in top-right */}
        <g transform={`translate(${VW - 70}, 60)`} opacity="0.7">
          <text textAnchor="middle" y="-22" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)" letterSpacing="0.15em">N</text>
          <line x1="0" y1="-14" x2="0" y2="14" stroke="var(--ink-1000)" strokeWidth="1" />
          <line x1="-14" y1="0" x2="14" y2="0" stroke="var(--ink-1000)" strokeWidth="0.5" opacity="0.4" />
          <path d="M 0,-14 L 4,2 L 0,0 L -4,2 Z" fill="var(--clay-700)" />
        </g>

        {/* SCALE BAR */}
        <g transform={`translate(40, ${VH - 50})`} opacity="0.5">
          <line x1="0" y1="0" x2="80" y2="0" stroke="var(--ink-1000)" strokeWidth="1.5" />
          <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--ink-1000)" strokeWidth="1.5" />
          <line x1="40" y1="-3" x2="40" y2="3" stroke="var(--ink-1000)" strokeWidth="1" />
          <line x1="80" y1="-4" x2="80" y2="4" stroke="var(--ink-1000)" strokeWidth="1.5" />
          <text x="0" y="18" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)">0</text>
          <text x="80" y="18" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)" textAnchor="end">{tripId === 'hokkaido' || tripId === 'oaxaca' ? '100 km' : '50 km'}</text>
        </g>

        {/* TITLE LABEL — bottom strip */}
        <g>
          <text x={VW / 2} y={VH - 22} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--ink-1000)" letterSpacing="0.25em" opacity="0.7">{route.title}</text>
        </g>
      </svg>
      <style>{`
        @keyframes drawRoute { from { stroke-dashoffset: 1500; } to { stroke-dashoffset: 0; } }
        @keyframes popStop { from { opacity: 0; transform: scale(0.5); transform-origin: center; } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

/* ============ Passport — collezione di timbri ============ */
const Passport = ({ savedCount, bookedCount, bespokeCount }) => {
  const total = savedCount + bookedCount + bespokeCount;
  const stamps = [
    { label: 'PORTO', sub: '·SET 25·', show: bookedCount >= 1, rotate: -8, x: 30, y: 40, color: 'var(--clay-600)' },
    { label: 'LISBOA', sub: '·AGO 25·', show: savedCount >= 1, rotate: 5, x: 180, y: 30, color: 'var(--forest-700)' },
    { label: 'KYOTO', sub: '·GIU 25·', show: savedCount >= 2, rotate: -12, x: 320, y: 60, color: 'var(--clay-700)' },
    { label: 'PUGLIA', sub: '·OTT 25·', show: bookedCount >= 2, rotate: 8, x: 80, y: 150, color: 'var(--forest-800)' },
    { label: 'OAXACA', sub: '·NOV 25·', show: savedCount >= 3 || bespokeCount >= 1, rotate: -3, x: 230, y: 160, color: 'var(--clay-800)' },
    { label: 'HOKKAIDO', sub: '·FEB 26·', show: bookedCount >= 3, rotate: 14, x: 360, y: 170, color: 'var(--forest-900)' },
  ];
  return (
    <div style={{ background: 'linear-gradient(135deg, var(--forest-900) 0%, var(--forest-800) 100%)', borderRadius: 'var(--r-lg)', padding: '28px 32px', color: 'var(--cream-50)', position: 'relative', overflow: 'hidden', minHeight: 280 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'repeating-linear-gradient(90deg, var(--clay-600) 0 8px, transparent 8px 16px)' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, position: 'relative', zIndex: 2 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.2em', color: 'var(--cream-300)' }}>PASSAPORTO DEL ROAMER</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 300, fontStyle: 'italic', marginTop: 4 }}>{total} timbri</div>
          <div style={{ fontSize: 13, color: 'var(--cream-200)', marginTop: 4 }}>Ogni save, viaggio o richiesta lascia un segno qui.</div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--cream-300)', textAlign: 'right' }}>
          <div>SAVE · {String(savedCount).padStart(2, '0')}</div>
          <div>VIAGGI · {String(bookedCount).padStart(2, '0')}</div>
          <div>SU MISURA · {String(bespokeCount).padStart(2, '0')}</div>
        </div>
      </div>
      {/* timbri sparsi */}
      <div style={{ position: 'relative', height: 220 }}>
        {stamps.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', left: s.x, top: s.y,
            opacity: s.show ? 0.85 : 0.12,
            transform: `rotate(${s.rotate}deg) scale(${s.show ? 1 : 0.85})`,
            transition: `all 600ms var(--ease-out) ${i * 80}ms`,
            border: `2px double ${s.color}`,
            color: s.show ? s.color : 'var(--cream-300)',
            padding: '6px 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            background: s.show ? 'rgba(250,246,236,0.06)' : 'transparent',
            borderRadius: 4,
          }}>
            <div>{s.label}</div>
            <div style={{ fontSize: 8, opacity: 0.7, textAlign: 'center' }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { Icon, Logo, Eyebrow, Meta, Badge, Button, Chip, Field, Toast, Header, Footer, Stamp, TripCard, ArticleCard, TripMap, Passport, MarginNote, PolaroidWall, EmailModal, RealMap });

/* ============ MarginNote — annotazioni manoscritte ============ */
function MarginNote({ children, side = 'right', rotate = -2, top = 0, color }) {
  const arrowD = side === 'right' ? 'M 38,10 Q 25,5 10,12 Q 5,14 2,18' : 'M 2,10 Q 15,5 30,12 Q 35,14 38,18';
  const tipD = side === 'right' ? 'M 8,8 L 2,18 L 14,16' : 'M 32,8 L 38,18 L 26,16';
  return (
    <aside className="rise" style={{
      position: 'absolute',
      [side]: -220, top,
      width: 200,
      transform: `rotate(${rotate}deg)`,
      fontFamily: '"Caveat", "Bradley Hand", cursive',
      fontSize: 19,
      lineHeight: 1.35,
      color: color || 'var(--clay-700)',
      opacity: 0.92,
      pointerEvents: 'none',
      zIndex: 5,
    }}>
      <svg width="40" height="20" style={{ display: 'block', marginBottom: 4, marginLeft: side === 'right' ? 0 : 'auto' }}>
        <path d={arrowD} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d={tipD} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {children}
    </aside>
  );
}

/* ============ PolaroidWall — foto dei viaggiatori ============ */
function PolaroidWall({ photos }) {
  return (
    <div style={{ position: 'relative', minHeight: 480, padding: '24px 0' }}>
      {photos.map((p, i) => (
        <figure key={i} className="rise" style={{
          position: 'absolute',
          left: p.x + '%', top: p.y,
          transform: `rotate(${p.rotate}deg)`,
          background: 'var(--cream-50)',
          padding: '12px 12px 36px',
          boxShadow: '0 14px 32px rgba(15,26,20,0.18)',
          width: p.w || 220,
          margin: 0,
          transition: 'transform 320ms var(--ease-out), box-shadow 320ms',
          animationDelay: `${i * 80}ms`,
          cursor: 'pointer',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = `rotate(0deg) scale(1.04)`; e.currentTarget.style.zIndex = 10; }}
        onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${p.rotate}deg)`; e.currentTarget.style.zIndex = 'auto'; }}>
          <img src={p.url} style={{ width: '100%', height: p.h || 200, objectFit: 'cover', display: 'block' }} />
          <figcaption style={{ marginTop: 12, fontFamily: '"Caveat", cursive', fontSize: 17, color: 'var(--ink-1000)', textAlign: 'center', lineHeight: 1.2 }}>
            {p.caption}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-3)', marginTop: 4, letterSpacing: '0.05em' }}>—{p.author.toUpperCase()}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ============ EmailModal — conferma stile inbox ============ */
function EmailModal({ open, onClose, booking, trip }) {
  if (!open) return null;
  return (
    <div className="scrim" onClick={onClose}>
      <div className="modal" style={{ maxWidth: 640, padding: 0, overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
        {/* mail header */}
        <div style={{ background: 'var(--bg-sunken)', padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.05em' }}>
          <span>POSTA IN ARRIVO · UNA NUOVA EMAIL</span>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--fg-2)', display: 'flex' }}><Icon name="x" size={16} /></button>
        </div>
        {/* mail body */}
        <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: 999, background: 'linear-gradient(135deg, var(--clay-300), var(--forest-500))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 16 }}>OR</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Oops I Roamed <span style={{ color: 'var(--fg-3)', fontWeight: 400 }}>&lt;ciao@oopsiroamed.com&gt;</span></div>
              <div style={{ fontSize: 12, color: 'var(--fg-3)', marginTop: 2 }}>a te · ora</div>
            </div>
            <Icon name="mail" size={18} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, margin: '20px 0 0', letterSpacing: '-0.01em' }}>Sei dei nostri. Ci vediamo a {trip.country.charAt(0) + trip.country.slice(1).toLowerCase()}.</h3>
        </div>
        <div style={{ padding: '24px 28px', fontSize: 15, lineHeight: 1.65, color: 'var(--fg-2)', maxHeight: 380, overflowY: 'auto' }}>
          <p style={{ margin: '0 0 16px' }}>Ciao,</p>
          <p style={{ margin: '0 0 16px' }}>è ufficiale: ti aspettiamo per <strong style={{ color: 'var(--fg-1)' }}>{trip.title}</strong>, dal <strong style={{ color: 'var(--fg-1)' }}>{trip.dates}</strong>.</p>
          <div style={{ background: 'var(--bg-sunken)', borderRadius: 'var(--r-md)', padding: 16, margin: '20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 13 }}>
            <div><div style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}>RIFERIMENTO</div><div style={{ fontFamily: 'var(--font-mono)', marginTop: 4 }}>OR-{Math.floor(Math.random() * 90000) + 10000}</div></div>
            <div><div style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}>VIAGGIATORI</div><div style={{ marginTop: 4 }}>{booking.travelers}</div></div>
            <div><div style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}>TOTALE</div><div style={{ marginTop: 4, fontFamily: 'var(--font-display)', fontSize: 18 }}>€{booking.total.toLocaleString('it-IT')}</div></div>
            <div><div style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em' }}>STATUS</div><div style={{ marginTop: 4, color: 'var(--success)' }}>● Confermato</div></div>
          </div>
          <p style={{ margin: '0 0 16px' }}>Nei prossimi giorni ti scriviamo con la lista delle cose da mettere in valigia (che nessuno legge mai), il numero della guida locale, e una piccola guida ai posti dove andremo a mangiare.</p>
          <p style={{ margin: '0 0 8px' }}>Se ti viene in mente qualsiasi cosa, rispondi a questa mail. Leggiamo davvero.</p>
          <p style={{ margin: '24px 0 4px', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--fg-1)' }}>A presto,</p>
          <p style={{ margin: 0, fontFamily: '"Caveat", cursive', fontSize: 26, color: 'var(--clay-700)' }}>Sofia</p>
          <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--fg-3)' }}>Fondatrice · Oops I Roamed</p>
        </div>
        <div style={{ padding: 16, background: 'var(--bg-sunken)', display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button variant="ghost" onClick={onClose}>Chiudi</Button>
          <Button variant="primary" icon="arrow-right" onClick={onClose}>Vai ai miei viaggi</Button>
        </div>
      </div>
    </div>
  );
}

/* ============ RealMap — Leaflet con tile chiare ============ */
function RealMap({ tripId, height = 420 }) {
  const ref = React.useRef(null);
  const route = ROUTES[tripId];
  const COORDS = {
    porto: [[41.1414, -8.6109], [41.1338, -8.6166], [41.1894, -7.5443], [41.1414, -8.6109]],
    puglia: [[41.1171, 16.8719], [40.7833, 17.2370], [40.7297, 17.5775], [40.3515, 18.1750], [40.1487, 18.4915], [40.3515, 18.1750]],
    hokkaido: [[43.0618, 141.3545], [42.8048, 140.6874], [43.1907, 140.9947], [42.4203, 141.1593], [41.7686, 140.7289]],
    oaxaca: [[17.0732, -96.7266], [17.0335, -96.5247], [16.9242, -96.3597], [16.8632, -96.2756], [17.0732, -96.7266]],
  };
  const coords = COORDS[tripId] || COORDS.porto;
  React.useEffect(() => {
    if (!ref.current || !window.L) return;
    const map = window.L.map(ref.current, { zoomControl: false, attributionControl: false, scrollWheelZoom: false }).setView(coords[0], 7);
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png', { maxZoom: 19, subdomains: 'abcd' }).addTo(map);
    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}@2x.png', { maxZoom: 19, subdomains: 'abcd', opacity: 0.7 }).addTo(map);
    // route line
    const line = window.L.polyline(coords, { color: '#a04525', weight: 3, dashArray: '6 6', opacity: 0.85, lineCap: 'round' }).addTo(map);
    // markers
    coords.forEach((c, i) => {
      const stop = route.stops[i];
      const html = `<div style="background:#fefcf6;border:1.5px solid #0f1a14;border-radius:999px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;font-family:Fraunces,serif;font-size:13px;color:#0f1a14;box-shadow:0 4px 10px rgba(0,0,0,0.18);font-weight:600">${i + 1}</div>`;
      window.L.marker(c, { icon: window.L.divIcon({ html, className: '', iconSize: [30, 30], iconAnchor: [15, 15] }) }).addTo(map)
        .bindTooltip(`<strong>${stop?.label || ''}</strong> ${stop?.sub ? '· ' + stop.sub : ''}`, { direction: 'top', offset: [0, -10], className: 'rmap-tt' });
    });
    map.fitBounds(line.getBounds(), { padding: [40, 40] });
    return () => map.remove();
  }, [tripId]);

  return (
    <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--cream-100)' }}>
      <div ref={ref} style={{ height, width: '100%' }}></div>
      <div style={{ position: 'absolute', top: 12, left: 12, background: 'var(--cream-50)', padding: '6px 10px', borderRadius: 'var(--r-sm)', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-3)', letterSpacing: '0.1em', boxShadow: 'var(--shadow-1)' }}>
        {route?.title || 'ROTTA'}
      </div>
      <div style={{ position: 'absolute', bottom: 8, right: 12, fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-3)', opacity: 0.7 }}>
        © OpenStreetMap · Carto
      </div>
    </div>
  );
}
