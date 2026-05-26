import "./category.css";
import React from "react";



export function Category() {
  return (
    <div className="owow-page">
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

export default Category;
