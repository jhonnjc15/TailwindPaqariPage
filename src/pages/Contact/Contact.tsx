import React, { useEffect, useState } from 'react'
import { NavbarStyles } from '../../components/Navbar/NavbarStyles'
import Form from './Form'

const Contact = () => {

  const [img, setImg] = useState<string|null>(null);
  const [loading, setLoading] = useState(false)
  const fetchImage = async () => {
    setLoading(true)
    const image = await fetch("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    const imageBlob = await image.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    console.log(imageObjectURL)
    setImg(imageObjectURL)
    setTimeout(()=>setLoading(false),200)
    // setLoading(false)
  };
  useEffect(() => {
    fetchImage();
  }, [])

  return (
    <div className='w-full min-h-[1300px] sm:min-h-[1200px]'>
      <div className='bg-gradient-radial-contact h-[500px] w-full relative'>
        {img &&
          <img src={img} className={`w-full h-full object-cover absolute mix-blend-overlay  ${loading ? 'opacity-0' : 'opacity-1 transition-all ease-in-out duration-1000'}`}/>
        }
        {/* <div className='p-24'>
          <h2 className='font-30'>
            
          </h2>
        </div> */}
        <div className={`absolute top-0 right-0 bottom-0 left-0 w-full ${NavbarStyles.MarginTopToFixedNavbar}`}> 
          <div className='w-full h-[300px]'> 
            <p className='sm:text-7xl text-3xl font-bold text-start px-20 text-white py-40'>
              Contact Us
            </p>
          </div>
          <Form/>
        </div>
      </div>
      {/* <div className="z-0 relative bg-no-repeat bg-cover w-full bg-[50%]">
      <img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full" />
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-gradient-radial-contact opacity-90"></div>
      <div className={`absolute top-0 right-0 bottom-0 left-0 w-full ${NavbarStyles.MarginTopToFixedNavbar}`}> 
          <div className='border border-red-700 w-full h-[200px]'> 
            <p>
              Contact Us
            </p>
          </div>
          <Form/>
        </div>
      </div> */}
    
{/*       
      <div className={`w-full h-[500px] bg-gradient-radial-contact inline-block`}> 
        <div className={`${NavbarStyles.MarginTopToFixedNavbar}`}> 
          <div className='border border-red-700 w-full h-[200px]'> 
            <p>
              Contact Us
            </p>
          </div>
          <Form/>
        </div>
      </div> */}
      
    </div> 
    
  )
}

export default Contact
