import React from 'react'
import Cover from '../../Components/Cover/Cover'
import About from '../../Components/About/About'
import Message from '../../Components/Message/Message'
import Customers from '../../Components/Customers/Customers'
import CsrEsg from '../../Components/Csr-Esg/CsrEsg'
import BodSlider from '../../Components/BodSlider/BodSlider'
import Timeline from '../../Components/Timeline/TimelineCarousel'
import Footprint from '../../Components/Footprint/Footprint'
import Buisiness_High from '../../Components/Buisiness/Buisiness_High'

const Home = () => {
  return (
    <div>
        <Cover/>
        <About/>
        <Message/>
        <Timeline/>
        <Footprint/>
        <Buisiness_High/>
        <BodSlider/>
        {/* <Customers/>
        <CsrEsg/> */}
    </div>
  )
}

export default Home