import React from 'react'


const Headersearchpage = () => {
  return (
    <div>
        <div className='header'>
        <h1 style={{backgroundColor:'purple'}}><marquee behavior="scroll" direction="left"> Mass Management system</marquee></h1>
                <div className="header-link row">
                       <div className="col-2 col-s-12"> <a  href="#">Home</a></div>
                       <div className="col-2 col-s-12"> <a href="about-us">About us</a></div>
                       <div className="col-2 col-s-12"> <a href="#">Contact</a></div>
                    
                       <div className="col-2 col-s-12"> <a href="#">Login</a></div>
                    
                       <div className="col-2 col-s-12"> <a href="#">Sign Up</a></div>
                </div>
        </div>
    </div>
  )
}

export default Headersearchpage
