import React from 'react'
import { Link } from 'react-router-dom'

const SingleServiceCard = () => {
  return (
   <div className='w-full lg:w-1/3 md:w-1/2 xl:w-1/4   px-4 bg-sky-400'>
         
   <div className="">
      <div className="icon text-center rounded-md">
         <i className="ri-eye-fill h3 mb-0" />
      </div>
      <div className="card-body p-0 mt-3">
         <Link to="/departments" className="">Eye Care</Link>
         <p className="text-muted mt-3">There is now an abundance of readable dummy texts required purely to fill a space.</p>
         <Link to="/departments" className="link">Read More <i className="ri-arrow-right-line align-middle" />
         </Link>
      </div>
   </div>
</div>
  )
}

export default SingleServiceCard