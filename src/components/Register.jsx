import React, { useContext } from 'react';
import { useLocation, useNavigate , Link} from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';
import GoogleLogin from './Social/GoogleLogin';

const Register = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const {createEmail,updateUserProfile}=useContext(AuthContext);

  const handleRegister=(e)=>{
      e.preventDefault();
      const form=new FormData(e.target);
      const email=form.get('email');
      const password=form.get('password');
      const displayName=form.get('displayName');
      const photo=form.get('photo');
      console.log(email, password, displayName);
      const data=new FormData();
      data.append('image',photo);
      console.log(data);
      fetch(`https://api.imgbb.com/1/upload?key=${image_hosting_key}`,{
        method:"POST",
        body:data,
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data.data.url);
        const photoURL=data.data.url;
        createEmail(email,password)
        .then((userCredential) => {
          console.log(userCredential);
            // Signed up 
            const user = userCredential.user;
            updateUserProfile(displayName,photoURL)
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
     
      })
      
      // const user={email, password};
      // console.log(user);
      
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
                  <span className="label-text">Photo</span>
                </label>
                {/* https://i.postimg.cc/x1MVWB5H/1677208181662.jpg */}
                <input type="file" name='photo' className="input input-bordered" required />
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