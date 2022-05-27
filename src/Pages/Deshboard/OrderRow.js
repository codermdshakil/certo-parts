import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setdeleteorder }) => {
    const { userName, productName, productPrice} = order;


    return (
        <tr>
            <th>{index + 1}</th>
            <td className='text-md font-semibold text-sky-500'>{userName}</td>
            <td className=' font-semibold  '>{productName}</td>
            <td>
                
                {(productPrice && !order.paid)  && <Link to={`/deshboard/payment/${order._id}`}> <button className='btn btn-xs bg-green-500 text-white border-0 '>Payment</button></Link> }
                {(productPrice && order.paid)  &&  <div>
                    <p className='text-green-500 font-bold'>Paid</p>
                    <p className='font-medium'>Transaction Id is : <span className='font-medium text-indigo-700'>{order?.transactionId}</span> </p>
                </div> }
            
            </td>
            <td onClick={() => setdeleteorder(order) } >
                {order.paid ? '' : <label  setdeleteorder={setdeleteorder} htmlFor="delete-Confirm-Modal" className="btn btn-sm border-0 bg-red-300 text-red-500  modal-button"><FontAwesomeIcon   icon={faTrashCan} />
                </label>}
            </td>
        </tr>
    );
};

export default OrderRow;