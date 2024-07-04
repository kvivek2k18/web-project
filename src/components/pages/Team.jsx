import React from 'react'
import logo from '../images/profile_pic.jpg';
import { FaTwitter,FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";
import './Team.css';
const Team = () => {
  return (
    <div className='team_section'>
        <h2>The Team Behind Pacifico</h2>
        <p>Lets's Meet with Our Ordinary Solidiers</p>
        <div className='team_container'>
            <div className='team_info'>
                <img src={logo} alt=''/>
                <h3>JONATHAN HADWICK</h3>
                <h4>Head of SEO</h4>
                <p>
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                </p>
            {/* <ul className='team_icon'>
                <li>
                    <a href='#' className='blue_icon'>
                    <FaTwitter />
                    </a>
                </li>

                <li>
                    <a href='#' className='red_icon'>
                    <FaInstagram />
                    </a>
                </li>

                <li>
                    <a href='#' className='blue_icon'>
                    <FaFacebook />
                    </a>
                </li>

                <li>
                    <a href='#' className='red_icon'>
                    <FaYoutube />
                    </a>
                </li>

            </ul> */}
            </div>

            <div className='team_info'>
                <img src={logo} alt=''/>
                <h3>JONATHAN HADWICK</h3>
                <h4>Head of SEO</h4>
                <p>
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                </p>
            {/* <ul className='team_icon'>
            <li>
                    <a href='#' className='blue_icon'>
                    <FaTwitter />
                    </a>
                </li>

                <li>
                    <a href='#' className='red_icon'>
                    <FaInstagram />
                    </a>
                </li>

                <li>
                    <a href='#' className='blue_icon'>
                    <FaFacebook />
                    </a>
                </li>

                <li>
                    <a href='#' className='red_icon'>
                    <FaYoutube />
                    </a>
                </li>

            </ul> */}
            </div>

            <div className='team_info'>
                <img src={logo} alt=''/>
                <h3>JONATHAN HADWICK</h3>
                <h4>Head of SEO</h4>
                <p>
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                </p>
            {/* <ul className='team_icon'>
            <li>
                    <a href='#' className='blue_icon'>
                    <FaTwitter />
                    </a>
                </li>

                <li>
                    <a href='#' className='red_icon'>
                    <FaInstagram />
                    </a>
                </li>

                <li>
                    <a href='#' className='blue_icon'>
                    <FaFacebook />
                    </a>
                </li>

                <li>
                    <a href='#' className='red_icon'>
                    <FaYoutube />
                    </a>
                </li>
                </ul> */}

            </div>

        </div>
    </div>
  )
}

export default Team