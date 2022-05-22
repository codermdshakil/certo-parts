import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faBell} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import fbLogo from '../../Images/socialIcons/fb.png';
import insLogo from '../../Images/socialIcons/ins.png';
import twLogo from '../../Images/socialIcons/tw.png';
import inLogo from '../../Images/socialIcons/in.png';
import paymentImg from '../../Images/socialIcons/payment.png';


const Footer = () => {

    const handleNewLetterEmail = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        e.target.reset();
    }

    return (
        <div className='footer-section mt-20 py-12'>
            <div className='md:px-20 px-10'>
                <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
                    <div className=' md:w-full w-11/12'>
                        <h1 className='hero_title mb-1'>Certo <span className='parts_title'>Parts</span>
                        </h1>
                        <p className='text-sm mb-2'>A bicycle also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame.</p>
                        <p> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> <span className='text-sm'>Kapasia, Gazipur, Dhaka</span></p>
                        <p> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <span className='text-sm'>ahmedshakil0512@gmail.com </span></p>
                        <p> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>  <span className='text-sm'>+8801729107200 </span></p>
                    </div>
                    <div className='md:w-full w-11/12'>
                        <h2 className='text-2xl font-bold text-white  mb-2'>Quick Links</h2>
                       <Link to='/'>Banner</Link> <br />
                       <Link to='/parts'>Parts</Link>
                    </div>
                    <div className='md:w-full w-11/12'>
                        <h2 className='text-2xl font-bold text-white mb-2'> Follow Us </h2>
                        <div className='social_mediaIcon flex mt-3 mb-2'>
                            <img src={fbLogo} alt="fb_logo" />
                            <img src={insLogo} alt="instagram_logo" />
                            <img src={twLogo} alt="twitter_logo" />
                            <img src={inLogo} alt="in_logo" />
                        </div>
                        <img src={paymentImg} className="mt-3" alt="paymentImg_logo " />
                    </div>
                    <div className='md:w-full w-11/12'>
                        <h2 className='text-2xl font-bold text-white mb-2'>NewsLetter</h2>
                     <form onSubmit={handleNewLetterEmail}>
                         <input type="text" placeholder='Email' name='email' className='w-full py-3 px-3 rounded-lg' required/>
                         <button  className='btn btn-md subscribe w-full mt-4 text-center mx-auto ring-2 ring-white'>Subscribe Now <FontAwesomeIcon className='ml-2' icon={faBell} /></button>
                     </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;