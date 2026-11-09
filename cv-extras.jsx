// cv-extras.jsx — CV variants: logo wall, channel-depth visuals, results-first job cards.
const CVX_T = {
  en: { brands: "Brands I've worked with", brandsR: (n) => `${n} brands & many more`, depth: "Channel depth", depthR: "by roles · 2021 → now", roles: (n) => `${n} ${n === 1 ? "role" : "roles"}`, since: (y) => `since ${y}`, more: (n) => `+ ${n} more`, less: "Show less", results: "Results", matrixR: "channel × role" },
  ka: { brands: "ბრენდები, რომლებთანაც ვიმუშავე", brandsR: (n) => `${n} ბრენდი და კიდევ ბევრი`, depth: "არხები გამოცდილებაში", depthR: "როლების მიხედვით · 2021 → დღემდე", roles: (n) => `${n} როლი`, since: (y) => `${y}-დან`, more: (n) => `+ კიდევ ${n}`, less: "ნაკლები", results: "შედეგები", matrixR: "არხი × როლი" },
};
const cvxT = (lang) => CVX_T[lang] || CVX_T.en;

function cvxHighlight(text, accent) {
  const re = /([−+\-]?\$?\d[\d,.]*\s?(?:%|×|x\b|K\+?|M\b|\+)?)/g;
  const parts = String(text).split(re);
  return parts.map((s, i) => (i % 2 === 1 && /\d/.test(s))
    ? <strong key={i} style={{ color: accent, fontWeight: 700 }}>{s}</strong>
    : <React.Fragment key={i}>{s}</React.Fragment>);
}

