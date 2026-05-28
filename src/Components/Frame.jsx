import React, { useState } from "react";
import logo from "../assets/Union.svg";
import "./Frame.css";

export function Frame({
  selectedTypes,
  setSelectedTypes,
  search,
  setSearch,
}) {
  const [platforms, setPlatforms] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const platformList = ["Web", "Mobile-iOS", "Mobile-Android"];
  const typeList = [
    "Tap",
    "Hover",
    "Scroll",
    "Loading",
    "Transition",
    "Entrance",
    "Exit",
  ];

  const searchTags = search.trim() === "" ? [] : search.trim().split(/\s+/);

  function togglePlatform(platform) {
    if (platforms.includes(platform)) {
      setPlatforms(platforms.filter((item) => item !== platform));
    } else {
      setPlatforms([...platforms, platform]);
    }
  }

  function toggleType(type) {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  }

  function removeFilter(value) {
    if (platforms.includes(value)) {
      setPlatforms(platforms.filter((item) => item !== value));
    } else if (selectedTypes.includes(value)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== value));
    } else {
      setSearch("");
    }
  }

  return (
    <>
      <div id="top-bar">
        <button
          id="menu"
          className={menuOpen ? "menu-expanded" : "menu-collapsed"}
          onClick={() => setMenuOpen(!menuOpen)}
        ></button>

        <img src={logo} id="logo" alt="OWOW logo" />

        <input
          type="text"
          className="search-bar"
          id="search-bar-top"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div
        id="side-bar"
        className={menuOpen ? "menu-expanded" : "menu-collapsed"}
      >
        <input
          type="text"
          className="search-bar"
          id="search-bar-bottom"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p>Filters</p>

        <p>Platforms</p>
        <ul id="Platform-Filter">
          {platformList.map((platform) => (
            <li key={platform}>
              <input
                type="checkbox"
                id={`box-${platform}`}
                checked={platforms.includes(platform)}
                onChange={() => togglePlatform(platform)}
              />

              <label htmlFor={`box-${platform}`}>{platform}</label>
            </li>
          ))}
        </ul>

        <p>Types</p>
        <ul id="Type-Filter">
          {typeList.map((type) => (
            <li key={type}>
              <input
                type="checkbox"
                id={`box-${type}`}
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
              />

              <label htmlFor={`box-${type}`}>{type}</label>
            </li>
          ))}
        </ul>

        {(platforms.length > 0 ||
          selectedTypes.length > 0 ||
          search.length > 0) && (
          <>
            <p>Active filters</p>

            <ul id="active-filters">
              {platforms.map((platform) => (
                <li key={platform}>
                  <button
                    onClick={() => removeFilter(platform)}
                    className="filter-button"
                  >
                    {platform}
                  </button>
                </li>
              ))}

              {selectedTypes.map((type) => (
                <li key={type}>
                  <button
                    onClick={() => removeFilter(type)}
                    className="filter-button"
                  >
                    {type}
                  </button>
                </li>
              ))}

              {searchTags.map((tag) => (
                <li key={tag}>
                  <button
                    onClick={() => setSearch("")}
                    className="filter-button"
                  >
                    {tag}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}