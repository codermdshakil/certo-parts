import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {

    const { email, role } = user;

    const navigate = useNavigate();


    const handleMakeAdmin = () => {
        fetch(`https://secret-reaches-23415.herokuapp.com/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error('Failed to make admin');
                    localStorage.removeItem('accessToken');
                    signOut(auth);
                    return navigate('/');
                }
                return res.json()
            })
            .then(data => {
                if (data?.modifiedCount > 0) {
                    toast.success('Successfully Made an Admin')
                    refetch()
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role ? <button onClick={handleMakeAdmin} className="btn btn-xs bg-green-500 border-0 text-white">Already Admin</button> : <button onClick={handleMakeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className='btn btn-error btn-xs'> Remove User</button></td>
        </tr>
    );
};

export default UserRow;