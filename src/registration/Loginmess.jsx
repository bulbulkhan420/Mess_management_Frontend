import React, { useState } from 'react'
import styles from "./CSS/login.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { url } from '../Url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Loginmess() {
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
   
   axios.post(`${url}/loginmess`,{
     email:email,
     password:password
   })
   .then((res)=>{
     
     if(res.data.check){
       let path="/ownerprofile/"+email;
       localStorage.setItem("tokenowner",res.data.token);
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
        
       <div className={styles.log}>
        <form className={styles.log1} onSubmit={check}>
        <p style={{color:'rgb(7,7,159)',fontWeight:'bolder'}}>Owners Login</p>
        <input className={styles.in} type="email" value={email} name='email' onChange={valueset} placeholder='Enter Your Email'required/>
      <input className={styles.in} type="password" value={password} name='password' onChange={valueset} required placeholder='Enter Your password' />
      <button type='submit' className={styles.btn}>Login</button>
      
      <p style={{textAlign:'center',color:'blue'}}><NavLink to="/signupmess" className={styles.nodec}>Create new Account</NavLink></p>
      <p style={{textAlign:'center',color:'blue'}}><NavLink to="/forgetemail/owner" className={styles.nodec}>Forget Password?</NavLink></p>
        </form>
        </div>
        <ToastContainer position='top-center'/>
    </div>
  )
}