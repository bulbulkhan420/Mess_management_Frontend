import React, { useEffect, useState } from 'react'
import Ownerheader from './component/Ownerheader'
import axios from 'axios';
import { url } from '../Url';
import { useNavigate, useParams } from 'react-router-dom';
import Messcard from '../Student-profile/component/Messcard'
export default function Owneravailable() {
  let {email}=useParams();
  let [messlist,smesslist]=useState([]);
  
  let navigate=useNavigate();
  let [refress,srefress]=useState(0);
  useEffect(()=>{
    let token=localStorage.getItem('tokenowner');
   axios.post(`${url}/availableseat`,{
    mess_email:email,
    authorization:token
   })
   .then((res)=>{
    if(res.data.verify==false){
      navigate('/loginmess');
    }
    else{
      smesslist(res.data.info);
    
    }
   
   })
  },[refress]);
  return (
    <div>
        <Ownerheader/>
        
      {
        messlist.map((item,i)=>{
          return <div key={i}>
          <Messcard info={item} />
          <button onClick={(e)=>{
            axios.delete(`${url}/deletroomlist/${item._id}`)
            .then((res)=>{
              if(res.data.ok){
                srefress(val=>(val+1)%9);
                alert('successfully deleted');
              }
            })
          }}>Delete</button>
          </div>
        })
      }
    </div>
  )
}
