import React from 'react'
import { Link } from 'react-router-dom'
import celebrities_img1 from '../Celebrities/celebritiesImages/Img-1.jpg';
import celebrities_img2 from '../Celebrities/celebritiesImages/Img-2.jpg';
import celebrities_img3 from '../Celebrities/celebritiesImages/Img-3.jpg';
import celebrities_img4 from '../Celebrities/celebritiesImages/Img-4.jpg';
import celebrities_img5 from '../Celebrities/celebritiesImages/Img-5.jpg';
import celebrities_img6 from '../Celebrities/celebritiesImages/Img-6.jpg';
import './CelebritiesDetails.css';
import Footer from '../Footer';

const CelebritiesDetails = () => {
  return (
    <>
    <div className='celebrities_details'>
        <div className='celebrities_container'>
            <h3>Celebrities Details</h3>
            <p>
               MAA, successfully hosted celebrities Kavi Shambhu Shikhar Ji and Kavi Arun Gemini Ji in California during their US trip. 
               It was an extremely enjoyable and enlightening experience to hear their perspectives on the US lifestyle, 
               delivered in their charismatic poetic style. 
               The evening was well spent with talented artists from India, fostering unity among all Maithils.
            </p>
            <div className='celebrities_main'>
                <span>Date: 29 May 2024</span>
                <div className='celebrities_img'>
                    <img src={celebrities_img1} alt=''/>
                </div>

                <div className='celebrities_img'>
                    <img src={celebrities_img2} alt=''/>
                </div>

                <div className='celebrities_img'>
                    <img src={celebrities_img3} alt=''/>
                </div>

                 <div className='celebrities_img'>
                    <img src={celebrities_img4} alt=''/>
                </div>

                 <div className='celebrities_img'>
                    <img src={celebrities_img5} alt=''/>
                </div>

                 <div className='celebrities_img'>
                    <img src={celebrities_img6} alt=''/>
                </div>
            </div>
            <Link to='/news'>Back</Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default CelebritiesDetails