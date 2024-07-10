import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Messcard from './component/Messcard';
import { url } from '../Url';
import Studentheader from './component/Studentheader';
import Footer from '../Component/Footer';
import Buttin from '../Component/Buttin';

export default function Studentmessconfirm() {
    let {_id,email,stat}=useParams();
    let navigate=useNavigate();
    let id=_id;
   let [butval,sbutval]=useState(``)
   let [color,scolor]=useState("blue");
   let [info,sinfo]=useState({});
   let payment=(e)=>{
    let token=localStorage.getItem('token');
    axios.post(`${url}/paymentdone`,{
      authorization:token,
      tk:info.mess_seat_price,
      _id:_id,
      email:email
    })
    .then((res)=>{
      console.log(res.data);
      if(res.data.exist==false){
        window.location.replace(res.data.url);
      }
     else{
      toast.warn('You Already have booked a room',{
        position:'top-center'
      })
      
     }
    
    })
   }
   useEffect(()=>{
    let authorization=localStorage.getItem('token');
    axios.post(`${url}/student/payment`,{
        id,
        authorization
    })
    .then((res)=>{
        console.log(res)
     if(res.data.verify==false){
        navigate('/login');
        return ;
     }
     if(stat!="Not_paid"){
      toast.success("Payment Success",{
        position:'top-center'
      })
      
      sbutval("Paid");
      scolor("green");
    }
    else if(stat=="paid"){
      toast.warn('You Already have booked a room',{
        position:'top-center'
      })
      
      sbutval("Paid");
      scolor("green");
    }
    else{
      sbutval(`Pay Tk ${res.data.info.mess_seat_price}`);
    }
     sinfo(res.data.info);
    })
   
   },[])
  return (
    <div>
        <Studentheader/>
        <div className='container'>
          <div className="row">
            <div className="col-lg-3 col-md-2 col-sm-0"></div>
            <div className='col-lg-6 col-md-8 col-sm-12'>
            <Messcard info={info}/>
            </div>
        
         
        
        
         <div className="col-lg-3 col-md-2 col-sm-0"></div>
          </div>

          <div className="row">
          <div className="col-lg-3 col-md-2 col-sm-0"></div>
            <div className='col-lg-6 col-md-8 col-sm-12'>
              <div dangerouslySetInnerHTML={{__html:info.mess_map}} />
            </div>
            <div className="col-lg-3 col-md-2 col-sm-0"></div>
          </div>
          <div className="row">
          <div className="col-lg-3 col-md-2 col-sm-0"></div>
            <div  className="col-lg-3 col-md-2 col-sm-0">
            <span onClick={payment}>
            <Buttin text={`${butval}`} width={`100px`}/>
          </span>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-0"></div>
          </div>
        </div>
   
     <Footer/>
     <ToastContainer position='top-center'/>
    </div>
  )
}
