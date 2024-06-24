import React, { useState } from 'react'
import cssp from '../Owner-profile/css/ownerhead.module.css'
import { Link } from 'react-router-dom';
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
        <ul className={isNavOpen ? cssp.navopen : ''}>
          <li><Link to={`/login`}>Student Login</Link></li>
          <li><Link to={`/loginmess`}>Owner Login</Link></li>
         
          <li><Link>About</Link></li>
        </ul>
      </nav>
    </div>
  )
}
