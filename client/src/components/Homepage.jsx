import React from 'react';
import '../bgAndResponsive.css'
import { Navbar, Footer } from './'
// import CardBanner from './BannerEvent/BannerEvent'
import banner from '../../bannerComponent/Banner.jpg'


const Homepage = () => {

  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <div className='wrapperHome relative w-full'>
        <div className=" sm:ml-0 lg:ml-[90px] sm:h-[300px] relative   md:h-[500px] lg:h-[600px] w-[100%] max-w-[100%] justify-center whitespace-nowrap flex-col  flex flex-wrap lg:gap-36 sm:gap-20 sm:flex-now  overflow-x-scroll overflow-y-hidden ">
          <div className='my-10'>
            <a href=""><img src={banner} alt="" className='w-auto h-auto ' /></a>
          </div>
          <div>
            <a href=""><img src={banner} alt="" className='w-auto h-auto ' /></a>
          </div>

        </div>
      </div>


      <Footer />
    </div>
  )
}
export default Homepage