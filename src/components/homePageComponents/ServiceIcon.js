import React from 'react'
import { IconContext } from 'react-icons'

const ServiceIcon = ( {children}) => {
  return (
   <IconContext.Provider value={{ color: "blue", className: " bg-blue-400/[.2] text-5xl p-2 rounded"}}>
   <div className=" rounded-md my-4 ">
     {children}
   </div>
   </IconContext.Provider>
  )
}

export default ServiceIcon