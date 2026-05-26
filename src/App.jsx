import './App.css'

function App() {
  const sections = [
    {
      title: 'Scroll',
      cards: [
        'Scrubbed Bento Gallery',
        'Link to Scroll Progress',
        'Horizontal Scroll',
      ],
    },
    {
      title: 'Hover',
      cards: [
        'Cursor Tracking Image',
        'MacOS Dock Effect',
        'Proximity Scale Grid',
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
              <article className="preview-card" key={card}>
                <img src="/images/placeholder.jpg" alt={card} loading="lazy" />
                <p>{card}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default App
