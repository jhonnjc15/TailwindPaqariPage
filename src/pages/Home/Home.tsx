import React from 'react'
import { NavbarStyles } from '../../components/Navbar/NavbarStyles'


const Home = () => {
  return (
    <div className='w-full h-screen'>
      <div className={`w-full h-screen bg-gradient-radial inline-block`}> 
        <div className={`${NavbarStyles.MarginTopToFixedNavbar}`}>  
          <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            <li>Elemento 2</li>
            ...
            <li>Elemento N</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Home
