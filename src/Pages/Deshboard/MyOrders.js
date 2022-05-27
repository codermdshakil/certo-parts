import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderRow from './OrderRow';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyOrders = () => {

    const navigate = useNavigate();
    const [user, userLoading] = useAuthState(auth);
    const [deleteOrder, setdeleteorder] = useState(null);
    const { email, displayName } = user;

    const { data: orders, isLoading, refetch } = useQuery('signleorders', () =>
        fetch(`https://secret-reaches-23415.herokuapp.com/orders?email=${email}`, {
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

    if (isLoading || userLoading) {
        return <Spinner />
    }

    return (
        <div>
            <div>
                <h2 className='text-2xl text-center mt-6 mb-5'> <span className='text-3xl font-bold text-green-500'>{displayName} </span> Your all Orders<span className='text-primary font-bold'>({orders?.length && orders?.length})</span></h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra  w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <OrderRow
                                key={order?._id}
                                order={order}
                                index={index}
                                setdeleteorder={setdeleteorder}
                            >
                            </OrderRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteConfirmModal setdeleteorder={setdeleteorder} refetch={refetch} deleteOrder={deleteOrder}></DeleteConfirmModal>}
        </div>
    );
};

export default MyOrders;