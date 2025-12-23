
import './Donate.css';
import Footer from '../Footer';
import QR_image from '../pages/Images/QR-CODE.jpg';
const Donate = () => {
  return (
    <>
      <div className='donate_container'>
          <div className='donate'>
            <h2>Contribute to MAA</h2>
            <p>
              Please Contribute to MAA.
            </p>
            <p>
              You can donate via Zelle: maithilformithila@gmail.com or also You can donate via Zelle QR Code
            </p>
             <img src={QR_image} alt=''/>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Donate;
