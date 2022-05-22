import React from 'react';

const SinglePart = ({ p }) => {
    const { name, img, des, minQuantity, availableQuantity } = p;

    return (
        <div className='border-1 rounded-lg shadow-lg border-slate-400 '>
            <div className='p-7'>
                <img src={img} className="w-full mx-auto" alt="parts_image" />
            </div>
            <div className='p-4'>
                <h2 className='text-3xl'>{name}</h2>
                <h3>{minQuantity}</h3>
                <h3>{availableQuantity}</h3>
                <p>{des}</p>
                <button className='btn w-full'>Buy Now</button>
            </div>
        </div>
    );
};

export default SinglePart;