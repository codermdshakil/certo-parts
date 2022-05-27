import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const useAdmin = user => {

    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const email = user?.email;
        if (email) {
            const uri = `https://secret-reaches-23415.herokuapp.com/admin/${email}`;
            fetch(uri, {
                method:'GET',
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('accessToken')
                    signOut(auth);
                    return navigate('/');
                }
                return res.json();
            })
            .then(data => {
                setAdmin(data.admin)
                setAdminLoading(false)
            })
        }

    }, [user, navigate])

    return [admin, adminLoading];
};

export default useAdmin;