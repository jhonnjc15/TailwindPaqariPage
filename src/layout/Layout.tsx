import React from 'react'
import { Outlet } from 'react-router-dom'
import ContactButton from '../components/ContactButton/ContactButton'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { NavbarStyles } from '../components/Navbar/NavbarStyles'
import styles from '../style'

const Layout = () => {
  return (
    <div className={`w-full overflow-hidden`}>
        <Navbar/>
        <div className={`w-full ${styles.flexStart}`}>
            <Outlet/>
        </div>
        <Footer/>
        <ContactButton/>
    </div>
  )
}

export default Layout
