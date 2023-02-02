import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//? ---------------------------------

//! I recognize this  may not pass, but due to illness and trying not to get worse, I am turning it in as is for now until my brain works so I don't stay up past 11pm (my normal rest time is 9/10 to 7/8 because I need 10 hours on a regular basis to function. 

//!I am sorry, I did what i could from a frankensteining of previous labs, fever knowledge, and checking out engineering. I do not mean to waste anyone's time, but I am going to chose rest this time or the project is going to be even harder while being sick. I am dissappointed that I may be turning this in late, I was hoping to get everything done and on time, but that isn't going to happen after all. Goodnight)

//! I know I am supposed to do wireframe before CSS, but honestly, I completely forgot the entirety of the projects being a specific set of instructions until late last night so, again, sorry.

//? ---------------------------------

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
      </Routes>
      <Footer />
    </>
  );
}


export default App;
