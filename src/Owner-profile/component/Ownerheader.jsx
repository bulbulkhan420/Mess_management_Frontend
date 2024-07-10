import React, { useState } from 'react'
import cssp from '../css/ownerhead.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function Ownerheader() {
  let navigate=useNavigate();
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
        <ul style={{zIndex:'6'}} className={isNavOpen ? cssp.navopen : ''}>
         <li><Link to={`/ownerprofile/${email}`} >Dashboard</Link></li>
         <li><Link to={`/owneravailabel/${email}`}>Available Seat</Link></li>
         <li><Link to={`/ownerbooked/${email}`}>Booked Seat</Link></li>
         <li><Link to={`/owner/notice/${email}`}>Notice</Link></li>
         <li onClick={()=>{
          localStorage.removeItem('tokenowner');
          navigate('/loginmess');
         }}  style={{color:'aliceblue'}}>Sign Out</li>
         <li style={{color:'aliceblue'}}>Help</li>
        </ul>
      </nav>
    </div>
  )
}
