
// import axios from 'axios';

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from './../Context/AuthProvider';
import useAxiosPublic, { axiosPublic } from './../Hooks/useAxiosPublic';
import Swal from "sweetalert2";


const AddEvent = () => {
  const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const axiosPublic=useAxiosPublic();
    const {user}=useContext(AuthContext);
    const postItem=e=>{
      e.preventDefault();
      const mainForm=e.target;
      const form=new FormData(e.target);
      const title=form.get('title');
      const text=form.get('text');
      const photo=form.get('photo');
      const time=form.get('time');
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
        const postInfo={title,text,time,photo:data.data.url};
        if(user?.email=='shafiul1426@gmail.com' || user?.email=='asad@gmail.com' || user?.email=='rakib4688@gmail.com'){
        axiosPublic.post('/posts',postInfo)
        .then(data=>{
          const mainData=data.data;
          console.log(mainData);
          if(mainData.insertedId){
            Swal.fire({
              title: "Post",
              text: "Posted successfully",
              icon: "success"
            });
            mainForm.reset();
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
      })
    }
    // const postItem=(e)=>{
    //   e.preventDefault();
    //   const form=new FormData(e.target);
    //   const title=form.get('title');
    //   const text=form.get('text');
    //   const photo=form.get('photo');
    //   const time=form.get('time');
    //   console.log(title,text,time,photo);
    //   const data=new FormData();
    //   data.append('photo',photo);
    //   fetch("https://api.imgbb.com/1/upload?key=f78efb6f3c16a1c0400cb2f4cca75841",{
    //   method:"POST",
    //   body:data,
    //   })
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log(data.data);
        // const postInfo={title,text,time,photo};
    //   })
      
      // console.log(postInfo);
     
      // if(user?.email=='shafiul1426@gmail.com' || user?.email=='asad@gmail.com' || user?.email=='rakib4688@gmail.com'){
      //   axiosPublic.post('/posts',postInfo)
      //   .then(data=>{
      //     const mainData=data.data;
          // console.log(mainData);
      //     if(mainData.insertedId){
      //       Swal.fire({
      //         title: "Post",
      //         text: "Posted successfully",
      //         icon: "success"
      //       });
      //       form.reset();
      //     }
      //   })
      // }
      // else{
      //   Swal.fire({
      //     title: "Alert!",
      //     text: "Only admin can post data",
      //     icon: "alert"
      //   });
      // }

      

    // }
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
                 <input type="file" name='photo' required className="file-input" />
                  
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