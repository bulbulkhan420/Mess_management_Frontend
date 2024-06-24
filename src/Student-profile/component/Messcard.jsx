import React from 'react'

export default function Messcard({info}) {
   let a=info;
  return (
    <div>
      <div>
        <img src={info.mess_seat_image} alt="" />
        <h3>Mess Name: {a.mess_name}</h3>
        <p>Mess Location: {a.mess_location}</p>
        <p>Mess Owner: {a.mess_owner}</p>
        <p>Seat Type: {a.mess_seat_type}</p>
        <p>Seat price: {a.mess_seat_price}</p>
        <p>Seat Booked By: {a.student_booked}</p>
        <p>Student Number: {a.student_number}</p>
        <div>
          <div dangerouslySetInnerHTML={{__html:info.mess_map}}/>
        </div>
      </div>
    </div>
  )
}
