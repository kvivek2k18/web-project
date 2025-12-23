import React from 'react'
import { Link } from 'react-router-dom';
import diwali_image1 from '../diwali24/diwaliImages/Img-1.jpg';
import diwali_image2 from '../diwali24/diwaliImages/Img-2.jpg';
import diwali_image3 from '../diwali24/diwaliImages/Img-3.jpg';
import diwali_image4 from '../diwali24/diwaliImages/Img-4.jpg';
import diwali_image5 from '../diwali24/diwaliImages/Img-7.jpg';
import diwali_image6 from '../diwali24/diwaliImages/Img-8.jpg';
import './DiwaliImages24.css';
import Footer from '../Footer';

const DiwaliImages24 = () => {
  return (
    <>
    <div className='diwali_Images'>
        <h2>Diwali Images 2024</h2>
        <div className='diwaliImage_container'>
            <div className='diwaliImage-main'>
                <img src={diwali_image1} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image2} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image3} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image4} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image5} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image6} alt=''/>
            </div>

            
        </div>
        <Link to='/news'>Back</Link>
    </div>
    <Footer/>
    </>
  )
}

export default DiwaliImages24