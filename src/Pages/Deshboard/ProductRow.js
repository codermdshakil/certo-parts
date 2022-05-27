import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductRow = ({ setdeleteProduct, product, index }) => {

    const { name, img, price, availableQuantity } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="avatar">
                        <div class="w-16 m-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='product_img' />
                        </div>
                    </div>
                </div>
            </td>
            <td className='font-medium'>{name}</td>
            <td className='font-bold text-yellow-500'>${price}</td>
            <td className='font-bold px-16'>{availableQuantity}</td>
            <td onClick={() => setdeleteProduct(product)} >
                <label setdeleteProduct={setdeleteProduct} htmlFor="delete-Confirm-Modal" className="btn btn-sm border-0 bg-red-300 text-red-500  modal-button">
                    Delete <FontAwesomeIcon className='ml-2' icon={faTrashCan} />
                </label>
            </td>
        </tr>
    );
};

export default ProductRow;