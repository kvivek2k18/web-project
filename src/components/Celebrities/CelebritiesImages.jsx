import React from 'react'
import { Link } from 'react-router-dom';
import celebrities_img1 from '../Celebrities/celebritiesImages/Img-1.jpg';
import celebrities_img2 from '../Celebrities/celebritiesImages/Img-2.jpg';
import celebrities_img3 from '../Celebrities/celebritiesImages/Img-3.jpg';
import celebrities_img4 from '../Celebrities/celebritiesImages/Img-4.jpg';
import celebrities_img5 from '../Celebrities/celebritiesImages/Img-5.jpg';
import celebrities_img6 from '../Celebrities/celebritiesImages/Img-6.jpg';
import './CelebritiesImages.css';
import Footer from '../Footer';

const CelebritiesImages = () => {
  return (
    <>
    <div className='celebrities_Images'>
        <h2>Celebrities Images</h2>
        <div className='celebritiesImage_container'>
            <div className='celebritiesImage-main'>
                <img src={celebrities_img1} alt=''/>
            </div>

            <div className='celebritiesImage-main'>
                <img src={celebrities_img2} alt=''/>
            </div>

            <div className='celebritiesImage-main'>
                <img src={celebrities_img3} alt=''/>
            </div>

            <div className='celebritiesImage-main'>
                <img src={celebrities_img4} alt=''/>
            </div>

            <div className='celebritiesImage-main'>
                <img src={celebrities_img5} alt=''/>
            </div>

            <div className='celebritiesImage-main'>
                <img src={celebrities_img6} alt=''/>
            </div>

            
        </div>
        <Link to='/news'>Back</Link>
    </div>
    <Footer/>
    </>
  )
}

export default CelebritiesImages