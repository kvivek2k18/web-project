import React from 'react'
import { Link } from 'react-router-dom';
import yoga_img1 from '../yoga/yogaImages/img-1.jpg';
import yoga_img2 from '../yoga/yogaImages/img-2.jpg';
import yoga_img3 from '../yoga/yogaImages/img-3.jpg';
import yoga_img4 from '../yoga/yogaImages/img-4.jpg';
import yoga_img5 from '../yoga/yogaImages/img-5.jpg';
import yoga_img6 from '../yoga/yogaImages/img-1.jpg';
import './YogaDetails.css';
import Footer from '../Footer';

const YogaDetails = () => {
  return (
    <>
    <div className='yoga_details'>
        <div className='yoga_container'>
            <h3>Yoga Details</h3>
            <p>
                First Yoga session organized by MAA and lead by MAA members as part of health initiative.
            </p>
            <div className='yoga_main'>
                <span>Date: 14 May 2024</span>
                <div className='yoga_img'>
                    <img src={yoga_img1} alt=''/>
                </div>

                <div className='yoga_img'>
                    <img src={yoga_img2} alt=''/>
                </div>

                <div className='yoga_img'>
                    <img src={yoga_img3} alt=''/>
                </div>

                <div className='yoga_img'>
                    <img src={yoga_img4} alt=''/>
                </div>

                <div className='yoga_img'>
                    <img src={yoga_img5} alt=''/>
                </div>

                <div className='yoga_img'>
                    <img src={yoga_img6} alt=''/>
                </div>

            
            </div>
            <Link to='/news'>Back</Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default YogaDetails