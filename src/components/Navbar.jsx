import React, { useState } from 'react'
import { Link, NavLink,useNavigate} from 'react-router-dom';
import logo from './images/Mithila_logo.jpeg'
import { FiAlignJustify } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import './Navbar.css';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        navigate(event.target.value);
    };

    return (
        <nav>
            <Link to="/home" className='title'>
                <img className='title' src={logo} alt='Not_found' />
            </Link>
            <Link className='title_text'>MAITHIL ASSOCIATION OF AMERICA</Link>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                {menuOpen ? <MdCancel /> : <FiAlignJustify />}
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About Us</NavLink>
                </li>

                <li>
                    <select className='event' onChange={handleChange}>
                        <option value="/home">Event</option>
                        <option value="/news">Past Event</option>
                        <option value="/upcoming">Upcoming Event</option>
                    </select>
                </li>

                <li>
                    <NavLink to="/our Mission">Our Mission</NavLink>
                </li>


                <li>
                    <NavLink to="/contact us">Contact Us</NavLink>
                </li>

               
                {/* <li>
           <Link to='/donate' className='donate_btn'>
            Donate Now 
            </Link>
           </li> */}
            </ul>

        </nav>
    )
}

export default Navbar