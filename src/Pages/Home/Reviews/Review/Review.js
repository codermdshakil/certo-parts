import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Review.css';


const Review = ({ r }) => {

    const { name, img, address } = r;

    return (
        <article className='p-3 md:w-full w-5/6 mx-auto mb-10' style={{ border: '1px solid gray' }}>
            <div>
                <div className='flex justify-evenly'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="client_picture" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>{name} <span className='check_marks bg-blue-500 text-white p-1 '><FontAwesomeIcon icon={faCheck} className='check_mark' ></FontAwesomeIcon></span> </h2>
                        <h4 className='text-slate-600'>{address}</h4>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Review;