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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>

      <h1 id="search-filter-values"></h1>

      <Frame />

      <div id="content">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/category" element={<Category />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>

    </Router>
  </StrictMode>
)