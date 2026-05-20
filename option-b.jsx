// ─────────────────────────────────────────────────────────────────────────────
// OPTION B — "Daylight"
// Direction: editorial, light, magazine-style. Off-white warm canvas, asymmetric
// grids, mixed type, generous margins. Still rooted in the design.md type/spacing
// tokens — just lifted off the dark canvas.
// ─────────────────────────────────────────────────────────────────────────────

function OptionB({ page, onNavigate }) {
  const D = window.DCH_DATA;
  // Force light theme contextually for the duration of this option's render
  React.useEffect(() => {
    if (window.__tweaks?.option === "B" && window.__tweaks?.theme !== "light") {
      // hint only — user can override via tweaks
    }
  }, []);
  return (
    <div className="optB" data-screen-label={`B-${page}`}>
      <NavB page={page} onNavigate={onNavigate} />
      <main>
        {page === "home"      && <HomeB D={D} onNavigate={onNavigate} />}
        {page === "services"  && <ServicesB D={D} onNavigate={onNavigate} />}
        {page === "portfolio" && <PortfolioB D={D} onNavigate={onNavigate} />}
        {page === "reviews"   && <ReviewsB D={D} onNavigate={onNavigate} />}
        {page === "about"     && <AboutB D={D} onNavigate={onNavigate} />}
        {page === "faq"       && <FaqB D={D} onNavigate={onNavigate} />}
        {page === "contact"   && <ContactB D={D} onNavigate={onNavigate} />}
      </main>
      <FooterB D={D} onNavigate={onNavigate} />
    </div>
  );
}

// ── NAV ──────────────────────────────────────────────────────────────────────
function NavB({ page, onNavigate }) {
  return (
    <header className="B-nav">
      <div className="B-nav-inner">
        <div className="B-nav-left">
          <button className="B-nav-link" onClick={() => onNavigate("services")}>Services</button>
          <button className="B-nav-link" onClick={() => onNavigate("portfolio")}>Portfolio</button>
          <button className="B-nav-link" onClick={() => onNavigate("about")}>About</button>
        </div>
        <button className="B-nav-brand" onClick={() => onNavigate("home")}>
          <span className="B-brand-h">DCH</span>
          <span className="B-brand-sub">Construction · Est. 2001</span>
        </button>
        <div className="B-nav-right">
          <button className="B-nav-link" onClick={() => onNavigate("reviews")}>Reviews</button>
          <button className="B-nav-link" onClick={() => onNavigate("faq")}>FAQ</button>
          <button className="B-nav-cta" onClick={() => onNavigate("contact")}>Free estimate →</button>
        </div>
      </div>
    </header>
  );
}

