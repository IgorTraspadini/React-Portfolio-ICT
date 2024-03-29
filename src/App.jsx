import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { useState } from 'react'
import Header from './components/header/Header'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import ProjectP from './components/projects_page/project_page'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/projects' element={<ProjectP />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
