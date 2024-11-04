import React, { useContext } from 'react';
import { useLocation, useNavigate , Link} from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';
import GoogleLogin from './Social/GoogleLogin';

const Register = () => {
  const navigate=useNavigate();
  const location=useLocation();
 
  const {createEmail,updateUserProfile}=useContext(AuthContext);

  const handleRegister=(e)=>{
      e.preventDefault();
      const form=e.target;
      const email=form.email.value;
      const password=form.password.value;
      const displayName=form.displayName.value;
      const PhotoURL=form.photo.value;
      console.log(email, password, displayName);
      // const user={email, password};
      // console.log(user);
      createEmail(email,password)
      .then((userCredential) => {
        console.log(userCredential);
          // Signed up 
          const user = userCredential.user;
          updateUserProfile(displayName,PhotoURL)
          .then(()=>{
              console.log('updateUser');
          })
          .catch((err)=>{
              console.log(err);
          })
          location?.state ? navigate(location.state):navigate('/');
          navigate('/');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
  }
    return (
        <div>
        <h1 className='text-xl md:text-2xl font-bold my-2 text-center'>Register</h1>
          <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='displayName' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                {/* https://i.postimg.cc/x1MVWB5H/1677208181662.jpg */}
                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have an Account? Go To <Link to={"/login"}><span className='text-red-700 font-bold underline'>Login</span></Link> </p>
          </form>
          <GoogleLogin></GoogleLogin>
      </div>
    );
};

export default Register;