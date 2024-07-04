import React from 'react'
import icon from '../images/logo.png';
import img from '../images/img-1.png';
import './Mission.css';
import Footer from '../Footer';
const Mission = () => {
  return (
    <>
    <div className='ourmission_section'>
      <h1>Our Mission</h1>
      <h2>We are commited to enhancing the cultural, education, fitness aspects within our community. Through our educational program
        'Gurukul', we aim to empower Maithil youth with access to equality education and skill development opportunities, nurturing the leaders
        of tomorrow for our community. At MAA, we uphold the principles of selfless service and transparency, ensuring that every initiative is
        driven by the collective spirit of our members. The organization's motive is to unite the Maithil diaspora to preserve our heritage. 
        We invite you to jion us in preserving and celebrating our virant Maithil identity. Together, let's stand tail as proud Maithils and make
        a meaningful difference in promoting our heritage for generations to come.
      </h2> 
      <div className='container'>
        <div className='mission'>
          <img src={icon} alt=''/>
          <h2>Child Education</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div className='mission'>
          <img src={icon} alt=''/>
          <h2>Medical Treatment</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <div className='mission'>
          <img src={icon} alt=''/>
          <h2>Pure Drinking Water</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>
      
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Mission

