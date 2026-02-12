export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0B0F14", color: "white", padding: 24 }}>
      <h1 style={{ fontSize: 40, fontWeight: 800 }}>PlayPicks AI</h1>
      <p style={{ marginTop: 10, color: "#9CA3AF", fontSize: 16, maxWidth: 700 }}>
        Confidence-first prediction coaching. See Social + News + Technical scores, learn from resources,
        and trade on Polymarket when you’re ready.
      </p>

      <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href="/event"
          style={{
            background: "#00D4FF",
            color: "#001018",
            padding: "12px 16px",
            borderRadius: 12,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Try a sample event
        </a>

        <a
          href="/about"
          style={{
            border: "1px solid #243041",
            color: "white",
            padding: "12px 16px",
            borderRadius: 12,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          How it works
        </a>
      </div>

      <h2 style={{ marginTop: 28, fontSize: 18, fontWeight: 800 }}>What makes it different</h2>
      <ul style={{ marginTop: 10, color: "#9CA3AF", lineHeight: 1.8 }}>
        <li><b>Social Score</b> — what credible accounts + sentiment suggests</li>
        <li><b>News Score</b> — key headlines + evidence checks</li>
        <li><b>Technical Score</b> — historical patterns + similar-resolution stats</li>
        <li><b>TradeDNA</b> — track which signals you trust and how they perform over time</li>
      </ul>
    </main>
  );
}
