import React from 'react';
import { NavLink, Outlet  } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../../Shared/Spinner';




const Deshboard = () => {

    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);

    if (loading || adminLoading) {
        return <Spinner />
    }


    return (
        <div className="drawer drawer-mobile">
            <input id="deshboard_sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="deshboard_sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
                    <li><NavLink className="mb-2" to='/deshboard'>My Profile</NavLink></li>
                    {admin === true ? "" : <li><NavLink className="mb-2" to='/deshboard/myorders'>My Orders</NavLink></li>}
                    {admin === true ? "" : <li><NavLink className="mb-2" to='/deshboard/addreview'>Add Review</NavLink></li>}
                    {admin === true && <li><NavLink className="mb-2" to='/deshboard/makeadmin'>Make Admin</NavLink></li>}
                    {admin === true && <li><NavLink className="mb-2" to='/deshboard/addproduct'>Add Product</NavLink></li>}
                </ul>
            </div>
        </div>
    );
};

export default Deshboard;