import React, { useState } from 'react'
import "./CSS/signupstudent.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
    axios.post("https://mess-management-backend-1.onrender.com/studentsignup",{
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
        <div className="dismain">
        <form className='dis' onSubmit={submitform}>
            <p style={{color:'rgb(7,7,159)',fontWeight:'bolder'}}>Create Account</p>
        <input type="text" name='fname' value={fname} onChange={setvalue} required placeholder='First Name' />
        <input type="text" name='lname' value={lname} onChange={setvalue} required placeholder='Last Name'/>
        <input type="email" name='email' value={email} onChange={setvalue} required placeholder='Enter Your Email'/>
        <input type="number"name='phone' value={phone} onChange={setvalue} required placeholder='Enter Your Contract Number'/>
        <input type="password" name='password' value={password} onChange={setvalue} required placeholder='Enter Your Password' />
        <input type="password" name='cpassword' value={cpassword} onChange={setvalue} required placeholder='Confirm Your Password' />
        <button type='submit'>Create Account</button>
        <p style={{textAlign:'center',color:'red'}}>{status}</p>
      </form>
        </div>
      
    </div>
  )
}
