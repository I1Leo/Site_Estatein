
import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import AboutUs from './components/AboutUS/AboutUs'
import PropertiesMore from './components/generic/PropertiesMore'
import Properties from './components/Properties/Properties'
import Services from './components/Services/Services'
import Contacts from './components/Contacts/Contacts'

function App() {

  const [page, setPage] = useState("Home")

  const [mobileNav, setMobileNav] = useState(false);


  function headerHandler (page : string) {
    setPage(page);
    
    if (document.documentElement.clientWidth <= 960) {
      setMobileNav(!mobileNav)
    }

  }

  return (
    <>
      <Header active={page} onChange={headerHandler} mobileProps = {[mobileNav, setMobileNav]}/>
      {page === "Home" && <Home />}
      {page === "About Us" && <AboutUs />}
      {page === "Properties" && <Properties />}
      {page === "Services" && <Services />}
      {page === "Contact Us" && <Contacts />}
      <PropertiesMore />
      <Footer />
    </>
  )
}

export default App
