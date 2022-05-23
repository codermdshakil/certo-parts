import React from 'react';
import './BSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckDollar ,faScrewdriverWrench ,faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const BSummery = () => {
    return (
        <div id='bsummery'>
            <div className='md:w-1/2 w-10/12 mx-auto text-center mt-10'>
                <h1 className='text-4xl font-bold'>Millions <span className='font-bold text-primary'> Business</span> Treat Us</h1>
                <h3 className='text-lg text-secondary'>Try to understand user Expectation</h3>
            </div>
            <div className='bSummery-container mt-10'>
                <div className='bSummery-Content   grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 md:px-20'>
                    <div className='mx-auto  mb-10  text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5 text-secondary' icon={faUsers}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>100+</h1>
                        <h3 className='text-2xl font-semibold  mb-3'>Customers</h3>
                    </div>
                    <div className='mx-auto mb-10  text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5  text-secondary' icon={faMoneyCheckDollar}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>120M+</h1>
                        <h3 className='text-2xl font-semibold mb-3'> Annual Revenue</h3>
                    </div>
                    <div className='mx-auto mb-10  text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5  text-secondary' icon={faThumbsUp}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>35k+</h1>
                        <h3 className='text-2xl font-semibold mb-3'>Reviews</h3>
                    </div>
                    <div className='mx-auto  mb-10 text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5  text-secondary' icon={faScrewdriverWrench}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>500+</h1>
                        <h3 className='text-2xl font-semibold mb-3'>Tools</h3>
                    </div>
                </div>
            </div>
            <div className=' w-5/6 mx-auto'>
                <div className=" grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1   p-4   mt-[-120px] rounded-md  summery-content ">
                    <div className='mb-3'>
                       <h2 className='text-2xl font-thin mb-3'>Have any question about us an get any products request?</h2>
                       <h3 className='text-lg text-secondary'>Don't hesilate to contact us.</h3>
                    </div>
                    <div className='flex justify-center items-center'>
                      <button className='btn md:mr-5 mr-1 text-white' >Request for Quote</button>
                      <button className='btn btn-secondary text-white'> <a href="home#contact">Contact Us</a> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BSummery;