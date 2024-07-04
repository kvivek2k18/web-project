import React from 'react'
import './About.css';
import about_img from '../campaingns/campaingnsImage/img-7.jpg';
import Team from './Team';
import Donate from './Donate';
import Footer from '../Footer';
const About = () => {
  return (
    <>
    <div className='about_section'>
        <div className='text_container'>
          <h2 className='about_taital'>About us</h2>
          <p className='about_text'>
            MAA is a non-profit organization passionately dedicated to representing Maithil and Mithila culture on a global platform.
            Maithils are the Hindu community originating from the Maithila region of the Indian subcontinent that comprises Tirhut,
            Darbhanga, koshi, Purnia, Munger, Bhagalpur and Santhal Pargana divisions of the India and some adjoing districts of Nepal.
          </p>
        </div>
        <div className='image_container'>
          <div className='about_img'>
            <img src={about_img} alt='about_img' />
          </div>
        </div>
    </div>

    <Team/>
    <Donate/>
    <Footer/>
    </>
  )
}

export default About