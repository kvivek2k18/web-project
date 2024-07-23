import React from 'react'
import './About.css';
import about_img from '../images/AboutUS.jpg';
import Team from './Team';
// import Donate from './Donate';
import Footer from '../Footer';
const About = () => {
  return (
    <>
    <div className='about_section'>
        <div className='text_container'>
          <h2 className='about_taital'>About us</h2>
          <p className='about_text'>
          MAA is a non-profit organization passionately dedicated to representing Maithil and Mithila culture on a global platform. 
          In addition to our cultural initiatives, we are committed to enhancing the cultural, 
          educational and fitness aspects within our community. Through our educational programs “Gurukul”, 
          we aim to empower Maithil youth with access to quality education and skill development opportunities, 
          nurturing the leaders of tomorrow for our community. At MAA, we uphold the principles of selfless service and transparency,
           ensuring that every initiative is driven by the collective spirit of our members.
          The motive of the organization is to unite the Maithil diaspora to keep our heritage alive. 
          We invite you to join us in preserving and celebrating our vibrant Maithil identity. Together, 
          let's stand tall as proud Maithils and make a meaningful difference in promoting our heritage for generations to come. 
          </p>
        </div>
        <div className='image_container'>
          <div className='ourValue_img'>
            <img src={about_img} alt='about_img' />
          </div>
        </div>
    </div>

    <Team/>
    {/* <Donate/> */}
    <Footer/>
    </>
  )
}

export default About