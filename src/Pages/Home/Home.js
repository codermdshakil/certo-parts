import React from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import Banner from '../../Pages/Home/Banner/Banner';
import BSummery from './BSummery/BSummery';
import ContactUs from './ContactUs/ContactUs';
import Parts from './Parts/Parts';
import Pricings from './Pricings/Pricings';
import Reviews from './Reviews/Reviews';


const Home = () => {
    return (
        <div>
            {
                usePageTitle('Home')
            }
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
            <div>
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;