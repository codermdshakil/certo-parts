import React from 'react';
import './BSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faBook, faUsers, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon className='text-6xl mb-5 text-secondary' icon={faFlag}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>72</h1>
                        <h3 className='text-2xl font-semibold  mb-3'>Countries</h3>
                    </div>
                    <div className='mx-auto mb-10  text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5  text-secondary' icon={faBook}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>523+</h1>
                        <h3 className='text-2xl font-semibold mb-3'>Complete Project's</h3>
                    </div>
                    <div className='mx-auto mb-10  text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5  text-secondary' icon={faUsers}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>273+</h1>
                        <h3 className='text-2xl font-semibold mb-3'>Happy Clients</h3>
                    </div>
                    <div className='mx-auto  mb-10 text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5  text-secondary' icon={faThumbsUp}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>432+</h1>
                        <h3 className='text-2xl font-semibold mb-3'>Feedbacks</h3>
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
                      <button className='btn btn-secondary text-white'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BSummery;