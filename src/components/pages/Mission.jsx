import React from 'react'
import child_img from '../images/childEducation_img.jpg';
import mission_img from '../campaingns/campaingnsImage/img-7.jpg';
import medical_img from '../images/medical_img.jpeg';
import water_img from '../images/water.jpg';
import './Mission.css';
import Footer from '../Footer';
const Mission = () => {
  return (
    <>
      <div className='mission_section'>
        <div className='text_container'>
          <h2 className='mission_taital'>Our Mission</h2>
          <p className='mission_text'>
            We are commited to enhancing the cultural, education, fitness aspects within our community. Through our educational program
            'Gurukul', we aim to empower Maithil youth with access to equality education and skill development opportunities, nurturing the leaders
            of tomorrow for our community. At MAA, we uphold the principles of selfless service and transparency, ensuring that every initiative is
            driven by the collective spirit of our members. The organization's motive is to unite the Maithil diaspora to preserve our heritage.
            We invite you to jion us in preserving and celebrating our virant Maithil identity. Together, let's stand tail as proud Maithils and make
            a meaningful difference in promoting our heritage for generations to come.
          </p>
        </div>
        <div className='image_container'>
          <div className='mission_img'>
            <img src={mission_img} alt='about_img' />
          </div>
        </div>

        <div className='mission_container'>
          <div className='mission'>
            <img src={child_img} alt='' />
            <h2>Child Education</h2>
            <p>
            Our 'Gurukul' program aims to provide equal educational opportunities to Maithil children,
             nurturing them into confident and capable individuals. 
            </p>
          </div>

          <div className='mission'>
            <img src={medical_img} alt='' />
            <h2>Medical Treatment</h2>
            <p>
            Our organization is dedicated to providing essential medical treatment and services to those in need within our community. 
            </p>
          </div>

          <div className='mission'>
            <img src={water_img} alt='' />
            <h2>Pure Drinking Water</h2>
            <p>
            Access to clean and safe drinking water is essential for a healthy life. 
            Our organization is committed to providing pure drinking water to communities in need. 
            </p>
          </div>
          
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default Mission

