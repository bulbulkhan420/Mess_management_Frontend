import React from 'react'
import './MassSearchPage.css'
import Header from '../Mess_Profile_pages/Header'
import SearchOption from './Components/SearchOption'
import AboutUs from './Components/AboutUs'
import MapAndContactUs from '../Mess_Profile_pages/MapAndContactUs'
import FooterSection from '../Mess_Profile_pages/FooterSection'
const MassSearchPage = () => {
  return (
    <body className='container'>
      <Header />
      <SearchOption />
      <AboutUs />
      <MapAndContactUs />
      <FooterSection />
    </body>
  )
}

export default MassSearchPage
