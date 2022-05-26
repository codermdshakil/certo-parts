import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="deshboard_sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="deshboard_sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
                    <li><NavLink className="mb-2" to='/deshboard'>My Orders</NavLink></li>
                    <li><NavLink className="mb-2" to='/deshboard/addreview'>Add Review</NavLink></li>
                    <li><NavLink className="mb-2" to='/deshboard/myprofile'>My Profile</NavLink></li>
                    <li><NavLink className="mb-2" to='/deshboard/makeadmin'>Make Admin</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Deshboard;