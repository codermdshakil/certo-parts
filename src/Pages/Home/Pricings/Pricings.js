import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../../Shared/Navber/Spinner';
import './Pricing.css';
import Pricing from './Pricing/Pricing';


const Pricings = () => {


    const { data: pricings, isLoading } = useQuery('pricings', () =>
        fetch(`https://agile-springs-22357.herokuapp.com/pricing`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Spinner />
    }


    return (
        <div className='mt-5' id='pricing'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-bold mb-3'> <span className='text-primary'>Pricing</span> and Plans</h2>
                <div className='flex justify-center items-center'>
                    <h3>Choose your plan <span className='font-bold'>Monthly</span> </h3>
                    <div className='ml-3'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='grid gap-x-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    pricings.map(p => <Pricing key={p._id} p={p}></Pricing>)
                }
            </div>
        </div>
    );
};

export default Pricings;