import React, { useState } from 'react'
import cssp from '../css/profile.module.css'
import { Link, useParams } from 'react-router-dom';
export default function Studentheader() {
    const [isNavOpen, setIsNavOpen] = useState(false);
  let {email}=useParams();
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
          <li><Link to={`/studentprofile/${email}`}>Profiles</Link></li>
          <li><Link to={`/studentprofile/search/${email}`}>Searching Mess</Link></li>
          <li><Link>About</Link></li>
        </ul>
      </nav>
    </div>
  )
}
