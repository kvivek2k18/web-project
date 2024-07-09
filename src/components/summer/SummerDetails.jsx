import React from 'react'
import { Link } from 'react-router-dom';
import './SummerDetails.css';
import summer_img1 from '../summer/summerImage/img-1.jpg';
import summer_img2 from '../summer/summerImage/img-2.jpg';
import summer_img3 from '../summer/summerImage/img-3.jpg';
import Footer from '../Footer';

const SummerDetails = () => {
  return (
    <>
    <div className='babyshowers_details'>
        <div className='babyshowers_container'>
            <h3>Summer Details</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='babyshowers_main'>
                <span>Date: 25 May 2024</span>
                <span>Time: 5 PM</span>
                <div className='babyshowers_img'>
                    <img src={summer_img1} alt=''/>
                </div>

                <div className='babyshowers_img'>
                    <img src={summer_img2} alt=''/>
                </div>

                <div className='babyshowers_img'>
                    <img src={summer_img3} alt=''/>
                </div>
            </div>
            <Link to='/news'>Back</Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default SummerDetails