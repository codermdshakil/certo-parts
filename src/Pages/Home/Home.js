import React from 'react';
import Banner from '../../Pages/Home/Banner/Banner';
import BSummery from './BSummery/BSummery';
import Parts from './Parts/Parts';
import Pricings from './Pricings/Pricings';
import Reviews from './Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <div className='md:px-20'>
                <Banner />
                <Parts />
            </div>
            <div className='mb-5'>
                <BSummery />
            </div>
            <div className='md:px-20'>
                <Reviews />
                <Pricings />
            </div>
        </div>
    );
};

export default Home;