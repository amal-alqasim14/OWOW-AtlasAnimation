  
import "./category.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Category() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  return (
    <div className="owow-page">
      <main className="content">
        <div id="details-topbar">
          <button id="details-back" onClick={goBack}>
            ← Home
          </button>
        </div> 
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