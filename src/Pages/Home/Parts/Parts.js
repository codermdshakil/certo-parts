import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../Shared/Spinner';
import SinglePart from './SinglePart/SinglePart';

const Parts = () => {

    const navigate = useNavigate();

    const { data: allParts, isLoading } = useQuery('allparts', () =>
        fetch(`http://localhost:5000/parts`)
            .then(res => res.json())
    )
    
    if (isLoading) {
        return <Spinner />
    }
    

    const handleOrder = id => {
        navigate(`/Order/${id}`)
    }

    return (
        <section>
            <div className=' py-10 md:px-0 px-10 ' id='parts'>
                <h2 className='text-3xl text-center font-bold'>OUR <span className='font-bold text-3xl text-primary'>PARTS</span></h2>
                <h3 className='text-secondary text-center'>Featured Part's</h3>    
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10'>
                {
                    allParts?.map(p => <SinglePart
                        key={p._id}
                        p={p}
                        handleOrder={handleOrder}
                    ></SinglePart>)
                }
            </div>
        </section>
    );
};

export default Parts;