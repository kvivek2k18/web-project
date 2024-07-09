import React, { useState, useEffect, useRef } from 'react'
import SliderImages from '../sliderImage/SliderImages';
import SliderContent from '../sliderImage/SliderContent';
import Arrows from '../sliderImage/Arrows';
import Dots from '../sliderImage/Dots';
import '../sliderImage/Slider.css';
import icon_1 from '../images/icon-1.png';
import icon_2 from '../images/icon-2.png';
import icon_3 from '../images/icon-3.png';
import './Home.css';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import OurValue from './OurValue';
import Footer from '../Footer';

const len = SliderImages.length - 1;
const Home = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const form=useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_oo7nm39', 'template_9qwezrf', form.current, {
  //       publicKey: 'E1dNSPY6-yRIvR3I0',
  //     })
  //     .then(
  //       (result) => {
  //         console.log('SUCCESS!', result.text);
  //         alert("sucessfully sent");
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

 const volunteers=()=>{
  alert('Join us for Volunteers. For more details, contact us at 7260903487.');
 }

 const fundraise=()=>{
  alert('Join us for Membership. For more details, contact us at 7260903487.');
 }
 const donation=()=>{
  alert('Join us for Donation. For more details, contact us at 7260903487.');
 }
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
        <h4 className='donation_taital'>Contact for Donation</h4>
        {/* <form className='mail_box ref={form}'>
          <input type='text' className='mail_text' placeholder='Your Name' name='user_name' />
          <input type='text' className='mail_text' placeholder='Email' name='user_email' />
          <input type='text' className='mail_text' placeholder='Phone' name='user_number' />
        </form>
        <div className='send_btn'>
          <Link to='/' onClick={sendEmail}>send</Link>
        </div> */}

        <div className='fundraise_main_section'>
          <div className='box_main'>
            <div className='icon_container'>
              <img src={icon_1} alt='' />
            </div>
            <h4 class='volunteer_text'>VOLUNTEERS</h4>
            <p class='lorem_text'>Lorem Ipsum generators on the Internet tend to repeat predefined</p>
            <div class='join_bt'>
              <Link to='/contact_page' onClick={volunteers}>Join Now</Link>
            </div>
          </div>

          <div className='box_main box_main1'>
            <div className='icon_container'>
              <img src={icon_2} alt='' />
            </div>
            <h4 class='volunteer_text'>JOIN NOW</h4>
            <p class='lorem_text'>Lorem Ipsum generators on the Internet tend to repeat predefined</p>
            <div class='join_bt'>
              <Link to='/contact_page' onClick={fundraise}>Join Now</Link>
            </div>
          </div>

          <div className='box_main'>
            <div className='icon_container'>
              <img src={icon_3} alt='' />
            </div>
            <h4 class='volunteer_text'>DONATION</h4>
            <p class='lorem_text'>Lorem Ipsum generators on the Internet tend to repeat predefined</p>
            <div class='join_bt'>
              <Link to='/contact_page' onClick={donation}>Join Now</Link>
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
