import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Registrationroute from './Route/Registrationroute.jsx'


export default function App() {
  return (
    <div>
   
    {/*<Login/>
    <Singupstudent/>
    <Otp/>
    <Singupmess/>
    <Otpchangepassword/>
    <Forgetemail/>
  <Changepassword/>


  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/loginmess' element={<Loginmess/>}></Route>
    <Route path='/signupstudent' element={<Singupstudent/>}></Route>
    <Route path='/signupmess' element={<Singupmess/>} ></Route>
    <Route path='/forgetemail/:id' element={<Forgetemail/>} ></Route>
    <Route path='/studentprofile/:email' element={<Studentmain/>} ></Route>
    <Route path='/otp/:email' element={<Otp/>} ></Route>

    <Route path='/otppasswordchange/:email' element={<Otpchangepassword/>} ></Route>
    <Route path='/otppasswordchangemess/:email' element={<Otpchangepasswordmess/>} ></Route>
    
    <Route path='/changepassword/:email' element={<Changepassword/>} ></Route>
    <Route path='/changepasswordmess/:email' element={<Changepasswordmess/>} ></Route>
    <Route path='/ownerprofile/:email' element={<Ownermain/>} ></Route>
    <Route path='/otpmess/:email' element={<Otpmess/>} ></Route>
  </Routes>
  
  </BrowserRouter>
  */}
     <Registrationroute/>
  </div>
  )
}
