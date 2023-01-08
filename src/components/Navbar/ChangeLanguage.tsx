import React from 'react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { unitedStatesFlag, peruFlag } from '../../assets'
import { NavbarStyles } from './NavbarStyles'

interface Props{
  openLanguage: boolean
  setOpenLanguage: (openLanguage: boolean) => void
}

const ChangeLanguage = ({ openLanguage, setOpenLanguage}:Props) => {

  const { i18n } = useTranslation(['translation']);
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
    
    <div  className={`order-last bg-gray-200  rounded ${openLanguage ? 'rounded-br-none' : ''} flex relative ${NavbarStyles.WidthButton} h-[30px] sm:order-last ${NavbarStyles.SmWidthButton}`}>
      <button ref={anchorRef} className='w-1/3 h-[30px] sm:px-1 sm:hover:px-0'>
          <svg onClick={() => setOpenLanguage(!openLanguage) } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
      </button>
      <img 
          src={i18n.language === "es" ?  peruFlag : unitedStatesFlag}
          className='sm:ml-1 w-1/3 px-0.5 mx-auto my-auto'
      />
      <p className='text-xs font-semibold px-1 flex justify-center items-center w-1/3 sm:text-lg'>
          {
          i18n.language === "es" ?  "ES" : "EN"
          }
      </p>
      <button 
          onClick={ () => {
              i18n.language === "es" ?  changeToEnglish() : changeToSpanish()
          }
          }
          className={`${openLanguage ? 'rounded-b flex transition-all duration-200 top-full right-0 z-10': 'hidden'} bg-gray-200 ${NavbarStyles.WidthButton2_3} h-[30px] absolute my-0 ${NavbarStyles.SmWidthButton2_3}`}
      >
          <img 
          src={i18n.language === "en" ?  peruFlag : unitedStatesFlag}
          className='sm:ml-1 w-1/2 my-auto px-0.5 flex justify-center items-center'
          />
          <p className='text-xs font-semibold px-1 my-auto flex justify-center items-center w-1/2 sm:text-lg'>
          {
              i18n.language === "es" ?  "EN" : "ES"
          }
          </p>
      </button>  
    </div>
  )
}

export default ChangeLanguage
