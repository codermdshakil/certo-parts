import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../../Shared/Spinner';

const MakeAdmin = () => {

    const navigate = useNavigate();

    const { data: allusers, isLoading } = useQuery('users', () =>
        fetch(`http://localhost:5000/users`, {
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
        </div>
    );
};

export default MakeAdmin;