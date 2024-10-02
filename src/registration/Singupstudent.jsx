import React, { useState } from 'react'
import csmm from "./CSS/Signupstudent.module.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../Url';

export default function Singupstudent() {
  let [status,sstatus]=useState("");
  let [fname,sfname]=useState("");
  let [lname,slname]=useState("");
  let [email,semail]=useState("");
  let [phone,sphone]=useState("");
  let [password,spassword]=useState("");
  let [cpassword,scpassword]=useState("");
  let navigate=useNavigate();
  let setvalue=(e)=>{
     e.preventDefault();
     if(e.target.name=="fname"){
      sfname(e.target.value);
     }
    else if(e.target.name=="lname"){
      slname(e.target.value);
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
  let submitform=(e)=>{
    e.preventDefault();
    if(password==cpassword){
    axios.post(`${url}/studentsignup`,{
      fname,lname,email,phone,password
    })
    .then((res)=>{
      if(res.data.check){
        sstatus("Email are already used");
      }
      else{
        navigate("/otp/"+email);
      }
    })
    }
    else{
      sstatus("Password are not same please check");
    }
  }
  return (
    <div>
        <div className={csmm.dismain}>
        <form className={csmm.dis} onSubmit={submitform}>
            <p className={csmm.pp} style={{color:'rgb(7,7,159)',fontWeight:'bolder'}}>Create Account</p>
        <input className={csmm.in} type="text" name='fname' value={fname} onChange={setvalue} required placeholder='First Name' />
        <input className={csmm.in} type="text" name='lname' value={lname} onChange={setvalue} required placeholder='Last Name'/>
        <input className={csmm.in} type="email" name='email' value={email} onChange={setvalue} required placeholder='Enter Your Email'/>
        <input className={csmm.in} type="number"name='phone' value={phone} onChange={setvalue} required placeholder='Enter Your Contract Number'/>
        <input className={csmm.in} type="password" name='password' value={password} onChange={setvalue} required placeholder='Enter Your Password' />
        <input className={csmm.in} type="password" name='cpassword' value={cpassword} onChange={setvalue} required placeholder='Confirm Your Password' />
        <button type='submit' className={csmm.btn}>Create Account</button>
        <p style={{textAlign:'center',color:'red'}}>{status}</p>
      </form>
      </div>      
    </div>
  )
}
