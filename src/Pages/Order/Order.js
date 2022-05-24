import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Order = () => {

    const { productId } = useParams();

    const [user] = useAuthState(auth);
    const { email, displayName } = user;

    const { data: product, isLoading } = useQuery('product', () =>
        fetch(`http://localhost:5000/parts/${productId}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }

    const { _id, name, img, des, price, minQuantity, availableQuantity } = product;

    const handleUserOrder = e => {
        e.preventDefault()
        const inputvalue = e.target.quantity.value || parseFloat(minQuantity);

        if (inputvalue < minQuantity) {
            document.getElementById('Order_btn').disabled = true;
            toast.error(`You have to order at least ${minQuantity} products`)
        }
        else if (inputvalue > availableQuantity) {
            document.getElementById('Order_btn').disabled = true;
            toast.error(`You can order highest ${availableQuantity} products`)
        }
    }


    return (
        <div className='md:px-20 px-10 mt-20 mb-24'>
            <div className='md:flex justify-center mx-auto items-center grid grid-cols-1 '>
                <div className='lg:w-4/12 md:w-6/12 w-full  mb-16 bg-white custom_shadow  mr-10 rounded-xl'>
                    <div>
                        <img src={img} className="w-full mx-auto p-4" alt="product_image" />
                    </div>
                    <div className='p-5'>
                        <h4>id: <span className='text-slate-500 text-sm'>{_id} </span> </h4>
                        <h3 className='text-2xl font-semibold'>{name}</h3>
                        <h3 className='text-xl font-medium'>Price: <span className='font-semibold text-primary'>${price}</span></h3>
                        <h4 className='text-lg  font-medium'>MinQuantity: <span className='text-secondary font-semibold '>{minQuantity}</span></h4>
                        <h4 className='text-lg  font-medium'>AvailabeQuantity: <span className='text-accent font-semibold'>{availableQuantity}</span></h4>
                        <p>{des}</p>
                    </div>
                </div>
                <div className='lg:w-4/12 md:w-6/12 rounded-xl custom_shadow' >
                    <div className='p-5'>
                        <h2 className='text-2xl font-bold text-center mb-4'>Order <span className='text-secondary'>Infomation</span></h2>
                        <form onSubmit={handleUserOrder}>
                            <div className='grid grid-cols-1 gap-3'>
                                <input type="text" name='name' value={displayName} placeholder="Name" className="input input-bordered w-full" readOnly disabled required />
                                <input type="email" name='email' placeholder="Email" value={email} className="input input-bordered w-full" readOnly disabled required />
                                <input type="number" name='quantity' placeholder={minQuantity} className="input input-bordered w-full " />
                                <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full " required />
                                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full  mb-3 " required />
                            </div>
                            <button type='submit' id='Order_btn' className='btn w-full text-white'> Order <FontAwesomeIcon className='text-white ml-2' icon={faShoppingCart}></FontAwesomeIcon></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;