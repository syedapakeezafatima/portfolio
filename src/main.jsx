import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import BioSection from './components/BioSection.jsx'
import WorkSamples from './components/WorkSamples.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import EducationSection from './components/EducationSection.jsx'
import ContactDetails from './components/ContactDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header />
    <BioSection />
    <WorkSamples />
    <SkillsSection />
    <EducationSection />
    <ContactDetails />
  </StrictMode>,
)
