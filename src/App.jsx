import { useState, useEffect } from 'react'
import introVideo from './assets/202603181433.mp4'
import './App.css'

const YT_HIGHLIGHTS = [
  {
    id: 'game-derby',
    title: '35 punti nel derby cittadino',
    description: "Derby di fuoco, Ilario chiude con 35 punti e il buzzer beater sull'angolo sinistro.",
    youtubeId: 'lVvjB86NlPM',
  },
  {
    id: 'highlight-extra-1',
    title: 'Highlight YouTube',
    description: 'Guarda il video su YouTube.',
    youtubeId: 'JYJfGWHTEho',
  },
  {
    id: 'highlight-extra-2',
    title: 'Highlight YouTube',
    description: 'Guarda il video su YouTube.',
    youtubeId: 'Zvu_SEi4XdU',
  },
]

const LAST_5_GAMES = [
  {
    date: 'Feb 22, 2026',
    homeAway: 'vs',
    opponent: 'POW',
    league: 'ITA-3 B',
    score: '86-80',
    min: 5,
    pts: 6,
    reb: 0,
    ast: 0,
    eff: 4,
  },
  {
    date: 'Feb 14, 2026',
    homeAway: 'vs',
    opponent: 'RIS',
    league: 'ITA-3 B',
    score: '89-74',
    min: 17,
    pts: 6,
    reb: 3,
    ast: 2,
    eff: 4,
  },
  {
    date: 'Feb 7, 2026',
    homeAway: '@',
    opponent: 'LOR',
    league: 'ITA-3 B',
    score: '58-84',
    min: 23,
    pts: 6,
    reb: 4,
    ast: 4,
    eff: 13,
  },
  {
    date: 'Feb 1, 2026',
    homeAway: 'vs',
    opponent: 'JES',
    league: 'ITA-3 B',
    score: '77-73',
    min: 8,
    pts: 0,
    reb: 0,
    ast: 0,
    eff: -1,
  },
  {
    date: 'Dec 21, 2025',
    homeAway: '@',
    opponent: 'SOL',
    league: 'ITA-3 B',
    score: '85-90',
    min: 16,
    pts: 7,
    reb: 2,
    ast: 0,
    eff: 5,
  },
]

