import React from 'react'
import { Link } from 'react-router-dom';
import './SummerDetails.css';
import summer_img1 from '../summer/summerImage/img-1.jpg';
import summer_img2 from '../summer/summerImage/img-2.jpg';
import summer_img3 from '../summer/summerImage/img-3.jpg';
import summer_img4 from '../summer/summerImage/img-4.jpg';
import summer_img5 from '../summer/summerImage/img-5.jpg';
import summer_img6 from '../summer/summerImage/img-6.jpg';
import Footer from '../Footer';

const SummerDetails = () => {
  return (
    <>
    <div className='summer_details'>
        <div className='summer_container'>
            <h3>Summer Details</h3>
            <p>
              Cherry picking in the summer is a delightful activity that combines the joy of being outdoors with the satisfaction of harvesting your own fresh fruit.
              This seasonal event typically takes place in cherry orchards and is popular among families, friends, and fruit enthusiasts.
            </p>
            <div className='summer_main'>
                <span>Date: 18 June 2024</span>
                <div className='summer_img'>
                    <img src={summer_img1} alt=''/>
                </div>

                <div className='summer_img'>
                    <img src={summer_img2} alt=''/>
                </div>

                <div className='summer_img'>
                    <img src={summer_img3} alt=''/>
                </div>

                <div className='summer_img'>
                    <img src={summer_img4} alt=''/>
                </div>

                <div className='summer_img'>
                    <img src={summer_img5} alt=''/>
                </div>

                <div className='summer_img'>
                    <img src={summer_img6} alt=''/>
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