import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import AtaGlance from './Pages/AboutVeritas'
import Chairman from './Pages/Chairman'
import Financial from './Pages/Financial'
import GulfOilInternational from './Pages/GulfOilInternational'
import HindujaGroup from './Pages/HindujaGroup'
import Home from './Pages/Home/Home'
import ManagingDirector from './Pages/ManagingDirector'
import MarketOverview from './Pages/MarketOverview'
import UnlockPage from './Pages/Unlock'
import CorporateIdentity from './Pages/CorporateIdentity'
import StrategicP from './Pages/StrategicP'
import SuperiorP from './Pages/SuperiorP'
import EnhancingV from './Pages/EnhancingV'
import DigitalTrans from './Pages/DigitalTrans'
import EMobilityTrans from './Pages/EMobilityTrans'
import MarketingIni from './Pages/MarketingIni'
import Customers from './Pages/CustomersSt'
import CustomersSt from './Pages/CustomersSt'
import OurPpl from './Pages/OurPpl'
import Communities from './Pages/Communities'
import Sustainability from './Pages/Sustainability'
import StrategicPart from './Pages/StrategicPart'
import BoardOfDir from './Pages/BoardOfDir'
import LeadershipTeam from './Pages/LeadershipTeam'
import Awards from './Pages/Carousel.jsx'
import TimelineCarousel from './Components/Timeline/TimelineCarousel'
import  AboutVeritas from './Pages/AboutVeritas'
import Providing_need_based_credit_solutions from './Pages/Providing_need_based_credit_solutions.jsx'
import Geographical from './Pages/Geographical'
import FinancialSolutions from './Pages/FinancialSolutions.jsx'
import FinancialYear from './Pages/FinancialYear.jsx'
import Recognitions from './Pages/Recognitions.jsx'
import Corporate from './Pages/Corporate.jsx'
import Competitive from './Pages/Competitive.jsx'
import BusinessModel from './Pages/BusinessModel.jsx'
import HumanAssets from './Pages/HumanAssets.jsx'
import Profile from './Pages/Profile.jsx'
import ManagementTeam from './Pages/ManagementTeam.jsx'
import CSR from './Pages/CSR.jsx'
import Executivecommitee from './Pages/Executivecommitee.jsx'
import BusinessHighlights from './Pages/BusinessHighlights.jsx'
import LifeAtVeritas from './LifeatVeritas.jsx'
import IndividualCard from './Pages/IndividualCard.jsx'
import ScrollToTop from './Pages/ScrollToTop.jsx'
function App() {

  return (
<div>
  <BrowserRouter> 
  <ScrollToTop />
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/corporate-overview/more-about-veritas" element={<AboutVeritas/>} />
  <Route path="/corporate-overview/providing-need-based-credit-solutions" element={<Providing_need_based_credit_solutions/>} />
  <Route path="/corporate-overview/geographic-footprint" element={<Geographical/>} />
  <Route path="/corporate-overview/financial-solutions" element={<FinancialSolutions />} />
  <Route path="/key-performance-indicators" element={<Financial/>} />
   <Route path="/corporate-overview/financial-year-categories" element={<FinancialYear />} />
   <Route path="/corporate-overview/recognitions" element={<Recognitions/>}/>
   <Route path="/corporate-overview/corporate-information" element={<Corporate/>}/>
   <Route path="/corporate-overview/competitive-advantages" element={<Competitive/>}/>
   <Route path="/corporate-overview/business-model" element={<BusinessModel/>}/>
    <Route path="/corporate-overview/human-assets" element={<HumanAssets/>}/>
    <Route path="/corporate-overview/board-of-directors" element={<Profile/>}/>
     <Route path="/corporate-overview/management-team-core-strategy-group" element={<ManagementTeam/>}/>
     <Route path="/corporate-overview/chairmans-message" element={<Chairman/>}/>
     <Route path="/corporate-overview/managing-director-ceo-message" element={<ManagingDirector/>}/>
     <Route path="/corporate-overview/corporate-social-responsibility" element={<CSR/>}/>
     <Route path="/corporate-overview/executive-commitee" element={<Executivecommitee/>}/>
     <Route path="/corporate-overview/business-highlights" element={<BusinessHighlights />} />
     <Route path="/corporate-overview/life-at-veritas" element={<LifeAtVeritas />} />
     <Route path="/profile/:id" element={<IndividualCard/>}/>
  <Route path="/gulf-oil-international" element={<GulfOilInternational/>} />
  <Route path="/hinduja-group" element={<HindujaGroup/>} />
  <Route path="/md-and-ceos-message" element={<ManagingDirector/>} />
  <Route path="/market-overview" element={<MarketOverview/>} />
  <Route path="/unlock-2.0" element={<UnlockPage/>} />
  <Route path="/corporate-identity" element={<CorporateIdentity/>} />
  
  <Route path="/strategic-pathways-to-growth-opportunities" element={<StrategicP/>} />
  <Route path="/superior-products-and-advanced-technology" element={<SuperiorP/>} />
  <Route path="/enhancing-value" element={<EnhancingV/>} />
  <Route path="/digital-transformation" element={<DigitalTrans/>} />
  <Route path="/e-mobility-transformation" element={<EMobilityTrans/>} />
  <Route path="/marketing-initiatives" element={<MarketingIni/>} />
  <Route path="/customers" element={<CustomersSt/>} />
  <Route path="/our-people" element={<OurPpl/>} />
  <Route path="/communities" element={<Communities/>} />
  <Route path="/sustainability" element={<Sustainability/>} />
  <Route path="/strategic-partnerships" element={<StrategicPart/>} />
  <Route path="/board-of-directors" element={<BoardOfDir/>} />
  <Route path="/leadership-team" element={<LeadershipTeam/>} />
  <Route path="/awards-and-recognition" element={<Awards/>} />





  {/* <Route path="/corporate-overview" element={<CorporateOverview />} />
  <Route path="/corporate-overview/more-about-veritas" element={<MoreAboutVeritas />} />
  <Route path="/corporate-overview/providing-need-based-credit-solutions" element={<ProvidingNeedBasedCreditSolutions />} />
  <Route path="/corporate-overview/geographic-footprint" element={<GeographicFootprint />} />
  <Route path="/corporate-overview/financial-solutions" element={<FinancialSolutions />} />
  <Route path="/corporate-overview/business-highlights" element={<BusinessHighlights />} />
  <Route path="/corporate-overview/financial-year-categories" element={<FinancialYearCategories />} />
  <Route path="/corporate-overview/recognitions" element={<Recognitions />} />
  <Route path="/corporate-overview/corporate-information" element={<CorporateInformation />} />
  <Route path="/corporate-overview/competitive-advantages" element={<CompetitiveAdvantages />} />
  <Route path="/corporate-overview/business-model" element={<BusinessModel />} />
  <Route path="/corporate-overview/human-assets" element={<HumanAssets />} />
  <Route path="/corporate-overview/corporate-social-responsibility" element={<CorporateSocialResponsibility />} />
  <Route path="/corporate-overview/chairmans-message" element={<ChairmansMessage />} />
  <Route path="/corporate-overview/managing-director-ceo-message" element={<ManagingDirectorCEOMsg />} />
  <Route path="/corporate-overview/board-of-directors" element={<BoardOfDirectors />} />
  <Route path="/corporate-overview/management-team-core-strategy-group" element={<ManagementTeamCoreStrategyGroup />} /> */}
  </Routes>
  <Footer/>
  </BrowserRouter> 
</div>
  )
}

export default App
