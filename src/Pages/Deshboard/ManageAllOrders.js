import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import ManageOrderRow from './ManageOrderRow';
import DeleteOrderModal from '../../Pages/Deshboard/DeleteOrderModal';
import usePageTitle from '../../hooks/usePageTitle';



const ManageAllOrders = () => {

    const [deleteOrder, setDeleteOrder] = useState(null);

    const { data: manageAllOrders, isLoading, refetch } = useQuery('manageorder', () =>
        fetch(`https://secret-reaches-23415.herokuapp.com/allorders`)
            .then(res => res.json())
    );

    if (isLoading) {
        return <Spinner />
    }


    return (
        <div>
            {
                usePageTitle("Manage Order's")
            }
            <div className="overflow-x-auto  bg-slate-200 rounded-xl">
                <table className="table table-zebra lg:w-11/12   mx-auto custom_shadow my-10 rounded-xl w-full"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>User Name</th>
                            <th>User Phone</th>
                            <th>Product Name</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageAllOrders.map((manageOrder, index) => <ManageOrderRow
                                key={manageOrder._id}
                                index={index}
                                refetch={refetch}
                                manageOrder={manageOrder}
                                setDeleteOrder={setDeleteOrder}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteOrderModal setDeleteOrder={setDeleteOrder} deleteOrder={deleteOrder} refetch={refetch}></DeleteOrderModal>}
        </div>
    );
};

export default ManageAllOrders;