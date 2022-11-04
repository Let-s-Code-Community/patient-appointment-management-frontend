import React from 'react';
import { FaAngleDown } from "react-icons/fa"
import { Link } from 'react-router-dom';

const NavCenter = ({ links }) => {

    return (
        <div className="navbar-center hidden lg:flex">
            <ul className="flex space-x-9 uppercase">
                {
                    links.map(link => <li key={link.id} className='group cursor-pointer hover:text-accent flex items-center space-x-2'>
                        <a className='text-sm font-bold '>{link.name}</a>
                        <FaAngleDown className={link.subLinks ? 'block group-hover:rotate-180 duration-300' : 'hidden'} />

                        {
                            link.subLinks &&
                            <ul className='absolute top-0  text-black/70  hidden group-hover:block text-xs font-bold '>
                                <div className='mt-[74px] bg-white p-4 rounded-md shadow-md space-y-4' >

                                    {
                                        link.subLinks.map(link =>
                                            <li key={link.id}>
                                                <Link className='hover:text-accent' to="">
                                                    {link.name}
                                                </Link>
                                            </li>)
                                    }
                                </div>
                            </ul>
                        }
                    </li>)
                }

            </ul>
        </div>
    );
};

export default NavCenter;