import React from 'react';
import Banner from '../../Pages/Home/Banner/Banner';
import BSummery from './BSummery/BSummery';
import Parts from './Parts/Parts';


const Home = () => {
    return (
        <div>
            <div className='md:px-20'>
                <Banner />
                <Parts />
            </div>
            <div>
                <BSummery />
            </div>
        </div>
    );
};

export default Home;