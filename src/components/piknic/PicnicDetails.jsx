import React from 'react'
import picknic_img1 from '../piknic/picknicImage/img-1.jpg'
import picknic_img2 from '../piknic/picknicImage/img-2.jpg'
import picknic_img3 from '../piknic/picknicImage/img-3.jpg'
import { Link } from 'react-router-dom';
import './PicknicDetails.css';
import Footer from '../Footer';

const PicknicDetails = () => {
  return (
    <>
    <div className='picknics_details'>
    <div className='picknics_container'>
        <h3>Picnic Details</h3>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className='picknics_main'>
            <span>Date: 25 May 2024</span>
            <span>Time: 5 PM</span>
            <div className='picknics_img'>
                <img src={picknic_img1} alt=''/>
            </div>

            <div className='picknics_img'>
                <img src={picknic_img2} alt=''/>
            </div>

            <div className='picknics_img'>
                <img src={picknic_img3} alt=''/>
            </div>
        </div>
        <Link to='/news'>Back</Link>
    </div>
</div>
<Footer/>
</>
  )
}

export default PicknicDetails