const REGULAR_SEASON_STATS = [
  {
    season: '22-23',
    team: 'Bava Pozzuoli',
    league: 'ITA-3 D',
    pts: 2.6,
    reb: 1.5,
    ast: 0.2,
    gp: 28,
    min: 12,
    fg: 40.6,
    three: 26.5,
    ft: 66.7,
    or: 0.4,
    dr: 1.1,
    stl: 0.2,
    to: 0.6,
    blk: 0,
    fo: 1.5,
    eff: 2.4,
  },
  {
    season: '25-26',
    team: 'B.A. Latina',
    league: 'ITA-3 B',
    pts: 5.7,
    reb: 1.8,
    ast: 1.0,
    gp: 21,
    min: 15.3,
    fg: 51.1,
    three: 31.4,
    ft: 51.9,
    or: 0.7,
    dr: 1.0,
    stl: 0.4,
    to: 0.7,
    blk: 0,
    fo: 1.9,
    eff: 5.3,
  },
]

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [introFinished, setIntroFinished] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!showIntro) {
      const timer = setTimeout(() => setIntroFinished(true), 400)
      return () => clearTimeout(timer)
    }
  }, [showIntro])

  useEffect(() => {
    // Close menu if intro is shown again
    if (showIntro) setMobileMenuOpen(false)
  }, [showIntro])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [mobileMenuOpen])

  const handleMobileNavLink = () => setMobileMenuOpen(false)

  return (
    <>
      {showIntro && (
        <div className={`intro-overlay intro-cinema ${introFinished ? 'intro-hidden' : ''}`}>
          <div className="intro-cinema-bars" />
          <div className="intro-cinema-screen">
            <div className="intro-vignette" />
            <video
              className="intro-video"
              src={introVideo}
              autoPlay
              muted
              playsInline
              onEnded={() => setShowIntro(false)}
            />
          </div>
          <p className="intro-name">Ilario Simonetti #7</p>
          <div className="intro-overlay-content">
            <button className="intro-skip" onClick={() => setShowIntro(false)}>
              Salta intro
            </button>
          </div>
        </div>
      )}

      <div className={`site ${showIntro ? 'site-hidden' : 'site-visible'}`}>
      <header className="site-header">
        <a href="#" className="brand">
          <span className="brand-avatar-card" aria-hidden="true">
            <img className="brand-avatar" src="/avatar.JPG" alt="" />
          </span>
          <span className="brand-name">Ilario Simonetti</span>
          <span className="brand-number">#7</span>
        </a>

        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label="Apri menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          <img
            className="mobile-nav-icon"
            src="/icons8-pallacanestro-64.png"
            alt=""
            aria-hidden="true"
          />
        </button>

        <nav className="main-nav" aria-label="Menu principale">
          <a href="#highlights">Highlights</a>
          <a href="#stats">Statistiche</a>
          <a href="#gallery">Foto</a>
          <a href="#story">Storia</a>
          <a href="#interviews">Interviste</a>
          <div className="basket-particles" aria-hidden="true">
            <span
              className="basket-particle"
              style={{ '--x': '6%', '--y': '25%', '--dx': '110px', '--dy': '-10px', '--dx1': '40px', '--dy1': '18px', '--dx2': '75px', '--dy2': '-2px', '--t': '13s', '--s': '22px', '--o': 0.6 }}
            >
              <span className="basket-particle-icon" />
            </span>
            <span
              className="basket-particle"
              style={{ '--x': '28%', '--y': '10%', '--dx': '-70px', '--dy': '40px', '--dx1': '-25px', '--dy1': '-10px', '--dx2': '-55px', '--dy2': '18px', '--t': '16s', '--s': '16px', '--o': 0.5 }}
            >
              <span className="basket-particle-icon" />
            </span>
            <span
              className="basket-particle"
              style={{ '--x': '46%', '--y': '35%', '--dx': '70px', '--dy': '25px', '--dx1': '26px', '--dy1': '-8px', '--dx2': '55px', '--dy2': '8px', '--t': '18s', '--s': '20px', '--o': 0.55 }}
            >
              <span className="basket-particle-icon" />
            </span>
            <span
              className="basket-particle"
              style={{ '--x': '62%', '--y': '18%', '--dx': '-90px', '--dy': '15px', '--dx1': '-30px', '--dy1': '-12px', '--dx2': '-65px', '--dy2': '4px', '--t': '14s', '--s': '26px', '--o': 0.6 }}
            >
              <span className="basket-particle-icon" />
            </span>
            <span
              className="basket-particle"
              style={{ '--x': '82%', '--y': '30%', '--dx': '60px', '--dy': '-20px', '--dx1': '22px', '--dy1': '14px', '--dx2': '48px', '--dy2': '-5px', '--t': '20s', '--s': '18px', '--o': 0.48 }}
            >
              <span className="basket-particle-icon" />
            </span>
            <span
              className="basket-particle"
              style={{ '--x': '12%', '--y': '65%', '--dx': '100px', '--dy': '-30px', '--dx1': '35px', '--dy1': '18px', '--dx2': '70px', '--dy2': '-12px', '--t': '21s', '--s': '16px', '--o': 0.4 }}
            >
              <span className="basket-particle-icon" />
            </span>
            <span
              className="basket-particle"
              style={{ '--x': '38%', '--y': '60%', '--dx': '-60px', '--dy': '-25px', '--dx1': '-22px', '--dy1': '14px', '--dx2': '-46px', '--dy2': '-10px', '--t': '19s', '--s': '24px', '--o': 0.55 }}
            >
              <span className="basket-particle-icon" />
            </span>
            <span
              className="basket-particle"
              style={{ '--x': '68%', '--y': '62%', '--dx': '50px', '--dy': '-25px', '--dx1': '18px', '--dy1': '12px', '--dx2': '38px', '--dy2': '-8px', '--t': '17s', '--s': '18px', '--o': 0.46 }}
            >
              <span className="basket-particle-icon" />
            </span>
          </div>
        </nav>
        <a href="#store" className="nav-cta">Shop</a>
      </header>

      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principale (mobile)"
      >
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Chiudi menu"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="mobile-nav-panel">
          <div className="mobile-nav-top">
            <span className="mobile-nav-title">Menu</span>
            <button
              type="button"
              className="mobile-nav-close"
              aria-label="Chiudi menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              ×
            </button>
          </div>

          <nav className="mobile-nav" aria-label="Menu principale">
            <a href="#highlights" onClick={handleMobileNavLink}>Highlights</a>
            <a href="#stats" onClick={handleMobileNavLink}>Statistiche</a>
            <a href="#gallery" onClick={handleMobileNavLink}>Foto</a>
            <a href="#story" onClick={handleMobileNavLink}>Storia</a>
            <a href="#interviews" onClick={handleMobileNavLink}>Interviste</a>
            <a href="#store" className="mobile-nav-cta" onClick={handleMobileNavLink}>Shop</a>
          </nav>
        </div>
      </div>

      <main>
        <section className="hero-section">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-label">Basketball · Point Guard</p>
              <h1 className="hero-title">Ilario Simonetti</h1>
              <p className="hero-tagline">Giocatore. Leader. #7.</p>
              <div className="hero-actions">
                <a href="#highlights" className="primary-btn">Guarda gli highlights</a>
                <a href="#store" className="ghost-btn">Maglia ufficiale</a>
              </div>
              <div className="hero-metrics">
                <span><em>PPG</em> 5.7</span>
                <span><em>AST</em> 1</span>
                <span><em>REB</em> 1.8</span>
                <span><em>3PT%</em> 31.4</span>
              </div>
            </div>

            <div className="hero-media" aria-hidden="true">
              <div className="hero-video-wrap">
                <video
                  className="hero-video hero-video-desktop"
                  src={introVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/avatar.JPG"
                />
                <video
                  className="hero-video hero-video-mobile"
                  src="/202603191406.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/avatar.JPG"
                />
                <div className="hero-video-overlay" />
              </div>
            </div>
          </div>
        </section>

        <section className="motivation-banner" aria-label="Banner motivazionale scorrevole">
          <div className="motivation-marquee" aria-hidden="true">
            <div className="motivation-track">
              <span className="motivation-pill">Disciplina oggi. Risultati domani.</span>
              <span className="motivation-pill">Ogni possesso conta.</span>
              <span className="motivation-pill">Testa alta. Cuore caldo.</span>
              <span className="motivation-pill">Lavora in silenzio. Vinci sul parquet.</span>
              <span className="motivation-pill">Ritmo. Letture. Leadership.</span>
              <span className="motivation-pill">Zero alibi. Solo lavoro.</span>

              {/* duplicate for seamless loop */}
              <span className="motivation-pill" aria-hidden="true">Disciplina oggi. Risultati domani.</span>
              <span className="motivation-pill" aria-hidden="true">Ogni possesso conta.</span>
              <span className="motivation-pill" aria-hidden="true">Testa alta. Cuore caldo.</span>
              <span className="motivation-pill" aria-hidden="true">Lavora in silenzio. Vinci sul parquet.</span>
              <span className="motivation-pill" aria-hidden="true">Ritmo. Letture. Leadership.</span>
              <span className="motivation-pill" aria-hidden="true">Zero alibi. Solo lavoro.</span>
            </div>
          </div>
        </section>

        <section id="highlights" className="section section-highlights">
          <div className="section-header">
            <span className="section-label">01</span>
            <div>
              <h2 className="section-title">Highlights</h2>
              <p className="section-desc">I video dal canale YouTube.</p>
            </div>
          </div>
          <div className="highlights-layout">
            <div className="highlight-featured">
              <div className="embed-wrapper">
                <iframe
                  title={YT_HIGHLIGHTS[0].title}
                  src={`https://www.youtube.com/embed/${YT_HIGHLIGHTS[0].youtubeId}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="featured-caption">
                <h4>{YT_HIGHLIGHTS[0].title}</h4>
                <p>{YT_HIGHLIGHTS[0].description}</p>
              </div>
            </div>

            <div className="highlight-list">
              {YT_HIGHLIGHTS.slice(1).map((video) => (
                <a
                  key={video.id}
                  className="highlight-row"
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="thumb">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                    />
                    <span className="thumb-play">▶</span>
                  </div>
                  <div className="meta">
                    <h5>{video.title}</h5>
                    <p>{video.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="stats" className="section stats-section">
          <div className="section-header">
            <span className="section-label">02</span>
            <div>
              <h2 className="section-title">Statistiche</h2>
              <p className="section-desc">I numeri della stagione.</p>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stats-main">
              <div className="last5">
                <h4 className="last5-title">Last 5 games</h4>

                <div className="last5-head">
                  <span>Date</span>
                  <span>Opp</span>
                  <span>Score</span>
                  <span>MIN</span>
                  <span>PTS</span>
                  <span>REB</span>
                  <span>AST</span>
                  <span>EFF</span>
                </div>

                {LAST_5_GAMES.map((g) => (
                  <div className="last5-row" key={`${g.date}-${g.opponent}`}>
                    <span>{g.date}</span>
                    <span>
                      {g.homeAway} {g.opponent}
                    </span>
                    <span>{g.score}</span>
                    <span>{g.min}</span>
                    <span>{g.pts}</span>
                    <span>{g.reb}</span>
                    <span>{g.ast}</span>
                    <span className="last5-eff">{g.eff}</span>
                  </div>
                ))}
              </div>

              <div className="regular-season">
                <h4 className="regular-season-title">Regular Season Stats</h4>

                <div className="regular-season-wrap">
                  <table className="regular-season-table">
                    <thead>
                      <tr>
                        <th>SEASON</th>
                        <th>TEAM</th>
                        <th>LEAGUE</th>
                        <th>PTS</th>
                        <th>REB</th>
                        <th>AST</th>
                        <th>GP</th>
                        <th>MIN</th>
                        <th>FG%</th>
                        <th>3%</th>
                        <th>1%</th>
                        <th>OR</th>
                        <th>DR</th>
                        <th>STL</th>
                        <th>TO</th>
                        <th>BLK</th>
                        <th>FO</th>
                        <th>EFF</th>
                      </tr>
                    </thead>
                    <tbody>
                      {REGULAR_SEASON_STATS.map((s) => (
                        <tr key={`${s.season}-${s.team}`}>
                          <td>{s.season}</td>
                          <td>{s.team}</td>
                          <td>{s.league}</td>
                          <td>{s.pts}</td>
                          <td>{s.reb}</td>
                          <td>{s.ast}</td>
                          <td>{s.gp}</td>
                          <td>{s.min}</td>
                          <td>{s.fg}</td>
                          <td>{s.three}</td>
                          <td>{s.ft}</td>
                          <td>{s.or}</td>
                          <td>{s.dr}</td>
                          <td>{s.stl}</td>
                          <td>{s.to}</td>
                          <td>{s.blk}</td>
                          <td>{s.fo}</td>
                          <td className="regular-season-eff">{s.eff}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="stats-side">
              <h4>Shot chart snapshot</h4>
              <p>
                Volume alto dal pick&roll centrale, floater affidabile nel traffico e piedi a posto
                in angolo per la tripla piedi per terra.
              </p>
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery-section">
          <div className="section-header">
            <span className="section-label">03</span>
            <div>
              <h2 className="section-title">Foto</h2>
              <p className="section-desc">Game day, backstage, parquet.</p>
            </div>
          </div>
          <div className="gallery-scroll" aria-label="Galleria foto">
            <div className="gallery-track">
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/Immagine%201.jpg" alt="Foto 1" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/Immagine%202.jpg" alt="Foto 2" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/Immagine%203.jpg" alt="Foto 3" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/Immagine%204.jpg" alt="Foto 4" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/Immagine.jpg" alt="Foto" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/IMG_8393.JPG" alt="Foto 8393" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/IMG_8397.JPG" alt="Foto 8397" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/avatar.JPG" alt="Avatar" loading="lazy" />
              </div>

              {/* duplicate for infinite marquee */}
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/Immagine%201.jpg" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/Immagine%202.jpg" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/Immagine%203.jpg" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/Immagine%204.jpg" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/Immagine.jpg" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/IMG_8393.JPG" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/IMG_8397.JPG" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/avatar.JPG" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="section story-section">
          <div className="section-header">
            <span className="section-label">04</span>
            <div>
              <h2 className="section-title">Storia</h2>
              <p className="section-desc">Dal campetto alle luci del palazzo.</p>
            </div>
          </div>
          <div className="story-grid">
            <p>
              Cresciuto tra playground e palestre di periferia, Ilario impara presto che il talento è
              solo il punto di partenza. Dopo gli anni nelle giovanili, debutta tra i professionisti
              a 18 anni, diventando in poco tempo uno dei playmaker più imprevedibili del campionato.
            </p>
            <p>
              Oggi è il motore offensivo della sua squadra: ritmo alto, letture istantanee e quella
              capacità di prendersi il possesso decisivo quando il pallone pesa di più.
            </p>
          </div>
        </section>

        <section id="interviews" className="section interviews-section">
          <div className="section-header">
            <span className="section-label">05</span>
            <div>
              <h2 className="section-title">Interviste</h2>
              <p className="section-desc">Le parole dietro le prestazioni.</p>
            </div>
          </div>
          <div className="interviews-list">
            <article className="interview-card">
              <h4>Intervista su YouTube</h4>
              <div className="interview-embed" aria-hidden="false">
                <iframe
                  title="Intervista su YouTube"
                  src="https://www.youtube.com/embed/65aIZaXnSv4"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p>Guarda il video completo su YouTube.</p>
            </article>
            <article className="interview-card">
              <h4>Intervista su YouTube</h4>
              <div className="interview-embed" aria-hidden="false">
                <iframe
                  title="Intervista su YouTube"
                  src="https://www.youtube.com/embed/IWBqUVu9HUw"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p>Guarda il video completo su YouTube.</p>
            </article>
          </div>
        </section>

        <section id="store" className="section store-section">
          <div className="section-header">
            <span className="section-label">06</span>
            <div>
              <h2 className="section-title">Shop</h2>
              <p className="section-desc">Maglia ufficiale da gioco. Stesso numero, solo tua.</p>
            </div>
          </div>
          <div className="store-grid">
            <div className="jersey-card">
              <div className="jersey-visual">
                <span className="jersey-number">7</span>
                <span className="jersey-name">SIMONETTI</span>
                <span className="jersey-stripe" />
              </div>
            </div>
            <div className="jersey-info">
              <p className="price">€ 89,00</p>
              <ul className="features">
                <li>Tessuto tecnico traspirante premium</li>
                <li>Patch olografica ufficiale gara</li>
                <li>Possibilità di personalizzazione nome</li>
              </ul>
              <button className="primary-btn full">Aggiungi al carrello</button>
              <p className="note">Checkout non ancora attivo · prototipo UX</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="footer-brand">Ilario Simonetti #7</span>
        <span>© 2026 · Sito ufficiale</span>
      </footer>
      </div>
    </>
  )
}

export default App
