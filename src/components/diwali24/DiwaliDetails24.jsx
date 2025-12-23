import React from 'react'
import { Link } from 'react-router-dom'
import diwali_img1 from '../diwali24/diwaliImages/Img-1.jpg';
import diwali_img2 from '../diwali24/diwaliImages/Img-2.jpg';
import diwali_img3 from '../diwali24/diwaliImages/Img-3.jpg';
import diwali_img4 from '../diwali24/diwaliImages/Img-4.jpg';
import diwali_img5 from '../diwali24/diwaliImages/img-5.jpg';
import diwali_img6 from '../diwali24/diwaliImages/img-6.jpg';
import diwali_img7 from '../diwali24/diwaliImages/Img-7.jpg';
import diwali_img8 from '../diwali24/diwaliImages/Img-8.jpg';
import './DiwaliDetails24.css';
import Footer from '../Footer';

const DiwaliDetails24 = () => {
  return (
    <>
    <div className='diwali_details'>
        <div className='diwali_container'>
            <h3>Diwali Details 2024</h3>
            <p>
           The first Diwali party hosted by MAA was celebrated with all fellow Maithils on October 26th. 
           MAA is deeply grateful to each and every one of you for making the party such a success and a memorable occasion. 
           The evening was filled with fantastic performances,
           Maithili Naatak, delicious food, and, best of all, quality time spent together. MAA wishes everyone a very happy Diwali!
            </p>
            <div className='diwali_main'>
                <span>Date: 26 Oct 2024</span>
                <div className='diwali_img'>
                    <img src={diwali_img1} alt=''/>
                </div>

                <div className='diwali_img'>
                    <img src={diwali_img2} alt=''/>
                </div>

                <div className='diwali_img'>
                    <img src={diwali_img3} alt=''/>
                </div>

                 <div className='diwali_img'>
                    <img src={diwali_img4} alt=''/>
                </div>

                 <div className='diwali_img'>
                    <img src={diwali_img5} alt=''/>
                </div>

                 <div className='diwali_img'>
                    <img src={diwali_img6} alt=''/>
                </div>

                 <div className='diwali_img'>
                    <img src={diwali_img7} alt=''/>
                </div>

                 <div className='diwali_img'>
                    <img src={diwali_img8} alt=''/>
                </div>

                  <div className='diwali_img'>
                    <img src={diwali_img4} alt=''/>
                </div>
            </div>
            <Link to='/news'>Back</Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default DiwaliDetails24