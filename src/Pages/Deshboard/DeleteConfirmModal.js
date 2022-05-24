import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeleteConfirmModal = ({ deleteOrder, setDeleteOrder ,refetch }) => {

    const { productName } = deleteOrder;

    const handleOrderDelete = id => {
        console.log(id);
        setDeleteOrder(null)

    }
    

    return (
        <div>
            <input type="checkbox" id="delete-Confirm-Modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-400">Are you sure you want to Delete <span className='font-bold text-lg'>{productName}!!</span></h3>
                    <p class="py-4">If you are delete this item one time it will delete permanently.If you don't want to delete click cancel or If you sure to delete then click delete button!</p>
                    <div class="modal-action">
                        <button className='btn flex items-center border-0 bg-red-300 text-red-500'  onClick={() => handleOrderDelete(deleteOrder?._id)} >DELETE <FontAwesomeIcon className='ml-2' icon={ faTrashCan }></FontAwesomeIcon></button>
                        <label for="delete-Confirm-Modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default DeleteConfirmModal;