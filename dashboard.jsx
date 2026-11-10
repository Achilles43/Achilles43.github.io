// Dashboard Resume — the locked-in direction.
// One shared component, three premium theme variants (A1 Refined · A2 Serif Display
// · A3 Executive). Each variant configures palette, typography, and a few visual
// flourishes; the underlying layout is the same.

// ───────────────────────────── THEMES ─────────────────────────────
const THEME_A1 = {
  key: "A1",
  label: "Refined",
  tagline: "Cool dark navy with crisp jade — clean, premium fintech-y dashboard.",

  // Dark palette
  bg: "#0A0E14",
  surface: "#11161F",
  surface2: "#181E29",
  border: "#202836",
  text: "#EAEEF5",
  muted: "#7C8898",
  dim: "#4A5566",

  // Light palette
  lightBg: "#F6F7FA",
  lightSurface: "#FFFFFF",
  lightSurface2: "#EEF0F5",
  lightBorder: "#DCE0E8",
  lightText: "#0A0E14",
  lightMuted: "#5A6473",
  lightDim: "#98A0AE",

  accent: "#7CE0A8",

  display: "'Manrope', 'Noto Sans Georgian', system-ui, sans-serif",
  body: "'Manrope', 'Noto Sans Georgian', system-ui, sans-serif",
  mono: "'JetBrains Mono', 'Noto Sans Georgian', ui-monospace, monospace",
  nameItalic: false,
  serifSections: false,
};

const THEME_A2 = {
  key: "A2",
  label: "Editorial",
  tagline: "Warm dark with cream-gold accent, serif display headline — luxe + editorial.",

  bg: "#13100B",
  surface: "#1B1812",
  surface2: "#231F17",
  border: "#2E2920",
  text: "#F1EBDC",
  muted: "#8C8472",
  dim: "#534B3D",

  lightBg: "#F7F2E8",
  lightSurface: "#FFFCF3",
  lightSurface2: "#EFE9DA",
  lightBorder: "#DCD2BB",
  lightText: "#1A160F",
  lightMuted: "#6B6253",
  lightDim: "#A89E86",

  accent: "#E8B86A",

  display: "'Instrument Serif', 'Cormorant Garamond', Georgia, serif",
  body: "'Manrope', system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
  nameItalic: true,
  serifSections: true,
};

const THEME_A3 = {
  key: "A3",
  label: "Executive",
  tagline: "Deep midnight with muted gold — heavy, restrained, executive-search feel.",

  bg: "#0E1116",
  surface: "#161A21",
  surface2: "#1D222B",
  border: "#262D38",
  text: "#E6E2D7",
  muted: "#7F7A6F",
  dim: "#48443E",

  lightBg: "#EFEBE2",
  lightSurface: "#F9F6EC",
  lightSurface2: "#E5DFD0",
  lightBorder: "#CDC5B0",
  lightText: "#13110D",
  lightMuted: "#5E5949",
  lightDim: "#9F9986",

  accent: "#C9A961",

  display: "'Newsreader', 'Cormorant Garamond', Georgia, serif",
  body: "'Manrope', system-ui, sans-serif",
  mono: "'IBM Plex Mono', ui-monospace, monospace",
  nameItalic: false,
  serifSections: true,
};

const DASHBOARD_W = 920;

