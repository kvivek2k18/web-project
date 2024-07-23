
// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import img from '../images/profile_pic.jpg'
// import img1 from '../images/img-1.png';
// import './Donate.css';

// const testimonials = [
//       {
//             urls: img,
//             quote: "This is the best service I have ever used.",
//             author: "John Doe",
//             profession: "Web Developer",
//       },
//       {
//             urls: img1,
//             quote: "Absolutely fantastic! Highly recommended.",
//             author: "Jane Smith",
//             profession: "Photo Grapher",
//       },
//       {
//             urls: img,
//             quote: "A wonderful experience from start to finish.",
//             author: "Sam Wilson",
//             profession: "Teacher",
//       },
//       {
//             urls: img1,
//             quote: "Absolutely fantastic! Highly recommended.",
//             author: "Jane Smith",
//             profession: "Photo Grapher",
//       },
//       {
//             urls: img1,
//             quote: "Absolutely fantastic! Highly recommended.",
//             author: "Jane Smith",
//             profession: "Photo Grapher",
//       },
// ];

// const Donate = () => {
//       const [currentIndex, setCurrentIndex] = useState(0);

//       useEffect(() => {
//             const interval = setInterval(() => {
//                   setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//             }, 5000); // Change slide every 5 seconds

//             return () => clearInterval(interval); // Clear interval on component unmount
//       }, []);

//       const nextSlide = () => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//       };

//       const prevSlide = () => {
//             setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//       };

//       const selectSlide = (index) => {
//             setCurrentIndex(index);
//       };

//       return (
//             <div className="testimonial-slider">
//                   <h2>DONAT PEPOLE SAYS</h2>
//                   <h4>Trusted By Thousands Of People And Nonprofits</h4>
//                   <div className='testimonial-container'>
//                         <div className="testimonial-content">
//                               <img src={testimonials[currentIndex].urls} />
//                               <p>{testimonials[currentIndex].quote}</p>
//                               <h4>{testimonials[currentIndex].author}</h4>
//                               <p>{testimonials[currentIndex].profession}</p>
//                         </div>
//                         <div className="testimonial-controls">
//                               <button onClick={prevSlide} className="arrow left-arrow"><FaArrowLeft /></button>
//                               <button onClick={nextSlide} className="arrow right-arrow"><FaArrowRight /></button>
//                         </div>
//                         <div className="testimonial-dots">
//                               {testimonials.map((_, index) => (
//                                     <span
//                                           key={index}
//                                           className={`dot ${index === currentIndex ? 'active' : ''}`}
//                                           onClick={() => selectSlide(index)}
//                                     ></span>
//                               ))}
//                         </div>
//                   </div>
//             </div>
//       );
// };

// export default Donate