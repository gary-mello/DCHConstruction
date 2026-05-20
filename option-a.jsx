// ─────────────────────────────────────────────────────────────────────────────
// OPTION A — "Foundation"
// Direction: strict Linear-dark, blueprint accent. Dense grid, hairline rules,
// product-screenshot-style portfolio panels. Software-craft applied to a
// basement contractor.
// ─────────────────────────────────────────────────────────────────────────────

function OptionA({ page, onNavigate }) {
  const D = window.DCH_DATA;
  return (
    <div className="optA" data-screen-label={`A-${page}`}>
      <NavA page={page} onNavigate={onNavigate} />
      <main className="optA-main">
        {page === "home"      && <HomeA D={D} onNavigate={onNavigate} />}
        {page === "services"  && <ServicesA D={D} onNavigate={onNavigate} />}
        {page === "portfolio" && <PortfolioA D={D} onNavigate={onNavigate} />}
        {page === "reviews"   && <ReviewsA D={D} onNavigate={onNavigate} />}
        {page === "about"     && <AboutA D={D} onNavigate={onNavigate} />}
        {page === "faq"       && <FaqA D={D} onNavigate={onNavigate} />}
        {page === "contact"   && <ContactA D={D} onNavigate={onNavigate} />}
      </main>
      <FooterA D={D} onNavigate={onNavigate} />
    </div>
  );
}

// ── NAV ──────────────────────────────────────────────────────────────────────
function NavA({ page, onNavigate }) {
  return (
    <header className="A-nav">
      <div className="A-nav-inner">
        <button className="A-nav-brand" onClick={() => onNavigate("home")}>
          <DCHMark accent="var(--accent)" size={24} />
        </button>
        <nav className="A-nav-links">
          {PAGES.filter(p => p.id !== "contact").map(p => (
            <button key={p.id} className={`A-nav-link ${page === p.id ? "is-active" : ""}`} onClick={() => onNavigate(p.id)}>{p.label}</button>
          ))}
        </nav>
        <div className="A-nav-cta">
          <a href="tel:3035550167" className="btn btn-ghost A-phone"><Icon.phone /> (303) 555-0167</a>
          <button className="btn btn-primary" onClick={() => onNavigate("contact")}>Free estimate <Icon.arrow /></button>
        </div>
      </div>
    </header>
  );
}

