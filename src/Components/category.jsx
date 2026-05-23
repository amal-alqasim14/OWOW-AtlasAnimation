import "./category.css";
import React from "react";
import logo from "../assets/owow.svg";



export function category() {
  return (
    <div className="owow-page">
      <header className="topbar">
        <img src={logo} alt="OWOW" className="logo" />

        <input
          className="search"
          type="text"
          placeholder="Search animations..."
        />
      </header>

      <main className="content">
        <a href="#/" className="back">&lt; Home</a>
        <h1>Scroll</h1>


        <section className="grid">
          {[
            "Velocity Scroll",
            "Horizontal Text",
            "Scrubbed bento Gallery",
            "Infinite card slider",
          ].map((title) => (
            <div className="card clickable" key={title}>
              <span className="label">{title}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default category;
