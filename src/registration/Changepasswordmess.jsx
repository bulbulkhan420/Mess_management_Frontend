import React, { useState } from 'react'
import "./CSS/otp.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Url';
export default function Changepasswordmess() {
  let [password,spassword]=useState("");
  let [cpassword,scpassword]=useState("");
  let {email}=useParams();
  let nagivate=useNavigate();
  let setv=(e)=>{
    e.preventDefault();
    if(e.target.name=="pass"){
      spassword(e.target.value);
    }
    else if(e.target.name=="cpass"){
      scpassword(e.target.value);
    }
  }
  let changepass=(e)=>{
   e.preventDefault();
   if(password==cpassword){
    axios.patch(`${url}/updatepassmess`,{
      email:email,
      password:password
    })
    .then((res)=>{
      if(res.data.check){
      nagivate("/ownerprofile/"+email);
      }
      else{
        alert("error");
      }
    })
   }
   else{
    alert("password not same");
   }
  }
  
  return (
    <div>
      <div className="dismain">
       <form className='dis' onSubmit={changepass}>
            <p style={{textAlign:'center'}}>Change Password</p>
            <input type="password" name='pass' value={password} onChange={setv} required placeholder='Enter New Password'/>
            <input type="password" name='cpass' value={cpassword} onChange={setv} required placeholder='Confirm New Password'/>
            <button type='submit'>Submit</button>
        </form>
       </div>
    </div>
  )
}
