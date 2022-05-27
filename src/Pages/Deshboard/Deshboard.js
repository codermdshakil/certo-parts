import React from 'react';
import { NavLink, Outlet  } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../../Shared/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faShoppingCart, faPlus, faUserPlus, faListCheck , faBarsProgress} from '@fortawesome/free-solid-svg-icons';




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
                    <li><NavLink className="mb-2 font-medium" to='/deshboard'><FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon> My Profile</NavLink></li>
                    {admin === true ? "" : <li><NavLink className="mb-2  font-medium" to='/deshboard/myorders'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Orders</NavLink></li>}
                    {admin === true ? "" : <li><NavLink className="mb-2 font-medium" to='/deshboard/addreview'> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Add Review</NavLink></li>}
                    {admin === true && <li><NavLink className="mb-2 font-medium" to='/deshboard/makeadmin'><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>Make Admin</NavLink></li>}
                    {admin === true && <li><NavLink className="mb-2 font-medium" to='/deshboard/addproduct'> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Product </NavLink></li>}
                    {admin === true && <li><NavLink className="mb-2 font-medium" to='/deshboard/manageorders'><FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>Manage Order's</NavLink></li>}
                    {admin === true && <li><NavLink className="mb-2 font-medium" to='/deshboard/manageproduct'> <FontAwesomeIcon icon={faBarsProgress}></FontAwesomeIcon>Manage Product's</NavLink></li>}
                </ul>
            </div>
        </div>
    );
};

export default Deshboard;