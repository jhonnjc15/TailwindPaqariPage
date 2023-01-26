import React from 'react'
import { useTranslation } from 'react-i18next'
import { navLinks } from '../../constants'
import { NavLink } from 'react-router-dom'
const LinksNavbar = () => {

  const { t } = useTranslation(['translation']);
  return (
    <ul className='hidden w-10 list-none justify-start items-center flex-1 sm:flex'>
    {navLinks.map((nav, index) => {
        return (
        <li
            key={nav.id}
            className={`font-normal cursor-pointer text-[16px] ${index === 0 ? 'ml-6' : 'ml-8'} text-black group flex items-center bg-transparent text-xl font-thin tracking-widest`}
        >
            <NavLink 
              to={`${nav.url}`}
              className={({ isActive }) =>
                isActive ? 'relative capitalize border-b-[2.5px] border-paqariGreen pb-1 text-[#3dccd4]' : "text-[#869fb4] font-poppins capitalize relative after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-paqariGreen after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100 pb-1 hover:text-[#3dccd4]"
              }
            >
              {t('navBar.navLinks.' + nav.title)}
            </NavLink>
        </li>
        )
    })}
    </ul>
  )
}

export default LinksNavbar
