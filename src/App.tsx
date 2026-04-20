
import { useState } from 'react';
import Header from './components/header/header';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import AboutUs from './pages/about-us/about-us';
import PropertiesMore from './components/generic/properties-more/properties-more';
import Properties from './pages/properties/properties';
import Services from './pages/services/services';
import Contacts from './pages/contacts/contacts';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks';
import { setPage } from './services/app';

function App() {

  const [mobileNav, setMobileNav] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const page = useAppSelector(state => state.root.AppSlice.currentPage);
  const dispatch = useAppDispatch();

  function headerHandler(page: string, link: string) {
    dispatch(setPage(page));
    navigate(link);

    if (document.documentElement.clientWidth <= 960) {
      setMobileNav(!mobileNav)
    }

  }

  return (
    <>
      <Header active={page} onChange={headerHandler} mobileProps={[mobileNav, setMobileNav]} />
      <Routes location={location}>
        <Route path="/" element={<Home />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/properties" element={<Properties />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
      <PropertiesMore />
      <Footer />
    </>
  )
}

export default App
