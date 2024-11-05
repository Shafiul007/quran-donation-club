import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleEvent from './SingleEvent';
import useAxiosPublic, { axiosPublic } from './../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Event = () => {
    const axiosPublic=useAxiosPublic();
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        axiosPublic.get('/posts')
        .then(res=>{
            setPosts(res.data)
        })
    },[posts])


    const handleDelete=id=>{
        console.log("delete",id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/posts/${id}`)
                .then(res=>{
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                    let items=res.data;
                    let remaining=items.filter(item=>item._id !== id);
                    setPosts(remaining);
                    
                })
           
            }
          });
       
    }

    return (
        <div className=' text-xl'>
             <div className='flex gap-5 flex-col'>
             {
                posts.length ==0 && <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-5 md:py-10">No Data Found</h1>
            }
             {
                posts.map(post=><SingleEvent handleDelete={handleDelete} key={post._id} post={post}></SingleEvent>)
             }
             </div>
           
        </div>
    );
};

export default Event;