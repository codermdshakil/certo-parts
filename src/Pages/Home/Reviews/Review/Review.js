import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLocationDot, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import './Review.css';


const Review = ({ r }) => {

    const { name, img, address, title, des, star } = r;

    return (
        <article className='p-5 border-2 border-white hover:border-2 hover:border-yellow-300 rounded-xl custom_shadow md:w-full w-5/6 mx-auto mb-10' >
            <div>
                <div className='flex justify-evenly'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="client_picture" />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center  items-center'>
                            <div>
                                <h2 className='text-lg font-semibold'>{name}</h2>
                            </div>
                            <div>
                                <FontAwesomeIcon className='check_icon' icon={faCheck} />
                            </div>
                        </div>
                        <h4 className='text-slate-600'>{address} <FontAwesomeIcon className='text-green-600' icon={ faLocationDot }></FontAwesomeIcon> </h4>
                    </div>
                </div>
                <h2 className=' mt-4 text-2xl'>{title}</h2>
                <div>
                    <div className='flex my-2'>
                        <div>
                            <FontAwesomeIcon className='star text-xl' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star text-xl' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star text-xl' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='star text-xl' icon={faStar}></FontAwesomeIcon>
                            {star > 4.5 ?  <FontAwesomeIcon className='star text-xl mr-1' icon={faStar}></FontAwesomeIcon>:<FontAwesomeIcon className='star text-xl mr-1'  icon={faStarHalfStroke}></FontAwesomeIcon>}
                        </div>
                        <div>
                            <h4>{star}</h4>
                        </div>
                    </div>
                </div>
                <p>{des}</p>
            </div>
        </article>
    );
};

export default Review;