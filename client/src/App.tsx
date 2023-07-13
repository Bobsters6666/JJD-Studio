import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './navbar'
import Hero from './home/hero'
import Intro from './home/intro'

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
          </>} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
