import React, { useContext } from 'react';
import { useLocation, useNavigate , Link} from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
const GoogleLogin = () => {
    const {googleLogin}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const handleGoogleLogin=()=>{
        console.log('google login');
          googleLogin()
          .then((result) => {
            const user = result.user;
            console.log(user);
              location?.state ? navigate(location.state):navigate('/');
              navigate('/');
            }).catch((error) => {
              const errorMessage = error.message;
            });
      }
    return (
        <div className='flex justify-center items-center p-2'>
            
          <button onClick={handleGoogleLogin} className='btn bg-amber-200 text-red-600'>Sign In With Google</button>

        </div>
    );
};

export default GoogleLogin;