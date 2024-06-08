
import BackgroundImageMassInfo from '../BackgroundImageMassInfo'
import MassLinkSection from '../MassLinkSection'
import InformationSection from '../InformationSection'
import FooterSection from '../FooterSection'
import './mass_profile_style.css'
import Header from '../Header'
import MapAndContactUs from '../MapAndContactUs'

const MassProfilePage = () => {
  return (
    <body>
    <div className='container'>
       <Header/>
      <BackgroundImageMassInfo />
      <MassLinkSection />
      <InformationSection />
      <MapAndContactUs />
      <FooterSection />
    </div>
    </body>
  )
}

export default MassProfilePage
