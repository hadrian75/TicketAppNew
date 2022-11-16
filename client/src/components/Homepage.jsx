import React from 'react';
import '../bgAndResponsive.css'
import { Navbar, Footer } from './'
import CardBanner from './BannerEvent/BannerEvent'


const Homepage = () => {

  return (
    <div className='w-full overflow-hidden'>
      <Navbar />
      <div className='wrapperHome relative w-full'>
        <div className=" wrapperBanner gap-36">
          <CardBanner />
          <CardBanner />
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default Homepage