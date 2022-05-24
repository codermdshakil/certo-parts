import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderRow from './OrderRow';

const MyOrders = () => {

    const [user, userLoading] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null);


    const { email, displayName } = user;

    const { data: orders, isLoading , refetch} = useQuery('myOrders', () =>
        fetch(`http://localhost:5000/orders?email=${email}`)
            .then(res => res.json())
    );

    console.log(orders)

    if (isLoading || userLoading) {
        return <Spinner />
    }

    return (
        <div>
            <div>
                <h2 className='text-2xl text-center mt-6 mb-5'> <span className='text-3xl font-bold text-green-500'>{displayName} </span> Your all Orders<span className='text-secondary font-bold'>({orders.length})</span></h2>
            </div>
            <div class="overflow-x-auto">
                <table class="table table-zebra  w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                setDeleteOrder={setDeleteOrder}
                            >
                            </OrderRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteConfirmModal  setDeleteOrder={setDeleteOrder} refetch={refetch} deleteOrder={deleteOrder}></DeleteConfirmModal>}
        </div>
    );
};

export default MyOrders;