import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Shared/Spinner';
import ManageOrderRow from './ManageOrderRow';

const ManageAllOrders = () => {

    const { data: manageAllOrders, isLoading } = useQuery('manageorder', () =>
        fetch(`https://secret-reaches-23415.herokuapp.com/allorders`)
            .then(res => res.json())
    );

    if (isLoading) {
        return <Spinner />
    }




    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product Name</th>
                            <th>User Name</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageAllOrders.map((manageOrder, index) => <ManageOrderRow
                            key={manageOrder._id}
                            index={index}
                            manageOrder={manageOrder}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;