import React from 'react'
import { Link } from 'react-router-dom';
import c_image1 from'../campaingns/campaingnsImage/img-1.jpg';
import c_image2 from'../campaingns/campaingnsImage/img-2.jpg';
import c_image3 from'../campaingns/campaingnsImage/img-3.jpg';
import c_image4 from'../campaingns/campaingnsImage/img-4.jpg';
import c_image5 from'../campaingns/campaingnsImage/img-5.jpg';
import c_image6 from'../campaingns/campaingnsImage/img-6.jpg';
import c_image7 from'../campaingns/campaingnsImage/img-7.jpg';
import c_image8 from'../campaingns/campaingnsImage/img-8.jpg';
import c_image9 from'../campaingns/campaingnsImage/img-9.jpg';
import c_image10 from'../campaingns/campaingnsImage/img-10.jpg';
import './EngagementImage.css';

const EngagementImages = () => {
  return (
    <div className='engagement_Images'>
        <h2>More Campaingns Images</h2>
        <div className='engagementImage_container'>
            <div className='engagementImage-main'>
                <img src={c_image1} alt=''/>
            </div>

            <div className='engagementImage-main'>
                <img src={c_image2} alt=''/>
            </div>

            <div className='engagementImage-main'>
                <img src={c_image3} alt=''/>
            </div>

            <div className='engagementImage-main'>
                <img src={c_image4} alt=''/>
            </div>

            <div className='engagementImage-main'>
                <img src={c_image5} alt=''/>
            </div>

            <div className='engagementImage-main'>
                <img src={c_image6} alt=''/>
            </div>

            <div className='engagementImage-main'>
                <img src={c_image7} alt=''/>
            </div>

            <div className='engagementImage-main'>
                <img src={c_image8} alt=''/>
            </div>

            <div className='engagementImage-main'>
                <img src={c_image9} alt=''/>
            </div>

            <div className='engagementImage-main'>
                <img src={c_image10} alt=''/>
            </div>
            
        </div>
        <Link to='/news'>Back</Link>
    </div>
  )
}

export default EngagementImages