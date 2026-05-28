import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import { Frame } from "./Components/Frame.jsx";
import Category from "./Components/category.jsx";
import Details from "./Components/Details.jsx";
import Home from "./Pages/Home.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

function Root() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Router>
      <ScrollToTop />

      <h1 id="search-filter-values"></h1>

      <Frame
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        search={search}
        setSearch={setSearch}
      />

      <div id="content">
        <Routes>
          <Route
            path="/"
            element={<Home selectedTypes={selectedTypes} search={search} />}
          />

          <Route path="/category/:type" element={<Category />} />

          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);