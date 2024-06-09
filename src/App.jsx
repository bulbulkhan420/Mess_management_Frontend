import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './registration/Login.jsx'
import Otp from './registration/Otp.jsx'
import Singupstudent from './registration/Singupstudent.jsx'
import Singupmess from './registration/Singupmess.jsx'
import Otpchangepassword from './registration/Otpchangepassword.jsx'
import Forgetemail from './registration/Forgetemail.jsx'
import Changepassword from './registration/Changepassword.jsx'
import Home from './registration/Home.jsx'
import Loginmess from './registration/Loginmess.jsx'
import Studentmain from './Student-profile/Studentmain';
import Ownermain from './Owner-profile/Ownermain.jsx'
import Otpmess from './registration/Otpmess.jsx'
import Otpchangepasswordmess from './registration/Otpchangepasswordmess.jsx'
import Changepasswordmess from './registration/Changepasswordmess.jsx'
import Registrationroute from './Route/Registrationroute.jsx'
import MassProfilePage from './Mess_Profile_pages/Mass_profile_pages/MassProfilePage.jsx'
import Header from './Mess_Profile_pages/Header.jsx'
import MassSearchPage from './Searching_page_design/MassSearchPage.jsx'


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
     {/* <Registrationroute/> */}
     {/* <MassProfilePage /> */}
    <MassSearchPage />
  </div>
  )
  
}
