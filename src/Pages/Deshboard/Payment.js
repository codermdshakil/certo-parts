import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
const stripePromise = loadStripe('pk_test_51L3jjALU855FwpelvEFF1lhayVnwhsFA8lG47YRGnt8h1WhZqDUbhAEpDmfRi5joDwupldpEPvPfFTj4938Nzeq300XnaNjGkB');


const Payment = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const { data: singleOrder, isLoading } = useQuery('myOrders', () =>
        fetch(`https://secret-reaches-23415.herokuapp.com/orders/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('accessToken')
                    signOut(auth);
                    return navigate('/');
                }
                return res.json()
            })
    );

    if (isLoading) {
        return <Spinner />
    }

    const { productName, productPrice, orderQuantity, userName, productImg, email, address, phone, productDes } = singleOrder;

    return (
        <div>
            <div class="card md:w-1/2 w-5/6 my-10 mx-auto   bg-base-100 shadow-xl">
                <div class="card-body">
                    <img src={productImg} className="w-5/6 mx-auto p-3 mb-4" alt="ProductImg" />
                    <p className='text-xl  font-bold text-indigo-700'>Hello!, <span className='font-bold text-green-500'>{userName}</span></p>
                    <h2 class="card-title">Pay For <span className='text-primary'>{productName}</span></h2>
                    <h3 className='text-lg font-medium'>Product Price : <span className='text-yellow-500 font-bold'>${productPrice}</span></h3>
                    <h4 className='text-lg font-medium'>Your orderd Products: <span className='font-bold'>{orderQuantity}</span></h4>
                    <h4 className='text-lg font-medium'>Your Phone: <span className='text-teal-500'>{phone}</span></h4>
                    <h3 className='text-lg font-medium'>Your Email : <span className='text-green-500'>{email}</span> </h3>
                    <h3 className='text-lg font-medium'>Your Address : <span className='text-cyan-600'>{address}</span> </h3>
                    <p className='text-gray-600'>{productDes}</p>
                </div>
            </div>
            <div class="card  md:w-1/2 w-5/6 my-10 mx-auto flex-shrink-0  shadow-2xl bg-base-100">
                <h3 className='text-xl  px-8 text-indigo-700 font-bold'>Payment Information</h3>
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm singleOrder={singleOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;