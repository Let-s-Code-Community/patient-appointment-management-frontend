import React from 'react';
import { FaAngleDown } from "react-icons/fa"

const NavCenter = () => {
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
        <div className="navbar-center hidden lg:flex">
            <ul className="flex space-x-9 uppercase">
                {
                    links.map(link => <li className='group flex items-center space-x-2'>
                        <a className='text-sm font-bold'>{link.name}</a>
                        <FaAngleDown className={link.subLinks ? 'block group-hover:rotate-180 duration-300' : 'hidden'} />

                        {
                            link.subLinks &&
                            <ul className='absolute top-0  text-black/70  hidden group-hover:block text-xs font-bold '>
                                <div className='mt-[74px] bg-white p-4 rounded-md space-y-4' >

                                    {
                                        link.subLinks.map(link =>
                                            <li>
                                                {link.name}
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