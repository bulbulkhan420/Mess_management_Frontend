import React, { useState } from 'react'
import Homehead from '../Component/Homehead'
import "./CSS/home.css"
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import pic1 from '../pic7.webp'
import pic2 from '../pic2.jpg'
import pic3 from '../pic3.jpg'
import pic4 from '../pic4.jpg'
import pic6 from '../pic5.jpg'
import Footer from '../Component/Footer';
import Review from './Review'
import FrequentlyAskedQuestion from './FrequentlyAskedQuestion'
import AboutUs from './AboutUs'

const slideStyles = {
  width: "100%",
  height: "80dvh",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "30px",
  color: "blue",
  zIndex: 1,
  cursor: "pointer",
  
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "30px",
  color: "blue",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};
export default function Home() {
  let slides=[pic1,pic2,pic3,pic4,pic6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex]})`,
    opacity:'1',
    backgroundColor:'black'
  };
  let [text]=useTypewriter({
    words:['Welcome To Rajshahi Mess Management System'],
    loop:{},
    deleteSpeed:0,
    typeSpeed:50
   })
  return (
    <div>
      <Homehead/>
      <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        
        <div className='fsu' style={{fontWeight:'bolder',color:'blue',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
            {text}<Cursor/>
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
     
     <AboutUs/>
     <FrequentlyAskedQuestion/>
     <Review/>
      <Footer/>
    </div>
    
  )
}
