import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';

const SingleEvent = ({post,handleDelete}) => {
	const {user}=useContext(AuthContext);
    const {title,text,photo,time,_id}=post;
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col items-center justify-center p-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
		{ photo && <img src={photo} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />}
		

		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
                {title}
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
                {text}
			</p>
			{
				user?.email=='shafiul1426@gmail.com' || user?.email=='rakib4688@gmail.com' ?<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to={`/updateEvent/${_id}`}><button className="btn min-w-full bg-green-700 text-white">Update</button></Link>
				
				<button onClick={()=>handleDelete(_id)} className="btn bg-red-700 text-white">Delete</button>
		</div> : <></>
			}
			
		</div>
	</div>
</section>
    );
};

export default SingleEvent;