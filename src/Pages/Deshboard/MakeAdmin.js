import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import DeleteUserModal from './DeleteUserModal';
import UserRow from './UserRow';



const MakeAdmin = () => {

    const navigate = useNavigate();
    const [deleteUser, setDeleteUser] = useState(null);

    const { data: allusers, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://secret-reaches-23415.herokuapp.com/users`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
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
    );

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='lg:px-5 lg:py-7 bg-slate-200 rounded-xl h-screen'>
            <div className="overflow-x-auto ">
                <h1 className='text-center text-3xl font-semibold mb-4 text-green-500'>You can  Make an  <span className='text-indigo-600'> Admin</span></h1>
                <table className="table  table-zebra lg:w-11/12 md:w-10/12 mx-auto custom_shadow mb-10 rounded-xl w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers?.map((user, index) => <UserRow
                                key={user?._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                                setDeleteUser={setDeleteUser}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteUser && <DeleteUserModal setDeleteUser={setDeleteUser} deleteUser={deleteUser} refetch={refetch}></DeleteUserModal>}
        </div>
    );
};

export default MakeAdmin;