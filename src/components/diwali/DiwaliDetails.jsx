import React from 'react'
import { Link } from 'react-router-dom'
import diwali_img1 from '../diwali/diwaliImages/Img-1.jpg';
import diwali_img2 from '../diwali/diwaliImages/Img-2.jpg';
import diwali_img3 from '../diwali/diwaliImages/Img-3.jpg';
import diwali_img4 from '../diwali/diwaliImages/Img-4.jpg';
import diwali_img5 from '../diwali/diwaliImages/img-5.jpg';
import diwali_img6 from '../diwali/diwaliImages/img-6.jpg';
import diwali_img7 from '../diwali/diwaliImages/Img-7.jpg';
import diwali_img8 from '../diwali/diwaliImages/Img-8.jpg';
import './DiwaliDetails.css';
import Footer from '../Footer';

const DiwaliDetails = () => {
  return (
    <>
    <div className='diwali_details'>
        <div className='diwali_container'>
            <h3>Diwali Details</h3>
            <p>
            Another fantastic and memorable Diwali Party hosted by MAA! MAA would like to extend its heartfelt gratitude
             and thanks to everyone who participated. From the Maithili Naatak and the kids’ 
             performance on fire safety to the wonderful singing, dancing, and many other memorable acts, 
             it was the perfect evening to celebrate the festival of lights and spend time with loved ones and our community. 
             Thank you all once again for making the event a great success!
            </p>
            <div className='diwali_main'>
                <span>Date: 18 Oct 2025</span>
                <div className='diwali_img'>
                    <img src={diwali_img1} alt=''/>
                </div>

                <div className='diwali_img'>
                    <img src={diwali_img2} alt=''/>
                </div>

                <div className='diwali_img'>
                    <img src={diwali_img3} alt=''/>
                </div>

                 <div className='diwali_img'>
                    <img src={diwali_img4} alt=''/>
                </div>

                 <div className='diwali_img'>
                    <img src={diwali_img5} alt=''/>
                </div>

                 <div className='diwali_img'>
                    <img src={diwali_img6} alt=''/>
                </div>

                <div className='diwali_img'>
                    <img src={diwali_img7} alt=''/>
                </div>

                <div className='diwali_img'>
                    <img src={diwali_img8} alt=''/>
                </div>

                 <div className='diwali_img'>
                    <img src={diwali_img4} alt=''/>
                </div>
            </div>
            <Link to='/news'>Back</Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default DiwaliDetails