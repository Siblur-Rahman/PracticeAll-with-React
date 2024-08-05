
// import { useContext } from "react";
import {Link, NavLink } from "react-router-dom";
// import { AuthContext } from '../providers/AuthProvider';
import useAuth from "../hooks/useAuth";

const Header = () => {

        const {user, logOut} = useAuth()

        const handleLogOut = () =>{
            logOut()
        }


        const navLink =<>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/javascript">Javascript</NavLink></li>
            <li><NavLink to="/password">Password</NavLink></li>
            <li><NavLink to="/allitems">All Items</NavLink></li>
            {user && <>
                <li><NavLink to="/mywishlist">My WishList</NavLink></li>
                <li><NavLink to="/post">Add/Post</NavLink></li>
                <li><NavLink to={`/MyPostedItems/${user?.email}`}>My Items</NavLink></li>
                <li><a onClick={handleLogOut} className="btn btn-sm">Sign out</a></li>
            </>}            
            {!user && <>
                  <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </>}

            </>
    return (

            <div className="navbar bg-slate-500 text-white header">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">PracticAll with React</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLink}
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    
                    {
                        user && <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img alt="" src={user.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                            <li>
                            <h2 className="justify-between">
                               {
                                user.displayName
                               }
                            </h2>
                            </li>
                            {user?.role==='admin' && 
                            <li> <Link to = '/dashboard'>Dashboard</Link> </li>
                        }
                        
                        </ul>
                        </>
                    }
                </div>
            </div>
    );
};

export default Header;