// ─────────────────────────────────────────────────────────────────────────────
// OPTION C — "Atlas"
// Direction: immersive, cinematic, scroll-driven. Full-bleed hero, sticky case
// studies, horizontal scrolling portfolio, ticker-marquee reviews. Dense reading
// but theatrical pacing. Still on the same type + spacing tokens.
// ─────────────────────────────────────────────────────────────────────────────

function OptionC({ page, onNavigate }) {
  const D = window.DCH_DATA;
  return (
    <div className="optC" data-screen-label={`C-${page}`}>
      <NavC page={page} onNavigate={onNavigate} />
      <main>
        {page === "home"      && <HomeC D={D} onNavigate={onNavigate} />}
        {page === "services"  && <ServicesC D={D} onNavigate={onNavigate} />}
        {page === "portfolio" && <PortfolioC D={D} onNavigate={onNavigate} />}
        {page === "reviews"   && <ReviewsC D={D} onNavigate={onNavigate} />}
        {page === "about"     && <AboutC D={D} onNavigate={onNavigate} />}
        {page === "faq"       && <FaqC D={D} onNavigate={onNavigate} />}
        {page === "contact"   && <ContactC D={D} onNavigate={onNavigate} />}
      </main>
      <FooterC D={D} onNavigate={onNavigate} />
    </div>
  );
}

// ── NAV ─────────────────────────────────────────────────────────────────────
function NavC({ page, onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`C-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="C-nav-inner">
        <button className="C-nav-brand" onClick={() => onNavigate("home")}>
          <span className="C-brand-mark" style={{ background: "var(--accent)" }} />
          <span>DCH<i>·</i>Atlas</span>
        </button>
        <nav className="C-nav-links">
          {PAGES.filter(p => p.id !== "contact" && p.id !== "home").map(p => (
            <button key={p.id} className={`C-nav-link ${page === p.id ? "is-active" : ""}`} onClick={() => onNavigate(p.id)}>
              <span className="mono">{String(PAGES.findIndex(x => x.id === p.id)).padStart(2, "0")}</span> {p.label}
            </button>
          ))}
        </nav>
        <button className="C-nav-cta" onClick={() => onNavigate("contact")}>
          <span>Start a project</span>
          <span className="C-nav-cta-arrow"><Icon.arrow /></span>
        </button>
      </div>
    </header>
  );
}

// ── HOME ─────────────────────────────────────────────────────────────────────
function HomeC({ D, onNavigate }) {
  const heroLayout = window.__tweaks?.hero || "split";
  return (
    <React.Fragment>
      {/* CINEMATIC HERO */}
      <section className={`C-hero C-hero--${heroLayout}`}>
        <div className="C-hero-bg">
          <PhotoSlot id="C-hero" label="hero — full-bleed finished basement, cinematic" radius={0} aspect="auto" accent="var(--accent)" />
        </div>
        <div className="C-hero-overlay" />
        <div className="C-hero-content">
          <div className="C-hero-meta">
            <span className="C-pill"><span className="C-pill-dot" /> Now booking Summer 2026</span>
            <span className="C-coords mono">39.7°N · 104.9°W · Aurora · Parker · Castle Rock</span>
          </div>
          <h1 className="C-h1">
            Twenty-five years<br/>
            of basement work,<br/>
            <em>one block at a time.</em>
          </h1>
          <div className="C-hero-foot">
            <div className="C-hero-lead">
              <p>A family- and veteran-owned crew finishing basements across the south Denver metro since 2001. Six weeks of build, one year of warranty, every permit pulled.</p>
              <div className="C-hero-cta">
                <button className="C-btn C-btn-primary" onClick={() => onNavigate("contact")}>Request a free estimate <Icon.arrow /></button>
                <button className="C-btn C-btn-ghost" onClick={() => onNavigate("portfolio")}>Browse portfolio</button>
              </div>
            </div>
            <div className="C-hero-stats">
              <div><strong>25</strong><span>years in trade</span></div>
              <div><strong>4.9</strong><span>Google rating</span></div>
              <div><strong>6w</strong><span>typical build</span></div>
              <div><strong>1yr</strong><span>warranty</span></div>
            </div>
          </div>
        </div>
        <div className="C-scroll-cue">
          <span className="mono">Scroll</span>
          <span className="C-scroll-line" />
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section className="C-marquee">
        <div className="C-marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="C-marquee-content" key={i}>
              {["Aurora", "Parker", "Castle Rock", "Lone Tree", "Highlands Ranch", "Castle Pines", "Centennial", "Littleton", "Ken Caryl", "Douglas County", "Arapahoe County", "Jefferson County"].map(t => (
                <span key={t + i}><span className="C-marquee-star">✦</span> {t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 01 — Services as cinematic scroll cards */}
      <section className="C-section">
        <div className="C-container">
          <div className="C-section-head">
            <div>
              <div className="C-eyebrow mono">§ 01 — What we build</div>
              <h2 className="C-h2">Below the first floor,<br/>any way you live.</h2>
            </div>
            <button className="C-link" onClick={() => onNavigate("services")}>All services <Icon.arrow /></button>
          </div>
          <div className="C-svc-stack">
            {D.services.slice(0, 5).map((s, i) => (
              <div key={s.id} className="C-svc-stack-card" style={{ "--i": i }}>
                <div className="C-svc-stack-num mono">{String(i + 1).padStart(2, "0")} / {String(D.services.length).padStart(2, "0")}</div>
                <h3 className="C-svc-stack-h">{s.name}</h3>
                <p className="C-svc-stack-body">{s.blurb}</p>
                <div className="C-svc-stack-foot mono">{s.timeline} · {s.includes.length} subsystems</div>
                <div className="C-svc-stack-image">
                  <PhotoSlot id={`C-svc-${s.id}`} label={s.placeholder} radius={12} aspect="4/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02 — Horizontal scrolling portfolio */}
      <section className="C-section C-section-tint">
        <div className="C-container">
          <div className="C-section-head">
            <div>
              <div className="C-eyebrow mono">§ 02 — Recent work · 2024–2025</div>
              <h2 className="C-h2">A walk through<br/>six basements.</h2>
            </div>
            <button className="C-link" onClick={() => onNavigate("portfolio")}>Full portfolio <Icon.arrow /></button>
          </div>
        </div>
        <div className="C-hscroll">
          <div className="C-hscroll-track">
            {D.projects.map((p, i) => (
              <article key={p.id} className="C-hscroll-card">
                <PhotoSlot id={`C-port-${p.id}`} label={p.placeholder} radius={12} aspect="4/5" />
                <div className="C-hscroll-meta">
                  <div className="C-hscroll-row">
                    <span className="mono">P{String(i + 1).padStart(2, "0")}</span>
                    <span className="mono">{p.year}</span>
                  </div>
                  <h3 className="C-hscroll-h">{p.name}</h3>
                  <p>{p.blurb}</p>
                  <div className="C-hscroll-tags mono">
                    <span>{p.town}</span><span>·</span><span>{p.sqft.toLocaleString()} sf</span><span>·</span><span>{p.weeks}w</span>
                  </div>
                </div>
              </article>
            ))}
            <div className="C-hscroll-end">
              <button className="C-btn C-btn-ghost" onClick={() => onNavigate("portfolio")}>See all six <Icon.arrow /></button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — Process as a vertical line / timeline */}
      <section className="C-section">
        <div className="C-container">
          <div className="C-section-head">
            <div>
              <div className="C-eyebrow mono">§ 03 — How it goes</div>
              <h2 className="C-h2">Five steps,<br/>six weeks, no surprises.</h2>
            </div>
          </div>
          <ol className="C-timeline">
            {D.process.map((p, i) => (
              <li key={p.n} className="C-timeline-item">
                <div className="C-timeline-marker">
                  <span className="mono">{p.n}</span>
                </div>
                <div className="C-timeline-body">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
                <div className="C-timeline-spec mono">Week {i === 0 ? "0" : i === 1 ? "0" : `${(i - 1) * 2}-${i * 2}`}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 04 — Review marquee */}
      {window.__tweaks?.showReviews !== false && (
        <section className="C-section C-section-tint">
          <div className="C-container">
            <div className="C-section-head">
              <div>
                <div className="C-eyebrow mono">§ 04 — Word of mouth</div>
                <h2 className="C-h2">From the people<br/>across the street.</h2>
              </div>
              <button className="C-link" onClick={() => onNavigate("reviews")}>All reviews <Icon.arrow /></button>
            </div>
          </div>
          <div className="C-review-marquee">
            <div className="C-review-track">
              {[...D.reviews, ...D.reviews].map((r, i) => (
                <article key={i} className="C-review-card-c">
                  <StarRow color="var(--accent)" />
                  <blockquote>"{r.quote}"</blockquote>
                  <footer>
                    <strong>{r.name}</strong>
                    <span>{r.town} · {r.source}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 05 — CTA hero */}
      <CtaBannerC onNavigate={onNavigate} />
    </React.Fragment>
  );
}

function CtaBannerC({ onNavigate }) {
  return (
    <section className="C-cta">
      <div className="C-container">
        <div className="C-cta-grid">
          <div className="C-cta-meta mono">§ 05 — Next step</div>
          <h2 className="C-h2 C-cta-h">Let's walk the basement.</h2>
          <p>One in-person visit, one written quote, zero pitch. We'll be at your door within the week.</p>
          <div className="C-cta-actions">
            <button className="C-btn C-btn-primary" onClick={() => onNavigate("contact")}>Request a free estimate <Icon.arrow /></button>
            <a href="tel:3035550167" className="C-btn C-btn-ghost"><Icon.phone /> (303) 555-0167</a>
          </div>
          <div className="C-cta-coords mono">39.7° N · 104.9° W — south Denver metro</div>
        </div>
      </div>
    </section>
  );
}

// ── SERVICES PAGE ────────────────────────────────────────────────────────────
function ServicesC({ D, onNavigate }) {
  const [active, setActive] = React.useState(D.services[0].id);
  const activeSvc = D.services.find(s => s.id === active);
  return (
    <React.Fragment>
      <section className="C-page-hero">
        <div className="C-container">
          <div className="C-eyebrow mono">§ Services · 2026</div>
          <h1 className="C-h1-page">A toolkit for<br/>the second house.</h1>
          <p className="C-lead">Seven services, every one of them refined over twenty-five years of basement work in the south Denver metro.</p>
        </div>
      </section>
      <section className="C-section">
        <div className="C-container C-svc-page-grid">
          <aside className="C-svc-toc">
            <div className="C-eyebrow mono">Contents</div>
            <ol>
              {D.services.map((s, i) => (
                <li key={s.id} className={active === s.id ? "is-active" : ""} onClick={() => setActive(s.id)}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s.name}</span>
                </li>
              ))}
            </ol>
          </aside>
          <article className="C-svc-detail">
            <div className="C-svc-detail-image">
              <PhotoSlot id={`C-svc-page-${activeSvc.id}`} label={activeSvc.placeholder} radius={12} aspect="16/10" />
            </div>
            <div className="C-svc-detail-body">
              <div className="C-eyebrow mono">{activeSvc.eyebrow}</div>
              <h2 className="C-h2">{activeSvc.name}</h2>
              <p>{activeSvc.blurb}</p>
              <ul className="C-svc-detail-list">
                {activeSvc.includes.map(i => <li key={i}><Icon.check /> {i}</li>)}
              </ul>
              <div className="C-svc-detail-foot mono">Typical timeline · {activeSvc.timeline}</div>
            </div>
          </article>
        </div>
      </section>
      <CtaBannerC onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── PORTFOLIO ────────────────────────────────────────────────────────────────
function PortfolioC({ D, onNavigate }) {
  const density = window.__tweaks?.gridDensity || "regular";
  return (
    <React.Fragment>
      <section className="C-page-hero">
        <div className="C-container">
          <div className="C-eyebrow mono">§ Portfolio · 24 projects, six featured</div>
          <h1 className="C-h1-page">An atlas of<br/>finished basements.</h1>
          <p className="C-lead">Six recent basements, six south-metro towns. Every one from concrete to handover in six weeks.</p>
        </div>
      </section>
      <section className="C-section">
        <div className={`C-container C-portfolio-page C-portfolio-page--${density}`}>
          {D.projects.map((p, i) => (
            <article key={p.id} className="C-portfolio-page-card">
              <div className="C-portfolio-page-image">
                <PhotoSlot id={`C-pp-${p.id}`} label={p.placeholder} radius={12} aspect="16/10" />
                <div className="C-portfolio-page-tag mono">P–{String(i + 1).padStart(2, "0")} · {p.year}</div>
              </div>
              <div className="C-portfolio-page-body">
                <h3 className="C-h3">{p.name}</h3>
                <div className="C-portfolio-page-coords mono">{p.town}</div>
                <p>{p.blurb}</p>
                <div className="C-portfolio-page-spec">
                  <div><strong>{p.sqft.toLocaleString()}</strong><span>sq ft</span></div>
                  <div><strong>{p.weeks}</strong><span>weeks</span></div>
                  <div><strong>{p.year}</strong><span>delivered</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBannerC onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── REVIEWS ──────────────────────────────────────────────────────────────────
function ReviewsC({ D, onNavigate }) {
  return (
    <React.Fragment>
      <section className="C-page-hero">
        <div className="C-container">
          <div className="C-eyebrow mono">§ Reviews · Google + BBB</div>
          <h1 className="C-h1-page">Five stars,<br/>five hundred neighbors.</h1>
          <p className="C-lead">Real homeowners from across the south Denver metro. Pulled from Google and the Better Business Bureau.</p>
          <div className="C-review-summary">
            <div><strong>4.9</strong><span>Google average</span></div>
            <div><strong>80+</strong><span>five-star reviews</span></div>
            <div><strong>A+</strong><span>BBB rating</span></div>
            <div><strong>100%</strong><span>permits pulled</span></div>
          </div>
        </div>
      </section>
      <section className="C-section">
        <div className="C-container">
          <div className="C-review-wall">
            {D.reviews.map((r, i) => (
              <article key={i} className="C-review-wall-card">
                <div className="C-review-wall-head">
                  <StarRow color="var(--accent)" />
                  <span className="mono">{r.source} · {r.year}</span>
                </div>
                <blockquote>"{r.quote}"</blockquote>
                <footer>
                  <div className="C-review-wall-avatar" style={{ background: `oklch(60% 0.05 ${(r.name.charCodeAt(0) * 23) % 360})` }}>{r.name[0]}</div>
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.town}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBannerC onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────────────────
function AboutC({ D, onNavigate }) {
  return (
    <React.Fragment>
      <section className="C-page-hero">
        <div className="C-container">
          <div className="C-eyebrow mono">§ About · Est. 2001</div>
          <h1 className="C-h1-page">Two owners.<br/>One basement at a time.</h1>
          <p className="C-lead">Donald and Susan Hesse opened DCH Construction in 2001. Twenty-five years on, the crew still answers to them — and so does every job.</p>
        </div>
      </section>
      <section className="C-section">
        <div className="C-container C-about-grid">
          <div className="C-about-photo">
            <PhotoSlot id="C-about-1" label="founders Don + Sue Hesse" radius={12} aspect="4/5" />
          </div>
          <div className="C-about-text">
            <p>Our experience in construction reaches back to the early 1970s. Over the years, we've built homes, flipped them, and run government contracts. Basement finishing has been the focus since 2001 — and ownership runs every project from first walk-through to final punch list.</p>
            <p>We're a small crew, on purpose. One basement at a time gets our attention for the six weeks it's in our care. Permits pulled, sub-trades licensed, warranty signed in writing.</p>
            <div className="C-about-values">
              <div>
                <div className="C-eyebrow mono">01</div>
                <strong>Family-run</strong>
                <p>Owners on every job, start to finish.</p>
              </div>
              <div>
                <div className="C-eyebrow mono">02</div>
                <strong>Veteran-led</strong>
                <p>Discipline, dedication, attention to detail.</p>
              </div>
              <div>
                <div className="C-eyebrow mono">03</div>
                <strong>Locally rooted</strong>
                <p>South metro Denver since 2001. We know your code office by name.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="C-section C-section-tint">
        <div className="C-container">
          <div className="C-stats-row">
            {D.stats.map(s => (
              <div key={s.label} className="C-stat-c">
                <div className="C-stat-val">{s.value}</div>
                <div className="C-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBannerC onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────
function FaqC({ D, onNavigate }) {
  const [open, setOpen] = React.useState(0);
  return (
    <React.Fragment>
      <section className="C-page-hero">
        <div className="C-container">
          <div className="C-eyebrow mono">§ FAQ</div>
          <h1 className="C-h1-page">Plain answers,<br/>no fine print.</h1>
        </div>
      </section>
      <section className="C-section">
        <div className="C-container C-faq-c">
          {D.faqs.map((f, i) => (
            <div key={i} className={`C-faq-row ${open === i ? "is-open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="C-faq-row-head">
                <span className="mono">Q{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.q}</h3>
                <span className="C-faq-chev"><Icon.arrowDown /></span>
              </div>
              <div className="C-faq-row-body">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
      <CtaBannerC onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────────────────
function ContactC({ D, onNavigate }) {
  const t = window.__tweaks || {};
  return (
    <React.Fragment>
      <section className="C-page-hero">
        <div className="C-container">
          <div className="C-eyebrow mono">§ Start a project</div>
          <h1 className="C-h1-page">Tell us about<br/>your basement.</h1>
          <p className="C-lead">A short form, then a walk-through within the week. No high-pressure pitch, no fine print.</p>
        </div>
      </section>
      <section className="C-section">
        <div className="C-container C-contact-c">
          <div className="C-contact-form">
            <EstimateForm dark={true} accent="var(--accent)" ctaStyle={t.ctaStyle || "filled"} radius={t.radius || 8} />
          </div>
          <aside className="C-contact-aside">
            <div className="C-aside-block">
              <div className="C-eyebrow mono">Direct line</div>
              <a href="tel:3035550167" className="C-aside-link"><Icon.phone /> (303) 555-0167</a>
              <a href="mailto:hello@dchconstructionllc.com" className="C-aside-link"><Icon.mail /> hello@dchconstructionllc.com</a>
            </div>
            <div className="C-aside-block">
              <div className="C-eyebrow mono">Service map</div>
              <p>{D.company.serviceArea.join(" · ")}, plus the rest of Douglas, Arapahoe, and Jefferson counties.</p>
              <div className="C-coord-block mono">
                <div>LAT 39.7°N</div>
                <div>LNG 104.9°W</div>
                <div>UTC −07:00</div>
              </div>
            </div>
            <div className="C-aside-block">
              <div className="C-eyebrow mono">What happens next</div>
              <ol>
                <li><span className="mono">01</span> Reply within one business day</li>
                <li><span className="mono">02</span> Schedule the walk-through</li>
                <li><span className="mono">03</span> Written quote, no soft numbers</li>
                <li><span className="mono">04</span> Sign and start within 4 weeks</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </React.Fragment>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────────────
function FooterC({ D, onNavigate }) {
  return (
    <footer className="C-footer">
      <div className="C-container">
        <div className="C-footer-mast">
          <div className="C-footer-mark">
            <span className="C-brand-mark" style={{ background: "var(--accent)" }} />
            DCH · Atlas
          </div>
          <div className="C-footer-coords mono">39.7° N · 104.9° W — south Denver metro</div>
        </div>
        <div className="C-footer-cols">
          <div>
            <div className="C-eyebrow mono">Sitemap</div>
            {PAGES.map(p => <button key={p.id} onClick={() => onNavigate(p.id)}>{p.label}</button>)}
          </div>
          <div>
            <div className="C-eyebrow mono">Service area</div>
            {D.company.serviceArea.map(t => <span key={t}>{t}, CO</span>)}
          </div>
          <div>
            <div className="C-eyebrow mono">Contact</div>
            <a href="tel:3035550167">(303) 555-0167</a>
            <a href="mailto:hello@dchconstructionllc.com">hello@dchconstructionllc.com</a>
            <button className="C-btn C-btn-primary C-footer-cta" onClick={() => onNavigate("contact")}>Free estimate <Icon.arrow /></button>
          </div>
          <div>
            <div className="C-eyebrow mono">Credentials</div>
            {D.company.badges.map(b => <span key={b}>{b}</span>)}
          </div>
        </div>
        <div className="C-footer-bottom">
          <span>© 2026 DCH Construction LLC</span>
          <span>Licensed · Insured · A+ BBB · 1-yr workmanship warranty</span>
          <span>Built locally, in the south Denver metro.</span>
        </div>
      </div>
    </footer>
  );
}

window.OptionC = OptionC;
