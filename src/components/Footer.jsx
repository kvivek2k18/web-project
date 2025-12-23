import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import { MdAddIcCall } from "react-icons/md";
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
              <li><Link to='/about'>About Us</Link></li>
              {/* <li><Link to='/news'>Events</Link></li> */}
              <li><Link to='/our Mission'>Our Missison</Link></li>
              <li><Link to='/contact us'>Contact Us</Link></li>
              <li><Link to='/donate'>Donate Us</Link></li>
            </ul>
          </div>

          {/* <div className='footer_menu'>
            <h2>News</h2>
            <ul>
              <li><p>online store with </p></li>
              <li><p>online store with </p></li>
              <li><p>online store with </p></li>
              <li><p>online store with </p></li>
            </ul>
          </div> */}

          <div className='footer_menu'>
            <h2>Contacts</h2>
            <ul>
              <li><FaLocationDot /> <span>35783 Cabral Dr Fremont, CA, USA</span> </li>
              {/* <li><MdAddIcCall /> <span>+000123456789</span></li> */}
              <li><MdEmail /> <span>contributemaa@maithilusa.org</span></li>
              <li><MdEmail /> <span>maithilmaithili11@gmail.com</span></li>
            </ul>
          </div>

        </div>
        <div className='social'>
            {/* <Link to='https://www.instagram.com/' className='icon-color'><FaInstagram /></Link> */}
            <Link to='https://www.facebook.com/profile.php?id=61559439638204'><FaFacebook /></Link>
            {/* <Link to='https://www.youtube.com/' className='icon-color'> <FaYoutube /></Link> */}
          </div>
      </div>

      <div class="info">
        {/* <div class="legal">
          <Link to='/'>Terms & Conditions</Link><Link to='/'>Privacy Policy</Link>
        </div> */}
        {/* <div class="copyright">2024 Copyright &copy; Sean B</div> */}
      </div>

    </div>
  )
}

export default Footer