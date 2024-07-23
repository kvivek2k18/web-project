import React, { useRef } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import Footer from '../Footer';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dhn3p7d', 'template_kfh4uv5', form.current, {
        publicKey: 'ydmylEA6Myx7EDLCP',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert("sucessfully sent");
          e.target.reset();
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
              We are here to assist you! if you have questions or feedback or need support, please contact us using any of the methods below.
            </p>
            <p>
              1. Please email us at: contributemaa@maithilusa.org
            </p>
            <p>
              2. You can reach us at: maithilmaithili11@gmail.com
            </p>
            <p>
              3. You can send us mail at the following address: <p> 35783 Cabral Dr Fremont, USA</p>
            </p>
            <p>
              4. Please feel free to use the form below to directly message us. Please fill out all the fields, and we will respond to Your
              inquiry as soon as possible.
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
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13084048.037443183!2d-129.9353941707524!3d36.810188062694316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1721708858687!5m2!1sen!2sin"
            style={{border: 0}} 
            title="Google Maps: California, USA"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <p className='disclaimer_text'>We value your feedback and suggestions. Please share your thoughts with us to help us improve our services.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact;
