import React from 'react'
import { Link } from 'react-router-dom';
import wildfire_img1 from '../WildFire/wildFireImage/Img-1.jpg';
import wildfire_img2 from '../WildFire/wildFireImage/Img-3.jpg';
import wildfire_img3 from '../WildFire/wildFireImage/Img-4.jpg';
import './WildFireImage.css';
import Footer from '../Footer';

const WildFireImage = () => {
  return (
    <>
    <div className='wildfire_Images'>
        <h2>LA  Wild Fire Victims donation drive Images</h2>
        <div className='wildfireImage_container'>
            <div className='wildfireImage-main'>
                <img src={wildfire_img1} alt=''/>
            </div>

            <div className='wildfireImage-main'>
                <img src={wildfire_img3} alt=''/>
            </div>

              <div className='wildfireImage-main'>
                <img src={wildfire_img2} alt=''/>
            </div>

             <div className='wildfireImage-main'>
                <img src={wildfire_img1} alt=''/>
            </div>

            <div className='wildfireImage-main'>
                <img src={wildfire_img3} alt=''/>
            </div>

            
            <div className='wildfireImage-main'>
                <img src={wildfire_img2} alt=''/>
            </div>
            
        </div>
        <Link to='/news'>Back</Link>
    </div>
    <Footer/>
    </>
  )
}

export default WildFireImage