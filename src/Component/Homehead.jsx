import React, { useRef, useState } from 'react'
import "./css/main.css"
import { FaAlignJustify } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
export default function Homehead() {
  let [t,st]=useState(false);
  let sb=useRef();
  let toggle=()=>{
       if(t==false){
        sb.current.style.left="0px";
        st(true);
       }
       else{
        sb.current.style.left="-100%";
        st(false);
       }
  }
  return (
    <div>
      <div className="head">
      <FaAlignJustify onClick={toggle} className='bar'/>
        <div className='item'><NavLink to='/login' style={{color:'aliceblue',textDecoration:'none'}}>Student Login</NavLink></div>
        <div className='item'><NavLink to='/loginmess' style={{color:'aliceblue',textDecoration:'none'}}>Owners Login</NavLink></div>
        <div className='item'>Contract</div>
        
      </div>
      <div className="sidebar" ref={sb}>
        <div ><NavLink to='/login' style={{color:'aliceblue',textDecoration:'none'}}>Student Login</NavLink></div>
        <div ><NavLink to='/loginmess' style={{color:'aliceblue',textDecoration:'none'}}>Owners Login</NavLink></div>
        <div style={{color:'aliceblue'}}>Contract</div>
        </div>
    </div>
  )
}