// ───────────────────────────── MAIN COMPONENT ─────────────────────────────
function DashboardResume({ theme, initialDark = true, dark: darkProp, setDark: setDarkProp, hideToggle = false, compact = false, onAsk, lang = "en", printMode = false, variant = "original" }) {
  const V = variant !== "original";
  const R = (window.RESUME_I18N && window.RESUME_I18N[lang]) || window.RESUME;
  const L = (window.UI_STRINGS && window.UI_STRINGS[lang]) || window.UI_STRINGS.en;
  const [darkState, setDarkState] = React.useState(initialDark);
  // Controlled or uncontrolled — allows parent to drive theme (for "Print as PDF").
  const dark = darkProp !== undefined ? darkProp : darkState;
  const setDark = setDarkProp || setDarkState;
  const [filter, setFilter] = React.useState(null);
  React.useEffect(() => { if (compact) setFilter(null); }, [compact]);

  // Pick palette by mode
  const p = dark
    ? { bg: theme.bg, surface: theme.surface, surface2: theme.surface2, border: theme.border, text: theme.text, muted: theme.muted, dim: theme.dim }
    : { bg: theme.lightBg, surface: theme.lightSurface, surface2: theme.lightSurface2, border: theme.lightBorder, text: theme.lightText, muted: theme.lightMuted, dim: theme.lightDim };

  const accent = theme.accent;
  const { display, body, mono } = theme;

  const matches = (job) => compact || !filter || job.channels.includes(filter);

  return (
    <div className="resume-root" style={{
      width: DASHBOARD_W, background: p.bg, color: p.text, fontFamily: body,
      padding: "58px 62px 62px", boxSizing: "border-box",
      fontFeatureSettings: '"ss01","cv11"',
    }}>
      {/* ────────────────────────── HEADER ────────────────────────── */}
      <Header theme={theme} p={p} dark={dark} setDark={setDark} R={R} L={L} accent={accent} display={display} mono={mono} hideToggle={hideToggle} />

      {/* Headline */}
      <p style={{
        margin: "32px 0 44px", fontSize: 20, lineHeight: 1.62, color: p.text,
        maxWidth: 740, letterSpacing: "-0.011em", fontWeight: 400,
      }}>
        {R.headline}
      </p>

      {/* ────────────────────────── KPI ROW (3 tiles) ────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 54 }}>
        {R.kpis.map((k, i) => (
          <KPITile key={i} k={k} theme={theme} p={p} accent={accent} display={display} mono={mono} />
        ))}
      </div>

      {V && !compact && <window.LogoStrip R={R} p={p} accent={accent} mono={mono} lang={lang} />}

      {/* ────────────────────────── EXPERIENCE ────────────────────────── */}
      <SectionHeader label={compact ? L.selectedExp : L.experience} right={L.rolesCount(R.experience.length)} theme={theme} p={p} mono={mono} accent={accent} />

      {!compact && !printMode && (
        <FilterChips
          channels={R.channels} filter={filter} setFilter={setFilter}
          accent={accent} p={p} mono={mono} allLabel={L.all}
        />
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: compact ? 0 : 20 }}>
        {(compact ? R.experience : R.experience).map((job) => (
          V && !compact
            ? <window.JobRowV key={job.id} job={job} active={matches(job)} accent={accent} L={L} lang={lang} variant={variant} printMode={printMode}
                theme={theme} p={p} mono={mono} display={display} />
            : <JobRow key={job.id} job={job} active={matches(job)} accent={accent} L={L}
                theme={theme} p={p} mono={mono} display={display} compact={compact} />
        ))}
      </div>

      {/* ────────────────────────── PROJECTS ────────────────────────── */}
      {!compact && (
      <div style={{ marginTop: 44 }}>
        <SectionHeader label={L.projects} right={L.brands(R.projects.length)} theme={theme} p={p} mono={mono} accent={accent} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {R.projects.map((proj) => (
            <ProjectCard key={proj.name} proj={proj} theme={theme} p={p} mono={mono}
              display={display} accent={accent} L={L} printMode={printMode} />
          ))}
        </div>
      </div>
      )}

      {variant === "results" && !compact && <window.SkillBars R={R} p={p} accent={accent} mono={mono} lang={lang} />}
      {variant === "split" && !compact && <window.SkillMatrix R={R} p={p} accent={accent} mono={mono} lang={lang} />}

      {/* ────────────────────────── STACK + SITES ────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1.45fr 1fr", gap: 22, marginTop: 44 }}>
        <div>
          <SectionHeader label={L.skills} right={L.toolsUsed} theme={theme} p={p} mono={mono} accent={accent} />
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {R.skillGroups.map((g) => (
              <div key={g.name} style={{ display: "grid", gridTemplateColumns: "148px 1fr", gap: 16, alignItems: "start" }}>
                <div style={{
                  fontFamily: theme.serifSections ? display : body,
                  fontSize: theme.serifSections ? 14 : 13,
                  fontStyle: theme.serifSections ? "italic" : "normal",
                  color: theme.serifSections ? p.text : p.text,
                  letterSpacing: "-0.008em",
                  textTransform: "none",
                  fontWeight: 700, paddingTop: 3,
                }}>
                  {g.name}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {g.items.map((s) => (
                    <span key={s} style={{
                      fontFamily: body, fontSize: 13, fontWeight: 500, padding: "6px 13px",
                      background: p.surface, border: `1px solid ${p.border}`, borderRadius: 8,
                      color: p.text, letterSpacing: "-0.005em", lineHeight: 1.2, whiteSpace: "nowrap",
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {!compact && (
        <div>
          <SectionHeader label={L.sites} right={L.sitesRight} theme={theme} p={p} mono={mono} accent={accent} />
          <p style={{
            margin: "0 0 14px", fontSize: 13.5, lineHeight: 1.55, color: p.muted,
            fontFamily: body, letterSpacing: "-0.005em",
          }}>
            {L.sitesIntro}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {R.sitesBuilt.map((s, i) => (
              <a key={s.url} href={`https://${s.url}`} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                padding: "11px 0", textDecoration: "none", cursor: "pointer",
                borderBottom: i < R.sitesBuilt.length - 1 ? `1px dashed ${p.border}` : "none",
              }}>
                <span style={{ fontFamily: body, fontSize: 15, fontWeight: 600, color: p.text, letterSpacing: "-0.01em" }}>{s.url}</span>
                <span style={{ fontFamily: body, fontSize: 12.5, fontWeight: 500, color: p.muted, letterSpacing: "-0.005em" }}>
                  {s.note}
                </span>
              </a>
            ))}
          </div>
        </div>
        )}
      </div>

      {/* ────────────────────────── MARKETS ────────────────────────── */}
      {!compact && (
      <div style={{ marginTop: 36 }}>
        <SectionHeader label={L.markets} right={L.countries} theme={theme} p={p} mono={mono} accent={accent} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {R.markets.map((m) => (
            <div key={m.code} style={{
              padding: "12px 14px", background: p.surface, border: `1px solid ${p.border}`, borderRadius: 8,
              display: "flex", alignItems: "baseline", gap: 10,
            }}>
              <span style={{
                fontFamily: theme.serifSections ? display : body,
                fontStyle: theme.serifSections ? "italic" : "normal",
                fontSize: theme.serifSections ? 18 : 16,
                color: accent, fontWeight: theme.serifSections ? 400 : 700,
                letterSpacing: "-0.01em",
              }}>{m.code}</span>
              <span style={{ fontSize: 13.5, color: p.muted, letterSpacing: "-0.005em" }}>{m.name}</span>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* ────────────────────────── EDU · CERTS · LANG ────────────────────────── */}
      {!compact && (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 36 }}>
        <div>
          <SectionHeader label={L.education} theme={theme} p={p} mono={mono} accent={accent} />
          <div style={{ padding: "10px 0" }}>
            <div style={{
              fontFamily: theme.serifSections ? display : body,
              fontSize: theme.serifSections ? 18 : 16.5,
              fontWeight: theme.serifSections ? 500 : 700,
              letterSpacing: "-0.012em", lineHeight: 1.25,
            }}>
              {R.education.degree}
            </div>
            <div style={{ fontSize: 13.5, color: p.muted, marginTop: 4 }}>{R.education.school}</div>
            <div style={{ fontFamily: body, fontSize: 12, fontWeight: 500, color: p.dim, marginTop: 7, letterSpacing: "0.01em" }}>
              {R.education.dates}
            </div>
          </div>

          <SectionHeader label={L.languages} theme={theme} p={p} mono={mono} accent={accent} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 8 }}>
            {R.languages.map((l) => (
              <div key={l.name} style={{
                display: "flex", justifyContent: "space-between", fontSize: 15,
                paddingBottom: 5, borderBottom: `1px dashed ${p.border}`,
              }}>
                <span style={{
                  fontFamily: theme.serifSections ? display : body,
                  fontSize: theme.serifSections ? 15.5 : 15,
                  fontStyle: theme.serifSections ? "italic" : "normal",
                }}>{l.name}</span>
                <span style={{ fontFamily: body, fontSize: 12.5, fontWeight: 600, color: p.muted, letterSpacing: "-0.005em" }}>{l.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader label={L.certificates} right={L.earned(R.certificates.length)} theme={theme} p={p} mono={mono} accent={accent} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {R.certificates.map((c, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12,
                padding: "8px 0", borderBottom: i < R.certificates.length - 1 ? `1px dashed ${p.border}` : "none",
              }}>
                <span style={{ fontSize: 14, letterSpacing: "-0.005em" }}>{c.name}</span>
                <span style={{ fontFamily: body, fontSize: 12, fontWeight: 600, color: p.dim, letterSpacing: "0.01em", whiteSpace: "nowrap" }}>{c.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* ────────────────────────── CONTACT FOOTER ────────────────────────── */}
      <div style={{
        marginTop: 42, paddingTop: 22, borderTop: `1px solid ${p.border}`,
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14,
      }}>
        {[
          ["Email", R.email, `mailto:${R.email}`],
          ["Phone", R.phone, `tel:${R.phone.replace(/\s/g, "")}`],
          ["LinkedIn", R.linkedin, `https://${R.linkedin}`],
          ["Based in", R.location, null],
        ].map(([label, value, href]) => (
          <div key={label}>
            <div style={{ fontFamily: body, fontSize: 10.5, fontWeight: 700, color: p.dim, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
              {L.contact[label]}
            </div>
            {href ? (
              <a
                href={href}
                target={label === "LinkedIn" ? "_blank" : undefined}
                rel={label === "LinkedIn" ? "noopener noreferrer" : undefined}
                style={{ fontSize: 13.5, color: p.text, wordBreak: "break-word", textDecoration: "none", borderBottom: `1px solid ${accent}55`, paddingBottom: 1, transition: "color 150ms ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = accent; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = p.text; }}
              >{value}</a>
            ) : (
              <div style={{ fontSize: 13.5, color: p.text, wordBreak: "break-word" }}>{value}</div>
            )}
          </div>
        ))}
      </div>

      {/* ────────────────────────── BUILT-WITH-AI ────────────────────────── */}
      <BuiltWithAI p={p} accent={accent} mono={mono} onAsk={onAsk} L={L} />
    </div>
  );
}

// ───────────────────────────── SUB-COMPONENTS ─────────────────────────────

function Header({ theme, p, dark, setDark, R, L, accent, display, mono, hideToggle }) {
  const isSerif = theme.serifSections;
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: 18 }}>
          <span style={{
            fontFamily: mono, fontSize: 10.5, letterSpacing: "0.2em",
            textTransform: "uppercase", color: p.muted,
            padding: "5px 11px", border: `1px solid ${p.border}`, borderRadius: 999,
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: accent }} />
            {L.headerBadge}
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          margin: 0, fontFamily: display,
          fontSize: isSerif ? 56 : 50,
          lineHeight: isSerif ? 0.98 : 1.02,
          letterSpacing: isSerif ? "-0.03em" : "-0.03em",
          fontWeight: isSerif ? 500 : 700,
        }}>
          {theme.nameItalic ? (
            <>
              <span>{R.name.split(" ")[0]}</span>{" "}
              <span style={{ fontStyle: "italic", color: accent }}>{R.name.split(" ").slice(1).join(" ")}</span>
            </>
          ) : (
            R.name
          )}
        </h1>

        <div style={{
          marginTop: 10, fontSize: 17, color: p.muted, letterSpacing: "-0.008em",
          display: "flex", flexWrap: "wrap", gap: 9, alignItems: "center",
        }}>
          <span>{R.title}</span>
          <span style={{ color: p.dim }}>·</span>
          <span style={{ color: accent }}>{L.headerTagline}</span>
        </div>
      </div>

      {!hideToggle && (
        <button
          onClick={() => setDark(!dark)}
          style={{
            background: p.surface, border: `1px solid ${p.border}`, color: p.text,
            fontFamily: mono, fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase",
            padding: "8px 12px", borderRadius: 8, cursor: "pointer", whiteSpace: "nowrap",
          }}
        >
          {dark ? "◐  Light" : "◑  Dark"}
        </button>
      )}
    </header>
  );
}

function KPITile({ k, theme, p, accent, display, mono }) {
  const isSerif = theme.serifSections;
  return (
    <div data-avoid-break="1" style={{
      background: p.surface, border: `1px solid ${p.border}`, borderRadius: 14,
      padding: "20px 20px 18px", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        fontFamily: mono, fontSize: 10.5, color: p.dim,
        letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 15,
      }}>
        {k.label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 11 }}>
        <span style={{
          fontFamily: isSerif ? display : "inherit",
          fontSize: isSerif ? 54 : 48,
          fontWeight: isSerif ? 500 : 600,
          letterSpacing: isSerif ? "-0.045em" : "-0.04em",
          color: p.text, lineHeight: 0.95,
        }}>
          {k.value}
        </span>
        <span style={{
          fontFamily: isSerif ? display : mono,
          fontSize: isSerif ? 22 : 17,
          fontStyle: isSerif ? "italic" : "normal",
          color: accent,
          letterSpacing: "-0.01em",
        }}>
          {k.suffix}
        </span>
      </div>
      <div style={{ fontSize: 13.5, color: p.muted, lineHeight: 1.5 }}>{k.note}</div>
    </div>
  );
}

function SectionHeader({ label, right, theme, p, mono, accent }) {
  const isSerif = theme.serifSections;
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      borderBottom: `1px solid ${p.border}`, paddingBottom: 13, marginBottom: 22, marginTop: 8,
    }}>
      <h3 style={{
        margin: 0, display: "flex", alignItems: "center", gap: 13,
        fontFamily: isSerif ? theme.display : theme.body,
        fontSize: isSerif ? 26 : 16,
        fontWeight: isSerif ? 500 : 700,
        fontStyle: isSerif ? "italic" : "normal",
        letterSpacing: isSerif ? "-0.02em" : "-0.006em",
        color: p.text,
      }}>
        {!isSerif && <span style={{ width: 20, height: 3, borderRadius: 2, background: accent, display: "inline-block" }} />}
        {label}
      </h3>
      {right && (
        <span style={{ fontFamily: mono, fontSize: 11, color: p.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {right}
        </span>
      )}
    </div>
  );
}

function FilterChips({ channels, filter, setFilter, accent, p, mono, allLabel }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      <Chip active={filter === null} onClick={() => setFilter(null)} accent={accent} p={p} mono={mono}>{allLabel || "All"}</Chip>
      {channels.map((c) => (
        <Chip key={c} active={filter === c} onClick={() => setFilter(filter === c ? null : c)} accent={accent} p={p} mono={mono}>
          {c}
        </Chip>
      ))}
    </div>
  );
}

function Chip({ children, active, onClick, accent, p, mono }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: p.body || "'Manrope', system-ui, sans-serif", fontSize: 12.5, letterSpacing: "-0.005em",
      padding: "6px 13px", borderRadius: 999, cursor: "pointer",
      background: active ? accent : p.surface,
      color: active ? "#0A0E14" : p.text,
      border: `1px solid ${active ? accent : p.border}`,
      fontWeight: active ? 700 : 500,
      transition: "all 150ms ease",
    }}>{children}</button>
  );
}

