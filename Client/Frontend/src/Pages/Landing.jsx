/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Landing/Navbar.jsx'
import PfpCircle from '../components/Landing/PfpCircle.jsx'
import Tricircle from '../components/Landing/Tricircle.jsx'
import Pfp from '../components/Landing/Pfp.jsx'
import Content from '../components/Landing/Content.jsx'
function Landing() {
  return (
    <div className='w-screen h-screen bg-gradient-to-br to-TransColor from-LandingColor'>
      <Navbar />
      <PfpCircle />
      <Tricircle />
      <Pfp />
      <Content />
    </div>
  )
}

export default Landing
