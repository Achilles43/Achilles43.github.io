// app.jsx — FINAL: single A1 "Refined" dashboard resume, print/PDF ready.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#7CE0A8",
  "initialMode": "dark",
  "cvLayout": "results"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [dark, setDark] = React.useState(() => { try { const v = localStorage.getItem("gk_theme"); if (v) return v !== "light"; } catch (e) {} return t.initialMode !== "light"; });
  const toggleTheme = () => setDark(d => { const nd = !d; try { localStorage.setItem("gk_theme", nd ? "dark" : "light"); } catch (e) {} return nd; });
  const [recruiter, setRecruiter] = React.useState(false);
  const gkMeta = document.querySelector('meta[name="gk-lang"]');
  const [lang, setLang] = React.useState(() => { try { const p = gkMeta ? gkMeta.content : new URLSearchParams(location.search).get("lang"); if (p === "ka" || p === "en") return p; return localStorage.getItem("gk_lang") || "en"; } catch (e) { return "en"; } });
  React.useEffect(() => { try { localStorage.setItem("gk_lang", lang); if (gkMeta) return; const u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u); document.documentElement.lang = lang; } catch (e) {} }, [lang]);
  const L = (window.UI_STRINGS && window.UI_STRINGS[lang]) || window.UI_STRINGS.en;
  const askState = React.useState(false);
  const openAsk = () => askState[1](true);

  // Keep state in sync if the tweak changes
  const firstMode = React.useRef(true);
  React.useEffect(() => { if (firstMode.current) { firstMode.current = false; return; } setDark(t.initialMode !== "light"); }, [t.initialMode]);

  const theme = { ...window.DASHBOARD_THEMES.A1, accent: t.accent };
  const [pdfBusy, setPdfBusy] = React.useState(false);
  const [bookOpen, setBookOpen] = React.useState(false);
  const [hintOpen, setHintOpen] = React.useState(false);
  React.useEffect(() => {
    let seen = false;
    try { seen = localStorage.getItem("gk_cv_shortHint") === "1"; } catch (e) {}
    if (seen) return;
    const t = setTimeout(() => setHintOpen(true), 3200);
    return () => clearTimeout(t);
  }, []);
  const closeHint = () => {
    setHintOpen(false);
    try { localStorage.setItem("gk_cv_shortHint", "1"); } catch (e) {}
  };
  React.useEffect(() => { if (recruiter) setHintOpen(false); }, [recruiter]);
  const [printMode, setPrintMode] = React.useState(false);
  React.useEffect(() => {
    const on = () => setPrintMode(true), off = () => setPrintMode(false);
    window.addEventListener("beforeprint", on);
    window.addEventListener("afterprint", off);
    return () => { window.removeEventListener("beforeprint", on); window.removeEventListener("afterprint", off); };
  }, []);

  // ── Analytics: fire a visit beacon + track time on page ──
  React.useEffect(() => {
    if (window.trackCV) window.trackCV.init();
  }, []);
  React.useEffect(() => {
    if (window.trackCV) window.trackCV.lang(lang);
  }, [lang]);

  const handleDownloadPDF = async () => {
    if (pdfBusy) return;
    const wasDark = dark;
    setPdfBusy(true);
    setDark(false); // force light for paper
    setPrintMode(true);
    document.body.classList.add("printing");
    if (typeof window.trackCV === "object" && window.trackCV) window.trackCV.event("pdf_download");
    // wait for the light theme + printing layout to apply, then hand off to the
    // browser's native "Save as PDF" — perfectly symmetric, full-width, crisp text,
    // and works offline (no CDN dependency).
    const cleanup = () => {
      document.body.classList.remove("printing");
      setPrintMode(false);
      setDark(wasDark);
      setPdfBusy(false);
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    await new Promise(r => setTimeout(r, 500));
    try { window.print(); } catch (e) { /* ignore */ }
    // safety cleanup if afterprint never fires
    setTimeout(cleanup, 1500);
  };

  const pageBg = dark ? theme.bg : theme.lightBg;
  React.useEffect(() => { document.body.style.background = pageBg; document.body.style.transition = "background 220ms ease"; }, [pageBg]);
  const W = window.DASHBOARD_W;

  // ── Fit-to-width scaling so the full 920px sheet is always visible ──
  const sheetRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  const [boxH, setBoxH] = React.useState(null);

  React.useLayoutEffect(() => {
    function update() {
      const margin = window.innerWidth < 700 ? 24 : 64; // total horizontal breathing room
      const avail = window.innerWidth - margin;
      const s = Math.min(1, avail / W);
      setScale(s);
      if (sheetRef.current) setBoxH(sheetRef.current.offsetHeight * s);
    }
    update();
    window.addEventListener("resize", update);
    const t1 = setTimeout(update, 300);
    const t2 = setTimeout(update, 900); // re-measure after webfonts settle
    return () => { window.removeEventListener("resize", update); clearTimeout(t1); clearTimeout(t2); };
  }, [dark, theme.accent, recruiter, lang]);

  return (
    <>
      {/* Top bar (screen only): site nav left, tools right */}
      <header className="toolbar topbar" style={{
        position: "sticky", top: 0, zIndex: 50, width: "100%",
        background: dark ? "rgba(10,14,20,0.82)" : "rgba(246,247,250,0.88)",
        backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
        borderBottom: `1px solid ${dark ? "#1C2430" : "#E1E5EC"}`,
      }}>
        <div className="topbar-in" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", minHeight: 64, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <a href={gkMeta ? (lang === "ka" ? "/ka/" : "/") : "Home A.html"} aria-label="Giorgi Kvaratskhelia — home" className="gk-home" style={{ width: 36, height: 36, borderRadius: 10, border: `1.5px solid ${dark ? theme.accent : "#15804F"}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 13, fontWeight: 700, letterSpacing: "-0.02em", color: dark ? theme.accent : "#15804F", textDecoration: "none", flex: "none" }}>GK</a>
        <nav className="site-sw" style={{ display: "flex", gap: 4, padding: 4, borderRadius: 11, border: `1px solid ${dark ? "#2E3A4C" : "#DCE0E8"}`, background: dark ? "rgba(15,21,32,0.9)" : "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
          {[["CV", null], [lang === "ka" ? "საიტები" : "Websites", "Work.html"], [lang === "ka" ? "შენთვის" : "For you", "Business.html"]].map(([lbl, href]) => (
            <a key={lbl} href={href ? (gkMeta ? (lang === "ka" ? "/ka" : "") + ({ "Work.html": "/websites/", "Automation.html": "/ai/", "Business.html": "/for-you/" })[href] : href) : undefined} className="tb-btn" style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "9px 13px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap", cursor: href ? "pointer" : "default",
              background: href ? "transparent" : theme.accent, color: href ? (href === "Business.html" ? (dark ? theme.accent : "#1E7A50") : (dark ? "#C9D2DF" : "#3A4555")) : "#0A0E14",
            }}>{lbl}</a>
          ))}
        </nav>
        </div>
        <div className="topbar-tools" style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <button className="tb-btn" onClick={handleDownloadPDF} disabled={pdfBusy} style={{ ...toolbarBtn(dark), ...SMALL, background: theme.accent, color: "#0A0E14", border: `1px solid ${theme.accent}`, fontWeight: 600, opacity: pdfBusy ? 0.6 : 1 }}>
          {pdfBusy ? (L.tbDownloading || "…") : L.tbDownload}
        </button>
        </div>
        </div>
      </header>

      {/* Tools rail: vertical on wide screens, a row under the bar on narrow ones */}
      <div className="toolbar cv-rail">
        <button className="tb-btn" onClick={() => { const nl = lang === "en" ? "ka" : "en"; if (gkMeta) { try { localStorage.setItem("gk_lang", nl); } catch (e) {} const al = document.querySelector('link[rel="alternate"][hreflang="' + nl + '"]'); if (al) { location.href = new URL(al.href).pathname; return; } } setLang(nl); }} style={{ ...toolbarBtn(dark), ...SMALL }}>
          {L.tbLang}
        </button>
        <button className="tb-btn" onClick={() => setRecruiter(r => !r)} style={{
          ...toolbarBtn(dark), ...SMALL,
          ...(recruiter ? { background: theme.accent, color: "#0A0E14", border: `1px solid ${theme.accent}`, fontWeight: 600 } : {}),
        }}>
          {recruiter ? L.tbFull : L.tbShort}
        </button>
        <button className="tb-btn" onClick={toggleTheme} style={{ ...toolbarBtn(dark), ...SMALL }}>
          {dark ? L.tbLight : L.tbDark}
        </button>
      </div>

      {/* 30-sec view hint — anchored under the toolbar */}
      {hintOpen && (
        <div className="short-hint" style={{
          position: "fixed", ...(window.innerWidth >= 1180 ? { top: "calc(50% - 70px)", left: 150 } : { top: 124, right: 12 }), zIndex: 58, width: "min(240px, calc(100vw - 36px))",
          background: dark ? "#0F1520" : "#FFFFFF",
          border: `1px solid ${theme.accent}`, borderRadius: 12,
          padding: "11px 12px 10px",
          boxShadow: dark ? "0 20px 50px rgba(0,0,0,0.55)" : "0 18px 44px rgba(20,30,50,0.16)",
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          animation: "hintIn 300ms cubic-bezier(.2,.9,.25,1) both",
        }}>
          <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: theme.accent, fontWeight: 600 }}>{L.hintTitle}</div>
          <div style={{ marginTop: 5, fontSize: 11.5, lineHeight: 1.5, color: dark ? "#B9C4D2" : "#4A5568", fontFamily: "'Manrope', sans-serif" }}>{L.hintBody}</div>
          <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
            <button className="tb-btn" onClick={() => { setRecruiter(true); closeHint(); }} style={{
              ...toolbarBtn(dark), flex: 1, textAlign: "center", fontSize: 10, padding: "8px 10px",
              background: theme.accent, color: "#0A0E14", border: `1px solid ${theme.accent}`, fontWeight: 700,
            }}>{L.hintGo}</button>
            <button className="tb-btn" onClick={closeHint} style={{ ...toolbarBtn(dark), whiteSpace: "nowrap", fontSize: 10, padding: "8px 10px" }}>{L.hintNo}</button>
          </div>
        </div>
      )}

      {/* Book a call — bottom left */}
      <div className="toolbar book-dock" style={{
        position: "fixed", left: 18, bottom: 18, zIndex: 55, display: "flex",
      }}>
        <a
          className="tb-btn"
          href="https://calendly.com/kvaratskhelia-giorgi777/intro-call-15-min"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.preventDefault(); setBookOpen(true); }}
          style={{ ...toolbarBtn(dark), whiteSpace: "nowrap", color: dark ? theme.accent : "#0A0E14", background: dark ? "#181E29" : "#FFFFFF", border: `1px solid ${theme.accent}`, fontWeight: 600, textDecoration: "none", boxShadow: dark ? "0 8px 24px rgba(0,0,0,0.4)" : "0 8px 24px rgba(20,30,50,0.12)" }}
        >
          {L.tbBook}
        </a>
      </div>

      {/* Book-a-call popover */}
      {bookOpen && (
        <div className="book-pop" onClick={() => setBookOpen(false)} style={{
          position: "fixed", inset: 0, zIndex: 60, background: "rgba(6,10,18,0.42)",
          backdropFilter: "blur(2px)", display: "flex", alignItems: "flex-end", justifyContent: "flex-start",
          padding: window.innerWidth < 700 ? "16px" : "0 18px 76px",
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            width: "min(340px, 100%)", background: dark ? "#0F1520" : "#FFFFFF",
            border: `1px solid ${dark ? "#25303F" : "#E3E8EF"}`, borderRadius: 16,
            padding: "20px 20px 16px", boxShadow: "0 24px 60px rgba(5,10,20,0.35)",
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: dark ? "#E8EEF7" : "#0F1724", marginBottom: 8 }}>
              {L.bookTitle}
            </div>
            <div style={{
              fontFamily: "system-ui, -apple-system, sans-serif", fontSize: 13.5, lineHeight: 1.55,
              color: dark ? "#94A3B8" : "#55627A", marginBottom: 18, textWrap: "pretty",
            }}>
              {L.bookBody}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <a
                href="https://calendly.com/kvaratskhelia-giorgi777/intro-call-15-min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { if (window.trackCV) window.trackCV.event("book_call"); setBookOpen(false); }}
                style={{
                  ...toolbarBtn(dark), flex: 1, justifyContent: "center", textAlign: "center",
                  background: theme.accent, color: "#0A0E14", border: `1px solid ${theme.accent}`,
                  fontWeight: 700, textDecoration: "none",
                }}
              >
                {L.bookGo}
              </a>
              <button onClick={() => setBookOpen(false)} style={{ ...toolbarBtn(dark), whiteSpace: "nowrap" }}>
                {L.bookNo}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="page-wrap" style={{
        minHeight: "100vh", background: "transparent", position: "relative", zIndex: 1,
        padding: "24px 0 56px",
        display: "flex", justifyContent: "center",
        transition: "background 220ms ease",
      }}>
        {/* scale-outer reserves the scaled footprint so the page flows correctly */}
        <div className="scale-outer" style={{ width: W * scale, height: boxH || undefined }}>
          <div
            ref={sheetRef}
            className="sheet"
            style={{
              width: W, transform: `scale(${scale})`, transformOrigin: "top left",
              borderRadius: 20, overflow: "hidden",
              boxShadow: dark ? "0 30px 80px rgba(0,0,0,0.5)" : "0 20px 60px rgba(20,30,50,0.10)",
              border: `1px solid ${dark ? theme.border : theme.lightBorder}`,
            }}
          >
            <DashboardResume theme={theme} dark={dark} setDark={setDark} hideToggle={true} compact={recruiter} onAsk={openAsk} lang={lang} printMode={printMode} variant={t.cvLayout || "original"} />
          </div>
        </div>
      </div>

      <AskMyCV theme={theme} dark={dark} openState={askState} lang={lang} />

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={["#7CE0A8", "#5BA3FF", "#A78BFA", "#FF8FA3", "#FFB84D", "#E8B86A"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakRadio
          label="Default mode"
          value={t.initialMode}
          options={["dark", "light"]}
          onChange={(v) => setTweak("initialMode", v)}
        />
        <TweakSection label="CV layout" />
        <TweakRadio
          label="Variant"
          value={t.cvLayout || "original"}
          options={["original", "results", "split"]}
          onChange={(v) => setTweak("cvLayout", v)}
        />
      </TweaksPanel>
    </>
  );
}

const SMALL = { fontSize: 10.5, padding: "9px 12px", boxShadow: "none" };

function toolbarBtn(dark) {
  return {
    whiteSpace: "nowrap",
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    fontSize: 11.5, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase",
    padding: "11px 16px", borderRadius: 10, cursor: "pointer",
    background: dark ? "rgba(24,30,41,0.92)" : "rgba(255,255,255,0.96)",
    color: dark ? "#F3F6FA" : "#0A0E14",
    border: `1px solid ${dark ? "#2E3A4C" : "#C9D0DB"}`,
    boxShadow: dark ? "0 6px 20px rgba(0,0,0,0.45)" : "0 6px 18px rgba(20,30,50,0.14)",
    backdropFilter: "blur(8px)",
    transition: "transform 140ms ease, box-shadow 140ms ease, background 140ms ease, border-color 140ms ease",
  };
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
requestAnimationFrame(() => requestAnimationFrame(() => { if (window.__hideSplash) window.__hideSplash(); }));
