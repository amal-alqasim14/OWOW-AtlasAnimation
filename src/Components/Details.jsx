import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Details.css";

import item1 from "../assets/images/item1.webm";
import item2 from "../assets/images/item2.webm";
import item3 from "../assets/images/item3.webm";
import item4 from "../assets/images/item4.webm";
import item5 from "../assets/images/item5.webm";
import item6 from "../assets/images/item6.webm";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const fallbackAnimation = {
    title: "Cursor Tracking Image",
    previewVideo: item1,
    description:
      "This animation creates a smooth interactive motion effect that can be reused across Atlas projects.",
    goodFor: "Cards, previews, headings, interactive UI moments.",
    avoidFor: "Large blocks of content or places where motion can distract the user.",
    code: `gsap.to(element, {
  duration: 1,
  ease: "power2.out"
});`,
    related: [
      {
        id: 1,
        title: "Scrubbed Bento Gallery",
        video: item2,
        tags: ["Scroll animation"],
      },
      {
        id: 2,
        title: "MacOS Dock Effect",
        video: item3,
        tags: ["Hover animation"],
      },
      {
        id: 3,
        title: "Proximity Scale Grid",
        video: item4,
        tags: ["Interactive animation"],
      },
    ],
  };

  const selectedAnimation = location.state?.animation;

  const ANIMATION = {
    ...fallbackAnimation,
    ...selectedAnimation,
    previewVideo:
      selectedAnimation?.previewVideo ||
      selectedAnimation?.video ||
      fallbackAnimation.previewVideo,
  };

  function goBack() {
    navigate("/");
  }

  function copyCode() {
    navigator.clipboard.writeText(ANIMATION.code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <div id="details-topbar">
        <button id="details-back" onClick={goBack}>
          ← Home
        </button>
      </div>

      <div id="details-body">
        <div id="details-main">
          <h1 id="details-title">{ANIMATION.title}</h1>

          <div id="details-hero-card">
            <video
              src={ANIMATION.previewVideo}
              id="details-hero-video"
              loop
              muted
              playsInline
              preload="metadata"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
          </div>

          <div id="details-info-row">
            <div className="details-info-card">
              <p className="details-info-heading">Description</p>
              <p className="details-info-body">
                {ANIMATION.description}
              </p>
            </div>

            <div className="details-info-card">
              <p className="details-info-heading">Usage Guidelines</p>

              <p className="details-usage-label good">Good for:</p>
              <p className="details-usage-text">{ANIMATION.goodFor}</p>

              <p className="details-usage-label avoid">Avoid for:</p>
              <p className="details-usage-text">{ANIMATION.avoidFor}</p>
            </div>
          </div>

          <div id="details-code-block">
            <div id="details-code-header">
              <span id="details-code-label">Code</span>

              <button id="details-copy-btn" onClick={copyCode}>
                {copied ? "✓ Copied" : "⧉ Copy"}
              </button>
            </div>

            <pre id="details-code-pre">
              <code>
                {ANIMATION.code.split("\n").map((line, i) => (
                  <span
                    key={i}
                    className={
                      line.trim().startsWith("//")
                        ? "code-comment"
                        : "code-line"
                    }
                  >
                    {line.split(/(".*?"|'.*?')/g).map((part, j) =>
                      /^["']/.test(part) ? (
                        <span key={j} className="code-string">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                    {"\n"}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div id="details-browse">
        <p id="details-browse-heading">Browse for more</p>

        <div id="details-browse-grid">
          {ANIMATION.related.map((item) => (
            <div key={item.id} className="related-card">
              <div className="related-card-img-wrap">
                <video
                  src={item.video}
                  className="related-card-img"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              </div>

              <div className="related-card-tags">
                {item.tags.map((tag, i) => (
                  <p key={i} className="related-card-tag">
                    {tag}
                  </p>
                ))}
              </div>

              <p className="related-card-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Details;