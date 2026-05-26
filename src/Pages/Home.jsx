import { Link } from "react-router-dom";
import './Home.css';
import item1 from "../assets/images/item1.webm";
import item2 from "../assets/images/item2.webm";
import item3 from "../assets/images/item3.webm";
import item4 from "../assets/images/item4.webm";
import item5 from "../assets/images/item5.webm";
import item6 from "../assets/images/item6.webm";
import { useEffect } from "react";

function Home() {

    const sections = [
        {
            title: 'Scroll',
            route: '/category',
            cards: [
                { title: 'Scrubbed Bento Gallery', video: item1 },
                { title: 'Link to Scroll Progress', video: item2 },
                { title: 'Horizontal Scroll', video: item3 },
            ],
        },
        {
            title: 'Hover',
            route: '/details',
            cards: [
                { title: 'Cursor Tracking Image', video: item4 },
                { title: 'MacOS Dock Effect', video: item5 },
                { title: 'Proximity Scale Grid', video: item6 },
            ],
        },
    ]

    return (
        <main className="home-page">
            <section className="hero-panel">
                <div className="hero-copy">
                    <h1>Explore Atlas Animations</h1>

                    <p>
                        Discover, preview and reuse animations across Atlas projects
                    </p>
                </div>

                <button
                    className="hero-cta"
                    type="button"
                    aria-label="Explore all our work"
                >
                    <span className="hero-cta-label">
                        EXPLORE ALL OUR WORK
                    </span>

                    <span aria-hidden="true">&rarr;</span>
                </button>
            </section>

            {sections.map((section) => (
                <section className="gallery-section" key={section.title}>
                    <div className="section-head">
                        <h2>{section.title}</h2>

                        <Link to={section.route} className="view-all">
                            <span>View all</span>
                            <span className="view-all-arrow" aria-hidden="true">&gt;</span>
                        </Link>
                    </div>

                    <div className="card-grid">
                        {section.cards.map((card) => (
                            <article className="preview-card" key={card.title}>
                                <video
                                    src={card.video}
                                    style={
                                        card.video === item5
                                            ? { objectPosition: 'center bottom' }
                                            : card.video === item4
                                                ? { objectPosition: 'center top' }
                                                : undefined
                                    }
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    onMouseEnter={(e) => e.currentTarget.play()}
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
    );
}

export default Home;