<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Support the Whole Donuts mission and help sustain the ecosystem." />
    <title>Whole Donuts Donor</title>
    <style>
      :root {
        --bg: #090d14;
        --bg-2: #111827;
        --panel: rgba(15, 23, 42, 0.78);
        --line: rgba(255,255,255,0.08);
        --text: #f8fafc;
        --muted: #d4d9e3;
        --gold: #f5b942;
        --violet: #8b5cf6;
        --magenta: #ec4899;
        --green: #34d399;
      }

      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        background: linear-gradient(180deg, var(--bg), var(--bg-2));
        color: var(--text);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        line-height: 1.65;
      }

      a { color: inherit; text-decoration: none; }
      .wrap { max-width: 1180px; margin: 0 auto; padding: 28px 24px 80px; }

      .topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 18px;
        padding: 14px 0 22px;
        border-bottom: 1px solid var(--line);
        flex-wrap: wrap;
      }

      .brand {
        font-size: 0.8rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        font-weight: 900;
        color: var(--gold);
      }

      .nav {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        color: var(--muted);
      }

      .nav a:hover { color: var(--text); }

      .tag {
        display: inline-block;
        margin-top: 28px;
        padding: 7px 12px;
        border-radius: 999px;
        background: rgba(52, 211, 153, 0.1);
        border: 1px solid rgba(52, 211, 153, 0.5);
        color: var(--green);
        font-size: 0.72rem;
        font-weight: 800;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      h1 {
        margin: 18px 0 12px;
        font-size: clamp(2.7rem, 5vw, 4.3rem);
        letter-spacing: -0.06em;
        line-height: 1;
      }

      .lead {
        max-width: 760px;
        color: var(--muted);
        font-size: 1.08rem;
      }

      .grid {
        margin-top: 28px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
      }

      .panel {
        background: var(--panel);
        border: 1px solid var(--line);
        border-radius: 18px;
        padding: 22px;
      }

      .panel h2 {
        margin: 0 0 12px;
        color: var(--gold);
      }

      .panel p {
        margin: 0;
        color: var(--muted);
      }

      .cta {
        display: inline-flex;
        margin-top: 24px;
        align-items: center;
        justify-content: center;
        padding: 14px 20px;
        background: linear-gradient(135deg, rgba(52, 211, 153, 0.18), rgba(245, 185, 66, 0.18));
        border: 1px solid rgba(52, 211, 153, 0.55);
        border-radius: 12px;
        color: var(--green);
        font-weight: 800;
      }

      @media (max-width: 760px) {
        .grid { grid-template-columns: 1fr; }
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <header class="topbar">
        <div class="brand">Whole Donuts</div>
        <nav class="nav" aria-label="Primary navigation">
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
          Donor support is what keeps the movement alive. It sustains the platform, the story, the infrastructure, and the ongoing ability to serve people without closing the door.
        </p>

        <div class="grid">
          <article class="panel">
            <h2>Fuel the network</h2>
            <p>Support the operating system behind the movement so the landing, site, and ecosystem layers remain strong and active.</p>
          </article>

          <article class="panel">
            <h2>Protect the identity</h2>
            <p>Support the public story, the continuity, and the integrity of the message as it expands across domains.</p>
          </article>

          <article class="panel">
            <h2>Expand reach</h2>
            <p>With sustained support, the mission can continue building communities, commerce, and long-term public presence.</p>
          </article>
        </div>

        <a class="cta" href="index.html">Return to launch portal</a>
      </main>
    </div>
  </body>
</html>
