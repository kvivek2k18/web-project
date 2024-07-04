import React from 'react';
import Spuja_img from '../saraswatiPuja/images/img-1.jpg'
import camp_img from '../campaingns/campaingnsImage/img-9.jpg';
import piknic_img from '../piknic/picknicImage/img-1.jpg';
import summer_img from '../summer/summerImage/img-6.jpg';
import diwali_img from '../diwali/diwaliImages/diwali_img.jpg';
import yoga_img from '../yoga/yogaImages/img-4.jpg';
import './News.css';
import { Link } from 'react-router-dom';
const News = () => {
  return (
    <div className='news_section'>
       <h2>Past Events</h2>
       <h3>Every Child Deserves The Opportunity To Learn</h3>
      <div className='container'>
        <div className='features'>
          <h1>Saraswati Puja</h1>
          <p>
          Saraswati Puja, also known as Vasant Panchami or Shree Panchami, is a Hindu festival that celebrates Saraswati, 
          the goddess of knowledge, music, art, wisdom, and learning.
          This auspicious day is dedicated to seeking the blessings of Saraswati for success in learning and education.
          </p>
          <div className='plan'>
            <span className='raised'>Place: California</span>
            <span className='goal'>Date And Time: 25 May 2024 At 5:30 PM</span>
          </div>
          <img src={Spuja_img} alt=''/>
          <div className='features_btn'>
            <Link to='/weddingDetails' className='readmore'>SHOW DETAILS</Link>
            <Link to='/weddingImages' className='donate'>MORE IMAGES</Link>
          </div>
        </div>

        <div className='features'>
          <h1>Campaingn & Sports</h1>
          <p>
          Campaigns in the context of sports can refer to a variety of organized efforts aimed at promoting a cause, event, team, or athlete. 
          These campaigns are designed to engage audiences, build support, and drive participation or viewership.
          </p>
          <div className='plan'>
            <span className='raised'>Place: California</span>
            <span className='goal'>Date And Time: 12 April 2024 At 3:20 PM</span>
          </div>
          <img src={camp_img} alt=''/>
          <div className='features_btn'>
            <Link to='/engagementDetails' className='readmore'>SHOW DETAILS</Link>
            <Link to='/engagementImages' className='donate'>MORE IMAGES</Link>
          </div>
        </div>

        <div className='features'>
          <h1>Picnic</h1>
          <p>
          A picnic is a social event that typically involves sharing a meal outdoors. 
          It is a wonderful way to enjoy nature, spend time with family and friends, 
          and take a break from the hustle and bustle of daily life. 
          </p>
          <div className='plan'>
            <span className='raised'>Place: California</span>
            <span className='goal'>Date And Time: 12 june May 2024 At 11:00 AM</span>
          </div>
          <img src={piknic_img} alt=''/>
          <div className='features_btn'>
            <Link to='/birthdaysDetails' className='readmore'>SHOW DETAILS</Link>
            <Link to='/birthdaysImages' className='donate'>MORE IMAGES</Link>
          </div>
        </div>

        <div className='features'>
          <h1>Summer Cherry Picking</h1>
          <p>
          Cherry picking in the summer is a delightful activity that combines the joy of being outdoors with the satisfaction of harvesting your own fresh fruit. 
          This seasonal event typically takes place in cherry orchards and is popular among families, friends, and fruit enthusiasts.
          </p>
          <div className='plan'>
            <span className='raised'>Place: California</span>
            <span className='goal'>Date And Time: 18 June 2024 At 3:00 PM</span>
          </div>
          <img src={summer_img} alt=''/>
          <div className='features_btn'>
            <Link to='/babyshowersDetails' className='readmore'>SHOW DETAILS</Link>
            <Link to='/babyshowersImages' className='donate'>MORE IMAGES</Link>
          </div>
        </div>

        <div className='features'>
          <h1>Diwali</h1>
          <p>
          Diwali, also known as Deepavali, is one of the most significant and widely celebrated Hindu festivals in India and around the world.
          The name "Diwali" is derived from the Sanskrit word "Deepavali," which means "row of lights." 
          </p>
          <div className='plan'>
            <span className='raised'>Place: California</span>
            <span className='goal'>Date And Time: 19 October 2023 At 6:30 PM</span>
          </div>
          <img src={diwali_img} alt=''/>
          <div className='features_btn'>
            <Link to='/diwaliDetails' className='readmore'>SHOW DETAILS</Link>
            <Link to='/diwaliImages' className='donate'>MORE IMAGES</Link>
          </div>
        </div>

        <div className='features'>
          <h1>Yoga</h1>
          <p>
          Yoga is an ancient practice that originated in India over 5,000 years ago. It is a holistic discipline that encompasses physical postures (asanas), breath control (pranayama), meditation (dhyana), and ethical precepts. The word "yoga" is derived from the Sanskrit root "yuj," meaning to join or unite, symbolizing the union of body, mind, and spirit.
          </p>
          <div className='plan'>
            <span className='raised'>Place: California</span>
            <span className='goal'>Date And Time: 4 Jul 2024 At 5:30 AM</span>
          </div>
          <img src={yoga_img} alt=''/>
          <div className='features_btn'>
            <Link to='/yogaDetails' className='readmore'>SHOW DETAILS</Link>
            <Link  to='/yogaImages' className='donate'>MORE IMAGES</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default News