import React from 'react'
import s_image1 from '../saraswatiPuja/images/img-1.jpg';
import s_image2 from '../saraswatiPuja/images/img-2.jpg'
import s_image3 from '../saraswatiPuja/images/img-3.jpg'
import s_image4 from '../saraswatiPuja/images/img-4.jpg'
import s_image5 from '../saraswatiPuja/images/img-5.jpg'
import s_image6 from '../saraswatiPuja/images/img-6.jpg'
import s_image7 from '../saraswatiPuja/images/img-7.jpg'
import s_image8 from '../saraswatiPuja/images/img-8.jpg'
import s_image9 from '../saraswatiPuja/images/img-9.jpg'

import { Link } from 'react-router-dom';
import './SPojaImages.css';
import Footer from '../Footer';
const SPojaImages = () => {
  return (
    <>
    <div className='wedding_Images'>
        <h2>Saraswati Puja Images</h2>
        <div className='weddingImage_container'>
            <div className='weddingImage-main'>
                <img src={s_image1} alt=''/>
            </div>

            <div className='weddingImage-main'>
                <img src={s_image2} alt=''/>
            </div>

            <div className='weddingImage-main'>
                <img src={s_image3} alt=''/>
            </div>

            <div className='weddingImage-main'>
                <img src={s_image4} alt=''/>
            </div>

            <div className='weddingImage-main'>
                <img src={s_image5} alt=''/>
            </div>

            <div className='weddingImage-main'>
                <img src={s_image6} alt=''/>
            </div>

            <div className='weddingImage-main'>
                <img src={s_image7} alt=''/>
            </div>

            <div className='weddingImage-main'>
                <img src={s_image8} alt=''/>
            </div>

            <div className='weddingImage-main'>
                <img src={s_image9} alt=''/>
            </div>
            
        </div>
        <Link to='/news'>Back</Link>
    </div>
    <Footer/>
    </>
  )
}

export default SPojaImages