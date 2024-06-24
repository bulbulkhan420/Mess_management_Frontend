import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../../Url';

export default function Seatstatus(props) {
    let [available,savailable]=useState(0);
    let [booked,sbooked]=useState(0);
    useEffect(()=>{
        let token=localStorage.getItem('tokenowner');
      axios.post(`${url}/seatstatus`,{
        mess_email:props.email.email,
        authorization:token
      })
      .then((res)=>{
        if(res.data.verify){
            savailable(res.data.av);
            sbooked(res.data.bo);
        }
      })
    },[props.email.refress])
  return (
    <div>
      <div>
        <h5>Available seat:{available}</h5>
        <h5>Booked Seat:{booked}</h5>
      </div>
    </div>
  )
}
