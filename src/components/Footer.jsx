import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import logo from './images/Mithila_logo.jpeg';
const Footer = () => {
  return (
    <div class="footer_section">
      <div class="footer_container">
        <div className='footer_main'>
          <Link to="/">
            <img  className='footer_logo' src={logo} alt='Not_found' />
          </Link>
          <div className='footer_menu'>
            <h2>Useful Links</h2>
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/news'>Events</Link></li>
              <li><Link to='/contact us'>Contact Us</Link></li>
              <li><Link to='/our Mission'>Our Missison</Link></li>
              {/* <li><Link to='/donate'>Donate</Link></li> */}
            </ul>
          </div>

          <div className='footer_menu'>
            <h2>News</h2>
            <ul>
              <li><p>online store with </p></li>
              <li><p>online store with </p></li>
              <li><p>online store with </p></li>
              <li><p>online store with </p></li>
            </ul>
          </div>

          <div className='footer_menu'>
            <h2>Contacts</h2>
            <ul>
              <li><p>online store with lots of cool and</p></li>
              <li><FaLocationDot /> <span>28 Street, New York City, USA</span> </li>
              <li><MdAddIcCall /> <span>+000123456789</span></li>
              <li><MdEmail /> <span>Sadakat@gamil.com</span></li>
            </ul>
          </div>

          <div className='social'>
            <Link to='https://www.instagram.com/' className='icon-color'><FaInstagram /></Link>
            <Link to='https://www.facebook.com/friends/'><FaFacebook /></Link>
            <Link to='https://www.youtube.com/' className='icon-color'> <FaYoutube /></Link>
          </div>

          {/* <div class="input-areas">
            <input
              className='input-field'
              type="email"
              name="newsletter_email"
              id="newsletter_email"
              placeholder="Enter Your Email"
            />
            <button>Subscribe</button>
          </div> */}
        </div>
      </div>

      <div class="info">
        <div class="legal">
          <Link to='/'>Terms & Conditions</Link><Link to='/'>Privacy Policy</Link>
        </div>
        <div class="copyright">2021 Copyright &copy; Sean B</div>
      </div>

    </div>
  )
}

export default Footer