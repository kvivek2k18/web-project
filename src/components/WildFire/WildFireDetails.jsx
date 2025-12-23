import React from 'react'
import { Link } from 'react-router-dom'
import wildfire_img1 from '../WildFire/wildFireImage/Img-4.jpg';
import wildfire_img2 from '../WildFire/wildFireImage/Img-1.jpg';
import wildfire_img3 from '../WildFire/wildFireImage/Img-3.jpg';
import './WildFireDetails.css';
import Footer from '../Footer';

const WildFireDetails = () => {
  return (
    <>
    <div className='wildfire_details'>
        <div className='wildfire_container'>
            <h3>LA  Wild Fire Victims donation drive</h3>
            <p>
            It gives us immense pleasure to share that on the occasion of Makar Sankranti,
             the Maithil Association of America (MAA) has donated four large boxes of feminine hygiene items for the Los Angeles fire victims through Martha’s Kitchen. MAA's president, Shailesh Jha, along with his wife Mrs. Madhuri Jha and their daughters, Pragya and Smriti, worked together to collect and package the supplies. MAA is extremely proud to participate in such a noble cause and hopes to inspire more volunteers to join in the future. JAI MAITHIL. JAI MITHILA. JAI MAA.🙏🙏🙏
            </p>
            <div className='wildfire_main'>
                <span>Date: 14 January 2025</span>

                 <div className='wildfire_img'>
                    <img src={wildfire_img3} alt=''/>
                </div>

                <div className='wildfire_img'>
                    <img src={wildfire_img1} alt=''/>
                </div>

                 <div className='wildfire_img'>
                    <img src={wildfire_img2} alt=''/>
                </div>


                <div className='wildfire_img'>
                    <img src={wildfire_img3} alt=''/>
                </div>

                <div className='wildfire_img'>
                    <img src={wildfire_img2} alt=''/>
                </div>

                <div className='wildfire_img'>
                    <img src={wildfire_img1} alt=''/>
                </div>
            </div>
            <Link to='/news'>Back</Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default WildFireDetails;