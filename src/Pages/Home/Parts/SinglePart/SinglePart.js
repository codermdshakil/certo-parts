import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SinglePart = ({ p, handleOrder}) => {
    const { _id ,name, img, price, des, minQuantity, availableQuantity } = p;

    return (
        <article className='lg:w-full md:w-full w-10/12   mx-auto border-1 rounded-lg hover:shadow shadow-slate-300 mb-10 shadow-lg border-slate-400 '>
            <div className='p-7'>
                <img src={img} className="w-full mx-auto mb-2 hover:scale-105 duration-150" alt="parts_image" />
            </div>
            <div className='p-4'>
                <h2 className='text-3xl font-medium'>{name}</h2>
                <h3 className='text-lg font-semibold'>Price : <span className='text-secondary'>${price}</span></h3>
                <h3 className='text-lg font-medium'>Available Quantity : <span className='text-primary font-bold'>{availableQuantity}</span></h3>
                <h3 className='text-lg font-medium'>Minimum Order Quantity : <span className='font-bold text-accent'>{minQuantity}</span> </h3>
                <p className='mb-4  mt-2 text-gray-500 '>{des}</p>
                <button className='btn text-white btn-primary w-full' onClick={() => handleOrder(_id)} >Order Now <FontAwesomeIcon className='ml-2' icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </article>
    );
};

export default SinglePart;