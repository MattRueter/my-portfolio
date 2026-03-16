import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import LanguageTech  from './LanguageTech.jsx'
import Projects from './Projects.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="language-tech" element={<LanguageTech />} />
        <Route path="projects/:project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
