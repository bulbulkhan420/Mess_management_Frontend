import React from 'react'
import Homehead from '../Component/Homehead'
import "./CSS/home.css"
export default function Home() {
  return (
    <div className='parent'>
      <Homehead/>
      <marquee behavior="" direction="left"><h1>Welcome Rajshahi Hostel Management System</h1></marquee>
    </div>
  )
}
