import React, { useState } from 'react'
import cssp from '../css/profile.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function Studentheader() {
    const [isNavOpen, setIsNavOpen] = useState(false);
  let {email}=useParams();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  let navigate=useNavigate();
  return (
    <div>
       <nav className={cssp.navbar} >
        <button className={cssp.navtoggle} onClick={toggleNav}>
          ☰
        </button>
        <ul className={isNavOpen ? cssp.navopen : ''} style={{zIndex:'5'}}>
          <li><Link to={`/studentprofile/${email}`}>Profiles</Link></li>
          <li><Link to={`/studentprofile/search/${email}`}>Searching Mess</Link></li>
          <li><Link to={`/studentprofile/currentmess/${email}`} >Current Mess</Link></li>

          <li style={{color:'aliceblue'}}><Link to={`/student/notice/${email}`}>Notice</Link> </li>
          <li onClick={()=>{
          localStorage.removeItem('token');
          navigate('/login');
         }} style={{color:'aliceblue'}}>Sign Out</li>
         <li style={{color:'aliceblue'}}>Help</li>
        </ul>
      </nav>
    </div>
  )
}
