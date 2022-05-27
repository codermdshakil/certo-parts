import React from 'react';
import loadingSpinner from '../Images/loadingSpinner.gif';


const Spinner = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <img src={loadingSpinner} className="w-20 h-20" alt="spinner" />
        </div>
    );
};

export default Spinner;