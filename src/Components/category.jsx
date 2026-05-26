import "./category.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import item1 from "../assets/images/item1.webm";
import item2 from "../assets/images/item2.webm";
import item3 from "../assets/images/item3.webm";
import item4 from "../assets/images/item4.webm";

export function Category() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  const cards = [
    {
      title: "Velocity Scroll",
      video: item1,
    },
    {
      title: "Horizontal Text",
      video: item2,
    },
    {
      title: "Scrubbed Bento Gallery",
      video: item3,
    },
    {
      title: "Infinite card slider",
      video: item4,
    },
  ];

  return (
    <div className="owow-page">
      <div id="details-topbar">
        <button id="details-back" onClick={goBack}>
          ← Home
        </button>
      </div>

      <main className="content">
        <h1>Scroll</h1>

        <section className="grid">
          {cards.map((card) => (
            <div className="card clickable" key={card.title}>
              <video
                src={card.video}
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
              />

              <span className="label">{card.title}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Category;