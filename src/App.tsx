import React, { useState } from 'react'
import Billing from './components/Billing'
import Business from './components/Business'
import CardDeal from './components/CardDeal'
import Clients from './components/Clients'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import styles from './style'
import { NavbarStyles } from './components/Navbar/NavbarStyles'
import Navbar from './components/Navbar/Navbar'

const App = () => {

  return (
    <div className={`w-full overflow-hidden`}>
      <Navbar/>
      <div className={`${NavbarStyles.MarginTopToFixedNavbar} w-full ${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth} h-screen bg-white`}>
          <Hero/>
        </div>
      </div>
      <div className={`w-full ${styles.paddingX} ${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
