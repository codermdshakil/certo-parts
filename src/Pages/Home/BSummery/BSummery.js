import React from 'react';
import './BSummery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faBook ,faUsers , faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const BSummery = () => {
    return (
        <div>
            <div className='md:w-1/2 w-10/12 mx-auto text-center mt-10'>
                <h1 className='text-4xl font-bold'>Millions <span className='font-bold text-primary'> Business</span> Treat Us</h1>
                <h3 className='text-lg text-secondary'>Try to understand user Expectation</h3>
            </div>
            <div className='bSummery-container mt-10'>
                <div className='bSummery-Content   grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 md:px-20'>
                    <div className='mx-auto  mb-10  text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5 text-secondary' icon={faFlag}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>72</h1>
                        <h3 className='text-2xl font-bold  mb-3'>Countries</h3>
                    </div>
                    <div className='mx-auto mb-10  text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5  text-secondary' icon={faBook}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>523+</h1>
                        <h3 className='text-2xl font-bold mb-3'>Complete Project's</h3>
                    </div>
                    <div className='mx-auto mb-10  text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5  text-secondary' icon={faUsers}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>273+</h1>
                        <h3 className='text-2xl font-bold mb-3'>Happy Clients</h3>
                    </div>
                    <div className='mx-auto  mb-10 text-center'>
                        <FontAwesomeIcon className='text-6xl mb-5  text-secondary' icon={faThumbsUp}></FontAwesomeIcon>
                        <h1 className='text-4xl text-primary font-bold'>432+</h1>
                        <h3 className='text-2xl font-bold mb-3'>Feedbacks</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BSummery;