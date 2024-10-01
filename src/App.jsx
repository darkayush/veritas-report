import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import AtaGlance from './Pages/AtaGlance'
import Chairman from './Pages/Chairman'
import Financial from './Pages/Financial'
import GulfOilInternational from './Pages/GulfOilInternational'
import HindujaGroup from './Pages/HindujaGroup'
import Home from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ManagingDirector from './Pages/ManagingDirector'
import MarketOverview from './Pages/MarketOverview'
import UnlockPage from './Pages/Unlock'
import CorporateIdentity from './Pages/CorporateIdentity'

function App() {

  return (
<div>
  <BrowserRouter> 
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/at-a-glance" element={<AtaGlance/>} />
  <Route path="/chaimans-message" element={<Chairman/>} />
  <Route path="/key-performance-indicators" element={<Financial/>} />
  <Route path="/gulf-oil-international" element={<GulfOilInternational/>} />
  <Route path="/hinduja-group" element={<HindujaGroup/>} />
  <Route path="/md-and-ceos-message" element={<ManagingDirector/>} />
  <Route path="/market-overview" element={<MarketOverview/>} />
  <Route path="/unlock-2.0" element={<UnlockPage/>} />
  <Route path="/corporate-identity" element={<CorporateIdentity/>} />
  </Routes>
  <Footer/>
  </BrowserRouter> 
</div>
  )
}

export default App
