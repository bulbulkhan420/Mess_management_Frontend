import React, { useState } from 'react'
import "./CSS/otp.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Url';
export default function Otpchangepassword() {
  let [otp,sotp]=useState("");
  let {email}=useParams();
  let navigate=useNavigate();
  let setvalue=(e)=>{
     e.preventDefault();
     sotp(e.target.value);
  }
  let sendform=(e)=>{
      e.preventDefault();
      axios.post(`${url}/otppasswordchange`,{
        email:email,
        otp:otp
      })
      .then((res)=>{
          if(res.data.check){
            navigate("/changepassword/"+email);
          }
          else{
            alert("Otp does not match");
          }
      })
  }
  return (
    <div>
      <div className="dismain">
       <form className='dis' onSubmit={sendform}>
            <p style={{textAlign:'center'}}>Enter Your OTP Sended in Your Email</p>
            <input type="text" value={otp} onChange={setvalue} required minLength={5} placeholder='Enter Your OTP'/>
            <button type='submit'>Submit</button>
        </form>
       </div>
    </div>
  )
}
