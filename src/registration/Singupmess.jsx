import React, { useState } from 'react'
import "./CSS/signupmess.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Singupmess() {
  let [location,slocation]=useState("");
  let sel=(e)=>{
     slocation(e.target.value);
  }
  let [messname,smessname]=useState("");
  let [fname,sfname]=useState("");
  let [lname,slname]=useState("");
  let [email,semail]=useState("");
  let [phone,sphone]=useState("");
  let [password,spassword]=useState("");
  let [cpassword,scpassword]=useState("");
  let navigate=useNavigate();
  
  let setval=(e)=>{
     e.preventDefault();
     if(e.target.name=="fname"){
      sfname(e.target.value);
     }
    else if(e.target.name=="lname"){
      slname(e.target.value);
     }
     else if(e.target.name=='messname'){
      smessname(e.target.value);
     }
     if(e.target.name=="email"){
      semail(e.target.value);
     }
     if(e.target.name=="phone"){
      sphone(e.target.value);
     }
     if(e.target.name=="password"){
      spassword(e.target.value);
     }
     if(e.target.name=="cpassword"){
      scpassword(e.target.value);
     }
  }
  let subfrm=(e)=>{
    e.preventDefault();
    if(password==cpassword){
       axios.post(`${url}/ownersignup`,{
        location,fname,lname,email,phone,password,messname
       })
       .then((res)=>{
        if(res.data.check){
          toast.info('Email exist',{
            position:'top-center'
          })
          
        }
        else{
          navigate("/otpmess/"+email);
        }
       })
    }
    else{
      toast.info('Password does not matched',{
        position:'top-center'
      })
     
    }
  }
  return (
    <div>
      <div className="dismain">
        <form className='dis' onSubmit={subfrm}>
            <p style={{color:'rgb(7,7,159)',fontWeight:'bolder'}}>Create Account</p>
        <select name="" id="" required onChange={sel} value={location}>
            <option value="">Choose Location</option>
            <option value="Binodpur">Binodpur</option>
            <option value="Kajla">Kajla</option>
            <option value="Monnafer Mor">Monnafer Mor</option>
            <option value="Zero Point">Zero Point</option>
            <option value="Alu Potti">Alu Potti</option>
            <option value="Station Bazar">Station Bazar</option>
            <option value="Vodra">Vodra</option>
            <option value="Kata Khali">Kata Khali</option>
            <option value="Kadir Gong">Kadir Gong</option>
        </select>
        <input type="text" name='messname' onChange={setval} required placeholder='Mess Name' />
        <input type="text" name='fname' onChange={setval} value={fname}required placeholder='First Name' />
        <input type="text" name='lname' onChange={setval} value={lname} required placeholder='Last Name'/>
        <input type="email" name='email' onChange={setval} value={email} required placeholder='Enter Your Email'/>
        <input type="number" name='phone' onChange={setval} value={phone} required placeholder='Enter Your Contract Number'/>
        <input type="password" name='password' onChange={setval} value={password} required placeholder='Enter Your Password' />
        <input type="password" name='cpassword' onChange={setval} value={cpassword} required placeholder='Confirm Your Password' />
        <button type='submit'>Create Account</button>
        
      </form>
      <ToastContainer position='top-center'/>
        </div>
    </div>
  )
}
