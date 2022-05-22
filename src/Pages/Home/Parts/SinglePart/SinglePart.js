import React from 'react';

const SinglePart = ({ p }) => {
    const { name, img, price, des, minQuantity, availableQuantity } = p;

    return (
        <div className='lg:w-full md:w-full w-10/12   mx-auto border-1 rounded-lg hover:shadow shadow-slate-300 mb-10 shadow-lg border-slate-400 '>
            <div className='p-7'>
                <img src={img} className="w-full mx-auto mb-2 hover:scale-105 duration-150" alt="parts_image" />
            </div>
            <div className='p-4'>
                <h2 className='text-3xl font-medium'>{name}</h2>
                <h3 className='text-lg font-semibold'>Price : <span className='text-primary'>${price}</span></h3>
                <h3 className='text-lg font-medium'>Available Quantity : <span className='text-secondary font-bold'>{availableQuantity}</span></h3>
                <h3 className='text-lg font-medium'>Minimum Order Quantity : <span className='font-bold text-accent'>{minQuantity}</span> </h3>
                <p className='mb-3'>{des}</p>
                <button className='btn text-white btn-secondary w-full'>Buy Now</button>
            </div>
        </div>
    );
};

export default SinglePart;