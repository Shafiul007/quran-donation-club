import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const UpdateEvent = () => {
    const navigate=useNavigate();
    const axiosPublic=useAxiosPublic();
    const post=useLoaderData();
    // console.log(post);
    const {title,text,photo,time,_id}=post;
    const updatePost=(e)=>{
        e.preventDefault();
        const form=e.target;
        const title=form.title.value;
        const text=form.text.value;
        const photo=form.photo.value;
        const video=form.video.value;
        const time=form.time.value;
        const updateInfo={title,text,photo,time,video};
        console.log(updateInfo);
        axiosPublic.put(`/posts/${_id}`,updateInfo)
        .then(data=>{
            console.log(data.data);
            if(data.data.modifiedCount>0){
                Swal.fire({
                    title: "Update",
                    text: "Updated Post successfully",
                    icon: "success"
                  });
                //1 step back e jawar jonno navigate er vitor -1 dewa.
                navigate('/event');
              }
              if(data.data.modifiedCount==0){
                Swal.fire({
                    title: "Update",
                    text: "No Changes were made",
                    icon: "success"
                  });
                navigate('/event');
            }
            
        })
    }
    return (
        <div>
            <form onSubmit={updatePost} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text" name='title' placeholder={title} defaultValue={title}  className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input type="text" name='text' defaultValue={text} placeholder={text} className="input input-bordered" required />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="text" name='photo' placeholder={photo} defaultValue={photo} className="input input-bordered" />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Video</span>
                  </label>
                  <input type="text" name='video' placeholder="video url" className="input input-bordered" />
                  
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
                  <button className="btn btn-primary bg-green-800 text-white">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEvent;