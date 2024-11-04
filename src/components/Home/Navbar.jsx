import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
import qdc from './../../assets/qdc.jpg'

const Navbar = () => {


  const {user,loginOut}=useContext(AuthContext);
        
      
  const handleLogout=()=>{
    Swal.fire({
      title: "Logout",
      text: "Logout successfully",
      icon: "success"
});
    loginOut()
    .then(() => {
      // Sign-out successful.
      console.log('log out successfully');
    }).catch((error) => {
      // An error happened.
    });
  }

    const navbar=<>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li>
        <details>
          <summary><NavLink to={'/event'}>Event</NavLink></summary>
          <ul className="p-2">
            <li><Link to={'/event'}>Past</Link></li>
            <li><Link to={'/event'}>Current</Link></li>
            <li><Link to={'/event'}>Future</Link></li>
          </ul>
        </details>
      </li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'/addEvent'}>Add Event</NavLink></li>

    </>
    return (
        <div className="navbar bg-green-700 bg-opacity-70 sticky top-0 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navbar}
      </ul>
    </div>
    <img src={qdc} className='w-6 md:w-8 lg:w-10 mx-3 rounded-lg' alt="" />
    <a className=" text-xl hidden md:flex">Quran Donation Club</a>
    <a className=" text-xl md:hidden tooltip tooltip-bottom"  data-tip="Quran Donation Club">QDC</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navbar}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?
      <>
      
      <p>{user?.displayName}</p>
      <button className='btn ml-1' onClick={handleLogout}>Logout</button>
      </>
      :
      <Link to={'/login'}><button className='btn btn-primary'>Login</button></Link>
    }
    
  </div>
</div>
    );
};

export default Navbar;