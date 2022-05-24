import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Navber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown , faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Navber = () => {


    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }


    const menuItemsDesktop = <>
        <li><NavLink to='/home'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Banner
        </NavLink></li>
        <li><a href='/home#parts'>Products</a></li>
        <div className="dropdown dropdown-hover ">
            <label tabIndex="0" > <li><a href='/home#bsummery'>Business Summary <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon></a></li></label>
            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48">
                <li><a href='/home#reviews' className='w-full'>Reviews</a></li>
                <li><a href='/home#pricing' className='w-full'>Pricing</a></li>
                <li><a href='/home#contact' className='w-full'>Contact</a></li>
                <li><a href='/home#footer' className='w-full'>Footer</a></li>
            </ul>
        </div>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        {user?.uid ? <button onClick={handleSignOut} className='btn text-white btn-secondary'>LogOut <FontAwesomeIcon className='ml-2' icon={faRightFromBracket}></FontAwesomeIcon> </button> : <li><NavLink to='/login'>Login</NavLink></li>}
    </>;
    

    const menuItemsPhone = <>
        <li><NavLink to='/home'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Banner
        </NavLink></li>
        <li><a href='/home#parts'>Products</a></li>
        <li><a href='/home#bsummery'>Business Summary </a></li>
        <li><a href='/home#reviews' className='w-full'>Reviews</a></li>
        <li><a href='/home#pricing' className='w-full'>Pricing</a></li>
        <li><a href='/home#contact' className='w-full'>Contact</a></li>
        <li><a href='/home#footer' className='w-full'>Footer</a></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        {user?.uid ? <button onClick={handleSignOut} className='btn text-white btn-secondary'>LogOut <FontAwesomeIcon className='ml-2' icon={faRightFromBracket}></FontAwesomeIcon> </button> : <li><NavLink to='/login'>Login</NavLink></li>}
    </>;




    return (
        <div className="navbar bg-slate-50 shadow-sm sticky top-0 z-40">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItemsPhone}
                    </ul>
                </div>
                <NavLink to='/'><h3 className=' text-lg lg:text-2xl py-3 font-bold text-accent lg:px-16 sm:px-5'><img src={logo} alt="Logo" /></h3></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul title='Menu' className="menu menu-horizontal p-0">
                    {menuItemsDesktop}
                </ul>
            </div>
            {/* deshboard */}
        </div>
    );
};

export default Navber;

