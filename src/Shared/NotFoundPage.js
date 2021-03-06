import React from 'react';
import notFOund from '../Images/404.gif';

const NotFoundPage = () => {
    return (
        <div className='flex items-center justify-center h-screen'
            data-aos="fade-down"
            data-aos-duration="1000"
        >
            <img src={notFOund} className="w-1/2 mx-auto " alt="404_page" />
        </div>
    );
};

export default NotFoundPage;