import React from 'react'
import Cover from '../../Components/Cover/Cover'
import About from '../../Components/About/About'
import Message from '../../Components/Message/Message'
import Customers from '../../Components/Customers/Customers'
import CsrEsg from '../../Components/Csr-Esg/CsrEsg'
import BodSlider from '../../Components/BodSlider/BodSlider'

const Home = () => {
  return (
    <div>
        <Cover/>
        <About/>
        <Message/>
        <Customers/>
        <CsrEsg/>
        <BodSlider/>
    </div>
  )
}

export default Home