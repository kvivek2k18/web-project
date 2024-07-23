import React from 'react';
import './OurValue.css';
import ourValue_img from '../images/Home.jpg';

const OurValue = () => {
  return (
    <div className='about_section'>
        <div className='text_container'>
          <h2 className='about_taital'>Our Value</h2>
          <p className='ourValue_text'>
            The primary values of our oraganization are to serve the community selflessly and maintain transparency. We belive that transparency
            is key to success and endeaver to encourage Maithils across the world to join our mission. Recognizing the young minds are integral
            to our feature, we are commited to actively engaging and involving youth.
          </p>

          <h2 className='about_who'>Who we are</h2>
          <p className='ourValue_text'>
            We are a team of individuals whose motive is :
            <ul>
              <li><p className='ourValue_text'>To unify and connect the global Maithil diaspora, fostering a deep connection to its rich cultural heritage.</p></li>
            </ul>
            
            <ul>
              <li><p className='ourValue_text'>To celebrate Maithil identity and empower Maithil indiduals across generations.</p></li>
            </ul>
            
            <ul>
              <li><p className='ourValue_text'>To serve as a cultural hub for the Maithil community within North America and globally, promoting language, art, traditions, 
              community well-being and fostering strong community bonds through shared experiences and intiatives, and conducting community events
              , festivals, and cultural programs.
            </p></li>
            </ul>
            
            <ul>
              <li><p className='ourValue_text'>To advocate for the interests of the Maithil diaspora within North America, collaborating with governments and relevant institutions</p></li>
            </ul>
           
           <ul>
            <li> <p className='ourValue_text'>To support Maithil businesses and professionals, fostering economic growth and entrepreneurial opportunities within the diaspora.</p></li>
           </ul>
            
            <ul>
              <li><p className='ourValue_text'>To champion social welfare causes, addressing the needs of the community through initiatives prioritizing education, healthcare,
            and other relevant areas.
            </p></li>
            </ul>
          </p>
        </div>
        <div className='image_container'>
          <div className='about_img'>
            <img src={ourValue_img} alt='about_img' />
          </div>
        </div>
    </div>
  )
}

export default OurValue