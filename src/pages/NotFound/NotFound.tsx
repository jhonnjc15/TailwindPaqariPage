import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { NavbarStyles } from '../../components/Navbar/NavbarStyles'
import styles from '../../style'
import NotFoundImage from '../../assets/NotFound-2.jpg'
import { useTranslation } from 'react-i18next'


const NotFound = () => {
  const { t } = useTranslation(['translation']);
    return (
        <div className={`w-full overflow-hidden`}>
            <Navbar/>
            <div className={`${NavbarStyles.MarginTopToFixedNavbar} w-full ${styles.flexStart}`}>
                <div className={`bg-gradient-to-l from-paqariGreen to-paqariYellow w-full h-[95vh] flex flex-col lg:flex-row items-start justify-start lg:justify-center  space-y-16 lg:space-y-10 space-x-8 2xl:space-x-0`}>
                    <div className="mt-[200px] lg:mt-24 w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                        <p className="text-7xl md:text-8xl lg:text-[200px] font-bold tracking-wider text-gray-300">404</p>
                        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">{t('pages.notFound.message1')}</p>
                        <p className="px-10 text-lg md:text-xl lg:text-2xl text-gray-200 my-12">{t('pages.notFound.message2')}</p>
                        
                        <Link to="/" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150" title="Return Home">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                            </svg>
                            <span>{t('pages.notFound.homeButton')}</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound
