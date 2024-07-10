import React, { useEffect, useState } from 'react'
import "./CSS/login.css"
import { url } from '../Url';
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
   let [email,semail]=useState("");
   let [password,spassword]=useState("");
   let valueset=(e)=>{
          if(e.target.name=="email"){
            semail(e.target.value);
          }
          else if(e.target.name=="password"){
            spassword(e.target.value);
          }
   }
  
   let navigate=useNavigate();
   
   let check= (e)=>{
    e.preventDefault();
    
    axios.post(`${url}/login`,{
      email:email,
      password:password
    })
    .then((res)=>{
      console.log(res.data)
      if(res.data.check){
        let path="/studentprofile/"+email;
        localStorage.setItem("token",res.data.token);
        navigate(path);
       }
       else{
        toast.info("Password or Email doesn't match",{
          position:'top-center'
        })
      
       }
      
      
    })
   
   }
   
  
  
  return (
    <div>
        <div className="log">
        <form className="log-1" onSubmit={check}>
        <p style={{color:'rgb(7,7,159)',fontWeight:'bolder'}}>Student Login</p>
        <input type="email" value={email} name='email' onChange={valueset} placeholder='Enter Your Email'required/>
      <input type="password" value={password} name='password' onChange={valueset} required placeholder='Enter Your password' />
      <button type='submit'>Login</button>
      
      <p style={{textAlign:'center',color:'blue'}}><NavLink to="/signupstudent" className="nodec">Create new Account</NavLink></p>
      <p style={{textAlign:'center',color:'blue'}}><NavLink to="/forgetemail/student" className="nodec">Forget Password?</NavLink></p>
        </form>
        </div>
        
       <ToastContainer position='top-center'/>
    </div>
  )
}

