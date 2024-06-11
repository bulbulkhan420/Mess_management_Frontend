import React from 'react'

export default function Messcard({info}) {
   let a=info;
  return (
    <div>
      <div>
        <h3>Mess Name: {a.mess_name}</h3>
        <p>Mess Location: {a.mess_location}</p>
        <p>Mess Owner: {a.mess_owner}</p>
        <p>Seat Type: {a.mess_seat_type}</p>
        <p>Seat price: {a.mess_seat_price}</p>
      </div>
    </div>
  )
}
