import React, { useState } from "react";
import "./Details.css";
import { useEffect } from "react";

const ANIMATION = {
    title: "Cursor Tracking Image",
    tags: [
        "restart reverse scrub pin markers overwrite modifiers",
        "toggleActions start end once refresh from to",
        "ScrollSmoother Flip Draggable SplitText InertiaPlugin",
        "onComplete onUpdate quickSetter quickTo utils.toArray",
        "Power2 Power3 Power4 Back Elastic Bounce Expo Sine",
    ],
    previewImage: "https://placehold.co/120x80/2a5a2a/7ecb7e?text=~",
    description: `This animation creates a "text scrambling" or "decrypting" effect where letters rapidly cycle through random characters before resolving into readable text. It gives the impression of a system decoding data in real time. The animation typically transitions from chaotic noise into a clean final message, making it feel dynamic, futuristic, and interactive.`,
    goodFor: "Short phrases, headings, or key UI moments.",
    avoidFor: "Large blocks of body text.",
    code: `// use the defaults\ngsap.to(element, { duration: 1, scrambleText: "THIS IS NEW TEXT!" });\n\n// for customize things\ngsap.to(element, {\n  duration: 1,\n  scrambleText: {\n    text: "THIS IS NEW TEXT",\n    chars: "liz",\n    revealDelay: 0.5,\n    speed: 0.3,\n    newClass: "myClass"\n  }\n});`,
    related: [
        { id: 1, title: "Cursor Tracking Image", image: "https://placehold.co/400x225/1a3a1a/7ecb7e?text=~", tags: ["restart reverse scrub pin markers overwrite modifiers"] },
        { id: 2, title: "MacOS Dock Effect", image: "https://placehold.co/400x225/1a1a3a/7e7ecb?text=●●●", tags: ["toggleActions start end once refresh from to"] },
        { id: 3, title: "Proximity Scale Grid", image: "https://placehold.co/400x225/2a2a2a/888?text=grid", tags: ["ScrollSmoother Flip Draggable SplitText"] },
    ],
};

export function Details() {

    const [Duration, setDuration] = useState(50);
    const [Delay, setDelay] = useState(20);
    const [Playing, setPlaying] = useState(false);
    const [PreviewMode, setPreviewMode] = useState(false);
    const [Copied, setCopied] = useState(false);

    return (
        <>
            <div id="details-topbar">
                <button id="details-back" onClick={goBack}>← Home</button>
                <button
                    id="details-preview-btn"
                    className={PreviewMode ? "preview-on" : ""}
                    onClick={() => setPreviewMode(!PreviewMode)}
                >
                    <span id="details-preview-dot" />
                    Preview Mode
                </button>
            </div>

            <div id="details-body">
                <div id="details-main">
                    <h1 id="details-title">{ANIMATION.title}</h1>

                    <div id="details-hero-card">
                        <ul id="details-tags">
                            {ANIMATION.tags.map((tag, i) => (
                                <li key={i} className="details-tag">{tag}</li>
                            ))}
                        </ul>
                        <img src={ANIMATION.previewImage} id="details-hero-img" alt="preview" />
                    </div>

                    <div id="details-info-row">
                        <div className="details-info-card">
                            <p className="details-info-heading">Description</p>
                            <p className="details-info-body">{ANIMATION.description}</p>
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
                                {Copied ? "✓ Copied" : "⧉ Copy"}
                            </button>
                        </div>
                        <pre id="details-code-pre">
                            <code>
                                {ANIMATION.code.split("\n").map((line, i) => (
                                    <span key={i} className={line.trim().startsWith("//") ? "code-comment" : "code-line"}>
                                        {line.split(/(".*?"|'.*?')/g).map((part, j) =>
                                            /^["']/.test(part)
                                                ? <span key={j} className="code-string">{part}</span>
                                                : part
                                        )}
                                        {"\n"}
                                    </span>
                                ))}
                            </code>
                        </pre>
                    </div>
                </div>

                <div id="details-controls">
                    <p id="details-controls-heading">Controls</p>

                    <label className="details-controls-label">Duration</label>
                    <input
                        type="range" min="0" max="100"
                        className="details-slider"
                        value={Duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                    />

                    <label className="details-controls-label">Delay</label>
                    <input
                        type="range" min="0" max="100"
                        className="details-slider"
                        value={Delay}
                        onChange={(e) => setDelay(Number(e.target.value))}
                    />

                    <button
                        id="details-play-btn"
                        className={Playing ? "playing" : ""}
                        onClick={() => setPlaying(!Playing)}
                    >
                        {Playing ? "⏹ Stop" : "▶ Play"}
                    </button>
                </div>
            </div>

            <div id="details-browse">
                <p id="details-browse-heading">Browse for more</p>
                <div id="details-browse-grid">
                    {ANIMATION.related.map((item) => (
                        <div key={item.id} className="related-card">
                            <div className="related-card-img-wrap">
                                <img src={item.image} alt={item.title} className="related-card-img" />
                            </div>
                            <div className="related-card-tags">
                                {item.tags.map((t, i) => <p key={i} className="related-card-tag">{t}</p>)}
                            </div>
                            <p className="related-card-title">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

    function goBack() {
        window.location.hash = "/";
    }

    function copyCode() {
        navigator.clipboard.writeText(ANIMATION.code).catch(() => { });
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
}

export default Details;