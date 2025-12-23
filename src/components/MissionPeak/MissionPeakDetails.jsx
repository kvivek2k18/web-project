import React from 'react'
import { Link } from 'react-router-dom'
import mission_img1 from '../MissionPeak/MissionPeakImages/Hiking1.jpg';
import mission_img2 from '../MissionPeak/MissionPeakImages/Hiking2.jpg';
import mission_img3 from '../MissionPeak/MissionPeakImages/Hiking5.jpg';
import mission_img4 from '../MissionPeak/MissionPeakImages/Hiking10.jpg';
import mission_img5 from '../MissionPeak/MissionPeakImages/Hiking8.jpg';
import mission_img6 from '../MissionPeak/MissionPeakImages/Hiking17.jpg';
import './MissionPeakDetails.css';
import Footer from '../Footer';

const MissionPeakDetails = () => {
  return (
    <>
    <div className='mission_details'>
        <div className='mission_container'>
            <h3>Mission Peak Details</h3>
            <p>
             Believing, living, and promoting "Health is Wealth.
           " First hiking session organized and led by MAA health enthusiasts. Mission Peak hike accomplished. Well done, everyone!
            </p>
            <div className='mission_main'>
                <span>Date: 19 May 2024</span>
                <div className='mission_img'>
                    <img src={mission_img1} alt=''/>
                </div>

                <div className='mission_img'>
                    <img src={mission_img2} alt=''/>
                </div>

                <div className='mission_img'>
                    <img src={mission_img3} alt=''/>
                </div>

                 <div className='mission_img'>
                    <img src={mission_img4} alt=''/>
                </div>

                 <div className='mission_img'>
                    <img src={mission_img5} alt=''/>
                </div>

                 <div className='mission_img'>
                    <img src={mission_img6} alt=''/>
                </div>
            </div>
            <Link to='/news'>Back</Link>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default MissionPeakDetails;