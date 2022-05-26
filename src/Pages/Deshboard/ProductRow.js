import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductRow = ({ setdeleteProduct, product, index }) => {


    const { name, img, price } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-15 h-14  ">
                    <img src={img} alt='product_img' />
                </div>
            </div></td>
            <td>{name}</td>
            <td>${price}</td>
            <td onClick={() => setdeleteProduct(product) } >
                <label  setdeleteProduct={setdeleteProduct} htmlFor="delete-Confirm-Modal" className="btn btn-sm border-0 bg-red-300 text-red-500  modal-button">
                    Delete <FontAwesomeIcon className='ml-2' icon={faTrashCan} />
                </label>
            </td>
        </tr>
    );
};

export default ProductRow;