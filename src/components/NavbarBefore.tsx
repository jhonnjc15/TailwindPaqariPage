import React, { useRef, useState } from 'react'
import { close, logo, menu } from '../assets'
import { unitedStatesFlag, peruFlag } from '../assets'
import { navLinks } from '../constants'
import { useTranslation } from 'react-i18next'
import styles from '../style'

interface Props{
  toggle: boolean
  setToggle: (toggle: boolean) => void
  openLanguage: boolean
  setOpenLanguage: (openLanguage: boolean) => void
}

const Navbar = ( {toggle, setToggle, openLanguage, setOpenLanguage}:Props ) => {

  const { t, i18n } = useTranslation(['translation']);
  const anchorRef = useRef<HTMLButtonElement>(null)

  const handleClickOutsideDropdown =(e:any)=>{
    if(openLanguage && !anchorRef.current?.contains(e.target as Node)){
      setOpenLanguage(false)
    }
  }
  window.addEventListener("click",handleClickOutsideDropdown)

  const changeToEnglish = () => {
    i18n.changeLanguage('en')
    setOpenLanguage(!openLanguage)
  }
  
  const changeToSpanish = () => {
    i18n.changeLanguage('es')
    setOpenLanguage(!openLanguage)
  }

  return (
    <nav className={`border border-blue-700 ${styles.NavbarHeight} w-full py-6 flex justify-between items-center navbar sm:flex`}>
      <img src={logo} alt='PaqariLogo'className='order-2 border border-black w-[124px] h-[32px] sm:order-first'/>
      <ul className='border border-fuchsia-600 hidden w-10 list-none justify-start items-center flex-1 sm:flex'>
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${index === 0 ? 'ml-6' : 'ml-8'} text-white`}
            >
              <a href={`#${nav.id}`}>
                {t('navBar.navLinks.' + nav.title)}
              </a>
            </li>
          )
        })}
      </ul>
      {/* Tamañan del botón  */}
      <div className={`order-last border border-red-700 bg-gray-200  rounded ${openLanguage ? 'rounded-br-none' : ''} flex relative w-[60px] h-[30px] sm:order-last sm:w-[90px]`}>
        <button ref={anchorRef} className='w-1/3 h-[30px]'>
          <svg onClick={() => setOpenLanguage(!openLanguage) } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </button>
        <img 
          src={i18n.language === "es" ?  peruFlag : unitedStatesFlag}
          className='w-1/3 px-0.5 mx-auto my-auto'
        />
        <p className='text-xs font-semibold border border-red-500 px-1 flex justify-center items-center w-1/3 sm:text-lg'>
          {
            i18n.language === "es" ?  "ES" : "EN"
          }
        </p>
        <button 
          onClick={ () => {
              i18n.language === "es" ?  changeToEnglish() : changeToSpanish()
          }
          }
          className={`${openLanguage ? 'rounded-b flex transition-all duration-200 top-full right-0 z-10': 'hidden'} bg-gray-200 w-[40px] h-[30px] absolute my-0 sm:w-[60px]`}
        >
          <img 
            src={i18n.language === "en" ?  peruFlag : unitedStatesFlag}
            // className='pl-2 w-1/2 my-auto'
            // className='w-1/2 px-0.5 my-auto mx-auto'
            className='w-1/2 my-auto px-0.5 flex justify-center items-center'
          />
          {/* <p className='text-xs font-semibold px-0.5 flex justify-center items-center w-1/2'> */}
          <p className='text-xs font-semibold border border-red-500 px-1 my-auto flex justify-center items-center w-1/2 sm:text-lg'>
            {
              i18n.language === "es" ?  "EN" : "ES"
            }
          </p>
        </button>  
      </div>
      <div className='order-1 border border-green-700 flex justify-end items-center sm:hidden'>
        <div className='border border-fuchsia-900 flex justify-center items-center w-[28px] h-[28px] object-contain'>
          <button className="relative group" onClick={() => setToggle(!toggle) }>
            <div className={`relative flex items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all bg-slate-600 ring-0 ring-gray-300 hover:ring-0 ${!toggle ? 'bg-blue-200': 'ring-2 shadow-md'} ring-opacity-30 duration-1000 `}>
              <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${!toggle ? '': '-rotate-[45deg]'} origin-center`}>
                <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${!toggle ? '': '-rotate-90 h-[1px] -translate-y-[1px]'} origin-right delay-75`}></div>
                <div className={`bg-white h-[1px] rounded`}></div>
                <div className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${!toggle ? '': '-rotate-90 h-[1px] translate-y-[1px]'} origin-left delay-75`}></div>
              </div>
            </div>
          </button>
        </div>
        <div className={`${toggle ? 'flex transition-all duration-1000 left-0': 'flex transition-all duration-1000 -left-full'} w-full min-h-screen p-6 bg-slate-600 absolute ${styles.PositionLinksContainerSm} my-0`}>
          <ul className='flex flex-col flex-1 w-10 list-none justify-center items-center '>
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === 0 ? 'mt-0' : 'mt-8'} text-white`}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
