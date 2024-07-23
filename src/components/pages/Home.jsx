import React, { useState, useEffect,  } from 'react'
import SliderImages from '../sliderImage/SliderImages';
import SliderContent from '../sliderImage/SliderContent';
import Arrows from '../sliderImage/Arrows';
import Dots from '../sliderImage/Dots';
import '../sliderImage/Slider.css';
import icon_1 from '../images/icon-1.png';
import icon_2 from '../images/icon-2.png';
import icon_3 from '../images/icon-3.png';
import './Home.css';
import { Link } from 'react-router-dom';
import OurValue from './OurValue';
import Footer from '../Footer';

const len = SliderImages.length - 1;
const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);


//  const volunteers=()=>{
//   alert('Join us for Volunteers. For more details, contact us at 7260903487.');
//  }

//  const fundraise=()=>{
//   alert('Join us for Membership. For more details, contact us at 7260903487.');
//  }
//  const donation=()=>{
//   alert('Join us for Donation. For more details, contact us at 7260903487.');
//  }
  return (
    <>
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} sliderImage={SliderImages} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          sliderImage={SliderImages}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>

      <div className='donation_box'>
        <h4 className='donation_taital'>Associate with MAA</h4>
        <div className='fundraise_main_section'>
          <div className='box_main'>
            <div className='icon_container'>
              <img src={icon_1} alt='' />
            </div>
            <h4 className='volunteer_text'>Become a Volunteer</h4>
            
            <div className='join_bt'>
              <Link to='/contact_page'>Volunteer</Link>
            </div>
          </div>

          <div className='box_main box_main1'>
            <div className='icon_container'>
              <img src={icon_2} alt='' />
            </div>
            <h4 className='volunteer_text'>Become a Member</h4>
            <div className='join_bt'>
              <Link to='/contact_page'>Join Now</Link>
            </div>
          </div>

          <div className='box_main'>
            <div className='icon_container'>
              <img src={icon_3} alt='' />
            </div>
            <h4 className='volunteer_text'>Become a donar</h4>
            <div className='join_bt'>
              <Link to='/contact_page'>Donate</Link>
            </div>
          </div>
        </div>

      </div>
    <OurValue/>
    <Footer/>
    </>
  )
}

export default Home;
