import React, { useContext } from 'react';
import Event from '../Event/Event';

const AddEvent = () => {

    return (
        <div>
              <Event></Event>
            
              {/* <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text" name='title' placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Text</span>
                  </label>
                  <input type="text" name='text' placeholder="Text" className="input input-bordered" required />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                  
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Post</button>
                </div>
            </form> */}


        </div>
    );
};

export default AddEvent;