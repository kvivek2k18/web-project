import React from 'react';
import './CampaingnsDetails.css';
import c_Img1  from'../campaingns/campaingnsImage/img-1.jpg';
import c_Img2  from'../campaingns/campaingnsImage/img-2.jpg';
import c_Img3  from'../campaingns/campaingnsImage/img-3.jpg';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const CampaingnsDetails = () => {
  return (
    <>
    <div className='campaingns_details'>
        <div className='campaingns_container'>
            <h3>Campaingns Details</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='campaingns_main'>
                <span>Date: 25 May 2024</span>
                <span>Time: 5 PM</span>
                <div className='campaingns_img'>
                    <img src={c_Img1} alt=''/>
                </div>

                <div className='campaingns_img'>
                    <img src={c_Img2} alt=''/>
                </div>

                <div className='campaingns_img'>
                    <img src={c_Img3} alt=''/>
                </div>
            </div>
            <Link to='/news'>Back</Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default CampaingnsDetails