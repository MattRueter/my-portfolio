import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './pages/App.jsx'
import LanguageEdTech  from './pages/LanguageEdTech.jsx'
import Projects from './pages/Projects.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="language-edtech" element={<LanguageEdTech />} />
        <Route path="projects/:project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
