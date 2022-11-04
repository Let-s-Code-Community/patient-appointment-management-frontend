import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavLink = ({ links, openNav }) => {
    return (
        <div className={`lg:hidden bg-white border-t w-screen left-0 ${openNav ? "-top-96" : "top-[74px]"} py-4  text-black absolute`}>
            <div className='flex flex-col w-full  uppercase text-sm font-semibold text-black/70'>

                {
                    links.map(link => link.subLinks ? <div key={link.id} tabIndex={0} className="collapse collapse-arrow  w-full">
                        <div className="collapse-title hover:text-accent">
                            {link.name}
                        </div>
                        <div className="collapse-content flex flex-col pl-8 text-xs gap-3 font-semibold">
                            {
                                link.subLinks.map(link => <Link key={link.id} className='hover:text-accent'>{link.name}</Link>)
                            }
                        </div>
                    </div> : <Link key={link.id} className='pl-4 hover:text-accent'>{link.name}</Link>)
                }
            </div>

        </div>
    );
};

export default MobileNavLink;