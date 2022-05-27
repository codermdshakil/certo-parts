import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckOutForm = ({ singleOrder }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [cardSuccess, setCardSuccess] = useState('');
    const [tranjectionId, settranjectionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');


    


    const { productPrice, userName, email  } = singleOrder;

    useEffect(() => {

        fetch('https://secret-reaches-23415.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ productPrice })
        })
            .then(res => res.json())
            .then(data => {

                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
                console.log(data, 'from backend')
            })

    }, [productPrice])

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

     

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })


        setCardError(error?.message || '')
        setCardSuccess('')

        // confirm card payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );


        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('');
            settranjectionId(paymentIntent?.id)
            console.log(paymentIntent, 'paymentIntent')
            setCardSuccess('Congrats! Your payment is Complete.')
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm  mt-3 bg-green-500 border-0 text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 mt-3'>{cardError}</p>}
            {cardSuccess && <div>
                <p className='text-green-500'>{cardSuccess}</p>
                <p>Your Tranjection Id : <span className='text-indigo-600 '>{tranjectionId}</span></p>
            </div>}
        </>
    );
};

export default CheckOutForm;

