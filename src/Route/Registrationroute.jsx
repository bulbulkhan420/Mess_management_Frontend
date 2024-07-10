import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../registration/Login.jsx'
import Otp from '../registration/Otp.jsx'
import Singupstudent from '../registration/Singupstudent.jsx'
import Singupmess from '../registration/Singupmess.jsx'
import Otpchangepassword from '../registration/Otpchangepassword.jsx'
import Forgetemail from '../registration/Forgetemail.jsx'
import Changepassword from '../registration/Changepassword.jsx'
import Home from '../registration/Home.jsx'
import Loginmess from '../registration/Loginmess.jsx'
import Otpmess from '../registration/Otpmess.jsx'
import Otpchangepasswordmess from '../registration/Otpchangepasswordmess.jsx'
import Changepasswordmess from '../registration/Changepasswordmess.jsx'
import Studentpro from '../Student-profile/Studentpro.jsx'
import Ownerprofile from '../Owner-profile/Ownerprofile.jsx'
import StudentSearch from '../Student-profile/StudentSearch.jsx'
import Studentmessconfirm from '../Student-profile/Studentmessconfirm.jsx'
import Owneravailable from '../Owner-profile/Owneravailable.jsx'
import Ownerbooked from '../Owner-profile/Ownerbooked.jsx'
import Ownernotice from '../Owner-profile/Ownernotice.jsx'
import StudentMess from '../Student-profile/StudentMess.jsx'
import Studentnotice from '../Student-profile/Studentnotice.jsx'


export default function Registrationroute() {
  return (
    <div>
   
    {/*<Login/>
    <Singupstudent/>
    <Otp/>
    <Singupmess/>
    <Otpchangepassword/>
    <Forgetemail/>
  <Changepassword/>
  */}
  
  <BrowserRouter>
  <Routes>
    {/* student*/}
  <Route path='/studentprofile/:email' element={<Studentpro/>} ></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path='/studentprofile/search/:email' element={ <StudentSearch/>}/>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/studentprofile/search/messconfirm/:_id/:email/:stat' element={<Studentmessconfirm/>}></Route>
    <Route path='/studentprofile/currentmess/:email' element={<StudentMess/>}></Route>
    <Route path='/student/notice/:email' element={<Studentnotice/>}></Route>
    {/*registration*/}
    <Route path='/loginmess' element={<Loginmess/>}></Route>
    <Route path='/signupstudent' element={<Singupstudent/>}></Route>
   
    <Route path='/forgetemail/:id' element={<Forgetemail/>} ></Route>
   
    <Route path='/otp/:email' element={<Otp/>} ></Route>

    <Route path='/otppasswordchange/:email' element={<Otpchangepassword/>} ></Route>
    
    
    <Route path='/changepassword/:email' element={<Changepassword/>} ></Route>

    <Route path='/signupmess' element={<Singupmess/>} ></Route>
    <Route path='/otppasswordchangemess/:email' element={<Otpchangepasswordmess/>} ></Route>
    <Route path='/changepasswordmess/:email' element={<Changepasswordmess/>} ></Route>
    <Route path='/otpmess/:email' element={<Otpmess/>} ></Route>
    {/*owner*/}
    <Route path='/ownerprofile/:email' element={<Ownerprofile/>} ></Route>
    <Route path='/owneravailabel/:email' element={<Owneravailable/>}></Route>
    <Route path='/ownerbooked/:email' element={<Ownerbooked/>}></Route>
    <Route path='/owner/notice/:email' element={<Ownernotice/>}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  )
}
