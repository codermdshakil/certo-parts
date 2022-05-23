import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../../Shared/Spinner';
import Review from './Review/Review';

const Reviews = () => {

    const { data: allReviews, isLoading } = useQuery('reviewsAll', () =>
        fetch(`https://agile-springs-22357.herokuapp.com/reviews`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <div className='mt-24 mb-16 px-10' id='reviews'>
                <h1 className='text-3xl font-bold text-center'>What <span className='font-bold text-primary'> Client's </span>  say about Us</h1>
                <h3 className='text-lg text-center text-secondary'> Clients Reviews({allReviews.length})</h3>
            </div>
            <div className='grid gap-x-5  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-20'>
                {
                    allReviews.map(r => <Review key={r._id} r={r}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;