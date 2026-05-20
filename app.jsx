// ─────────────────────────────────────────────────────────────────────────────
// App — orchestrator. Switches between Option A / B / C, hosts the
// option-switcher pill and the Tweaks panel, and applies tweak state to CSS vars.
// ─────────────────────────────────────────────────────────────────────────────

const ACCENTS = [
  { value: "#4a7fb8", name: "Blueprint" },   // default
  { value: "#e8a33d", name: "Amber" },
  { value: "#c8633e", name: "Copper" },
  { value: "#5e6ad2", name: "Lavender" },    // Linear original
  { value: "#5a8c6a", name: "Sage" },
  { value: "#8c8b8b", name: "Slate" },
];

const FONT_PAIRS = {
  inter:     { display: '"Inter", "SF Pro Display", -apple-system, system-ui, sans-serif',         text: '"Inter", "SF Pro Text", -apple-system, system-ui, sans-serif',     mono: '"JetBrains Mono", ui-monospace, monospace',  label: "Inter" },
  geist:     { display: '"Geist", -apple-system, system-ui, sans-serif',                            text: '"Geist", -apple-system, system-ui, sans-serif',                     mono: '"Geist Mono", ui-monospace, monospace',       label: "Geist" },
  bricolage: { display: '"Bricolage Grotesque", "Inter", system-ui, sans-serif',                    text: '"Inter", "SF Pro Text", -apple-system, system-ui, sans-serif',     mono: '"JetBrains Mono", ui-monospace, monospace',  label: "Bricolage" },
  editorial: { display: '"Instrument Serif", "Fraunces", "Times New Roman", serif',                 text: '"Inter", "SF Pro Text", -apple-system, system-ui, sans-serif',     mono: '"JetBrains Mono", ui-monospace, monospace',  label: "Editorial" },
};

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAK_DEFAULTS);
  const [page, setPage] = React.useState("home");

  // expose tweaks globally so option components can read them without prop drilling
  React.useEffect(() => { window.__tweaks = t; }, [t]);

  // ── Apply tweaks to <body> + :root ────────────────────────────────────────
  React.useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", t.theme);
    body.setAttribute("data-cta", t.ctaStyle);
    body.setAttribute("data-motion", t.motion);
    body.setAttribute("data-option", t.option);

    const r = document.documentElement.style;
    r.setProperty("--accent", t.accent);
    r.setProperty("--accent-hover", lighten(t.accent, 12));
    r.setProperty("--accent-focus", t.accent);
    r.setProperty("--on-accent", contrastFg(t.accent));
    r.setProperty("--cta-fg", contrastFg(t.accent));

    const pair = FONT_PAIRS[t.fontPair] || FONT_PAIRS.inter;
    r.setProperty("--font-display", pair.display);
    r.setProperty("--font-text", pair.text);
    r.setProperty("--font-mono", pair.mono);

    const rd = Number(t.radius) || 8;
    r.setProperty("--radius-xs", `${Math.max(2, rd * 0.5)}px`);
    r.setProperty("--radius-sm", `${Math.max(3, rd * 0.75)}px`);
    r.setProperty("--radius-md", `${rd}px`);
    r.setProperty("--radius-lg", `${rd * 1.5}px`);
    r.setProperty("--radius-xl", `${rd * 2}px`);

    r.setProperty("--space-density", String(t.spacing || 1));
    r.setProperty("--section-pad", `${Math.round(96 * (t.spacing || 1))}px`);
  }, [t]);

  // Reset to top on page or option change
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [page, t.option]);

  const onNavigate = (id) => setPage(id);

  return (
    <div className="app-root">
      <OptionSwitcher current={t.option} onChange={(v) => setTweak("option", v)} />
      {t.option === "A" && <OptionA page={page} onNavigate={onNavigate} />}
      {t.option === "B" && <OptionB page={page} onNavigate={onNavigate} />}
      {t.option === "C" && <OptionC page={page} onNavigate={onNavigate} />}
      <TweaksUI t={t} setTweak={setTweak} />
    </div>
  );
}

function OptionSwitcher({ current, onChange }) {
  const opts = [
    { id: "A", name: "Foundation", tag: "dark · dense" },
    { id: "B", name: "Daylight",   tag: "light · editorial" },
    { id: "C", name: "Atlas",      tag: "immersive · scroll" },
  ];
  return (
    <div className="opt-switcher" role="tablist" aria-label="Design option">
      {opts.map(o => (
        <button
          key={o.id}
          className={current === o.id ? "active" : ""}
          onClick={() => onChange(o.id)}
          role="tab"
          aria-selected={current === o.id}
        >
          <span>Option {o.id}</span>
          <span className="opt-tag">{o.name}</span>
        </button>
      ))}
    </div>
  );
}

function TweaksUI({ t, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Direction" />
      <TweakRadio label="Option" value={t.option} options={["A", "B", "C"]} onChange={(v) => setTweak("option", v)} />

      <TweakSection label="Theme" />
      <TweakRadio label="Mode" value={t.theme} options={["dark", "light"]} onChange={(v) => setTweak("theme", v)} />
      <TweakColor label="Accent" value={t.accent}
        options={ACCENTS.map(a => a.value)}
        onChange={(v) => setTweak("accent", v)} />

      <TweakSection label="Type" />
      <TweakSelect label="Font pair" value={t.fontPair}
        options={[
          { value: "inter", label: "Inter — Linear-faithful" },
          { value: "geist", label: "Geist — neo-grotesque" },
          { value: "bricolage", label: "Bricolage — display contrast" },
          { value: "editorial", label: "Editorial — serif display" },
        ]}
        onChange={(v) => setTweak("fontPair", v)} />

      <TweakSection label="Shape & rhythm" />
      <TweakSlider label="Corner radius" value={t.radius} min={0} max={20} step={2} unit="px"
        onChange={(v) => setTweak("radius", v)} />
      <TweakSlider label="Section spacing" value={t.spacing} min={0.5} max={1.5} step={0.1}
        onChange={(v) => setTweak("spacing", v)} />

      <TweakSection label="Layout" />
      <TweakRadio label="Hero layout" value={t.hero} options={["split", "stack", "image-first", "overlay"]} onChange={(v) => setTweak("hero", v)} />
      <TweakRadio label="Image grid" value={t.gridDensity} options={["compact", "cozy", "spacious"]} onChange={(v) => setTweak("gridDensity", v)} />

      <TweakSection label="Content" />
      <TweakToggle label="Show reviews section" value={t.showReviews} onChange={(v) => setTweak("showReviews", v)} />

      <TweakSection label="CTA & motion" />
      <TweakRadio label="CTA style" value={t.ctaStyle} options={["filled", "outline", "pill"]} onChange={(v) => setTweak("ctaStyle", v)} />
      <TweakRadio label="Animation" value={t.motion} options={["on", "off"]} onChange={(v) => setTweak("motion", v)} />
    </TweaksPanel>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function lighten(hex, percent) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  r = Math.min(255, Math.round(r + (255 - r) * percent / 100));
  g = Math.min(255, Math.round(g + (255 - g) * percent / 100));
  b = Math.min(255, Math.round(b + (255 - b) * percent / 100));
  return "#" + [r,g,b].map(x => x.toString(16).padStart(2, "0")).join("");
}

function contrastFg(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  // perceived brightness
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 165 ? "#1a1a1c" : "#ffffff";
}

// Mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
