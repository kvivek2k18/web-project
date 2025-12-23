import React from 'react';
import Spuja_img from '../saraswatiPuja/images/img-10.jpg'
import camp_img from '../campaingns/campaingnsImage/img-5.jpg';
import piknic_img from '../piknic/picknicImage/img-1.jpg';
import summer_img from '../summer/summerImage/img-6.jpg';
import diwali_img from '../diwali/diwaliImages/Img-1.jpg';
import yoga_img from '../yoga/yogaImages/img-5.jpg';
import speechCompetion_img from '../SpeechCompetition/SpeechCompetitionImage/img-1.jpg';
import mission_img from '../MissionPeak/MissionPeakImages/Hiking8.jpg';
import wildFire_img from '../WildFire/wildFireImage/Img-4.jpg';
import sacred_img from '../Sacred/SacredImages/Img-5.jpg';
import cele_img from '../Celebrities/celebritiesImages/Img-2.jpg';
import diwali_img24 from '../diwali24/diwaliImages/img-6.jpg';
import './News.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
const News = () => {
  return (
    <>
      <div className='news_section'>
        <h2>Past Events</h2>
        <h3>Past Events Organized by MAA</h3>
        <div className='container'>

          <div className='features'>
            <h1>Blanket donation by MAA to Sacred Hearts</h1>
            <p>
              Winter can be especially hard for those without adequate shelter. MAA hosted a Blanket Drive last weekend to help keep everyone warm and safe. Thank you all the volunteers for the support.
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date : 13 December 2025</span>
            </div>
            <img src={sacred_img} alt='' />
            <div className='features_btn'>
              <Link to='/SacredDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/SacredImage' className='donate'>MORE IMAGES</Link>
            </div>
          </div>


         <div className='features'>
            <h1>Diwali 2025</h1>
            <p>
             Another fantastic and memorable Diwali Party hosted by MAA! MAA would like to extend its 
             heartfelt gratitude and thanks to everyone who participated. From the Maithili Naatak and the kids’ 
             performance on fire safety to the wonderful singing, dancing, and many other memorable acts, 
             it was the perfect evening to celebrate the festival of lights and spend time with loved ones and our community. 
             Thank you all once again for making the event a great success!
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 18 October 2025</span>
            </div>
            <img src={diwali_img} alt='' />
            <div className='features_btn'>
              <Link to='/diwaliDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/diwaliImages' className='donate'>MORE IMAGES</Link>
            </div>
          </div>

          <div className='features'>
            <h1>Speech Competition</h1>
            <p>
              What an incredible day it was at GURUKUL UTSAV! 
              This year marked a special milestone — for the first time ever, MAA proudly hosted the Maithili Speaking Competition! Our heartfelt gratitude goes to all the amazing kids who stepped up with such dedication, confidence, and spirit. You truly made us proud! 
              A huge shout-out to the parents for their constant encouragement and support. Your involvement made all the difference. 🙏
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 9 August 2025 </span>
            </div>
            <img src={speechCompetion_img} alt='' />
            <div className='features_btn'>
              <Link to='/SpeechCompetitionDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/SpeechCompetitionImage' className='donate'>MORE IMAGES</Link>
            </div>
          </div>


          <div className='features'>
            <h1>Maa Foundation Day</h1>
            <p>
              MAA proudly celebrated its first year of existence. 
              We are grateful to all the continuous members and new members who joined us. 
              We also missed all the members who could not join us. We express our heartfelt 
              gratitude to all members for their unwavering support, encouragement, and non-biased feedback. 
              We are committed to preserving our culture and creating a platform for the younger generation. 
              We kindly request your continued support. Jai MAA, Jai MAITHIL, JAI MITHILA.🙏🙏🙏
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 26 April 2025</span>
            </div>
            <img src={camp_img} alt='' />
            <div className='features_btn'>
              <Link to='/campaingnsDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/campaingnsImages' className='donate'>MORE IMAGES</Link>
            </div>
          </div>


          <div className='features'>
            <h1>Saraswati Puja 2025</h1>
            <p>
             MAA hosted its first grand and marvelous Saraswati Pooja on February 2nd. The pooja was conducted entirely by children, who fasted, chanted all the mantras, and performed the rituals with devotion and precision. It was a deeply enriching experience for them, as they had the opportunity to witness and engage with our Hindu culture firsthand.
              This event would not have been possible without our dedicated volunteers, and the best part was that the majority of them were children. What a wonderful way to honor Maa Saraswati! A heartfelt appreciation goes out to all the volunteers who participated in prasad preparation (buniya), decoration, organizing children's activities (kite flying and the drawing competition), and much more. 
              Thank you to each and every one of you for joining us and making this event a grand success!
            
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 2 Febuary 2025</span>
            </div>
            <img src={Spuja_img} alt='' />
            <div className='features_btn'>
              <Link to='/spujaDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/spujaImages' className='donate'>MORE IMAGES</Link>
            </div>
          </div>


          <div className='features'>
            <h1>LA  Wild Fire Victims donation drive</h1>
            <p>
              It gives us immense pleasure to share that on the occasion of Makar Sankranti, 
              the Maithil Association of America (MAA) has donated four large boxes of feminine 
              hygiene items for the Los Angeles fire victims through Martha’s Kitchen. 
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 14 January 2025 </span>
            </div>
            <img src={wildFire_img} alt='' />
            <div className='features_btn'>
              <Link to='/WildFireDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/WildFireImage' className='donate'>MORE IMAGES</Link>
            </div>
          </div>

          <div className='features'>
            <h1>Diwali 2024</h1>
            <p>
             The first Diwali party hosted by MAA was celebrated with all fellow Maithils on October 26th.
              MAA is deeply grateful to each and every one of you for making the party such a success and a memorable occasion. 
              The evening was filled with fantastic performances, 
             Maithili Naatak, delicious food, and, best of all, quality time spent together. MAA wishes everyone a very happy Diwali!
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 26 October 2024</span>
            </div>
            <img src={diwali_img24} alt='' />
            <div className='features_btn'>
              <Link to='/diwaliDetails24' className='readmore'>SHOW DETAILS</Link>
              <Link to='/diwaliImages24' className='donate'>MORE IMAGES</Link>
            </div>
          </div>

            <div className='features'>
            <h1>Summer Cherry Picking</h1>
            <p>
              Cherry picking in the summer is a delightful activity that combines the joy of being outdoors with the satisfaction of harvesting your own fresh fruit. 
              This seasonal event typically takes place in cherry orchards and is popular among families, friends, and fruit enthusiasts.
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 18 June 2024 </span>
            </div>
            <img src={summer_img} alt='' />
            <div className='features_btn'>
              <Link to='/summercampDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/summercampImages' className='donate'>MORE IMAGES</Link>
            </div>
          </div>


          <div className='features'>
            <h1>Meet & Greet with Kavi Shambhu Shikhar</h1>
            <p>
              MAA, successfully hosted celebrities Kavi Shambhu Shikhar Ji and Kavi Arun Gemini Ji in California during their US trip.
               It was an extremely enjoyable and enlightening experience to hear their perspectives on the US lifestyle, 
               delivered in their charismatic poetic style. 
              The evening was well spent with talented artists from India, fostering unity among all Maithils.
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 29 May 2024</span>
            </div>
            <img src={cele_img} alt='' />
            <div className='features_btn'>
              <Link to='/CelebritiesDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/CelebritiesImages' className='donate'>MORE IMAGES</Link>
            </div>
          </div>


          <div className='features'>
            <h1>Mission Peak</h1>
            <p>
              Believing, living, and promoting "Health is Wealth.
              " First hiking session organized and led by MAA health enthusiasts. Mission Peak hike accomplished. Well done, everyone!
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 19 May 2024</span>
            </div>
            <img src={mission_img} alt='' />
            <div className='features_btn'>
              <Link to='/MissionPeakDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/MissionPeakImage' className='donate'>MORE IMAGES</Link>
            </div>
          </div>



           <div className='features'>
            <h1>Yoga</h1>
            <p>
              First Yoga session organized by MAA and lead by MAA members as part of health initiative.
            </p>
            <div className='plan'>
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 14 May 2024</span>
            </div>
            <img src={yoga_img} alt='' />
            <div className='features_btn'>
              <Link to='/yogaDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/yogaImages' className='donate'>MORE IMAGES</Link>
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
              <span className='raised'>Place: California, USA</span>
              <span className='goal'>Date: 12 May 2024</span>
            </div>
            <img src={piknic_img} alt='' />
            <div className='features_btn'>
              <Link to='/picknicDetails' className='readmore'>SHOW DETAILS</Link>
              <Link to='/picknicImages' className='donate'>MORE IMAGES</Link>
            </div>
          </div>


          


           

        
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default News