import React, { useState } from 'react'
import cssp from '../Owner-profile/css/ownerhead.module.css'
import { Link } from 'react-router-dom';
import logo from '../Logo.png'
export default function Homehead() {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
       <nav className={cssp.navbar}>
        <button className={cssp.navtoggle} onClick={toggleNav}>
          ☰
        </button>
        <ul className={isNavOpen ? cssp.navopen:''} style={{zIndex:'10'}}>
          <li><Link to={`/login`}>Student Login</Link></li>
          <li><Link to={`/loginmess`}>Owner Login</Link></li>
         
          <li><Link>About</Link></li>
         
        </ul>
        <img style={{height:'25px',width:'25px',float:'right',right:'2rem',position:'absolute'}} src={logo} alt="" />
      </nav>
    </div>
  )
}