function CvxHeader({ label, right, p, mono, accent }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${p.border}`, paddingBottom: 13, marginBottom: 18, marginTop: 8 }}>
      <h3 style={{ margin: 0, display: "flex", alignItems: "center", gap: 13, fontSize: 16, fontWeight: 700, letterSpacing: "-0.006em", color: p.text }}>
        <span style={{ width: 20, height: 3, borderRadius: 2, background: accent, display: "inline-block" }} />{label}
      </h3>
      {right && <span style={{ fontFamily: mono, fontSize: 11, color: p.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>{right}</span>}
    </div>
  );
}

const CVX_LOGOS = [
  ["Hashbank", "hashbank.png", "#000"], ["Cityzen", "cityzen.png", "#F1EFEA"], ["Zion", "zion.jpg", "#174D3E"], ["TNET", "tnet.png", "#fff"],
  ["Bloomex", "bloomex.jpg", "#fff"], ["LTA", "lta.jpg", "#fff", true], ["Casio.ge", "casio.jpg", "#fff", true], ["Mywatch.ge", "mywatch.jpg", "#fff", true],
];
function LogoStrip({ p, accent, mono, lang }) {
  const t = cvxT(lang);
  const base = document.querySelector('meta[name="gk-lang"]') ? "/work/logos/" : "work/logos/";
  return (
    <div data-avoid-break="1" style={{ marginBottom: 50 }}>
      <CvxHeader label={t.brands} right={t.brandsR(CVX_LOGOS.length)} p={p} mono={mono} accent={accent} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, minmax(0,1fr))", gap: 10 }}>
        {CVX_LOGOS.map(([n, f, bg, pad]) => (
          <div key={n} title={n} className="cvx-logo" style={{
            aspectRatio: "1 / 1", borderRadius: 12, overflow: "hidden", background: bg,
            border: `1px solid ${p.border}`, display: "flex", alignItems: "center", justifyContent: "center",
            transition: "transform 180ms ease, box-shadow 180ms ease",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 0 0 1px ${accent}`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <img src={base + f} alt={n} loading="lazy" style={{ width: pad ? "86%" : "100%", height: pad ? "86%" : "100%", objectFit: pad ? "contain" : "cover", display: "block" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function cvxDepth(R) {
  return R.channels.map(c => {
    const jobs = R.experience.filter(j => j.channels.includes(c));
    const since = jobs.length ? Math.min(...jobs.map(j => parseInt(j.year, 10) || 9999)) : null;
    return { c, n: jobs.length, since, ids: jobs.map(j => j.id) };
  }).sort((a, b) => b.n - a.n || a.since - b.since);
}

function SkillBars({ R, p, accent, mono, lang }) {
  const t = cvxT(lang);
  const d = cvxDepth(R), max = R.experience.length;
  return (
    <div data-avoid-break="1" style={{ marginTop: 44 }}>
      <CvxHeader label={t.depth} right={t.depthR} p={p} mono={mono} accent={accent} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 36px" }}>
        {d.map(x => (
          <div key={x.c} style={{ display: "grid", gridTemplateColumns: "112px minmax(0,1fr) 92px", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>{x.c}</span>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${max}, 1fr)`, gap: 3 }}>
              {Array.from({ length: max }).map((_, i) => (
                <span key={i} style={{ height: 10, borderRadius: 2, background: i < x.n ? accent : p.surface2, opacity: i < x.n ? 0.35 + 0.65 * ((i + 1) / x.n) : 1 }} />
              ))}
            </div>
            <span style={{ fontFamily: mono, fontSize: 10.5, color: p.muted, letterSpacing: "0.04em", textAlign: "right", whiteSpace: "nowrap" }}>{t.roles(x.n)} · {x.since}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillMatrix({ R, p, accent, mono, lang }) {
  const t = cvxT(lang);
  const d = cvxDepth(R), jobs = R.experience;
  const short = (c) => c.split(" & ")[0].replace(" Canada", "");
  const cols = `120px repeat(${jobs.length}, minmax(0,1fr)) 64px`;
  return (
    <div data-avoid-break="1" style={{ marginTop: 44 }}>
      <CvxHeader label={t.depth} right={t.matrixR} p={p} mono={mono} accent={accent} />
      <div style={{ background: p.surface, border: `1px solid ${p.border}`, borderRadius: 14, padding: "14px 16px 10px" }}>
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 4, alignItems: "end", paddingBottom: 10, borderBottom: `1px solid ${p.border}` }}>
          <span></span>
          {jobs.map(j => (
            <span key={j.id} style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: p.text, letterSpacing: "-0.01em", lineHeight: 1.15 }}>
              {short(j.company)}<span style={{ display: "block", fontFamily: mono, fontSize: 9.5, color: p.dim, fontWeight: 500, marginTop: 3 }}>{j.year}</span>
            </span>
          ))}
          <span></span>
        </div>
        {d.map((x, ri) => (
          <div key={x.c} style={{ display: "grid", gridTemplateColumns: cols, gap: 4, alignItems: "center", padding: "7px 0", borderBottom: ri < d.length - 1 ? `1px dashed ${p.border}` : "none" }}>
            <span style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: "-0.01em" }}>{x.c}</span>
            {jobs.map(j => {
              const on = x.ids.includes(j.id);
              return <span key={j.id} style={{ display: "flex", justifyContent: "center" }}>
                <span style={{ width: 14, height: 14, borderRadius: 4, background: on ? accent : "transparent", border: `1px solid ${on ? accent : p.border}` }} />
              </span>;
            })}
            <span style={{ fontFamily: mono, fontSize: 10.5, color: p.muted, textAlign: "right" }}>{x.n}/{jobs.length}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CvxBullets({ bullets, accent, p, lang, printMode, limit = 3 }) {
  const t = cvxT(lang);
  const [open, setOpen] = React.useState(false);
  const all = printMode || open;
  const shown = all ? bullets : bullets.slice(0, limit);
  return (
    <div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {shown.map((b, i) => (
          <li key={i} style={{ fontSize: 14.5, lineHeight: 1.6, color: p.text, display: "flex", gap: 11 }}>
            <span style={{ color: accent, flexShrink: 0, fontSize: 13, lineHeight: 1.6 }}>–</span>
            <span style={{ letterSpacing: "-0.006em" }}>{cvxHighlight(b, accent)}</span>
          </li>
        ))}
      </ul>
      {!printMode && bullets.length > limit && (
        <button onClick={() => setOpen(o => !o)} style={{ marginTop: 9, marginLeft: 22, background: "none", border: 0, padding: 0, cursor: "pointer", color: accent, fontFamily: "'JetBrains Mono','Noto Sans Georgian',monospace", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
          {open ? t.less : t.more(bullets.length - limit)}
        </button>
      )}
    </div>
  );
}

function JobRowV({ job, active, accent, theme, p, mono, display, L, lang, variant, printMode }) {
  const t = cvxT(lang);
  const Spark = window.CvSparkline;
  const head = (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 11, flexWrap: "wrap" }}>
          <span style={{ fontSize: 19.5, fontWeight: 700, letterSpacing: "-0.014em", color: p.text }}>{job.role}</span>
          <span style={{ color: p.dim, fontSize: 14 }}>·</span>
          <span style={{ fontSize: 16.5, color: accent, fontWeight: 600, letterSpacing: "-0.008em" }}>{job.company}</span>
          <span style={{ fontFamily: mono, fontSize: 10, color: p.muted, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 9px", border: `1px solid ${p.border}`, borderRadius: 5 }}>{job.tag}</span>
        </div>
        <div style={{ marginTop: 6, fontSize: 14.5, color: p.muted, lineHeight: 1.5 }}>{job.blurb}</div>
      </div>
      <div style={{ fontFamily: mono, fontSize: 11, color: p.muted, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>{job.start} → {job.end}</div>
    </div>
  );
  const chips = (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
      {job.channels.map(c => <span key={c} style={{ fontFamily: mono, fontSize: 10, padding: "3px 8px", background: p.surface2, color: p.muted, borderRadius: 5, letterSpacing: "0.03em" }}>{c}</span>)}
    </div>
  );
  const res = job.results || [];
  const wrap = { background: p.surface, border: `1px solid ${p.border}`, borderRadius: 14, padding: "20px 22px", opacity: active ? 1 : 0.16, filter: active ? "none" : "saturate(0.4)", transition: "opacity 200ms ease, filter 200ms ease" };

  if (variant === "split") {
    return (
      <div data-jobrow="1" style={wrap}>
        {head}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 220px", gap: 26, marginTop: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <CvxBullets bullets={job.bullets} accent={accent} p={p} lang={lang} printMode={printMode} />
            {chips}
          </div>
          <div style={{ borderLeft: `2px solid ${accent}`, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ fontFamily: mono, fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: p.dim }}>{t.results}</span>
            {res.slice(0, 4).map((r, i) => (
              <div key={i}>
                <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.035em", color: accent, lineHeight: 1 }}>{r.v}<span style={{ fontSize: 10, marginLeft: 5, opacity: 0.7 }}>{r.dir === "down" ? "▼" : "▲"}</span></div>
                <div style={{ fontSize: 12, color: p.muted, marginTop: 3, lineHeight: 1.35 }}>{r.l}</div>
              </div>
            ))}
            {job.resultsNote && <div style={{ fontSize: 10.5, color: p.dim, lineHeight: 1.4 }}>{job.resultsNote}</div>}
          </div>
        </div>
      </div>
    );
  }
  const cols = res.length > 4 ? 3 : Math.max(res.length, 1);
  return (
    <div data-jobrow="1" style={wrap}>
      {head}
      {res.length > 0 && (
        <div data-avoid-break="1" style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`, gap: 8, margin: "16px 0 6px" }}>
          {res.map((r, i) => (
            <div key={i} style={{ background: `linear-gradient(160deg, ${accent}1A, ${p.surface2} 70%)`, border: `1px solid ${accent}33`, borderRadius: 11, padding: "13px 14px 9px", minWidth: 0 }}>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.04em", color: accent, lineHeight: 1 }}>{r.v}</div>
              <div style={{ fontSize: 12, color: p.text, opacity: 0.8, marginTop: 6, lineHeight: 1.35, minHeight: 32 }}>{r.l}</div>
              {Spark && <div style={{ marginTop: 4 }}><Spark data={r.t} color={accent} dir={r.dir} h={18} /></div>}
            </div>
          ))}
        </div>
      )}
      {job.resultsNote && <div style={{ fontSize: 11, color: p.dim, lineHeight: 1.45, marginBottom: 6 }}>{job.resultsNote}</div>}
      <div style={{ marginTop: 12 }}><CvxBullets bullets={job.bullets} accent={accent} p={p} lang={lang} printMode={printMode} /></div>
      <div style={{ marginTop: 14 }}>{chips}</div>
    </div>
  );
}

Object.assign(window, { LogoStrip, SkillBars, SkillMatrix, JobRowV });
