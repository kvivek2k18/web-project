import React, { useRef } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import Footer from '../Footer';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oo7nm39', 'template_9qwezrf', form.current, {
        publicKey: 'E1dNSPY6-yRIvR3I0',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert("sucessfully sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className='main_container'>
        <div className='contact-box'>
          <div className='left'>
            <h2>Contact Us</h2>
            <p>
              We would love to hear some feedback form you! Feel free to ask a question, drop a review, or just say hello.
              You can use either the form or contact details below.
            </p>
            <form action='' ref={form} onSubmit={sendEmail}>
              <input type='text' name="user_name" className='field' placeholder='Enter Your Name' required />
              <input type='email' name="user_email" className='field' placeholder='Enter Your Email' required />
              <input type='text' name="user_number" className='field' placeholder='Enter Your Phone' required />
              <textarea className='field' name="message" placeholder='Message'></textarea>
              <input type='submit' value='send' className='btn' />
            </form>
          </div>

          <div className='right'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30872341.036273014!2d-144.88585912425174!3d35.42460590897897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1719659577351!5m2!1sen!2sin"
              style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact;

