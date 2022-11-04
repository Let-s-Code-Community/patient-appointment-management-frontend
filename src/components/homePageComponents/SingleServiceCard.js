import React from 'react';
import { IconContext } from 'react-icons';
import { AiFillEye } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ServiceIcon from './ServiceIcon';


const SingleServiceCard = () => {
  return (
   <div className='w-full lg:w-1/3 md:w-1/2 xl:w-1/4   px-4'>
         
   <div className="">
   <ServiceIcon >
      <AiFillEye />
   </ServiceIcon>   
      <div className="card-body p-0 mt-3">
         <Link to="/departments" className="text-xl font-semibold ">Eye Care</Link>
         <p className="mt-3 text-slate-500 text-sm ">There is now an abundance of readable dummy texts required purely to fill a space.</p>
         <Link to="/departments" className="text-indigo-400 flex items-center ">
         <div className=''>Read More</div>
         
          <IconContext.Provider value={{  className: " text-md  rounded mx-2"}}>
         <div className=" rounded-md my-4 text-lg ">
           <BsArrowRight />
         </div>
         </IconContext.Provider> 
         </Link>
      </div>
   </div>
</div>
  )
}

export default SingleServiceCard