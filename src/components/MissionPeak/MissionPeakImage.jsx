import React from 'react'
import { Link } from 'react-router-dom';
import Mission_image1 from '../MissionPeak/MissionPeakImages/Hiking15.jpg';
import Mission_image2 from '../MissionPeak/MissionPeakImages/Hiking16.jpg';
import Mission_image3 from '../MissionPeak/MissionPeakImages/Hiking10.jpg';
import Mission_image4 from '../MissionPeak/MissionPeakImages/Hiking17.jpg';
import Mission_image5 from '../MissionPeak/MissionPeakImages/Hiking9.jpg';
import Mission_image6 from '../MissionPeak/MissionPeakImages/Hiking8.jpg';
import './MissionPeakImage.css';
import Footer from '../Footer';

const MissionPeakImage = () => {
  return (
    <>
    <div className='mission_Images'>
        <h2>Mission Peak Images</h2>
        <div className='missionImage_container'>
            <div className='missionImage-main'>
                <img src={Mission_image1} alt=''/>
            </div>

            <div className='missionImage-main'>
                <img src={Mission_image2} alt=''/>
            </div>

            <div className='missionImage-main'>
                <img src={Mission_image3} alt=''/>
            </div>

             <div className='missionImage-main'>
                <img src={Mission_image4} alt=''/>
            </div>

             <div className='missionImage-main'>
                <img src={Mission_image5} alt=''/>
            </div>

             <div className='missionImage-main'>
                <img src={Mission_image6} alt=''/>
            </div>

            
        </div>
        <Link to='/news'>Back</Link>
    </div>
    <Footer/>
    </>
  )
}

export default MissionPeakImage