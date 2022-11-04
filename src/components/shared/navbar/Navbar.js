import React, { useState } from 'react';
import NavCenter from './NavCenter';
import NavEnd from './NavEnd';
import NavStart from './NavStart';

const Navbar = () => {
    const [nav, setNav] = useState(true);
    // handle header bg by scrolling
    const handleNavBg = () => {
        if (window.scrollY > 80) {
            setNav(false);
        } else {
            setNav(true);
        }
    };
    window.addEventListener("scroll", handleNavBg);
    return (
        <div className={`navbar h-[74px] bg-transparent text-white/[.7] fixed top-0 z-50 px-[10%]  ${nav || "bg-[#fff] text-black/70"
            } transform duration-500`}>
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