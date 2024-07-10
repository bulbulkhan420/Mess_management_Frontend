import React, { useEffect, useState } from 'react'
import Studentheader from './component/Studentheader'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { url } from '../Url';
import Footer from '../Component/Footer';
import Messcard from './component/Messcard';
import Buttin from '../Component/Buttin';

export default function StudentMess() {
    let {email}=useParams();
    let [info,sinfo]=useState({});
    let [book,sbook]=useState(false);
    let [refress,srefress]=useState(0);
    let payrent=(e)=>{
      let token=localStorage.getItem('token');
      axios.post(`${url}/month/payment`,{
         authorization:token,
         _id:info.mess_info._id,
         rent:info.rent,
         email
      })
      .then((res)=>{
        window.location.replace(res.data.url);
      })
    }
  let navigate=useNavigate();
    useEffect(()=>{
       let token=localStorage.getItem('token');
       axios.post(`${url}/mess/status`,{
        authorization:token,
        email
       })
       .then((res)=>{
          console.log(res.data);
          if(res.data.verify){
            sinfo(res.data.info);
            sbook(res.data.booked)
          }
         else{
            navigate('/login');
         }
       })
    },[refress]);
  return (
  <>
  {
    book? <div>
    <Studentheader/>
   <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-2 col-sm-0"></div>
    <div className='col-lg-6 col-md-8 col-sm-12'>
      <Messcard info={info.mess_info}/>
     
     
      <div>
       <div dangerouslySetInnerHTML={{__html:info.mess_info.mess_map}}/>
      </div>
      <p style={{color:info.payment_duration>31?'red':'green'}}>Last Payment Done {info.payment_duration} Days Ago</p>
      <div >
         {
       info.payment_duration>=20?<span style={{display:'inline'}} onClick={payrent} >
       <Buttin text={`Pay Month rent ${info.rent}`} width={'140px'}/>
     </span>:
       <span style={{display:'inline',opacity:'0.5'}} disabled >
       <Buttin text={`Pay Month rent ${info.rent}`} width={'140px'}/>
     </span>
      }
      
      <span style={{display:'inline'}} onClick={()=>{
       let token=localStorage.getItem('token');
       axios.post(`${url}/delete/studentmess`,{
           tran_id:info.tran_id,
           _id:info.mess_info._id,
           authorization:token
       })
       .then((res)=>{
        if(res.data.verify){
           srefress(pr=>(pr+1)%9);
           alert('successfully deleted');
        }
       
       })
     }}>
      <Buttin text={"Leave"}/>
      </span>
      </div>
     
    
    
   </div>
    </div>
   </div>
   <div className="col-lg-3 col-md-2 col-sm-0"></div>
</div>
:<div>
    <Studentheader/>
    <h3>Not seat</h3>
</div>
  }
  <Footer/>
  </>
  )
}