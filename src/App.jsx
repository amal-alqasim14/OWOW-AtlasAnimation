import './App.css'

function App() {
  const sections = [
    {
      title: 'Scroll',
      cards: [
        { title: 'Scrubbed Bento Gallery', video: '/images/item1.webm' },
        { title: 'Link to Scroll Progress', video: '/images/item2.webm' },
        { title: 'Horizontal Scroll', video: '/images/item3.webm' },
      ],
    },
    {
      title: 'Hover',
      cards: [
        { title: 'Cursor Tracking Image', video: '/images/item4.webm' },
        { title: 'MacOS Dock Effect', video: '/images/item5.webm' },
        { title: 'Proximity Scale Grid', video: '/images/item6.webm' },
      ],
    },
  ]

  return (
    <main className="home-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <h1>Explore Atlas Animations</h1>
          <p>Discover, preview and reuse animations across Atlas projects</p>
        </div>
        <button className="hero-cta" type="button" aria-label="Explore all our work">
          <span className="hero-cta-label">EXPLORE ALL OUR WORK</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </section>

      {sections.map((section) => (
        <section className="gallery-section" key={section.title}>
          <div className="section-head">
            <h2>{section.title}</h2>
            <button type="button" className="view-all">
              <span>View all</span>
              <span className="view-all-arrow" aria-hidden="true">&gt;</span>
            </button>
          </div>

          <div className="card-grid">
            {section.cards.map((card) => (
              <article className="preview-card" key={card.title}>
                <video
                  src={card.video}
                  style={card.video === '/images/item5.webm' ? { objectPosition: 'center bottom' } : undefined}
                  style={card.video === '/images/item4.webm' ? { objectPosition: 'center top' } : undefined}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => {
                    e.currentTarget.play();
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                  aria-label={card.title}
                />
                <p>{card.title}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default App
