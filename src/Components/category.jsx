import "./category.css";
import React from "react";
import {
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";

import item1 from "../assets/images/item1.webm";
import item2 from "../assets/images/item2.webm";
import item3 from "../assets/images/item3.webm";
import item4 from "../assets/images/item4.webm";
import item5 from "../assets/images/item5.webm";
import item6 from "../assets/images/item6.webm";

export function Category() {
  const navigate = useNavigate();
  const { type } = useParams();

  function goBack() {
    navigate("/");
  }

  const categoryData = {
    scroll: {
      title: "Scroll",

      cards: [
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
      ],
    },

    hover: {
      title: "Hover",

      cards: [
        {
          title: "Cursor Tracking Image",
          video: item4,
        },

        {
          title: "MacOS Dock Effect",
          video: item5,
        },

        {
          title: "Proximity Scale Grid",
          video: item6,
        },

        {
          title: "Hover Animation",
          video: item1,
        },
      ],
    },
  };

  const currentCategory =
    categoryData[type] || categoryData.scroll;

  return (
    <div className="owow-page">
      <div id="details-topbar">
        <button id="details-back" onClick={goBack}>
          ← Home
        </button>
      </div>

      <main className="content">
        <h1>{currentCategory.title}</h1>

        <section className="grid">
          {currentCategory.cards.map((card) => (
            <Link
              to="/details"
              state={{
                animation: {
                  ...card,
                  previewVideo: card.video,
                },
              }}
              className="card clickable"
              key={card.title}
            >
              <video
                src={card.video}
                loop
                muted
                playsInline
                preload="metadata"
                onMouseEnter={(e) =>
                  e.currentTarget.play()
                }
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />

              <span className="label">
                {card.title}
              </span>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Category;