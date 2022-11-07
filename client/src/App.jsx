import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Games from './components/Games'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Trending from './components/Trending'
// import Users from 'https://www.freetogame.com/api/games'

function App() {


  
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Trending/>
      <Footer/> 

    </div>
  )
}

export default App