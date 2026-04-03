import { useState, useEffect } from 'react'
import introVideo from './assets/202603181433.mp4'
import './App.css'

const YT_HIGHLIGHTS = [
  {
    id: 'game-derby',
    title: 'Canestri, rimbalzi e tanta difesa',
    description:
      'Una prestazione completa: punti che pesano, lavoro sotto i tabelloni e aggressività quando si deve chiudere il possesso avversario.',
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

const CLUB_TEAMS = [
  {
    id: 'eutimo',
    name: 'Eutimo Basket Locri',
    seasons: 'Locri',
    league: 'Serie C',
    logo: '/eutimologo.jpeg',
  },
  {
    id: 'ferrara',
    name: 'VIS 2008 Ferrara',
    seasons: 'Ferrara',
    league: 'Serie C',
    logo: '/ferraralogo.jpeg',
  },
  {
    id: 'pozzuoli',
    name: 'Virtus Pozzuoli',
    seasons: 'Pozzuoli',
    league: 'Serie C',
    logo: '/pozzuolilogo.jpeg',
  },
  {
    id: 'viola',
    name: 'Pallacanestro Viola Reggio Calabria',
    seasons: 'Reggio Calabria',
    league: 'Serie B',
    logo: '/violalogo.jpeg',
  },
  {
    id: 'latina',
    name: 'Latina Basket',
    seasons: '2025–26',
    league: 'Serie B',
    logo: '/latinalogo.jpeg',
  },
]

function App() {
  const [introMounted, setIntroMounted] = useState(true)
  const [introExiting, setIntroExiting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const instagramUrl = 'https://www.instagram.com/ilariosimonetti?igsh=MXM5dHNseDA5dnA0eA=='
  const tiktokUrl = 'https://www.tiktok.com/@sssimo.7?_r=1&_t=ZN-95EBVB7Kg34'
  const facebookUrl = 'https://www.facebook.com/share/1CsMyVVD4G/?mibextid=wwXIfr'

  useEffect(() => {
    if (!introExiting) return
    const ms = 780
    const t = window.setTimeout(() => setIntroMounted(false), ms)
    return () => window.clearTimeout(t)
  }, [introExiting])

  useEffect(() => {
    if (introMounted) setMobileMenuOpen(false)
  }, [introMounted])

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

  const finishIntro = () => {
    setIntroExiting(true)
  }

  return (
    <>
      {introMounted && (
        <div className={`intro-overlay intro-cinema ${introExiting ? 'intro-hidden' : ''}`}>
          <div className="intro-cinema-bars" />
          <div className="intro-cinema-screen">
            <div className="intro-vignette" />
            <video
              className="intro-video"
              src={introVideo}
              autoPlay
              muted
              playsInline
              onEnded={finishIntro}
            />
          </div>
          <p className="intro-name">Ilario Simonetti #7</p>
          <div className="intro-overlay-content">
            <button type="button" className="intro-skip" onClick={finishIntro}>
              Salta intro
            </button>
          </div>
        </div>
      )}

      <div
        className={`site ${introMounted && !introExiting ? 'site-hidden' : 'site-visible'}`}
      >
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
          <a href="#club">Club</a>
          <a href="#interviews">Interviste</a>
          <a href="#social">Social</a>
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
            <a href="#club" onClick={handleMobileNavLink}>Club</a>
            <a href="#interviews" onClick={handleMobileNavLink}>Interviste</a>
            <a href="#social" onClick={handleMobileNavLink}>Social</a>
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
              <p className="hero-bio">
                Giocatore · anno 2004 · 200 cm · 103 kg
              </p>
              <p className="hero-tagline">Leader · #7</p>
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
                  src={`https://www.youtube-nocookie.com/embed/${YT_HIGHLIGHTS[0].youtubeId}?rel=0&modestbranding=1`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
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
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/latina1.jpg" alt="Foto latina 1" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/latina2.jpg" alt="Foto latina 2" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/latina3.jpg" alt="Foto latina 3" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/latina4.jpg" alt="Foto latina 4" loading="lazy" />
              </div>
              <div className="photo-card gallery-item">
                <img className="photo-img" src="/latina5.jpg" alt="Foto latina 5" loading="lazy" />
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
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/latina1.jpg" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/latina2.jpg" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/latina3.jpg" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/latina4.jpg" alt="" loading="lazy" />
              </div>
              <div className="photo-card gallery-item" aria-hidden="true">
                <img className="photo-img" src="/latina5.jpg" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="section story-section">
          <div className="section-header">
            <span className="section-label">04</span>
            <div>
              <h2 className="section-title">Storia</h2>
              <p className="section-desc">
                Dalle origini in Calabria al basket nazionale: il percorso, le tappe e gli obiettivi.
              </p>
            </div>
          </div>
          <div className="story-grid">
            <p>
              Sono Ilario Simonetti, nato il 27 maggio 2004 a Stilo, in provincia di Reggio Calabria.
              Gioco a pallacanestro nel ruolo di ala: sono alto 200 cm e peso 103 kg. Mi considero un
              giocatore moderno, capace di unire fisicità, mobilità e versatilità tecnica.
            </p>
            <p>
              La mia passione per il basket nasce così da una straordinaria coincidenza quando avevo
              13 anni: ho iniziato a muovere i primi passi nel settore giovanile dell&apos;Eutimo
              Locri. È lì che ho capito quanto questo sport sarebbe diventato parte della mia vita.
            </p>
            <p>
              Per crescere ho scelto di lasciare casa e continuare il mio percorso alla Vis Ferrara.
              È stata un&apos;esperienza fondamentale, che mi ha permesso di completare la mia
              formazione giovanile e confrontarmi con un livello sempre più alto. In quegli anni è
              arrivata anche la convocazione nella Nazionale Under 16, un traguardo importante che mi
              ha dato grande motivazione e consapevolezza.
            </p>
            <p>
              Il mio ingresso nel basket senior è avvenuto nella stagione 2021/22 con la
              Pallacanestro Molinella in Serie C Gold, dove ho iniziato a confrontarmi con il basket
              dei grandi. L&apos;anno successivo ho fatto un ulteriore passo avanti, approdando alla
              Virtus Bava Pozzuoli in Serie B Nazionale, continuando a crescere sia a livello tecnico
              che mentale.
            </p>
            <p>
              Nel 2023 ho avuto l&apos;opportunità di tornare nella mia terra, indossando la maglia
              della Pallacanestro Viola Reggio Calabria. È stata una delle esperienze più significative
              del mio percorso: diventare capitano, assumermi responsabilità importanti e contribuire
              a portare la squadra ai playoff di Serie B Interregionale mi ha fatto crescere molto,
              dentro e fuori dal campo. In quella stagione ho chiuso con 313 punti in 35 partite,
              una tappa importante della mia crescita.
            </p>
            <p>
              Nel 2025 è arrivata una nuova sfida con la Benacquista Assicurazioni Latina Basket,
              entrando in un contesto ancora più competitivo. È stato un passaggio fondamentale per
              continuare il mio percorso e mettermi alla prova a un livello più alto.
            </p>
            <p>
              In campo cerco di essere un&apos;ala completa: mi piace giocare con intensità, essere
              presente sotto canestro, ma anche adattarmi sul perimetro e migliorare continuamente le
              mie letture offensive. Credo molto nel lavoro quotidiano, nella disciplina e nello
              spirito di squadra.
            </p>
            <p>
              Mi definisco una persona determinata, ambiziosa e sempre alla ricerca del
              miglioramento. Ogni esperienza mi ha insegnato qualcosa e mi ha aiutato a crescere.
            </p>
            <p>
              Il mio obiettivo è continuare a migliorare, consolidarmi nei campionati nazionali e
              raggiungere il livello più alto possibile, senza mai perdere la passione che mi ha
              portato fin qui. 🏀
            </p>
          </div>
        </section>

        <section id="club" className="section club-section" aria-labelledby="club-heading">
          <header className="club-brand-header">
            <span className="section-label">05</span>
            <div className="club-brand-intro">
              <p className="club-brand-kicker">Carriera</p>
              <h2 className="club-brand-title" id="club-heading">
                Club
              </h2>
              <p className="club-brand-lede">
                Le squadre con cui ha vestito la maglia: un percorso che parte dalla Calabria e si è
                costruito nel basket nazionale.
              </p>
            </div>
          </header>

          <div className="club-brand-strip">
            <ul className="club-logos-grid" aria-label="Loghi squadre">
              {CLUB_TEAMS.map((club) => (
                <li key={club.id} className="club-logo-cell">
                  <div className="club-logo-frame">
                    <img
                      className="club-logo-img"
                      src={club.logo}
                      alt={`Logo ${club.name}`}
                      loading="lazy"
                      width={160}
                      height={160}
                      draggable={false}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="interviews" className="section interviews-section">
          <div className="section-header">
            <span className="section-label">06</span>
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
            <article className="interview-card">
              <h4>Intervista su YouTube</h4>
              <div className="interview-embed" aria-hidden="false">
                <iframe
                  title="Intervista su YouTube — video aggiuntivo"
                  src="https://www.youtube.com/embed/eXH2unTwrL4"
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
                  title="Intervista su YouTube — quarto video"
                  src="https://www.youtube.com/embed/Awb7k3ZnIdg"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p>Guarda il video completo su YouTube.</p>
            </article>
          </div>
        </section>

        <section id="social" className="section social-section" aria-labelledby="social-heading">
          <div className="section-header">
            <span className="section-label">07</span>
            <div>
              <h2 className="section-title" id="social-heading">
                Social
              </h2>
              <p className="section-desc">
                Instagram, TikTok e Facebook: contenuti, dietro le quinte e aggiornamenti.
              </p>
            </div>
          </div>
          <ul className="social-section-list">
            <li>
              <a
                className="social-section-card social-section-card--instagram"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-section-card-accent" aria-hidden="true" />
                <span className="social-section-icon-wrap" aria-hidden="true">
                  <img
                    className="social-section-icon-img"
                    src="/icons8-instagram-50.png"
                    alt=""
                  />
                </span>
                <span className="social-section-label">Instagram</span>
                <span className="social-section-handle">@ilariosimonetti</span>
                <p className="social-section-meta">
                  Foto, reel e aggiornamenti direttamente dagli spogliatoi e dal parquet.
                </p>
                <div className="social-section-faux-strip" aria-hidden="true">
                  <span className="social-section-faux-cell" />
                  <span className="social-section-faux-cell" />
                  <span className="social-section-faux-cell" />
                </div>
                <span className="social-section-cta">
                  Apri il profilo
                  <span className="social-section-cta-arrow">→</span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="social-section-card social-section-card--tiktok"
                href={tiktokUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-section-card-accent" aria-hidden="true" />
                <span className="social-section-icon-wrap" aria-hidden="true">
                  <svg className="social-section-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                    />
                  </svg>
                </span>
                <span className="social-section-label">TikTok</span>
                <span className="social-section-handle">@sssimo.7</span>
                <p className="social-section-meta">
                  Clip verticali, trend e dietro le quinte in formato veloce e diretto.
                </p>
                <div className="social-section-faux-strip" aria-hidden="true">
                  <span className="social-section-faux-cell" />
                  <span className="social-section-faux-cell" />
                  <span className="social-section-faux-cell" />
                </div>
                <span className="social-section-cta">
                  Apri il profilo
                  <span className="social-section-cta-arrow">→</span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="social-section-card social-section-card--facebook"
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-section-card-accent" aria-hidden="true" />
                <span className="social-section-icon-wrap" aria-hidden="true">
                  <img
                    className="social-section-icon-img"
                    src="/icons8-facebook-nuovo-50-2.png"
                    alt=""
                  />
                </span>
                <span className="social-section-label">Facebook</span>
                <span className="social-section-handle">Pagina ufficiale</span>
                <p className="social-section-meta">
                  Post, comunicazioni e spazio per la community che segue Ilario.
                </p>
                <div className="social-section-faux-strip" aria-hidden="true">
                  <span className="social-section-faux-cell" />
                  <span className="social-section-faux-cell" />
                  <span className="social-section-faux-cell" />
                </div>
                <span className="social-section-cta">
                  Apri la pagina
                  <span className="social-section-cta-arrow">→</span>
                </span>
              </a>
            </li>
          </ul>
        </section>

        <section id="store" className="section store-section">
          <div className="section-header">
            <span className="section-label">08</span>
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
        <div className="footer-basket-particles" aria-hidden="true">
          <span className="footer-basket-particle" style={{ '--x': '8%', '--y': '24%', '--dx': '95px', '--dy': '-16px', '--dx1': '34px', '--dy1': '20px', '--dx2': '62px', '--dy2': '-4px', '--t': '12s', '--s': '18px', '--o': 0.5 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '26%', '--y': '62%', '--dx': '-80px', '--dy': '-20px', '--dx1': '-28px', '--dy1': '18px', '--dx2': '-54px', '--dy2': '-6px', '--t': '15s', '--s': '14px', '--o': 0.45 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '44%', '--y': '30%', '--dx': '72px', '--dy': '-14px', '--dx1': '24px', '--dy1': '14px', '--dx2': '48px', '--dy2': '-5px', '--t': '14s', '--s': '16px', '--o': 0.52 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '63%', '--y': '66%', '--dx': '-62px', '--dy': '-18px', '--dx1': '-20px', '--dy1': '16px', '--dx2': '-42px', '--dy2': '-8px', '--t': '16s', '--s': '20px', '--o': 0.48 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '82%', '--y': '26%', '--dx': '86px', '--dy': '-22px', '--dx1': '30px', '--dy1': '18px', '--dx2': '58px', '--dy2': '-7px', '--t': '18s', '--s': '15px', '--o': 0.42 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '14%', '--y': '46%', '--dx': '70px', '--dy': '-24px', '--dx1': '25px', '--dy1': '15px', '--dx2': '50px', '--dy2': '-8px', '--t': '11s', '--s': '13px', '--o': 0.44 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '33%', '--y': '18%', '--dx': '-75px', '--dy': '-10px', '--dx1': '-22px', '--dy1': '12px', '--dx2': '-48px', '--dy2': '-2px', '--t': '13.5s', '--s': '17px', '--o': 0.47 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '52%', '--y': '54%', '--dx': '64px', '--dy': '-18px', '--dx1': '20px', '--dy1': '14px', '--dx2': '42px', '--dy2': '-5px', '--t': '10.5s', '--s': '12px', '--o': 0.4 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '72%', '--y': '42%', '--dx': '-68px', '--dy': '-20px', '--dx1': '-18px', '--dy1': '13px', '--dx2': '-40px', '--dy2': '-7px', '--t': '14.5s', '--s': '19px', '--o': 0.5 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '90%', '--y': '58%', '--dx': '52px', '--dy': '-14px', '--dx1': '16px', '--dy1': '10px', '--dx2': '34px', '--dy2': '-4px', '--t': '12.8s', '--s': '14px', '--o': 0.41 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '5%', '--y': '70%', '--dx': '88px', '--dy': '-22px', '--dx1': '32px', '--dy1': '17px', '--dx2': '60px', '--dy2': '-6px', '--t': '17.5s', '--s': '16px', '--o': 0.46 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '22%', '--y': '34%', '--dx': '-60px', '--dy': '-12px', '--dx1': '-20px', '--dy1': '11px', '--dx2': '-38px', '--dy2': '-3px', '--t': '9.8s', '--s': '11px', '--o': 0.38 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '41%', '--y': '72%', '--dx': '58px', '--dy': '-16px', '--dx1': '18px', '--dy1': '12px', '--dx2': '36px', '--dy2': '-5px', '--t': '15.2s', '--s': '15px', '--o': 0.43 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '58%', '--y': '16%', '--dx': '-82px', '--dy': '-18px', '--dx1': '-26px', '--dy1': '14px', '--dx2': '-56px', '--dy2': '-7px', '--t': '16.8s', '--s': '18px', '--o': 0.49 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '77%', '--y': '74%', '--dx': '66px', '--dy': '-21px', '--dx1': '21px', '--dy1': '15px', '--dx2': '44px', '--dy2': '-8px', '--t': '13.2s', '--s': '13px', '--o': 0.42 }}>
            <span className="footer-basket-particle-icon" />
          </span>
          <span className="footer-basket-particle" style={{ '--x': '95%', '--y': '40%', '--dx': '-48px', '--dy': '-11px', '--dx1': '-14px', '--dy1': '9px', '--dx2': '-30px', '--dy2': '-3px', '--t': '11.7s', '--s': '12px', '--o': 0.36 }}>
            <span className="footer-basket-particle-icon" />
          </span>
        </div>
        <span className="footer-brand">Ilario Simonetti #7</span>
        <div className="footer-right">
          <div className="social-links" aria-label="Social links">
            <a
              className="social-link"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <img className="social-icon-img" src="/icons8-instagram-50.png" alt="" aria-hidden="true" />
            </a>
            {facebookUrl ? (
              <a
                className="social-link"
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <img
                  className="social-icon-img"
                  src="/icons8-facebook-nuovo-50-2.png"
                  alt=""
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>
          <span className="footer-copyright">© 2026 · Sito ufficiale</span>
        </div>
      </footer>
      </div>
    </>
  )
}

export default App
