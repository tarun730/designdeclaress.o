// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './Styles/Style.css'
import ScrollProgressBar from './components/ScrollProgressBar'
import HeroSection from './components/HeroSection'
import FloatingMenu from './components/FloatingMenu'
import Breakdown from './components/Breakdown'
import DonateSection from './components/DonateSection'
import ActsofEmergency from './components/ActsofEmergency'
import DeclareEmergency from './components/DeclareEmergency'
import Latest from './components/Latest'
import NewsletterSection from './components/NewsletterSection'
import Signatories from './components/Signatories'
import GlobalSupporters from './components/GlobalSupporters'
import Footer from './components/Footer'
import { Outlet,useLocation } from 'react-router'
import { Header } from './components/Aboutpage'

function app() {
  const location = useLocation();
  return (
    <>
      <ScrollProgressBar />

      {location.pathname !== '/' && <Header />}

      {/* <div style={{ position: "relative" }}>   */}
        <div className='mainArea' >
          <Outlet /> 
        </div>


      {/* </div> */}
      <FloatingMenu />
      <Footer />

    </>
  )
}

export default app

export const Homepage=()=>{
  return(
    <>
     <HeroSection />
          <Breakdown />
          <DonateSection />
          <ActsofEmergency />
          <DeclareEmergency />
          <Latest />
          <NewsletterSection />
          <Signatories />
          <GlobalSupporters />
         
    
    </>
  )
}