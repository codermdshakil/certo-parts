import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderRow from './OrderRow';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import usePageTitle from '../../hooks/usePageTitle';

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
            {
                usePageTitle('Orders')
            }
            <div className="overflow-x-auto bg-slate-200 rounded-xl">
                <div>
                    <h2 className='text-xl text-center mt-6 mb-5'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1400"

                    > <span className='text-xl font-semibold text-green-500'>{displayName} Your all Orders </span> <span className='text-primary font-bold'>({orders?.length && orders?.length})</span></h2>
                </div>
                <table className="table table-zebra lg:w-10/12    mx-auto custom_shadow mb-10 rounded-xl w-full"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
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