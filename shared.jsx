// Shared UI primitives used across all three options
// Photo placeholders, icons, small components

// ─────────────────────────────────────────────────────────────────────────────
// PhotoSlot — image placeholder using <image-slot> web component
// User can drag-and-drop a real photo onto it; persists across reloads.
// ─────────────────────────────────────────────────────────────────────────────
function PhotoSlot({ id, label, shape = "rect", radius = 12, style = {}, className = "", aspect, dark = true, accent }) {
  const bg = dark ? "#1a1d22" : "#ebe4d5";
  const stripe = dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.055)";
  const fg = dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.65)";
  const border = dark ? "#2a2d33" : "rgba(0,0,0,0.1)";
  const cssVars = {
    "--ph-bg": bg,
    "--ph-stripe": stripe,
    "--ph-fg": fg,
    "--ph-border": border,
    "--ph-accent": accent || (dark ? "#f7f8f8" : "#1a1a1c"),
  };
  const wrapStyle = { borderRadius: radius, aspectRatio: aspect, ...style, ...cssVars };
  return (
    <div className={`photoslot-wrap ${className}`} style={wrapStyle}>
      <div className="photoslot-stripes" style={{ borderRadius: radius }}>
        <div className="photoslot-meta">
          <span className="photoslot-dot" />
          <span className="photoslot-label">{label}</span>
        </div>
      </div>
      <image-slot
        id={id}
        shape={shape}
        radius={String(radius)}
        placeholder={label || ""}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Icons — simple stroke icons, kept generic so they fit all three options
// ─────────────────────────────────────────────────────────────────────────────
const Icon = {
  arrow: (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  ),
  arrowDown: (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M8 3v10M4 9l4 4 4-4" />
    </svg>
  ),
  star: (props) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" {...props}>
      <path d="M7 .8l1.9 4 4.4.6-3.2 3.1.8 4.4L7 10.8l-3.9 2.1.8-4.4L.7 5.4l4.4-.6L7 .8z" />
    </svg>
  ),
  check: (props) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M2.5 7.5l3 3 6-7" />
    </svg>
  ),
  phone: (props) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
      <path d="M2.5 3.5C2.5 2.7 3.2 2 4 2h1.4c.4 0 .8.3.9.7l.7 2.2c.1.4 0 .8-.3 1l-.9.7c.7 1.5 1.9 2.7 3.4 3.4l.7-.9c.2-.3.6-.4 1-.3l2.2.7c.4.1.7.5.7.9V11c0 .8-.7 1.5-1.5 1.5C6.6 12.5 2.5 8.4 2.5 3.5z" />
    </svg>
  ),
  mail: (props) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
      <rect x="1.5" y="3" width="11" height="8" rx="1" />
      <path d="M2 4l5 4 5-4" />
    </svg>
  ),
  menu: (props) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M2 5h14M2 9h14M2 13h14" />
    </svg>
  ),
  close: (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  ),
  google: (props) => (
    <svg width="14" height="14" viewBox="0 0 14 14" {...props}>
      <path fill="#4285F4" d="M13.7 7.1c0-.5 0-.9-.1-1.3H7v2.6h3.8c-.2.9-.7 1.7-1.5 2.2v1.8h2.5c1.4-1.3 2.2-3.2 2.2-5.3z"/>
      <path fill="#34A853" d="M7 14c2 0 3.7-.7 4.9-1.8L9.3 10c-.7.5-1.5.7-2.3.7-1.8 0-3.3-1.2-3.9-2.8H.4v1.8C1.7 12.4 4.2 14 7 14z"/>
      <path fill="#FBBC05" d="M3.1 7.9C2.9 7.3 2.9 6.7 3.1 6.1V4.3H.4c-.5 1-.8 2.2-.8 3.5 0 1.3.3 2.5.8 3.5l2.7-1.8.4-1.6z"/>
      <path fill="#EA4335" d="M7 2.8c1.1 0 2.1.4 2.8 1.1l2.1-2.1C10.7.7 8.9 0 7 0 4.2 0 1.7 1.6.4 4.3l2.7 1.8C3.7 4.5 5.2 2.8 7 2.8z"/>
    </svg>
  ),
  bbb: (props) => (
    <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
      <rect x="0" y="2" width="16" height="12" rx="2" fill="currentColor" opacity="0.2"/>
      <text x="8" y="11" textAnchor="middle" fontSize="6" fontWeight="700" fill="currentColor">BBB</text>
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// StarRow — 5 stars filled
// ─────────────────────────────────────────────────────────────────────────────
function StarRow({ count = 5, size = 14, color }) {
  return (
    <span style={{ display: "inline-flex", gap: 2, color: color || "#e8a33d" }}>
      {Array.from({ length: count }).map((_, i) => <Icon.star key={i} width={size} height={size} />)}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DCH Wordmark — real DCH Construction logo (light + dark variants)
// ─────────────────────────────────────────────────────────────────────────────
function DCHMark({ inverted = false, accent, size = 22 }) {
  // size = target HEIGHT in px. Logo aspect ratio ~2.9:1.
  const isDark = (window.__tweaks?.theme || "dark") === "dark";
  // "inverted" prop forces light-on-dark interpretation regardless of theme.
  const useDarkLogo = inverted ? false : isDark;
  const src = useDarkLogo
    ? (window.__resources?.logoDark || "logo-dark.png")
    : (window.__resources?.logoLight || "logo-light.png");
  // Bump logo height — nav reads cleaner with a slightly larger mark.
  const h = Math.round(size * 2);
  return (
    <img
      className="dch-mark"
      src={src}
      alt="DCH Construction"
      style={{ height: h, width: "auto", display: "block" }}
    />
  );
}

// Pages list — every option supports the same navigation
const PAGES = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "reviews", label: "Reviews" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Get an estimate" },
];

// ─────────────────────────────────────────────────────────────────────────────
// EstimateForm — used inside Contact page and CTA banners
// ─────────────────────────────────────────────────────────────────────────────
function EstimateForm({ dark = true, accent, ctaStyle = "filled", radius = 8, compact = false }) {
  const [state, setState] = React.useState({
    name: "", email: "", phone: "", town: "", sqft: "", scope: "Basement finishing", timeline: "", message: ""
  });
  const [sent, setSent] = React.useState(false);
  const u = (k) => (e) => setState(s => ({ ...s, [k]: e.target.value }));
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };
  if (sent) {
    return (
      <div className="ef-thanks" style={{ borderRadius: radius }}>
        <div className="ef-thanks-eyebrow">Received</div>
        <div className="ef-thanks-h">Thanks, {state.name.split(" ")[0] || "neighbor"}.</div>
        <p>We'll be in touch within one business day to schedule the walk-through. If it's urgent, give us a call at <strong>(303) 555-0167</strong>.</p>
        <button className="ef-reset" onClick={() => { setSent(false); setState({ name: "", email: "", phone: "", town: "", sqft: "", scope: "Basement finishing", timeline: "", message: "" }); }}>Submit another →</button>
      </div>
    );
  }
  const btnClass = `ef-submit ef-btn-${ctaStyle}`;
  return (
    <form className={`ef ${compact ? "ef-compact" : ""}`} onSubmit={onSubmit} style={{ "--ef-radius": `${radius}px` }}>
      <div className="ef-grid">
        <label className="ef-field"><span>Name</span>
          <input type="text" value={state.name} onChange={u("name")} placeholder="Jane Hesse" required />
        </label>
        <label className="ef-field"><span>Email</span>
          <input type="email" value={state.email} onChange={u("email")} placeholder="jane@example.com" required />
        </label>
        <label className="ef-field"><span>Phone</span>
          <input type="tel" value={state.phone} onChange={u("phone")} placeholder="(303) 555-0123" />
        </label>
        <label className="ef-field"><span>Town</span>
          <select value={state.town} onChange={u("town")}>
            <option value="">Select…</option>
            {window.DCH_DATA.company.serviceArea.map(t => <option key={t} value={t}>{t}</option>)}
            <option value="other">Other / outside south metro</option>
          </select>
        </label>
        <label className="ef-field"><span>Approx. sq ft</span>
          <input type="text" value={state.sqft} onChange={u("sqft")} placeholder="1,200" />
        </label>
        <label className="ef-field"><span>Scope</span>
          <select value={state.scope} onChange={u("scope")}>
            {window.DCH_DATA.services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            <option>Multi-room / full basement</option>
          </select>
        </label>
        <label className="ef-field"><span>Timeline</span>
          <select value={state.timeline} onChange={u("timeline")}>
            <option value="">When would you like to start?</option>
            <option>ASAP — within 30 days</option>
            <option>1–3 months out</option>
            <option>3–6 months out</option>
            <option>Just exploring</option>
          </select>
        </label>
        <label className="ef-field ef-field-wide"><span>Tell us about the space</span>
          <textarea rows="4" value={state.message} onChange={u("message")} placeholder="The basement is mostly framed, we'd like a great room, wet bar, and a guest bath." />
        </label>
      </div>
      <div className="ef-actions">
        <button type="submit" className={btnClass} style={{ background: ctaStyle === "outline" ? "transparent" : accent, color: ctaStyle === "outline" ? accent : "var(--cta-fg)", borderColor: accent, borderRadius: ctaStyle === "pill" ? 9999 : radius }}>
          Request my free estimate <Icon.arrow />
        </button>
        <div className="ef-foot">No spam. No high-pressure pitch. Just a walk-through.</div>
      </div>
    </form>
  );
}

// Export all to window so other Babel scripts can use
Object.assign(window, { PhotoSlot, Icon, StarRow, DCHMark, EstimateForm, PAGES });
