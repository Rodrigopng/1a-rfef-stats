import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.tsx'
import './index.css' 
import TeamsPage from "./TeamsPage"
import Team from './Team.tsx'
import Standings from './Standings.tsx'
import ComparePage from './ComparePage.tsx'
import Stats from './Stats.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/:teamShort" element={<Team />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)