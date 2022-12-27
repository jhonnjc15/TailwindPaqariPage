import React from 'react'
import { useTranslation } from 'react-i18next'
import { navLinks } from '../../constants'

const LinksNavbar = () => {

  const { t } = useTranslation(['translation']);
  return (
    <ul className='hidden w-10 list-none justify-start items-center flex-1 sm:flex'>
    {navLinks.map((nav, index) => {
        return (
        <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === 0 ? 'ml-6' : 'ml-8'} text-white`}
        >
            <a className='capitalize 'href={`#${nav.id}`}>
              {t('navBar.navLinks.' + nav.title)}
            </a>
        </li>
        )
    })}
    </ul>
  )
}

export default LinksNavbar
