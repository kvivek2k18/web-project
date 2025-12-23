import React from 'react'
import summer_image1 from '../summer/summerImage/img-1.jpg'
import summer_image2 from '../summer/summerImage/img-2.jpg'
import summer_image3 from '../summer/summerImage/img-3.jpg'
import summer_image4 from '../summer/summerImage/img-4.jpg'
import summer_image5 from '../summer/summerImage/img-5.jpg'
import summer_image8 from '../summer/summerImage/img-8.jpg'
import './SummerImages.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer'

const SummerImages = () => {
  return (
    <>
    <div className='summer_Images'>
    <h2>Summer Images</h2>
    <div className='summerImage_container'>
        <div className='summerImage-main'>
            <img src={summer_image1} alt=''/>
        </div>

        <div className='summerImage-main'>
            <img src={summer_image2} alt=''/>
        </div>

        <div className='summerImage-main'>
            <img src={summer_image3} alt=''/>
        </div>

        <div className='summerImage-main'>
            <img src={summer_image4} alt=''/>
        </div>

        <div className='summerImage-main'>
            <img src={summer_image5} alt=''/>
        </div>

        <div className='summerImage-main'>
            <img src={summer_image8} alt=''/>
        </div>
        
    </div>
    <Link to='/news'>Back</Link>
</div>
<Footer/>
</>
  )
}

export default SummerImages