// ── HOME ─────────────────────────────────────────────────────────────────────
function HomeA({ D, onNavigate }) {
  const { hero } = window.__tweaks || {};
  return (
    <React.Fragment>
      {/* HERO */}
      <section className="A-hero" data-hero={hero || "split"}>
        <div className="container A-hero-inner">
          <div className="A-hero-text">
            <div className="A-eyebrow"><span className="A-eyebrow-dot" /> Basement specialists, since 2001 · Aurora · Parker · Castle Rock</div>
            <h1 className="A-h1">Basements,<br/>engineered for<br/>the way you live.</h1>
            <p className="A-lead">Six weeks from demo to handover. A family- and veteran-owned crew that pulls every permit, runs every trade, and signs a one-year workmanship warranty.</p>
            <div className="A-hero-cta">
              <button className="btn btn-primary A-cta-big" onClick={() => onNavigate("contact")}>Request a free estimate <Icon.arrow /></button>
              <button className="btn btn-secondary A-cta-big" onClick={() => onNavigate("portfolio")}>See recent work</button>
            </div>
            <div className="A-hero-meta">
              <div><strong>4.9</strong><span><StarRow size={11} color="var(--accent)" /> 80+ Google reviews</span></div>
              <div><strong>{D.company.experience}</strong><span>across the crew</span></div>
              <div><strong>6 weeks</strong><span>typical project</span></div>
            </div>
          </div>
          <div className="A-hero-art">
            <PhotoSlot id="A-hero" label="hero — wide finished basement, twilight" radius={16} aspect="4/5" accent="var(--accent)" />
            <div className="A-hero-stickers">
              <div className="A-sticker">
                <span className="A-sticker-eyebrow">Now booking</span>
                <span className="A-sticker-h">Summer 2026 starts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="A-trust">
        <div className="container A-trust-inner">
          {D.company.badges.map(b => (
            <div key={b} className="A-trust-item">
              <span className="A-trust-dot" /> {b}
            </div>
          ))}
          <div className="A-trust-item A-trust-item--towns">
            <span className="A-trust-dot" /> {D.company.serviceArea.slice(0, 6).join(" · ")}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="A-section">
        <div className="container">
          <SectionHeadingA eyebrow="What we build" h="From a cold concrete shell to the most-used room in the house." link={{ label: "All services", to: "services" }} onNavigate={onNavigate} />
          <div className="A-service-grid">
            {D.services.slice(0, 6).map(s => <ServiceCardA key={s.id} s={s} onNavigate={onNavigate} />)}
          </div>
        </div>
      </section>

      {/* PORTFOLIO STRIP */}
      <section className="A-section A-section--panel">
        <div className="container">
          <SectionHeadingA eyebrow="Recent work" h="Six weeks. Six basements." link={{ label: "Full portfolio", to: "portfolio" }} onNavigate={onNavigate} />
          <div className="A-portfolio-grid">
            {D.projects.slice(0, 4).map(p => <ProjectCardA key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="A-section">
        <div className="container">
          <SectionHeadingA eyebrow="How it works" h="A predictable build, on a predictable timeline." />
          <div className="A-process">
            {D.process.map((p, i) => (
              <div key={p.n} className="A-process-row">
                <div className="A-process-n mono">{p.n}</div>
                <div className="A-process-title">{p.title}</div>
                <div className="A-process-body">{p.body}</div>
                <div className="A-process-bar"><div className="A-process-bar-fill" style={{ width: `${(i + 1) * 20}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      {window.__tweaks?.showReviews !== false && (
      <section className="A-section A-section--panel">
        <div className="container">
          <SectionHeadingA eyebrow="What neighbors say" h="Five-star service, the south metro over." link={{ label: "Read all reviews", to: "reviews" }} onNavigate={onNavigate} />
          <div className="A-review-grid">
            {D.reviews.slice(0, 3).map((r, i) => <ReviewCardA key={i} r={r} />)}
          </div>
        </div>
      </section>
      )}

      {/* CTA */}
      <CtaBannerA onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// Section heading helper
function SectionHeadingA({ eyebrow, h, link, onNavigate }) {
  return (
    <div className="A-section-head">
      <div>
        <div className="A-eyebrow"><span className="A-eyebrow-dot" /> {eyebrow}</div>
        <h2 className="A-h2">{h}</h2>
      </div>
      {link && (
        <button className="A-section-link" onClick={() => onNavigate(link.to)}>
          {link.label} <Icon.arrow />
        </button>
      )}
    </div>
  );
}

// Service card — Linear feature-card style
function ServiceCardA({ s, onNavigate }) {
  return (
    <article className="A-service-card" onClick={() => onNavigate && onNavigate("services")}>
      <div className="A-service-card-eyebrow mono">{s.eyebrow}</div>
      <h3 className="A-service-card-h">{s.name}</h3>
      <p className="A-service-card-body">{s.blurb}</p>
      <ul className="A-service-card-list">
        {s.includes.slice(0, 4).map(i => <li key={i}><Icon.check /> {i}</li>)}
      </ul>
      <div className="A-service-card-foot">
        <span className="mono">{s.timeline}</span>
        <Icon.arrow />
      </div>
    </article>
  );
}

// Project card — Linear product-screenshot-card style
function ProjectCardA({ p }) {
  return (
    <article className="A-project-card">
      <PhotoSlot id={`A-${p.id}`} label={p.placeholder} radius={12} aspect="4/3" />
      <div className="A-project-card-body">
        <div className="A-project-card-row">
          <h3 className="A-project-card-h">{p.name}</h3>
          <span className="mono A-project-card-year">{p.year}</span>
        </div>
        <p className="A-project-card-blurb">{p.blurb}</p>
        <div className="A-project-card-meta mono">
          <span>{p.town}</span><span>·</span><span>{p.sqft.toLocaleString()} sq ft</span><span>·</span><span>{p.weeks} wks</span>
        </div>
      </div>
    </article>
  );
}

// Review card
function ReviewCardA({ r }) {
  return (
    <article className="A-review-card">
      <div className="A-review-row">
        <StarRow color="var(--accent)" />
        <span className="A-review-source mono">{r.source} · {r.year}</span>
      </div>
      <blockquote className="A-review-quote">"{r.quote}"</blockquote>
      <div className="A-review-author">
        <div className="A-review-avatar" style={{ background: `oklch(60% 0.04 ${(r.name.charCodeAt(0) * 17) % 360})` }}>{r.name[0]}</div>
        <div>
          <div className="A-review-name">{r.name}</div>
          <div className="A-review-town caption">{r.town}</div>
        </div>
      </div>
    </article>
  );
}

// CTA banner
function CtaBannerA({ onNavigate }) {
  return (
    <section className="A-section">
      <div className="container">
        <div className="A-cta-banner">
          <div className="A-cta-banner-text">
            <h2 className="A-h2">Ready to walk the basement?</h2>
            <p>One in-person visit, one written quote, no high-pressure pitch. We'll be at your door within the week.</p>
          </div>
          <div className="A-cta-banner-actions">
            <button className="btn btn-primary A-cta-big" onClick={() => onNavigate("contact")}>Request a free estimate <Icon.arrow /></button>
            <a href="tel:3035550167" className="btn btn-secondary A-cta-big"><Icon.phone /> (303) 555-0167</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SERVICES PAGE ────────────────────────────────────────────────────────────
function ServicesA({ D, onNavigate }) {
  return (
    <React.Fragment>
      <section className="A-page-hero">
        <div className="container A-page-hero-inner">
          <div className="A-eyebrow"><span className="A-eyebrow-dot" /> Services</div>
          <h1 className="A-h1">Everything below the first floor.</h1>
          <p className="A-lead">Basements are the specialty. Bars, theaters, baths, suites, gyms, and offices are how we use them.</p>
        </div>
      </section>
      <section className="A-section">
        <div className="container">
          <div className="A-service-list">
            {D.services.map((s, i) => (
              <div key={s.id} className="A-service-row">
                <div className="A-service-row-left">
                  <div className="A-service-card-eyebrow mono">{s.eyebrow}</div>
                  <h3 className="A-h3">{s.name}</h3>
                  <p className="A-service-card-body">{s.blurb}</p>
                  <ul className="A-service-card-list A-service-card-list--wide">
                    {s.includes.map(i => <li key={i}><Icon.check /> {i}</li>)}
                  </ul>
                  <div className="A-service-row-foot mono">{s.timeline}</div>
                </div>
                <div className="A-service-row-right">
                  <PhotoSlot id={`A-svc-${s.id}`} label={s.placeholder} radius={12} aspect="5/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBannerA onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── PORTFOLIO ────────────────────────────────────────────────────────────────
function PortfolioA({ D, onNavigate }) {
  const density = window.__tweaks?.gridDensity || "regular";
  return (
    <React.Fragment>
      <section className="A-page-hero">
        <div className="container A-page-hero-inner">
          <div className="A-eyebrow"><span className="A-eyebrow-dot" /> Portfolio · 2024–2025</div>
          <h1 className="A-h1">A look at what we've shipped.</h1>
          <p className="A-lead">Six recent basements across Aurora, Parker, Castle Rock, Highlands Ranch, Castle Pines, and Lone Tree.</p>
        </div>
      </section>
      <section className="A-section">
        <div className="container">
          <div className={`A-portfolio-grid A-portfolio-grid--${density}`}>
            {D.projects.map(p => <ProjectCardA key={p.id} p={p} />)}
          </div>
        </div>
      </section>
      <CtaBannerA onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── REVIEWS ──────────────────────────────────────────────────────────────────
function ReviewsA({ D, onNavigate }) {
  return (
    <React.Fragment>
      <section className="A-page-hero">
        <div className="container A-page-hero-inner">
          <div className="A-eyebrow"><span className="A-eyebrow-dot" /> Reviews</div>
          <h1 className="A-h1">Five stars, year after year.</h1>
          <p className="A-lead">A handful of recent reviews from Google and the Better Business Bureau. All real homeowners, all south-metro Denver.</p>
          <div className="A-review-summary">
            <div><strong>4.9</strong><span>Google avg</span></div>
            <div><strong>80+</strong><span>reviews</span></div>
            <div><strong>A+</strong><span>BBB rating</span></div>
            <div><strong>100%</strong><span>permits pulled</span></div>
          </div>
        </div>
      </section>
      <section className="A-section">
        <div className="container">
          <div className="A-review-grid A-review-grid--full">
            {D.reviews.map((r, i) => <ReviewCardA key={i} r={r} />)}
          </div>
        </div>
      </section>
      <CtaBannerA onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────────────────
function AboutA({ D, onNavigate }) {
  return (
    <React.Fragment>
      <section className="A-page-hero">
        <div className="container A-page-hero-inner">
          <div className="A-eyebrow"><span className="A-eyebrow-dot" /> About</div>
          <h1 className="A-h1">A family crew with seventy-five years under the belt.</h1>
          <p className="A-lead">Donald and Susan Hesse opened DCH Construction in 2001. Twenty-five years on, basements are still what they do — and they still walk every job.</p>
        </div>
      </section>
      <section className="A-section">
        <div className="container">
          <div className="A-about-grid">
            <div className="A-about-bigphoto">
              <PhotoSlot id="A-about-1" label="Donald + Susan on a job site" radius={16} aspect="4/5" />
            </div>
            <div className="A-about-text">
              <h2 className="A-h3">Started in 2001. Still owner-run.</h2>
              <p>Our experience in construction dates back to the early 1970s. Over the years, we've built homes, flipped them, and run government contracts. Basement finishing has been the focus since 2001 — and every project is overseen by ownership, start to finish.</p>
              <p>We're a small crew on purpose. One project gets our full attention for the six weeks it's in our care. No subbing it out to a manager you've never met.</p>
              <h2 className="A-h3" style={{ marginTop: 32 }}>What you can expect.</h2>
              <ul className="A-service-card-list A-service-card-list--wide">
                <li><Icon.check /> Ownership on-site, every job</li>
                <li><Icon.check /> Licensed plumber, electrician, and HVAC sub-trades</li>
                <li><Icon.check /> Permits pulled, inspections scheduled</li>
                <li><Icon.check /> Weekly photo updates, no surprises on the invoice</li>
                <li><Icon.check /> One-year workmanship warranty in writing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="A-section A-section--panel">
        <div className="container">
          <div className="A-stats">
            {D.stats.map(s => (
              <div key={s.label} className="A-stat">
                <div className="A-stat-value">{s.value}</div>
                <div className="A-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBannerA onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────
function FaqA({ D, onNavigate }) {
  const [open, setOpen] = React.useState(0);
  return (
    <React.Fragment>
      <section className="A-page-hero">
        <div className="container A-page-hero-inner">
          <div className="A-eyebrow"><span className="A-eyebrow-dot" /> FAQ</div>
          <h1 className="A-h1">Straight answers.</h1>
          <p className="A-lead">The questions we get most, and the answers as we'd give them at a kitchen table.</p>
        </div>
      </section>
      <section className="A-section">
        <div className="container A-faq-container">
          <div className="A-faq-list">
            {D.faqs.map((f, i) => (
              <div key={i} className={`A-faq-row ${open === i ? "is-open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="A-faq-q">
                  <span className="mono A-faq-n">{String(i + 1).padStart(2, "0")}</span>
                  <span>{f.q}</span>
                  <Icon.arrowDown className="A-faq-chev" />
                </div>
                <div className="A-faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBannerA onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────────────────
function ContactA({ D, onNavigate }) {
  const t = window.__tweaks || {};
  return (
    <React.Fragment>
      <section className="A-page-hero">
        <div className="container A-page-hero-inner">
          <div className="A-eyebrow"><span className="A-eyebrow-dot" /> Get an estimate</div>
          <h1 className="A-h1">Tell us about your basement.</h1>
          <p className="A-lead">A short form, then we'll set up a walk-through within the week. No high-pressure pitch, no fine print.</p>
        </div>
      </section>
      <section className="A-section">
        <div className="container A-contact-grid">
          <div className="A-contact-form A-contact-form--featured">
            <EstimateForm dark={true} accent="var(--accent)" ctaStyle={t.ctaStyle || "filled"} radius={t.radius || 8} />
          </div>
          <aside className="A-contact-aside">
            <div className="A-aside-block">
              <div className="A-eyebrow"><span className="A-eyebrow-dot" /> Or reach us directly</div>
              <a href="tel:3035550167" className="A-aside-link"><Icon.phone /> (303) 555-0167</a>
              <a href="mailto:hello@dchconstructionllc.com" className="A-aside-link"><Icon.mail /> hello@dchconstructionllc.com</a>
            </div>
            <div className="A-aside-block">
              <div className="A-eyebrow"><span className="A-eyebrow-dot" /> Service area</div>
              <p className="A-aside-text">{D.company.serviceArea.join(" · ")}, plus the rest of Douglas, Arapahoe, and Jefferson counties.</p>
            </div>
            <div className="A-aside-block">
              <div className="A-eyebrow"><span className="A-eyebrow-dot" /> What happens next</div>
              <ol className="A-aside-steps">
                <li><span className="mono">01</span> We reply within one business day</li>
                <li><span className="mono">02</span> We schedule a walk-through</li>
                <li><span className="mono">03</span> Written quote, no soft numbers</li>
                <li><span className="mono">04</span> If you sign, we start within 4 weeks</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </React.Fragment>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────────────
function FooterA({ D, onNavigate }) {
  return (
    <footer className="A-footer">
      <div className="container A-footer-inner">
        <div className="A-footer-brand">
          <DCHMark accent="var(--accent)" size={22} />
          <p>Family- and veteran-owned basement finishing in the south Denver metro since 2001.</p>
          <div className="A-footer-badges">
            {D.company.badges.map(b => <span key={b} className="A-footer-badge mono">{b}</span>)}
          </div>
        </div>
        <div className="A-footer-col">
          <div className="A-footer-h">Sitemap</div>
          {PAGES.map(p => <button key={p.id} onClick={() => onNavigate(p.id)}>{p.label}</button>)}
        </div>
        <div className="A-footer-col">
          <div className="A-footer-h">Service area</div>
          {D.company.serviceArea.map(t => <span key={t}>{t}, CO</span>)}
        </div>
        <div className="A-footer-col">
          <div className="A-footer-h">Reach us</div>
          <a href="tel:3035550167"><Icon.phone /> (303) 555-0167</a>
          <a href="mailto:hello@dchconstructionllc.com"><Icon.mail /> hello@dchconstructionllc.com</a>
          <button className="btn btn-primary A-footer-cta" onClick={() => onNavigate("contact")}>Free estimate <Icon.arrow /></button>
        </div>
      </div>
      <div className="A-footer-bottom container">
        <span className="caption">© 2026 DCH Construction LLC. Licensed · Insured · A+ BBB.</span>
        <span className="caption">Built for the south Denver metro, in the south Denver metro.</span>
      </div>
    </footer>
  );
}

window.OptionA = OptionA;
