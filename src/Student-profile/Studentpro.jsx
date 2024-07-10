import React, { useEffect, useRef, useState } from 'react'
import cssp from "./css/profile.module.css"
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { url } from '../Url';
import Studentproupdate from './Studentproupdate';
import Studentheader from './component/Studentheader';
import Footer from '../Component/Footer';

export default function Studentpro() {
  let {email}=useParams();
 
  let [toggle,stoggle]=useState("none");
  let navigate=useNavigate();
  let token=localStorage.getItem("token");
  let [loadpage,sloadpage]=useState(0);
 let rec=(loadpage1)=>{
    sloadpage(loadpage1);
 }
 let show=()=>{
 stoggle("block");
 }
 let status=(togglec)=>{
    stoggle(togglec)
 }
  let [info,sinfo]=useState({});
  useEffect(()=>{
    
    axios.post(`${url}/verify/student`,{
      authorization:token
     
    })
    .then((res)=>{
      console.log(res.data)
      if(res.data.verify){
        sinfo(res.data.info);
       
      }
      else{
        navigate('/login');
      }
    })
  },[loadpage,toggle])
  
  
 
  return (
    <>
    <div style={{display:`${toggle}`}}>
    <Studentproupdate  val={{email,rec,status}}/>
    </div>
    
    <div className={cssp.profilepage} >
     <Studentheader/>
      <main className={cssp.maincontent} data-aos="zoom-in">
        <div className={cssp.profilepicture} >
          <img src={info.image} alt="Profile" />
        </div>
        <hr style={{color:'black',border:'5px solid',width:'100%',maxWidth:'600px'}}/>
        <div className={cssp.profiledetails}>
          <h1>{info.name}</h1>
          <hr />
          <div className={cssp.detailitem}><strong>Email:</strong>{info.email}</div>
          <hr />
          <div className={cssp.detailitem}><strong>Phone:</strong> {info.phone}</div>
          <hr />
          <div className={cssp.detailitem}><strong>Current Address:</strong>{info.currentaddress}</div>
          <hr />
          <div className={cssp.detailitem}><strong>Permanent Address:</strong>{info.permanentaddress}</div>
          <hr />
          <div className={cssp.detailitem}><strong>Current Mess Name:</strong>{info.currentmess}</div>
          <hr />
          <div className={cssp.detailitem}><strong>Institution Name:</strong>{info.institution}</div>
          <hr />
          <div style={{display:"flex",justifyContent:"right",width:"100%",marginLeft:"0px"}}><button style={{width:"70px",backgroundColor:'#333',}} onClick={show}>Update</button></div>
        </div>
        
      </main>

     
      
    </div>
    <Footer/>
    </>
    
  );
}
