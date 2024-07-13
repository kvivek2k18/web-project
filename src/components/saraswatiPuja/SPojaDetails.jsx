import React from 'react'
import simage_img1 from '../saraswatiPuja/images/img-1.jpg';
import simage_img2 from '../saraswatiPuja/images/img-2.jpg';
import simage_img3 from '../saraswatiPuja/images/img-3.jpg';
import { Link } from 'react-router-dom';
import './SPojaDetails.css';
import Footer from '../Footer';
const SPojaDetails = () => {
  return (
    <>
    <div className='spoja_details'>
        <div className='spoja_container'>
            <h3>Saraswati Puja Details</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='spoja_main'>
                <span>Date: 25 May 2024</span>
                <span>Time: 5 PM</span>
                <div className='spoja_img'>
                    <img src={simage_img1} alt=''/>
                </div>

                <div className='spoja_img'>
                    <img src={simage_img2} alt=''/>
                </div>

                <div className='spoja_img'>
                    <img src={simage_img3} alt=''/>
                </div>
            </div>
            <Link to='/news'>Back</Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default SPojaDetails