
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleEvent from './SingleEvent';
import useAxiosPublic from '../Hooks/useAxiosPublic';
const FutureEvent = () => {
    const axiosPublic=useAxiosPublic();
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        axiosPublic.get('/posts')
        .then(res=>{
            console.log(res.data);
            const items=res.data;
            const future=items.filter(item=>item.time =='future');
            setPosts(future);
        })
    },[posts])
    return (
        <div className='flex gap-5 flex-col'>
            {
                posts.length ==0 && <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-5 md:py-10">No Data Found</h1>
            }
             {
                posts.map(post=><SingleEvent key={post._id} post={post}></SingleEvent>)
             }
        </div>
    );
};

export default FutureEvent;