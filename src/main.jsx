import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import { Frame } from './Components/Frame.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <h1 id="search-filter-values" />
    <Frame />
    <div id="content">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
      {/* <StrictMode>
        <App />
      </StrictMode> */}
    </div>
  </>
)