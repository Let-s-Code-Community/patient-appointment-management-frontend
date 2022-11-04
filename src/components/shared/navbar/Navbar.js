import React from 'react';
import NavCenter from './NavCenter';
import NavEnd from './NavEnd';
import NavStart from './NavStart';

const Navbar = () => {
    return (
        <div className="navbar h-[74px] bg-transparent text-white/[.7] fixed top-0 z-50 px-[10%]">
            {/* nav start */}
            <NavStart />
            {/* nav center */}
            <NavCenter />
            {/* nav end */}
            <NavEnd />
        </div>
    );
};

export default Navbar;