// ── HOME ─────────────────────────────────────────────────────────────────────
function HomeB({ D, onNavigate }) {
  const hero = window.__tweaks?.hero || "split";
  return (
    <React.Fragment>
      {/* HERO — editorial masthead */}
      <section className="B-hero" data-hero={hero}>
        <div className="B-hero-grid">
          <div className="B-hero-meta">
            <div className="B-rule" />
            <div>
              <span className="B-meta-eyebrow">Issue Nº 26</span>
              <span className="B-meta-date">Spring 2026 · Aurora · Parker · Castle Rock</span>
            </div>
          </div>
          <h1 className="B-h1">
            <span className="B-h1-line">Your basement,</span>
            <span className="B-h1-line B-h1-italic">finished beautifully,</span>
            <span className="B-h1-line">by your neighbors.</span>
          </h1>
          <div className="B-hero-side">
            <p className="B-lead">A small, family- and veteran-owned crew finishing basements across the south Denver metro for twenty-five years. Six weeks from demo to handover. One-year written warranty. Permits pulled, every time.</p>
            <div className="B-hero-cta">
              <button className="B-btn B-btn-primary" onClick={() => onNavigate("contact")}>Request an estimate <Icon.arrow /></button>
              <button className="B-btn B-btn-link" onClick={() => onNavigate("portfolio")}>or browse the portfolio</button>
            </div>
          </div>
          <div className="B-hero-image">
            <PhotoSlot id="B-hero" label="hero — finished basement great room" radius={2} aspect="3/4" dark={false} />
          </div>
        </div>
        <div className="B-hero-strip">
          <div><strong>4.9</strong> <span>Google rating</span></div>
          <div><strong>75+ yrs</strong> <span>combined experience</span></div>
          <div><strong>6 weeks</strong> <span>typical timeline</span></div>
          <div><strong>1 yr</strong> <span>warranty</span></div>
          <div><strong>A+</strong> <span>BBB rating</span></div>
        </div>
      </section>

      {/* INTRO — single-column editorial */}
      <section className="B-section B-intro">
        <div className="B-grid-12">
          <div className="B-intro-eyebrow">A note from Trei & Sue</div>
          <p className="B-intro-body">
            We've been finishing basements in the south metro since 2001. Before that, Don was building houses in the 1970s; Sue spent two decades reading houses for what they wanted to be. <span className="B-drop-line">We started DCH</span> because we thought the work should be done one project at a time, by the same family that meets you at the door. We still believe it. Every basement we take is overseen by ownership from the first walk-through to the punch list — and we sign a one-year workmanship warranty in writing. We'd love to walk yours.
          </p>
          <div className="B-intro-sign">Donald C. Hesse III &nbsp;·&nbsp; Susan A. Hesse</div>
        </div>
      </section>

      {/* SERVICES TABLE */}
      <section className="B-section B-section-tinted">
        <div className="B-grid-12">
          <div className="B-section-head">
            <div className="B-section-no mono">§01</div>
            <h2 className="B-h2">What we build, downstairs.</h2>
            <button className="B-section-link" onClick={() => onNavigate("services")}>All seven services <Icon.arrow /></button>
          </div>
          <div className="B-svc-list">
            {D.services.slice(0, 6).map((s, i) => (
              <div key={s.id} className="B-svc-row" onClick={() => onNavigate("services")}>
                <div className="B-svc-no mono">{String(i + 1).padStart(2, "0")}</div>
                <div className="B-svc-name">{s.name}</div>
                <div className="B-svc-blurb">{s.blurb}</div>
                <div className="B-svc-time mono">{s.timeline}</div>
                <div className="B-svc-arrow"><Icon.arrow /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE PROJECT — full-bleed editorial */}
      <section className="B-section B-feature">
        <div className="B-grid-12">
          <div className="B-section-no mono">§02</div>
        </div>
        <div className="B-feature-grid">
          <div className="B-feature-text">
            <div className="B-eyebrow-small">Featured · Castle Pines, CO</div>
            <h2 className="B-h2 B-feature-h">The Walnut Hideaway.</h2>
            <p>1,850 square feet from concrete shell to handover in six weeks. Great room, full bar in walnut, three-quarter bath, and a tucked-in guest suite for the in-laws.</p>
            <ul className="B-feature-spec">
              <li><span className="mono">SQ FT</span><span>1,850</span></li>
              <li><span className="mono">DURATION</span><span>6 weeks</span></li>
              <li><span className="mono">YEAR</span><span>2025</span></li>
              <li><span className="mono">SCOPE</span><span>Great room · Wet bar · 3/4 bath · Guest suite</span></li>
            </ul>
            <button className="B-btn B-btn-link" onClick={() => onNavigate("portfolio")}>See the full portfolio <Icon.arrow /></button>
          </div>
          <div className="B-feature-image">
            <PhotoSlot id="B-feature-1" label="feature project — walnut bar, twilight" radius={2} aspect="4/5" dark={false} />
          </div>
        </div>
      </section>

      {/* PROCESS — numbered list, editorial */}
      <section className="B-section">
        <div className="B-grid-12">
          <div className="B-section-head">
            <div className="B-section-no mono">§03</div>
            <h2 className="B-h2">A predictable build, in five movements.</h2>
          </div>
          <div className="B-process">
            {D.process.map((p, i) => (
              <div key={p.n} className="B-process-card">
                <div className="B-process-n">{p.n}</div>
                <h3 className="B-process-h">{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      {window.__tweaks?.showReviews !== false && (
        <section className="B-section B-section-tinted">
          <div className="B-grid-12">
            <div className="B-section-head">
              <div className="B-section-no mono">§04</div>
              <h2 className="B-h2">What neighbors say.</h2>
              <button className="B-section-link" onClick={() => onNavigate("reviews")}>All reviews <Icon.arrow /></button>
            </div>
            <div className="B-pullquote">
              <div className="B-pullquote-mark">"</div>
              <blockquote>{D.reviews[0].quote}</blockquote>
              <div className="B-pullquote-author"><strong>{D.reviews[0].name}</strong> · {D.reviews[0].town}</div>
            </div>
            <div className="B-review-grid">
              {D.reviews.slice(1, 5).map((r, i) => <ReviewCardB key={i} r={r} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <CtaBannerB onNavigate={onNavigate} />
    </React.Fragment>
  );
}

function ReviewCardB({ r }) {
  return (
    <article className="B-review-card">
      <StarRow color="var(--accent)" />
      <blockquote>"{r.quote}"</blockquote>
      <footer>
        <strong>{r.name}</strong>
        <span>{r.town} · {r.source}</span>
      </footer>
    </article>
  );
}

function CtaBannerB({ onNavigate }) {
  return (
    <section className="B-section">
      <div className="B-grid-12">
        <div className="B-cta-banner">
          <div className="B-cta-meta">
            <div className="B-rule" />
            <span className="mono">FOR THE NEXT STEP</span>
          </div>
          <h2 className="B-h2 B-cta-h">Tell us about your basement.</h2>
          <p>One walk-through. One written quote. No high-pressure pitch. We'll be at your door within the week.</p>
          <div className="B-cta-actions">
            <button className="B-btn B-btn-primary" onClick={() => onNavigate("contact")}>Request a free estimate <Icon.arrow /></button>
            <a href="tel:3035550167" className="B-btn B-btn-secondary"><Icon.phone /> (303) 555-0167</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SERVICES PAGE ────────────────────────────────────────────────────────────
function ServicesB({ D, onNavigate }) {
  return (
    <React.Fragment>
      <section className="B-page-hero">
        <div className="B-grid-12">
          <div className="B-page-meta mono">§ SERVICES · 2026</div>
          <h1 className="B-h1-page">Everything below<br/>the first floor.</h1>
          <p className="B-lead B-lead-wide">Basements are the speciality. Bars, theaters, baths, suites, gyms, and offices are how we use them. Every project is permitted, every crew is licensed, and a one-year workmanship warranty is signed on the day we hand it back.</p>
        </div>
      </section>
      <section className="B-section">
        <div className="B-grid-12 B-services-page">
          {D.services.map((s, i) => (
            <article key={s.id} className="B-svc-page-row">
              <div className="B-svc-page-image">
                <PhotoSlot id={`B-svc-${s.id}`} label={s.placeholder} radius={2} aspect="5/4" dark={false} />
              </div>
              <div className="B-svc-page-text">
                <div className="B-svc-page-no mono">{s.eyebrow}</div>
                <h2 className="B-h3">{s.name}</h2>
                <p>{s.blurb}</p>
                <ul className="B-svc-page-list">
                  {s.includes.map(i => <li key={i}><Icon.check /> {i}</li>)}
                </ul>
                <div className="B-svc-page-foot mono">Typical timeline · {s.timeline}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBannerB onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── PORTFOLIO ────────────────────────────────────────────────────────────────
function PortfolioB({ D, onNavigate }) {
  const density = window.__tweaks?.gridDensity || "regular";
  return (
    <React.Fragment>
      <section className="B-page-hero">
        <div className="B-grid-12">
          <div className="B-page-meta mono">§ PORTFOLIO · 2024–2025</div>
          <h1 className="B-h1-page">Six recent basements,<br/>across six towns.</h1>
          <p className="B-lead B-lead-wide">Each one started as a cold concrete shell. Six weeks later, every one of them was the most-used room in the house.</p>
        </div>
      </section>
      <section className="B-section">
        <div className={`B-portfolio B-portfolio--${density}`}>
          {D.projects.map((p, i) => (
            <article key={p.id} className={`B-portfolio-item B-portfolio-item--${i % 3}`}>
              <PhotoSlot id={`B-port-${p.id}`} label={p.placeholder} radius={2} aspect={i % 3 === 0 ? "4/5" : i % 3 === 1 ? "5/4" : "1/1"} dark={false} />
              <div className="B-portfolio-caption">
                <div className="B-portfolio-row">
                  <span className="B-portfolio-no mono">P–{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="B-h3-small">{p.name}</h3>
                </div>
                <p>{p.blurb}</p>
                <div className="B-portfolio-meta mono">
                  <span>{p.town}</span><span>·</span><span>{p.sqft.toLocaleString()} sq ft</span><span>·</span><span>{p.weeks} weeks</span><span>·</span><span>{p.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBannerB onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── REVIEWS ──────────────────────────────────────────────────────────────────
function ReviewsB({ D, onNavigate }) {
  return (
    <React.Fragment>
      <section className="B-page-hero">
        <div className="B-grid-12">
          <div className="B-page-meta mono">§ REVIEWS · GOOGLE + BBB</div>
          <h1 className="B-h1-page">Twenty-five years of<br/>five-star word of mouth.</h1>
          <p className="B-lead B-lead-wide">Real homeowners, south Denver metro. We've copied them verbatim — typos and all where they had them.</p>
          <div className="B-review-summary">
            <div><strong>4.9</strong><span>Google average</span></div>
            <div><strong>80+</strong><span>five-star reviews</span></div>
            <div><strong>A+</strong><span>BBB rating</span></div>
          </div>
        </div>
      </section>
      <section className="B-section">
        <div className="B-grid-12">
          <div className="B-review-grid-page">
            {D.reviews.map((r, i) => (
              <article key={i} className={`B-review-page-card ${i === 0 || i === 5 ? "is-feature" : ""}`}>
                <StarRow color="var(--accent)" />
                <blockquote>"{r.quote}"</blockquote>
                <footer>
                  <strong>{r.name}</strong>
                  <span>{r.town} · {r.source} · {r.year}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBannerB onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── ABOUT ────────────────────────────────────────────────────────────────────
function AboutB({ D, onNavigate }) {
  return (
    <React.Fragment>
      <section className="B-page-hero">
        <div className="B-grid-12">
          <div className="B-page-meta mono">§ ABOUT · A FAMILY HISTORY</div>
          <h1 className="B-h1-page">A family-run crew,<br/>since 2001.</h1>
        </div>
      </section>
      <section className="B-section">
        <div className="B-grid-12 B-about-feature">
          <div className="B-about-photo">
            <PhotoSlot id="B-about-1" label="Don + Sue Hesse · founders" radius={2} aspect="4/5" dark={false} />
            <div className="B-about-caption mono">Donald + Susan Hesse · founders</div>
          </div>
          <div className="B-about-body">
            <p className="B-dropcap"><span className="B-dropcap-letter">D</span>ch Construction was founded in 2001. Our experience in the trade reaches back to the early 1970s — Don was framing houses out of high school, Sue was selling them by the time she finished college. We've built homes, flipped them, and run government contracts. But basements, it turns out, are where everything we care about meets.</p>
            <p>They're the second house. The one your kids actually live in, the one your in-laws stay in, the one you finally get to design without resale value looking over your shoulder.</p>
            <p>For twenty-five years we've taken one basement at a time. Our ownership runs every job, end to end. We pull permits, hire only licensed sub-trades, and sign a one-year workmanship warranty in writing. The same crew that started yours will be the one to hand you the keys.</p>
            <div className="B-pull">
              <span className="B-pull-mark">"</span>
              When you hire us, you may expect to be handled with kid gloves. All jobs are overseen by our ownership, from start to finish.
            </div>
            <p>If you'd like to walk a basement with us, we'd love to come by.</p>
            <div className="B-about-sign">— Trei + Sue</div>
          </div>
        </div>
      </section>
      <section className="B-section B-section-tinted">
        <div className="B-grid-12">
          <div className="B-stats">
            {D.stats.map(s => (
              <div key={s.label}>
                <div className="B-stat-value">{s.value}</div>
                <div className="B-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBannerB onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────
function FaqB({ D, onNavigate }) {
  return (
    <React.Fragment>
      <section className="B-page-hero">
        <div className="B-grid-12">
          <div className="B-page-meta mono">§ FAQ</div>
          <h1 className="B-h1-page">Straight answers.</h1>
        </div>
      </section>
      <section className="B-section">
        <div className="B-grid-12 B-faq-page">
          {D.faqs.map((f, i) => (
            <div key={i} className="B-faq-row">
              <div className="B-faq-q">
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <span>{f.q}</span>
              </div>
              <div className="B-faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
      <CtaBannerB onNavigate={onNavigate} />
    </React.Fragment>
  );
}

// ── CONTACT ──────────────────────────────────────────────────────────────────
function ContactB({ D, onNavigate }) {
  const t = window.__tweaks || {};
  return (
    <React.Fragment>
      <section className="B-page-hero">
        <div className="B-grid-12">
          <div className="B-page-meta mono">§ ESTIMATE REQUEST</div>
          <h1 className="B-h1-page">Tell us about<br/>your basement.</h1>
          <p className="B-lead B-lead-wide">A short form, then we'll set up a walk-through within the week. No high-pressure pitch.</p>
        </div>
      </section>
      <section className="B-section">
        <div className="B-grid-12 B-contact">
          <div className="B-contact-form">
            <EstimateForm dark={false} accent="var(--accent)" ctaStyle={t.ctaStyle || "filled"} radius={t.radius || 2} />
          </div>
          <aside className="B-contact-aside">
            <div className="B-aside-block">
              <div className="B-eyebrow-small">Or reach us</div>
              <a href="tel:3035550167">(303) 555-0167</a>
              <a href="mailto:hello@dchconstructionllc.com">hello@dchconstructionllc.com</a>
            </div>
            <div className="B-aside-block">
              <div className="B-eyebrow-small">Service area</div>
              <p>{D.company.serviceArea.join(", ")}, plus the rest of Douglas, Arapahoe, and Jefferson counties.</p>
            </div>
            <div className="B-aside-block">
              <div className="B-eyebrow-small">Hours</div>
              <p>Mon–Fri · 7 a.m.–6 p.m.<br/>Saturday · by appointment</p>
            </div>
          </aside>
        </div>
      </section>
    </React.Fragment>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────────────────
function FooterB({ D, onNavigate }) {
  return (
    <footer className="B-footer">
      <div className="B-grid-12">
        <div className="B-footer-h">
          <div className="B-footer-brand">DCH Construction LLC</div>
          <div className="B-footer-sub">Basement finishing in the south Denver metro · Est. 2001</div>
        </div>
        <div className="B-footer-cols">
          <div>
            <div className="B-footer-label mono">Sitemap</div>
            {PAGES.map(p => <button key={p.id} onClick={() => onNavigate(p.id)}>{p.label}</button>)}
          </div>
          <div>
            <div className="B-footer-label mono">Service area</div>
            {D.company.serviceArea.map(t => <span key={t}>{t}, CO</span>)}
          </div>
          <div>
            <div className="B-footer-label mono">Reach us</div>
            <a href="tel:3035550167">(303) 555-0167</a>
            <a href="mailto:hello@dchconstructionllc.com">hello@dchconstructionllc.com</a>
            <div className="B-footer-badges">
              {D.company.badges.slice(0, 3).map(b => <span key={b} className="B-footer-badge">{b}</span>)}
            </div>
          </div>
        </div>
        <div className="B-footer-bottom">
          <span>© 2026 DCH Construction LLC. Licensed · Insured · BBB A+.</span>
          <span>Built for the south Denver metro, in the south Denver metro.</span>
        </div>
      </div>
    </footer>
  );
}

window.OptionB = OptionB;
