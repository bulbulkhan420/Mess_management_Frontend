
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp  } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'

 import './FooterSection.css'
const FooterSection = () => {
  return (
    <footer>
      <div className="row">
               <div className="col-6 col-s-6" >
                <div >
                    <p>&copy; All right reserved by Mass Management System</p>
                </div>
               </div>
                <div className="col-6 col-s-6">
                    <div className="social-menus">
                        <a href="#"><FontAwesomeIcon icon={faArrowUp} className='icon-style'/></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} className='icon-style'/></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} className='icon-style'/></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className='icon-style'/></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className='icon-style'/></a>
                    </div>
                </div>
              </div>
    </footer>
  )
}

export default FooterSection
