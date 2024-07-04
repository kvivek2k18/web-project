import React from 'react'
import { Link } from 'react-router-dom';
import diwali_image1 from '../diwali/diwaliImages/img-5.jpg';
import diwali_image2 from '../diwali/diwaliImages/img-6.jpg';
import './DiwaliImages.css';

const DiwaliImages = () => {
  return (
    <div className='diwali_Images'>
        <h2>Diwali Images</h2>
        <div className='diwaliImage_container'>
            <div className='diwaliImage-main'>
                <img src={diwali_image1} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image2} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image1} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image2} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image1} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image2} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image1} alt=''/>
            </div>

            <div className='diwaliImage-main'>
                <img src={diwali_image2} alt=''/>
            </div>
            
        </div>
        <Link to='/news'>Back</Link>
    </div>
  )
}

export default DiwaliImages