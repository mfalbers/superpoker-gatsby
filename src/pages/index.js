import React from "react"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet>
      <title>SuperPoker — Planning Poker for Agile Teams</title>
      <meta name="description" content="Real-time planning poker for agile teams. Coming soon." />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      body {
        background: #12122a;
        color: #fff;
        font-family: 'Inter', sans-serif;
        min-height: 100vh;
      }

      .sp-nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 32px;
        border-bottom: 1px solid rgba(226,185,106,0.15);
      }

      .sp-logo {
        font-family: 'Playfair Display', serif;
        font-size: 34px;
        font-weight: 900;
        color: #f0c96e;
        letter-spacing: -0.5px;
        text-decoration: none;
      }
      .sp-logo span { color: #fff; }

      .sp-nav ul {
        list-style: none;
        display: flex;
        gap: 28px;
      }
      .sp-nav ul li a {
        color: #aaa;
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
      }
      .sp-nav ul li a:hover { color: #f0c96e; }

      .sp-main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: start;
        max-width: 960px;
        margin: 0 auto;
        padding: 124px 32px;
      }

      .sp-tagline {
        font-family: 'Playfair Display', serif;
        font-size: clamp(32px, 5vw, 52px);
        font-weight: 900;
        line-height: 1.1;
        margin-bottom: 24px;
        letter-spacing: -1px;
      }
      .sp-tagline .gold { color: #f0c96e; }

      .sp-cards-row {
        display: flex;
        gap: 10px;
        margin-bottom: 28px;
      }

      .sp-card {
        width: 56px;
        height: 80px;
        border: 1.5px solid rgba(226,185,106,0.4);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Playfair Display', serif;
        font-size: 18px;
        font-weight: 700;
        color: #f0c96e;
        background: rgba(226,185,106,0.06);
        transition: transform 0.2s, background 0.2s;
      }
      .sp-card:hover {
        transform: translateY(-4px);
        background: rgba(226,185,106,0.14);
      }
      .sp-card.highlight {
        background: rgba(226,185,106,0.15);
        border-color: #f0c96e;
      }

      .sp-learn {
        font-size: 13px;
        color: #666;
      }
      .sp-learn a {
        color: #f0c96e;
        text-decoration: none;
        font-weight: 500;
      }
      .sp-learn a:hover { text-decoration: underline; }

      .sp-teaser {
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(226,185,106,0.2);
        border-radius: 16px;
        padding: 40px 32px;
        text-align: center;
      }

      .sp-teaser-cards {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-bottom: 28px;
      }

      .sp-card-back {
        width: 56px;
        height: 80px;
        border: 1.5px solid rgba(226,185,106,0.5);
        border-radius: 6px;
        background: #1a1a35;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .sp-card-back::before {
        content: '';
        position: absolute;
        inset: 4px;
        border: 1px solid rgba(226,185,106,0.3);
        border-radius: 3px;
        background: repeating-linear-gradient(
          45deg,
          rgba(226,185,106,0.06) 0px,
          rgba(226,185,106,0.06) 1px,
          transparent 1px,
          transparent 6px
        ),
        repeating-linear-gradient(
          -45deg,
          rgba(226,185,106,0.06) 0px,
          rgba(226,185,106,0.06) 1px,
          transparent 1px,
          transparent 6px
        );
      }
      .sp-card-back::after {
        position: relative;
        font-size: 18px;
        color: rgba(240,201,110,0.55);
        z-index: 1;
      }
      .sp-card-back[data-suit="spade"]::after   { content: '♠\FE0E'; }
      .sp-card-back[data-suit="diamond"]::after { content: '♦\FE0E'; }
      .sp-card-back[data-suit="club"]::after    { content: '♣\FE0E'; }
      .sp-card-back[data-suit="heart"]::after   { content: '♥\FE0E'; }

      .sp-teaser h2 {
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        font-weight: 700;
        color: #f0c96e;
        margin-bottom: 10px;
        letter-spacing: -0.5px;
      }

      .sp-teaser p {
        font-size: 13px;
        color: #666;
        line-height: 1.6;
      }

      .sp-footer {
        text-align: center;
        padding: 24px;
        font-size: 12px;
        color: #333;
        border-top: 1px solid rgba(255,255,255,0.05);
      }

      @media (max-width: 640px) {
        .sp-main {
          grid-template-columns: 1fr;
          padding: 48px 20px;
          gap: 40px;
          text-align: center;
        }
        .sp-cards-row { justify-content: center; }
        .sp-nav { padding: 16px 20px; }
        .sp-nav ul { gap: 16px; }
      }
    `}</style>

    <nav className="sp-nav">
      <a href="/" className="sp-logo">🃏 <span>Super</span>Poker</a>
      <ul>
        <li><a href="/">Home</a></li>
        {/* <li><a href="/about">About</a></li> */}
      </ul>
    </nav>

    <main className="sp-main">
      <div>
        <h1 className="sp-tagline">
          Deal your team<br />
          <span className="gold">the best hand.</span>
        </h1>
        <div className="sp-cards-row">
          <div className="sp-card">1</div>
          <div className="sp-card">3</div>
          <div className="sp-card">5</div>
          <div className="sp-card">8</div>
          <div className="sp-card highlight">?</div>
        </div>
        <p className="sp-learn">
          Not familiar with planning poker?{" "}
          <a href="https://www.mountaingoatsoftware.com/agile/planning-poker" target="_blank" rel="noopener noreferrer">
            Learn more →
          </a>
        </p>
      </div>

      <div className="sp-teaser">
        <div className="sp-teaser-cards">
          <div className="sp-card-back" data-suit="spade" />
          <div className="sp-card-back" data-suit="diamond" />
          <div className="sp-card-back" data-suit="club" />
          <div className="sp-card-back" data-suit="diamond" />
          <div className="sp-card-back" data-suit="heart" />
        </div>
        <h2>The table is being set.</h2>
        <p>Real-time planning poker for agile teams.<br />Something good is coming.</p>
      </div>
    </main>

    <footer className="sp-footer">
      © {new Date().getFullYear()} SuperPoker · Built for agile teams
    </footer>
  </>
)

export default IndexPage
