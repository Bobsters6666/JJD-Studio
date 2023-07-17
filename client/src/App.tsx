import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'animate.css'
import Navbar from './navbar'
import Hero from './home/hero'
import Intro from './home/intro'
import Design from './home/design'
import Release from './home/release'
import Message from './home/message'
import Footer from './footer'
import About from './about'

function App() {
  return (
    <>
     <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={
          <>
            <Hero />
            <Intro />
            <Design />
            <Release />
            <Message />
          </>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router> 
    </>
  )
}

export default App
