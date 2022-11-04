import React from 'react';
import { HiBars3 } from "react-icons/hi2"
import { AiOutlineClose, AiOutlineDashboard, AiOutlineLogin, AiOutlineSetting } from "react-icons/ai"
const NavEnd = ({ setOpenNav, openNav }) => {
    return (
        <div className="navbar-end">
            {/* search button */}
            <button className="bg-accent w-10 h-10 rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>


            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-md w-52">
                    {/* profile */}
                    <div className='flex items-center gap-3'>
                        <div className="avatar">
                            <div className="w-11 rounded-full">
                                <img src="https://shreethemes.in/doctris/layouts/assets/images/doctors/01.jpg" />
                            </div>
                        </div>
                        <div className='uppercase font-bold'>
                            <h4 className='text-black/80 text-[11px]'>Calvin Carlo</h4>
                            <h5 className=' text-black/60 text-[10px]'>Orthopedic</h5>

                        </div>
                    </div>
                    <div className='flex gap-3 flex-col text-xs uppercase font-bold  items-start text-black/70 py-3'>
                        <button className='flex items-center gap-2'><AiOutlineDashboard />DASHBOARD</button>
                        <button className='flex items-center gap-2'> <AiOutlineSetting />PROFILE SETTINGS</button>
                        <button className='flex items-center gap-2 border-t w-full pt-2'><AiOutlineLogin />LOGOUT</button>
                    </div>
                </ul>
            </div>

            {/* open nav */}
            <div onClick={() => setOpenNav(!openNav)} className='lg:hidden text-4xl transform duration-300'>
                {
                    openNav ?
                        <HiBars3 />
                        : <AiOutlineClose />
                }
            </div>

        </div>
    );
};

export default NavEnd;