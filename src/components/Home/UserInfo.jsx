import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const UserInfo = () => {
    const {user}=useContext(AuthContext);
    return (
        <div className='flex justify-center items-center py-2'>
            <div className="card bg-base-300 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={user?.photoURL}
      alt={user?.displayName}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.displayName}</h2>
    <h2 className="card-title">{user?.email}</h2>
    <div className="flex items-center justify-center">
      <Link to={'/'}><button className="btn btn-primary">Back To Home</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default UserInfo;