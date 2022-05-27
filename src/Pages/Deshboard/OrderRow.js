import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setdeleteorder }) => {
    const { userName, productName, productPrice} = order;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{productName}</td>
            <td>
                
                {(productPrice && !order.paid)  && <Link to={`/deshboard/payment/${order._id}`}> <button className='btn btn-xs bg-green-500 text-white border-0 '>Payment</button></Link> }
                {(productPrice && order.paid)  &&  <span className='bg-green-500 text-white border-0 '>Paid</span> }
            
            </td>
            <td onClick={() => setdeleteorder(order) } className='flex items-center justify-around'>
                <label  setdeleteorder={setdeleteorder} htmlFor="delete-Confirm-Modal" className="btn btn-sm border-0 bg-red-300 text-red-500  modal-button">
                    Delete <FontAwesomeIcon className='ml-2' icon={faTrashCan} />
                </label>
            </td>
            
        </tr>
    );
};

export default OrderRow;