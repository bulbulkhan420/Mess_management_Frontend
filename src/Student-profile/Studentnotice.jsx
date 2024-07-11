import React, { useEffect, useState } from 'react'
import Studentheader from './component/Studentheader'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { url } from '../Url';
import Noticecard from '../Component/Noticecard';
import Footer from '../Component/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Studentnotice() {
    let {email}=useParams();
    let [info,sinfo]=useState([]);
    let token=localStorage.getItem('token');
    useEffect(()=>{
     axios.post(`${url}/student/noticeinfo`,{
      authorization:token,
      email
     })
     .then((res)=>{
        if(res.data.verify && res.data.available){
            sinfo(res.data.info);
            console.log(res.data.info);
        }
        else{
            
            toast.warn("You have no Notice",{
                position:'top-center'
            })
           
        }
     })
    },[]);

  return (
    <div>
      <Studentheader/>
     {
        info.length>0?<div style={{backgroundColor:'rgb(225, 224, 235)'}}>
       {
        info.map((item,i)=>{
            if(i<=10){
         return <div key={i}>
            <div className="container">
                <div className="row">
                    <div className='col-lg-3 col-md-1 col-sm-0'></div>
                    <div className='col-lg-6 col-md-10 col-sm-12' data-aos="fade-up">
                    <Noticecard info={{item,i}}/>
                    </div>
                    <div className='col-lg-3 col-md-1 col-sm-0'></div>
                </div>
            </div>
          
         </div>
            }
            else{
                return ;
            }
        })

       }
        </div>:<h1 style={{textAlign:'center',height:'90dvh',display:'flex',alignItems:'center',justifyContent:'center'}}>Not have any Notice</h1>
     }
     <Footer/>
     <ToastContainer position='top-center'/>
    </div>
  )
}
