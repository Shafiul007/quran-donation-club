
// import axios from 'axios';

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from './../Context/AuthProvider';
import useAxiosPublic, { axiosPublic } from './../Hooks/useAxiosPublic';
import Swal from "sweetalert2";


const AddEvent = () => {
    const axiosPublic=useAxiosPublic();
    const {user}=useContext(AuthContext);

    const postItem=(e)=>{
      e.preventDefault();
      const form=e.target;
      const title=form.title.value;
      const text=form.text.value;
      const photo=form.photo.value;
      const time=form.time.value;
      const postInfo={title, text, photo,time};
      console.log(postInfo);
     
      if(user?.email=='shafiul1426@gmail.com' || user?.email=='asad@gmail.com' || user?.email=='rakib4688@gmail.com'){
        axiosPublic.post('/posts',postInfo)
        .then(data=>{
          const mainData=data.data;
          // console.log(mainData);
          if(mainData.insertedId){
            Swal.fire({
              title: "Post",
              text: "Posted successfully",
              icon: "success"
            });
            form.reset();
          }
        })
      }
      else{
        Swal.fire({
          title: "Alert!",
          text: "Only admin can post data",
          icon: "alert"
        });
      }

      

    }
    return (
        <div>
            
              <form onSubmit={postItem} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text" name='title' placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input type="text" name='text' placeholder="Description" className="input input-bordered" required />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required/>
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Project Time</span>
                  </label>
                  <select name="time" required> 
                      <option value="past">past</option>
                      <option value="current">current</option>
                      <option value="future">future</option>
                  </select>
                  
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Post</button>
                </div>
            </form>


        </div>
    );
};

export default AddEvent;