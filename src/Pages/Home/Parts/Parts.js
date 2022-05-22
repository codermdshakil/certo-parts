import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../../Shared/Navber/Spinner';
import SinglePart from './SinglePart/SinglePart';

const Parts = () => {

    const { data: allParts, isLoading } = useQuery('allparts', () =>
        fetch(`http://localhost:5000/parts`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }

    return (
        <section className='lg:px-20'>
            <h2 className='font-bold text-3xl py-5 '>OUR PRODUCTS</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    allParts.map(p => <SinglePart
                        key={p._id}
                        p={p}
                    ></SinglePart>)
                }
            </div>
        </section>
    );
};

export default Parts;