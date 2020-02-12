import React from 'react'
import './App.css'
import Header from './Header'
import HamburgerMenu from './HamburgerMenu'
import Region from './Region'
import Hero from './Hero'
import Footer from './Footer'

function App() {
  return (
    <div>
      {/* <h1><a href='/'>Tesla</a></h1> */}
      <Header />
      <HamburgerMenu />
      <Region />
      <Hero />
      <Footer />
    </div>
  );
}

export default App