function Sparkline({ data, color, dir, w = 100, h = 22 }) {
  const min = Math.min(...data), max = Math.max(...data);
  const span = (max - min) || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - 2 - ((v - min) / span) * (h - 4);
    return [x, y];
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `0,${h} ` + line + ` ${w},${h}`;
  const gid = "sg" + Math.abs(data[0] * 31 + data.length * 7 + Math.round(w));
  const last = pts[pts.length - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ width: "100%", height: h, display: "block", overflow: "visible" }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${gid})`} />
      <polyline points={line} fill="none" stroke={color} strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      <circle cx={last[0]} cy={last[1]} r="2.1" fill={color} />
    </svg>
  );
}

function ResultsBand({ results, note, accent, p, mono, display, L, compact }) {
  if (!results || !results.length) return null;
  const cols = results.length > 4 ? 3 : results.length;
  return (
    <div data-avoid-break="1" style={{
      marginTop: compact ? 13 : 17, paddingTop: compact ? 12 : 15,
      borderTop: `1px dashed ${p.border}`,
    }}>
      <div style={{
        fontFamily: mono, fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase",
        color: p.dim, marginBottom: 10, display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ width: 5, height: 5, borderRadius: 99, background: accent, flexShrink: 0 }}></span>
        {(L && L.resultsLabel) || "Results delivered"}
      </div>
      {note && (
        <div style={{
          fontSize: 11, lineHeight: 1.45, color: p.muted, marginTop: -4, marginBottom: 11,
          letterSpacing: "-0.002em",
        }}>{note}</div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 8 }}>
        {results.map((r, i) => (
          <div key={i} style={{
            background: p.surface2, border: `1px solid ${p.border}`, borderRadius: 10,
            padding: "11px 12px 8px", display: "flex", flexDirection: "column", gap: 3, minWidth: 0,
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
              <span style={{
                fontFamily: display, fontSize: compact ? 20 : 22, fontWeight: 700,
                letterSpacing: "-0.03em", color: accent, lineHeight: 1,
              }}>{r.v}</span>
              <span style={{ fontSize: 9, color: accent, opacity: 0.7, lineHeight: 1 }}>
                {r.dir === "down" ? "\u25BC" : "\u25B2"}
              </span>
            </div>
            <div style={{
              fontFamily: mono, fontSize: 8.5, letterSpacing: "0.08em", textTransform: "uppercase",
              color: p.muted, lineHeight: 1.35, minHeight: 22,
            }}>{r.l}</div>
            <div style={{ marginTop: 1 }}>
              <Sparkline data={r.t} color={accent} dir={r.dir} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ proj, theme, p, mono, display, accent, L, printMode }) {
  const [flipped, setFlipped] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const shown = flipped || hover;
  const [face, setFace] = React.useState("front");
  const [turning, setTurning] = React.useState(false);
  const first = React.useRef(true);

  React.useEffect(() => {
    const want = shown ? "back" : "front";
    if (first.current) { first.current = false; setFace(want); return; }
    if (want === face) { setTurning(false); return; }
    setTurning(true);
    const t1 = setTimeout(() => { setFace(want); setTurning(false); }, 220);
    return () => clearTimeout(t1);
  }, [shown, face]);

  const faceBase = {
    background: p.surface, border: `1px solid ${p.border}`, borderRadius: 10,
    padding: "14px 14px 12px", display: "flex", flexDirection: "column",
    height: printMode ? "auto" : "100%", overflow: "hidden",
  };
  const backStyle = {
    ...faceBase, borderColor: accent + "55",
    background: `linear-gradient(150deg, ${accent}14, ${p.surface} 65%)`,
  };
  const toggle = () => setFlipped(f => !f);

  const Front = (
    <div className="pj-face pj-front" style={faceBase}>
      <div style={{
        fontFamily: display, fontSize: theme.serifSections ? 17 : 15,
        fontWeight: theme.serifSections ? 500 : 600,
        letterSpacing: theme.serifSections ? "-0.015em" : "-0.012em",
        color: p.text, lineHeight: 1.2,
      }}>{proj.name}</div>
      <div style={{
        marginTop: 6, fontFamily: mono, fontSize: 9.5, color: p.muted,
        letterSpacing: "0.1em", textTransform: "uppercase",
      }}>{proj.category}</div>
      {!printMode && (
        <div style={{
          marginTop: "auto", display: "flex", alignItems: "center", gap: 5,
          fontFamily: mono, fontSize: 9.5, color: accent,
          letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600,
          opacity: hover ? 1 : 0.9, transition: "opacity 200ms ease",
        }}>
          <span style={{
            width: 13, height: 13, borderRadius: 99, flexShrink: 0,
            border: `1px solid ${accent}`, display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 8, lineHeight: 1,
          }}>→</span>
          {(L && L.whatIDid) || "What I did"}
        </div>
      )}
    </div>
  );
  const Back = (
    <div className="pj-face pj-back" style={backStyle}>
      {!printMode && (
        <div style={{
          fontFamily: mono, fontSize: 8.5, letterSpacing: "0.14em", textTransform: "uppercase",
          color: accent, marginBottom: 6,
        }}>{proj.name}</div>
      )}
      <div style={{ fontSize: 11.5, lineHeight: 1.45, color: p.text, letterSpacing: "-0.004em", textWrap: "pretty" }}>
        {proj.did}
      </div>
    </div>
  );

  return (
    <div
      className={"pj-card" + (turning ? " is-turning" : "")}
      data-avoid-break="1"
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={proj.name + " — " + ((L && L.whatIDid) || "What I did")}
      onClick={toggle}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{ height: printMode ? "auto" : 124, cursor: "pointer", outlineOffset: 3 }}
    >
      <div className="pj-inner">
        {printMode ? <React.Fragment>{Front}{Back}</React.Fragment> : (face === "back" ? Back : Front)}
      </div>
    </div>
  );
}

function JobRow({ job, active, accent, theme, p, mono, display, compact = false, L }) {
  const isSerif = theme.serifSections;
  return (
    <div data-jobrow="1" style={{
      background: p.surface, border: `1px solid ${p.border}`, borderRadius: 14,
      padding: compact ? "16px 20px" : "20px 22px",
      opacity: active ? 1 : 0.16,
      filter: active ? "none" : "saturate(0.4)",
      transition: "opacity 200ms ease, filter 200ms ease",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 11, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: isSerif ? display : "inherit",
              fontSize: isSerif ? 22 : 19.5,
              fontWeight: isSerif ? 500 : 700,
              fontStyle: isSerif ? "italic" : "normal",
              letterSpacing: "-0.014em", color: p.text,
            }}>{job.role}</span>
            <span style={{ color: p.dim, fontSize: 14 }}>·</span>
            <span style={{ fontSize: 16.5, color: accent, fontWeight: 600, letterSpacing: "-0.008em" }}>{job.company}</span>
            <span style={{
              fontFamily: mono, fontSize: 10, color: p.muted, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "3px 9px",
              border: `1px solid ${p.border}`, borderRadius: 5,
            }}>{job.tag}</span>
          </div>
          {!compact && (
          <div style={{ marginTop: 7, fontSize: 14.5, color: p.muted, lineHeight: 1.5 }}>
            {job.blurb}
          </div>
          )}
        </div>
        <div style={{ fontFamily: mono, fontSize: 11, color: p.muted, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
          {job.start} → {job.end}
        </div>
      </div>

      {!compact && (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 14 }}>
        {job.channels.map((c) => (
          <span key={c} style={{
            fontFamily: mono, fontSize: 10.5, padding: "3px 9px",
            background: p.surface2, color: p.muted, borderRadius: 5,
            letterSpacing: "0.03em",
          }}>{c}</span>
        ))}
      </div>
      )}

      {!compact && (
      <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {job.bullets.map((b, i) => (
          <li key={i} style={{ fontSize: 14.5, lineHeight: 1.6, color: p.text, display: "flex", gap: 11 }}>
            <span style={{ color: accent, flexShrink: 0, fontSize: 13, lineHeight: 1.6 }}>–</span>
            <span style={{ letterSpacing: "-0.006em" }}>{b}</span>
          </li>
        ))}
      </ul>
      )}

      {!compact && (
      <ResultsBand results={job.results} note={job.resultsNote} accent={accent} p={p} mono={mono}
        display={display} L={L} compact={compact} />
      )}
    </div>
  );
}

// ───────────────────────────── BUILT-WITH-AI BADGE ─────────────────────────────
function BuiltWithAI({ p, accent, mono, onAsk, L }) {
  const t = L || (window.UI_STRINGS && window.UI_STRINGS.en);
  return (
    <div className="built-with-ai" style={{
      marginTop: 26, padding: "16px 20px", borderRadius: 14,
      border: `1px solid ${accent}44`,
      background: `linear-gradient(90deg, ${accent}12, transparent 70%)`,
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, flexWrap: "wrap",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 13, flex: 1, minWidth: 220 }}>
        <span style={{
          width: 30, height: 30, borderRadius: 9, flexShrink: 0,
          background: accent, color: "#0A0E14", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 17, fontWeight: 800,
        }}>✦</span>
        <div>
          <div style={{ fontSize: 14.5, fontWeight: 700, letterSpacing: "-0.01em", color: p.text, lineHeight: 1.3 }}>
            {t.builtTitle}
          </div>
        </div>
      </div>
      <button onClick={onAsk} className="ask-cv-launch" style={{
        fontFamily: mono, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
        padding: "9px 15px", borderRadius: 9, cursor: "pointer", whiteSpace: "nowrap",
        background: accent, color: "#0A0E14", border: "none", fontWeight: 700,
      }}>✦ {t.askBtn}</button>
    </div>
  );
}

// ───────────────────────────── ASK-MY-CV AI CHAT ─────────────────────────────
function buildResumeContext(R) {
  const exp = R.experience.map(j =>
    `• ${j.role} — ${j.company} (${j.start}–${j.end}, ${j.tag}). ${j.blurb} Channels: ${j.channels.join(", ")}. Highlights: ${j.bullets.join(" ")}` +
    (j.results ? ` Measured results: ${j.results.map(r => `${r.l} ${r.v}`).join("; ")}.` : "")
  ).join("\n");
  const skills = R.skillGroups.map(g => `${g.name}: ${g.items.join(", ")}`).join(" | ");
  const kpis = R.kpis.map(k => `${k.value}${k.suffix} ${k.label} (${k.note})`).join("; ");
  return [
    `NAME: ${R.name}`, `TITLE: ${R.title}`, `LOCATION: ${R.location}`,
    `SUMMARY: ${R.headline}`, `KEY METRICS: ${kpis}`, `SKILLS — ${skills}`,
    `EXPERIENCE:\n${exp}`,
    `PROJECTS/BRANDS: ${R.projects.map(x => x.name + " (" + x.category + ")" + (x.did ? " — " + x.did : "")).join(", ")}`,
    `WEBSITES BUILT: ${R.sitesBuilt.map(s => s.url).join(", ")}`,
    `MARKETS: ${R.markets.map(m => m.name).join(", ")}`,
    `EDUCATION: ${R.education.degree}, ${R.education.school} (${R.education.dates})`,
    `LANGUAGES: ${R.languages.map(l => l.name + " — " + l.level).join(", ")}`,
    `CERTIFICATES: ${R.certificates.map(c => c.name + " (" + c.issuer + ")").join(", ")}`,
    `CONTACT: ${R.email} · ${R.phone} · ${R.linkedin}`,
    R.aiNotes ? `BACKGROUND NOTES — answer questions about overlaps, titles, and role endings using these, in the first person, briefly and confidently:\n${R.aiNotes.map(n => "• " + n).join("\n")}` : "",
  ].filter(Boolean).join("\n");
}

const SUGGESTED_Q = [
  "What results has he actually driven?",
  "Does he have hands-on AI experience?",
  "Has he run LinkedIn & Google Ads?",
  "Which markets has he worked in?",
  "Can he build websites himself?",
];

const ASK_CV_DAILY_LIMIT = 8;
function getAskCvUsage() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const raw = JSON.parse(localStorage.getItem("askcv_usage") || "null");
    if (!raw || raw.date !== today) return { date: today, count: 0 };
    return raw;
  } catch (e) { return { date: "", count: 0 }; }
}
function bumpAskCvUsage() {
  const today = new Date().toISOString().slice(0, 10);
  const cur = getAskCvUsage();
  const next = { date: today, count: cur.count + 1 };
  try { localStorage.setItem("askcv_usage", JSON.stringify(next)); } catch (e) {}
  return next;
}

function AskMyCV({ theme, dark, openState, lang = "en" }) {
  const R = (window.RESUME_I18N && window.RESUME_I18N[lang]) || window.RESUME;
  const L = (window.UI_STRINGS && window.UI_STRINGS[lang]) || window.UI_STRINGS.en;
  const accent = theme.accent;
  const [open, setOpen] = openState;
  const [msgs, setMsgs] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [usage, setUsage] = React.useState(() => getAskCvUsage());
  const listRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const ctx = React.useMemo(() => buildResumeContext(R), [R]);
  const ctxKa = React.useMemo(() => {
    const RK = (window.RESUME_I18N && window.RESUME_I18N.ka) || R;
    return buildResumeContext(RK);
  }, [R]);
  const remaining = Math.max(0, ASK_CV_DAILY_LIMIT - usage.count);
  const limitHit = remaining <= 0;

  // Reset the conversation when the language changes
  React.useEffect(() => { setMsgs([]); }, [lang]);

  const c = dark
    ? { bg: "#0D121B", panel: "#11161F", bubble: "#1B2230", border: "#232B3A", text: "#EAEEF5", muted: "#8A94A6", chip: "#161C27" }
    : { bg: "#FFFFFF", panel: "#FFFFFF", bubble: "#EEF1F6", border: "#E1E5EC", text: "#0A0E14", muted: "#5A6473", chip: "#F3F5F9" };

  React.useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [msgs, busy, open]);
  React.useEffect(() => {
    if (open && inputRef.current) setTimeout(() => inputRef.current.focus(), 120);
  }, [open]);

  async function ask(q) {
    const question = (q ?? input).trim();
    if (!question || busy) return;
    if (limitHit) {
      setInput("");
      setMsgs(m => [...m, { role: "user", content: question }, { role: "assistant", content: L.chatLimitReached }]);
      return;
    }
    setInput("");
    const next = [...msgs, { role: "user", content: question }];
    setMsgs(next);
    setBusy(true);
    setUsage(bumpAskCvUsage());
    try {
      // Route by the language of the QUESTION, not the page — a Georgian question
      // must go to Gemini even while the page is in English.
      const askedInKa = /[\u10A0-\u10FF]/.test(question);
      const replyLang = (askedInKa || lang === "ka") ? "ka" : "en";

      // Georgian: try the hand-written answer bank first — guarantees correct Georgian
      // and skips the model entirely on the common questions.
      if (replyLang === "ka") {
        const bank = (window.RESUME_I18N && window.RESUME_I18N.ka && window.RESUME_I18N.ka.faqKa) || [];
        const q = question.toLowerCase();
        let best = null, bestScore = 0;
        bank.forEach(item => {
          let s = 0;
          item.k.forEach(kw => { if (q.includes(kw.toLowerCase())) s += kw.length >= 6 ? 2 : 1; });
          if (s > bestScore) { bestScore = s; best = item; }
        });
        if (best && bestScore >= 2) {
          setMsgs(m => [...m, { role: "assistant", content: best.a }]);
          setBusy(false);
          return;
        }
      }
      const langLine = replyLang === "ka"
        ? "პასუხი დაწერე მხოლოდ ქართულად. წერე ბუნებრივი, სასაუბრო-პროფესიული ქართულით, როგორც მშობლიურ ენაზე მოლაპარაკე — არასდეს სიტყვასიტყვით თარგმნიდან ინგლისურიდან; გადააზრე აზრი და თავიდან დაწერე ქართულად. დაიცავი სწორი ბრუნვები, ზმნის პირი და დროები; ისაუბრე პირველ პირში (მე, ჩემი). ბრენდების, კომპანიების, ხელსაწყოებისა და პლატფორმების სახელები დატოვე ლათინურად (Google Ads, Meta, GA4, TNET, Bloomex, Hashbank). თუ ქართული ფრაზა უხერხულად გამოგიდის, გადააფრაზირე სანამ პასუხს გასცემ. გრამატიკა და ორთოგრაფია უნდა იყოს უშეცდომო: ზმნები სწორად დაასრულე, არ გამოიყენო არარსებული სიტყვები ან შეცდომითი ფორმები (მაგ. სწორია „ჰიბრიდული“, „მქონდა“, „ჰქონდა“). სანამ დააბრუნებ, გადაიკითხე: ასე დაწერდა ბიზნეს-ქართულზე მოსაუბრე ადამიანი? თუ არა, გადაწერე."
        : "Respond in English only, regardless of what language the question is asked in.";
      const kaBank = replyLang === "ka"
        ? "\n\n=== მზადი ქართული პასუხები (დაწერილია უშეცდომო ქართულით) ===\nთუ შეკითხვა რომელიმეს ამ პასუხს ეხება, დააბრუნე ზუსტად ისევ, სიტყვასიტყვით, არაფერს არ დაამატო და არაფერს არ შეუცვალო. ასეთ სტილში დაწერე ახალი პასუხიც, თუ არც ერთი არ ემთხვევა.\n" +
          ((window.RESUME_I18N && window.RESUME_I18N.ka && window.RESUME_I18N.ka.faqKa) || []).map(f => "• " + f.a).join("\n")
        : "";
      const system = `You ARE Giorgi Kvaratskhelia, speaking in the FIRST PERSON on your own interactive résumé. Recruiters and hiring managers chat with you here. Answer ONLY from the CV DATA below. Keep answers SHORT and professional — 1 sentence, 2 at most. No fluff, no over-explaining. Always speak as "I" / "my" — never third person. When it's relevant (e.g. they ask how to reach you, want to schedule something, or the conversation naturally wraps up), offer to connect and share the email, phone, and/or LinkedIn from the CV data. If something isn't in the data, say briefly that you don't have that detail and suggest reaching out directly. Never invent facts, numbers, or employers. Reply in plain text only — no markdown, asterisks, bold, or bullet points. ${langLine}\n\n=== CV DATA ===\n${replyLang === "ka" ? ctxKa : ctx}${kaBank}`;
      const msgPayload = next.map(m => ({ role: m.role, content: m.content }));
      window.gkTrack && window.gkTrack("cv_ask");
      let text = "";
      if (window.claude && typeof window.claude.complete === "function") {
        // Works inside this workspace / the share link — no setup needed.
        text = await window.claude.complete({ system, max_tokens: 400, messages: msgPayload });
      } else if (window.ASK_CV_PROXY_URL) {
        // Works on a public deploy (e.g. GitHub Pages) once you point this at your own proxy.
        // See resume-data.js for setup notes.
        const res = await fetch(window.ASK_CV_PROXY_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ system, max_tokens: 400, messages: msgPayload, lang: replyLang }),
        });
        if (!res.ok) throw new Error("proxy error");
        const data = await res.json();
        text = data.text || (data.content && data.content[0] && data.content[0].text) || "";
      } else {
        throw new Error("no AI backend configured");
      }
      setMsgs(m => [...m, { role: "assistant", content: (text || "").trim() || L.chatNotFound }]);
    } catch (e) {
      setMsgs(m => [...m, { role: "assistant", content: L.chatError }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="ask-cv" style={{ position: "fixed", right: 18, bottom: 18, zIndex: 60, fontFamily: "'Manrope', system-ui, sans-serif" }}>
      {open && (
        <div style={{
          position: "absolute", right: 0, bottom: 62, width: 380, maxWidth: "calc(100vw - 36px)",
          height: 540, maxHeight: "calc(100vh - 120px)", display: "flex", flexDirection: "column",
          background: c.panel, border: `1px solid ${c.border}`, borderRadius: 18, overflow: "hidden",
          boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
        }}>
          {/* header */}
          <div style={{ padding: "15px 18px", borderBottom: `1px solid ${c.border}`, display: "flex", alignItems: "center", gap: 11, background: c.bg }}>
            <span style={{ width: 30, height: 30, borderRadius: 9, background: accent, color: "#0A0E14", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800 }}>✦</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: c.text, letterSpacing: "-0.01em" }}>{L.chatTitle}</div>
              <div style={{ fontSize: 11.5, color: c.muted }}>{limitHit ? L.chatLimitReached : L.chatSubtitle}</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label={L.chatClose} style={{ background: "none", border: "none", color: c.muted, fontSize: 22, cursor: "pointer", lineHeight: 1, padding: 4 }}>×</button>
          </div>

          {/* messages */}
          <div ref={listRef} style={{ flex: 1, overflowY: "auto", padding: "16px 16px 6px", display: "flex", flexDirection: "column", gap: 12 }}>
            {msgs.length === 0 && (
              <div style={{ color: c.muted, fontSize: 13.5, lineHeight: 1.55 }}>
                {L.chatEmpty}
              </div>
            )}
            {msgs.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "86%" }}>
                <div style={{
                  fontSize: 13.5, lineHeight: 1.55, padding: "10px 13px", borderRadius: 13,
                  background: m.role === "user" ? accent : c.bubble,
                  color: m.role === "user" ? "#0A0E14" : c.text,
                  fontWeight: m.role === "user" ? 600 : 400,
                  borderTopRightRadius: m.role === "user" ? 4 : 13,
                  borderTopLeftRadius: m.role === "user" ? 13 : 4,
                }}>{m.content}</div>
              </div>
            ))}
            {busy && (
              <div style={{ alignSelf: "flex-start", color: c.muted, fontSize: 13.5, padding: "10px 13px", background: c.bubble, borderRadius: 13, borderTopLeftRadius: 4 }}>
                <span className="ask-cv-dots">{L.chatThinking}</span>
              </div>
            )}
          </div>

          {/* suggested chips (only before first message) */}
          {msgs.length === 0 && (
            <div style={{ padding: "0 14px 12px", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {L.suggested.map(q => (
                <button key={q} onClick={() => ask(q)} style={{
                  fontSize: 12, padding: "6px 11px", borderRadius: 999, cursor: "pointer",
                  background: c.chip, color: c.text, border: `1px solid ${c.border}`, letterSpacing: "-0.005em",
                }}>{q}</button>
              ))}
            </div>
          )}

          {/* input */}
          <div style={{ padding: 12, borderTop: `1px solid ${c.border}`, display: "flex", gap: 8, background: c.bg }}>
            <input
              ref={inputRef} value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") ask(); }}
              placeholder={limitHit ? L.chatLimitReached : L.chatPlaceholder}
              disabled={limitHit}
              style={{
                flex: 1, background: c.chip, border: `1px solid ${c.border}`, borderRadius: 10,
                padding: "10px 13px", fontSize: 13.5, color: c.text, outline: "none",
                fontFamily: "inherit", opacity: limitHit ? 0.6 : 1,
              }}
            />
            <button onClick={() => ask()} disabled={busy || limitHit || !input.trim()} style={{
              background: accent, color: "#0A0E14", border: "none", borderRadius: 10,
              padding: "0 15px", fontSize: 17, fontWeight: 800, cursor: busy || limitHit || !input.trim() ? "default" : "pointer",
              opacity: busy || limitHit || !input.trim() ? 0.5 : 1,
            }}>↑</button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button onClick={() => setOpen(o => !o)} className="ask-cv-fab" style={{
        display: "flex", alignItems: "center", gap: 9, padding: "12px 18px", borderRadius: 999, whiteSpace: "nowrap",
        background: accent, color: "#0A0E14", border: "none", cursor: "pointer",
        fontFamily: "'Manrope', system-ui, sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em",
        boxShadow: `0 10px 30px ${accent}55`,
      }}>
        <span style={{ fontSize: 16 }}>✦</span>
        {open ? L.chatClose : L.askBtn}
      </button>
    </div>
  );
}

// Expose
window.DashboardResume = DashboardResume;
window.CvSparkline = Sparkline;
window.AskMyCV = AskMyCV;
window.BuiltWithAI = BuiltWithAI;
window.DASHBOARD_THEMES = { A1: THEME_A1, A2: THEME_A2, A3: THEME_A3 };
window.DASHBOARD_W = DASHBOARD_W;
