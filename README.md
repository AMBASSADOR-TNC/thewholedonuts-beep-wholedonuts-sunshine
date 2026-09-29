<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Whole Donuts donor page and support mission">
  <title>Whole Donuts — Donor Page</title>
  <style>
    :root {
      --bg: #0b0f19;
      --bg-2: #111827;
      --panel: rgba(17,24,39,0.85);
      --text: #f8fafc;
      --muted: #cbd5e1;
      --gold: #f5b942;
      --bzpz: #8b5cf6;
      --u: #ec4899;
      --green: #34d399;
      --line: rgba(255,255,255,0.08);
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: linear-gradient(180deg, var(--bg), var(--bg-2));
      color: var(--text);
      line-height: 1.65;
    }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 32px 24px 72px; }
    .topbar {
      display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 18px 0 28px; border-bottom: 1px solid var(--line); flex-wrap: wrap;
    }
    .brand { color: var(--gold); font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.78rem; }
    .nav { display: flex; gap: 18px; flex-wrap: wrap; color: var(--muted); }
    .nav a { color: var(--muted); text-decoration: none; }
    .nav a:hover { color: var(--text); }
    h1 {
      margin: 24px 0 12px;
      font-size: clamp(2.5rem, 5vw, 4rem);
      line-height: 1;
      letter-spacing: -0.06em;
    }
    .lead { color: var(--muted); max-width: 760px; font-size: 1.08rem; }
    .tag {
      display: inline-block;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(52,211,153,0.12);
      color: var(--green);
      border: 1px solid rgba(52,211,153,0.45);
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .grid {
      margin-top: 28px;
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 18px;
    }
    .panel {
      background: rgba(17,24,39,0.85);
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 20px;
    }
    .panel h2 { margin: 0 0 12px; font-size: 1.25rem; color: var(--gold); }
    .panel p { margin: 0; color: var(--muted); }
    .cta {
      display: inline-block;
      margin-top: 24px;
      padding: 12px 18px;
      border-radius: 12px;
      background: linear-gradient(135deg, rgba(52,211,153,0.18), rgba(245,185,66,0.18));
      border: 1px solid rgba(52,211,153,0.5);
      color: var(--green);
      font-weight: 800;
      text-decoration: none;
    }
    @media (max-width: 760px) { .grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <div class="wrap">
    <header class="topbar">
      <div class="brand">Whole Donuts</div>
      <nav class="nav" aria-label="Main navigation">
        <a href="index.html">Index</a>
        <a href="ecosystem.html">Ecosystem</a>
        <a href="identity-law.html">Identity Law</a>
        <a href="story.html">Story</a>
        <a href="donor.html">Donor</a>
      </nav>
    </header>

    <main>
      <div class="tag">Donor</div>
      <h1>Support the Mission</h1>
      <p class="lead">
        The ecosystem needs market-level energy to keep going. Donor support sustains the work, protects the brand, and makes it possible to keep the mission live.
      </p>

      <div class="grid">
        <article class="panel">
          <h2>Fuel the Network</h2>
          <p>Support the movement so the landing, commerce, and ecosystem layers remain active and healthy.</p>
        </article>

        <article class="panel">
          <h2>Maintain Identity</h2>
          <p>Donor support preserves the public story, the platform, the architecture, and the continuity of the mission.</p>
        </article>

        <article class="panel">
          <h2>Expand Reach</h2>
          <p>With sustained support, the movement can keep growing into communities, campaigns, commerce, and new channels.</p>
        </article>
      </div>

      <a class="cta" href="index.html">Back to the launch portal</a>
    </main>
  </div>
</body>
</html>
