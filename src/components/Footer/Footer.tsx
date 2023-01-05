import React from 'react'
import LogoPaqari  from '../../assets/LogoPaqariTransparente.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation(['translation']);
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
      <div className="mx-6 py-8 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="pl-6 flex flex-col justify-center items-center">
            <img 
              src={LogoPaqari}
              className='w-[120px] h-[50px]'
            />
          </div>
          <div className='hidden md:block'>
            {/* <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">Angular</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">React</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">Vue</a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">Laravel</a>
            </p> */}
            {/* <section className="grid h-screen w-full place-content-center bg-slate-900">
              <button className="btn group flex items-center bg-transparent p-2 px-6 text-xl font-thin tracking-widest text-white">
                <span className="relative pr-4 pb-1 text-white after:transition-transform after:duration-500 after:ease-out after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:content-[''] after:group-hover:origin-bottom-left after:group-hover:scale-x-100">Hover Me</span>
                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="fill-slate-700 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105 group-hover:fill-white">
                  <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
              </button>
            </section> */}
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              {t('footer.sections.usefulLinks')}
            </h6>
            <p className="mb-4">
              <Link to="/" className="capitalize text-gray-600 transition-all duration-300 ease-linear hover:border-b hover:border-gray-600">
                {t('footer.footerLinks.home')}
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/about" className="capitalize text-gray-600 transition-all duration-300 ease-linear hover:border-b hover:border-gray-600">
                {t('footer.footerLinks.about')}
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/products" className="capitalize text-gray-600 transition-all duration-300 ease-linear hover:border-b hover:border-gray-600">
                {t('footer.footerLinks.products')}
              </Link>
            </p>
            <p>
              <Link to="contact" className="capitalize text-gray-600 transition-all duration-300 ease-linear hover:border-b hover:border-gray-600">
                {t('footer.footerLinks.contact')}
              </Link>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              {t('footer.sections.contact')}
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                </path>
              </svg>
              New York, NY 10012, US
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                </path>
              </svg>
              info@example.com
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
                className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                </path>
              </svg>
              + 01 234 567 88
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:justify-center p-6 border-t border-gray-300 gap-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-6 h-6 sm:w-6 sm:h-6">            
          <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 sm:w-6 sm:h-6">
          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 sm:w-6 sm:h-6">
          <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© 2023 PaqariOpenLab. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
