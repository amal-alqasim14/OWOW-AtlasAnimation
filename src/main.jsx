import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './index.css'

import { Frame } from './Components/Frame.jsx'
import App from './App.jsx'
import Category from './Components/category.jsx'
import Details from './Components/Details.jsx'
import Home from './Pages/Home.jsx'
import ScrollToTop from "./Components/ScrollToTop";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      <ScrollToTop />
      <h1 id="search-filter-values"></h1>

      <Frame />

      <div id="content">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/details" element={<Details />} />
          <Route path="/category/:type" element={<Category />} />
        </Routes>
      </div>

    </Router>
  </StrictMode>
)