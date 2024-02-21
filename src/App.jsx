import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { useState } from 'react'
import Header from './components/header/Header'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import ProjectP from './components/projects_page/project_page'
import './App.css'

function App() {
  return (
    <Router basename={'/React-portifolio-ICT'}>
      <Header />
      <Routes>
        <Route path='./' element={<Home />} />
        <Route path='./projects' element={<ProjectP />} />
        <Route path='./contact' element={<Contact />} />
        <Route path='*' element={<h1 className='mt-5 pt-5'> Page Not Found!</h1>} />
      </Routes>
    </Router>
  )
}

export default App
