import React from 'react'
import { Link } from 'react-router-dom'
import picnic_image1 from '../piknic/picknicImage/img-1.jpg';
import picnic_image2 from '../piknic/picknicImage/img-2.jpg';
import picnic_image3 from '../piknic/picknicImage/img-3.jpg';
import picnic_image4 from '../piknic/picknicImage/img-4.jpg';
import picnic_image5 from '../piknic/picknicImage/img-5.jpg';
import picnic_image6 from '../piknic/picknicImage/img-6.jpg';
import picnic_image7 from '../piknic/picknicImage/img-7.jpg';
import picnic_image8 from '../piknic/picknicImage/img-8.jpg';
import picnic_image9 from '../piknic/picknicImage/img-9.jpg';
import './BirthdaysImages.css';

const BirthdaysImages = () => {
  return (
    <div className='birthdays_Images'>
    <h2> Picknic Images</h2>
    <div className='birthdaysImage_container'>
        <div className='birthdaysImage-main'>
            <img src={picnic_image1} alt=''/>
        </div>

        <div className='birthdaysImage-main'>
            <img src={picnic_image2} alt=''/>
        </div>

        <div className='birthdaysImage-main'>
            <img src={picnic_image3} alt=''/>
        </div>

        <div className='birthdaysImage-main'>
            <img src={picnic_image4} alt=''/>
        </div>

        <div className='birthdaysImage-main'>
            <img src={picnic_image5} alt=''/>
        </div>

        <div className='birthdaysImage-main'>
            <img src={picnic_image6} alt=''/>
        </div>

        <div className='birthdaysImage-main'>
            <img src={picnic_image7} alt=''/>
        </div>

        <div className='birthdaysImage-main'>
            <img src={picnic_image8} alt=''/>
        </div>

        <div className='birthdaysImage-main'>
            <img src={picnic_image9} alt=''/>
        </div>
        
    </div>
    <Link to='/news'>Back</Link>
</div>
  )
}

export default BirthdaysImages