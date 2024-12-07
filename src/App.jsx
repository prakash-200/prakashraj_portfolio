

import About from './components/About'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from './components/Project'
import Skill from './components/Skill'
import SlideCard from './components/SlideCard'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/slide" element={<SlideCard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
