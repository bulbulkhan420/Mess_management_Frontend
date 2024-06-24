import React, { useEffect, useState } from 'react'
import Ownerheader from './component/Ownerheader'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { url } from '../Url';
import Messcard from '../Student-profile/component/Messcard';

export default function Ownerbooked() {
  let {email}=useParams();
  
  let [unav,sunav]=useState([]);
  let navigate=useNavigate();
  useEffect(()=>{
    let token=localStorage.getItem('tokenowner');
    axios.post(`${url}/unavailablelist`,{
      authorization:token,
      mess_email:email
    })
    .then((res)=>{
      if(res.status!=200){
         navigate('/loginmess')
      }
      else{
        console.log(res);
        sunav(res.data.info);
       
      }
    })
  },[]);
  return (
    <div>
        <Ownerheader/>
         {
          unav.map((item,i)=>{
            return <div key={i}>
              <Messcard info={item} />
            </div>
          })
         }
    </div>
  )
}
