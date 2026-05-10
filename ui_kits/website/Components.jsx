/* Components.jsx — small reusable UI primitives for Oops I Roamed website kit */

const Icon = ({ name, size = 18, ...rest }) => (
  <i data-lucide={name} style={{ width: size, height: size, display: 'inline-flex', flex: 'none' }} {...rest} />
);

const Logo = ({ height = 36 }) => (
  <img src="../../assets/logo.svg" alt="Oops I Roamed" style={{ height, width: 'auto' }} />
);

const Button = ({ variant = 'primary', size, children, onClick, icon, iconPos = 'right', ...rest }) => {
  const cls = ['btn', `btn-${variant}`, size && `btn-${size}`].filter(Boolean).join(' ');
  return (
    <button className={cls} onClick={onClick} {...rest}>
      {icon && iconPos === 'left' && <Icon name={icon} size={16} />}
      {children}
      {icon && iconPos === 'right' && <Icon name={icon} size={16} />}
    </button>
  );
};

const Badge = ({ kind = 'soft', children }) => (
  <span className={`badge badge-${kind}`}>{children}</span>
);

const Eyebrow = ({ children }) => <div className="eyebrow">{children}</div>;
const Meta = ({ children }) => <div className="meta">{children}</div>;

const Chip = ({ active, onClick, children, icon }) => (
  <button className={`chip ${active ? 'on' : ''}`} onClick={onClick}>
    {icon && <Icon name={icon} size={14} />}
    {children}
  </button>
);

const Field = ({ label, ...rest }) => (
  <div>
    {label && <label className="field-label">{label}</label>}
    <input className="field" {...rest} />
  </div>
);

const Header = ({ active, onNav, brand = 'forest' }) => (
  <header className="site-header">
    <div className="container site-header-inner">
      <a className="brand-link" onClick={() => onNav('home')} style={{ cursor: 'pointer' }}>
        <Logo height={32} />
      </a>
      <nav className="nav">
        <a className={active === 'home' ? 'active' : ''} onClick={() => onNav('home')}>Home</a>
        <a className={active === 'index' ? 'active' : ''} onClick={() => onNav('index')}>Destinations</a>
        <a className={active === 'trips' ? 'active' : ''} onClick={() => onNav('trips')}>Roamed Trips</a>
        <a className={active === 'article' ? 'active' : ''} onClick={() => onNav('article')}>Diary</a>
        <a className={active === 'bespoke' ? 'active' : ''} onClick={() => onNav('bespoke')}>Roam your way</a>
      </nav>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button className="btn btn-ghost btn-sm" onClick={() => onNav('search')}>
          <Icon name="search" size={16} />
        </button>
        <button className="btn btn-secondary btn-sm" onClick={() => onNav('profile')}>Sign in</button>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div>
        <Logo height={40} />
        <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, marginTop: 18, color: 'var(--cream-100)', maxWidth: 320, lineHeight: 1.4 }}>
          Travel a little. Get lost. Tell us about it.
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <a><Icon name="instagram" size={20} /></a>
          <a><Icon name="youtube" size={20} /></a>
          <a><Icon name="rss" size={20} /></a>
        </div>
      </div>
      <div>
        <h4>The blog</h4>
        <ul><li><a>Latest diaries</a></li><li><a>By country</a></li><li><a>By season</a></li><li><a>Newsletter</a></li></ul>
      </div>
      <div>
        <h4>Travel with us</h4>
        <ul><li><a>Roamed Trips</a></li><li><a>Roam your way</a></li><li><a>Group bookings</a></li><li><a>Gift a trip</a></li></ul>
      </div>
      <div>
        <h4>About</h4>
        <ul><li><a>Our story</a></li><li><a>Press</a></li><li><a>Contact</a></li><li><a>FAQ</a></li></ul>
      </div>
    </div>
    <div className="container footer-bottom">
      <div>© 2025 Oops I Roamed · Lisboa, Portugal</div>
      <div>Privacy · Terms · Cookies</div>
    </div>
  </footer>
);

const Stamp = ({ size = 80, rotate = -8 }) => (
  <img src="../../assets/stamp.svg" alt="" style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, opacity: 0.85 }} />
);

const TripCard = ({ trip, onOpen }) => (
  <article className="card cursor-pointer" onClick={onOpen}>
    <div className="card-img"><img src={trip.image} alt={trip.title} /></div>
    <div className="card-body">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <Eyebrow>{trip.kind} · {trip.country}</Eyebrow>
        {trip.status && <Badge kind={trip.status.kind}>{trip.status.label}</Badge>}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, lineHeight: 1.1, letterSpacing: '-0.015em', margin: '4px 0 12px', color: 'var(--fg-1)', fontVariationSettings: '"opsz" 48' }}>
        {trip.title}
      </h3>
      <p style={{ margin: '0 0 16px', color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.6 }}>{trip.dek}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Meta>{trip.metaLeft}</Meta>
        {trip.price && <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--fg-1)' }}>{trip.price}</div>}
      </div>
    </div>
  </article>
);

const ArticleCard = ({ article, onOpen, size = 'md' }) => (
  <article className="card cursor-pointer" onClick={onOpen}>
    <div className="card-img" style={{ aspectRatio: size === 'lg' ? '16/10' : '4/3' }}>
      <img src={article.image} alt={article.title} />
    </div>
    <div className="card-body">
      <Eyebrow>{article.eyebrow}</Eyebrow>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: size === 'lg' ? 36 : 24, lineHeight: 1.1, letterSpacing: '-0.015em', margin: '6px 0 10px', color: 'var(--fg-1)' }}>
        {article.title}
      </h3>
      {size === 'lg' && article.dek && <p style={{ margin: '0 0 14px', color: 'var(--fg-2)', fontSize: 16 }}>{article.dek}</p>}
      <Meta>{article.meta}</Meta>
    </div>
  </article>
);

Object.assign(window, { Icon, Logo, Button, Badge, Eyebrow, Meta, Chip, Field, Header, Footer, Stamp, TripCard, ArticleCard });
