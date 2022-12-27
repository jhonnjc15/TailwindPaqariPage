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

  return (
    <div className={`${toggle ? 'transition-color duration-1000 bg-slate-600': 'transition-color duration-1000 bg-blue-200'} fixed top-0 w-full ${NavbarStyles.NavbarHeight} ${styles.paddingX} ${styles.flexCenter} sm:bg-blue-200`} >
      <nav className={`${NavbarStyles.NavbarHeight} w-full py-6 flex justify-between items-center navbar sm:flex`}>
        <img 
          src={LogoPaqari} 
          alt='PaqariLogo' 
          className='order-2 w-[130px] h-[50px] sm:order-first ml-7'
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
          />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
