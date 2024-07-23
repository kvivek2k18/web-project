import React from 'react'
import team1 from '../images/Team-1.jpg';
import team2 from '../images/Team-2.jpg';
import team3 from '../images/Team-3.jpg';
// import { FaTwitter,FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";
import './Team.css';
const Team = () => {
  return (
    <div className='team_section'>
        <h2>The Team Behind </h2>
        {/* <p>Lets's Meet with Our Ordinary Solidiers</p> */}
        <div className='team_container'>
            <div className='team_info'>
                <img src={team1} alt=''/>
                <h3>Shailesh Jha</h3>
                <h4>President & BoD</h4>
                {/* <p>
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                </p> */}
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
                <img src={team2} alt=''/>
                <h3>Minakshi Jha</h3>
                <h4>Vice President & BoD</h4>
                {/* <p>
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                </p> */}
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
                <img src={team3} alt=''/>
                <h3>Saroj Jha</h3>
                <h4>BoD</h4>
                {/* <p>
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                It is a long established fact that a reader will be distracted by 
                </p> */}
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