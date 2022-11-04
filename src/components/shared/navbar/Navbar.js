import React, { useState } from 'react';
import MobileNavLink from './MobileNavLink';
import NavCenter from './NavCenter';
import NavEnd from './NavEnd';
import NavStart from './NavStart';

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const [openNav, setOpenNav] = useState(true)
    // handle header bg by scrolling
    const handleNavBg = () => {
        if (window.scrollY > 80) {
            setNav(false);
        } else {
            setNav(true);
        }
    };
    window.addEventListener("scroll", handleNavBg);


    const links = [
        {
            id: 1,
            name: "Home",
            link: "",
        },
        {
            id: 2,
            name: "Doctors",
            link: "",
            subLinks: [
                {
                    id: 1,
                    name: "Dashboard",
                    link: "#"
                },
                {
                    id: 2,
                    name: "Appointment",
                    link: "#"
                },
                {
                    id: 3,
                    name: "Patients",
                    link: "#"
                },
                {
                    id: 4,
                    name: "Schedule timing",
                    link: "#"
                },
                {
                    id: 5,
                    name: "Invoices",
                    link: "#"
                },
                {
                    id: 6,
                    name: "Reviews",
                    link: "#"
                },
                {
                    id: 7,
                    name: "Message",
                    link: "#"
                },
                {
                    id: 8,
                    name: "Profile",
                    link: "#"
                },
                {
                    id: 9,
                    name: "Profile Settings",
                    link: "#"
                },
                {
                    id: 10,
                    name: "Chat",
                    link: "#"
                },
                {
                    id: 11,
                    name: "Login",
                    link: "#"
                },
                {
                    id: 12,
                    name: "Sign Up",
                    link: "#"
                },
                {
                    id: 13,
                    name: "Forgot password",
                    link: "#"
                },
            ]
        },
        {
            id: 3,
            name: "Patients",
            link: "",
            subLinks: [
                {
                    id: 1,
                    name: "Dashboard",
                    link: "#"
                },
                {
                    id: 2,
                    name: "Profile",
                    link: "#"
                },
                {
                    id: 3,
                    name: "Book Appointment",
                    link: "#"
                },
                {
                    id: 4,
                    name: "Invoice",
                    link: "#"
                }
            ]
        },
        {
            id: 4,
            name: "Pharmacy",
            link: "",
            subLinks: [
                {
                    id: 1,
                    name: "Pharmacy",
                    link: "#"
                },
                {
                    id: 2,
                    name: "Shop",
                    link: "#"
                },
                {
                    id: 3,
                    name: "Medicine Detail",
                    link: "#"
                },
                {
                    id: 4,
                    name: "Shop Cart",
                    link: "#"
                },
                {
                    id: 5,
                    name: "Checkout",
                    link: "#"
                },
                {
                    id: 6,
                    name: "Account",
                    link: "#"
                }
            ]
        },
        {
            id: 5,
            name: "Admin",
            link: "#"
        }
    ]

    return (
        <div className={`navbar h-[74px] bg-white lg:bg-transparent text-black/70 lg:text-white/[.7] fixed top-0 z-50 px-[10%]  ${nav || "lg:bg-[#fff] lg:text-black/70"
            } transform duration-500`}>
            {/* nav start */}
            <NavStart />
            {/* nav center */}
            <NavCenter links={links} />
            {/* nav end */}
            <NavEnd openNav={openNav} setOpenNav={setOpenNav} />
            <MobileNavLink openNav={openNav} links={links} />
        </div>
    );
};

export default Navbar;