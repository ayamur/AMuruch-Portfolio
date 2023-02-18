import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path='about'
          element={<About />} />
        <Route
          path='contact'
          element={<Contact />} />
        <Route path='/'
          element={<Home />} />
        <Route path='projects'
          element={<Projects />} />
        <Route path='resume'
          element={<Resume />} />
        <Route path='projects/:projectDetails'
          element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
