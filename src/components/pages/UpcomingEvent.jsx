import React from 'react'
import './UpcomingEvent.css';
import upcoming_img from '../images/upcoming_img.jpg';
import Footer from '../Footer';

const UpcomingEvent = () => {
    return (
        <>
        <div className="notification">
            <div className='notification_container'>
                <div className='notification_main'>
                    <div className="notification-image">
                        <img src={upcoming_img} alt="Upcoming Event" />
                    </div>
                    <h2>Upcoming Event</h2>
                    <p>Join us for an exciting event on [Event Date] at [Event Time]. For more details, contact us at [Contact Number].</p>
                </div>

                <div className='notification_main'>
                    <div className="notification-image">
                        <img src={upcoming_img} alt="Upcoming Event" />
                    </div>
                    <h2>Upcoming Event</h2>
                    <p>Join us for an exciting event on [Event Date] at [Event Time]. For more details, contact us at [Contact Number].</p>
                </div>

                <div className='notification_main'>
                    <div className="notification-image">
                        <img src={upcoming_img} alt="Upcoming Event" />
                    </div>
                    <h2>Upcoming Event</h2>
                    <p>Join us for an exciting event on [Event Date] at [Event Time]. For more details, contact us at [Contact Number].</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default UpcomingEvent