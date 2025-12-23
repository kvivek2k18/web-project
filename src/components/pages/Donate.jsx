
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
              We are here to assist you! if you have questions or feedback or need support, please Contribute to MAA.
            </p>
            <p>
              You can donate via Zelle: maithilformithila@gmail.com or You can donate via QR Code
            </p>
             <img src={QR_image} alt=''/>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Donate;
