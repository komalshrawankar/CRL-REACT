import React from 'react'
import HeroHomeSection from '../Components/HomePage/HeroHomeSection'
import HomeSlider from '../Components/HomePage/HomeSlider'
import ShipingService from '../Components/HomePage/ShipingService'
import AboutLogisco from '../Components/HomePage/AboutLogisco'
import LogisticsSection from '../Components/HomePage/LogisticsSection'
import WorkProcess from '../Components/HomePage/WorkProcess'


const Home = () => {
  return (
    <div>
      <HeroHomeSection/>
      <HomeSlider/>
      <ShipingService/>
      <AboutLogisco/>
      <LogisticsSection/>
      <WorkProcess/>
    
     
    </div>
  )
}

export default Home
