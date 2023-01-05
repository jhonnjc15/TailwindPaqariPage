import React, { useState } from 'react'
import LinksNavbar from './LinksNavbar'
import { NavbarStyles } from './NavbarStyles'
import ChangeLanguage from './ChangeLanguage'
import LogoPaqari  from '../../assets/LogoPaqariTransparente.png'
import styles from '../../style'
import MenuButton from './MenuButton'
import LinksNavbarResponsive from './LinksNavbarResponsive'

const Navbar = () => {

  const [toggle, setToggle] = useState<boolean>(false)
  const [openLanguage, setOpenLanguage] = useState<boolean>(false)
  const [navBarScroll, setNavBarScroll] = useState(false);

  const changeBackground = () => {
    if ( window.scrollY >= 180 ) {
      setNavBarScroll(true);
    } else {
      setNavBarScroll(false);
    }
  }
  window.addEventListener("scroll", changeBackground);
  console.log(navBarScroll)

  return (
    <div className={`${toggle ? 'transition-color duration-1000 bg-slate-600': `${navBarScroll ? 'transition-color duration-1000 bg-paqariGreen': 'transition-color duration-1000 bg-gradient-to-l from-paqariGreen to-paqariYellow'}`} fixed top-0 w-full ${NavbarStyles.NavbarHeight} ${styles.paddingX} ${styles.flexCenter} ${navBarScroll ? 'transition-color duration-500 sm:bg-paqariGreen': 'transition-color duration-500 sm:bg-gradient-to-l sm:from-paqariGreen sm:to-paqariYellow'}`} >

    {/* // <div className={`${toggle ? 'transition-color duration-1000 bg-slate-600': 'transition-color duration-1000 bg-gradient-to-l from-paqariGreen to-paqariYellow'} fixed top-0 w-full ${NavbarStyles.NavbarHeight} ${styles.paddingX} ${styles.flexCenter} sm:bg-gradient-to-l sm:from-paqariGreen sm:to-paqariYellow`} > */}

      <nav className={`${NavbarStyles.NavbarHeight} w-full py-6 flex justify-between items-center navbar sm:flex`}>
        <img 
          src={LogoPaqari} 
          alt='PaqariLogo' 
          className='order-2 w-[130px] h-[50px] sm:order-first ml-12'
        />
        <LinksNavbar />
        <ChangeLanguage
            openLanguage = {openLanguage}
            setOpenLanguage = {setOpenLanguage}
        />

        <div className='order-1 flex justify-end items-center sm:hidden'>
          <MenuButton
            toggle = {toggle} 
            setToggle = {setToggle} 
          />
          <LinksNavbarResponsive
            toggle = {toggle} 
            setToggle= {setToggle}
          />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
