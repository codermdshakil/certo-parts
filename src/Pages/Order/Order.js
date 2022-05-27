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
        fetch(`https://secret-reaches-23415.herokuapp.com/parts/${productId}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Spinner />
    }

    const { _id, name, img, des, price, minQuantity, availableQuantity } = product;

    const handleUserOrder = e => {

        e.preventDefault();
        const inputvalue = e.target.quantity.value || parseFloat(minQuantity);
        const userName = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const orderQuantity = parseFloat(inputvalue);
        const productName = name;
        const productImg = img;
        const productDes = des;
        const productPrice = price;
        const productMinQuantity = minQuantity;
        const productAvailabeQuantity = availableQuantity;
        const order = { userName, email, phone, address, orderQuantity, productName, productImg, productDes, productPrice, productMinQuantity, productAvailabeQuantity };

        if (inputvalue < minQuantity) {
            document.getElementById('Order_btn').disabled = true;
            toast.error(`You have to order at least ${minQuantity} products`)
        }
        else if (inputvalue > availableQuantity) {
            document.getElementById('Order_btn').disabled = true;
            toast.error(`You can order highest ${availableQuantity} products`)
        }
        else {
            const url = `https://secret-reaches-23415.herokuapp.com/orders`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast.success(`Order ${orderQuantity} Product's Successfully`)
                        e.target.reset();
                    }
                })
        }
    }


    return (
        <div className='md:px-20 px-10 mt-20 mb-24'>
            <div className='md:flex justify-center mx-auto items-center grid grid-cols-1 '>
                <div className='lg:w-4/12 md:w-6/12 w-full   bg-white custom_shadow  mr-10 rounded-xl'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
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
                <div className='lg:w-4/12 md:w-6/12 md:mt-0 mt-16  rounded-xl custom_shadow'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1400"
                >
                    <div className='p-5'>
                        <h2 className='text-2xl font-bold text-center mb-4'>Order <span className='text-secondary'>Infomation</span></h2>
                        <form onSubmit={handleUserOrder}>
                            <div className='grid grid-cols-1 gap-3'>
                                <input type="text" name='name' value={displayName} placeholder="Name" className="input input-bordered w-full" readOnly disabled required />
                                <input type="email" name='email' placeholder="Email" value={email} className="input input-bordered w-full" readOnly disabled required />
                                <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full " required />
                                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full  mb-2 " required />
                                <h3 className='text-lg font-semibold'>Order Quantity:</h3>
                                <input type="number" name='quantity' placeholder={minQuantity} className="input input-bordered w-full mb-4 " />
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