import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';
import UserRow from './UserRow';

const MakeAdmin = () => {

    const navigate = useNavigate();

    const { data: allusers, isLoading , refetch} = useQuery('users', () =>
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

    console.log(allusers)


    return (
        <div>
            <h1>All users is here{allusers?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers?.map((user, index) => <UserRow
                            key={user?._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                            ></UserRow>)
                        }    
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MakeAdmin;