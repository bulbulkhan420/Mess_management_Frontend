import React, { useState } from 'react'
import cssp from '../css/ownerhead.module.css'
import { Link, useParams } from 'react-router-dom';
export default function Ownerheader() {
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
         <li><Link to={`/ownerprofile/${email}`} >Dashboard</Link></li>
         <li><Link to={`/owneravailabel/${email}`}>Available Seat</Link></li>
         <li><Link to={`/ownerbooked/${email}`}>Booked Seat</Link></li>
         <li><Link to={`/ownerreservation/${email}`}>Reservation Request</Link></li>
        </ul>
      </nav>
    </div>
  )
}
