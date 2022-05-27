import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const DeleteProductModal = ({ deleteProduct, setdeleteProduct, refetch }) => {

    const { name } = deleteProduct;

    const navigate = useNavigate();

    
    const handleProductDelete = id => {
        const url = `https://secret-reaches-23415.herokuapp.com/parts/${id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
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
            .then(data => {
                if (data.deletedCount > 0) {
                    setdeleteProduct(null)
                    refetch();
                    toast.success(`Deleted ${name} Successfully `);
                }
                else {
                    setdeleteProduct(null)
                    toast.error(`Failed to delete ${name} `);
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="delete-Confirm-Modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-400">Are you sure you want to Delete <span className='font-bold text-lg'>{name}!!</span></h3>
                    <p className="py-4">If you are delete this item one time it will delete permanently.If you don't want to delete click cancel or If you sure to delete then click delete button!</p>
                    <div className="modal-action">
                        <button className='btn flex items-center border-0 bg-red-300 text-red-500' onClick={() => handleProductDelete(deleteProduct?._id)} >DELETE <FontAwesomeIcon className='ml-2' icon={faTrashCan}></FontAwesomeIcon></button>
                        <label htmlFor="delete-Confirm-Modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProductModal;