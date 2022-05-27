import React from 'react';

const ManageOrderRow = ({manageOrder, index}) => {


    const {productName, userName} = manageOrder;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{userName}</td>
            {/* <td><button className='btn btn-xs bg-green-500 border-0 text-white'>Pay</button></td> */}
        </tr>
    );
};

export default ManageOrderRow;