import React from 'react';
import { Link } from 'react-router-dom';
import yoga_image1 from '../yoga/yogaImages/img-1.jpg';
import yoga_image2 from '../yoga/yogaImages/img-2.jpg';
import yoga_image3 from '../yoga/yogaImages/img-3.jpg';
import yoga_image4 from '../yoga/yogaImages/img-4.jpg';
import './YogaImages.css';
import Footer from '../Footer';

const YogaImages = () => {
  return (
    <>
    <div className='yoga_Images'>
        <h2>Yoga Images</h2>
        <div className='yogaImage_container'>
            <div className='yogaImage-main'>
                <img src={yoga_image1} alt=''/>
            </div>

            <div className='yogaImage-main'>
                <img src={yoga_image2} alt=''/>
            </div>

            <div className='yogaImage-main'>
                <img src={yoga_image3} alt=''/>
            </div>

            <div className='yogaImage-main'>
                <img src={yoga_image4} alt=''/>
            </div>

            {/* <div className='yogaImage-main'>
                <img src={yoga_image} alt=''/>
            </div>

            <div className='yogaImage-main'>
                <img src={yoga_image} alt=''/>
            </div>

            <div className='yogaImage-main'>
                <img src={yoga_image} alt=''/>
            </div>

            <div className='yogaImage-main'>
                <img src={yoga_image} alt=''/>
            </div> */}
            
        </div>
        <Link to='/news'>Back</Link>
    </div>
    <Footer/>
    </>
  )
}

export default YogaImages