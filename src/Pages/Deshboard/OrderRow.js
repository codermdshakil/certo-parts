import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OrderRow = ({ order, index, setDeleteOrder }) => {

    const { userName, productName, orderQuantity} = order

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{productName}</td>
            <td>{orderQuantity}</td>
            <td onClick={() => setDeleteOrder(order) } className='flex items-center justify-around'>
                <label  setDeleteOrder={setDeleteOrder} for="delete-Confirm-Modal" class="btn btn-sm border-0 bg-red-300 text-red-500  modal-button">
                    Delete <FontAwesomeIcon className='ml-2' icon={faTrashCan} />
                </label>
            </td>
        </tr>
    );
};

export default OrderRow;